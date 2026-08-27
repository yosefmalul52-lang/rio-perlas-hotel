import { Link } from "react-router-dom";
import { FadeUp, SoftScale } from "../components/motion/PremiumReveal";
import DiningCoverflowCarousel from "../components/sections/DiningCoverflowCarousel";
import { HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../content/brand";
import { useLanguage } from "../context/LanguageContext";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";

const CAROUSEL_IMAGES = [
  hotelGallery.indoorDiningArchedWindows,
  hotelGallery.kosherOutdoorDiningTerrace,
  {
    src: "/images/dining/tropical-cocktails-bar.jpg",
    alt: {
      en: "Tropical cocktails arranged on a marble resort bar",
      he: "קוקטיילים טרופיים על בר שיש בריזורט",
    },
  },
  {
    src: "/images/dining/iced-beverages-pitchers.jpg",
    alt: {
      en: "Iced lemonade and peach tea pitchers with fresh mint at a kosher dining service",
      he: "קנקני לימונדה ותה אפרסק עם נענע טרייה בהגשת אוכל כשרה",
    },
  },
  {
    src: "/images/dining/potato-cups-braised-beef.jpg",
    alt: {
      en: "Braised beef and caramelized onion served in roasted potato cups",
      he: "בשר בraise ובצל מקורמל מוגש בכוסות תפוחי אדמה אפויות",
    },
  },
  {
    src: "/images/dining/chicken-wraps-platter.jpg",
    alt: {
      en: "Grilled chicken wraps with peppers and herb sauce on a catering platter",
      he: "ראפים בעוף צלוי עם פלפלים ורוטב עשבי תיבול על מגש קייטרינג",
    },
  },
  {
    src: "/images/dining/plated-chicken-catering-line.jpg",
    alt: {
      en: "Rows of plated grilled chicken with green beans and roasted potatoes",
      he: "שורות של מנות עוף על הגריל עם שעועית ירוקה ותפוחי אדמה אפויים",
    },
  },
  {
    src: "/images/dining/fish-buffet-tomato-sauce.jpg",
    alt: {
      en: "White fish fillets in tomato herb sauce on a kosher buffet tray",
      he: "פילה דג לבן ברוטב עגבניות ועשבי תיבול על מגש בופה כשר",
    },
  },
] as const;

export default function KosherJewishLifePage() {
  const { t, language } = useLanguage();
  const copy = t.pages.kosherJewishLife;
  const dropCap = copy.hero.body.trim().charAt(0);
  const bodyRest = copy.hero.body.trim().slice(1);

  const slides = CAROUSEL_IMAGES.map((image) => ({
    src: image.src,
    alt: galleryAlt(image, language),
  }));

  return (
    <div className="pura-dining select-text">
      <DiningCoverflowCarousel slides={slides} label="Pura Shalom" />

      <div className="pura-dining__shell">
        <header className="pura-dining__intro">
          <FadeUp>
            <h1 className="pura-dining__title">{copy.hero.title}</h1>
          </FadeUp>
          <FadeUp delay={0.06}>
            <p className="pura-dining__lead">
              <span className="pura-dining__drop" aria-hidden>
                {dropCap}
              </span>
              <span>{bodyRest}</span>
            </p>
          </FadeUp>
        </header>

        <section className="pura-dining__offer" aria-labelledby="dining-offer-title">
          <FadeUp>
            <h2 id="dining-offer-title" className="pura-dining__offer-title">
              {copy.offer.title}
            </h2>
          </FadeUp>
          <ul className="pura-dining__offer-list">
            {copy.offer.items.map((item, index) => (
              <FadeUp key={item} delay={index * 0.04}>
                <li>{item}</li>
              </FadeUp>
            ))}
          </ul>
        </section>

        <div className="pura-dining__divider" aria-hidden />

        <section className="pura-dining__block" aria-labelledby="dining-kashrut-title">
          <FadeUp>
            <p className="pura-dining__eyebrow">{copy.kashrut.eyebrow}</p>
            <h2 id="dining-kashrut-title" className="pura-dining__heading">
              {copy.kashrut.title}
            </h2>
            <p className="pura-dining__copy">{copy.kashrut.body}</p>
          </FadeUp>
        </section>

        <div className="pura-dining__divider" aria-hidden />

        <section className="pura-dining__block" aria-labelledby="dining-diets-title">
          <FadeUp>
            <p className="pura-dining__eyebrow">{copy.diets.eyebrow}</p>
            <h2 id="dining-diets-title" className="pura-dining__heading">
              {copy.diets.title}
            </h2>
            <p className="pura-dining__copy">{copy.diets.body}</p>
            <p className="pura-dining__note">{copy.diets.note}</p>
          </FadeUp>
        </section>

        <div className="pura-dining__divider" aria-hidden />

        <section className="pura-dining__block pura-dining__block--decor" aria-labelledby="dining-decor-title">
          <FadeUp>
            <p className="pura-dining__eyebrow">{copy.decor.eyebrow}</p>
            <h2 id="dining-decor-title" className="pura-dining__heading">
              {copy.decor.title}
            </h2>
            <p className="pura-dining__copy">{copy.decor.body}</p>
          </FadeUp>
        </section>

        <div className="pura-dining__faq">
          <FadeUp>
            <Link to="/faq" className="pura-dining__faq-link">
              {copy.faqLink}
            </Link>
          </FadeUp>
        </div>
      </div>

      <section className="pura-dining__cta pura-dining__cta--outline-btn" aria-labelledby="dining-cta-title">
        <div className="pura-dining__cta-texture" aria-hidden />
        <div className="pura-dining__shell pura-dining__cta-inner">
          <SoftScale>
            <h2 id="dining-cta-title" className="pura-dining__cta-title">
              {copy.cta.title}
            </h2>
            <p className="pura-dining__cta-body">{copy.cta.body}</p>
            <div className="pura-dining__cta-actions">
              <Link to="/contact" className="pura-dining__btn-solid">
                {copy.cta.button}
              </Link>
              {HAS_REAL_WHATSAPP ? (
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pura-dining__btn-ghost">
                  {copy.cta.whatsapp}
                </a>
              ) : null}
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
