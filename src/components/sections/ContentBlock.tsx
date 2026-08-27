import type { ReactNode } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FadeUp } from "../motion/PremiumReveal";

type ContentBlockProps = {
  title: string;
  body: string;
  children?: ReactNode;
};

export default function ContentBlock({ title, body }: ContentBlockProps) {
  const { language } = useLanguage();
  const borderClass =
    language === "he"
      ? "border-r-2 border-secondary pe-6"
      : "border-l-2 border-secondary ps-6";

  return (
    <FadeUp>
      <div className={`${borderClass} py-2`}>
        <h2 className="font-headline-sm text-headline-sm text-primary mb-3">{title}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{body}</p>
      </div>
    </FadeUp>
  );
}
