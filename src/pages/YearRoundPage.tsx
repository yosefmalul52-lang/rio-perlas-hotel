import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import FacilityCarousel from "../components/resort/FacilityCarousel";
import { FadeUp, ImageReveal, SoftScale } from "../components/motion/PremiumReveal";
import { useLanguage } from "../context/LanguageContext";

function FacilitySection({
  facility,
  number,
  mediaEnd,
  altBand,
}: {
  facility: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    features: readonly string[];
    images: readonly {
      src: string;
      srcSet?: string;
      alt: string;
      objectPosition?: string;
    }[];
    statusLabel?: string;
  };
  number: number;
  mediaEnd: boolean;
  altBand: boolean;
}) {
  return (
    <section
      id={`resort-${facility.id}`}
      className={`resort-facility${mediaEnd ? " resort-facility--media-end" : ""}${
        altBand ? " resort-facility--alt" : ""
      }`}
      aria-labelledby={`resort-${facility.id}-title`}
    >
      <div className="pura-resort__shell">
        <div className="resort-facility__grid">
          <div className="resort-facility__media">
            <FacilityCarousel images={facility.images} ariaLabel={facility.title} />
          </div>
          <div className="resort-facility__copy">
            <FadeUp>
              <div className="resort-facility__label-row">
                <p className="pura-resort__facility-label">
                  <span>{String(number).padStart(2, "0")}</span>
                  <span aria-hidden className="pura-resort__facility-sep">
                    ·
                  </span>
                  <span>{facility.eyebrow}</span>
                </p>
                {facility.statusLabel ? (
                  <span className="resort-facility__status">{facility.statusLabel}</span>
                ) : null}
              </div>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 id={`resort-${facility.id}-title`} className="pura-resort__facility-title">
                {facility.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="pura-resort__facility-body">{facility.description}</p>
            </FadeUp>
            {facility.features.length > 0 ? (
              <FadeUp delay={0.14}>
                <ul className="resort-facility__features">
                  {facility.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </FadeUp>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function YearRoundPage() {
  const { t } = useLanguage();
  const copy = t.pages.yearRound;
  const facilities = copy.facilities;
  const pools = facilities.find((f) => f.id === "pools");
  const spa = facilities.find((f) => f.id === "spa");
  const nature = facilities.find((f) => f.id === "nature");
  const kids = facilities.find((f) => f.id === "kids");

  return (
    <div className="pura-resort select-text">
      <section id="resort-highlights" className="pura-resort__hero pura-resort__hero--teal" aria-labelledby="resort-hero-title">
        <div className="pura-resort__hero-texture" aria-hidden />
        <div className="pura-resort__hero-content">
          <SoftScale>
            <h1 id="resort-hero-title" className="pura-resort__hero-title">
              {copy.hero.titleLine1}
              <br />
              <span className="pura-resort__hero-title-gold">{copy.hero.titleLine2}</span>
            </h1>
            <p className="pura-resort__hero-body">{copy.hero.body}</p>
            <nav className="pura-resort__hero-nav" aria-label={copy.highlights.eyebrow}>
              {copy.highlights.nav.map((item) => (
                <a key={item.id} href={`#resort-${item.target}`} className="pura-resort__hero-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </SoftScale>
        </div>
      </section>

      {pools ? <FacilitySection facility={pools} number={1} mediaEnd={false} altBand={false} /> : null}
      {spa ? <FacilitySection facility={spa} number={2} mediaEnd altBand /> : null}
      {kids ? <FacilitySection facility={kids} number={3} mediaEnd={false} altBand={false} /> : null}

      {nature && "foci" in nature && nature.foci ? (
        <section id="resort-nature" className="pura-resort__nature resort-nature" aria-labelledby="resort-nature-title">
          <div className="pura-resort__shell">
            <div className="pura-resort__nature-intro">
              <FadeUp>
                <p className="pura-resort__eyebrow">
                  <span className="resort-nature__num">04</span>
                  <span aria-hidden> · </span>
                  {nature.eyebrow}
                </p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2 id="resort-nature-title" className="pura-resort__facility-title pura-resort__facility-title--center">
                  {nature.title}
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="pura-resort__nature-lead">{nature.description}</p>
              </FadeUp>
              {nature.features.length > 0 ? (
                <FadeUp delay={0.14}>
                  <ul className="resort-facility__features resort-nature__features">
                    {nature.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </FadeUp>
              ) : null}
            </div>

            <div className="resort-nature__grid">
              {nature.foci.map((focus, focusIndex) => {
                const image = nature.images[focusIndex];
                if (!image) return null;
                return (
                  <article key={focus.title} className="resort-nature__card">
                    <ImageReveal className="resort-nature__frame">
                      <OptimizedImage
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes="(min-width: 900px) 48vw, calc(100vw - 48px)"
                        width={1600}
                        height={900}
                        alt={image.alt}
                        className="resort-nature__image"
                        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                      />
                      <div className="resort-nature__overlay" aria-hidden />
                      <div className="resort-nature__caption">
                        <h3 className="resort-nature__card-title">{focus.title}</h3>
                        <p className="resort-nature__card-body">{focus.body}</p>
                      </div>
                    </ImageReveal>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pura-resort__cta-band" aria-labelledby="resort-cta-title">
        <div className="pura-resort__cta-texture" aria-hidden />
        <div className="pura-resort__shell pura-resort__cta-inner">
          <SoftScale>
            <p className="pura-resort__eyebrow pura-resort__eyebrow--on-teal">{copy.cta.eyebrow}</p>
            <h2 id="resort-cta-title" className="pura-resort__cta-title">
              {copy.cta.title}
            </h2>
            <p className="pura-resort__cta-body">{copy.cta.body}</p>
            <div className="pura-resort__cta-actions">
              <Link to="/contact" className="pura-resort__btn-outline pura-resort__btn-outline--gold">
                {copy.cta.button}
              </Link>
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
