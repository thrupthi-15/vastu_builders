"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function ContactPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      <Navbar onBookVisit={() => setQuoteOpen(true)} />

      {/* Header */}
      <div className="mt-[70px] py-20 px-6 text-center" style={{ background: "var(--dark2)", borderBottom: "1px solid var(--border)" }}>
        <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-px bg-[var(--gold)]" />Contact Us
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Let&apos;s Build Something <em className="text-[var(--gold)]">Together</em>
        </h1>
        <p className="text-[var(--muted)] text-sm mt-3 max-w-md mx-auto">
          Talk to our experts, schedule a site visit, or get a free quotation — we&apos;re here Mon–Sat, 9AM–6:30PM.
        </p>
      </div>

      <section style={{ background: "var(--dark)", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Contact Info + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Map */}
            <div>
              <div className="w-full overflow-hidden border border-[var(--border)]" style={{ height: "380px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62291.07548862808!2d76.58629455820314!3d12.295810299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7000b6f4a64f%3A0x7bfce5d5e4a0a9a2!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0, filter: "grayscale(70%) invert(85%) contrast(90%)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Vaastu Builders Location Mysore"
                />
              </div>

              {/* Contact details below map */}
              <div className="mt-6 flex flex-col gap-4">
                {[
                  { icon: "📍", label: "Address", val: "#42, Saraswathipuram Main Road, Mysuru – 570009, Karnataka, India" },
                  { icon: "📞", label: "Phone", val: "+91 9980563605" },
                  { icon: "✉️", label: "Email", val: "info@vaastubuilders.in" },
                  { icon: "🕐", label: "Working Hours", val: "Monday – Saturday: 9:00 AM – 6:30 PM  |  Sunday: By appointment" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 flex-shrink-0 border border-[var(--border)] flex items-center justify-center text-[var(--gold)]">{c.icon}</div>
                    <div>
                      <div className="text-[0.65rem] tracking-[2px] uppercase text-[var(--gold)] mb-0.5">{c.label}</div>
                      <div className="text-[var(--muted)] text-sm leading-relaxed">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Site Visit Form */}
            <div>
              <div className="border border-[var(--border)] p-8" style={{ background: "var(--dark3)" }}>
                <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-2">Schedule a Visit</p>
                <h2 className="font-[family-name:var(--font-playfair)] text-[1.8rem] text-white mb-1">
                  Book a <em className="text-[var(--gold)]">Site Visit</em>
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                  Our team will take you on a guided tour of our sample flat or active construction site. Slots available Mon–Sat.
                </p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2">Visit Confirmed!</h3>
                    <p className="text-[var(--muted)] text-sm">We&apos;ll call you within 2 hours to confirm the slot. See you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Full Name *</label>
                        <input required type="text" placeholder="Your name" className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Phone *</label>
                        <input required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Email Address</label>
                      <input type="email" placeholder="your@email.com" className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Preferred Date</label>
                        <input type="date" className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Interested In</label>
                        <select className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors">
                          <option value="">Select project</option>
                          <option>Vaastu Royal Towers</option>
                          <option>Vaastu Business Park</option>
                          <option>Vaastu Serenity Villas</option>
                          <option>Vaastu Green Meadows</option>
                          <option>Vaastu Horizon Township</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Message</label>
                      <textarea
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                        className="bg-[var(--dark2)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors resize-y placeholder:text-[var(--muted)]"
                      />
                    </div>
                    <button type="submit" className="bg-[var(--gold)] text-[var(--dark)] py-3.5 font-semibold text-sm tracking-[2px] uppercase hover:bg-[var(--gold2)] transition-all mt-1">
                      Book Site Visit →
                    </button>
                  </form>
                )}
              </div>

              {/* RERA badge */}
              <div className="mt-4 flex items-center gap-2 border border-[var(--border)] px-4 py-2.5 text-[0.73rem] text-[var(--gold)]">
                🛡️ RERA Reg. No: <span className="font-medium">RERA/KA/2024/0182</span> — Karnataka RERA Registered
              </div>
            </div>
          </div>

          {/* Get Free Quote CTA */}
          <div className="text-center border border-[var(--border)] p-10 md:p-14" style={{ background: "linear-gradient(135deg, var(--dark3), rgba(201,168,76,0.05))" }}>
            <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px bg-[var(--gold)]" />Free Consultation
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-3" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto mb-6">
              Get a free consultation with our experts. We&apos;ll help you understand cost, timeline, and the right construction package for your needs — no pressure, no commitment.
            </p>
            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-[var(--gold)] text-[var(--dark)] px-10 py-3.5 text-[0.82rem] font-semibold tracking-[1.5px] uppercase hover:bg-[var(--gold2)] transition-all"
            >
              Get Free Quotation →
            </button>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919740055678" target="_blank" rel="noreferrer" className="wa-pulse fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-[#25D366] hover:scale-110 transition-transform">💬</a>
      <Footer />
    </>
  );
}
