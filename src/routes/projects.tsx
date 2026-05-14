import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Vivek R — Catalogue / Work" },
      { name: "description", content: "A horizontal catalogue of projects: AI agents, mobile apps, system tools." },
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
  tone: "ember" | "ink" | "amber" | "paper";
};

const projects: Project[] = [
  {
    num: "001",
    title: "EXFORGE",
    kind: "AI Extension Builder",
    year: "2025",
    stack: ["LangChain", "Python", "Agents"],
    blurb: "An AI-powered extension builder. Plain English in, production-ready code out. Multi-agent orchestration with deterministic guardrails.",
    tone: "ember",
  },
  {
    num: "002",
    title: "MINT",
    kind: "Expense Tracker",
    year: "2024",
    stack: ["Flutter", "Firebase", "Dart"],
    blurb: "SMS-driven expense intelligence. Parses transactional messages on-device into a clean ledger with category planning and budget pacing.",
    tone: "amber",
  },
  {
    num: "003",
    title: "SYSMON",
    kind: "Real-time Monitor",
    year: "2024",
    stack: ["Python", "FastAPI", "Flutter"],
    blurb: "A secure real-time PC monitoring and remote-control surface. CPU, RAM, GPU, network — streamed and steerable from your phone.",
    tone: "ink",
  },
  {
    num: "004",
    title: "GAMING ADVISOR",
    kind: "System Optimizer",
    year: "2024",
    stack: ["Python", "Telemetry"],
    blurb: "Reads your rig, recommends the precise settings to push every frame. A small daemon with strong opinions.",
    tone: "paper",
  },
  {
    num: "005",
    title: "E-SHOP",
    kind: "Commerce Surface",
    year: "2023",
    stack: ["React", "Node", "Stripe"],
    blurb: "An editorial commerce front-end. Catalog, cart, secure checkout, push notifications — quiet UX, loud merchandising.",
    tone: "ember",
  },
  {
    num: "006",
    title: "DEVFOLIO",
    kind: "Portfolio Engine",
    year: "2026",
    stack: ["React", "TS", "Tailwind"],
    blurb: "The site you're reading. A small system for editorial developer storytelling — broken grids, kinetic type, and zero templates.",
    tone: "ink",
  },
];

function ProjectsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const [active, setActive] = useState(0);

  return (
    <main className="bg-cream text-ink">
      {/* Header */}
      <section className="pt-32 px-6 md:pl-32 md:pr-10 pb-16">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div><div className="mt-1">Catalogue</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h1 className="display text-6xl md:text-[10vw] leading-[0.85]">
              Selected <span className="display-italic text-ember">work,</span><br/>
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

      {/* Horizontal scroll */}
      <div ref={trackRef} className="relative" style={{ height: `${projects.length * 80}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-12 pl-6 md:pl-32 pr-[20vw]">
            {projects.map((p, i) => (
              <ProjectCard key={p.num} p={p} onEnter={() => setActive(i)} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Index list */}
      <section className="px-6 md:pl-32 md:pr-10 py-32">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-2 marker text-ink/60"><div>03 —</div><div className="mt-1">Index</div></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-8xl">All <span className="display-italic">archives.</span></h2>
          </div>
        </div>
        <ul className="border-t border-ink/30">
          {projects.map((p) => (
            <li key={p.num} className="group border-b border-ink/30 grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-ink hover:text-cream transition-colors duration-500 px-2">
              <span className="col-span-2 mono text-xs opacity-60">{p.num}</span>
              <span className="col-span-12 md:col-span-5 display text-3xl md:text-5xl">{p.title}</span>
              <span className="col-span-6 md:col-span-3 mono text-xs uppercase tracking-widest opacity-70">{p.kind}</span>
              <span className="col-span-6 md:col-span-2 text-right mono text-xs opacity-70">{p.year} →</span>
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
        <h3 className="display text-6xl md:text-[8vw] leading-[0.85]">{p.title}</h3>
      </div>

      <div className="flex items-end justify-between gap-6">
        <p className="max-w-sm text-sm md:text-base font-light leading-snug opacity-90">{p.blurb}</p>
        <span className="mono text-xs tracking-[0.25em] uppercase shrink-0 border-b border-current pb-1">view →</span>
      </div>
    </motion.article>
  );
}
