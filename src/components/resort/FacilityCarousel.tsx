import { useCallback, useEffect, useId, useRef, useState, type TouchEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import { useLanguage } from "../../context/LanguageContext";

export type FacilityImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export type FacilityCarouselProps = {
  images: readonly FacilityImage[];
  ariaLabel: string;
  /** When true, the first slide may load eagerly (above-the-fold). */
  eager?: boolean;
};

const FADE_MS = 300;
const DEFAULT_SIZES = "(min-width: 900px) 58vw, calc(100vw - 48px)";

export default function FacilityCarousel({ images, ariaLabel, eager = false }: FacilityCarouselProps) {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);
  const labelId = useId();
  const multi = images.length > 1;
  const ArrowPrev = isRtl ? ArrowRight : ArrowLeft;
  const ArrowNext = isRtl ? ArrowLeft : ArrowRight;

  const goTo = useCallback(
    (next: number) => {
      if (!multi || fading) return;
      const normalized = ((next % images.length) + images.length) % images.length;
      if (normalized === index) return;
      setPrevIndex(index);
      setIndex(normalized);
      setFading(true);
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
      fadeTimer.current = window.setTimeout(() => {
        setPrevIndex(null);
        setFading(false);
      }, FADE_MS);
    },
    [fading, images.length, index, multi],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !multi) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (isRtl) goNext();
        else goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (isRtl) goPrev();
        else goNext();
      }
    };

    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, isRtl, multi]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null || !multi) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    const swipedLeft = delta < 0;
    if (isRtl) {
      if (swipedLeft) goPrev();
      else goNext();
    } else if (swipedLeft) {
      goNext();
    } else {
      goPrev();
    }
  };

  if (images.length === 0) return null;

  const active = images[index];
  const exiting = prevIndex != null ? images[prevIndex] : null;

  return (
    <div
      ref={rootRef}
      className="resort-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      aria-labelledby={labelId}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <span id={labelId} className="sr-only">
        {ariaLabel}
      </span>

      <div className="resort-carousel__stage">
        {exiting ? (
          <div className="resort-carousel__layer" aria-hidden>
            <OptimizedImage
              className="resort-carousel__image resort-carousel__image--exit"
              src={exiting.src}
              srcSet={exiting.srcSet}
              sizes={exiting.sizes ?? DEFAULT_SIZES}
              width={exiting.width ?? 1600}
              height={exiting.height ?? 900}
              alt=""
              loading="lazy"
              style={exiting.objectPosition ? { objectPosition: exiting.objectPosition } : undefined}
            />
          </div>
        ) : null}

        <div className="resort-carousel__layer">
          <OptimizedImage
            className={`resort-carousel__image${fading ? " resort-carousel__image--enter" : ""}`}
            src={active.src}
            srcSet={active.srcSet}
            sizes={active.sizes ?? DEFAULT_SIZES}
            width={active.width ?? 1600}
            height={active.height ?? 900}
            alt={active.alt}
            priority={eager && index === 0}
            loading={eager && index === 0 ? "eager" : "lazy"}
            style={active.objectPosition ? { objectPosition: active.objectPosition } : undefined}
          />
        </div>

        {multi ? (
          <>
            <button
              type="button"
              className="resort-carousel__nav resort-carousel__nav--prev"
              onClick={goPrev}
              aria-label={isRtl ? "התמונה הקודמת" : "Previous image"}
            >
              <ArrowPrev className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              className="resort-carousel__nav resort-carousel__nav--next"
              onClick={goNext}
              aria-label={isRtl ? "התמונה הבאה" : "Next image"}
            >
              <ArrowNext className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </button>

            <div className="resort-carousel__meta">
              <span className="resort-carousel__counter" aria-live="polite">
                {index + 1} / {images.length}
              </span>
              <div className="resort-carousel__dots" role="tablist" aria-label={ariaLabel}>
                {images.map((image, i) => (
                  <button
                    key={`${image.src}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={
                      isRtl ? `תמונה ${i + 1} מתוך ${images.length}` : `Image ${i + 1} of ${images.length}`
                    }
                    className={`resort-carousel__dot${i === index ? " is-active" : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
