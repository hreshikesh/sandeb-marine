import { motion } from "framer-motion";
import { ArrowUpRight, Waves } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarineContactBanner() {
  return (
    <section className="relative overflow-hidden bg-[#02070d] px-6 py-20 sm:px-8 sm:py-28">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.12), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(103,232,249,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103,232,249,.7) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-300/10
            bg-white/[0.025]
            px-6
            py-12
            text-center
            backdrop-blur-xl
            sm:px-12
            sm:py-16
            lg:px-20
            lg:py-20
          "
        >
          {/* Decorative corner elements */}
          <div className="absolute left-5 top-5 h-5 w-5 border-l border-t border-cyan-300/30" />
          <div className="absolute right-5 top-5 h-5 w-5 border-r border-t border-cyan-300/30" />
          <div className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-cyan-300/30" />
          <div className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-cyan-300/30" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-2 text-[8px] uppercase tracking-[0.3em] text-cyan-300/80 sm:text-[9px]">
            <Waves size={12} />
            Let's build better marine systems
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-semibold
              leading-[0.98]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready to explore what's possible{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              in marine engineering?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Connect with SandebTech to discuss your marine engineering,
            simulation and optimization requirements.
          </p>

          {/* CTA */}
          <div className="mt-9 flex justify-center">
            <Link
              to="https://www.sandebtech.com/contact"
              target="_blank"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#021019]
                shadow-[0_0_30px_rgba(6,182,212,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]
                sm:px-8
                sm:py-4
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Contact SandebTech
              </span>

              <ArrowUpRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Bottom technical readout */}
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 text-[8px] uppercase tracking-[0.2em] text-slate-600 sm:text-[9px]">
            <span className="h-px flex-1 bg-white/[0.06]" />
            SandebTech Marine
            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}