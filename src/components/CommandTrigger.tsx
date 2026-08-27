import { useEffect, useState } from "react";
import { Terminal } from "./Terminal";

export function CommandTrigger() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onOpen = () => setOpen(true);
    document.addEventListener("term:open", onOpen);
    return () => document.removeEventListener("term:open", onOpen);
  }, []);

  // hide on scroll down for mobile so it doesn't cover bottom nav
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY;
      if (y > 300 && diff > 12) setHidden(true);
      else if (diff < -8) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open terminal"
        className={`fixed z-40 group flex items-center gap-2 md:gap-3 bg-ink text-cream mono text-[10px] tracking-[0.2em] uppercase shadow-lg transition-all duration-300
          ${hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
          bottom-[88px] right-4 md:bottom-8 md:right-8 px-3 py-2.5 md:px-4 md:py-3 rounded-full md:rounded-none border border-cream/10 md:border-0
          hover-lift
        `}
        style={{
          boxShadow: "0 8px 24px rgba(0,0,0,0.24), 0 0 20px rgba(239,68,68,0.28)",
          paddingBottom: "max(10px, env(safe-area-inset-bottom))" as any,
        }}
      >
        <span className="w-2 h-2 rounded-full bg-ember animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        <span className="hidden sm:inline">⌘ K · terminal</span>
        <span className="sm:hidden">terminal</span>
      </button>
      <Terminal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
