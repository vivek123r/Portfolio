import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EngagementPrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if we've already shown this in this session
    const hasShown = sessionStorage.getItem("engagement-prompt-shown");
    
    if (hasShown) return;

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("engagement-prompt-shown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShow(false);
  };

  const handleLearnMore = () => {
    document.dispatchEvent(new CustomEvent("term:open"));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-[104px] md:inset-x-auto md:bottom-28 md:right-10 z-[200] flex justify-center md:justify-end pointer-events-none"
        >
          <div className="bg-cream border border-ember/60 rounded-2xl md:rounded-lg px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] md:shadow-lg hover:shadow-xl hover:border-ember transition-all duration-300 group cursor-pointer w-full max-w-[360px] pointer-events-auto"
            onClick={handleLearnMore}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="mono text-[10px] tracking-[0.15em] uppercase text-ink/60">
                Want to know more?
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleDismiss(); }} className="w-6 h-6 grid place-items-center rounded-full bg-ink/5 text-ink/40 hover:text-ink text-xs">✕</button>
            </div>
            <div className="display text-lg text-ink mb-3 leading-none">
              Check out my <span className="text-ember">terminal</span> <span className="text-ink/40 text-sm">— try ⌘K</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMore();
                }}
                className="flex-1 mono text-xs tracking-[0.2em] uppercase px-4 py-2.5 bg-ember text-cream hover:bg-ember/90 active:scale-[0.98] transition-all rounded-full md:rounded-none"
              >
                Open terminal
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss();
                }}
                className="mono text-xs tracking-[0.2em] uppercase px-4 py-2.5 border border-ink/15 text-ink/60 hover:border-ink hover:text-ink transition-colors rounded-full md:rounded-none hidden md:block"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
