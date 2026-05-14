"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import QuoteModal from "@/components/QuoteModal";
import BookVisitModal from "@/components/BookVisitModal";
import EmiCalculator from "@/components/EmiCalculator";
import Reveal from "@/components/Reveal";
import { SERVICES, PROJECTS, PACKAGES, REVIEWS, GALLERY_IMAGES } from "@/lib/data";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(true);
  const [bookVisitOpen, setBookVisitOpen] = useState(false);
  const servRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const [fpPage, setFpPage] = useState(0);
  const pkgsPerPage = 2;
  const totalFpPages = Math.ceil(PACKAGES.length / pkgsPerPage);
  const visiblePkgs = PACKAGES.slice(fpPage * pkgsPerPage, fpPage * pkgsPerPage + pkgsPerPage);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, d: number) =>
    ref.current?.scrollBy({ left: d * 330, behavior: "smooth" });

  return (
    <>
      {quoteOpen && <QuoteModal initial onClose={() => setQuoteOpen(false)} />}
      {bookVisitOpen && <BookVisitModal onClose={() => setBookVisitOpen(false)} />}

      <div className={`transition-all duration-500 ${quoteOpen ? "blur-sm" : ""}`}>
        <Navbar onBookVisit={() => setBookVisitOpen(true)} />

        <Hero
          onExplore={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          onContact={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        />

        {/* SERVICES */}
        <section id="services" style={{ background: "var(--dark2)", padding: "6rem 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />What We Do</p>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
                Our <em className="text-[var(--gold)]">Services</em>
              </h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] my-4" />
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg">From architectural planning to finishing touches — we handle every phase of your construction journey.</p>
            </Reveal>
            <div className="relative mt-10">
              <div ref={servRef} className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                {SERVICES.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 80} className="min-w-[280px] flex-shrink-0">
                    <div className="border border-[var(--border)] overflow-hidden group transition-transform duration-300 hover:-translate-y-1.5" style={{ background: "var(--dark3)" }}>
                      <div className="h-44 overflow-hidden relative">
                        <Image src={s.image} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-[1.15rem] text-white mb-2">{s.name}</h3>
                        <p className="text-[var(--muted)] text-[0.8rem] leading-relaxed">{s.shortDesc}</p>
                        <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-[0.75rem] tracking-wide uppercase text-[var(--gold)] mt-3 group-hover:gap-3 transition-all">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="flex gap-2 mt-5 justify-end">
                <button onClick={() => scroll(servRef, -1)} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all">←</button>
                <button onClick={() => scroll(servRef, 1)} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all">→</button>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ background: "var(--dark)", padding: "6rem 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Portfolio</p>
                <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>Our <em className="text-[var(--gold)]">Projects</em></h2>
                <div className="w-12 h-0.5 bg-[var(--gold)] mt-4" />
              </div>
              <Link href="/projects" className="text-[0.8rem] tracking-wider text-[var(--gold)] underline underline-offset-4 whitespace-nowrap">View All →</Link>
            </Reveal>
            <div className="relative">
              <div ref={projRef} className="flex gap-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                {PROJECTS.map((p, i) => (
                  <Reveal key={p.id} delay={i * 80} className="flex-shrink-0" style={{ minWidth: "clamp(280px,34vw,370px)" }}>
                    <div className="border border-[var(--border)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300" style={{ background: "var(--dark3)" }}>
                      <div className="h-56 overflow-hidden relative">
                        <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                        <span className={`absolute top-3 right-3 px-3 py-1 text-[0.65rem] tracking-[1.5px] uppercase border ${p.status === "Completed" ? "text-[var(--gold)] border-[var(--gold)] bg-[rgba(201,168,76,0.1)]" : "text-green-400 border-green-400 bg-[rgba(100,200,100,0.1)]"}`}>{p.status}</span>
                      </div>
                      <div className="p-5">
                        <p className="text-[0.65rem] tracking-[2px] uppercase text-[var(--gold)] mb-1">{p.type} · {p.location}</p>
                        <h3 className="font-serif text-[1.25rem] text-white mb-3">{p.name}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {[["Units", p.units], ["Config", p.config], ["Area", p.area], ["Floors", p.floors]].map(([k, v]) => (
                            <div key={k as string}><div className="text-[var(--muted)] text-[0.68rem] uppercase tracking-wide">{k}</div><div className="text-[var(--cream)] text-[0.85rem] font-medium mt-0.5">{v}</div></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="flex gap-2 mt-5 justify-end">
                <button onClick={() => scroll(projRef, -1)} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all">←</button>
                <button onClick={() => scroll(projRef, 1)} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all">→</button>
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section style={{ background: "var(--dark2)", padding: "6rem 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Construction Packages</p>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>Floor Plans & <em className="text-[var(--gold)]">Packages</em></h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] mt-4 mb-2" />
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg">All plans include 3D rendering, approval support, and a dedicated project manager.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {visiblePkgs.map((pkg, i) => (
                <Reveal key={pkg.tag} delay={i * 100}>
                  <div className="border border-[var(--border)] overflow-hidden hover:border-[var(--gold)] hover:-translate-y-1.5 transition-all duration-300" style={{ background: "var(--dark3)" }}>
                    <div className="h-48 overflow-hidden relative"><Image src={pkg.image} alt={pkg.name} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="600px" /></div>
                    <div className="p-6">
                      <p className="text-[0.65rem] tracking-[2px] uppercase text-[var(--gold)] mb-1">{pkg.tag}</p>
                      <h3 className="font-serif text-[1.4rem] text-white mb-1">{pkg.name}</h3>
                      <p className="text-[var(--gold)] font-medium mb-4">{pkg.price}</p>
                      <div className="h-px bg-[var(--border)] mb-4" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[0.65rem] tracking-[2px] uppercase text-green-400 mb-2">Included</p>
                          <ul className="space-y-1.5">{pkg.included.map(item => <li key={item} className="flex items-start gap-1.5 text-[0.73rem] text-[var(--muted)]"><span className="text-green-400 flex-shrink-0">✓</span>{item}</li>)}</ul>
                        </div>
                        <div>
                          <p className="text-[0.65rem] tracking-[2px] uppercase text-red-400 mb-2">Excluded</p>
                          <ul className="space-y-1.5">{pkg.excluded.map(item => <li key={item} className="flex items-start gap-1.5 text-[0.73rem] text-[var(--muted)]"><span className="text-red-400 flex-shrink-0">✗</span>{item}</li>)}</ul>
                        </div>
                      </div>
                      <button onClick={() => setQuoteOpen(true)} className="mt-5 w-full bg-[var(--gold)] text-[var(--dark)] py-2.5 text-[0.78rem] font-semibold tracking-[1.5px] uppercase hover:bg-[var(--gold2)] transition-all">Get Quote →</button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setFpPage(p => Math.max(0, p - 1))} disabled={fpPage === 0} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all disabled:opacity-30">←</button>
              <div className="flex gap-2">{Array.from({ length: totalFpPages }).map((_, i) => <button key={i} onClick={() => setFpPage(i)} className={`h-2 rounded-full transition-all ${i === fpPage ? "w-6 bg-[var(--gold)]" : "w-2 bg-[var(--border)]"}`} />)}</div>
              <button onClick={() => setFpPage(p => Math.min(totalFpPages - 1, p + 1))} disabled={fpPage === totalFpPages - 1} className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--dark)] hover:border-[var(--gold)] transition-all disabled:opacity-30">→</button>
            </div>
          </div>
        </section>

        {/* EMI */}
        <section style={{ background: "var(--dark)", padding: "6rem 0" }}>
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="text-center">
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center justify-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Financial Planning</p>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>EMI <em className="text-[var(--gold)]">Calculator</em></h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-4 mb-2" />
              <p className="text-[var(--muted)] text-sm">Adjust values to see your estimated monthly EMI.</p>
            </Reveal>
            <Reveal delay={200}><EmiCalculator /></Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ background: "var(--dark2)", padding: "6rem 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Our Work</p>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>Photo <em className="text-[var(--gold)]">Gallery</em></h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] mt-4" />
            </Reveal>
            <Reveal delay={150} className="gallery-grid mt-10">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className={`gal-item${i === 0 ? " gal-first" : ""}`}>
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(9,9,14,0.6)" }}>
                    <span className="text-[var(--cream)] text-sm font-medium">{img.label}</span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <section style={{ background: "var(--dark)", padding: "6rem 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Testimonials</p>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>What Our Customers <em className="text-[var(--gold)]">Say</em></h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] mt-4" />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 80}>
                  <div className="border border-[var(--border)] p-6 hover:border-[rgba(201,168,76,0.35)] transition-colors" style={{ background: "var(--dark3)" }}>
                    <div className="text-[var(--gold)] tracking-[2px] mb-3">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                    <p className="text-[var(--muted)] text-sm leading-[1.75] italic mb-5">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-[var(--gold)] bg-[rgba(201,168,76,0.1)] flex items-center justify-center text-[var(--gold)] text-sm font-semibold flex-shrink-0">{r.initials}</div>
                      <div>
                        <div className="text-[var(--cream)] text-sm font-medium">{r.name}</div>
                        <div className="text-[var(--gold)] text-[0.7rem] mt-0.5">{r.project}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GET IN TOUCH */}
        <section id="contact" style={{ background: "var(--dark2)", padding: "6rem 0" }}>
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <div className="text-center border border-[var(--border)] p-12 md:p-16" style={{ background: "linear-gradient(135deg,var(--dark3),rgba(201,168,76,0.05))" }}>
                <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center justify-center gap-2 mb-3"><span className="w-6 h-px bg-[var(--gold)]" />Get In Touch</p>
                <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>Ready to Build Your <em className="text-[var(--gold)]">Dream?</em></h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto mb-8">Talk to our experts for free — clarity on cost, timeline and design options for your Mysore project.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button onClick={() => setQuoteOpen(true)} className="bg-[var(--gold)] text-[var(--dark)] px-9 py-3.5 text-[0.82rem] font-semibold tracking-[1.5px] uppercase hover:bg-[var(--gold2)] transition-all">Get Free Quotation</button>
                  <Link href="/contact" className="border-2 border-[rgba(244,239,230,0.3)] text-[var(--cream)] px-9 py-3.5 text-[0.82rem] font-medium tracking-[1.5px] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all">📞 Contact Us</Link>
                </div>
                <div className="mt-10 pt-8 border-t border-[var(--border)] flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.72rem] text-[var(--muted)]">
                  <span>🛡️ RERA: <span className="text-[var(--gold)]">RERA/KA/2024/0182</span></span>
                  <span>|</span><span>ISO 9001:2015 Certified</span>
                  <span>|</span><span>Vastu Compliant</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <a href="https://wa.me/919740055678" target="_blank" rel="noreferrer" className="wa-pulse fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-[#25D366] hover:scale-110 transition-transform">💬</a>
        <Footer />
      </div>
    </>
  );
}
