import { Fragment } from "react";
import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import ContentBlock from "../components/sections/ContentBlock";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import VisualCard from "../components/sections/VisualCard";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { StaggerGroup, StaggerItem } from "../components/motion/PremiumReveal";

export default function ExperiencesPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.experiences;
  const [nature, excursions, family, wellness, privateExp, concierge] = copy.sections;
  const heroImage = hotelGallery.tropicalJungleWaterfall;

  const visualHighlights = [
    { section: nature, image: hotelGallery.jungleVerandaMountainView },
    { section: excursions, image: hotelGallery.tropicalResortArrival },
    { section: family, image: hotelGallery.tropicalPoolRetreat },
  ];

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {visualHighlights.map((item) => (
            <Fragment key={item.section.title}>
              <VisualCard
                image={item.image.src}
                imageAlt={galleryAlt(item.image, language)}
                objectPosition={item.image.objectPosition}
                title={item.section.title}
                body={item.section.body}
              />
            </Fragment>
          ))}
        </div>
        <StaggerGroup stagger={0.1} className="space-y-10 max-w-3xl mx-auto">
          {[wellness, privateExp, concierge].map((section) => (
            <StaggerItem key={section.title}>
              <ContentBlock title={section.title} body={section.body} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} />
    </>
  );
}
