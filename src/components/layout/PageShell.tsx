import type { ReactNode } from "react";
import { FadeUp } from "../motion/PremiumReveal";

type PageShellProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
};

export default function PageShell({ eyebrow, title, body, children }: PageShellProps) {
  return (
    <div className="bg-surface min-h-screen select-text">
      <section className="pt-24 sm:pt-28 pb-16 md:pb-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <FadeUp eager>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {eyebrow}
            </span>
          </FadeUp>
          <FadeUp delay={0.08} eager>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-4 md:mb-6">{title}</h1>
          </FadeUp>
          <FadeUp delay={0.14} eager>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{body}</p>
          </FadeUp>
        </div>
        {children}
      </section>
    </div>
  );
}
