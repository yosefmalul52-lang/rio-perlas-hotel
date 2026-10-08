export const INQUIRY_SOURCES = [
  "website-homepage",
  "website-contact",
  "website-contact-full",
  "website-sukkot",
  "website-pesach",
  "website-holiday",
] as const;

export type InquirySource = (typeof INQUIRY_SOURCES)[number];

export const INQUIRY_INTERESTS = [
  "pesach",
  "sukkot",
  "year-round",
  "family",
  "group",
  "other",
] as const;

export type InquiryInterest = (typeof INQUIRY_INTERESTS)[number];

export type InquiryPayload = {
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
  interest?: InquiryInterest | string;
  message?: string;
  marketingConsent?: boolean;
  source: InquirySource;
  /** Honeypot — must stay empty */
  website?: string;
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const SOURCE_LABELS: Record<InquirySource, string> = {
  "website-homepage": "Homepage inquire form",
  "website-contact": "Contact page",
  "website-contact-full": "Plan your stay form",
  "website-sukkot": "Sukkot inquiry",
  "website-pesach": "Pesach inquiry",
  "website-holiday": "Holiday inquiry",
};
