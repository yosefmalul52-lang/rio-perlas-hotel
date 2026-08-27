import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal } from "../motion/PremiumReveal";

type PageHeroImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  variant?: "banner" | "side";
  className?: string;
};

export default function PageHeroImage({
  src,
  alt,
  objectPosition = "center center",
  variant = "banner",
  className = "",
}: PageHeroImageProps) {
  const isSide = variant === "side";

  return (
    <FadeUp eager>
      <ImageReveal
        eager
        className={[
          "overflow-hidden rounded shadow-sm border border-surface-container-high",
          isSide ? "aspect-[4/5] lg:aspect-[3/4] lg:sticky lg:top-28" : "aspect-[21/9] max-h-[420px] mb-12 md:mb-16",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          priority
          sizes={isSide ? "(min-width: 1024px) 40vw, 100vw" : "100vw"}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </ImageReveal>
    </FadeUp>
  );
}
