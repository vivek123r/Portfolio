import { r as reactExports, V as jsxRuntimeExports } from "./server-7ANBZ6hN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const channels = [{
  label: "Email",
  value: "vivek987pm@gmail.com",
  href: "mailto:vivek987pm@gmail.com"
}, {
  label: "GitHub",
  value: "@vivek123r",
  href: "https://github.com/vivek123r"
}, {
  label: "LinkedIn",
  value: "/in/vivek-r-015008188",
  href: "https://www.linkedin.com/in/vivek-r-015008188"
}, {
  label: "Phone",
  value: "+91 85906 09366",
  href: "tel:+918590609366"
}, {
  label: "Location",
  value: "Thodupuzha, Kerala · Remote",
  href: "#"
}];
function ContactPage() {
  const [status, setStatus] = reactExports.useState("idle");
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/vivek987pm@gmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget)
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-cream text-ink min-h-screen pt-32 pb-32 px-6 md:pl-32 md:pr-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 marker text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "03 —" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Signal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display text-6xl md:text-[12vw] leading-[0.85]", children: [
          "Let's build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic text-ember", children: "something." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg font-light text-ink/70", children: "Startup ideas, freelance briefs, full-time roles, technical chats — my inbox is always open. Replies typically within 48 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-[oklch(0.55_0.18_140)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[oklch(0.65_0.18_140)] animate-pulse" }),
          "Available · freelance & full-time"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 md:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "col-span-12 md:col-span-5 md:col-start-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marker text-ink/60 mb-6", children: "// channels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: channels.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-t border-ink/30 last:border-b py-6 grid grid-cols-12 gap-4 items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 mono text-xs opacity-60", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-3 mono text-xs uppercase tracking-widest", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "col-span-7 display text-2xl md:text-3xl link-edge truncate", children: c.value })
        ] }, c.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 p-6 border border-ink/30 bg-paper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3", children: "// availability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "display text-3xl", children: [
            "Open for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic text-ember", children: "freelance & full-time" }),
            " opportunities."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marker text-ink/60 mb-6", children: "// transmission" }),
        status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-ink p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono text-xs tracking-[0.25em] uppercase text-ember mb-4", children: "● delivered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display text-4xl", children: [
            "Signal received.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "display-italic", children: "Talk soon." })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "border-t border-ink/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "_captcha", value: "false" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "_template", value: "table" }),
          [{
            name: "name",
            label: "Name",
            placeholder: "Who are you?",
            type: "text"
          }, {
            name: "email",
            label: "Email",
            placeholder: "where.to@reach.you",
            type: "email"
          }, {
            name: "subject",
            label: "Subject",
            placeholder: "What's this about?",
            type: "text"
          }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-ink/30 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: f.type, name: f.name, placeholder: f.placeholder, className: "w-full bg-transparent border-0 outline-none display text-2xl placeholder:text-ink/25 focus:text-ember" })
          ] }, f.name)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-ink/30 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "message", rows: 5, placeholder: "Tell me everything…", className: "w-full bg-transparent border-0 outline-none text-lg font-light placeholder:text-ink/25 resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: status === "submitting", className: "w-full mt-8 bg-ink text-cream py-6 mono text-xs tracking-[0.3em] uppercase hover-lift flex items-center justify-center gap-3 disabled:opacity-60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: status === "submitting" ? "Transmitting…" : "Transmit signal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "●" })
          ] }),
          status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mono text-xs uppercase tracking-widest text-ember", children: "● transmission failed — try again or email directly." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 pt-8 border-t border-ink/30 grid grid-cols-12 gap-4 mono text-[10px] tracking-[0.25em] uppercase text-ink/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-6", children: "© 2026 Vivek R — Personal portfolio · built from scratch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-6 text-right", children: "Built by hand · No templates · ⌘K for terminal" })
    ] })
  ] });
}
export {
  ContactPage as component
};
