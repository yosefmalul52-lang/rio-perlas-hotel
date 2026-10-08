import type { InquiryPayload } from "./types";
import { SOURCE_LABELS } from "./types";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

export function buildInquiryEmail(payload: InquiryPayload): { subject: string; html: string; text: string } {
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
                ${row("Interest", typeof payload.interest === "string" ? payload.interest : undefined)}
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
