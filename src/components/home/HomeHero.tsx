import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const HERO_VIDEO = "/videos/hero-desktop-balanced.mp4";
const HERO_VIDEO_MOBILE = "/videos/hero-mobile-balanced.mp4";
const HERO_POSTER = "/videos/hero-poster.webp";
const HERO_VIDEO_MQ = "(max-width: 640px)";

function resolveHeroVideoSrc(): string {
  if (typeof window === "undefined") return HERO_VIDEO;
  return window.matchMedia(HERO_VIDEO_MQ).matches ? HERO_VIDEO_MOBILE : HERO_VIDEO;
}

const COPY = {
  en: {
    badge: "Pesach 2027 · Now Accepting Inquiries",
    title: (
      <>
        A Private Kosher
        <br />
        Retreat in the <span className="pura-hero__title-gold">Costa</span>
        <br />
        <span className="pura-hero__title-gold">Rican Highlands</span>
      </>
    ),
    body: "Kosher living, family time, and Costa Rica’s extraordinary nature — together in one refined mountain sanctuary.",
    primary: "Plan Your Stay",
    secondary: "Explore Pura Shalom",
    mediaAlt: "Private mountain cabin overlooking the Costa Rican highlands",
  },
  he: {
    badge: "פסח 2027 · מקבלים פניות",
    title: (
      <>
        ריטריט כשר פרטי
        <br />
        בהרי <span className="pura-hero__title-gold">קוסטה ריקה</span>
      </>
    ),
    body: "חיים כשרים, זמן משפחתי והטבע יוצא הדופן של קוסטה ריקה — יחד במקלט הררי מעודן.",
    primary: "תכננו את השהות",
    secondary: "גלו את פורה שלום",
    mediaAlt: "בקתה הררית פרטית עם נוף לרמות קוסטה ריקה",
  },
} as const;

type HomeHeroProps = {
  onPlanStay: () => void;
};

export default function HomeHero({ onPlanStay }: HomeHeroProps) {
  const { language } = useLanguage();
  const locale = language === "he" ? "he" : "en";
  const copy = COPY[locale];
  const reduceMotion = useReducedMotion();
  const heroSectionRef = React.useRef<HTMLElement>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  const [heroVideoSrc, setHeroVideoSrc] = React.useState(resolveHeroVideoSrc);
  const { scrollY } = useScroll();
  const mediaY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 18]);

  React.useEffect(() => {
    const mq = window.matchMedia(HERO_VIDEO_MQ);
    const update = () => setHeroVideoSrc(mq.matches ? HERO_VIDEO_MOBILE : HERO_VIDEO);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (reduceMotion) return;
    const section = heroSectionRef.current;
    const video = heroVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.2, 0.5] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion, heroVideoSrc]);

  const enter = (y: number, duration: number, delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section ref={heroSectionRef} className="pura-hero" aria-label={copy.mediaAlt}>
        <motion.div className="pura-hero__media" style={{ y: mediaY }}>
          {reduceMotion ? (
            <img
              src={HERO_POSTER}
              alt={copy.mediaAlt}
              className="pura-hero__image select-none pointer-events-none"
              decoding="sync"
              fetchPriority="high"
            />
          ) : (
            <video
              key={heroVideoSrc}
              ref={heroVideoRef}
              className="pura-hero__image select-none pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              aria-label={copy.mediaAlt}
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>
        <div className="pura-hero__overlay" aria-hidden />

        <div className="pura-hero__container">
          <div className="pura-hero__content">
            <motion.span className="pura-hero__badge" {...enter(10, 0.6, 0)}>
              {copy.badge}
            </motion.span>
            <motion.h1 className="pura-hero__title" {...enter(18, 0.75, 0.1)}>
              {copy.title}
            </motion.h1>
            <motion.p className="pura-hero__body" {...enter(12, 0.65, 0.22)}>
              {copy.body}
            </motion.p>
            <motion.div className="pura-hero__actions" {...enter(10, 0.6, 0.32)}>
              <button type="button" onClick={onPlanStay} className="pura-hero__cta pura-hero__cta--primary">
                {copy.primary}
              </button>
              <a href="#retreat-intro" className="pura-hero__cta pura-hero__cta--secondary">
                {copy.secondary}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
