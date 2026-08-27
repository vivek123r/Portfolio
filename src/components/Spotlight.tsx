import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    const el = document.documentElement;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${(e.clientX / window.innerWidth) * 100}%`);
      el.style.setProperty("--my", `${(e.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div className="spotlight" aria-hidden />;
}
