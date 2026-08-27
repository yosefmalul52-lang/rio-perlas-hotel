export const INQUIRY_INTERESTS = [
  "pesach",
  "sukkot",
  "year-round",
  "family",
  "group",
  "other",
] as const;

export type InquiryInterest = (typeof INQUIRY_INTERESTS)[number];

export type HomepageInquiryPayload = {
  fullName: string;
  email: string;
  phone?: string;
  travelDates?: string;
  numberOfGuests?: string;
  interest?: InquiryInterest;
  message?: string;
  marketingConsent: boolean;
  source: "website-homepage";
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
