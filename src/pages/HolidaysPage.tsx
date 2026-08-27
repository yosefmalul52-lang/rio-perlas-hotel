import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HolidayPathwayCard from "../components/sections/HolidayPathwayCard";
import PageCta from "../components/sections/PageCta";
import { FadeUp, StaggerGroup } from "../components/motion/PremiumReveal";
import { useLanguage } from "../context/LanguageContext";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

export default function HolidaysPage() {
  const { t } = useLanguage();
  const copy = t.pages.holidays;
  const { heroInitial, reduceMotion } = usePremiumMotion();

  return (
    <div className="bg-surface select-text">
      <section className="relative min-h-[52vh] md:min-h-[58vh] w-full flex items-end md:items-center overflow-hidden bg-primary-container">
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(1,78,80,0.16) 0%, rgba(1,78,80,0.28) 55%, rgba(1,78,80,0.42) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop pb-12 pt-28 md:py-20 text-center">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 24 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.1 }}
            className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary-fixed mb-3 block"
          >
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.25 }}
            className="font-headline-lg text-[1.75rem] sm:text-4xl md:text-headline-lg text-on-primary mb-4 leading-tight"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            initial={heroInitial({ opacity: 0, y: 24 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.4 }}
            className="font-body-lg text-body-lg text-on-primary/85 max-w-2xl mx-auto leading-relaxed"
          >
            {copy.hero.body}
          </motion.p>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <FadeUp eager>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-4 leading-tight">
              {copy.intro.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.08} eager>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{copy.intro.body}</p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <HolidayPathwayCard
            index={0}
            card={{
              to: "/pesach",
              eyebrow: copy.pathways.pesach.eyebrow,
              title: copy.pathways.pesach.title,
              body: copy.pathways.pesach.body,
              cta: copy.pathways.pesach.cta,
              image: {
                src: "/images/holidays/pesach-retreat.webp",
                alt: copy.pathways.pesach.imageAlt,
                objectPosition: "center center",
              },
            }}
          />
          <HolidayPathwayCard
            index={1}
            card={{
              to: "/sukkot",
              eyebrow: copy.pathways.sukkot.eyebrow,
              title: copy.pathways.sukkot.title,
              body: copy.pathways.sukkot.body,
              cta: copy.pathways.sukkot.cta,
              image: {
                src: "/images/holidays/sukkot-retreat.webp",
                alt: copy.pathways.sukkot.imageAlt,
                objectPosition: "center 38%",
              },
            }}
          />
          <HolidayPathwayCard
            index={2}
            card={{
              to: "/year-round",
              eyebrow: copy.pathways.yearRound.eyebrow,
              title: copy.pathways.yearRound.title,
              body: copy.pathways.yearRound.body,
              cta: copy.pathways.yearRound.cta,
              image: {
                src: "/images/holidays/year-round-stay.webp",
                alt: copy.pathways.yearRound.imageAlt,
                objectPosition: "center center",
              },
            }}
          />
        </StaggerGroup>

        <FadeUp className="text-center mt-12">
          <Link
            to="/contact"
            className="font-label-caps text-xs uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors border-b border-secondary/40 hover:border-primary pb-1"
          >
            {copy.cta.button}
          </Link>
        </FadeUp>
      </section>

      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </div>
  );
}
