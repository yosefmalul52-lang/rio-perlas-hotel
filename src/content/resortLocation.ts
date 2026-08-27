import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, HAS_REAL_EMAIL, HAS_REAL_PHONE } from "./brand";

/** Verified Google Maps listing for the Rio Perlas property (Pura Shalom host site). */
export const RESORT_MAP = {
  placeName: "Rio Perlas Thermal Resort & Spa",
  /** Line-by-line NAP address for contact / map block. */
  addressLines: {
    en: ["2 km west of Puente Negro", "Orosí, Cartago 30109, Costa Rica"] as const,
    he: ["2 ק״מ מערבית ל־Puente Negro", "אורוסי, קרטגו 30109, קוסטה ריקה"] as const,
  },
  address: {
    en: "2 km west of Puente Negro, Orosí, Cartago 30109, Costa Rica",
    he: "2 ק״מ מערבית ל־Puente Negro, אורוסי, קרטגו 30109, קוסטה ריקה",
  },
  /** Approximate pin matching the Google Maps place listing. */
  coordinates: {
    lat: 9.80065,
    lng: -83.886774,
  },
  /** Google Maps embed pointed at the official place listing (no API key required). */
  embedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sRio%20Perlas%20Thermal%20Resort%20%26%20Spa%2C%20Orosi%2C%20Cartago%2C%20Costa%20Rica!6i15",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rio+Perlas+Thermal+Resort+%26+Spa+Orosi+Cartago+Costa+Rica",
} as const;

export function getPublicContactChannels(fallback: { phone: string; email: string }) {
  return {
    phone: HAS_REAL_PHONE ? CONTACT_PHONE : fallback.phone,
    phoneHref: HAS_REAL_PHONE ? `tel:${CONTACT_PHONE_TEL}` : null,
    email: HAS_REAL_EMAIL ? CONTACT_EMAIL : fallback.email,
    emailHref: HAS_REAL_EMAIL ? `mailto:${CONTACT_EMAIL}` : null,
  };
}
