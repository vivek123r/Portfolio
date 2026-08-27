import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import exforge1 from "@/assets/projects/exforge-1.png";
import exforge2 from "@/assets/projects/exforge-2.png";
import mint1 from "@/assets/projects/mint-1.png";
import mint2 from "@/assets/projects/mint-2.png";
import sysmon1 from "@/assets/projects/sysmon-1.png";
import sysmon2 from "@/assets/projects/sysmon-2.png";
import sysmon3 from "@/assets/projects/sysmon-3.jpg";
import gamingImg from "@/assets/projects/gaming.jpg";
import eshop1 from "@/assets/projects/eshop-1.png";
import eshop2 from "@/assets/projects/eshop-2.png";
import eshop3 from "@/assets/projects/eshop-3.png";
import chatbotImg from "@/assets/projects/chatbot.jpg";
import scraperImg from "@/assets/projects/scraper.jpg";
import devfolioImg from "@/assets/projects/devfolio.jpg";
import ronin1 from "@/assets/projects/Ronin1.png";
import ronin2 from "@/assets/projects/Ronin2.png";
import ronin3 from "@/assets/projects/Ronin3.png";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Vivek R — Catalogue / Selected Works" },
      { name: "description", content: "Selected works: AI agents, mobile apps, system tools, web platforms." },
    ],
  }),
});

type Project = {
  num: string;
  title: string;
  kind: string;
  year: string;
  stack: string[];
  blurb: string;
  href: string;
  demo?: string;
  tone: "ember" | "ink" | "amber" | "paper" | "rust";
  image: string;
  gallery?: string[];
  role: string;
  status: string;
  problem: string;
  approach: string;
  features: string[];
  metrics?: { label: string; value: string }[];
};

const GH = "https://github.com/vivek123r";

const projects: Project[] = [
  {
    num: "001", title: "RONIN", kind: "AI Product Research Platform", year: "2026",
    stack: ["Python", "FastAPI", "LangGraph", "DeepSeek", "React", "Framer Motion", "RapidAPI", "Tavily"],
    blurb: "Multi-agent AI platform that deploys 4 parallel agents to research Amazon, YouTube, and the web — then ranks everything and surfaces the single best product recommendation with scores, images, and a buy link.",
    href: `${GH}/ronin`, tone: "rust", image: ronin1, gallery: [ronin1, ronin2, ronin3],
    role: "Full-stack builder",
    status: "Local / open-source",
    problem: "Product research is fragmented across Amazon listings, YouTube reviews, and random blog posts. You have to synthesize all of it manually, with no single trusted score.",
    approach: "LangGraph StateGraph orchestrates an intent classifier that routes queries into either a discovery or comparison pipeline. Parallel agents hit Amazon (RapidAPI), YouTube transcripts, and Tavily web search simultaneously. A ranker agent scores each candidate on Quality (80%), Price (10%), and Availability (10%) and returns a single winner.",
    features: [
      "4 parallel AI agents: search, review, price, ranker",
      "SSE streaming — results surface as agents finish",
      "Intent classifier routes discovery vs. comparison queries",
      "Amazon product data via RapidAPI Real-Time Amazon Data",
      "YouTube review transcripts via youtube-transcript-api",
      "Tavily web search for editorial and forum signals",
      "SpiderHive canvas animation shows agent activity live",
      "Combined score /100 with per-dimension breakdown",
    ],
  },
  {
    num: "002", title: "EXFORGE", kind: "AI Extension Builder", year: "2025",
    stack: ["LangChain", "FastAPI", "ChromaDB", "OpenRouter", "Agents"],
    blurb: "Full-stack AI-powered platform that enables users to generate, customize, and manage browser extensions without coding. Intelligent suggestions, streaming code generation, and persistent context storage.",
    href: `${GH}/Extension`, tone: "ember", image: exforge1, gallery: [exforge1, exforge2],
    role: "Sole builder · Architecture, agent design, prompt eng.",
    status: "In active development",
    problem: "Writing browser/IDE extensions is repetitive — manifest, views, config, packaging. Most prompt-to-code tools stop at a snippet and leave you stitching.",
    approach: "Multi-agent pipeline: a planner decomposes requirements, a code generator emits complete files, a reviewer validates structure, and a packager bundles output. ChromaDB stores context for intelligent modification suggestions.",
    features: [
      "Guided multi-step wizard with real-time AI suggestions",
      "Plain-English → fully scaffolded, production-ready browser extension",
      "Intelligent agent-graph with planner, coder, reviewer, packager",
      "Support for multiple extension types (popup, content-script, background, devtools)",
      "Manifest V3 compatible with streaming output and per-file diff preview",
      "ChromaDB semantic search for context-aware recommendations",
      "Extension management dashboard with version history and modifications",
    ],
    metrics: [{ label: "Avg gen time", value: "~45s" }, { label: "Files / run", value: "8–14" }],
  },
  {
    num: "003", title: "MINT", kind: "SMS Expense Tracker", year: "2024",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "MLKit", "Gemini AI", "fl_chart"],
    blurb: "Privacy-first expense tracker with on-device SMS parsing, bill scanning via Gemini AI, and smart categorization. Three-tab interface: dashboard, manual tracking, and automated SMS transactions.",
    href: `${GH}/ExpenseTracker_sms-based`, tone: "amber", image: mint1, gallery: [mint1, mint2],
    role: "Sole builder · App architecture, parser, Firebase sync",
    status: "Released · used personally",
    problem: "Indian bank SMS formats are inconsistent and unpredictable. Existing apps require server upload (privacy risk) or miss transactions. Manual tracking is tedious.",
    approach: "Three-layer approach: (1) Firebase Auth + Firestore for secure cloud sync, (2) On-device SMS parser with regex + heuristics for bank message detection, (3) Gemini AI for bill/receipt OCR scanning. Data stored per-user monthly as Firestore docs (userUid-Month-Year).",
    features: [
      "Multi-tab interface: Home (monthly dashboard), Tracker (manual + charts + bill scan), SMS (automated bank parsing)",
      "On-device SMS parsing — raw SMS never leaves the device",
      "Bank debit/credit detection + balance parsing from SMS",
      "Bill/receipt scanning with Gemini AI text recognition",
      "Smart auto-categorization by merchant patterns and amount",
      "Year-over-year spending comparison charts (fl_chart)",
      "Monthly budget tracking with overspend alerts",
      "Firebase Firestore sync with per-user monthly aggregates",
      "Theme toggle (dark/light mode) with local persistence",
      "Account management: login, Google Sign-In, delete account",
    ],
    metrics: [{ label: "Parse accuracy", value: "~99%" }, { label: "Banks supported", value: "12+" }],
  },
  {
    num: "004", title: "SYSMON", kind: "System Monitor + Remote", year: "2024",
    stack: ["Python", "FastAPI", "Flutter", "Firebase", "WebSockets"],
    blurb: "Full-stack cross-platform system monitoring and remote control. Real-time PC metrics (CPU, RAM, GPU, Disk, Network) accessible from iOS, Android, Web, Linux, and macOS with secure Firebase auth.",
    href: `${GH}/SystemMonitor`, tone: "ink", image: sysmon1, gallery: [sysmon1, sysmon2, sysmon3],
    role: "Sole builder · Daemon, API, mobile client",
    status: "Daily-driver tool",
    problem: "I wanted to glance at my desktop's CPU/GPU/network from my phone, kill stuck processes, and send files over LAN — without installing five different apps.",
    approach: "A FastAPI daemon on the PC exposes telemetry over WebSockets. Flutter app pairs via QR + token, talks to the daemon on the local network. All actions are logged; nothing requires the cloud.",
    features: [
      "Live CPU / GPU / RAM / disk / network / battery",
      "Process list with remote kill",
      "LAN file sharing via QR pairing",
      "Multi-user devices with per-user permissions",
      "Command audit log on the host",
    ],
  },
  {
    num: "005", title: "GAMING ADVISOR", kind: "Performance Tuner", year: "2024",
    stack: ["Python", "Psutil", "GPU Monitoring", "Desktop UI"],
    blurb: "Reads your rig and recommends precise settings to push every frame.",
    href: `${GH}/gaming-advisor`, tone: "paper", image: gamingImg,
    role: "Sole builder",
    status: "Prototype",
    problem: "Tweaking graphics settings per game is guesswork. Generic 'optimisers' just lower everything.",
    approach: "Detects system specs (CPU, GPU, RAM, thermals), analyzes installed games, maps to known engines, and generates per-game presets tuned for target FPS with performance benchmarks.",
    features: [
      "Complete system profiling with thermal headroom analysis",
      "Intelligent per-game preset generation with target FPS",
      "Live CPU/GPU monitoring and performance overlay",
      "Engine-aware tuning profiles (Unreal, Unity, idTech, etc.)",
      "Game library with ratings, trailers, and recommendations",
      "Performance history and analysis caching",
    ],
  },
  {
    num: "006", title: "E-SHOP", kind: "Commerce Surface", year: "2024",
    stack: ["React", "Node", "Firebase", "Stripe"],
    blurb: "Full-stack e-commerce platform with Firebase authentication, multi-category product catalog, secure Stripe payments, and real-time inventory management.",
    href: `${GH}/e-shop`, tone: "ember", image: eshop1, gallery: [eshop1, eshop2, eshop3],
    role: "Full-stack build",
    status: "Coursework / portfolio piece",
    problem: "Most starter shops ship with bloated templates. I wanted a clean, fast surface I could actually reuse.",
    approach: "Composable React front, Node + REST API, Firebase for auth & real-time DB, Stripe for payments, push notifications via FCM. Designed mobile-first with hierarchical categories.",
    features: [
      "Multi-category product catalog (Clothing, Accessories, Electronics, Books, Shoes, Toys, Custom Tailoring)",
      "Advanced filtering + search functionality",
      "Firebase authentication + secure JWT sessions",
      "Real-time cart management and Stripe checkout",
      "Order history and user profile management",
      "Push notifications for order status updates",
      "Admin dashboard for inventory management",
    ],
  },
  {
    num: "007", title: "CHATBOT EXT", kind: "Browser Extension", year: "2024",
    stack: ["JS", "Chrome APIs", "OpenAI"],
    blurb: "Browser extension that puts an AI chat companion one click away on any tab — ask, summarise, or rewrite without leaving the page.",
    href: `${GH}/Extension`, tone: "amber", image: chatbotImg,
    role: "Sole builder",
    status: "Personal toolkit",
    problem: "Switching tabs to ask an AI about whatever you're reading is friction. I wanted the answer in the same window, with page context.",
    approach: "Manifest V3 extension with a side-panel chat that can read the active tab's selection or full page. Background service worker streams responses from OpenAI; nothing is sent until the user asks.",
    features: [
      "Side-panel chat on any website",
      "Ask about selection or full page context",
      "Summarise / explain / rewrite commands",
      "Streaming responses, local key storage",
      "Works in any Chromium browser",
    ],
  },
  {
    num: "008", title: "SCRAPER BOT", kind: "Web Scraping Suite", year: "2023",
    stack: ["Python", "Selenium", "Scrapy", "BeautifulSoup"],
    blurb: "Advanced scraping pipeline with anti-bot bypass and a clean processing layer.",
    href: `${GH}/chatbot_python_webScraping`, tone: "ink", image: scraperImg,
    role: "Sole builder",
    status: "Used for data side-projects",
    problem: "Every scraping job ends up rewriting the same plumbing — retries, rotating headers, parsing, dedup, storage.",
    approach: "Modular pipeline: Scrapy spiders for static, Selenium for dynamic, shared middleware for retries / proxies / UA rotation, output adapters for CSV / JSON / SQLite.",
    features: [
      "Pluggable spiders (static + headless)",
      "Anti-bot middleware: UA rotation, proxy, backoff",
      "Cleaning + dedup pipeline",
      "Pluggable output (CSV / JSON / SQLite)",
    ],
  },
  {
    num: "009", title: "DEVFOLIO", kind: "Portfolio Engine", year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    blurb: "The site you're reading. A small system for editorial developer storytelling.",
    href: `${GH}/DevFolio`, demo: "/", tone: "paper", image: devfolioImg,
    role: "Designer + builder",
    status: "Live",
    problem: "Every dev portfolio looks the same: dark gradient, centered hero, three cards. I wanted something that read like a magazine, not a template.",
    approach: "Editorial brutalist system — paper + ember palette, large serif italics, marker labels, broken grid, horizontal catalogue, terminal mode for power users.",
    features: [
      "Editorial system with custom type pairing",
      "Horizontal scroll catalogue (this page)",
      "Terminal command palette (⌘K)",
      "Custom cursor + smooth scroll",
      "Zero off-the-shelf templates",
    ],
  },
];

function ProjectsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <main className="bg-cream text-ink relative">
      <div className="hidden md:block absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-ember/10 to-transparent pointer-events-none" />
      <section className="pt-24 md:pt-32 px-6 md:pl-32 md:pr-10 pb-8 md:pb-16 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div><div className="mt-1">Catalogue</div>
            <div className="hidden md:block mt-4 mono text-[10px] tracking-[0.2em] uppercase text-ink/30">09 shipped · 03 featured</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h1 className="display text-[46px] leading-[0.85] sm:text-6xl md:text-[10vw] relative">
              <span className="absolute -top-6 -left-4 hidden md:block mono text-[10px] tracking-[0.25em] uppercase text-ember/40 border border-ember/15 bg-ember/5 px-2 py-1 rounded-full">catalogue / 2023—2026</span>
              Selected <span className="display-italic text-ember relative">works,<span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ember/20 hidden md:block" /></span><br/>
              shipped <span className="display-italic">in public.</span>
            </h1>
            <p className="md:hidden mt-4 mono text-xs tracking-[0.14em] uppercase text-ink/60 flex items-center gap-2">
              <span className="w-5 h-px bg-ink/20" /> Swipe the cards — tap for case study
            </p>
            <div className="hidden md:flex mt-6 gap-2 mono text-[10px] tracking-widest uppercase">
              <span className="px-3 py-1.5 rounded-full bg-ink text-cream">All</span>
              <span className="px-3 py-1.5 rounded-full border border-ink/15">AI</span>
              <span className="px-3 py-1.5 rounded-full border border-ink/15">Backend</span>
              <span className="px-3 py-1.5 rounded-full border border-ink/15">Mobile</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 mono text-xs tracking-widest text-ink/60 hidden md:block">
            <div className="inline-flex items-center gap-2 glass px-3 py-2 rounded-full border border-ink/10">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              {String(active + 1).padStart(3, "0")} / {String(projects.length).padStart(3, "0")} · {projects[active].title}
            </div>
            <div className="mt-3 text-ink/50 mono text-[10px] tracking-[0.2em] uppercase">click a card → case study <span className="ml-2">↗</span></div>
          </div>
        </motion.div>
      </section>

      {/* DESKTOP — pinned horizontal scroll */}
      <div ref={trackRef} className="relative hidden md:block" style={{ height: `${projects.length * 75}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-12 pl-32 pr-[20vw]">
            {projects.map((p, i) => (
              <ProjectCard key={p.num} p={p} onEnter={() => setActive(i)} onOpen={() => setOpenIdx(i)} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* MOBILE — dynamic swipeable carousel + progress */}
      <MobileCarousel projects={projects} onOpen={setOpenIdx} active={active} setActive={setActive} />

      <section className="px-6 md:pl-32 md:pr-10 py-16 md:py-32">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-12 gap-4 mb-8 md:mb-12">
          <div className="col-span-12 md:col-span-2 marker text-ink/60 flex md:block gap-2"><span>03 —</span><span>Index</span></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-4xl md:text-8xl">All <span className="display-italic">archives.</span></h2>
            <p className="md:hidden mono text-xs tracking-widest uppercase text-ink/50 mt-2">tap any row → open case study</p>
          </div>
        </motion.div>
        <ul className="border-t border-ink/30 rounded-2xl md:rounded-none overflow-hidden md:overflow-visible border md:border-0 md:border-t">
          {projects.map((p, i) => (
            <motion.li key={p.num} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }} className="border-b border-ink/15 md:border-ink/30 last:border-b-0 md:last:border-b bg-cream">
              <button
                onClick={() => setOpenIdx(i)}
                className="w-full text-left grid grid-cols-12 gap-2 md:gap-4 items-center py-5 md:py-8 hover:bg-ink hover:text-cream active:bg-ink active:text-cream transition-colors duration-300 md:duration-500 px-4 md:px-2 group"
              >
                <span className="col-span-2 mono text-xs opacity-60 hidden md:block">{p.num}</span>
                <span className="col-span-8 md:col-span-5 display text-2xl md:text-5xl leading-none">{p.title}</span>
                <span className="col-span-4 md:col-span-3 mono text-[11px] md:text-xs uppercase tracking-widest opacity-70 text-right md:text-left leading-tight">{p.kind}</span>
                <span className="col-span-12 md:col-span-2 flex md:justify-end items-center gap-2 mono text-xs opacity-70 group-hover:text-ember md:text-right">
                  <span className="md:hidden mono text-[10px] border border-current/20 px-2 py-1 rounded-full">{p.year}</span>
                  <span className="hidden md:inline">{p.year} ↗</span>
                  <span className="md:hidden ml-auto text-ember">→</span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-cream px-6 md:pl-32 md:pr-10 py-16 md:py-32 rounded-t-[20px] md:rounded-none -mx-0">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-cream/50 flex md:block gap-2"><span>04 —</span><span>Outro</span></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-[36px] leading-[0.9] sm:text-5xl md:text-8xl">Want one of these built for you? <Link to="/contact" className="display-italic text-ember link-edge">Get in touch.</Link></h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 mono text-xs tracking-[0.2em] uppercase">
              <Link to="/contact" className="px-6 py-4 bg-cream text-ink text-center rounded-full md:rounded-none hover-lift">Start a project →</Link>
              <Link to="/" className="px-6 py-4 border border-cream/20 text-center rounded-full md:rounded-none">Back to index</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {openIdx !== null && (
          <CaseStudyModal project={projects[openIdx]} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function MobileCarousel({ projects, onOpen, active, setActive }: { projects: Project[]; onOpen: (i: number) => void; active: number; setActive: (n: number) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    // update active index based on scroll position
    const idx = Math.round((el.scrollLeft / max) * (projects.length - 1));
    if (!isNaN(idx) && idx >= 0 && idx < projects.length) setActive(idx);
  };

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 16 : 0;
    el.scrollTo({ left: i * cardW, behavior: "smooth" });
  };

  return (
    <div className="md:hidden">
      {/* progress bar */}
      <div className="mx-6 h-px bg-ink/10 relative overflow-hidden">
        <motion.div className="absolute left-0 top-0 h-px bg-ember" style={{ width: `${(progress * 100).toFixed(1)}%` }} />
      </div>
      <div className="px-6 py-3 flex items-center justify-between mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
        <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} · {projects[active]?.title}</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" /> drag →</span>
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 pb-6 pt-2 scrollbar-none overscroll-x-contain"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" as any }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="snap-center shrink-0 w-[84vw] max-w-[360px]"
          >
            <ProjectCard p={p} onEnter={() => setActive(i)} onOpen={() => onOpen(i)} compact />
          </motion.div>
        ))}
      </div>

      {/* dots */}
      <div className="flex justify-center gap-1.5 pb-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${projects[i].title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-ember" : "w-1.5 bg-ink/20"}`}
          />
        ))}
      </div>

      {/* hint swipe arrow */}
      <div className="flex justify-center pb-2 md:hidden">
        <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="mono text-[10px] tracking-[0.2em] uppercase text-ink/30 flex items-center gap-2">
          swipe <span>→</span>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ p, onEnter, onOpen, compact }: { p: Project; onEnter: () => void; onOpen: () => void; compact?: boolean }) {
  const tones: Record<Project["tone"], string> = {
    ember: "bg-ember text-cream",
    ink: "bg-ink text-cream",
    amber: "bg-amber text-ink",
    paper: "bg-paper text-ink",
    rust: "bg-rust text-cream",
  };
  const isNew = p.num === "001";
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <motion.article
      onViewportEnter={onEnter}
      viewport={{ amount: 0.5 }}
      onClick={onOpen}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
        if (compact || window.matchMedia("(pointer: coarse)").matches) return;
        const el = e.currentTarget as HTMLElement;
        const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -5;
        const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      }}
      className={`shrink-0 ${compact ? "w-full h-[58vh] min-h-[420px] max-h-[540px] rounded-2xl" : "w-[80vw] md:w-[55vw] h-[70vh] rounded-[18px] md:rounded-none"} ${tones[p.tone]} relative overflow-hidden flex flex-col hover-lift cursor-pointer group active:shadow-xl transition-all tilt border border-ink/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]`}
    >
      {isNew && <span className="absolute top-4 left-4 z-10 mono text-[9px] tracking-[0.2em] uppercase bg-cream text-ember border border-ember/20 px-2.5 py-1 rounded-full shadow-sm">● FEATURED — 2026</span>}
      {/* insane 2D: cursor-follow glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10 hidden md:block" style={{ background: `radial-gradient(420px 320px at ${pos.x}% ${pos.y}%, oklch(1 0 0 / 0.14), transparent 68%)` }} />
      <div className="shine z-20" />
      <div className="relative h-[48%] md:h-1/2 w-full overflow-hidden bg-ink/20">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] group-active:scale-[1.02] will-change-transform group-hover:[filter:contrast(1.06)_saturate(1.08)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60 pointer-events-none" />
        {/* duotone insane on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none hidden md:block" style={{ background: `radial-gradient(520px 320px at ${pos.x}% 30%, oklch(0.58 0.18 38 / 0.22), transparent 70%)` }} />
        <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex items-start justify-between mono text-[11px] md:text-xs tracking-[0.25em] uppercase text-cream">
          <div className={`bg-ink/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-cream/10 ${isNew ? "mt-6" : ""}`}>
            <div>{p.num} / case</div>
            <div className="mt-0.5 opacity-70 text-[10px]">{p.year}</div>
          </div>
          <div className="bg-ink/60 backdrop-blur-md px-2.5 py-1.5 text-right rounded-full border border-cream/10 hidden sm:block">
            {p.stack.slice(0, 3).map((s) => <div key={s} className="text-[10px] leading-tight">{s}</div>)}
          </div>
        </div>
        {/* mobile stack badge */}
        <div className="absolute bottom-3 left-3 right-3 flex md:hidden gap-1.5 flex-wrap">
          {p.stack.slice(0, 3).map((s) => (
            <span key={s} className="mono text-[9px] tracking-widest uppercase bg-cream/95 text-ink px-2 py-1 rounded-full border border-ink/10 backdrop-blur">{s}</span>
          ))}
        </div>
      </div>

      <div className="h-[52%] md:h-1/2 flex flex-col justify-between p-5 md:p-10 relative">
        <div className="absolute top-0 left-5 right-5 h-px bg-current/10 hidden md:block" />
        <div>
          <div className="mono text-[10px] md:text-xs tracking-[0.25em] uppercase opacity-70 mb-2 md:mb-3 flex items-center gap-2">
            {p.kind}
            <span className="hidden md:inline-flex w-8 h-px bg-current/20 relative overflow-hidden"><span className="absolute inset-0 bg-current translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" /></span>
            <span className="md:hidden w-6 h-px bg-current/30" />
          </div>
          <h3 className="display text-[32px] leading-none sm:text-5xl md:text-[5.5vw] md:leading-[0.85] group-hover:tracking-[-0.03em] transition-all duration-300">{p.title}</h3>
        </div>
        <div className="flex items-end justify-between gap-4 md:gap-6">
          <p className="max-w-md text-[13px] md:text-base font-light leading-snug opacity-90 line-clamp-3 md:line-clamp-none">{p.blurb}</p>
          <span className="mono text-[10px] md:text-xs tracking-[0.25em] uppercase shrink-0 border border-current/20 group-hover:border-current group-hover:bg-cream group-hover:text-ink px-3 py-1.5 rounded-full md:rounded-none md:border-0 md:border-b md:px-0 md:py-0 md:group-hover:bg-transparent md:group-hover:text-current pb-1 group-active:border-ember transition-colors">
            open →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isMobile = useIsMobile();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-[6px] flex items-end md:items-center justify-center md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: isMobile ? "100%" : 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: isMobile ? "100%" : 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        drag={isMobile ? "y" : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => { if (info.offset.y > 120) onClose(); }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-cream text-ink w-full md:max-w-6xl md:w-full max-h-[92dvh] md:max-h-[90vh] overflow-y-auto overscroll-contain rounded-t-[20px] md:rounded-sm shadow-2xl"
        data-lenis-prevent
      >
        {/* mobile drag handle */}
        <div className="md:hidden sticky top-0 z-20 bg-cream pt-3 pb-2 flex justify-center border-b border-ink/5">
          <div className="h-1.5 w-10 rounded-full bg-ink/20" />
        </div>
        <button
          onClick={onClose}
          className="fixed md:absolute top-3 md:top-4 right-4 z-10 mono text-xs tracking-widest uppercase bg-ink text-cream px-4 py-2 rounded-full md:rounded-none hover:bg-ember transition-colors shadow-lg"
        >
          <span className="hidden md:inline">close ✕  ·  esc</span><span className="md:hidden">✕ close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-[70vh]">
          <div className="relative overflow-hidden bg-ink aspect-4/3 md:aspect-auto md:h-full">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="relative bg-cream text-ink flex flex-col justify-between p-8 md:p-12">
            <div className="flex items-start justify-between mono text-xs tracking-[0.25em] uppercase text-ink/70">
              <div>
                <div>{project.num} / case study</div>
                <div className="mt-1 opacity-60">{project.year}</div>
              </div>
              <div className="text-right">
                {project.stack.slice(0, 3).map((s) => <div key={s}>{s}</div>)}
              </div>
            </div>

            <div>
              <div className="mono text-xs tracking-[0.25em] uppercase text-ember mb-3">{project.kind}</div>
              <h2 className="display text-5xl md:text-7xl leading-[0.85]">{project.title}</h2>
            </div>

            <div className="flex items-end justify-between gap-6">
              <p className="max-w-md text-sm md:text-base font-light leading-snug text-ink/80">{project.blurb}</p>
              <span className="mono text-xs tracking-[0.25em] uppercase shrink-0 border-b border-ink pb-1">
                case study ↓
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 py-10 md:py-16 pb-20 md:pb-32 grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-4 space-y-6 md:sticky md:top-6 self-start">
            <MetaRow label="Role" value={project.role} />
            <MetaRow label="Status" value={project.status} />
            <MetaRow label="Year" value={project.year} />
            <div>
              <div className="marker text-ink/50 mb-2">Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="mono text-[10px] tracking-widest uppercase border border-ink/30 px-2 py-1">{s}</span>
                ))}
              </div>
            </div>
            {project.metrics && (
              <div className="space-y-3 pt-4 border-t border-ink/20">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between items-baseline">
                    <span className="marker text-ink/50">{m.label}</span>
                    <span className="display text-2xl">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-3 pt-4 border-t border-ink/20">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs tracking-[0.25em] uppercase bg-ink text-cream px-4 py-3 text-center hover:bg-ember transition-colors"
              >
                source on github →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-xs tracking-[0.25em] uppercase border border-ink px-4 py-3 text-center hover:bg-ink hover:text-cream transition-colors"
                >
                  live demo →
                </a>
              )}
            </div>
          </aside>

          <div className="col-span-12 md:col-span-8 space-y-10">
            <Section label="The blurb">
              <p className="display text-2xl md:text-4xl leading-tight">{project.blurb}</p>
            </Section>

            <Section label="The problem">
              <p className="text-base md:text-lg leading-relaxed text-ink/80">{project.problem}</p>
            </Section>

            <Section label="The approach">
              <p className="text-base md:text-lg leading-relaxed text-ink/80">{project.approach}</p>
            </Section>

            <Section label="What it does">
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-4 border-b border-ink/15 pb-3">
                    <span className="mono text-xs text-ember tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base md:text-lg text-ink/85">{f}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section label="Screens">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(project.gallery ?? [project.image]).map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-ink/5 border border-ink/10 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screen ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
            </Section>

          </div>
        </div>

        <div className="border-t border-ink/20 px-6 md:px-10 py-8 flex items-center justify-between">
          <span className="marker text-ink/50">End of case · {project.num}</span>
          <button onClick={onClose} className="mono text-xs tracking-widest uppercase hover:text-ember">
            ← back to catalogue
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="marker text-ink/50 mb-1">{label}</div>
      <div className="text-base">{value}</div>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="marker text-ink/50 mb-4 flex items-center gap-3">
        <span className="w-8 h-px bg-ember" /> {label}
      </div>
      {children}
    </section>
  );
}
