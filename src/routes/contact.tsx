import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Vivek R — Signal / Contact" },
      { name: "description", content: "Reach Vivek R — open to collaborations, freelance, and full-time roles." },
    ],
  }),
});

const channels = [
  { label: "Email",    value: "vivek987pm@gmail.com",   href: "mailto:vivek987pm@gmail.com" },
  { label: "GitHub",   value: "@vivek123r",              href: "https://github.com/vivek123r" },
  { label: "LinkedIn", value: "/in/vivek-r-015008188",   href: "https://www.linkedin.com/in/vivek-r-015008188" },
  { label: "Phone",    value: "+91 85906 09366",         href: "tel:+918590609366" },
  { label: "Location", value: "Thodupuzha, Kerala · Remote", href: "#" },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/vivek987pm@gmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <main className="bg-cream text-ink min-h-screen pt-32 pb-32 px-6 md:pl-32 md:pr-10">
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-2 marker text-ink/60">
          <div>03 —</div><div className="mt-1">Signal</div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="display text-6xl md:text-[12vw] leading-[0.85]">
            Let's build <span className="display-italic text-ember">something.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-ink/70">
            Startup ideas, freelance briefs, full-time roles, technical chats — my inbox is always open. Replies typically within 48 hours.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-[oklch(0.55_0.18_140)]">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_140)] animate-pulse" />
            Available · freelance & full-time
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <aside className="col-span-12 md:col-span-5 md:col-start-3">
          <div className="marker text-ink/60 mb-6">// channels</div>
          <ul>
            {channels.map((c, i) => (
              <li key={c.label} className="border-t border-ink/30 last:border-b py-6 grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-2 mono text-xs opacity-60">0{i + 1}</span>
                <span className="col-span-3 mono text-xs uppercase tracking-widest">{c.label}</span>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="col-span-7 display text-2xl md:text-3xl link-edge truncate">{c.value}</a>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 border border-ink/30 bg-paper">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">// availability</div>
            <div className="display text-3xl">
              Open for <span className="display-italic text-ember">freelance & full-time</span> opportunities.
            </div>
          </div>
        </aside>

        <section className="col-span-12 md:col-span-5">
          <div className="marker text-ink/60 mb-6">// transmission</div>
          {status === "success" ? (
            <div className="border border-ink p-10">
              <div className="mono text-xs tracking-[0.25em] uppercase text-ember mb-4">● delivered</div>
              <h2 className="display text-4xl">Signal received.<br/><span className="display-italic">Talk soon.</span></h2>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-t border-ink/30">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {[
                { name: "name", label: "Name", placeholder: "Who are you?", type: "text" },
                { name: "email", label: "Email", placeholder: "where.to@reach.you", type: "email" },
                { name: "subject", label: "Subject", placeholder: "What's this about?", type: "text" },
              ].map((f) => (
                <div key={f.name} className="border-b border-ink/30 py-4">
                  <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">{f.label}</label>
                  <input
                    required type={f.type} name={f.name} placeholder={f.placeholder}
                    className="w-full bg-transparent border-0 outline-none display text-2xl placeholder:text-ink/25 focus:text-ember"
                  />
                </div>
              ))}
              <div className="border-b border-ink/30 py-4">
                <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">Message</label>
                <textarea required name="message" rows={5} placeholder="Tell me everything…"
                  className="w-full bg-transparent border-0 outline-none text-lg font-light placeholder:text-ink/25 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full mt-8 bg-ink text-cream py-6 mono text-xs tracking-[0.3em] uppercase hover-lift flex items-center justify-center gap-3 disabled:opacity-60"
              >
                <span>{status === "submitting" ? "Transmitting…" : "Transmit signal"}</span>
                <span className="text-ember">●</span>
              </button>
              {status === "error" && (
                <div className="mt-4 mono text-xs uppercase tracking-widest text-ember">● transmission failed — try again or email directly.</div>
              )}
            </form>
          )}
        </section>
      </div>

      <footer className="mt-32 pt-8 border-t border-ink/30 grid grid-cols-12 gap-4 mono text-[10px] tracking-[0.25em] uppercase text-ink/50">
        <div className="col-span-6 md:col-span-6">© 2026 Vivek R — Personal portfolio · built from scratch</div>
        <div className="col-span-6 md:col-span-6 text-right">Built by hand · No templates · ⌘K for terminal</div>
      </footer>
    </main>
  );
}
