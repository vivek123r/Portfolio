import { V as jsxRuntimeExports, r as reactExports } from "./server-7ANBZ6hN.js";
import { m as motion, L as Link } from "./router-CrudpLOg.js";
import { u as useScroll, a as useTransform } from "./use-transform-CkcCk82L.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-y border-ink/20 py-6 bg-ink text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track flex gap-12 whitespace-nowrap", children: doubled.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "display text-5xl md:text-7xl flex items-center gap-12", children: [
    t,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "✦" })
  ] }, i)) }) });
}
const skills = [{
  name: "AI & Automation",
  sub: "intelligent systems",
  items: ["LangChain", "LangGraph", "n8n", "LLMs", "Prompt Engineering", "Vector Databases", "OCR", "AI Agents"]
}, {
  name: "Mobile",
  sub: "cross-platform",
  items: ["Flutter", "Dart", "Firebase", "Firestore", "WebSockets"]
}, {
  name: "Backend",
  sub: "server-side power",
  items: ["Python", "Node.js", "FastAPI", "Flask", "REST APIs", "WebSockets"]
}, {
  name: "Frontend",
  sub: "interfaces",
  items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"]
}, {
  name: "Cloud / DevOps",
  sub: "infrastructure",
  items: ["AWS (EC2, S3, IAM, Lambda)", "Docker", "Kubernetes", "Firebase", "CI/CD", "CloudWatch"]
}, {
  name: "Tools / Lang",
  sub: "the craft",
  items: ["Git", "SQL", "Python", "TypeScript", "Jest", "Postman", "Prometheus", "Regex"]
}];
const rotating = ["Currently shipping side projects", "Learning by building, daily", "Open to internships & collabs", "Writing code that actually runs"];
function Index() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [rotIdx, setRotIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setRotIdx((i) => (i + 1) % rotating.length), 2400);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-cream text-ink overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative min-h-screen pt-24 md:pl-32 pl-6 pr-6 md:pr-10 pb-20 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        opacity: heroOpacity
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 mono text-[10px] tracking-[0.25em] uppercase text-ink/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "// 01 — file: hero.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.18_140)] animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink", children: "Available for work" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { style: {
            y
          }, className: "display text-[20vw] md:text-[15vw] leading-[0.82]", children: [
            "Vivek ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic text-ember", children: "R." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-2xl leading-snug font-light max-w-xl", children: [
              "IT undergrad · Self-taught ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-serif", children: "builder" }),
              ". I make things across ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-serif", children: "AI" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-serif", children: "mobile" }),
              ", and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-serif", children: "cloud" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 mono text-sm flex items-center gap-2 h-6 text-ember", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink/50", children: ">" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedRot, { text: rotating[rotIdx] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "▌" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-1 mono text-[10px] tracking-[0.2em] uppercase text-ink/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-ink mt-1", children: "Kerala, IN" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3 flex md:justify-end items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "block px-6 py-4 bg-ink text-cream mono text-xs tracking-[0.2em] uppercase hover-lift", children: "See work →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "block px-6 py-4 border border-ink mono text-xs tracking-[0.2em] uppercase hover-lift", children: "Signal" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink/30 pt-8", children: [{
        n: "08",
        l: "GitHub projects"
      }, {
        n: "03",
        l: "Professional certifications"
      }, {
        n: "04",
        l: "Years coding"
      }, {
        n: "20+",
        l: "Technologies"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display text-5xl md:text-7xl leading-none", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono text-[10px] tracking-[0.2em] uppercase text-ink/60 mt-2", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: ["Vivek R · Portfolio", "AI · Mobile · Cloud", "Student · Builder · Shipper", "Open to internships & collabs", "Currently building →"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:pl-32 md:pr-10 py-32 md:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "02 —" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "About me" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "display text-4xl md:text-7xl text-ink/30 leading-[1.05]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink", children: "I'm a developer who learns by shipping." }),
        " I teach myself what I need, wire it together end-to-end, and keep iterating until it actually works.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "This site is the record of that" }),
        " — the projects, the stack, the obsession."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper px-6 md:pl-32 md:pr-10 py-20 border-y border-ink/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 items-baseline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "03 —" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Field log" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-10 grid md:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-xs tracking-widest text-ember uppercase", children: "B.Tech · IT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "display text-3xl md:text-5xl mt-2", children: "Viswajyothi C.E.T." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink/70 max-w-md", children: "Self-driven IT undergraduate. Building software in mobile, cloud, and AI between coursework and shipping." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-xs tracking-widest text-ember uppercase", children: "2025 · AWS Intern" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "display text-3xl md:text-5xl mt-2", children: "Cydez Technologies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink/70 max-w-md", children: "Managed scalable apps on EC2 + S3 — cut deploy time by 20%. Configured IAM and CloudWatch to maintain 99.9% uptime." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:pl-32 md:pr-10 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 mb-12 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-2 marker text-ink/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "04 —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Apparatus" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display text-5xl md:text-8xl", children: [
          "Technical ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic", children: "arsenal." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 border-t border-ink/30", children: skills.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border-b border-ink/30 ${idx % 3 !== 0 ? "md:border-l border-ink/30" : ""} p-6 md:p-8 group hover:bg-ink hover:text-cream transition-colors duration-500`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-baseline justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mono text-[10px] tracking-[0.2em] uppercase opacity-60", children: [
          "0",
          idx + 1,
          " // ",
          cat.sub
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "display text-3xl md:text-4xl mb-6", children: cat.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2", children: cat.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mono text-[11px] uppercase tracking-widest border border-current/30 px-3 py-1.5", children: s }, s)) })
      ] }, cat.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-ink text-cream px-6 md:pl-32 md:pr-10 py-24 md:py-40 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-10 mono text-[10px] tracking-[0.25em] uppercase text-cream/40 hidden md:block", children: "// EOF — index.tsx" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-cream/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "05 —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Next" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display text-5xl md:text-9xl", children: [
            "Have an idea?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "display-italic text-ember link-edge", children: "Let's build it." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-6 mono text-xs tracking-[0.2em] uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-8 py-5 bg-cream text-ink hover-lift", children: "Start a project →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "px-8 py-5 border border-cream/40 hover:border-cream hover-lift", children: "Browse the catalogue" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function AnimatedRot({
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
    opacity: 0,
    y: 6
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -6
  }, transition: {
    duration: 0.4
  }, children: text }, text);
}
export {
  Index as component
};
