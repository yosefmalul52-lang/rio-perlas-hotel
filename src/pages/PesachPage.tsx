import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeUp, SoftScale } from "../components/motion/PremiumReveal";
import { useLanguage } from "../context/LanguageContext";

export default function PesachPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.pesach;

  return (
    <div className="bg-surface select-text">
      <section className="pura-contact__hero" aria-labelledby="pesach-hero-title">
        <div className="pura-contact__hero-texture" aria-hidden />
        <div className="pura-contact__hero-content">
          <SoftScale>
            <p className="pura-contact__eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="pesach-hero-title" className="pura-contact__title">
              {copy.hero.title}
            </h1>
          </SoftScale>
        </div>
      </section>

      <section
        className="bg-surface py-16 md:py-28"
        id="pesach-activities"
        aria-labelledby="pesach-program-title"
      >
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto">
            <FadeUp eager>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary mb-3 block">
                {copy.activities.eyebrow}
              </span>
            </FadeUp>
            <FadeUp eager delay={0.06}>
              <h2
                id="pesach-program-title"
                className="font-headline-lg text-[1.75rem] sm:text-3xl md:text-headline-lg text-primary leading-tight mb-5"
              >
                {copy.activities.title}
              </h2>
            </FadeUp>
            <FadeUp eager delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                {copy.activities.body}
              </p>
            </FadeUp>
            <FadeUp eager delay={0.14}>
              <Link
                to="/contact"
                className="group/cta inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-[0.16em] text-primary border-b border-secondary pb-1.5 hover:text-pura-green-hover hover:border-pura-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pura-green/50 focus-visible:ring-offset-2"
              >
                {copy.activities.cta}
                {language === "he" ? (
                  <ArrowLeft
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:-translate-x-0.5"
                    strokeWidth={1.35}
                    aria-hidden
                  />
                ) : (
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    strokeWidth={1.35}
                    aria-hidden
                  />
                )}
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
