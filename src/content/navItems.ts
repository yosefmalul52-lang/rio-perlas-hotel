export const SITE_NAV_ITEMS = [
  { to: "/rooms", label: { en: "Accommodations", he: "לינה" } },
  { to: "/dining", label: { en: "Dining", he: "אוכל" } },
  { to: "/pesach", label: { en: "Program 2027", he: "תוכנית 2027" } },
  { to: "/year-round", label: { en: "Resort", he: "הריזורט" } },
  { to: "/contact", label: { en: "Contact Us", he: "צור קשר" } },
  { to: "/faq", label: { en: "FAQ", he: "שאלות" } },
] as const;

export type SiteNavItem = (typeof SITE_NAV_ITEMS)[number];
