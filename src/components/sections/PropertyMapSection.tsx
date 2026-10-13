import { FadeUp } from "../motion/PremiumReveal";
import { useLanguage } from "../../context/LanguageContext";

const MAP_SRC = "/images/resort/rio-perlas-property-map.jpg?v=20261013-evening";
const MAP_WIDTH = 1448;
const MAP_HEIGHT = 1086;

type PropertyMapSectionProps = {
  headingId?: string;
};

export default function PropertyMapSection({ headingId = "property-map-title" }: PropertyMapSectionProps) {
  const { t } = useLanguage();
  const copy = t.pages.rooms.propertyMap;

  return (
    <section className="pura-rooms__map" aria-labelledby={headingId}>
      <div className="pura-rooms__shell">
        <FadeUp>
          <p className="pura-rooms__eyebrow">{copy.eyebrow}</p>
          <h2 id={headingId} className="pura-rooms__map-title">
            {copy.title}
          </h2>
          <p className="pura-rooms__map-body">{copy.body}</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <figure className="pura-rooms__map-figure">
            <img
              src={MAP_SRC}
              alt={copy.imageAlt}
              className="pura-rooms__map-image"
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
