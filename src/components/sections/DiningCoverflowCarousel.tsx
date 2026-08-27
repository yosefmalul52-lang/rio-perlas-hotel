import { useId, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import OptimizedImage from "../OptimizedImage";
import { usePremiumMotion } from "../../lib/motionPresets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type DiningCarouselSlide = {
  src: string;
  alt: string;
};

type DiningCoverflowCarouselProps = {
  slides: readonly DiningCarouselSlide[];
  label?: string;
};

type SlidePair = {
  top: DiningCarouselSlide;
  bottom: DiningCarouselSlide;
};

function pairSlides(slides: readonly DiningCarouselSlide[]): SlidePair[] {
  if (slides.length === 0) return [];

  const source = slides.length % 2 === 1 ? [...slides, slides[0]] : [...slides];
  const pairs: SlidePair[] = [];

  for (let i = 0; i < source.length; i += 2) {
    pairs.push({ top: source[i], bottom: source[i + 1] });
  }

  return pairs;
}

export default function DiningCoverflowCarousel({ slides, label }: DiningCoverflowCarouselProps) {
  const uid = useId().replace(/:/g, "");
  const { reduceMotion } = usePremiumMotion();
  const prevId = `dining-prev-${uid}`;
  const nextId = `dining-next-${uid}`;
  const paginationId = `dining-pagination-${uid}`;
  const pairs = useMemo(() => pairSlides(slides), [slides]);

  if (pairs.length === 0) return null;

  return (
    <section className="pura-dining-coverflow" aria-label={label ?? "Dining gallery"}>
      {label ? <p className="pura-dining-coverflow__brand">{label}</p> : null}

      <div className="pura-dining-coverflow__frame">
        <button type="button" id={prevId} className="pura-dining-coverflow__arrow pura-dining-coverflow__arrow--prev" aria-label="Previous slide">
          <ChevronLeft strokeWidth={1.15} aria-hidden />
        </button>

        <Swiper
          className="pura-dining-coverflow__swiper"
          modules={[Navigation, Pagination, Autoplay]}
          grabCursor
          loop={pairs.length >= 3}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={10}
          speed={500}
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
          }}
          pagination={{
            el: `#${paginationId}`,
            clickable: true,
          }}
          autoplay={
            reduceMotion
              ? false
              : {
                  delay: 4000,
                  disableOnInteraction: false,
                }
          }
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {pairs.map((pair) => (
            <SwiperSlide key={`${pair.top.src}-${pair.bottom.src}`} className="pura-dining-coverflow__slide">
              <div className="pura-dining-coverflow__stack">
                <div className="pura-dining-coverflow__media">
                  <OptimizedImage
                    src={pair.top.src}
                    alt={pair.top.alt}
                    sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="pura-dining-coverflow__image"
                  />
                </div>
                <div className="pura-dining-coverflow__media">
                  <OptimizedImage
                    src={pair.bottom.src}
                    alt={pair.bottom.alt}
                    sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="pura-dining-coverflow__image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button type="button" id={nextId} className="pura-dining-coverflow__arrow pura-dining-coverflow__arrow--next" aria-label="Next slide">
          <ChevronRight strokeWidth={1.15} aria-hidden />
        </button>
      </div>

      <div id={paginationId} className="pura-dining-coverflow__pagination" />
    </section>
  );
}
