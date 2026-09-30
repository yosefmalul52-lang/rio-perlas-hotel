import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { useLanguage } from "../../context/LanguageContext";

const COPY = {
  en: {
    eyebrow: "Join Us",
    title: "Pesach – 2027",
    subtitle: "Rio Perlas Costa Rica — Pesach Retreat",
  },
  he: {
    eyebrow: "הצטרפו אלינו",
    title: "פסח – 2027",
    subtitle: "ריו פרלס קוסטה ריקה — ריטריט פסח",
  },
} as const;

const CARDS = {
  en: [
    {
      to: "/dining",
      label: "Dining",
      detail:
        "Three full kosher meals a day, kids’ dinner, late-night BBQs, poolside treats, 24/7 tea room, and more.",
      src: "/images/pesach/elegant-dining-experience.webp",
      alt: "Kosher Pesach dining at Rio Perlas",
    },
    {
      to: "/rooms",
      label: "Accommodations",
      detail:
        "Natural, luxurious rooms that immerse you in your setting — curated for a deeply relaxing stay. See our accommodation options.",
      src: "/images/hotel-gallery/private-villa-garden-entrance.webp",
      alt: "Private villa accommodations at Rio Perlas",
    },
    {
      to: "/year-round",
      label: "Resort",
      detail:
        "Pools, tropical gardens, wellness spaces, and gathering areas across the resort.",
      src: "/images/passover/resort/pool-main-8k.jpg",
      alt: "Swimming pool surrounded by tropical gardens at Rio Perlas",
    },
    {
      to: "/contact",
      label: "Program",
      detail:
        "We’re shaping an unforgettable Pesach program. Want an early look? Reach out — we’d love to share what’s coming.",
      src: "/images/home-originals/family-hero.webp",
      alt: "Family time at a Pesach retreat in Costa Rica",
    },
  ],
  he: [
    {
      to: "/dining",
      label: "אוכל",
      detail:
        "שלוש ארוחות כשרות מלאות ביום, ארוחת ילדים, ברביקיו בלילה, פינוקים ליד הבריכה, חדר תה 24/7 ועוד.",
      src: "/images/pesach/elegant-dining-experience.webp",
      alt: "ארוחות פסח כשרות בריו פרלס",
    },
    {
      to: "/rooms",
      label: "לינה",
      detail:
        "חדרים יוקרתיים בטבע שמרגישים חלק מהסביבה — מותאמים לשהייה רגועה במיוחד. גלו את אפשרויות הלינה.",
      src: "/images/hotel-gallery/private-villa-garden-entrance.webp",
      alt: "וילות פרטיות בריו פרלס",
    },
    {
      to: "/year-round",
      label: "הריזורט",
      detail: "בריכות, גנים טרופיים, אזורי וולנס ומקומות להתכנס בכל הריזורט.",
      src: "/images/passover/resort/pool-main-8k.jpg",
      alt: "בריכת שחייה מוקפת גנים טרופיים בריו פרלס",
    },
    {
      to: "/contact",
      label: "תוכנית",
      detail:
        "אנחנו בונים תוכנית פסח מיוחדת. רוצים לשמוע מה מתגבש? צרו קשר — נשמח לשתף.",
      src: "/images/home-originals/family-hero.webp",
      alt: "זמן משפחתי בריטריט פסח בקוסטה ריקה",
    },
  ],
} as const;

export default function Pesach2027Band() {
  const { language } = useLanguage();
  const locale = language === "he" ? "he" : "en";
  const copy = COPY[locale];
  const cards = CARDS[locale];

  return (
    <section className="pura-pesach" aria-labelledby="pura-pesach-title">
      <div className="pura-pesach__inner">
        <div className="pura-pesach__intro">
          <p className="pura-pesach__eyebrow">{copy.eyebrow}</p>
          <h2 id="pura-pesach-title" className="pura-pesach__title">
            {copy.title}
          </h2>
          <p className="pura-pesach__sub">{copy.subtitle}</p>
        </div>
      </div>

      <div className="pura-pesach__grid">
        {cards.map((card) => (
          <Link key={card.label} to={card.to} className="pura-pesach__card">
            <div className="pura-pesach__photo">
              <OptimizedImage src={card.src} alt={card.alt} sizes="25vw" />
              <span className="pura-pesach__label">{card.label}</span>
            </div>
            <p className="pura-pesach__detail">{card.detail}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
