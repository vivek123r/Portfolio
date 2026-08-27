import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { to: "/", label: "Index", num: "01" },
  { to: "/projects", label: "Work", num: "02" },
  { to: "/contact", label: "Signal", num: "03" },
] as const;

export function SideNav() {
  const { location } = useRouterState();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = latest - prev;
    setScrolled(latest > 24);
    // hide header on scroll down past 120px, show on scroll up
    if (latest > 120 && diff > 0) setHidden(true);
    else if (diff < 0) setHidden(false);
  });

  // lock scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top bar — dynamic: hides on scroll down, glass on scroll */}
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl border-b border-ink/10 text-ink shadow-sm"
            : "mix-blend-difference text-cream border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link to="/" className="mono text-xs tracking-[0.2em] uppercase flex items-center gap-2">
            Vivek_R<span className={`inline-block w-2 h-2 rounded-full bg-ember ${scrolled ? "" : ""} animate-pulse`} />
          </Link>

          {/* desktop meta */}
          <div className="mono text-[10px] tracking-[0.2em] uppercase hidden md:flex gap-6 items-center">
            <span>IND · 12.97°N</span>
            <span>v.2026.05</span>
            <span className={`h-3 w-px ${scrolled ? "bg-ink/20" : "bg-cream/30"}`} />
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available</span>
          </div>

          {/* mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden relative w-9 h-9 grid place-items-center rounded-full border transition-colors ${
              scrolled ? "border-ink/20 bg-cream" : "border-cream/30 bg-transparent"
            }`}
          >
            <span className="sr-only">Menu</span>
            <span className="relative w-4 h-3 block">
              <span className={`absolute left-0 w-4 h-px bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 w-4 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-4 h-px bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-0 z-40 bg-cream pt-[72px] md:hidden border-b border-ink/15 shadow-xl"
            >
              <div className="px-6 pb-8 pt-6">
                <div className="mono text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-6">// navigate</div>
                <div className="flex flex-col">
                  {links.map((l, i) => {
                    const active = location.pathname === l.to;
                    return (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                      >
                        <Link
                          to={l.to}
                          className={`group flex items-baseline justify-between py-6 border-b border-ink/10 last:border-0 ${active ? "text-ember" : "text-ink"}`}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="mono text-xs tracking-widest opacity-50">{l.num}</span>
                            <span className="display text-5xl leading-none">{l.label}</span>
                          </span>
                          <span className={`mono text-xs p-2 rounded-full border transition-colors ${active ? "border-ember bg-ember text-cream" : "border-ink/20 group-active:bg-ink group-active:text-cream"}`}>→</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-wrap gap-3 mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
                  <a href="mailto:vivek987pm@gmail.com" className="px-4 py-3 border border-ink/20 flex-1 text-center hover:bg-ink hover:text-cream transition-colors">Email</a>
                  <a href="https://github.com/vivek123r" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-ink/20 flex-1 text-center hover:bg-ink hover:text-cream transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/vivek-r-015008188" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-ink/20 flex-1 text-center hover:bg-ink hover:text-cream transition-colors">LinkedIn</a>
                </div>
                <div className="mt-6 mono text-[10px] tracking-[0.25em] uppercase text-ink/40 flex justify-between">
                  <span>Kerala, IN — Remote</span><span>v.2026.05</span>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Side rail — desktop only, subtle slide in */}
      <motion.nav
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-8 pl-6"
      >
        {links.map((l) => {
          const active = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center gap-3 mono text-[11px] tracking-[0.18em] uppercase font-medium"
            >
              <motion.span
                layoutId="desktop-indicator"
                className={`h-px transition-all duration-500 ${
                  active ? "w-10 bg-ember" : "w-4 bg-ink/35 group-hover:w-8 group-hover:bg-ink"
                }`}
              />
              <span className={active ? "text-ember" : "text-ink/55 group-hover:text-ink"}>
                {l.num} {l.label}
              </span>
            </Link>
          );
        })}
      </motion.nav>

      {/* Mobile bottom nav — floating pill, hide on scroll down, glass, active pill animation */}
      <motion.nav
        animate={{ y: hidden ? 120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 inset-x-0 z-30 md:hidden pointer-events-none"
      >
        {/* safe-area wrapper */}
        <div className="mx-auto max-w-[420px] px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-2 pointer-events-auto">
          <div className="flex items-center gap-1.5 rounded-full bg-ink/95 backdrop-blur-xl border border-ink p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.06)_inset] supports-[backdrop-filter]:bg-ink/90">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-full mono text-[11px] tracking-[0.14em] uppercase font-semibold transition-colors ${
                    active ? "text-ink" : "text-cream/70 active:text-cream"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="mobile-pill"
                      className="absolute inset-0 bg-cream rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative text-[10px] opacity-60">{l.num}</span>
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </div>
          {/* hint */}
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-12 rounded-full bg-ink/15" />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
