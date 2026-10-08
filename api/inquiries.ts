import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getClientIp, handleInquirySubmission } from "./_lib/handleInquiry";

/** Nodemailer requires the Node.js runtime (not Edge). */
export const config = {
  runtime: "nodejs",
  maxDuration: 30,
};

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
  const result = await handleInquirySubmission(req.body, ip);

  if (result.headers) {
    for (const [key, value] of Object.entries(result.headers)) {
      res.setHeader(key, value);
    }
  }

  return res.status(result.status).json(result.body);
}
