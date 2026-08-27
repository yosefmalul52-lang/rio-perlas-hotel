import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import LuxuryImagePlaceholder from "./LuxuryImagePlaceholder";
import { FadeUp, ImageReveal, SoftScale, StaggerItem } from "../motion/PremiumReveal";

export type HolidayPathwayCardData = {
  to: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  placeholderTitle?: string;
  placeholderSubtitle?: string;
};

type HolidayPathwayCardProps = {
  card: HolidayPathwayCardData;
  index?: number;
};

export default function HolidayPathwayCard({ card, index = 0 }: HolidayPathwayCardProps) {
  return (
    <StaggerItem className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-sm border border-surface-container-high bg-bg-card shadow-sm transition-all duration-500 hover:border-secondary/45 hover:shadow-md">
      <SoftScale delay={index * 0.05} className="relative shrink-0">
        <ImageReveal className="relative aspect-[16/11] w-full overflow-hidden">
          {card.image ? (
            <OptimizedImage
              src={card.image.src}
              alt={card.image.alt}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ objectPosition: card.image.objectPosition ?? "center center" }}
            />
          ) : (
            <LuxuryImagePlaceholder
              title={card.placeholderTitle ?? card.title}
              subtitle={card.placeholderSubtitle}
              className="absolute inset-0 min-h-0 rounded-none border-0"
            />
          )}
        </ImageReveal>
      </SoftScale>

      <FadeUp delay={0.08 + index * 0.04} className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-secondary mb-2 block">
          {card.eyebrow}
        </span>
        <h3 className="font-headline-sm text-xl text-primary mb-3 leading-tight">{card.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 flex-1">
          {card.body}
        </p>
        <Link
          to={card.to}
          className="btn-premium-hover mt-auto inline-flex w-full justify-center btn-cta border border-pura-green py-3.5 px-6 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
        >
          {card.cta}
        </Link>
      </FadeUp>
    </StaggerItem>
  );
}
