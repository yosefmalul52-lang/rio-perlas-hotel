/**
 * Safe SMTP verification for local/dev use.
 * Does not send a message — only checks auth against the mail server.
 *
 * Usage:
 *   SMTP_HOST=... SMTP_PORT=465 SMTP_SECURE=true SMTP_USER=... SMTP_PASSWORD=... CONTACT_TO_EMAIL=... \
 *   npx tsx scripts/verify-smtp.ts
 */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { readSmtpConfigFromEnv, verifySmtpConnection } from "../server/inquiries/sendInquiryEmail";

const root = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(root, "..", ".env") });
dotenv.config({ path: path.join(root, "..", ".env.local") });

async function main() {
  const smtp = readSmtpConfigFromEnv();
  if (smtp.ok === false) {
    console.error("Missing env:", smtp.missing.join(", "));
    process.exit(1);
  }

  console.log(`Verifying SMTP ${smtp.config.host}:${smtp.config.port} as ${smtp.config.user}...`);
  await verifySmtpConnection(smtp.config);
  console.log("SMTP verification succeeded.");
}

main().catch(() => {
  console.error("SMTP verification failed.");
  process.exit(1);
});
