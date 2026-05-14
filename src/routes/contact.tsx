import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Vivek R — Signal / Contact" },
      { name: "description", content: "Send a signal — open to collaborations, contracts, and weird ideas." },
    ],
  }),
});

const channels = [
  { label: "Email", value: "vivek987pm@gmail.com", href: "mailto:vivek987pm@gmail.com" },
  { label: "GitHub", value: "@vivek123r", href: "https://github.com/vivek123r" },
  { label: "LinkedIn", value: "Connect", href: "#" },
  { label: "Location", value: "Bengaluru · Remote", href: "#" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-cream text-ink min-h-screen pt-32 pb-32 px-6 md:pl-32 md:pr-10">
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-2 marker text-ink/60">
          <div>03 —</div><div className="mt-1">Signal</div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="display text-6xl md:text-[12vw] leading-[0.85]">
            Send a <span className="display-italic text-ember">signal.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-ink/70">
            Briefs, collaborations, half-formed ideas — all welcome. Replies typically within 48 hours, written by hand.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        {/* Channels */}
        <aside className="col-span-12 md:col-span-5 md:col-start-3">
          <div className="marker text-ink/60 mb-6">// channels</div>
          <ul>
            {channels.map((c, i) => (
              <li key={c.label} className="border-t border-ink/30 last:border-b py-6 grid grid-cols-12 gap-4 items-baseline group">
                <span className="col-span-2 mono text-xs opacity-60">0{i + 1}</span>
                <span className="col-span-3 mono text-xs uppercase tracking-widest">{c.label}</span>
                <a href={c.href} className="col-span-7 display text-2xl md:text-3xl link-edge truncate">{c.value}</a>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 border border-ink/30 bg-paper">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">// availability</div>
            <div className="display text-3xl">
              Open for <span className="display-italic text-ember">Q3 2026</span> projects.
            </div>
          </div>
        </aside>

        {/* Form */}
        <section className="col-span-12 md:col-span-5">
          <div className="marker text-ink/60 mb-6">// transmission</div>
          {sent ? (
            <div className="border border-ink p-10">
              <div className="mono text-xs tracking-[0.25em] uppercase text-ember mb-4">● delivered</div>
              <h2 className="display text-4xl">Signal received.<br/><span className="display-italic">Talk soon.</span></h2>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-0 border-t border-ink/30"
            >
              {[
                { name: "name", label: "Name", placeholder: "Who are you?" },
                { name: "email", label: "Email", placeholder: "where.to@reach.you" },
                { name: "subject", label: "Subject", placeholder: "What's this about?" },
              ].map((f) => (
                <div key={f.name} className="border-b border-ink/30 py-4">
                  <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">{f.label}</label>
                  <input
                    required
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-0 outline-none display text-2xl placeholder:text-ink/25 focus:text-ember"
                  />
                </div>
              ))}
              <div className="border-b border-ink/30 py-4">
                <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">Message</label>
                <textarea
                  required rows={5}
                  placeholder="Tell me everything…"
                  className="w-full bg-transparent border-0 outline-none text-lg font-light placeholder:text-ink/25 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-8 group bg-ink text-cream py-6 mono text-xs tracking-[0.3em] uppercase hover-lift flex items-center justify-center gap-3"
              >
                <span>Transmit signal</span>
                <span className="text-ember">●</span>
              </button>
            </form>
          )}
        </section>
      </div>

      <footer className="mt-32 pt-8 border-t border-ink/30 grid grid-cols-12 gap-4 mono text-[10px] tracking-[0.25em] uppercase text-ink/50">
        <div className="col-span-6">© 2026 Vivek Ramesh — Independent Practice</div>
        <div className="col-span-6 text-right">Built by hand · No templates · v.2026.05</div>
      </footer>
    </main>
  );
}
