import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import OptimizedImage from "../components/OptimizedImage";
import HolidayInquiryForm from "../components/sections/HolidayInquiryForm";
import LuxuryImagePlaceholder from "../components/sections/LuxuryImagePlaceholder";
import {
  FadeUp,
  ImageReveal,
  SoftScale,
  SplitImage,
  SplitText,
  StaggerGroup,
  StaggerItem,
} from "../components/motion/PremiumReveal";
import { useLanguage } from "../context/LanguageContext";
import { galleryAlt, hotelGallery, type GalleryImage } from "../lib/hotelGallery";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const HERO_IMAGE = hotelGallery.kosherOutdoorDiningTerrace;
const OVERVIEW_IMAGE = hotelGallery.jungleVerandaMountainView;
const MEALS_IMAGE = hotelGallery.rainforestDiningPavilion;
const SUKKAH_IMAGE: GalleryImage = {
  src: "/images/holidays/sukkot-retreat.webp",
  alt: {
    en: "Sukkot retreat hospitality at a luxury Costa Rica mountain estate",
    he: "אירוח ריטריט סוכות באחוזה יוקרתית בהרי קוסטה ריקה",
  },
  objectPosition: "center 40%",
};
const PRAYER_IMAGE = hotelGallery.rainforestCoveredWalkway;
const CHILDREN_IMAGE = hotelGallery.tropicalPoolRetreat;
const EXCURSIONS_IMAGE = hotelGallery.tropicalJungleWaterfall;
const ADULTS_IMAGE = hotelGallery.palmCanopyEntrance;
const ROOMS_IMAGE = hotelGallery.privateVillaGardenEntrance;

type FeatureCopy = {
  eyebrow: string;
  title: string;
  body: string;
  points: readonly string[];
};

function FeatureSection({
  copy,
  image,
  language,
  reversed = false,
  muted = false,
  usePlaceholder = false,
  placeholderTitle,
  placeholderSubtitle,
}: {
  copy: FeatureCopy;
  image?: GalleryImage;
  language: "en" | "he";
  reversed?: boolean;
  muted?: boolean;
  usePlaceholder?: boolean;
  placeholderTitle?: string;
  placeholderSubtitle?: string;
}) {
  return (
    <section className={muted ? "bg-surface-container py-14 md:py-28" : "bg-surface py-14 md:py-28"}>
      <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <SplitImage side={reversed ? "end" : "start"} className="w-full lg:w-[48%]">
            <ImageReveal className="aspect-[16/11] md:aspect-[5/4] rounded-sm shadow-sm border border-surface-container-high overflow-hidden">
              {usePlaceholder || !image ? (
                <LuxuryImagePlaceholder
                  title={placeholderTitle ?? copy.title}
                  subtitle={placeholderSubtitle}
                  className="min-h-full rounded-none border-0"
                />
              ) : (
                <OptimizedImage
                  src={image.src}
                  alt={galleryAlt(image, language)}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
              )}
            </ImageReveal>
          </SplitImage>
          <SplitText side={reversed ? "start" : "end"} className="w-full lg:w-[52%]">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.eyebrow}
            </span>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">{copy.body}</p>
            <StaggerGroup stagger={0.1} className="space-y-4">
              {copy.points.map((point) => (
                <StaggerItem key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-on-surface-variant leading-relaxed">{point}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </SplitText>
        </div>
      </div>
    </section>
  );
}

export default function SukkotPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.sukkot;
  const { heroInitial, reduceMotion } = usePremiumMotion();

  return (
    <div className="bg-surface select-text">
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
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none [filter:brightness(0.88)_contrast(1.03)]"
            style={{ objectPosition: HERO_IMAGE.objectPosition }}
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] pointer-events-none overlay-olive" aria-hidden />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop pb-12 pt-28 md:py-24 text-center">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 24 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.12 }}
            className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary-fixed mb-3 block [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.28 }}
            className="font-headline-lg text-[1.75rem] sm:text-4xl md:text-headline-lg text-on-primary mb-4 leading-tight [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            initial={heroInitial({ opacity: 0, y: 24 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.45 }}
            className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed [text-shadow:0_4px_24px_rgba(1,78,80,0.45)]"
          >
            {copy.hero.body}
          </motion.p>
        </div>
      </section>

      <div className="bg-pura-bg-soft border-b border-pura-border px-5 py-3 text-center">
        <p className="font-label-caps text-[10px] uppercase tracking-[0.14em] text-primary">{copy.temporaryBanner}</p>
      </div>

      <section className="py-14 md:py-28 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <SplitImage side="start" eager className="w-full lg:w-[48%]">
            <ImageReveal eager className="aspect-[4/5] md:aspect-[5/6] rounded-sm shadow-sm border border-surface-container-high overflow-hidden">
              <OptimizedImage
                src={OVERVIEW_IMAGE.src}
                alt={galleryAlt(OVERVIEW_IMAGE, language)}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="w-full h-full object-cover"
                style={{ objectPosition: OVERVIEW_IMAGE.objectPosition }}
              />
            </ImageReveal>
          </SplitImage>
          <SplitText side="end" eager className="w-full lg:w-[52%]">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.overview.eyebrow}
            </span>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.overview.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">{copy.overview.body}</p>
            <p className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{copy.programNote}</p>
          </SplitText>
        </div>
      </section>

      <FeatureSection copy={copy.meals} image={MEALS_IMAGE} language={language} muted />
      <FeatureSection copy={copy.sukkah} image={SUKKAH_IMAGE} language={language} reversed />
      <FeatureSection copy={copy.prayer} image={PRAYER_IMAGE} language={language} muted />
      <FeatureSection copy={copy.children} image={CHILDREN_IMAGE} language={language} reversed />
      <FeatureSection copy={copy.excursions} image={EXCURSIONS_IMAGE} language={language} muted />
      <FeatureSection copy={copy.adults} image={ADULTS_IMAGE} language={language} reversed />
      <FeatureSection copy={copy.rooms} image={ROOMS_IMAGE} language={language} muted />

      <section id="sukkot-inquiry" className="py-14 md:py-28 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <FadeUp>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.chooseStay.eyebrow}
            </span>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-4 leading-tight">
              {copy.chooseStay.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{copy.chooseStay.body}</p>
          </FadeUp>
        </div>
        <div className="max-w-3xl mx-auto">
          <HolidayInquiryForm
            formId="sukkot-inquiry"
            labels={copy.form}
            dateLabels={{ checkIn: copy.chooseStay.checkIn, checkOut: copy.chooseStay.checkOut }}
            stayOptions={[
              { value: "full", label: copy.chooseStay.fullLabel, hint: copy.chooseStay.fullHint },
              { value: "custom", label: copy.chooseStay.customLabel, hint: copy.chooseStay.customHint },
            ]}
          />
        </div>
      </section>

      <section className="bg-primary-container text-on-primary py-14 md:py-24 px-5 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <SoftScale>
            <h2 className="font-headline-md text-headline-md text-on-primary mb-4">{copy.cta.title}</h2>
            <p className="font-body-md text-body-md text-on-primary/85 mb-8 leading-relaxed">{copy.cta.body}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href="#sukkot-inquiry"
                className="btn-premium-hover inline-flex w-full sm:w-auto justify-center btn-cta-on-dark px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest rounded-sm"
              >
                {copy.cta.button}
              </a>
              <Link
                to="/contact"
                className="btn-premium-hover inline-flex w-full sm:w-auto justify-center border border-on-primary/35 text-on-primary hover:bg-on-primary/10 px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest rounded-sm"
              >
                {copy.cta.secondary}
              </Link>
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
