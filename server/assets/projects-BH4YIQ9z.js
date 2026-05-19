import { r as reactExports, V as jsxRuntimeExports } from "./server-7ANBZ6hN.js";
import { m as motion, L as Link } from "./router-CrudpLOg.js";
import { u as useScroll, a as useTransform } from "./use-transform-CkcCk82L.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const GH = "https://github.com/vivek123r";
const projects = [{
  num: "001",
  title: "EXFORGE",
  kind: "AI Extension Builder",
  year: "2025",
  stack: ["LangChain", "Python", "Agents"],
  blurb: "AI-powered extension builder that uses intelligent agents to write production-ready code. Plain-English prompts → complete extensions with views, configuration, tests, docs.",
  href: `${GH}/Extension`,
  tone: "ember"
}, {
  num: "002",
  title: "MINT",
  kind: "SMS Expense Tracker",
  year: "2024",
  stack: ["Flutter", "Firebase", "Dart"],
  blurb: "Privacy-focused expense tracker that parses SMS transactions on-device with 99% accuracy. Real-time monitoring, category analysis, budget planning, charts.",
  href: `${GH}/ExpenseTracker_sms-based`,
  tone: "amber"
}, {
  num: "003",
  title: "SYSMON",
  kind: "System Monitor",
  year: "2024",
  stack: ["Python", "FastAPI", "Flutter"],
  blurb: "Secure real-time PC monitoring + remote control. CPU/RAM/GPU/Disk/Network/Battery streamed to mobile. LAN file sharing via QR, multi-user devices, command logging.",
  href: `${GH}/SystemMonitor`,
  tone: "ink"
}, {
  num: "004",
  title: "GAMING ADVISOR",
  kind: "Performance Tuner",
  year: "2024",
  stack: ["Python", "Telemetry", "Desktop"],
  blurb: "Reads your rig, recommends precise settings to push every frame. Game perf analysis, personalized graphics presets, real-time CPU/GPU monitoring.",
  href: `${GH}/gaming-advisor`,
  tone: "paper"
}, {
  num: "005",
  title: "E-SHOP",
  kind: "Commerce Surface",
  year: "2024",
  stack: ["React", "Node", "Payments"],
  blurb: "Modern e-commerce front. Catalog, cart, secure payment integration, auth, order tracking, push notifications. Quiet UX, loud merchandising.",
  href: `${GH}/e-shop`,
  tone: "ember"
}, {
  num: "006",
  title: "CHATBOT EXT",
  kind: "VS Code Extension",
  year: "2024",
  stack: ["JS", "VSCode API"],
  blurb: "Visual Studio Code extension for developer productivity — code snippets, syntax highlighting, intelligent autocomplete, debugging tools.",
  href: `${GH}/Extension`,
  tone: "amber"
}, {
  num: "007",
  title: "SCRAPER BOT",
  kind: "Web Scraping Suite",
  year: "2024",
  stack: ["Python", "Selenium", "Scrapy"],
  blurb: "Advanced web scraping with BeautifulSoup, Scrapy, Selenium. Automated extraction, anti-bot bypass, cleaning + processing pipeline.",
  href: `${GH}/chatbot_python_webScraping`,
  tone: "ink"
}, {
  num: "008",
  title: "DEVFOLIO",
  kind: "Portfolio Engine",
  year: "2026",
  stack: ["React", "TS", "Tailwind"],
  blurb: "The site you're reading. A small system for editorial developer storytelling — broken grids, kinetic type, terminal mode, zero templates.",
  href: `${GH}/DevFolio`,
  tone: "paper"
}];
function ProjectsPage() {
  const trackRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: trackRef
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);
  const [active, setActive] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-cream text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 px-6 md:pl-32 md:pr-10 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "02 —" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Catalogue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display text-6xl md:text-[10vw] leading-[0.85]", children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic text-ember", children: "works," }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "shipped ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic", children: "in public." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-3 mono text-xs tracking-widest text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          String(active + 1).padStart(3, "0"),
          " / ",
          String(projects.length).padStart(3, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-ink", children: projects[active].title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-ink/50", children: projects[active].kind })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: trackRef, className: "relative", style: {
      height: `${projects.length * 75}vh`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 h-screen overflow-hidden flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      x
    }, className: "flex gap-6 md:gap-12 pl-6 md:pl-32 pr-[20vw]", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p, onEnter: () => setActive(i) }, p.num)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:pl-32 md:pr-10 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-ink/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "03 —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Index" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display text-5xl md:text-8xl", children: [
          "All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic", children: "archives." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "border-t border-ink/30", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b border-ink/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.href, target: "_blank", rel: "noopener noreferrer", className: "grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-ink hover:text-cream transition-colors duration-500 px-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 mono text-xs opacity-60", children: p.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 md:col-span-5 display text-3xl md:text-5xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-6 md:col-span-3 mono text-xs uppercase tracking-widest opacity-70", children: p.kind }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-6 md:col-span-2 text-right mono text-xs opacity-70 group-hover:text-ember", children: [
          p.year,
          " ↗"
        ] })
      ] }) }, p.num)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink text-cream px-6 md:pl-32 md:pr-10 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-2 marker text-cream/50", children: "04 — Outro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display text-5xl md:text-8xl", children: [
        "Want one of these built for you? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "display-italic text-ember link-edge", children: "Get in touch." })
      ] }) })
    ] }) })
  ] });
}
function ProjectCard({
  p,
  onEnter
}) {
  const tones = {
    ember: "bg-ember text-cream",
    ink: "bg-ink text-cream",
    amber: "bg-amber text-ink",
    paper: "bg-paper text-ink"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { onViewportEnter: onEnter, viewport: {
    amount: 0.5
  }, className: `shrink-0 w-[80vw] md:w-[55vw] h-[70vh] ${tones[p.tone]} relative overflow-hidden flex flex-col justify-between p-8 md:p-12 hover-lift`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mono text-xs tracking-[0.25em] uppercase opacity-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          p.num,
          " / case study"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 opacity-60", children: p.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-xs tracking-[0.25em] uppercase opacity-80 text-right", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-xs tracking-[0.25em] uppercase opacity-70 mb-3", children: p.kind }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "display text-6xl md:text-[7vw] leading-[0.85]", children: p.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm md:text-base font-light leading-snug opacity-90", children: p.blurb }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.href, target: "_blank", rel: "noopener noreferrer", className: "mono text-xs tracking-[0.25em] uppercase shrink-0 border-b border-current pb-1 hover:opacity-70", children: "github →" })
    ] })
  ] });
}
export {
  ProjectsPage as component
};
