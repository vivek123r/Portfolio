import { useEffect, useState } from "react";
import { Terminal } from "./Terminal";

export function CommandTrigger() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onOpen = () => setOpen(true);
    document.addEventListener("term:open", onOpen);
    return () => document.removeEventListener("term:open", onOpen);
  }, []);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group flex items-center gap-3 bg-ink text-cream px-4 py-3 mono text-[10px] tracking-[0.2em] uppercase hover-lift shadow-lg shadow-ember/50 hover:shadow-ember/80 transition-shadow duration-300"
        style={{
          boxShadow: "0 0 20px rgba(239, 68, 68, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <span className="text-ember">●</span>
        <span>⌘ K · terminal</span>
      </button>
      <Terminal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
