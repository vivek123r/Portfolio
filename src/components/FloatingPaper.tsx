import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FloatingPaper() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-10, 30]);
  const r1 = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none -z-10 overflow-hidden hidden md:block" aria-hidden>
      <motion.div style={{ y: y1, rotate: r1 }} className="absolute right-[8%] top-[12%] w-28 h-36 bg-cream border border-ink/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] rotate-[-2deg] p-3">
        <div className="mono text-[8px] tracking-widest text-ink/30">// paper_01</div>
        <div className="mt-2 h-1 bg-ink/10 w-3/4" /><div className="mt-1.5 h-1 bg-ink/10 w-full" /><div className="mt-1.5 h-1 bg-ember/30 w-1/2" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-paper border-l border-t border-ink/10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute left-[6%] bottom-[18%] w-32 h-20 glass rounded-xl border border-ink/10 p-3 rotate-[1deg] shadow-lg">
        <div className="mono text-[8px] tracking-widest text-ember">● STACK — NESTJS</div>
        <div className="display text-lg leading-none mt-1">NestJS<span className="text-ember">.</span></div>
        <div className="mono text-[9px] text-ink/50 mt-1">12 tables · JWT · 78% cov</div>
      </motion.div>
    </div>
  );
}
