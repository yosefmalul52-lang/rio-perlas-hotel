import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import ContentBlock from "../components/sections/ContentBlock";
import FaqAccordion from "../components/sections/FaqAccordion";
import ImageTextBlock from "../components/sections/ImageTextBlock";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import SectionIntro from "../components/sections/SectionIntro";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { StaggerGroup, StaggerItem } from "../components/motion/PremiumReveal";

export default function DiningKashrutPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.diningKashrut;
  const [standards, kitchen, shabbat, fineDining, familyDining, trust] = copy.sections;
  const heroImage = hotelGallery.rainforestDiningPavilion;
  const accentImage = hotelGallery.kosherOutdoorDiningTerrace;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
        />
        <ImageTextBlock
          image={accentImage.src}
          imageAlt={galleryAlt(accentImage, language)}
          objectPosition={accentImage.objectPosition}
          title={fineDining.title}
          body={fineDining.body}
        />
        <StaggerGroup stagger={0.1} className="space-y-10 max-w-3xl mx-auto">
          {[standards, kitchen, shabbat, familyDining, trust].map((section) => (
            <StaggerItem key={section.title}>
              <ContentBlock title={section.title} body={section.body} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-20">
          <SectionIntro eyebrow="" title={copy.faqTitle} align="center" className="mb-8" />
          <FaqAccordion items={copy.faq} />
        </div>
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} />
    </>
  );
}
