import { parseInquiryBody } from "./parseInquiry";
import { checkInquiryRateLimit } from "./rateLimit";
import { readSmtpConfigFromEnv, sendInquiryEmail } from "./sendInquiryEmail";

export type InquiryHandlerResult = {
  status: 200 | 400 | 429 | 503 | 502;
  body: { ok: true } | { error: string };
  headers?: Record<string, string>;
};

export async function handleInquirySubmission(
  body: unknown,
  clientIp: string,
): Promise<InquiryHandlerResult> {
  const rate = checkInquiryRateLimit(clientIp);
  if (!rate.allowed) {
    return {
      status: 429,
      body: { error: "rate_limited" },
      headers: rate.retryAfterSec ? { "Retry-After": String(rate.retryAfterSec) } : undefined,
    };
  }

  const parsed = parseInquiryBody(body);
  if (parsed.ok === false) {
    // Treat honeypot hits as success-looking to avoid tipping bots off,
    // but do not send mail.
    if (parsed.error === "spam") {
      return { status: 200, body: { ok: true } };
    }
    return { status: 400, body: { error: "validation" } };
  }

  const smtp = readSmtpConfigFromEnv();
  if (smtp.ok === false) {
    console.warn("[inquiries] SMTP env incomplete:", smtp.missing.join(", "));
    return { status: 503, body: { error: "not_configured" } };
  }

  // Preserve optional webhook delivery without duplicating if both are set:
  // send SMTP first (source of truth for hotel inbox), then webhook if configured.
  try {
    await sendInquiryEmail(parsed.payload, smtp.config);
  } catch {
    console.error("[inquiries] SMTP delivery failed");
    return { status: 502, body: { error: "delivery_failed" } };
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
      if (!response.ok) {
        console.error("[inquiries] webhook failed", response.status);
        // Mail already accepted — do not fail the guest submission.
      }
    } catch {
      console.error("[inquiries] webhook error");
    }
  }

  return { status: 200, body: { ok: true } };
}

export function getClientIp(headers: Headers | Record<string, string | string[] | undefined>, fallback = "unknown") {
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
