import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal } from "../motion/PremiumReveal";

type VisualCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  objectPosition?: string;
};

export default function VisualCard({ image, imageAlt, title, body, objectPosition = "center center" }: VisualCardProps) {
  return (
    <FadeUp>
      <article className="bg-bg-card border border-surface-container-high rounded shadow-sm overflow-hidden h-full">
        <ImageReveal className="aspect-[4/3]">
          <OptimizedImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        </ImageReveal>
        <div className="p-6">
          <h3 className="font-headline-sm text-lg text-primary mb-2">{title}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{body}</p>
        </div>
      </article>
    </FadeUp>
  );
}
