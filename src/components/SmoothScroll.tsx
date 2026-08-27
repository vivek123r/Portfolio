import { useEffect } from "react";
import Lenis from "lenis";
import { useIsMobile } from "@/hooks/use-mobile";

export function SmoothScroll() {
  const isMobile = useIsMobile();
  useEffect(() => {
    // On mobile, disable Lenis for native momentum + prevent jank with nested scroll/drag
    // Also respect prefers-reduced-motion and touch devices
    if (isMobile) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window && window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      gestureOrientation: "vertical",
      touchMultiplier: 1.6,
      infinite: false,
    });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // expose for modal prevent: data-lenis-prevent
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [isMobile]);
  return null;
}
