import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-serif text-[1.5rem] font-bold text-[var(--gold)] mb-2">
              Vaastu Builders
            </div>
            <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed max-w-[240px]">
              Mysore's premier construction company since 2005 — delivering homes, commercial spaces, and landmarks built with pride and Karnataka's finest craftsmanship. RERA Registered · Vastu Compliant · ISO 9001:2015.
            </p>
            <div className="flex gap-2 mt-4">
              {["f", "in", "IG", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 border border-[var(--border)] flex items-center justify-center text-[0.72rem] text-[var(--muted)] cursor-pointer hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-4">Quick Links</div>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.8rem] text-[var(--muted)] hover:text-[var(--gold)] hover:pl-1 transition-all block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <div className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-4">Projects</div>
            <ul className="flex flex-col gap-2">
              {["Vaastu Royal Towers", "Vaastu Business Park", "Vaastu Serenity Villas", "Vaastu Green Meadows", "Vaastu Tech Square"].map((p) => (
                <li key={p}>
                  <Link href="/projects" className="text-[0.8rem] text-[var(--muted)] hover:text-[var(--gold)] hover:pl-1 transition-all block">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-4">Services</div>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[0.8rem] text-[var(--muted)] hover:text-[var(--gold)] hover:pl-1 transition-all block">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-[0.73rem] text-[var(--muted)]">
            © 2025 Vaastu Builders & Constructions Pvt. Ltd. All rights reserved. Mysuru, Karnataka.
          </p>
          <p className="text-[0.73rem] text-[var(--muted)]">
            RERA/KA/2024/0182 &nbsp;|&nbsp; CIN: U45200KA2005PTC036824
          </p>
        </div>
      </div>
    </footer>
  );
}
