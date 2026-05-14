"use client";
import { useState } from "react";
import { X, Calendar, MapPin, Clock, Phone, User } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function BookVisitModal({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(9,9,14,0.95)", backdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto"
        style={{ background: "var(--dark2)", border: "1px solid var(--border)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--gold)] transition-colors p-1 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="font-serif text-2xl text-white mb-3">Visit Scheduled!</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs mx-auto">
                Our team will call you within 2 hours to confirm your site visit date and time. We look forward to welcoming you!
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[rgba(201,168,76,0.12)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)]">Free Site Visit</p>
                  <h2 className="font-serif text-xl text-white leading-tight">Book a Site Visit</h2>
                </div>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                Come see our ongoing &amp; completed projects in person. Our expert will guide you through everything — no commitment required.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)] flex items-center gap-1">
                      <User size={10} /> Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)] flex items-center gap-1">
                      <Phone size={10} /> Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)] flex items-center gap-1">
                      <Calendar size={10} /> Preferred Date *
                    </label>
                    <input
                      required
                      type="date"
                      className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)] flex items-center gap-1">
                      <Clock size={10} /> Preferred Time *
                    </label>
                    <select
                      required
                      className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option>9:00 AM – 10:00 AM</option>
                      <option>10:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 1:00 PM</option>
                      <option>2:00 PM – 3:00 PM</option>
                      <option>3:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 5:00 PM</option>
                      <option>5:00 PM – 6:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Project interest */}
                <div className="flex flex-col gap-1">
                  <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">
                    Interested In
                  </label>
                  <select className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors">
                    <option value="">Select project type</option>
                    <option>Residential Villa / Home</option>
                    <option>Apartment / Flat</option>
                    <option>Commercial Space</option>
                    <option>Plot / Land</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                {/* Location preference */}
                <div className="flex flex-col gap-1">
                  <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)] flex items-center gap-1">
                    <MapPin size={10} /> Preferred Location / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vijayanagar, Hebbal, Mysore"
                    className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors placeholder:text-[var(--muted)]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[0.68rem] tracking-wider uppercase text-[var(--muted)]">
                    Additional Notes
                  </label>
                  <textarea
                    placeholder="Any specific requirements, questions, or instructions for your visit..."
                    rows={3}
                    className="bg-[var(--dark3)] border border-[var(--border)] text-[var(--cream)] px-3 py-2.5 text-sm focus:border-[var(--gold)] outline-none transition-colors resize-y placeholder:text-[var(--muted)]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[var(--gold)] text-[var(--dark)] py-3.5 font-semibold text-sm tracking-[2px] uppercase hover:bg-[var(--gold2)] transition-all mt-1 flex items-center justify-center gap-2"
                >
                  <Calendar size={15} />
                  Confirm Site Visit →
                </button>

                <p className="text-[0.72rem] text-[var(--muted)] text-center">
                  100% free &amp; no obligation. Our team will confirm within 2 hours.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
