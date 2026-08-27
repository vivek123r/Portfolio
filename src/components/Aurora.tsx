import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div className="aurora" aria-hidden>
      {/* floating orbs for mind-blow depth */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] -top-20 -left-20 rounded-full blur-[1px] opacity-40 hidden md:block"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.18 38 / 0.18), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute w-[520px] h-[520px] top-[28%] -right-32 rounded-full opacity-30 hidden md:block"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.16 78 / 0.16), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="absolute w-[620px] h-[340px] bottom-[8%] left-[18%] rounded-full opacity-20 hidden md:block"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.14 280 / 0.12), transparent 70%)" }}
      />
    </div>
  );
}
