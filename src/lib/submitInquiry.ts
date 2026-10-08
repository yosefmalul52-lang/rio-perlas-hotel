import type { InquiryPayload } from "./homepageInquiry";

export type SubmitInquiryResult =
  | { ok: true }
  | { ok: false; error: "validation" | "rate_limited" | "not_configured" | "delivery_failed" | "network" };

export async function submitInquiry(payload: InquiryPayload & { website?: string }): Promise<SubmitInquiryResult> {
  try {
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) return { ok: true };

    let error = "delivery_failed" as Exclude<SubmitInquiryResult, { ok: true }>["error"];
    try {
      const data = (await response.json()) as { error?: string };
      if (
        data.error === "validation" ||
        data.error === "rate_limited" ||
        data.error === "not_configured" ||
        data.error === "delivery_failed"
      ) {
        error = data.error;
      }
    } catch {
      // ignore JSON parse issues
    }
    return { ok: false, error };
  } catch {
    return { ok: false, error: "network" };
  }
}
