import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "VIVEK_R // PORTFOLIO_OS v.2026.05",
  "BOOTING — ADVICIYA :: NESTJS + POSTGRES",
  "LOADING — 08 PROJECTS · 20+ STACK · 03 LOGS",
];

export function Loader() {
  const [show, setShow] = useState(true);
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("loader-seen");
    if (seen) { setShow(false); return; }
    const iv = setInterval(() => setIdx((i) => (i + 1) % LINES.length), 420);
    const t1 = setTimeout(() => setDone(true), 2100);
    const t2 = setTimeout(() => { setShow(false); sessionStorage.setItem("loader-seen", "1"); }, 2800);
    return () => { clearInterval(iv); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-0 z-[500] bg-ink text-cream flex flex-col justify-between p-6 md:p-10 overflow-hidden ${done ? "wipe" : ""}`}
        >
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-cream/40">system — viv_os</div>
            <div className="mt-3 mono text-xs md:text-sm text-ember flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              <span className="glitch-hover">{LINES[idx]}</span>
              <span className="animate-pulse">▌</span>
            </div>
          </div>

          <div className="relative">
            <div className="display text-[18vw] md:text-[12vw] leading-[0.8]">Vivek<span className="display-italic text-ember">_R</span></div>
            <div className="mt-4 h-1 bg-cream/10 overflow-hidden max-w-[520px]">
              <motion.div initial={{ width: 0 }} animate={{ width: done ? "100%" : "68%" }} transition={{ duration: done ? 0.6 : 2, ease: [0.22, 1, 0.36, 1] }} className="h-full bg-ember" />
            </div>
            <div className="mt-3 mono text-[10px] tracking-[0.2em] uppercase text-cream/40 flex gap-4">
              <span>ADVICIYA — backend intern</span><span className="hidden md:inline">·</span><span>NestJS · TypeORM · JWT</span>
            </div>
          </div>

          <div className="relative flex justify-between mono text-[10px] tracking-[0.2em] uppercase text-cream/30">
            <span>© 2026 — Kerala, IN</span><span className="animate-pulse">loading █ {done ? "100%" : "68%"}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
