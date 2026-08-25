import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingProduct({
  name,
  subtitle,
  description,
  to,
  side = "left",
  delay = 0,
  logo,
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
        y: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full max-w-sm"
    >
      {/* Soft floating dynamic animation container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        }}
        className="group relative"
      >
        <Link
          to={to}
          className="relative block rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-transparent to-transparent p-6 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
        >
          {/* Subtle Dynamic Ambient Backlight glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="flex items-start gap-4">
            {/* Visual Logo Container */}
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-cyan-400/[0.05] p-3 shadow-lg border border-white/10 transition-colors duration-300 group-hover:border-cyan-400/30">
              {logo ? (
                <img
                  src={logo}
                  alt={name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              )}
            </div>

            {/* Text Hierarchy */}
            <div className="space-y-1">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {subtitle}
              </span>
              <h2 className="text-xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-cyan-200">
                {name}
              </h2>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            {description}
          </p>

          {/* Action indicator link */}
          <div className="mt-5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
            Explore System
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}