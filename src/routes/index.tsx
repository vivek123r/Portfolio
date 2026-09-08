import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "@/components/Marquee";
import { useIsMobile } from "@/hooks/use-mobile";
import { DotGrid } from "@/components/DotGrid";
import { ScrambleText, StaggerLetters } from "@/components/ScrambleText";
import { FloatingPaper } from "@/components/FloatingPaper";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vivek R — Developer Portfolio · AI · Mobile · Cloud" },
      { name: "description", content: "Personal portfolio of Vivek R — Self-taught developer & engineer shipping projects across AI/ML, mobile, and cloud." },
    ],
  }),
});

const skills = [
  { name: "AI & Automation", sub: "intelligent systems", items: ["LangChain", "LangGraph", "n8n", "LLMs", "Prompt Engineering", "Vector Databases", "OCR", "AI Agents"] },
  { name: "Mobile", sub: "cross-platform", items: ["Flutter", "Dart", "Firebase", "Firestore", "WebSockets"] },
  { name: "Backend", sub: "server-side power", items: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Python", "FastAPI", "JWT Auth", "REST APIs", "Migrations"] },
  { name: "Frontend", sub: "interfaces", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
  { name: "Cloud / DevOps", sub: "infrastructure", items: ["AWS (EC2, S3, IAM, Lambda)", "Docker", "Kubernetes", "Firebase", "CI/CD", "CloudWatch"] },
  { name: "Tools / Lang", sub: "the craft", items: ["Git", "SQL", "PostgreSQL", "TypeScript", "Jest", "Postman", "Validation", "Regex"] },
];

const rotating = [
  "Currently shipping side projects",
  "Learning by building, daily",
  "Open to full-time & collabs",
  "Writing code that actually runs",
];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, mass: 0.8 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const { scrollYProgress: fieldProg } = useScroll({ target: fieldRef, offset: ["start 0.75", "end 0.55"] });
  const fieldLine = useSpring(useTransform(fieldProg, [0, 1], ["0%", "100%"]), { stiffness: 120, damping: 20 });

  const [rotIdx, setRotIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRotIdx((i) => (i + 1) % rotating.length), 2400);
    return () => clearInterval(id);
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <main className="bg-cream text-ink overflow-x-hidden relative">
      {/* HERO */}
      <section ref={ref} className="relative min-h-[100dvh] pt-20 md:pt-24 md:pl-32 pl-6 pr-6 md:pr-10 pb-8 md:pb-20 flex flex-col justify-between overflow-hidden isolate">
        {/* insane 2D: reactive dot grid + floating paper */}
        <DotGrid />
        <FloatingPaper />
        {/* mind-blow: faint grid + beam */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent hidden md:block" />
        {/* floating code glass — desktop */}
        <motion.div variants={rise} initial="hidden" animate="show" className="hidden lg:block absolute right-[6%] top-[18%] glass rounded-2xl p-4 w-[300px] rotate-[-1deg] float shadow-xl">
          <div className="mono text-[10px] tracking-widest text-ink/40 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ember animate-pulse" /> api.service.ts</div>
          <div className="mono text-[11px] leading-relaxed text-ink">
            <span className="text-ember">@UseGuards</span>(JwtAuthGuard)<br/>
            <span className="text-ink/60">async</span> create(<span className="text-ember">dto: CreateDto</span>) {"{"}<br/>
            &nbsp;&nbsp;<span className="text-ink/60">return</span> <span className="text-ember">this</span>.repo.save(dto)<br/>
            {"}"}
          </div>
          <div className="mt-3 mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full inline-flex items-center gap-1">● migrations ok — 12 tables</div>
        </motion.div>
        <motion.div variants={rise} initial="hidden" animate="show" className="hidden lg:block absolute right-[10%] bottom-[28%] glass rounded-2xl p-3 w-[220px] rotate-[0.8deg] float-delayed shadow-lg">
          <div className="mono text-[10px] tracking-widest text-ink/50">stack</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["NestJS", "PostgreSQL", "TypeORM", "JWT"].map((t) => (
              <span key={t} className="mono text-[10px] tracking-widest uppercase bg-ink text-cream px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <div className="mt-2 h-1 bg-ink/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1.2, delay: 1 }} className="h-full bg-ember" /></div>
          <div className="mono text-[10px] text-ink/50 mt-1">backend coverage 78%</div>
        </motion.div>

        <motion.div style={{ opacity: isMobile ? 1 : heroOpacity }} variants={stagger} initial="hidden" animate="show">
          <motion.div variants={rise} className="grid grid-cols-12 gap-4 mt-2 md:mt-6">
            <div className="col-span-12 md:col-span-2 mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
              <div className="inline-flex items-center gap-2 border border-ink/10 bg-cream/70 backdrop-blur px-2 py-1 rounded-full">// 01 — file: hero.tsx</div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="text-ink mono text-[10px] tracking-[0.2em] uppercase">Available for work</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] border border-ember/20 bg-ember/10 text-ember px-2.5 py-1 rounded-full mono tracking-[0.2em] uppercase">● Full-Stack & AI Engineer</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-10 overflow-visible relative">
              {/* mind-blow: outlined ghost text behind */}
              <div aria-hidden className="display text-[18vw] sm:text-[20vw] md:text-[15vw] leading-[0.82] absolute inset-0 pointer-events-none select-none opacity-[0.06] hidden md:block" style={{ WebkitTextStroke: "1px var(--ink)" }}>Vivek R.</div>
              {/* insane 2D: kinetic stagger letters with glitch + RGB */}
              <motion.h1
                style={isMobile ? undefined : { y }}
                variants={rise}
                className="display text-[17vw] sm:text-[20vw] md:text-[15vw] leading-[0.82] will-change-transform relative group/hero rgb glitch-hover select-none"
              >
                <span className="inline-flex overflow-hidden">
                  <StaggerLetters text="Vivek" className="kinetic inline-flex" />
                </span>{" "}
                <span className="display-italic text-ember inline-flex relative overflow-hidden">
                  <StaggerLetters text="R." className="inline-flex" />
                  <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-2 left-0 right-0 h-[3px] bg-ember origin-left hidden md:block" />
                </span>
                {/* glitch copy on hover */}
                <span aria-hidden className="absolute inset-0 display text-[17vw] sm:text-[20vw] md:text-[15vw] leading-[0.82] text-ember opacity-0 group-hover/hero:opacity-[0.12] translate-x-[2px] transition-opacity pointer-events-none hidden md:block" style={{ WebkitTextStroke: "1px var(--ember)" }}>Vivek R.</span>
                <span aria-hidden className="absolute inset-0 display text-[17vw] sm:text-[20vw] md:text-[15vw] leading-[0.82] text-[oklch(0.62_0.14_280)] opacity-0 group-hover/hero:opacity-[0.08] -translate-x-[1.5px] transition-opacity pointer-events-none hidden md:block">Vivek R.</span>
              </motion.h1>
              <div className="hidden md:flex absolute -bottom-6 right-6 items-center gap-3">
                <span className="mono text-[10px] tracking-[0.25em] uppercase text-ink/40">scroll</span>
                <span className="w-12 h-px bg-ink/15 relative overflow-hidden"><motion.span animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 left-0 w-full bg-ember" /></span>
                <span className="w-6 h-6 rounded-full border border-ink/15 grid place-items-center text-[10px] animate-bounce">↓</span>
              </div>
              {/* mobile swipe hint */}
              <motion.div variants={rise} className="md:hidden mt-3 flex items-center gap-2 mono text-[10px] tracking-[0.2em] uppercase text-ink/40">
                <span className="w-6 h-px bg-ink/20" /> scroll to explore <span className="animate-bounce">↓</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={rise} className="grid grid-cols-12 gap-4 mt-6 md:mt-12 items-end">
            <div className="hidden md:block col-span-2">
              <div className="mono text-[10px] tracking-[0.2em] uppercase text-ink/40 mb-2">manifesto</div>
              <div className="w-12 h-px bg-ember" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[18px] md:text-[22px] leading-[1.25] font-light max-w-[560px]">
                Self-taught <em className="font-serif">builder</em> & <em className="font-serif text-ember">Full-Stack Engineer</em> — shipping NestJS + PostgreSQL APIs, AI agents, and mobile apps. I make things across <em className="font-serif">AI</em>, <em className="font-serif">mobile</em>, and <em className="font-serif">cloud</em>.
              </p>
              <div className="mt-4 md:mt-6 mono text-sm flex items-center gap-2 h-6 text-ember glass inline-flex px-3 py-1 rounded-full border border-ember/10 min-w-0">
                <span className="text-ink/50 shrink-0">{">"}</span>
                <span className="min-w-[220px] md:min-w-[300px] truncate">
                  <ScrambleText key={rotating[rotIdx]} text={rotating[rotIdx]} delay={80} />
                </span>
                <span className="animate-pulse shrink-0">▌</span>
              </div>
              <div className="mt-4 flex md:hidden flex-wrap gap-2 mono text-[10px] tracking-widest uppercase">
                <span className="px-3 py-1.5 rounded-full bg-ink text-cream">BACKEND · AI</span>
                <span className="px-3 py-1.5 rounded-full border border-ink/15">NestJS • TypeORM</span>
                <span className="px-3 py-1.5 rounded-full border border-ink/15">JWT • PostgreSQL</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-1 mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
              <div className="hidden md:block">Studio</div>
              <div className="text-ink mt-1 hidden md:block">Kerala, IN</div>
              <div className="hidden md:inline-block mt-4 mono text-[9px] border border-ink/10 px-2 py-1 rounded-full">12.97°N · 76.64°E</div>
              <div className="md:hidden flex items-center justify-between pt-3 pb-1 border-t border-ink/10">
                <span className="mono text-[10px] tracking-[0.18em]">Kerala, IN — Remote</span>
                <span className="mono text-[9px] border border-ink/10 px-2 py-0.5 rounded-full">12.97°N · 76.64°E</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex items-center md:justify-end gap-3 mt-1 md:mt-0">
              <Magnetic className="flex-1 md:flex-none">
                <Link
                  to="/projects"
                  className="w-full flex items-center justify-center px-6 py-3.5 md:py-4 bg-ink text-cream mono text-xs tracking-[0.2em] uppercase whitespace-nowrap hover-lift active:scale-[0.98] transition-transform shadow-[0_12px_30px_rgba(0,0,0,0.18)] rounded-full md:rounded-none relative overflow-hidden group"
                >
                  <span className="relative">See work →</span>
                  <span className="shine" />
                </Link>
              </Magnetic>
              <Magnetic className="flex-1 md:flex-none">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-6 py-3.5 md:py-4 border border-ink bg-cream/70 backdrop-blur mono text-xs tracking-[0.2em] uppercase whitespace-nowrap hover-lift active:scale-[0.98] transition-transform rounded-full md:rounded-none"
                >
                  Signal
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-auto md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-ink/20 md:border-ink/30 pt-6 md:pt-8"
        >
          {[
            { n: "08", l: "GitHub projects" },
            { n: "03", l: "Professional certifications" },
            { n: "04", l: "Years coding" },
            { n: "20+", l: "Technologies" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
              className="flex flex-col relative pl-3 md:pl-0 border-l md:border-l-0 border-ink/15"
            >
              <span className="display text-4xl md:text-7xl leading-none">{s.n}</span>
              <span className="mono text-[10px] tracking-[0.2em] uppercase text-ink/60 mt-1.5 md:mt-2">{s.l}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Marquee items={["Vivek R · Portfolio", "AI · Mobile · Cloud", "Builder · Shipper · Engineer", "Open to full-time & collabs", "Currently building →"]} />

      {/* ABOUT — mind blow: huge quote + parallax reveal + insane marquee bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:pl-32 md:pr-10 py-16 md:py-44 relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-6 md:top-10 overflow-hidden pointer-events-none hidden md:block">
          <motion.div
            animate={{ x: ["0%", "-30%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap mono text-[11px] tracking-[0.35em] uppercase text-ink/10 flex gap-8"
          >
            <span>BUILD — SHIP — ITERATE — BUILD — SHIP — ITERATE — BUILD — SHIP — ITERATE — BUILD — SHIP — ITERATE —</span>
            <span>BUILD — SHIP — ITERATE — BUILD — SHIP — ITERATE —</span>
          </motion.div>
        </div>
        <div className="absolute -top-6 right-6 md:right-10 display text-[140px] md:text-[220px] leading-none text-ink/[0.04] select-none pointer-events-none">“</div>
        <div className="absolute left-6 md:left-28 top-1/2 -translate-y-1/2 w-px h-[60%] bg-gradient-to-b from-transparent via-ember/20 to-transparent hidden md:block" />
        {/* liquid morph blob behind */}
        <div className="absolute right-[12%] top-[18%] w-72 h-72 bg-ember/5 morph blur-[1px] pointer-events-none hidden lg:block" />
        <div className="absolute left-[22%] bottom-[12%] w-48 h-48 bg-amber/10 morph blur-[1px] pointer-events-none hidden lg:block" style={{ animationDelay: "1.2s" }} />
        <div className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div>
            <div className="mt-1">About me</div>
            <div className="hidden md:block mt-6 mono text-[10px] tracking-[0.2em] uppercase text-ink/30 leading-relaxed">self-taught<br/>ship-first<br/>iterate →</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[30px] leading-[1.1] sm:text-4xl md:text-[56px] xl:text-7xl text-ink/30 md:leading-[1.05] relative"
            >
              <span className="text-ink">I'm a developer who learns by shipping.</span> I teach myself what I need, wire it together end-to-end, and keep iterating until it actually works.{" "}
              <span className="text-ember relative inline-block">This site is the record of that
                <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ember/30 origin-left" />
              </span> — the projects, the stack, the obsession.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 hidden md:flex items-center gap-6">
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-ink/50">stack in motion</span>
              <span className="h-px flex-1 bg-ink/10 relative overflow-hidden"><motion.span animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 left-0 w-1/3 bg-ember/40" /></span>
              <span className="mono text-[10px] tracking-widest bg-ink text-cream px-3 py-1 rounded-full">NestJS · PostgreSQL</span>
              <span className="mono text-[10px] tracking-widest border border-ink/15 px-3 py-1 rounded-full">AI · Mobile · Cloud</span>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2 md:hidden">
              <span className="mono text-[11px] uppercase tracking-widest border border-ink/15 px-3 py-2 rounded-full bg-paper">AI / Automation</span>
              <span className="mono text-[11px] uppercase tracking-widest border border-ink/15 px-3 py-2 rounded-full bg-ember text-cream">Backend · NestJS</span>
              <span className="mono text-[11px] uppercase tracking-widest border border-ink/15 px-3 py-2 rounded-full">Cloud — AWS</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FIELD LOG — INSANE TIMELINE */}
      <section ref={fieldRef} className="bg-paper border-y border-ink/20 relative overflow-hidden">
        {/* top beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-ink/5 overflow-hidden">
          <motion.div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-ember/50 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
        </div>
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        {/* morph blobs */}
        <div className="absolute right-[6%] top-[12%] w-64 h-64 bg-ember/[0.06] morph blur-[0.5px] pointer-events-none hidden lg:block" />
        <div className="absolute left-[32%] bottom-[8%] w-48 h-48 bg-amber/[0.06] morph blur-[0.5px] pointer-events-none hidden lg:block" style={{ animationDelay: "0.9s" }} />

        <div className="px-6 md:pl-32 md:pr-10 py-12 md:py-24 relative">
          {/* header */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-12 md:col-span-2">
              <div className="marker text-ink/60 flex md:block gap-2 items-baseline">
                <span>03 —</span><span>Field log</span>
                <span className="md:hidden ml-auto mono text-[10px] tracking-[0.2em] uppercase text-ink/30">03 entries</span>
              </div>
              <div className="hidden md:block mt-4 mono text-[10px] leading-relaxed tracking-[0.2em] uppercase text-ink/30">timeline<br/>2026 → 2023<br/>scroll to trace</div>
              <div className="hidden md:flex mt-6 items-center gap-2 mono text-[10px] tracking-widest uppercase text-ember bg-ember/10 border border-ember/15 px-2.5 py-1 rounded-full w-fit">● FIELD LOG</div>
            </div>

            <div className="col-span-12 md:col-span-10">
              {/* DESKTOP TIMELINE */}
              <div className="hidden md:block relative pl-10">
                {/* vertical spine */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink/10">
                  <motion.div style={{ height: fieldLine }} className="absolute top-0 left-0 w-px bg-ember shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                </div>

                <div className="space-y-10">
                  {[
                    {
                      kicker: "2026 · Backend Intern",
                      title: "ADVICIYA",
                      org: "Kerala · Remote — Production APIs",
                      desc: "Shipped NestJS + PostgreSQL in production. Built JWT auth, TypeORM migrations, class-validator pipelines. 12 tables, 78% coverage, request validation at edge.",
                      badge: "COMPLETED",
                      stack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT"],
                      metric: "12 tables · 78% cov",
                      tone: "ember",
                    },
                    {
                      kicker: "2025 · AWS Cloud Intern",
                      title: "Cydez Technologies",
                      org: "Kochi — Cloud Ops",
                      desc: "Ran EC2 + S3 workloads, cut deploy time 20%, locked IAM & CloudWatch for 99.9% uptime. Learned to think in infra, not just code.",
                      stack: ["AWS EC2", "S3", "IAM", "CloudWatch", "Docker"],
                      metric: "-20% deploy · 99.9% up",
                      tone: "ink",
                    },
                    {
                      kicker: "B.Tech · Information Technology",
                      title: "Viswajyothi C.E.T.",
                      org: "Muvattupuzha",
                      desc: "Self-driven engineer. Shipped 08 GitHub projects across AI, mobile, cloud. Learning by building, daily.",
                      stack: ["DSA", "Systems", "AI/ML", "Mobile"],
                      metric: "08 shipped",
                      tone: "paper",
                    },
                  ].map((e, i) => (
                    <motion.div
                      key={e.title}
                      initial={{ opacity: 0, x: 18, rotateX: 2 }}
                      whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative group"
                    >
                      {/* node */}
                      <div className="absolute -left-[43px] top-6 w-7 h-7 grid place-items-center">
                        <motion.div
                          initial={{ scale: 0.6 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 260 }}
                          className={`w-3 h-3 rounded-full ${i === 0 ? "bg-ember shadow-[0_0_12px_rgba(239,68,68,0.9)] animate-pulse" : "bg-ink border-2 border-paper shadow-[0_0_0_4px_rgba(0,0,0,0.06)]"} relative`}
                        >
                          {i === 0 && <span className="absolute inset-0 rounded-full bg-ember/30 animate-ping" />}
                        </motion.div>
                        <span className="absolute -left-1 top-[28px] w-px h-10 bg-ink/10 hidden lg:block" />
                      </div>

                      <div
                        className={`relative overflow-hidden rounded-2xl border p-6 md:p-7 flex flex-col md:flex-row gap-6 md:gap-8 ${i === 0 ? "bg-ink text-cream border-ink shadow-[0_16px_40px_rgba(0,0,0,0.16)]" : "bg-cream/80 backdrop-blur border-ink/10 glass"}`}
                        onMouseMove={(ev) => {
                          if (isMobile) return;
                          const el = ev.currentTarget as HTMLElement;
                          const r = el.getBoundingClientRect();
                          const rx = ((ev.clientY - r.top) / r.height - 0.5) * -4;
                          const ry = ((ev.clientX - r.left) / r.width - 0.5) * 4;
                          el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                        }}
                        onMouseLeave={(ev) => { (ev.currentTarget as HTMLElement).style.transform = "perspective(900px) rotateX(0) rotateY(0)"; }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* shine */}
                        <div className="shine hidden md:block" />
                        {/* large outline number */}
                        <div className={`absolute -right-2 -top-1 display text-7xl leading-none select-none pointer-events-none ${i === 0 ? "text-cream/[0.06]" : "text-ink/[0.04]"}`} style={{ WebkitTextStroke: i === 0 ? "1px rgba(255,255,255,0.08)" : "1px rgba(0,0,0,0.06)" }}>
                          0{i + 1}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className={`mono text-[10px] tracking-[0.22em] uppercase flex flex-wrap items-center gap-2 ${i === 0 ? "text-ember" : "text-ember"}`}>
                            <span className={`${i === 0 ? "bg-ember text-cream" : "bg-ember/10 text-ember border border-ember/15"} px-2.5 py-1 rounded-full`}>{e.kicker}</span>
                            {e.badge && <span className="mono text-[9px] tracking-[0.2em] uppercase bg-cream text-ember border border-ember/15 px-2 py-1 rounded-full animate-pulse">● {e.badge}</span>}
                            <span className={`hidden md:inline-flex mono text-[10px] tracking-[0.2em] uppercase ${i === 0 ? "text-cream/50" : "text-ink/40"}`}>— {e.metric}</span>
                          </div>
                          <h3 className={`display text-3xl md:text-4xl leading-none mt-3 ${i === 0 ? "text-cream" : "text-ink"} group-hover:tracking-[-0.02em] transition-all`}>{e.title}</h3>
                          <div className={`mono text-[10px] tracking-[0.2em] uppercase mt-1 ${i === 0 ? "text-cream/60" : "text-ink/45"}`}>{e.org}</div>
                          <p className={`mt-3 text-sm leading-relaxed max-w-[560px] ${i === 0 ? "text-cream/80" : "text-ink/70"}`}>{e.desc}</p>
                        </div>

                        <div className="md:w-[280px] shrink-0 flex flex-col justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {e.stack.map((s) => (
                              <span key={s} className={`mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border ${i === 0 ? "bg-cream/10 text-cream border-cream/15" : "bg-ink text-cream border-ink"}`}>{s}</span>
                            ))}
                          </div>
                          <div className={`mono text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 ${i === 0 ? "text-cream/50" : "text-ink/35"}`}>
                            <span className={`w-6 h-px ${i === 0 ? "bg-cream/20" : "bg-ink/15"} relative overflow-hidden`}><motion.span animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.3 }} className={`absolute inset-y-0 left-0 w-full ${i === 0 ? "bg-ember" : "bg-ember/60"}`} /></span>
                            {i === 0 ? "current — building" : i === 1 ? "completed 2025" : "ongoing"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* end cap */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 flex items-center gap-3 pl-6">
                  <span className="w-2 h-2 rounded-full bg-ink/20" />
                  <span className="mono text-[10px] tracking-[0.25em] uppercase text-ink/30">end of log — 03 entries — watch this space</span>
                </motion.div>
              </div>

              {/* MOBILE INSANE STACK */}
              <div className="md:hidden">
                <div className="mono text-[10px] tracking-[0.2em] uppercase text-ink/40 mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-ink/20" /> swipe timeline → <span className="ml-auto flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" /> 03 logs</span>
                </div>
                <div className="relative pl-5">
                  <div className="absolute left-[7px] top-1 bottom-1 w-px bg-ink/10" />
                  <motion.div style={{ height: fieldLine }} className="absolute left-[7px] top-1 w-px bg-ember shadow-[0_0_8px_rgba(239,68,68,0.6)] md:hidden" />
                  <div className="space-y-4">
                    {[
                      { kicker: "2026 · Backend Intern", title: "ADVICIYA", org: "Remote — Production", desc: "NestJS + PostgreSQL + TypeORM. JWT, migrations, validation. 12 tables, 78% coverage.", badge: "EXPERIENCE", stack: ["NestJS", "PostgreSQL", "TypeORM", "JWT"], metric: "12 tables" },
                      { kicker: "2025 · AWS Intern", title: "Cydez Technologies", org: "Kochi — Cloud Ops", desc: "EC2 + S3, -20% deploy, 99.9% uptime via IAM + CloudWatch.", stack: ["AWS", "Docker", "CloudWatch"], metric: "-20% time" },
                      { kicker: "B.Tech · IT", title: "Viswajyothi C.E.T.", org: "Muvattupuzha", desc: "Self-driven engineer — 08 projects shipped across AI, mobile & cloud.", stack: ["DSA", "AI", "Mobile"], metric: "08 shipped" },
                    ].map((e, i) => (
                      <motion.div key={e.title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                        <div className={`absolute -left-[18px] top-6 w-3 h-3 rounded-full border-2 ${i === 0 ? "bg-ember border-paper shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse" : "bg-paper border-ink/30"}`} />
                        <div className={`rounded-2xl border p-5 relative overflow-hidden ${i === 0 ? "bg-ink text-cream border-ink shadow-xl" : "bg-cream border-ink/15"}`}>
                          {i === 0 && <span className="absolute top-3 right-3 mono text-[9px] tracking-[0.2em] uppercase bg-ember text-cream px-2 py-1 rounded-full">● 2026</span>}
                          <div className={`mono text-[10px] tracking-widest uppercase ${i === 0 ? "text-ember" : "text-ember"}`}>{e.kicker}</div>
                          <h3 className={`display text-2xl mt-1 leading-none ${i === 0 ? "text-cream" : "text-ink"}`}>{e.title}</h3>
                          <div className={`mono text-[10px] tracking-[0.2em] uppercase ${i === 0 ? "text-cream/50" : "text-ink/45"}`}>{e.org} · {e.metric}</div>
                          <p className={`mt-2 text-[13px] leading-relaxed ${i === 0 ? "text-cream/80" : "text-ink/70"}`}>{e.desc}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {e.stack.map((s) => (
                              <span key={s} className={`mono text-[9px] tracking-widest uppercase px-2 py-1 rounded-full border ${i === 0 ? "bg-cream/10 text-cream border-cream/15" : "bg-ink text-cream border-ink"}`}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS — glass bento mind-blow */}
      <section className="px-6 md:pl-32 md:pr-10 py-16 md:py-32 relative">
        <div className="absolute inset-x-6 md:inset-x-10 top-0 h-px bg-ink/10 hidden md:block" />
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-12 gap-4 mb-8 md:mb-12 items-end">
          <div className="col-span-6 md:col-span-2 marker text-ink/60">
            <div>04 —</div><div className="mt-1">Apparatus</div>
          </div>
          <div className="col-span-6 md:col-span-10 text-right md:text-left">
            <h2 className="display text-4xl sm:text-5xl md:text-8xl">Technical <span className="display-italic">arsenal.</span></h2>
            <p className="hidden md:block mono text-xs tracking-[0.2em] uppercase text-ink/40 mt-3">hover tilt · tap to flash — built for product teams</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:border-t md:border-ink/10">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20, rotateX: 4 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={!isMobile ? { y: -6, rotateX: 1 } : undefined}
              className={`group relative overflow-hidden rounded-2xl md:rounded-none border border-ink/10 md:border-0 md:border-b md:border-ink/10 ${idx % 3 !== 0 ? "md:border-l md:border-ink/10" : ""} p-6 md:p-8 bg-cream md:bg-transparent tilt glass md:glass-none`}
              onMouseMove={(e) => {
                if (isMobile) return;
                const el = e.currentTarget as HTMLElement;
                const rect = el.getBoundingClientRect();
                const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
                const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
                el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "perspective(900px) rotateX(0) rotateY(0)";
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(520px 220px at 50% 0%, oklch(0.58 0.18 38 / 0.08), transparent 70%)` }} />
              <div className="shine hidden md:block" />
              {/* insane 2D: top beam */}
              <div className="absolute top-0 left-0 right-0 h-px bg-ink/5 overflow-hidden hidden md:block">
                <motion.div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-ember to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: idx * 0.4 }} />
              </div>
              <div className="flex items-baseline justify-between mb-5 md:mb-6 relative">
                <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-60 border border-ink/10 px-2 py-1 rounded-full bg-paper/60">0{idx + 1} // {cat.sub}</span>
                <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse hidden md:block" />
                <span className="md:hidden mono text-[10px] opacity-30">tap →</span>
              </div>
              <h3 className="display text-2xl md:text-[28px] mb-5 md:mb-6 relative">{cat.name}</h3>
              <ul className="flex flex-wrap gap-1.5 md:gap-2 relative">
                {cat.items.map((s) => (
                  <li key={s} className="mono text-[10px] md:text-[11px] uppercase tracking-widest border border-ink/15 bg-cream md:bg-transparent px-2.5 py-1.5 md:px-3 rounded-full md:rounded-none group-hover:border-ink/30 group-hover:bg-ink group-hover:text-cream transition-colors duration-300">
                    {s}
                  </li>
                ))}
              </ul>
              {cat.name === "Backend" && <div className="mt-4 mono text-[10px] tracking-widest uppercase text-ember bg-ember/10 border border-ember/15 px-2.5 py-1 rounded-full inline-flex items-center gap-1">● Production Stack</div>}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 md:hidden mono text-[10px] tracking-[0.2em] uppercase text-ink/40 text-center">tap a card — it lights up</div>
      </section>

      {/* CTA STRIP — mind blow */}
      <section className="bg-ink text-cream px-6 md:pl-32 md:pr-10 py-16 md:py-40 relative overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "radial-gradient(800px 500px at 20% 0%, oklch(0.58 0.18 38 / 0.22), transparent 60%), radial-gradient(700px 600px at 90% 100%, oklch(0.78 0.16 78 / 0.14), transparent 60%)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        {/* insane 2D: huge outline parallax */}
        <div className="absolute -bottom-10 left-0 right-0 overflow-hidden pointer-events-none select-none hidden md:block">
          <motion.div
            initial={{ x: "0%" }}
            whileInView={{ x: "-8%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[22vw] leading-none text-cream/[0.04] whitespace-nowrap"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
          >
            VIVEK_R — NESTJS — POSTGRES — VIVEK_R — AI & CLOUD —
          </motion.div>
        </div>
        <div className="absolute right-[8%] top-[18%] w-64 h-64 bg-ember/10 morph blur-[0.5px] pointer-events-none hidden lg:block" />
        <div className="absolute left-[10%] bottom-[22%] w-48 h-48 bg-amber/8 morph blur-[0.5px] pointer-events-none hidden lg:block" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-6 right-10 mono text-[10px] tracking-[0.25em] uppercase text-cream/40 hidden md:block">
          // EOF — index.tsx — press ⌘K
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-12 md:col-span-2 marker text-cream/50"><div>05 —</div><div>Next</div></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-[42px] leading-[0.9] sm:text-5xl md:text-[84px] xl:text-9xl">
              Have an idea?<br/>
              <Link to="/contact" className="display-italic text-ember link-edge group">Let's build it.
                <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="block h-[2px] bg-ember origin-left mt-2 w-[280px] md:w-[520px]" />
              </Link>
            </h2>
            <p className="mono text-xs tracking-[0.18em] uppercase text-cream/50 mt-6 max-w-xl">Full-stack & AI engineer — NestJS + PostgreSQL in prod. Available for freelance & full-time. Reply &lt; 48h.</p>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 mono text-xs tracking-[0.2em] uppercase">
              <Magnetic className="w-full sm:w-auto"><Link to="/contact" className="w-full block px-8 py-5 bg-cream text-ink hover-lift active:scale-[0.98] transition-transform text-center rounded-full md:rounded-none relative overflow-hidden group">Start a project → <span className="shine" /></Link></Magnetic>
              <Magnetic className="w-full sm:w-auto"><Link to="/projects" className="w-full block px-8 py-5 border border-cream/30 hover:border-cream hover:bg-cream/5 hover-lift active:scale-[0.98] transition-transform text-center rounded-full md:rounded-none">Browse the catalogue</Link></Magnetic>
            </div>
            <div className="mt-10 flex flex-wrap gap-2 mono text-[10px] tracking-widest uppercase text-cream/40">
              <span className="border border-cream/15 px-3 py-1 rounded-full">vivek987pm@gmail.com</span>
              <span className="border border-cream/15 px-3 py-1 rounded-full">+91 85906 09366</span>
              <span className="hidden md:inline border border-cream/10 px-3 py-1 rounded-full">Thodupuzha · Remote</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`magnetic ${className}`}>
      {children}
    </div>
  );
}

function AnimatedRot({ text }: { text: string }) {
  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.4 }}
    >
      {text}
    </motion.span>
  );
}
