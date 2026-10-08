import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

/**
 * Self-contained Vercel Node handler.
 * Relative local imports break under package.json "type":"module" on Vercel,
 * so all inquiry logic lives in this file.
 */

export const config = {
  runtime: "nodejs",
  maxDuration: 30,
};

const INQUIRY_SOURCES = [
  "website-homepage",
  "website-contact",
  "website-contact-full",
  "website-sukkot",
  "website-pesach",
  "website-holiday",
] as const;

type InquirySource = (typeof INQUIRY_SOURCES)[number];

const INQUIRY_INTERESTS = ["pesach", "sukkot", "year-round", "family", "group", "other"] as const;

type InquiryPayload = {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  travelDates?: string;
  checkIn?: string;
  checkOut?: string;
  numberOfGuests?: string;
  adults?: string;
  children?: string;
  roomPreference?: string;
  requirements?: string;
  specialNeeds?: string;
  stayType?: string;
  interest?: string;
  message?: string;
  marketingConsent?: boolean;
  source: InquirySource;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SOURCE_LABELS: Record<InquirySource, string> = {
  "website-homepage": "Homepage inquire form",
  "website-contact": "Contact page",
  "website-contact-full": "Plan your stay form",
  "website-sukkot": "Sukkot inquiry",
  "website-pesach": "Pesach inquiry",
  "website-holiday": "Holiday inquiry",
};

const MAX_TEXT = 2000;
const MAX_SHORT = 200;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 8;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function optionalString(value: unknown, max = MAX_SHORT): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed ? trimmed : undefined;
}

function checkInquiryRateLimit(ip: string): { allowed: boolean; retryAfterSec?: number } {
  const now = Date.now();
  if (buckets.size >= 500) {
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }
  const key = ip || "unknown";
  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }
  if (existing.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }
  existing.count += 1;
  return { allowed: true };
}

function parseInquiryBody(body: unknown):
  | { ok: true; payload: InquiryPayload }
  | { ok: false; error: "validation" | "spam" } {
  const data = (body ?? {}) as Record<string, unknown>;
  if (optionalString(data.website, 100)) return { ok: false, error: "spam" };

  const fullName = optionalString(data.fullName, 120);
  const email = optionalString(data.email, 180)?.toLowerCase();
  if (!fullName || !email || !EMAIL_PATTERN.test(email)) return { ok: false, error: "validation" };

  const sourceRaw = optionalString(data.source, 64);
  const source: InquirySource = INQUIRY_SOURCES.includes(sourceRaw as InquirySource)
    ? (sourceRaw as InquirySource)
    : "website-contact";

  const interestRaw = optionalString(data.interest, 40);
  const interest = INQUIRY_INTERESTS.includes(interestRaw as (typeof INQUIRY_INTERESTS)[number])
    ? interestRaw
    : optionalString(data.interest, 40);

  const payload: InquiryPayload = {
    fullName,
    email,
    source,
    marketingConsent: data.marketingConsent === true,
  };

  const phone = optionalString(data.phone, 40);
  const country = optionalString(data.country, 80);
  const travelDates = optionalString(data.travelDates, 120);
  const checkIn = optionalString(data.checkIn, 40);
  const checkOut = optionalString(data.checkOut, 40);
  const numberOfGuests = optionalString(data.numberOfGuests ?? data.guests, 40);
  const adults = optionalString(data.adults, 20);
  const children = optionalString(data.children, 20);
  const roomPreference = optionalString(data.roomPreference, 120);
  const requirements = optionalString(data.requirements, 200);
  const specialNeeds = optionalString(data.specialNeeds, 400);
  const stayType = optionalString(data.stayType, 40);
  const message = optionalString(data.message, MAX_TEXT);

  if (phone) payload.phone = phone;
  if (country) payload.country = country;
  if (travelDates) payload.travelDates = travelDates;
  if (checkIn) payload.checkIn = checkIn;
  if (checkOut) payload.checkOut = checkOut;
  if (numberOfGuests) payload.numberOfGuests = numberOfGuests;
  if (adults) payload.adults = adults;
  if (children) payload.children = children;
  if (roomPreference) payload.roomPreference = roomPreference;
  if (requirements) payload.requirements = requirements;
  if (specialNeeds) payload.specialNeeds = specialNeeds;
  if (stayType) payload.stayType = stayType;
  if (interest) payload.interest = interest;
  if (message) payload.message = message;

  return { ok: true, payload };
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e7e2d6;width:34%;vertical-align:top;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:#8a7a55;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #e7e2d6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#1f2a24;line-height:1.5;">
        ${escapeHtml(value).replace(/\n/g, "<br/>")}
      </td>
    </tr>`;
}

function guestCount(payload: InquiryPayload): string | undefined {
  if (payload.numberOfGuests) return payload.numberOfGuests;
  const parts = [payload.adults ? `Adults: ${payload.adults}` : "", payload.children ? `Children: ${payload.children}` : ""]
    .filter(Boolean)
    .join(" · ");
  return parts || undefined;
}

function dates(payload: InquiryPayload): string | undefined {
  if (payload.travelDates) return payload.travelDates;
  if (payload.checkIn || payload.checkOut) {
    return [payload.checkIn ? `Check-in: ${payload.checkIn}` : "", payload.checkOut ? `Check-out: ${payload.checkOut}` : ""]
      .filter(Boolean)
      .join(" · ");
  }
  return undefined;
}

function buildInquiryEmail(payload: InquiryPayload): { subject: string; html: string; text: string } {
  const sourceLabel = SOURCE_LABELS[payload.source] ?? payload.source;
  const subject = `New inquiry — ${payload.fullName} (${sourceLabel})`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f1ea;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f1ea;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #ddd4c2;">
          <tr>
            <td style="background:#0D3F39;padding:28px 32px;text-align:center;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:28px;color:#C6B992;letter-spacing:0.02em;">Rio Perlas</div>
              <div style="margin-top:8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(247,243,234,0.78);">
                Costa Rica Kosher Resort · New Inquiry
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 18px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#3d4a43;line-height:1.6;">
                A guest submitted an inquiry through the website. Reply directly to this email to contact them.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${row("Guest name", payload.fullName)}
                ${row("Email", payload.email)}
                ${row("Phone", payload.phone)}
                ${row("Country", payload.country)}
                ${row("Requested dates", dates(payload))}
                ${row("Guests", guestCount(payload))}
                ${row("Room preference", payload.roomPreference)}
                ${row("Stay type", payload.stayType)}
                ${row("Interest", payload.interest)}
                ${row("Requirements", payload.requirements)}
                ${row("Special needs", payload.specialNeeds)}
                ${row("Message", payload.message)}
                ${row("Marketing consent", payload.marketingConsent === true ? "Yes" : payload.marketingConsent === false ? "No" : undefined)}
                ${row("Inquiry source", sourceLabel)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:18px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;color:#8a918c;line-height:1.5;">
                Sent automatically from rioperlasresort.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textLines = [
    "New Rio Perlas inquiry",
    `Source: ${sourceLabel}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.country ? `Country: ${payload.country}` : "",
    dates(payload) ? `Dates: ${dates(payload)}` : "",
    guestCount(payload) ? `Guests: ${guestCount(payload)}` : "",
    payload.roomPreference ? `Room: ${payload.roomPreference}` : "",
    payload.stayType ? `Stay type: ${payload.stayType}` : "",
    payload.interest ? `Interest: ${payload.interest}` : "",
    payload.requirements ? `Requirements: ${payload.requirements}` : "",
    payload.specialNeeds ? `Special needs: ${payload.specialNeeds}` : "",
    payload.message ? `Message:\n${payload.message}` : "",
    typeof payload.marketingConsent === "boolean"
      ? `Marketing consent: ${payload.marketingConsent ? "Yes" : "No"}`
      : "",
  ].filter(Boolean);

  return { subject, html, text: textLines.join("\n") };
}

function readSmtpConfigFromEnv(env: NodeJS.ProcessEnv = process.env) {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const password = env.SMTP_PASSWORD;
  const toEmail = (env.CONTACT_TO_EMAIL || env.SMTP_USER || "").trim();
  const fromEmail = (env.SMTP_FROM_EMAIL || env.SMTP_USER || "").trim();
  const fromName = (env.SMTP_FROM_NAME || "Rio Perlas Resort").trim();
  const port = Number(env.SMTP_PORT || 465);
  const secure =
    String(env.SMTP_SECURE ?? "true").toLowerCase() === "true" || String(env.SMTP_SECURE) === "1";

  const missing: string[] = [];
  if (!host) missing.push("SMTP_HOST");
  if (!user) missing.push("SMTP_USER");
  if (!password) missing.push("SMTP_PASSWORD");
  if (!toEmail) missing.push("CONTACT_TO_EMAIL");
  if (!fromEmail) missing.push("SMTP_FROM_EMAIL/SMTP_USER");
  if (!Number.isFinite(port) || port <= 0) missing.push("SMTP_PORT");
  if (missing.length) return { ok: false as const, missing };

  return {
    ok: true as const,
    config: { host: host!, port, secure, user: user!, password: password!, toEmail, fromName, fromEmail },
  };
}

async function sendInquiryEmail(
  payload: InquiryPayload,
  config: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    password: string;
    toEmail: string;
    fromName: string;
    fromEmail: string;
  },
) {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.password },
  });
  const { subject, html, text } = buildInquiryEmail(payload);
  await transporter.sendMail({
    from: `"${config.fromName}" <${config.fromEmail}>`,
    to: config.toEmail,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

function getClientIp(
  headers: Headers | Record<string, string | string[] | undefined>,
  fallback = "unknown",
) {
  const read = (name: string): string | undefined => {
    if (typeof (headers as Headers).get === "function") {
      return (headers as Headers).get(name) ?? undefined;
    }
    const value = (headers as Record<string, string | string[] | undefined>)[name];
    if (Array.isArray(value)) return value[0];
    return value;
  };
  const forwarded = read("x-forwarded-for") || read("X-Forwarded-For");
  if (forwarded) return forwarded.split(",")[0]?.trim() || fallback;
  return read("x-real-ip") || read("X-Real-Ip") || fallback;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const ip = getClientIp(req.headers, req.socket?.remoteAddress || "unknown");
  const rate = checkInquiryRateLimit(ip);
  if (!rate.allowed) {
    if (rate.retryAfterSec) res.setHeader("Retry-After", String(rate.retryAfterSec));
    return res.status(429).json({ error: "rate_limited" });
  }

  const parsed = parseInquiryBody(req.body);
  if (parsed.ok === false) {
    if (parsed.error === "spam") return res.status(200).json({ ok: true });
    return res.status(400).json({ error: "validation" });
  }

  const smtp = readSmtpConfigFromEnv();
  if (smtp.ok === false) {
    console.warn("[inquiries] SMTP env incomplete:", smtp.missing.join(", "));
    return res.status(503).json({ error: "not_configured" });
  }

  try {
    await sendInquiryEmail(parsed.payload, smtp.config);
  } catch {
    console.error("[inquiries] SMTP delivery failed");
    return res.status(502).json({ error: "delivery_failed" });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.payload),
        signal: AbortSignal.timeout(10000),
      });
      if (!response.ok) console.error("[inquiries] webhook failed", response.status);
    } catch {
      console.error("[inquiries] webhook error");
    }
  }

  return res.status(200).json({ ok: true });
}
