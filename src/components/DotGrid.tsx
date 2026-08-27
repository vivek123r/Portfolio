import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let mx = -1000, my = -1000;
    const dpr = Math.min(window.devicePixelRatio, 1.8);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

    const cols = Math.ceil(window.innerWidth / 56);
    const rows = Math.ceil(window.innerHeight / 56);

    const draw = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const ox = x * 56 + 28;
          const oy = y * 56 + 28;
          const dx = mx - ox;
          const dy = my - oy;
          const dist = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - dist / 220);
          // warp
          const wx = ox - (dx * influence * 0.12);
          const wy = oy - (dy * influence * 0.12) + Math.sin(t * 0.001 + x * 0.6 + y * 0.4) * 1.2;

          const r = 1.2 + influence * 2.2;
          const alpha = 0.08 + influence * 0.28 + Math.sin(t * 0.002 + x) * 0.02;

          // ember dot, slightly larger near cursor
          ctx.beginPath();
          ctx.arc(wx, wy, r, 0, Math.PI * 2);
          ctx.fillStyle = `oklch(0.58 0.18 38 / ${alpha})`;
          ctx.fill();

          // tiny cross line when hovered close
          if (influence > 0.45) {
            ctx.strokeStyle = `oklch(0.58 0.18 38 / ${0.08 * influence})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(ox, oy);
            ctx.lineTo(wx, wy);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  if (isMobile) return null;
  return <canvas ref={ref} className="absolute inset-0 -z-10 pointer-events-none opacity-60" aria-hidden />;
}
