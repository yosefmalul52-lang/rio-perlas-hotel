import { Link } from "react-router-dom";
import { Bath, BedDouble, Building2, Hash, Trees, type LucideIcon } from "lucide-react";
import FacilityCarousel from "../components/resort/FacilityCarousel";
import { FadeUp, SoftScale } from "../components/motion/PremiumReveal";
import {
  confirmedAccommodationCategories,
  type AccommodationCategory,
  type AccommodationDetailIcon,
  type AccommodationDetailItem,
} from "../content/accommodationCategories";
import { useLanguage } from "../context/LanguageContext";

const DETAIL_ICONS: Record<AccommodationDetailIcon, LucideIcon> = {
  count: Hash,
  bed: BedDouble,
  bathroom: Bath,
  layout: Building2,
  setting: Trees,
};

function localizeCategory(category: AccommodationCategory, language: "en" | "he") {
  const localizeDetails = (items: readonly AccommodationDetailItem[]) =>
    items.map((item) => ({
      icon: item.icon,
      label: item.label[language],
    }));

  return {
    id: category.id,
    navLabel: category.navLabel[language],
    title: category.title[language],
    countLabel: category.countLabel[language],
    description: category.description[language],
    accommodationDetails: localizeDetails(category.accommodationDetails),
    verifiedFeatures: localizeDetails(category.verifiedFeatures),
    equipment: category.equipment.map((item) => item[language]),
    confirmationNote: category.confirmationNote?.[language],
    images: category.images.map((image) => ({
      src: image.src,
      alt: image.alt[language],
      objectPosition: image.objectPosition,
      width: 1200,
      height: 800,
    })),
  };
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: readonly { icon: AccommodationDetailIcon; label: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="pura-rooms__detail-block">
      <h3 className="pura-rooms__includes-label">{title}</h3>
      <ul className="pura-rooms__detail-list">
        {items.map((item) => {
          const Icon = DETAIL_ICONS[item.icon];
          return (
            <li key={item.label} className="pura-rooms__detail-item">
              <Icon className="pura-rooms__detail-icon" strokeWidth={1.4} aria-hidden />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function RoomsPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.rooms;
  const categories = confirmedAccommodationCategories.map((category) =>
    localizeCategory(category, language),
  );

  return (
    <div className="pura-rooms select-text">
      <section className="pura-rooms__hero" aria-labelledby="rooms-hero-title">
        <div className="pura-rooms__hero-texture" aria-hidden />
        <div className="pura-rooms__shell pura-rooms__hero-content">
          <SoftScale>
            {copy.hero.eyebrow ? (
              <p className="pura-rooms__eyebrow pura-rooms__eyebrow--on-teal">{copy.hero.eyebrow}</p>
            ) : null}
            <h1 id="rooms-hero-title" className="pura-rooms__hero-title">
              {copy.hero.titleLine1}
              <br />
              <span className="pura-rooms__hero-title-gold">{copy.hero.titleLine2}</span>
            </h1>
            <p className="pura-rooms__hero-body">{copy.hero.body}</p>
          </SoftScale>
        </div>
      </section>

      {categories.map((category, index) => {
        const number = String(index + 1).padStart(2, "0");
        const mediaEnd = index % 2 === 1;
        const altBand = index % 2 === 1;

        return (
          <section
            key={category.id}
            id={`room-${category.id}`}
            className={`pura-rooms__room${mediaEnd ? " pura-rooms__room--media-end" : ""}${
              altBand ? " pura-rooms__room--alt" : ""
            }`}
            aria-labelledby={`room-${category.id}-title`}
          >
            <div className="pura-rooms__shell">
              <div className="pura-rooms__room-grid">
                <div className="pura-rooms__room-media">
                  <FacilityCarousel
                    images={category.images}
                    ariaLabel={category.title}
                    eager={index === 0}
                  />
                </div>

                <div className="pura-rooms__room-copy">
                  <FadeUp eager={index === 0}>
                    <p className="pura-rooms__room-label">
                      <span>{number}</span>
                      <span aria-hidden className="pura-rooms__room-sep">
                        ·
                      </span>
                      <span>{category.countLabel}</span>
                    </p>
                  </FadeUp>
                  <FadeUp delay={0.05} eager={index === 0}>
                    <h2 id={`room-${category.id}-title`} className="pura-rooms__room-title">
                      {category.title}
                    </h2>
                  </FadeUp>
                  <FadeUp delay={0.08} eager={index === 0}>
                    <div className="pura-rooms__room-prose">
                      <p className="pura-rooms__room-body">{category.description}</p>
                    </div>
                  </FadeUp>
                  <FadeUp delay={0.12} eager={index === 0}>
                    <div className="pura-rooms__room-includes">
                      <DetailList title={copy.featuresLabel} items={category.accommodationDetails} />
                      <DetailList
                        title={copy.verifiedFeaturesLabel}
                        items={category.verifiedFeatures}
                      />
                      {category.equipment.length > 0 ? (
                        <div className="pura-rooms__detail-block">
                          <h3 className="pura-rooms__includes-label">{copy.equipmentLabel}</h3>
                          <ul className="pura-rooms__detail-list">
                            {category.equipment.map((item) => (
                              <li key={item} className="pura-rooms__detail-item">
                                <span className="pura-rooms__detail-dash" aria-hidden>
                                  —
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {category.confirmationNote ? (
                        <p className="pura-rooms__confirm-note">{category.confirmationNote}</p>
                      ) : null}
                    </div>
                  </FadeUp>
                  <FadeUp delay={0.16} eager={index === 0}>
                    <Link to="/contact" className="pura-rooms__room-cta">
                      {copy.inquireLabel}
                    </Link>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="pura-rooms__cta" aria-labelledby="rooms-cta-title">
        <div className="pura-rooms__cta-texture" aria-hidden />
        <div className="pura-rooms__shell pura-rooms__cta-inner">
          <SoftScale>
            <p className="pura-rooms__eyebrow pura-rooms__eyebrow--on-teal">{copy.cta.eyebrow}</p>
            <h2 id="rooms-cta-title" className="pura-rooms__cta-title">
              {copy.cta.title}
            </h2>
            <p className="pura-rooms__cta-body">{copy.cta.body}</p>
            <div className="pura-rooms__cta-actions">
              <Link to="/contact" className="pura-rooms__btn-gold">
                {copy.cta.button}
              </Link>
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
