import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function ScrambleText({ text, className, delay = 0, trigger = true }: { text: string; className?: string; delay?: number; trigger?: boolean }) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    let raf = 0;
    const total = 28;
    const timeout = setTimeout(() => {
      const tick = () => {
        frame++;
        if (frame >= total) {
          setOut(text);
          return;
        }
        const progress = frame / total;
        const revealed = Math.floor(progress * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed) s += text[i];
          else if (text[i] === " ") s += " ";
          else s += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setOut(s);
        raf = requestAnimationFrame(tick);
      };
      tick();
    }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [text, delay, trigger]);

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: delay / 1000 }}>
      {out}
    </motion.span>
  );
}

export function StaggerLetters({ text, className, italicOn = -1 }: { text: string; className?: string; italicOn?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotateX: -22, opacity: 0 }}
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          transition={{ delay: 0.12 + i * 0.045, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block will-change-transform ${i === italicOn ? "display-italic text-ember" : ""}`}
          whileHover={{ y: -4, scale: 1.02 }}
          style={{ transformOrigin: "bottom" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
