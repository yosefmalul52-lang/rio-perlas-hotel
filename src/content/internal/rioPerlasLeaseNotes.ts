/**
 * Internal reference from the Rio Perlas lease presentation.
 * DO NOT import this module from UI pages.
 * Confirmed items may appear in public copy; needs_confirmation / internal_only must not.
 */

export type ContentStatus = "confirmed" | "needs_confirmation" | "internal_only";

export type InventoryNote = {
  id: string;
  status: ContentStatus;
  summary: string;
  reason: string;
};

export const rioPerlasLeaseInventory: InventoryNote[] = [
  {
    id: "pool-experience",
    status: "confirmed",
    summary: "Guests can spend time by the water amid tropical gardens and mountain calm.",
    reason: "Pool areas are visible on-property photos; exact thermal inventory not yet guest-approved.",
  },
  {
    id: "nature-grounds",
    status: "confirmed",
    summary: "Tropical gardens, paths, and outdoor quiet spaces are part of the stay.",
    reason: "Supported by on-site photography already in the project.",
  },
  {
    id: "gathering-spaces",
    status: "confirmed",
    summary: "Comfortable outdoor and indoor gathering spaces for families and groups.",
    reason: "Supported by existing gallery photography.",
  },
  {
    id: "location-cartago",
    status: "confirmed",
    summary: "Set in the Cartago highlands, within reach of San José and the main international airport.",
    reason: "Presentation lists Cartago-Paraiso / Orosi area; distances kept qualitative until verified.",
  },
  {
    id: "unit-counts",
    status: "needs_confirmation",
    summary: "61 units / ~120–140 guests / Junior Suites, Duplex Villas, Standard Rooms, Suite Villas, Wood Cabins.",
    reason: "Lease inventory numbers — hide exact counts until owners approve guest-facing use.",
  },
  {
    id: "thermal-pool-counts",
    status: "needs_confirmation",
    summary: "2 swimming pools (hot thermal + cold) and 6 thermal mini pools.",
    reason: "Presentation claim; spa/thermal area marked for renewal — do not publish counts yet.",
  },
  {
    id: "spa-wellness",
    status: "needs_confirmation",
    summary: "Spa center with sauna, treatment rooms, Turkish bath.",
    reason: "Marked “To be renewed” in presentation.",
  },
  {
    id: "fitness",
    status: "needs_confirmation",
    summary: "Dedicated fitness facility.",
    reason: "Not clearly confirmed as guest-ready in presentation.",
  },
  {
    id: "wifi-full-coverage",
    status: "needs_confirmation",
    summary: "WiFi covering all areas.",
    reason: "Unverified operational claim.",
  },
  {
    id: "prayer-capacity",
    status: "needs_confirmation",
    summary: "Prayer/meditation center for ~120 people.",
    reason: "Capacity and readiness need owner confirmation.",
  },
  {
    id: "conference-capacity",
    status: "needs_confirmation",
    summary: "Conference center for ~130 people.",
    reason: "Capacity needs owner confirmation.",
  },
  {
    id: "airport-distance-km",
    status: "needs_confirmation",
    summary: "About 56 km from San José airport / 35 km from San José.",
    reason: "Use qualitative location copy until travel times are verified.",
  },
  {
    id: "lake-sport-fishing",
    status: "needs_confirmation",
    summary: "Lake open to sport fishing.",
    reason: "Activity availability for Pesach guests not confirmed.",
  },
  {
    id: "bird-species-131",
    status: "needs_confirmation",
    summary: "Over 131 bird species.",
    reason: "Unverified biodiversity claim.",
  },
  {
    id: "waterfalls-on-property",
    status: "needs_confirmation",
    summary: "Waterfalls associated with Rio Perlas.",
    reason: "Do not claim waterfalls are inside resort grounds until confirmed.",
  },
  {
    id: "grupo-noiman",
    status: "internal_only",
    summary: "Grupo Noiman / Rancho Rio Perlas S.A. ownership and company ID.",
    reason: "Lease/corporate material — never guest-facing.",
  },
  {
    id: "casino",
    status: "internal_only",
    summary: "Casino license and dedicated space.",
    reason: "Not part of Pura Shalom Pesach positioning.",
  },
  {
    id: "bars-laundry-legacy-names",
    status: "internal_only",
    summary: "Four bars, laundry, legacy restaurant names, warehouse notes.",
    reason: "Lease operations / outdated branding.",
  },
];
