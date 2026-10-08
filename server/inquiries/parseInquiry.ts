import type { InquiryPayload, InquirySource } from "../../src/lib/homepageInquiry";
import { EMAIL_PATTERN, INQUIRY_INTERESTS, INQUIRY_SOURCES } from "../../src/lib/homepageInquiry";

const MAX_TEXT = 2000;
const MAX_SHORT = 200;

function optionalString(value: unknown, max = MAX_SHORT): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed ? trimmed : undefined;
}

function requireString(value: unknown, max = MAX_SHORT): string | undefined {
  return optionalString(value, max);
}

export type ParsedInquiry =
  | { ok: true; payload: InquiryPayload }
  | { ok: false; error: "validation" | "spam" };

export function parseInquiryBody(body: unknown): ParsedInquiry {
  const data = (body ?? {}) as Record<string, unknown>;

  // Honeypot: bots often fill hidden fields
  const honeypot = optionalString(data.website, 100);
  if (honeypot) {
    return { ok: false, error: "spam" };
  }

  const fullName = requireString(data.fullName, 120);
  const email = requireString(data.email, 180)?.toLowerCase();

  if (!fullName || !email || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "validation" };
  }

  const sourceRaw = optionalString(data.source, 64);
  const source: InquirySource = INQUIRY_SOURCES.includes(sourceRaw as InquirySource)
    ? (sourceRaw as InquirySource)
    : "website-contact";

  const interestRaw = optionalString(data.interest, 40);
  const interest = INQUIRY_INTERESTS.includes(interestRaw as (typeof INQUIRY_INTERESTS)[number])
    ? interestRaw
    : optionalString(data.interest, 40);

  const payload: InquiryPayload = {
    fullName,
    email,
    source,
    marketingConsent: data.marketingConsent === true,
  };

  const phone = optionalString(data.phone, 40);
  const country = optionalString(data.country, 80);
  const travelDates = optionalString(data.travelDates, 120);
  const checkIn = optionalString(data.checkIn, 40);
  const checkOut = optionalString(data.checkOut, 40);
  const numberOfGuests = optionalString(data.numberOfGuests ?? data.guests, 40);
  const adults = optionalString(data.adults, 20);
  const children = optionalString(data.children, 20);
  const roomPreference = optionalString(data.roomPreference, 120);
  const requirements = optionalString(data.requirements, 200);
  const specialNeeds = optionalString(data.specialNeeds, 400);
  const stayType = optionalString(data.stayType, 40);
  const message = optionalString(data.message, MAX_TEXT);

  if (phone) payload.phone = phone;
  if (country) payload.country = country;
  if (travelDates) payload.travelDates = travelDates;
  if (checkIn) payload.checkIn = checkIn;
  if (checkOut) payload.checkOut = checkOut;
  if (numberOfGuests) payload.numberOfGuests = numberOfGuests;
  if (adults) payload.adults = adults;
  if (children) payload.children = children;
  if (roomPreference) payload.roomPreference = roomPreference;
  if (requirements) payload.requirements = requirements;
  if (specialNeeds) payload.specialNeeds = specialNeeds;
  if (stayType) payload.stayType = stayType;
  if (interest) payload.interest = interest;
  if (message) payload.message = message;

  return { ok: true, payload };
}
