/** Contact channels — set to true only when real details are confirmed. */
export const HAS_REAL_PHONE = true;
export const HAS_REAL_EMAIL = true;
export const HAS_REAL_WHATSAPP = false;

export const BRAND_NAME = "Rio Perlas";
export const BRAND_SHORT = "Rio Perlas";
export const BRAND_TAGLINE = "Costa Rica · Kosher Resort";

/** Canonical public origin for Open Graph / link previews. */
export const SITE_ORIGIN = "https://www.rioperlasresort.com";

/**
 * Public contact display. Homepage concierge and mailto links use these.
 * Inbound inquiries are delivered via SMTP to CONTACT_TO_EMAIL (server env).
 */
export const CONTACT_EMAIL = "info@rioperlasresort.com";

export const CONTACT_PHONES = [
  { display: "+1 862-232-4905", tel: "+18622324905" },
  { display: "+972 54-254-7404", tel: "+972542547404" },
] as const;

/** Primary phone (US) — kept for single-value call sites. */
export const CONTACT_PHONE = CONTACT_PHONES[0].display;
export const CONTACT_PHONE_TEL = CONTACT_PHONES[0].tel;

/** Transparent PNGs — brand gold (#C6B992) for light and dark surfaces. */
export const BRAND_LOGO = "/images/brand/rio-perlas-logo.png?v=2026-10-05";
export const BRAND_LOGO_LIGHT = "/images/brand/rio-perlas-logo-light.png?v=2026-10-05";
export const BRAND_LOGO_ALT = "Rio Perlas";

/** WhatsApp deep link — only used when HAS_REAL_WHATSAPP is true. */
export const WHATSAPP_URL = "https://wa.me/18622324905";

/** Site owner / rights holder */
export const COMPANY_NAME = "JT Solutions";
export const COMPANY_URL = "https://www.jt-solutions.org/";
