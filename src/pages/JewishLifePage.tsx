import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import ContentBlock from "../components/sections/ContentBlock";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { StaggerGroup, StaggerItem } from "../components/motion/PremiumReveal";

export default function JewishLifePage() {
  const { t, language } = useLanguage();
  const copy = t.pages.jewishLife;
  const heroImage = hotelGallery.rainforestCoveredWalkway;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
        />
        <StaggerGroup stagger={0.1} className="space-y-10 max-w-3xl mx-auto">
          {copy.sections.map((section) => (
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
