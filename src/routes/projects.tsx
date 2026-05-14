import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  tone: "ember" | "ink" | "amber" | "paper";
};

const GH = "https://github.com/vivek123r";

const projects: Project[] = [
  {
    num: "001", title: "EXFORGE", kind: "AI Extension Builder", year: "2025",
    stack: ["LangChain", "Python", "Agents"],
    blurb: "AI-powered extension builder that uses intelligent agents to write production-ready code. Plain-English prompts → complete extensions with views, configuration, tests, docs.",
    href: `${GH}/Extension`, tone: "ember",
  },
  {
    num: "002", title: "MINT", kind: "SMS Expense Tracker", year: "2024",
    stack: ["Flutter", "Firebase", "Dart"],
    blurb: "Privacy-focused expense tracker that parses SMS transactions on-device with 99% accuracy. Real-time monitoring, category analysis, budget planning, charts.",
    href: `${GH}/ExpenseTracker_sms-based`, tone: "amber",
  },
  {
    num: "003", title: "SYSMON", kind: "System Monitor", year: "2024",
    stack: ["Python", "FastAPI", "Flutter"],
    blurb: "Secure real-time PC monitoring + remote control. CPU/RAM/GPU/Disk/Network/Battery streamed to mobile. LAN file sharing via QR, multi-user devices, command logging.",
    href: `${GH}/SystemMonitor`, tone: "ink",
  },
  {
    num: "004", title: "GAMING ADVISOR", kind: "Performance Tuner", year: "2024",
    stack: ["Python", "Telemetry", "Desktop"],
    blurb: "Reads your rig, recommends precise settings to push every frame. Game perf analysis, personalized graphics presets, real-time CPU/GPU monitoring.",
    href: `${GH}/gaming-advisor`, tone: "paper",
  },
  {
    num: "005", title: "E-SHOP", kind: "Commerce Surface", year: "2024",
    stack: ["React", "Node", "Payments"],
    blurb: "Modern e-commerce front. Catalog, cart, secure payment integration, auth, order tracking, push notifications. Quiet UX, loud merchandising.",
    href: `${GH}/e-shop`, tone: "ember",
  },
  {
    num: "006", title: "CHATBOT EXT", kind: "VS Code Extension", year: "2024",
    stack: ["JS", "VSCode API"],
    blurb: "Visual Studio Code extension for developer productivity — code snippets, syntax highlighting, intelligent autocomplete, debugging tools.",
    href: `${GH}/Extension`, tone: "amber",
  },
  {
    num: "007", title: "SCRAPER BOT", kind: "Web Scraping Suite", year: "2024",
    stack: ["Python", "Selenium", "Scrapy"],
    blurb: "Advanced web scraping with BeautifulSoup, Scrapy, Selenium. Automated extraction, anti-bot bypass, cleaning + processing pipeline.",
    href: `${GH}/chatbot_python_webScraping`, tone: "ink",
  },
  {
    num: "008", title: "DEVFOLIO", kind: "Portfolio Engine", year: "2026",
    stack: ["React", "TS", "Tailwind"],
    blurb: "The site you're reading. A small system for editorial developer storytelling — broken grids, kinetic type, terminal mode, zero templates.",
    href: `${GH}/DevFolio`, tone: "paper",
  },
];

function ProjectsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  // 8 cards, scroll 7/8 of the way
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);
  const [active, setActive] = useState(0);

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
          </div>
        </div>
      </section>

      <div ref={trackRef} className="relative" style={{ height: `${projects.length * 75}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-12 pl-6 md:pl-32 pr-[20vw]">
            {projects.map((p, i) => (
              <ProjectCard key={p.num} p={p} onEnter={() => setActive(i)} />
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
          {projects.map((p) => (
            <li key={p.num} className="border-b border-ink/30">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-ink hover:text-cream transition-colors duration-500 px-2 group">
                <span className="col-span-2 mono text-xs opacity-60">{p.num}</span>
                <span className="col-span-12 md:col-span-5 display text-3xl md:text-5xl">{p.title}</span>
                <span className="col-span-6 md:col-span-3 mono text-xs uppercase tracking-widest opacity-70">{p.kind}</span>
                <span className="col-span-6 md:col-span-2 text-right mono text-xs opacity-70 group-hover:text-ember">{p.year} ↗</span>
              </a>
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
    </main>
  );
}

function ProjectCard({ p, onEnter }: { p: Project; onEnter: () => void }) {
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
      className={`shrink-0 w-[80vw] md:w-[55vw] h-[70vh] ${tones[p.tone]} relative overflow-hidden flex flex-col justify-between p-8 md:p-12 hover-lift`}
    >
      <div className="flex items-start justify-between">
        <div className="mono text-xs tracking-[0.25em] uppercase opacity-80">
          <div>{p.num} / case study</div>
          <div className="mt-1 opacity-60">{p.year}</div>
        </div>
        <div className="mono text-xs tracking-[0.25em] uppercase opacity-80 text-right">
          {p.stack.map((s) => <div key={s}>{s}</div>)}
        </div>
      </div>

      <div>
        <div className="mono text-xs tracking-[0.25em] uppercase opacity-70 mb-3">{p.kind}</div>
        <h3 className="display text-6xl md:text-[7vw] leading-[0.85]">{p.title}</h3>
      </div>

      <div className="flex items-end justify-between gap-6">
        <p className="max-w-md text-sm md:text-base font-light leading-snug opacity-90">{p.blurb}</p>
        <a href={p.href} target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-[0.25em] uppercase shrink-0 border-b border-current pb-1 hover:opacity-70">
          github →
        </a>
      </div>
    </motion.article>
  );
}
