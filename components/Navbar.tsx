"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Navbar({ onBookVisit }: { onBookVisit: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[var(--border)]`}
        style={{
          background: scrolled ? "rgba(9,9,14,0.97)" : "rgba(9,9,14,0.82)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-[1.35rem] font-bold text-[var(--gold)] whitespace-nowrap">
            Vaastu <span className="text-[var(--cream)] font-normal text-[1rem]">Builders</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center list-none">
            <li><Link href="/" className="block px-4 h-[70px] leading-[70px] text-[0.82rem] tracking-wide text-[var(--muted)] hover:text-[var(--gold)] transition-colors">Home</Link></li>

            {/* Services dropdown */}
            <li className="nav-item relative">
              <button className="flex items-center gap-1 px-4 h-[70px] text-[0.82rem] tracking-wide text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                Services <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-5 py-3 text-[0.8rem] text-[var(--muted)] border-b border-white/5 hover:text-[var(--gold)] hover:bg-[rgba(201,168,76,0.06)] hover:pl-6 transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </li>

            <li><Link href="/projects" className="block px-4 h-[70px] leading-[70px] text-[0.82rem] tracking-wide text-[var(--muted)] hover:text-[var(--gold)] transition-colors">Our Projects</Link></li>
            <li><Link href="/about" className="block px-4 h-[70px] leading-[70px] text-[0.82rem] tracking-wide text-[var(--muted)] hover:text-[var(--gold)] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="block px-4 h-[70px] leading-[70px] text-[0.82rem] tracking-wide text-[var(--muted)] hover:text-[var(--gold)] transition-colors">Contact Us</Link></li>
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={onBookVisit}
              className="hidden sm:block bg-[var(--gold)] text-[var(--dark)] px-5 py-2 text-[0.78rem] font-semibold tracking-wider uppercase hover:bg-[var(--gold2)] transition-all whitespace-nowrap"
            >
              Book Site Visit
            </button>
            <button
              className="lg:hidden border border-[var(--border)] p-2 text-[var(--cream)]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed top-[70px] left-0 right-0 bottom-0 z-40 overflow-y-auto p-6 flex flex-col gap-0"
          style={{ background: "var(--dark2)" }}
        >
          <Link href="/" className="block py-4 border-b border-[var(--border)] text-[1rem] text-[var(--cream)]" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="border-b border-[var(--border)]">
            <button
              className="flex items-center justify-between w-full py-4 text-[1rem] text-[var(--cream)]"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-3 flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block py-2 text-[0.85rem] text-[var(--muted)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects" className="block py-4 border-b border-[var(--border)] text-[1rem] text-[var(--cream)]" onClick={() => setMobileOpen(false)}>Our Projects</Link>
          <Link href="/about" className="block py-4 border-b border-[var(--border)] text-[1rem] text-[var(--cream)]" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact" className="block py-4 border-b border-[var(--border)] text-[1rem] text-[var(--cream)]" onClick={() => setMobileOpen(false)}>Contact Us</Link>

          <button
            className="mt-6 bg-[var(--gold)] text-[var(--dark)] py-4 text-center font-semibold text-[0.9rem] tracking-wider uppercase"
            onClick={() => { onBookVisit(); setMobileOpen(false); }}
          >
            Book Site Visit
          </button>
        </div>
      )}
    </>
  );
}
