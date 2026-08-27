import { FadeUp } from "../motion/PremiumReveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "start";
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
}: SectionIntroProps) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "text-start max-w-2xl";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow ? (
        <FadeUp>
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
            {eyebrow}
          </span>
        </FadeUp>
      ) : null}
      <FadeUp delay={0.08}>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{title}</h2>
      </FadeUp>
      {body ? (
        <FadeUp delay={0.14}>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{body}</p>
        </FadeUp>
      ) : null}
    </div>
  );
}
