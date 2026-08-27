export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/20 py-4 md:py-6 bg-ink text-cream relative group/marquee cursor-crosshair">
      <div className="absolute inset-0 opacity-0 group-hover/marquee:opacity-100 transition-opacity pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, oklch(0.58 0.18 38 / 0.12), transparent)" }} />
      {/* faster on mobile for energy */}
      <div className="marquee-track flex gap-8 md:gap-12 whitespace-nowrap [animation-duration:28s] md:[animation-duration:40s] group-hover/marquee:[animation-play-state:paused] group-hover/marquee:opacity-80 transition-opacity">
        {doubled.map((t, i) => (
          <span key={i} className="display text-3xl sm:text-5xl md:text-7xl flex items-center gap-8 md:gap-12 group-hover/marquee:text-ember/90 transition-colors">
            {t}
            <span className="text-ember text-xl md:text-3xl group-hover/marquee:rotate-180 transition-transform duration-700">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
