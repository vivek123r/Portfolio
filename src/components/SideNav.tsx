import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index", num: "01" },
  { to: "/projects", label: "Work", num: "02" },
  { to: "/contact", label: "Signal", num: "03" },
] as const;

export function SideNav() {
  const { location } = useRouterState();
  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-cream">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link to="/" className="mono text-xs tracking-[0.2em] uppercase">
            Vivek_R<span className="text-ember">●</span>
          </Link>
          <div className="mono text-[10px] tracking-[0.2em] uppercase hidden md:flex gap-6">
            <span>BLR · 12.97°N</span>
            <span>v.2026.05</span>
          </div>
        </div>
      </header>

      {/* Side rail */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8 pl-6">
        {links.map((l) => {
          const active = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center gap-3 mono text-[10px] tracking-[0.25em] uppercase"
            >
              <span
                className={`h-px transition-all duration-500 ${
                  active ? "w-10 bg-ember" : "w-4 bg-ink/40 group-hover:w-8 group-hover:bg-ink"
                }`}
              />
              <span className={active ? "text-ember" : "text-ink/60 group-hover:text-ink"}>
                {l.num} {l.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-ink/20 bg-cream">
        <div className="flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex-1 py-4 mono text-[10px] tracking-[0.2em] uppercase text-center ${
                  active ? "text-ember" : "text-ink/60"
                }`}
              >
                {l.num} {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
