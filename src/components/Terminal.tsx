import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami     — print user info
  about      — background
  skills     — technical skills
  projects   — featured work
  experience — work history
  contact    — reach me
  github     — my github
  date       — current time
  clear      — clear screen
  sudo       — try it.`,
  about: `Vivek R — AI Engineer & Full-Stack Developer.
Self-driven IT undergraduate at Viswajyothi College of
Engineering and Technology. Builds in AI/ML, mobile, and
cloud systems. Based in Thodupuzha, Kerala.`,
  skills: `LANGUAGES   Python, JavaScript, Dart, SQL, Java
FRAMEWORKS  React, Node.js, Flutter, FastAPI
CLOUD       AWS (EC2, S3, IAM, CloudWatch), Docker, K8s
AI          LangChain, LangGraph, OpenAI, n8n, ML Kit, OCR`,
  projects: `01 EXFORGE      — AI extension builder (LangChain + Python)
02 MINT         — SMS-based expense tracker (Flutter + Firebase)
03 SYSMON       — real-time system monitor (Python + Flutter)
04 GAMING ADV   — system optimizer
05 E-SHOP       — react commerce surface
06 SCRAPER BOT  — python web scraping suite`,
  experience: `AWS Intern · Cydez Technologies
— Managed scalable apps on EC2/S3, -20% deploy time
— Configured IAM + CloudWatch, 99.9% uptime`,
  contact: `email     vivek987pm@gmail.com
phone     +91 85906 09366
github    https://github.com/vivek123r
linkedin  /in/vivek-r-015008188
loc       Thodupuzha, Kerala`,
  whoami: `vivek`,
  github: `https://github.com/vivek123r`,
  sudo: `Nice try. This incident has been logged. ●`,
};

type Line = { text: string; type: "system" | "command" | "error" };

export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [history, setHistory] = useState<Line[]>([
    { text: "vivek_os v.2026.05 — type 'help' for commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open ? onClose() : (document.dispatchEvent(new CustomEvent("term:open")));
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const cmd = input.trim().toLowerCase();
    const next: Line[] = [...history, { text: `vivek@portfolio:~$ ${input}`, type: "command" }];
    if (cmd === "clear") setHistory([]);
    else if (cmd === "date") setHistory([...next, { text: new Date().toString(), type: "system" }]);
    else if (COMMANDS[cmd]) setHistory([...next, { text: COMMANDS[cmd], type: "system" }]);
    else setHistory([...next, { text: `bash: ${cmd}: command not found. type 'help'.`, type: "error" }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.7, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl h-[60vh] bg-ink text-amber border border-amber/30 flex flex-col font-mono shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-amber/20 text-xs">
              <span className="text-amber/70">vivek@portfolio:~ — command center</span>
              <button onClick={onClose} className="text-amber/60 hover:text-ember">✕</button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 text-sm leading-relaxed">
              {history.map((l, i) => (
                <div key={i} className={`whitespace-pre-wrap mb-2 ${
                  l.type === "command" ? "text-cream" :
                  l.type === "error" ? "text-ember" : "text-amber"
                }`}>{l.text}</div>
              ))}
              <form onSubmit={submit} className="flex items-center gap-2 mt-2">
                <span className="text-ember">vivek@portfolio:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-cream"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
