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
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 20 }}
          transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
          className="fixed bottom-24 right-6 md:bottom-32 md:right-10 z-[200]"
        >
          <div className="bg-cream border-2 border-ember/60 rounded-lg px-6 py-4 shadow-lg hover:shadow-xl hover:border-ember transition-all duration-300 group cursor-pointer max-w-sm"
            onClick={handleLearnMore}
          >
            <div className="mono text-[10px] tracking-[0.15em] uppercase text-ink/60 mb-2">
              Want to know more?
            </div>
            <div className="display text-lg text-ink mb-3">
              Check out my <span className="text-ember">terminal</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMore();
                }}
                className="mono text-xs tracking-[0.2em] uppercase px-4 py-2 bg-ember text-cream hover:bg-ember/90 transition-colors"
              >
                Open terminal
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss();
                }}
                className="mono text-xs tracking-[0.2em] uppercase px-4 py-2 border border-ink/40 text-ink/60 hover:border-ink hover:text-ink transition-colors"
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
