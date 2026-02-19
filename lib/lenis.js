"use client";

import Lenis from "lenis";

let lenisInstance = null;

export function initLenis() {
  if (typeof window === "undefined") return;
  if (lenisInstance) return () => lenisInstance.destroy();

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenisInstance = lenis;
  return () => {
    lenis.destroy();
    lenisInstance = null;
  };
}

