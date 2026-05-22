import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  tone: "ember" | "ink" | "amber" | "paper";
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
    num: "001", title: "EXFORGE", kind: "AI Extension Builder", year: "2025",
    stack: ["LangChain", "Python", "OpenAI", "Agents"],
    blurb: "AI-powered extension builder that uses intelligent agents to write production-ready code from plain-English prompts.",
    href: `${GH}/Extension`, tone: "ember", image: exforge1, gallery: [exforge1, exforge2],
    role: "Sole builder · Architecture, agent design, prompt eng.",
    status: "In active development",
    problem: "Writing browser/IDE extensions is repetitive — manifest, views, config, packaging. Most prompt-to-code tools stop at a snippet and leave you stitching.",
    approach: "Multi-agent pipeline: a planner decomposes the prompt, a coder agent emits files, a reviewer agent runs static checks, and a packager bundles the output. State passes through a typed LangChain graph so each step is replayable.",
    features: [
      "Plain-English → fully scaffolded extension",
      "Agent-graph with planner, coder, reviewer, packager",
      "Generates views, config, tests, and docs in one pass",
      "Streaming output with per-file diff preview",
      "Local-first: bring your own OpenAI key",
    ],
    metrics: [{ label: "Avg gen time", value: "~45s" }, { label: "Files / run", value: "8–14" }],
  },
  {
    num: "002", title: "MINT", kind: "SMS Expense Tracker", year: "2024",
    stack: ["Flutter", "Firebase", "Dart"],
    blurb: "Privacy-first expense tracker that parses bank SMS on-device with ~99% accuracy.",
    href: `${GH}/ExpenseTracker_sms-based`, tone: "amber", image: mint1, gallery: [mint1, mint2],
    role: "Sole builder · App, parser, sync",
    status: "Released · used personally",
    problem: "Indian bank SMS formats are messy and inconsistent. Existing apps either upload them to a server (privacy hit) or miss half the transactions.",
    approach: "Built a tolerant regex + heuristic parser that runs entirely on-device. Categorises by merchant patterns. Firebase only stores derived aggregates, never raw SMS.",
    features: [
      "On-device SMS parsing — nothing leaves the phone raw",
      "Auto-categorisation by merchant signatures",
      "Monthly budget envelopes with overspend alerts",
      "Spending charts with category drill-down",
      "Encrypted cloud backup of aggregates only",
    ],
    metrics: [{ label: "Parse accuracy", value: "~99%" }, { label: "Banks supported", value: "12+" }],
  },
  {
    num: "003", title: "SYSMON", kind: "System Monitor + Remote", year: "2024",
    stack: ["Python", "FastAPI", "Flutter", "WebSockets"],
    blurb: "Secure real-time PC monitoring + remote control with a paired mobile companion.",
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
    num: "004", title: "GAMING ADVISOR", kind: "Performance Tuner", year: "2024",
    stack: ["Python", "Telemetry", "Desktop"],
    blurb: "Reads your rig and recommends precise settings to push every frame.",
    href: `${GH}/gaming-advisor`, tone: "paper", image: gamingImg,
    role: "Sole builder",
    status: "Prototype",
    problem: "Tweaking graphics settings per game is guesswork. Generic 'optimisers' just lower everything.",
    approach: "Profiles the rig (CPU, GPU, RAM, thermals), reads installed games, maps each to a known engine, and outputs a per-game preset tuned for a target FPS.",
    features: [
      "Hardware profiling + thermal headroom check",
      "Per-game preset generation with target FPS",
      "Live CPU/GPU monitoring overlay",
      "Engine-aware tuning (UE, Unity, idTech, etc.)",
    ],
  },
  {
    num: "005", title: "E-SHOP", kind: "Commerce Surface", year: "2024",
    stack: ["React", "Node", "Stripe"],
    blurb: "Modern e-commerce front with catalog, cart, payments, auth, and order tracking.",
    href: `${GH}/e-shop`, tone: "ember", image: eshop1, gallery: [eshop1, eshop2, eshop3],
    role: "Full-stack build",
    status: "Coursework / portfolio piece",
    problem: "Most starter shops ship with bloated templates. I wanted a clean, fast surface I could actually reuse.",
    approach: "Composable React front, Node + REST API, Stripe for payments, JWT auth, push notifications via FCM. Designed mobile-first.",
    features: [
      "Product catalog with filtering + search",
      "Cart + secure Stripe checkout",
      "Auth (JWT) and order history",
      "Push notifications for order status",
      "Admin dashboard for inventory",
    ],
  },
  {
    num: "006", title: "CHATBOT EXT", kind: "Browser Extension", year: "2024",
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
    num: "007", title: "SCRAPER BOT", kind: "Web Scraping Suite", year: "2024",
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
    num: "008", title: "DEVFOLIO", kind: "Portfolio Engine", year: "2026",
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

  return (
    <main className="bg-cream text-ink">
      <section className="pt-32 px-6 md:pl-32 md:pr-10 pb-16">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div><div className="mt-1">Catalogue</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h1 className="display text-6xl md:text-[10vw] leading-[0.85]">
              Selected <span className="display-italic text-ember">works,</span><br/>
              shipped <span className="display-italic">in public.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 mono text-xs tracking-widest text-ink/60">
            <div>{String(active + 1).padStart(3, "0")} / {String(projects.length).padStart(3, "0")}</div>
            <div className="mt-2 text-ink">{projects[active].title}</div>
            <div className="mt-1 text-ink/50">{projects[active].kind}</div>
            <div className="mt-4 text-ink/50">click a card → case study</div>
          </div>
        </div>
      </section>

      <div ref={trackRef} className="relative" style={{ height: `${projects.length * 75}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-12 pl-6 md:pl-32 pr-[20vw]">
            {projects.map((p, i) => (
              <ProjectCard key={p.num} p={p} onEnter={() => setActive(i)} onOpen={() => setOpenIdx(i)} />
            ))}
          </motion.div>
        </div>
      </div>

      <section className="px-6 md:pl-32 md:pr-10 py-32">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-2 marker text-ink/60"><div>03 —</div><div className="mt-1">Index</div></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-8xl">All <span className="display-italic">archives.</span></h2>
          </div>
        </div>
        <ul className="border-t border-ink/30">
          {projects.map((p, i) => (
            <li key={p.num} className="border-b border-ink/30">
              <button
                onClick={() => setOpenIdx(i)}
                className="w-full text-left grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-ink hover:text-cream transition-colors duration-500 px-2 group"
              >
                <span className="col-span-2 mono text-xs opacity-60">{p.num}</span>
                <span className="col-span-12 md:col-span-5 display text-3xl md:text-5xl">{p.title}</span>
                <span className="col-span-6 md:col-span-3 mono text-xs uppercase tracking-widest opacity-70">{p.kind}</span>
                <span className="col-span-6 md:col-span-2 text-right mono text-xs opacity-70 group-hover:text-ember">{p.year} ↗</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-cream px-6 md:pl-32 md:pr-10 py-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-cream/50">04 — Outro</div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-8xl">Want one of these built for you? <Link to="/contact" className="display-italic text-ember link-edge">Get in touch.</Link></h2>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openIdx !== null && (
          <CaseStudyModal project={projects[openIdx]} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectCard({ p, onEnter, onOpen }: { p: Project; onEnter: () => void; onOpen: () => void }) {
  const tones: Record<Project["tone"], string> = {
    ember: "bg-ember text-cream",
    ink: "bg-ink text-cream",
    amber: "bg-amber text-ink",
    paper: "bg-paper text-ink",
  };
  return (
    <motion.article
      onViewportEnter={onEnter}
      viewport={{ amount: 0.5 }}
      onClick={onOpen}
      className={`shrink-0 w-[80vw] md:w-[55vw] h-[70vh] ${tones[p.tone]} relative overflow-hidden flex flex-col hover-lift cursor-pointer group`}
    >
      <div className="relative h-1/2 w-full overflow-hidden bg-ink/20">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-start justify-between mono text-xs tracking-[0.25em] uppercase text-cream">
          <div className="bg-ink/60 backdrop-blur-sm px-2 py-1">
            <div>{p.num} / case</div>
            <div className="mt-1 opacity-70">{p.year}</div>
          </div>
          <div className="bg-ink/60 backdrop-blur-sm px-2 py-1 text-right">
            {p.stack.slice(0, 3).map((s) => <div key={s}>{s}</div>)}
          </div>
        </div>
      </div>

      <div className="h-1/2 flex flex-col justify-between p-6 md:p-10">
        <div>
          <div className="mono text-xs tracking-[0.25em] uppercase opacity-70 mb-3">{p.kind}</div>
          <h3 className="display text-5xl md:text-[5.5vw] leading-[0.85]">{p.title}</h3>
        </div>
        <div className="flex items-end justify-between gap-6">
          <p className="max-w-md text-sm md:text-base font-light leading-snug opacity-90">{p.blurb}</p>
          <span className="mono text-xs tracking-[0.25em] uppercase shrink-0 border-b border-current pb-1">
            open case →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative min-h-screen bg-cream text-ink max-w-6xl mx-auto md:my-8 md:rounded-sm"
      >
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-10 mono text-xs tracking-widest uppercase bg-ink text-cream px-4 py-2 hover:bg-ember transition-colors"
        >
          close ✕  ·  esc
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-[70vh]">
          <div className="relative overflow-hidden bg-ink aspect-[4/3] md:aspect-auto md:h-full">
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

        <div className="px-6 md:px-10 py-10 md:py-16 grid grid-cols-12 gap-6">
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
