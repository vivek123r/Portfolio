import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vivek R — Index" },
      { name: "description", content: "Full-stack engineer working at the seam of AI, mobile and systems." },
    ],
  }),
});

const skills = {
  Frontend: ["React", "TypeScript", "Tailwind", "Flutter", "Motion"],
  Backend: ["Node.js", "Express", "REST", "Auth", "Sessions"],
  Systems: ["Git", "Docker", "K8s", "AWS", "GCP", "CI/CD"],
  Languages: ["Dart", "Python", "Java", "SQL", "JavaScript"],
};

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      {/* HERO */}
      <section ref={ref} className="relative min-h-screen pt-24 md:pl-32 pl-6 pr-6 md:pr-10 pb-20 flex flex-col justify-between">
        <motion.div style={{ opacity: heroOpacity }}>
          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="col-span-12 md:col-span-2 mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
              <div>// 01 — Field Notes</div>
              <div className="mt-4">Full-stack ·<br/>AI/ML · Mobile<br/>Systems</div>
            </div>
            <div className="col-span-12 md:col-span-10">
              <motion.h1
                style={{ y }}
                className="display text-[18vw] md:text-[14vw] leading-[0.82]"
              >
                Vivek <span className="display-italic text-ember">Ramesh.</span>
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="hidden md:block col-span-2" />
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg md:text-xl leading-snug font-light max-w-md">
                I build at the intersection of <em className="font-serif">intelligence</em>, <em className="font-serif">interface</em>, and <em className="font-serif">infrastructure</em> — shipping software that feels considered.
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
              <div>Studio</div>
              <div className="text-ink mt-1">Bengaluru, IN</div>
              <div className="mt-3">Status</div>
              <div className="text-ember mt-1">● Open to work</div>
            </div>
            <div className="col-span-6 md:col-span-3 flex md:justify-end items-end gap-2">
              <Link to="/projects" className="group block px-6 py-4 bg-ink text-cream mono text-xs tracking-[0.2em] uppercase hover-lift">
                See work →
              </Link>
              <Link to="/contact" className="block px-6 py-4 border border-ink mono text-xs tracking-[0.2em] uppercase hover-lift">
                Signal
              </Link>
            </div>
          </div>
        </motion.div>

        {/* footer ticker inside hero */}
        <div className="mt-16 flex items-end justify-between gap-6">
          <div className="mono text-[10px] tracking-[0.2em] uppercase text-ink/50">
            scroll ↓ &nbsp;·&nbsp; chapter II
          </div>
          <div className="mono text-[10px] tracking-[0.2em] uppercase text-ink/50 hidden md:block">
            est. 2019 &nbsp;·&nbsp; 26 public repos &nbsp;·&nbsp; ∞ commits
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Engineering as authorship", "AI · MOBILE · SYSTEMS", "Built by hand", "Vivek Ramesh", "Independent practice"]} />

      {/* MANIFESTO / ABOUT */}
      <section className="px-6 md:pl-32 md:pr-10 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-ink/60">
            <div>02 —</div>
            <div className="mt-1">Manifesto</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="display text-4xl md:text-7xl text-ink/30 leading-[1.05]">
              <span className="text-ink">Software is the last craft</span> where a single person can still draw the blueprint, mill the parts, and sign the cabinet.{" "}
              <span className="text-ember">I work that way</span> — small teams, deep ownership, opinionated taste.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS — editorial table */}
      <section className="px-6 md:pl-32 md:pr-10 pb-32">
        <div className="grid grid-cols-12 gap-4 mb-12 items-end">
          <div className="col-span-6 md:col-span-2 marker text-ink/60">
            <div>03 —</div>
            <div className="mt-1">Apparatus</div>
          </div>
          <div className="col-span-6 md:col-span-10">
            <h2 className="display text-5xl md:text-8xl">The <span className="display-italic">toolkit.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-ink/30">
          {Object.entries(skills).map(([cat, items], idx) => (
            <div key={cat} className={`border-b border-ink/30 ${idx !== 0 ? "md:border-l border-ink/30" : ""} p-6 md:p-8 group hover:bg-ink hover:text-cream transition-colors duration-500`}>
              <div className="flex items-baseline justify-between mb-8">
                <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-60">0{idx + 1}</span>
                <span className="display text-3xl">{cat}</span>
              </div>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li key={s} className="flex items-baseline justify-between mono text-xs uppercase tracking-widest border-b border-current/10 pb-2">
                    <span>{s}</span>
                    <span className="opacity-40">●</span>
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
          // end of file — index.tsx
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 marker text-cream/50">
            <div>04 —</div>
            <div className="mt-1">Next</div>
          </div>
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
