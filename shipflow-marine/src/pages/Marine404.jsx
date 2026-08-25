import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.webp"; // adjust path to your marine logo

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#02070d] px-4 py-24">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127,216,229,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127,216,229,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        
        {/* Giant 0 with 404 inside */}
        
     

          {/* 404 nested inside the zero */}
          <span
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              bg-gradient-to-b from-cyan-200 via-cyan-300 to-sky-500
              bg-clip-text font-bold tracking-tight text-transparent
              text-[clamp(2.5rem,10vw,4.5rem)]
            "
          >
            404
          </span>


        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-60"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300/70">
            Page not found
          </p>
         
       
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            to="/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full border border-cyan-300/30
              bg-cyan-300/10 px-7 py-3
              text-[11px] font-semibold uppercase tracking-[0.2em]
              text-cyan-200
              transition duration-300
              hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white
            "
          >
            Back to home
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              inline-flex items-center justify-center
              rounded-full border border-white/10
              bg-white/[0.03] px-6 py-3
              text-[11px] font-medium uppercase tracking-[0.18em]
              text-slate-400
              transition duration-300
              hover:border-white/20 hover:text-slate-200
            "
          >
            Go back
          </button>
        </motion.div>
      </div>

      {/* Horizon line */}
      <div className="pointer-events-none absolute bottom-[18%] left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
    </section>
  );
}