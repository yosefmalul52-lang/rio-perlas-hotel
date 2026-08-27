import React from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "../motion/PremiumReveal";

type FaqItem = { q: string; a: string; category?: string };

type FaqAccordionProps = {
  items: readonly FaqItem[];
  showCategory?: boolean;
};

export default function FaqAccordion({ items, showCategory = false }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <FadeUp key={item.q} delay={index * 0.04}>
            <div className="border border-surface-container-high bg-bg-card rounded-sm overflow-hidden">
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-start cursor-pointer hover:bg-surface-container-low transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pura-green/50 focus-visible:ring-inset"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div>
                  {showCategory && item.category ? (
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-1.5">
                      {item.category}
                    </span>
                  ) : null}
                  <span className="font-headline-sm text-base md:text-lg text-primary block">{item.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-secondary shrink-0 mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "px-5 md:px-6 pb-5 md:pb-6 -mt-1" : undefined}
              >
                {isOpen ? (
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.a}</p>
                ) : null}
              </div>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
