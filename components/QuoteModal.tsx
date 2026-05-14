"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
  initial?: boolean;
}

export default function QuoteModal({ onClose, initial }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeWithAnimate = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeWithAnimate();
    }, 2500);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ background: "rgba(9,9,14,0.95)", backdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && closeWithAnimate()}
    >
      <div
        className={`relative w-full max-w-lg max-h-[92vh] overflow-y-auto transform transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ background: "var(--dark2)", border: "1px solid var(--border)" }}
      >
        <button
          onClick={closeWithAnimate}
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--gold)] transition-colors p-1 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-serif text-2xl text-white mb-2">Thank You!</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">Our team will call you within 24 hours with your detailed quotation. We look forward to building your dream!</p>
            </div>
          ) : (
            <>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-2">Free Quotation</p>
              <h2 className="font-serif text-2xl text-white mb-1">Get Your Custom Quote</h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">Share your project details — we'll send a detailed estimate within 24 hours. No obligation.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Full Name *</label>
                    <input required type="text" placeholder="Your full name" className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Phone *</label>
                    <input required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Location / Place</label>
                    <input type="text" placeholder="e.g. Vijayanagar, Mysore" className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Plot Area (sqft)</label>
                    <input type="number" placeholder="e.g. 1200" className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Number of Floors</label>
                    <select className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors">
                      <option value="">Select floors</option>
                      <option>Ground Floor (G)</option>
                      <option>G + 1 Floor</option>
                      <option>G + 2 Floors</option>
                      <option>G + 3 Floors</option>
                      <option>G + 4+ Floors</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Project Type</label>
                    <select className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors">
                      <option value="">Select type</option>
                      <option>New Home Construction</option>
                      <option>Commercial Building</option>
                      <option>Interior Design</option>
                      <option>Renovation / Remodel</option>
                      <option>Exterior Design</option>
                      <option>Architectural Planning</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Budget Range</label>
                  <select className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors">
                    <option value="">Select range</option>
                    <option>Below ₹20 Lakhs</option>
                    <option>₹20L – ₹50L</option>
                    <option>₹50L – ₹1 Crore</option>
                    <option>₹1Cr – ₹2Cr</option>
                    <option>Above ₹2 Crore</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">Additional Requirements</label>
                  <textarea
                    placeholder="Special requirements, preferred materials, timeline, Vastu needs..."
                    rows={3}
                    className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors resize-y placeholder:text-[var(--muted)]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[var(--gold)] text-[var(--dark)] py-3.5 font-semibold text-sm tracking-[2px] uppercase hover:bg-[var(--gold2)] transition-all mt-2"
                >
                  Get Free Quotation →
                </button>
                {initial && (
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={closeWithAnimate}
                      className="text-[0.78rem] text-[var(--muted)] hover:text-[var(--gold)] transition-colors underline underline-offset-2"
                    >
                      Skip now , explore website
                    </button>
                  </div>
                )}
                <p className="text-[0.72rem] text-[var(--muted)] text-center">
                  By submitting, you agree to be contacted by Vaastu Builders. Your data is safe with us.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
