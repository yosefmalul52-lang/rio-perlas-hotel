import nodemailer from "nodemailer";
import type { InquiryPayload } from "../../src/lib/homepageInquiry";
import { buildInquiryEmail } from "./emailTemplate";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  toEmail: string;
  fromName: string;
  fromEmail: string;
};

export function readSmtpConfigFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): { ok: true; config: SmtpConfig } | { ok: false; missing: string[] } {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const password = env.SMTP_PASSWORD;
  const toEmail = (env.CONTACT_TO_EMAIL || env.SMTP_USER || "").trim();
  const fromEmail = (env.SMTP_FROM_EMAIL || env.SMTP_USER || "").trim();
  const fromName = (env.SMTP_FROM_NAME || "Rio Perlas Resort").trim();
  const port = Number(env.SMTP_PORT || 465);
  const secure =
    String(env.SMTP_SECURE ?? "true").toLowerCase() === "true" ||
    String(env.SMTP_SECURE) === "1";

  const missing: string[] = [];
  if (!host) missing.push("SMTP_HOST");
  if (!user) missing.push("SMTP_USER");
  if (!password) missing.push("SMTP_PASSWORD");
  if (!toEmail) missing.push("CONTACT_TO_EMAIL");
  if (!fromEmail) missing.push("SMTP_FROM_EMAIL/SMTP_USER");
  if (!Number.isFinite(port) || port <= 0) missing.push("SMTP_PORT");

  if (missing.length) return { ok: false, missing };

  return {
    ok: true,
    config: {
      host: host!,
      port,
      secure,
      user: user!,
      password: password!,
      toEmail,
      fromName,
      fromEmail,
    },
  };
}

export function createInquiryTransporter(config: SmtpConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });
}

export async function verifySmtpConnection(config: SmtpConfig): Promise<void> {
  const transporter = createInquiryTransporter(config);
  await transporter.verify();
}

export async function sendInquiryEmail(payload: InquiryPayload, config: SmtpConfig): Promise<void> {
  const transporter = createInquiryTransporter(config);
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
