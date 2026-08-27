import { motion } from "motion/react";
import OptimizedImage from "../components/OptimizedImage";
import {
  FadeUp,
  ImageReveal,
  SplitImage,
  SplitText,
  StaggerGroup,
  StaggerItem,
} from "../components/motion/PremiumReveal";
import PageCta from "../components/sections/PageCta";
import { useLanguage } from "../context/LanguageContext";
import {
  cartagoAttractionGoogleMaps,
  cartagoAttractionImages,
  type CartagoAttractionId,
} from "../lib/cartagoAttractions";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const HERO_IMAGE = hotelGallery.tropicalJungleWaterfall;
const INTRO_IMAGE = hotelGallery.jungleVerandaMountainView;
const ROUTES_IMAGE = hotelGallery.palmCanopyEntrance;
const NATURE_IMAGE = hotelGallery.rainforestCoveredWalkway;
const FAMILIES_IMAGE = hotelGallery.tropicalPoolRetreat;

export default function CostaRicaGuidePage() {
  const { t, language } = useLanguage();
  const copy = t.pages.costaRicaGuide;
  const { heroInitial, reduceMotion } = usePremiumMotion();
  const accentBorderClass =
    language === "he"
      ? "border-r-2 border-secondary pe-5"
      : "border-l-2 border-secondary ps-5";

  return (
    <div className="bg-surface select-text">
      {/* 1. Full-bleed nature hero */}
      <section className="relative min-h-[64vh] md:min-h-[72vh] w-full flex items-end md:items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial({ scale: 1.04 })}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE }}
        >
          <OptimizedImage
            src={HERO_IMAGE.src}
            alt={galleryAlt(HERO_IMAGE, language)}
            priority
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none [filter:brightness(0.9)_contrast(1.03)]"
            style={{ objectPosition: HERO_IMAGE.objectPosition }}
          />
        </motion.div>

        <div className="absolute inset-0 z-[1] pointer-events-none overlay-olive-soft" aria-hidden />
        <div className="absolute inset-0 z-[1] pointer-events-none overlay-olive-radial" aria-hidden />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop pb-12 sm:pb-14 pt-28 sm:pt-32 md:py-20 text-center">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.15 }}
            className="font-label-caps text-[11px] sm:text-label-caps text-secondary-fixed mb-3 sm:mb-4 block tracking-[0.22em] sm:tracking-[0.28em] uppercase [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={heroInitial({ opacity: 0, y: 32, filter: "blur(6px)" })}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.3 }}
            className="font-headline-lg text-[1.75rem] sm:text-4xl md:text-headline-lg text-on-primary mb-4 sm:mb-5 max-w-3xl mx-auto leading-tight [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.5 }}
            className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.body}
          </motion.p>
        </div>
      </section>

      {/* 2. Short intro — image + text */}
      <section className="py-14 md:py-28 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <SplitImage side="start" eager className="w-full lg:w-[48%]">
            <ImageReveal eager className="aspect-[4/5] md:aspect-[5/6] rounded-sm shadow-sm border border-surface-container-high">
              <OptimizedImage
                src={INTRO_IMAGE.src}
                alt={galleryAlt(INTRO_IMAGE, language)}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-full object-cover"
                style={{ objectPosition: INTRO_IMAGE.objectPosition }}
              />
            </ImageReveal>
          </SplitImage>
          <SplitText side="end" eager className="w-full lg:w-[52%]">
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.intro.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {copy.intro.body}
            </p>
          </SplitText>
        </div>
      </section>

      {/* 3. 10 Cartago attractions — visual grid */}
      <section className="bg-surface-container py-14 md:py-28">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <FadeUp>
              <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
                {copy.attractions.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
                {copy.attractions.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {copy.attractions.body}
              </p>
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {copy.attractions.cards.map((card) => {
              const id = card.id as CartagoAttractionId;
              const imageSrc = cartagoAttractionImages[id];
              const mapsUrl = cartagoAttractionGoogleMaps[id];
              return (
                <StaggerItem key={card.id} className="h-full">
                  <article className="bg-bg-card border border-surface-container-high rounded-sm shadow-sm overflow-hidden h-full flex flex-col group">
                    <ImageReveal className="aspect-[16/11] overflow-hidden">
                      <OptimizedImage
                        src={imageSrc}
                        alt={card.title}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </ImageReveal>
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <h3 className="font-headline-sm text-lg text-primary mb-2">{card.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed mb-5 flex-1">{card.body}</p>
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted hover:text-primary transition-colors inline-flex items-center gap-1.5 mt-auto"
                      >
                        {copy.attractions.mapLinkLabel}
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <FadeUp delay={0.1}>
            <p className="mt-8 text-center text-xs text-on-surface-variant/70 tracking-wide">
              {copy.attractions.photoCredit}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 4. Routes & tours — image left, text right */}
      <section className="py-14 md:py-28 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <SplitImage side="start" className="w-full lg:w-1/2">
            <ImageReveal className="aspect-[16/11] md:aspect-[5/4] rounded-sm shadow-sm border border-surface-container-high">
              <OptimizedImage
                src={ROUTES_IMAGE.src}
                alt={galleryAlt(ROUTES_IMAGE, language)}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
                style={{ objectPosition: ROUTES_IMAGE.objectPosition }}
              />
            </ImageReveal>
          </SplitImage>
          <SplitText side="end" className="w-full lg:w-1/2">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.routes.eyebrow}
            </span>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.routes.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              {copy.routes.body}
            </p>
            <StaggerGroup stagger={0.1} className="space-y-6">
              {copy.routes.items.map((item) => (
                <StaggerItem key={item.title} className={accentBorderClass}>
                  <h3 className="font-headline-sm text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </SplitText>
        </div>
      </section>

      {/* 5. Nature — image right, text left */}
      <section className="bg-primary text-on-primary py-14 md:py-28">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
            <SplitImage side="end" className="w-full lg:w-1/2">
              <ImageReveal className="aspect-[16/11] md:aspect-[5/4] rounded-sm overflow-hidden border border-white/10">
                <OptimizedImage
                  src={NATURE_IMAGE.src}
                  alt={galleryAlt(NATURE_IMAGE, language)}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: NATURE_IMAGE.objectPosition }}
                />
              </ImageReveal>
            </SplitImage>
            <SplitText side="start" className="w-full lg:w-1/2">
              <span className="font-label-caps text-label-caps text-secondary-fixed mb-3 block uppercase tracking-widest">
                {copy.nature.eyebrow}
              </span>
              <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-on-primary mb-5 leading-tight">
                {copy.nature.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/85 leading-relaxed">
                {copy.nature.body}
              </p>
            </SplitText>
          </div>
        </div>
      </section>

      {/* 6. Families — image left, text right */}
      <section className="py-14 md:py-28 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <SplitImage side="start" className="w-full lg:w-[48%]">
            <ImageReveal className="aspect-[4/5] md:aspect-[5/6] rounded-sm shadow-sm border border-surface-container-high">
              <OptimizedImage
                src={FAMILIES_IMAGE.src}
                alt={galleryAlt(FAMILIES_IMAGE, language)}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-full object-cover"
                style={{ objectPosition: FAMILIES_IMAGE.objectPosition }}
              />
            </ImageReveal>
          </SplitImage>
          <SplitText side="end" className="w-full lg:w-[52%]">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.families.eyebrow}
            </span>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.families.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {copy.families.body}
            </p>
          </SplitText>
        </div>
      </section>

      {/* 7. Practical info before arrival */}
      <section className="bg-surface-container py-14 md:py-28">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <FadeUp>
              <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
                {copy.practical.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
                {copy.practical.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {copy.practical.body}
              </p>
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {copy.practical.items.map((item) => (
              <StaggerItem key={item.title}>
                <article className="bg-bg-card border border-surface-container-high p-5 sm:p-8 rounded-sm shadow-sm h-full">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{item.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 8. CTA → /contact */}
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </div>
  );
}
