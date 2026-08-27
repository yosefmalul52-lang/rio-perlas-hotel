import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { FadeUp } from "../motion/PremiumReveal";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export type ScrollStoryStage = {
  label: string;
  title: string;
  body: string;
};

type ScrollStoryStagesProps = {
  stages: readonly ScrollStoryStage[];
  accentBorderClass: string;
};

const STICKY_BASE_TOP = 120;
const STICKY_STEP = 16;

function StageContent({
  stage,
  accentBorderClass,
}: {
  stage: ScrollStoryStage;
  accentBorderClass: string;
}) {
  return (
    <>
      <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">
        {stage.label}
      </span>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{stage.title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{stage.body}</p>
    </>
  );
}

function StickyStackCard({
  stage,
  index,
  total,
  progress,
  accentBorderClass,
}: {
  stage: ScrollStoryStage;
  index: number;
  total: number;
  progress: MotionValue<number>;
  accentBorderClass: string;
}) {
  const isLast = index === total - 1;
  const segment = 1 / total;
  // Soften only after the next card has begun covering this one
  const dimStart = Math.min(0.92, (index + 0.55) * segment);
  const dimEnd = Math.min(1, (index + 1) * segment);

  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [dimStart, dimEnd],
    isLast ? [1, 1] : [1, 0.97],
  );
  const opacity = useTransform(
    progress,
    isLast ? [0, 1] : [dimStart, dimEnd],
    isLast ? [1, 1] : [1, 0.78],
  );
  const y = useTransform(
    progress,
    isLast ? [0, 1] : [dimStart, dimEnd],
    isLast ? [0, 0] : [0, -10],
  );
  const shadowOpacity = useTransform(
    progress,
    isLast ? [0, 1] : [dimStart, dimEnd],
    isLast ? [0.22, 0.22] : [0.22, 0.1],
  );
  const boxShadow = useTransform(
    shadowOpacity,
    (o) => `0 12px 36px rgba(1, 78, 80, ${o})`,
  );

  return (
    <div
      className="sticky"
      style={{
        top: STICKY_BASE_TOP + index * STICKY_STEP,
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale, opacity, y, boxShadow }}
        className={`bg-bg-card border border-secondary/35 rounded-sm p-5 sm:p-7 md:p-9 ${accentBorderClass}`}
      >
        <StageContent stage={stage} accentBorderClass={accentBorderClass} />
      </motion.article>
    </div>
  );
}

/**
 * Desktop: CSS sticky stacking cards (opaque, rising z-index).
 * Mobile: normal vertical flow with gentle FadeUp — no sticky stack.
 */
export default function ScrollStoryStages({ stages, accentBorderClass }: ScrollStoryStagesProps) {
  const reduceMotion = useReducedMotion();
  // Match the two-column layout breakpoint — stack only beside the sticky image
  const isDesktopLayout = useMediaQuery("(min-width: 1024px)");
  const stackRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 32,
    mass: 0.4,
    restDelta: 0.0008,
  });

  const useStack = isDesktopLayout && !reduceMotion;
  const total = stages.length;

  if (!useStack) {
    return (
      <div className="space-y-6">
        {stages.map((stage, index) => (
          <FadeUp key={stage.label} delay={index * 0.06}>
            <article
              className={`bg-bg-card border border-secondary/35 rounded-sm shadow-md p-5 sm:p-7 md:p-9 ${accentBorderClass}`}
            >
              <StageContent stage={stage} accentBorderClass={accentBorderClass} />
            </article>
          </FadeUp>
        ))}
      </div>
    );
  }

  return (
    <div ref={stackRef} className="relative w-full">
      <div className="flex flex-col gap-6 md:gap-8">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.label}>
            <StickyStackCard
              stage={stage}
              index={index}
              total={total}
              progress={smoothProgress}
              accentBorderClass={accentBorderClass}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
