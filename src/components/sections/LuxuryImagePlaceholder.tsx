type PlaceholderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

/** Elegant stand-in when a category-specific final photo is not yet available. */
export default function LuxuryImagePlaceholder({ title, subtitle, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`relative flex h-full min-h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-secondary/35 bg-pura-green-deep text-center ${className}`}
      role="img"
      aria-label={[title, subtitle].filter(Boolean).join(" — ")}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(1,78,80,0.35) 0%, rgba(1,78,80,0) 70%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-6 border border-secondary/25" aria-hidden />
      <p className="relative z-[1] font-label-caps text-[10px] uppercase tracking-[0.22em] text-secondary-fixed mb-3">
        Imagery forthcoming
      </p>
      <p className="relative z-[1] font-headline-sm text-xl sm:text-2xl text-on-primary px-6 leading-snug max-w-sm">
        {title}
      </p>
      {subtitle ? (
        <p className="relative z-[1] mt-3 text-sm text-on-primary/70 px-6 max-w-xs leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
