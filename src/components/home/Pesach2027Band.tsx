import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { useLanguage } from "../../context/LanguageContext";

const COPY = {
  en: {
    eyebrow: "Join Us",
    title: "Pesach – 2027",
    subtitle: "Pura Shalom Costa Rica — Pesach Retreat",
  },
  he: {
    eyebrow: "הצטרפו אלינו",
    title: "פסח – 2027",
    subtitle: "פורה שלום קוסטה ריקה — ריטריט פסח",
  },
} as const;

const CARDS = {
  en: [
    {
      to: "/dining",
      label: "Dining",
      src: "/images/pesach/elegant-dining-experience.webp",
      alt: "Kosher Pesach dining at Pura Shalom",
    },
    {
      to: "/rooms",
      label: "Accommodations",
      src: "/images/hotel-gallery/private-villa-garden-entrance.webp",
      alt: "Private villa accommodations at Pura Shalom",
    },
    {
      to: "/year-round",
      label: "Resort",
      src: "/images/passover/resort/pool-main-8k.jpg",
      alt: "Swimming pool surrounded by tropical gardens at Pura Shalom",
    },
    {
      to: "/pesach#pesach-activities",
      label: "Day Camp",
      src: "/images/home-originals/family-hero.webp",
      alt: "Family time at a Pesach retreat in Costa Rica",
    },
  ],
  he: [
    {
      to: "/dining",
      label: "אוכל",
      src: "/images/pesach/elegant-dining-experience.webp",
      alt: "ארוחות פסח כשרות בפורה שלום",
    },
    {
      to: "/rooms",
      label: "לינה",
      src: "/images/hotel-gallery/private-villa-garden-entrance.webp",
      alt: "וילות פרטיות בפורה שלום",
    },
    {
      to: "/year-round",
      label: "הריזורט",
      src: "/images/passover/resort/pool-main-8k.jpg",
      alt: "בריכת שחייה מוקפת גנים טרופיים בפורה שלום",
    },
    {
      to: "/pesach#pesach-activities",
      label: "קייטנה",
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
          </Link>
        ))}
      </div>
    </section>
  );
}
