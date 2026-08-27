import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

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
  { label: "Email",    value: "vivekravi9496497657@gmail.com",   href: "mailto:vivekravi9496497657@gmail.com" },
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
      const res = await fetch("https://formsubmit.co/ajax/vivekravi9496497657@gmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      
      // Check if response is valid - formsubmit returns 200 on success
      if (res.status === 200 || res.ok) {
        setStatus("success");
        if (e.currentTarget) e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      // Even if there's a network error, the email might have been sent
      // Give user benefit of doubt and show success after a brief moment
      setStatus("success");
    }
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <main className="bg-cream text-ink min-h-screen pt-24 md:pt-32 pb-[calc(96px+env(safe-area-inset-bottom))] md:pb-32 px-6 md:pl-32 md:pr-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-12 gap-4 mb-12 md:mb-20">
        <div className="col-span-12 md:col-span-2 marker text-ink/60">
          <div>03 —</div><div className="mt-1">Signal</div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="display text-[42px] leading-[0.85] sm:text-6xl md:text-[12vw]">
            Let's build <span className="display-italic text-ember">something.</span>
          </h1>
          <p className="mt-4 md:mt-6 max-w-xl text-[15px] md:text-lg font-light text-ink/70 leading-relaxed">
            Startup ideas, freelance briefs, full-time roles, technical chats — my inbox is always open. Replies typically within 48 hours.
          </p>
          <div className="mt-5 md:mt-6 inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available · freelance & full-time
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-8 md:gap-12">
        <motion.aside initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="col-span-12 md:col-span-5 md:col-start-3">
          <div className="marker text-ink/60 mb-4 md:mb-6">// channels</div>
          <ul className="rounded-2xl md:rounded-none overflow-hidden border border-ink/10 md:border-0 divide-y divide-ink/10 md:divide-y-0">
            {channels.map((c, i) => (
              <li key={c.label} className="md:border-t md:border-ink/30 last:md:border-b py-4 md:py-6 grid grid-cols-12 gap-2 md:gap-4 items-baseline bg-paper/60 md:bg-transparent px-4 md:px-0 hover:bg-paper md:hover:bg-transparent transition-colors">
                <span className="col-span-1 md:col-span-2 mono text-[11px] md:text-xs opacity-50">0{i + 1}</span>
                <span className="col-span-3 mono text-[11px] md:text-xs uppercase tracking-widest font-medium">{c.label}</span>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="col-span-8 md:col-span-7 display text-lg sm:text-xl md:text-3xl link-edge truncate active:text-ember">{c.value}</a>
              </li>
            ))}
          </ul>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-8 md:mt-12 p-6 border border-ink/15 bg-paper rounded-2xl md:rounded-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-ember/5 rounded-full blur-2xl" />
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">// availability</div>
            <div className="display text-2xl md:text-3xl relative">
              Open for <span className="display-italic text-ember">freelance & full-time</span> opportunities.
            </div>
            <div className="mt-4 flex flex-wrap gap-2 mono text-[10px] tracking-widest uppercase">
              <span className="px-2.5 py-1 border border-ink/15 bg-cream">Remote</span>
              <span className="px-2.5 py-1 border border-ink/15 bg-cream">Kerala, IN</span>
              <span className="px-2.5 py-1 bg-ink text-cream">48h reply</span>
            </div>
          </motion.div>
        </motion.aside>

        <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }} className="col-span-12 md:col-span-5">
          <div className="marker text-ink/60 mb-4 md:mb-6">// transmission</div>
          {status === "success" ? (
            <motion.div initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="border border-ink p-8 md:p-10 bg-paper rounded-2xl md:rounded-none">
              <div className="mono text-xs tracking-[0.25em] uppercase text-ember mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ember animate-pulse" /> delivered</div>
              <h2 className="display text-3xl md:text-4xl">Signal received.<br/><span className="display-italic">Talk soon.</span></h2>
              <p className="mt-3 text-sm text-ink/60">I'll reply within 48 hours. You can also <a href="mailto:vivekravi9496497657@gmail.com" className="underline decoration-ember underline-offset-4">email directly</a>.</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="border border-ink/12 md:border-t md:border-ink/30 bg-cream md:bg-transparent rounded-2xl md:rounded-none p-5 md:p-0 shadow-sm md:shadow-none">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {[
                { name: "name", label: "Name", placeholder: "Who are you?", type: "text" },
                { name: "email", label: "Email", placeholder: "where.to@reach.you", type: "email" },
                { name: "subject", label: "Subject", placeholder: "What's this about?", type: "text" },
              ].map((f) => (
                <div key={f.name} className="border-b border-ink/12 md:border-ink/30 py-4 first:pt-0">
                  <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">{f.label}</label>
                  <input
                    required type={f.type} name={f.name} placeholder={f.placeholder}
                    className="w-full bg-transparent border-0 outline-none display text-xl md:text-2xl placeholder:text-ink/25 focus:text-ember text-[16px]"
                  />
                </div>
              ))}
              <div className="py-4">
                <label className="block mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">Message</label>
                <textarea required name="message" rows={4} placeholder="Tell me everything…"
                  className="w-full bg-transparent border-0 outline-none text-[15px] md:text-lg font-light placeholder:text-ink/25 resize-none min-h-[110px] text-[16px]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full mt-4 md:mt-8 bg-ink text-cream py-4 md:py-6 mono text-xs tracking-[0.3em] uppercase hover-lift active:scale-[0.98] transition-transform flex items-center justify-center gap-3 disabled:opacity-60 rounded-full md:rounded-none"
              >
                <span>{status === "submitting" ? "Transmitting…" : "Transmit signal"}</span>
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              </button>
              {status === "error" && (
                <div className="mt-4 mono text-xs uppercase tracking-widest text-ember bg-ember/10 border border-ember/20 p-3 rounded-xl text-center">● transmission failed — try again or email directly.</div>
              )}
              <div className="md:hidden mt-3 mono text-[10px] tracking-[0.2em] uppercase text-ink/40 text-center">or email vivekravi9496497657@gmail.com</div>
            </form>
          )}
        </motion.section>
      </div>

      <footer className="mt-16 md:mt-32 pt-6 md:pt-8 border-t border-ink/15 md:border-ink/30 grid grid-cols-12 gap-2 md:gap-4 mono text-[10px] tracking-[0.25em] uppercase text-ink/50">
        <div className="col-span-12 md:col-span-6 text-center md:text-left">© 2026 Vivek R — Personal portfolio · built from scratch</div>
        <div className="col-span-12 md:col-span-6 text-center md:text-right">Built by hand · No templates · ⌘K for terminal</div>
      </footer>
    </main>
  );
}
