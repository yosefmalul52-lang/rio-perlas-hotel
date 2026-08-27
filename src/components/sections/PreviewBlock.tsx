import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { ImageReveal, SplitImage, SplitText } from "../motion/PremiumReveal";

type PreviewBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  linkTo: string;
  image: string;
  imageSrcSet?: string;
  imageAlt: string;
  reversed?: boolean;
  variant?: "default" | "muted";
};

export default function PreviewBlock({
  eyebrow,
  title,
  body,
  linkLabel,
  linkTo,
  image,
  imageSrcSet,
  imageAlt,
  reversed = false,
  variant = "default",
}: PreviewBlockProps) {
  const sectionClass = variant === "muted" ? "bg-surface-container py-20 md:py-24" : "py-20 md:py-24";
  const imageSide: "start" | "end" = reversed ? "end" : "start";
  const textSide: "start" | "end" = reversed ? "start" : "end";

  return (
    <section className={sectionClass}>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <SplitImage side={imageSide} className="w-full lg:w-1/2">
            <ImageReveal className="aspect-[4/3] rounded shadow-xl">
              <OptimizedImage
                src={image}
                srcSet={imageSrcSet}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </ImageReveal>
          </SplitImage>
          <SplitText side={textSide} className="w-full lg:w-1/2">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
              {eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-5">{title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">{body}</p>
            <Link
              to={linkTo}
              className="btn-premium-hover inline-flex font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all font-semibold uppercase"
            >
              {linkLabel}
            </Link>
          </SplitText>
        </div>
      </div>
    </section>
  );
}
