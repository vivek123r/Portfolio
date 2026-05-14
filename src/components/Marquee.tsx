export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/20 py-6 bg-ink text-cream">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="display text-5xl md:text-7xl flex items-center gap-12">
            {t}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
