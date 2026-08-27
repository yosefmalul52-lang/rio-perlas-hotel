import type { ReactNode } from "react";
import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal, SplitImage, SplitText } from "../motion/PremiumReveal";

type ImageTextBlockProps = {
  image: string;
  imageAlt: string;
  objectPosition?: string;
  title?: string;
  body?: string;
  reversed?: boolean;
  children?: ReactNode;
};

export default function ImageTextBlock({
  image,
  imageAlt,
  objectPosition = "center center",
  title,
  body,
  reversed = false,
  children,
}: ImageTextBlockProps) {
  const imageSide: "start" | "end" = reversed ? "end" : "start";
  const textSide: "start" | "end" = reversed ? "start" : "end";

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
      <SplitImage side={imageSide} className="w-full md:w-1/2">
        <ImageReveal className="aspect-[4/3] rounded shadow-sm border border-surface-container-high overflow-hidden">
          <OptimizedImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        </ImageReveal>
      </SplitImage>
      <SplitText side={textSide} className="w-full md:w-1/2">
        {title ? (
          <FadeUp>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4">{title}</h2>
          </FadeUp>
        ) : null}
        {body ? (
          <FadeUp delay={0.06}>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{body}</p>
          </FadeUp>
        ) : null}
        {children}
      </SplitText>
    </div>
  );
}
