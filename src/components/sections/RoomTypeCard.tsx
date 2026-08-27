import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal, SplitImage, SplitText } from "../motion/PremiumReveal";

type RoomLayoutVariant = "tall" | "wide" | "balanced" | "portrait";

type RoomTypeCardProps = {
  name: string;
  description: string;
  includes: readonly string[];
  idealFor: string;
  image: string;
  imageSrcSet?: string;
  imageAlt: string;
  imageObjectPosition?: string;
  includesLabel: string;
  idealForLabel: string;
  reversed?: boolean;
  variant?: RoomLayoutVariant;
  eager?: boolean;
};

const imageAspect: Record<RoomLayoutVariant, string> = {
  tall: "aspect-[4/5] md:aspect-[5/6]",
  wide: "aspect-[16/11] md:aspect-[5/4]",
  balanced: "aspect-[5/4] md:aspect-[4/3]",
  portrait: "aspect-[3/4] md:aspect-[4/5]",
};

export default function RoomTypeCard({
  name,
  description,
  includes,
  idealFor,
  image,
  imageSrcSet,
  imageAlt,
  imageObjectPosition = "center center",
  includesLabel,
  idealForLabel,
  reversed = false,
  variant = "balanced",
  eager = false,
}: RoomTypeCardProps) {
  const imageSide = reversed ? "end" : "start";
  const textSide = reversed ? "start" : "end";

  return (
    <article className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-16">
      <SplitImage
        side={imageSide}
        eager={eager}
        className={`w-full lg:w-[48%] ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <ImageReveal
          eager={eager}
          className={`${imageAspect[variant]} rounded-sm overflow-hidden group`}
        >
          <OptimizedImage
            src={image}
            srcSet={imageSrcSet}
            sizes="(min-width: 1024px) 48vw, 100vw"
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: imageObjectPosition }}
          />
        </ImageReveal>
      </SplitImage>

      <SplitText
        side={textSide}
        eager={eager}
        className={`w-full lg:w-[52%] ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <FadeUp eager={eager}>
          <p className="font-label-caps text-[10px] uppercase tracking-[0.16em] text-pura-gold mb-3">
            {idealForLabel}: {idealFor}
          </p>
          <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-4xl text-primary mb-4 leading-tight">
            {name}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-7 leading-relaxed max-w-md">
            {description}
          </p>

          <div>
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted block mb-3">
              {includesLabel}
            </span>
            <ul className="space-y-2">
              {includes.slice(0, 3).map((item) => (
                <li key={item} className="text-sm text-on-surface-variant leading-relaxed flex gap-2">
                  <span className="text-pura-gold shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </SplitText>
    </article>
  );
}
