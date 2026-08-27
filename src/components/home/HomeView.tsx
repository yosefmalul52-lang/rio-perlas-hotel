import React from "react";
import OptimizedImage from "../OptimizedImage";
import SectionCta from "../sections/SectionCta";
import HomeHero from "./HomeHero";
import HomeConciergeInquiry from "./HomeConciergeInquiry";
import Pesach2027Band from "./Pesach2027Band";
import { useLanguage } from "../../context/LanguageContext";
import {
  FadeUp,
  ImageReveal,
  SoftScale,
  StaggerGroup,
  StaggerItem,
} from "../motion/PremiumReveal";

const EXPERIENCE_IMAGE_URLS = [
  "/images/home-originals/experience-1.webp",
  "/images/home-originals/experience-2.webp",
  "/images/home-originals/experience-3.webp",
  "/images/home-originals/experience-4.webp",
] as const;

const TRUST_ICONS = [
  "/images/icons/trust-kosher.png",
  "/images/icons/trust-concierge.png",
  "/images/icons/trust-transfers.png",
  "/images/icons/trust-estate.png",
] as const;

const VALUE_ICONS = [
  "/images/icons/value-kosher-jewish-life.png",
  "/images/icons/value-mountain-hospitality.png",
  "/images/icons/value-family-retreat.png",
] as const;

type HomeViewProps = {
  onStartPlanning: () => void;
};

export default function HomeView({ onStartPlanning }: HomeViewProps) {
  const { t, language } = useLanguage();
  const home = t.pages.home;

  return (
    <div className="bg-surface select-text">
      <HomeHero onPlanStay={onStartPlanning} />

      {/* Intro — luxury kosher retreat */}
      <section
        id="retreat-intro"
        className="scroll-mt-24 py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto"
        aria-labelledby="retreat-intro-title"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <FadeUp>
            <h2 id="retreat-intro-title" className="pura-experiences__title mb-5">
              {home.intro.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {home.intro.body}
            </p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {home.intro.values.map((value, index) => (
            <StaggerItem key={value.title} className="text-center">
              <SoftScale>
                <div className="flex justify-center mb-5">
                  <img
                    src={VALUE_ICONS[index]}
                    alt=""
                    aria-hidden
                    className="pura-intro__icon h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] object-contain"
                    width={72}
                    height={72}
                    decoding="async"
                  />
                </div>
              </SoftScale>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{value.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                {value.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp delay={0.1}>
          <p className="text-center font-body-lg text-body-lg text-pura-gold italic">
            {home.intro.bridge}
          </p>
        </FadeUp>
      </section>

      <div className="pura-intro__divider" aria-hidden="true" />

      <Pesach2027Band />

      {/* Trust — details matter */}
      <section className="bg-primary-container text-on-primary pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop text-center">
          <FadeUp>
            <h2 className="pura-trust__title">
              {language === "he" ? (
                <>
                  הפרטים חשובים.{" "}
                  <span className="pura-hero__title-gold">אנחנו מתכננים אותם.</span>
                </>
              ) : (
                <>
                  The details matter.{" "}
                  <span className="pura-hero__title-gold">We plan for them.</span>
                </>
              )}
            </h2>
          </FadeUp>

          <StaggerGroup stagger={0.12} className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8">
            {t.trust.stats.map((stat, index) => (
              <StaggerItem
                key={stat.label}
                className="border-on-primary/10 border-e pe-2 sm:pe-4 last:border-e-0 last:pe-0 trust-stat-divider"
              >
                <SoftScale>
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <img
                      src={TRUST_ICONS[index]}
                      alt=""
                      aria-hidden
                      className="pura-trust__icon h-10 w-10 sm:h-14 sm:w-14 md:h-[4.5rem] md:w-[4.5rem] object-contain"
                      width={72}
                      height={72}
                      decoding="async"
                    />
                  </div>
                </SoftScale>
                <h4 className="font-headline-sm text-base sm:text-xl md:text-headline-sm text-pura-gold-soft mb-1 sm:mb-2">{stat.value}</h4>
                <p className="font-label-caps text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-on-primary leading-snug">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Experiences — adventure curated */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto" id="experiences">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="pura-experiences__title">{t.experiences.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.experiences.subtitle}</p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
          {t.experiences.cards.map((card, index) => {
            const isWide = index === 0 || index === 3;
            const titleClass =
              index === 0 || index === 3 ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm";
            const badgeClass = index === 0 || index === 3 ? "bg-pura-green" : "bg-pura-green/85";
            return (
              <StaggerItem
                key={card.title}
                className={`${isWide ? "lg:col-span-2" : ""} relative group overflow-hidden rounded shadow-lg h-[260px] sm:h-[320px] md:h-[400px]`}
              >
                <ImageReveal className="absolute inset-0 h-full w-full" innerClassName="h-full w-full">
                  <OptimizedImage
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    src={EXPERIENCE_IMAGE_URLS[index]}
                    alt={card.alt}
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-pura-green-dark/20 group-hover:bg-pura-green-dark/12 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-on-primary bento-caption pointer-events-none">
                  <span
                    className={`font-label-caps text-xs uppercase ${badgeClass} px-3 py-1 mb-2 sm:mb-3 inline-block rounded-sm text-pura-gold-soft`}
                  >
                    {card.badge}
                  </span>
                  <h3 className={`${titleClass} text-on-primary`}>{card.title}</h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeUp className="text-center">
          <SectionCta to="/costa-rica-guide" label={home.links.viewExperiences} />
        </FadeUp>
      </section>

      <div id="retreat" className="scroll-mt-24" aria-hidden />

      <HomeConciergeInquiry />
    </div>
  );
}
