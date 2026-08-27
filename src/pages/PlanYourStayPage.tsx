import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import InquiryForm from "../components/sections/InquiryForm";
import PageHeroImage from "../components/sections/PageHeroImage";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";

export default function PlanYourStayPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.planYourStay;
  const sideImage = hotelGallery.jungleVerandaMountainView;

  return (
    <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
        <div className="order-2 lg:order-1">
          <InquiryForm labels={copy.form} />
        </div>
        <div className="order-1 lg:order-2">
          <PageHeroImage
            variant="side"
            src={sideImage.src}
            alt={galleryAlt(sideImage, language)}
            objectPosition={sideImage.objectPosition}
          />
        </div>
      </div>
    </PageShell>
  );
}
