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
Engineering. 4 years coding. 8 GitHub projects. 3 certifications.
Builds in AI/Automation, mobile, and cloud. Based in Kerala.`,
  skills: `LANGUAGES    Python, JavaScript, TypeScript, Dart, SQL
FRAMEWORKS   React, Next.js, Node.js, Flutter, FastAPI, Flask
AI & AUTO    LangChain, LangGraph, n8n, LLMs, Prompt Engineering
CLOUD        AWS (EC2, S3, IAM, Lambda), Docker, Kubernetes, Firebase
TOOLS        Git, CI/CD, Jest, Postman, REST APIs, WebSockets`,
  projects: `01 RONIN        — AI product research platform (LangGraph + FastAPI)
02 EXFORGE      — AI extension builder (LangChain + Python)
03 MINT         — SMS-based expense tracker (Flutter + Firebase)
04 SYSMON       — real-time system monitor (Python + Flutter)
05 GAMING ADV   — system optimizer
06 E-SHOP       — react commerce surface
07 CHATBOT EXT  — browser extension
08 SCRAPER BOT  — python web scraping suite
09 DEVFOLIO     — this portfolio`,
  experience: `Backend Intern · ADVICIYA (2026)
— Built & maintained APIs with Node.js, NestJS, TypeScript, PostgreSQL & TypeORM
— JWT auth, DB migrations, request validation (class-validator)
AWS Intern · Cydez Technologies (2025)
— Managed scalable apps on EC2/S3, -20% deploy time
— Configured IAM + CloudWatch, 99.9% uptime
B.Tech IT · Viswajyothi College of Engineering Technology`,
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

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-ink/70 backdrop-blur-sm flex items-end md:items-center justify-center md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: isMobile ? "100%" : 20, scale: isMobile ? 1 : 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: isMobile ? "100%" : 20, scale: isMobile ? 1 : 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => { if (info.offset.y > 100) onClose(); }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl h-[78dvh] md:h-[60vh] bg-ink text-amber border-t md:border border-amber/30 flex flex-col font-mono shadow-2xl rounded-t-[16px] md:rounded-none overflow-hidden"
          >
            <div className="flex md:hidden justify-center pt-2 pb-1 shrink-0">
              <div className="h-1 w-10 rounded-full bg-cream/20" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-amber/20 text-xs shrink-0">
              <span className="text-amber/70 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> vivek@portfolio:~ — command center</span>
              <button onClick={onClose} className="w-8 h-8 grid place-items-center rounded-full bg-cream/10 text-amber/80 hover:text-ember hover:bg-cream/15 transition-colors">✕</button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 text-[13px] md:text-sm leading-relaxed overscroll-contain">
              {history.map((l, i) => (
                <div key={i} className={`whitespace-pre-wrap mb-2 break-words ${
                  l.type === "command" ? "text-cream" :
                  l.type === "error" ? "text-ember" : "text-amber"
                }`}>{l.text}</div>
              ))}
              <form onSubmit={submit} className="flex items-center gap-2 mt-3 sticky bottom-0 bg-ink pt-2 pb-[env(safe-area-inset-bottom)]">
                <span className="text-ember shrink-0 hidden sm:inline">vivek@portfolio:~$</span>
                <span className="text-ember shrink-0 sm:hidden">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-cream text-[16px] md:text-sm"
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder="type help…"
                />
                <button type="submit" className="md:hidden mono text-[10px] tracking-widest uppercase bg-amber text-ink px-3 py-1.5 rounded-full">send</button>
              </form>
            </div>
            <div className="hidden md:flex gap-1.5 px-4 py-2 border-t border-amber/10 mono text-[10px] tracking-widest uppercase text-amber/40">
              <span>help</span><span>·</span><span>projects</span><span>·</span><span>skills</span><span>·</span><span>contact</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
