import React from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";

const LUXURY_EASE = (t: number) => 1 - Math.pow(1 - t, 4);

function shouldLenisHandleScroll(data: { deltaX: number; deltaY: number; event: WheelEvent | TouchEvent }) {
  const target = data.event.target;
  if (!(target instanceof HTMLElement)) return true;

  const horizontalScroller = target.closest(".horizontal-scroll-container");
  if (!horizontalScroller) return true;

  if (Math.abs(data.deltaX) > Math.abs(data.deltaY)) return false;

  return true;
}

export function useSmoothScroll(pathname?: string, hash?: string) {
  const reduceMotion = useReducedMotion();
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    if (reduceMotion) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: LUXURY_EASE,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      syncTouch: false,
      allowNestedScroll: true,
      virtualScroll: shouldLenisHandleScroll,
      // Keep native document scroll so CSS sticky + Motion useScroll work reliably
      autoRaf: false,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  React.useEffect(() => {
    if (pathname === undefined) return;

    const lenis = lenisRef.current;
    const targetId = hash?.replace(/^#/, "");

    const scrollToTop = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    if (!targetId) {
      scrollToTop();
      return;
    }

    let attempts = 0;
    let timer = 0;

    const tryScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, { offset: -96, immediate: Boolean(reduceMotion) });
        } else {
          target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
        return;
      }

      attempts += 1;
      if (attempts < 20) {
        timer = window.setTimeout(tryScroll, 50);
      } else {
        scrollToTop();
      }
    };

    timer = window.setTimeout(tryScroll, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, reduceMotion]);

  return lenisRef;
}
