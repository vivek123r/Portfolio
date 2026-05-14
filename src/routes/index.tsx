import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vivek Ravi — AI Engineer · Full-Stack Developer" },
      { name: "description", content: "Building AI-powered solutions. Full-stack developer specializing in AI/ML, mobile, and cloud systems. Based in Kerala." },
    ],
  }),
});

const skills = [
  { name: "AI & ML", sub: "intelligent systems", items: ["LangChain", "LangGraph", "OpenAI API", "n8n Agents", "ML Kit", "OCR"] },
  { name: "Mobile", sub: "cross-platform", items: ["Flutter", "Dart", "Firebase", "Firestore", "Push"] },
  { name: "Backend", sub: "server-side power", items: ["Python", "FastAPI", "Node.js", "REST", "WebSockets"] },
  { name: "Frontend", sub: "interfaces", items: ["React", "JavaScript", "Tailwind", "HTML/CSS"] },
  { name: "Cloud / DevOps", sub: "infrastructure", items: ["AWS EC2/S3", "IAM", "Docker", "Kubernetes", "CI/CD"] },
  { name: "Tools / Lang", sub: "the craft", items: ["Git", "Java", "SQL", "Selenium", "PyQt"] },
];

const rotating = [
  "Building AI-Powered Solutions",
  "Shipping Mobile First",
  "Architecting Cloud Systems",
  "Writing Software That Lasts",
];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [rotIdx, setRotIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRotIdx((i) => (i + 1) % rotating.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      {/* HERO */}
      <section ref={ref} className="relative min-h-screen pt-24 md:pl-32 pl-6 pr-6 md:pr-10 pb-20 flex flex-col justify-between">
        <motion.div style={{ opacity: heroOpacity }}>
          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-span-12 md:col-span-2 mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
              <div>// 01 — file: hero.tsx</div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.18_140)] animate-pulse" />
                <span className="text-ink">Available for work</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-10">
              <motion.h1
                style={{ y }}
                className="display text-[20vw] md:text-[15vw] leading-[0.82]"
              >
                Vivek <span className="display-italic text-ember">R.</span>
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="hidden md:block col-span-2" />
            <div className="col-span-12 md:col-span-6">
              <p className="text-lg md:text-2xl leading-snug font-light max-w-xl">
                AI Engineer · Full-Stack Developer · <em className="font-serif">Creative Builder</em>.
                I work at the intersection of <em className="font-serif">intelligence</em>, <em className="font-serif">interface</em>, and <em className="font-serif">infrastructure</em>.
              </p>
              <div className="mt-6 mono text-sm flex items-center gap-2 h-6 text-ember">
                <span className="text-ink/50">{">"}</span>
                <AnimatedRot text={rotating[rotIdx]} />
                <span className="animate-pulse">▌</span>
              </div>
            </div>
            <div className="col-span-6 md:col-span-1 mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
              <div>Studio</div>
              <div className="text-ink mt-1">Kerala, IN</div>
            </div>
            <div className="col-span-6 md:col-span-3 flex md:justify-end items-end gap-2">
              <Link to="/projects" className="block px-6 py-4 bg-ink text-cream mono text-xs tracking-[0.2em] uppercase hover-lift">
                See work →
              </Link>
              <Link to="/contact" className="block px-6 py-4 border border-ink mono text-xs tracking-[0.2em] uppercase hover-lift">
                Signal
              </Link>
            </div>
          </div>
        </motion.div>

        {/* stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink/30 pt-8">
          {[
            { n: "08", l: "Projects shipped" },
            { n: "20+", l: "Technologies" },
            { n: "02", l: "Years coding" },
            { n: "03", l: "Hackathons" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <span className="display text-5xl md:text-7xl leading-none">{s.n}</span>
              <span className="mono text-[10px] tracking-[0.2em] uppercase text-ink/60 mt-2">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={["Building AI-Powered Solutions", "Vivek Ravi", "Engineering as authorship", "AI · MOBILE · CLOUD", "Independent practice"]} />

      {/* MANIFESTO */}
      <section className="px-6 md:pl-32 md:pr-10 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div>
            <div className="mt-1">Manifesto</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="display text-4xl md:text-7xl text-ink/30 leading-[1.05]">
              <span className="text-ink">Software is the last craft</span> where one person can still draw the blueprint, mill the parts, and sign the cabinet.{" "}
              <span className="text-ember">I build that way</span> — small teams, deep ownership, opinionated taste.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE strip */}
      <section className="bg-paper px-6 md:pl-32 md:pr-10 py-20 border-y border-ink/20">
        <div className="grid grid-cols-12 gap-4 items-baseline">
          <div className="col-span-12 md:col-span-2 marker text-ink/60"><div>03 —</div><div>Field log</div></div>
          <div className="col-span-12 md:col-span-10 grid md:grid-cols-2 gap-12">
            <div>
              <div className="mono text-xs tracking-widest text-ember uppercase">2024 · AWS Intern</div>
              <h3 className="display text-3xl md:text-5xl mt-2">Cydez Technologies</h3>
              <p className="mt-3 text-ink/70 max-w-md">Managed scalable apps on EC2 + S3 — cut deploy time by 20%. Configured IAM and CloudWatch to maintain 99.9% uptime.</p>
            </div>
            <div>
              <div className="mono text-xs tracking-widest text-ember uppercase">B.Tech · IT</div>
              <h3 className="display text-3xl md:text-5xl mt-2">Viswajyothi C.E.T.</h3>
              <p className="mt-3 text-ink/70 max-w-md">Self-driven IT undergraduate. Building software in mobile, cloud, and AI between coursework and shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:pl-32 md:pr-10 py-32">
        <div className="grid grid-cols-12 gap-4 mb-12 items-end">
          <div className="col-span-6 md:col-span-2 marker text-ink/60">
            <div>04 —</div><div className="mt-1">Apparatus</div>
          </div>
          <div className="col-span-6 md:col-span-10">
            <h2 className="display text-5xl md:text-8xl">Technical <span className="display-italic">arsenal.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink/30">
          {skills.map((cat, idx) => (
            <div key={cat.name} className={`border-b border-ink/30 ${idx % 3 !== 0 ? "md:border-l border-ink/30" : ""} p-6 md:p-8 group hover:bg-ink hover:text-cream transition-colors duration-500`}>
              <div className="flex items-baseline justify-between mb-6">
                <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-60">0{idx + 1} // {cat.sub}</span>
              </div>
              <h3 className="display text-3xl md:text-4xl mb-6">{cat.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <li key={s} className="mono text-[11px] uppercase tracking-widest border border-current/30 px-3 py-1.5">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-ink text-cream px-6 md:pl-32 md:pr-10 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-6 right-10 mono text-[10px] tracking-[0.25em] uppercase text-cream/40 hidden md:block">
          // EOF — index.tsx
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-cream/50"><div>05 —</div><div>Next</div></div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-9xl">
              Have an idea?<br/>
              <Link to="/contact" className="display-italic text-ember link-edge">Let's build it.</Link>
            </h2>
            <div className="mt-12 flex flex-wrap gap-6 mono text-xs tracking-[0.2em] uppercase">
              <Link to="/contact" className="px-8 py-5 bg-cream text-ink hover-lift">Start a project →</Link>
              <Link to="/projects" className="px-8 py-5 border border-cream/40 hover:border-cream hover-lift">Browse the catalogue</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
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
