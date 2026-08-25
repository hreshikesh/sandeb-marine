import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";
import FloatingProduct from "./FloatingProduct";
import Waves from "./Waves";

import sandeblogo from "../../../assets/logo/logo1.webp";
import shipflowlogo from "../../../assets/logo/shipflowlogo.webp";
import caeseslogo from "../../../assets/logo/caeses.webp";

export default function MarineHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 });

    const logoX = useTransform(smoothX, [-600, 600], [-15, 15]);
    const logoY = useTransform(smoothY, [-600, 600], [-10, 10]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - (rect.left + rect.width / 2));
        mouseY.set(event.clientY - (rect.top + rect.height / 2));
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#02070d] px-4 pb-24 pt-20 sm:px-6 sm:pb-16 lg:px-8"
        >
            {/* Layer 1 — soft aurora wash */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <AuroraBackground />
            </div>

            {/* Layer 2 — interactive Waves (React Bits) */}
            <div className="pointer-events-none absolute inset-0 z-[1] opacity-40 sm:opacity-50">
                <Waves
                    lineColor="rgba(103, 232, 249, 0.35)"
                    backgroundColor="transparent"
                    waveSpeedX={0.012}
                    waveSpeedY={0.008}
                    waveAmpX={28}
                    waveAmpY={14}
                    xGap={14}
                    yGap={36}
                    friction={0.92}
                    tension={0.01}
                    maxCursorMove={90}
                    className="!absolute !inset-0"
                />
            </div>

            {/* Fade edges so waves don't fight the UI */}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#02070d]/80 via-transparent to-[#02070d]" />

            {/* Watermark logo */}
            <motion.div
                style={{ x: logoX, y: logoY }}
                className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          z-[3]
          -translate-x-1/2
          -translate-y-1/2
          select-none
          opacity-[1]
          sm:opacity-[0.25]
        "
            >
                <img
                    src={sandeblogo}
                    alt="SandebTech Watermark"
                    className="w-[50vw] max-w-[200px] object-contain sm:w-[65vw] md:max-w-4xl lg:w-[50vw]"
                />
            </motion.div>

            {/* Hero copy */}
            <div className="relative z-10 mx-auto mt-5 flex w-full max-w-5xl flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl text-[clamp(1.75rem,7vw,5.5rem)] font-bold leading-tight tracking-tight text-white sm:font-semibold sm:leading-[0.95]"
                >
                    Engineering the future
                    <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent sm:mt-2">
                        of marine design.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-3 max-w-[260px] px-2 text-balance text-[11px] leading-relaxed text-slate-400 sm:mt-6 sm:max-w-xl sm:text-base md:text-lg lg:max-w-2xl"
                >
                    Advanced hydrodynamics, high-fidelity CFD, and automated design
                    optimization. Elevating marine intelligence through{" "}
                    <span className="font-semibold text-cyan-200">SHIPFLOW</span> and{" "}
                    <span className="font-semibold text-cyan-200">CAESES</span>.
                </motion.p>
            </div>

            {/* Products */}
            <div className="relative z-20 mt-8 w-full max-w-6xl sm:mt-16 md:px-6">
                <div className="hidden grid-cols-2 gap-8 md:grid">
                    <div className="flex justify-end pr-4">
                        <FloatingProduct
                            name="SHIPFLOW"
                            subtitle="Hydrodynamics"
                            description="Advanced marine CFD for resistance, propulsion, and seakeeping."
                            to="/shipflow"
                            side="left"
                            delay={0.7}
                            logo={shipflowlogo}
                        />
                    </div>
                    <div className="flex justify-start pl-4">
                        <FloatingProduct
                            name="CAESES"
                            subtitle="Optimization"
                            description="Parametric design and automated system optimizations."
                            to="/caeses"
                            side="right"
                            delay={0.85}
                            logo={caeseslogo}
                        />
                    </div>
                </div>

                <div className="mx-auto grid max-w-[340px] grid-cols-2 gap-2.5 px-2 md:hidden">
                    <MobileCard
                        name="SHIPFLOW"
                        subtitle="Hydrodynamics"
                        to="/shipflow"
                        delay={0.7}
                        logo={shipflowlogo}
                    />
                    <MobileCard
                        name="CAESES"
                        subtitle="Optimization"
                        to="/caeses"
                        delay={0.85}
                        logo={caeseslogo}
                    />
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 z-20 hidden flex-col items-center gap-1.5 sm:flex"
            >
                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Scroll Down
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-cyan-400/80"
                >
                    <ArrowDown size={14} strokeWidth={2.5} />
                </motion.div>
            </motion.div>
        </section>
    );
}

function MobileCard({ name, subtitle, to, delay, logo }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            whileTap={{ scale: 0.96 }}
            className="w-full"
        >
            <Link
                to={to}
                className="relative flex h-full flex-col justify-between gap-3 rounded-[14px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-3 text-left backdrop-blur-xl transition-colors duration-200 active:border-cyan-500/30"
            >
                <div className="absolute inset-0 -z-10 rounded-[14px] bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 active:opacity-100" />

                <div className="flex items-start justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.04] p-1.5">
                        <img src={logo} alt={name} className="h-full w-full object-contain" />
                    </div>
                    <span className="mt-0.5 rounded-full bg-cyan-400/[0.08] px-2 py-0.5 text-[6px] font-bold uppercase tracking-widest text-cyan-300">
                        View
                    </span>
                </div>

                <div>
                    <h3 className="text-[11px] font-bold tracking-wide text-white">{name}</h3>
                    <p className="mt-0.5 text-[7px] font-medium uppercase tracking-wider text-slate-400">
                        {subtitle}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}