import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo1.webp";

const NAVIGATION = [
  { label: "Home", to: "/" },
  { label: "SHIPFLOW", to: "/shipflow" },
  { label: "CAESES", to: "/caeses" },
  { label: "Contact", href: "https://sandebtech.com/contact" },
  { label: "Book a Meeting", href: "www.sandebtech.com/meeting" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#01060b] text-white">
      {/* Top cyan gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.6fr_1.1fr_1.1fr] lg:gap-8">
          
          {/* =================================================
              BRAND & TAGLINE
          ================================================= */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="SandebTech"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400 sm:text-sm">
              SandebTech delivers reliable engineering, industrial automation,
              and CFD solutions backed by quality, innovation, and technical
              precision.
            </p>

            <a
              href="https://www.sandebtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-colors hover:text-cyan-200"
            >
              sandebtech.com
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div>
            <FooterHeading>Navigation</FooterHeading>

            <nav className="flex flex-col items-start gap-3">
              {NAVIGATION.map((item) => {
                const isExternal = Boolean(item.href);
                const className =
                  "group flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-cyan-300 sm:text-sm";

                if (isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={11} className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                    </a>
                  );
                }

                return (
                  <Link key={item.label} to={item.to} className={className}>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* =================================================
              CONTACT INFO
          ================================================= */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>

            <div className="space-y-4">
              {/* Phone */}
              <ContactItem
                icon={<Phone size={14} />}
                label="Phone"
                value="+91 9108994209"
                href="tel:+919108994209"
              />

              {/* Email */}
              <ContactItem
                icon={<Mail size={14} />}
                label="Email"
                value="contact@sandebtech.com"
                href="mailto:contact@sandebtech.com"
              />

              {/* Address */}
              <ContactItem
                icon={<MapPin size={14} />}
                label="Office Address"
                value={
                  <>
                    <strong className="font-semibold text-slate-200">
                      SANDEB TECH PVT LTD
                    </strong>
                    <br />
                    166, 5th Cross, KEB Layout, Sanjaynagar
                    <br />
                    Bangalore (Bengaluru) - 560094, India
                  </>
                }
              />
            </div>
          </div>

          {/* =================================================
              INTERACTIVE MAP CARD
          ================================================= */}
          <div>
            <FooterHeading>Find Us</FooterHeading>

            <div className="group relative h-48 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#06111a]">
              {/* Technical Grid background */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(103,232,249,.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(103,232,249,.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Abstract Map Lines */}
              <div className="absolute left-[-10%] top-[45%] h-px w-[120%] rotate-[18deg] bg-cyan-300/15" />
              <div className="absolute left-[20%] top-[-20%] h-[140%] w-px rotate-[32deg] bg-cyan-300/10" />
              <div className="absolute left-[55%] top-[-10%] h-[130%] w-px -rotate-[18deg] bg-cyan-300/10" />
              <div className="absolute left-[-10%] top-[65%] h-px w-[120%] -rotate-[8deg] bg-cyan-300/10" />

              {/* Location Pulsing Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute -inset-3 animate-ping rounded-full bg-cyan-400/20" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-[#031019]/90 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  <MapPin size={16} />
                </div>
              </div>

              {/* Map Info Box */}
              <div className="absolute bottom-2.5 left-2.5 rounded-lg border border-white/10 bg-[#02070d]/85 px-2.5 py-1.5 backdrop-blur-md">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  SANDEB TECH PVT LTD
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400">
                  Sanjaynagar, Bengaluru
                </p>
              </div>

              {/* Open in Google Maps Button */}
              <a
                href="https://www.google.com/maps/place/Sandebtech+Private+Limited/@13.0229476,77.5753198,29309m/data=!3m1!1e3!4m10!1m2!2m1!1sSANDEB+TECH+PVT+LTD+Sanjaynagar+Bangalore!3m6!1s0x3bae119428b4e86d:0x56df6a3dc085b1d8!8m2!3d12.9921571!4d77.7169415!15sCilTQU5ERUIgVEVDSCBQVlQgTFREIFNhbmpheW5hZ2FyIEJhbmdhbG9yZZIBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11fqzdrq59?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/50 text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
                aria-label="Open location in Google Maps"
              >
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="flex flex-col gap-3 border-t border-white/[0.06] py-5 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Waves size={12} className="text-cyan-400/60" />
            <span>© {new Date().getFullYear()} SANDEB TECH PVT LTD</span>
          </div>

       
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER HEADING
============================================================ */
function FooterHeading({ children }) {
  return (
    <div className="mb-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">
        {children}
      </p>
      <div className="mt-2 h-px w-5 bg-cyan-300/50" />
    </div>
  );
}

/* ============================================================
   CONTACT ITEM COMPONENT
============================================================ */
function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
          {label}
        </p>
        <div className="mt-0.5 text-xs leading-relaxed text-slate-300 transition-colors group-hover:text-cyan-300">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="group block transition-opacity hover:opacity-90">
      {content}
    </a>
  ) : (
    <div className="group">{content}</div>
  );
}