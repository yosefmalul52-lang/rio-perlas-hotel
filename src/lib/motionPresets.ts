import { useReducedMotion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useIsMobile } from "../hooks/useMediaQuery";

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
export const SCROLL_VIEWPORT = { once: true, amount: 0.08, margin: "0px 0px -40px 0px" } as const;

export type MotionSide = "start" | "end";

export type MotionContext = {
  reduceMotion: boolean;
  isRtl: boolean;
  isMobile: boolean;
};

function transition(duration = 0.8, delay = 0) {
  return { duration, delay, ease: LUXURY_EASE };
}

function enterX(side: MotionSide, ctx: MotionContext, distance = 50) {
  if (ctx.reduceMotion || ctx.isMobile) return 0;
  const sign = side === "start" ? -1 : 1;
  return ctx.isRtl ? -sign * distance : sign * distance;
}

/** 1. fadeUp — labels, headlines, body, CTA text */
export function fadeUpVariant(ctx: MotionContext, delay = 0, withBlur = false) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: 40,
      ...(withBlur ? { filter: "blur(6px)" } : {}),
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transition(0.8, delay),
    },
  };
}

/** 2. splitTextImage — text / image horizontal entrance */
export function splitTextVariant(ctx: MotionContext, side: MotionSide, delay = 0) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  if (ctx.isMobile) {
    return fadeUpVariant(ctx, delay);
  }

  return {
    hidden: { opacity: 0, x: enterX(side, ctx, 50) },
    visible: { opacity: 1, x: 0, transition: transition(0.85, delay) },
  };
}

export function splitImageVariant(ctx: MotionContext, side: MotionSide, delay = 0) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  if (ctx.isMobile) {
    return fadeUpVariant(ctx, delay);
  }

  return {
    hidden: { opacity: 0, x: enterX(side, ctx, 50), scale: 1.04 },
    visible: { opacity: 1, x: 0, scale: 1, transition: transition(0.9, delay) },
  };
}

/** 3. imageReveal — wrapper + inner scale */
export function imageRevealWrapperVariant(ctx: MotionContext, delay = 0) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: transition(0.85, delay) },
  };
}

export function imageRevealInnerVariant(ctx: MotionContext, delay = 0) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  // Avoid horizontal bleed from scale transforms on narrow viewports
  if (ctx.isMobile) {
    return {
      hidden: { opacity: 0.85 },
      visible: { opacity: 1, transition: transition(0.7, delay) },
    };
  }

  return {
    hidden: { scale: 1.06 },
    visible: { scale: 1, transition: transition(0.95, delay) },
  };
}

/** 4. staggerCards */
export function staggerContainerVariant(ctx: MotionContext, stagger = 0.12) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.35 } },
    };
  }

  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };
}

export function staggerItemVariant(ctx: MotionContext) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: transition(0.35) },
    };
  }

  return {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: transition(0.8) },
  };
}

/** 5. softScale */
export function softScaleVariant(ctx: MotionContext, delay = 0) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: transition(0.5, delay) },
    };
  }

  if (ctx.isMobile) {
    return {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: transition(0.75, delay) },
    };
  }

  return {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: transition(0.9, delay) },
  };
}

/** 6. carouselReveal */
export function carouselCardVariant(ctx: MotionContext) {
  if (ctx.reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: transition(0.35) },
    };
  }

  if (ctx.isMobile) {
    const mobile = fadeUpVariant(ctx);
    return { hidden: mobile.hidden, show: mobile.visible };
  }

  const x = ctx.isRtl ? -40 : 40;

  return {
    hidden: { opacity: 0, x },
    show: { opacity: 1, x: 0, transition: transition(0.85) },
  };
}

export function usePremiumMotion() {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  const ctx: MotionContext = {
    reduceMotion: !!reduceMotion,
    isRtl: language === "he",
    isMobile,
  };

  const heroInitial = <T extends Record<string, unknown>>(values: T): T | false =>
    ctx.reduceMotion ? false : values;

  return {
    ctx,
    reduceMotion: ctx.reduceMotion,
    heroInitial,
    fadeUp: (delay = 0, withBlur = false) => fadeUpVariant(ctx, delay, withBlur),
    splitText: (side: MotionSide, delay = 0) => splitTextVariant(ctx, side, delay),
    splitImage: (side: MotionSide, delay = 0) => splitImageVariant(ctx, side, delay),
    imageRevealWrapper: (delay = 0) => imageRevealWrapperVariant(ctx, delay),
    imageRevealInner: (delay = 0) => imageRevealInnerVariant(ctx, delay),
    staggerContainer: (stagger = 0.12) => staggerContainerVariant(ctx, stagger),
    staggerItem: () => staggerItemVariant(ctx),
    softScale: (delay = 0) => softScaleVariant(ctx, delay),
    carouselCard: () => carouselCardVariant(ctx),
  };
}

/** @deprecated Use usePremiumMotion */
export function useScrollRevealVariants() {
  const motion = usePremiumMotion();
  return {
    reduceMotion: motion.ctx.reduceMotion,
    staggerContainer: motion.staggerContainer(),
    fadeInUp: motion.staggerItem(),
    heroInitial: motion.heroInitial,
  };
}
