import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      {/* Base radial atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 75% 60% at 50% 45%,
              rgba(6, 182, 212, 0.08) 0%,
              rgba(6, 182, 212, 0.02) 40%,
              transparent 75%
            ),
            radial-gradient(
              ellipse 60% 50% at 10% 80%,
              rgba(37, 99, 235, 0.06) 0%,
              transparent 65%
            ),
            radial-gradient(
              ellipse 50% 50% at 90% 20%,
              rgba(14, 165, 233, 0.05) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Main animated aurora mesh */}
      <motion.div
        className="absolute left-1/2 top-[40%] h-[320px] w-[90%] max-w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-80 sm:h-[450px]"
        style={{
          background: `
            linear-gradient(
              105deg,
              transparent 0%,
              rgba(6, 182, 212, 0.03) 20%,
              rgba(34, 211, 238, 0.14) 45%,
              rgba(59, 130, 246, 0.08) 70%,
              transparent 100%
            )
          `,
          filter: "blur(60px)",
          transformOrigin: "center",
        }}
        animate={{
          x: ["-50%", "-48%", "-52%", "-50%"],
          y: ["-50%", "-52%", "-48%", "-50%"],
          rotate: [0, 1, -1, 0],
          scale: [1, 1.04, 0.97, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technical Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127, 216, 229, 0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 216, 229, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 15%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 80%)",
        }}
      />

      {/* Horizon Accent Line */}
      <div className="absolute bottom-[20%] left-1/2 h-[1px] w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
    </div>
  );
}