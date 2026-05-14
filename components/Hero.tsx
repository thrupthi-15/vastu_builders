"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Counter({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = target / 80;
        let v = 0;
        const t = setInterval(() => {
          v = Math.min(v + step, target);
          setVal(Math.round(v));
          if (v >= target) clearInterval(t);
        }, 20);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{prefix}{val}{suffix}</div>;
}

export default function Hero({ onExplore, onContact }: { onExplore: () => void; onContact: () => void }) {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
          alt="Vaastu Builders Mysore construction"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(9,9,14,0.92) 40%, rgba(9,9,14,0.45) 100%)" }}
        />
      </div>

      {/* Content — padded top for navbar, padded bottom for stats bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full" style={{ paddingTop: "70px", paddingBottom: "110px" }}>
        <div className="max-w-[680px]">
          <div
            className="inline-flex items-center gap-2 border text-[0.65rem] tracking-[3px] uppercase px-4 py-1.5 mb-6"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            <span className="w-5 h-px bg-[var(--gold)]" />
            Mysore&apos;s Premier Builder — Est. 2005
          </div>

          <h1
            className="font-serif text-white font-black leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
          >
            Building Dreams,<br />
            <em className="text-[var(--gold)]">Crafting Legacies</em><br />
            in Karnataka
          </h1>

          <p className="text-[rgba(244,239,230,0.65)] leading-relaxed mb-8 font-light max-w-[480px]" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}>
            RERA-registered, Vastu-compliant construction delivered with precision — from luxury villas to commercial landmarks across Mysore.
          </p>

          {/* Buttons — inline-flex row, never stacked, always fully visible */}
          <div className="flex flex-row flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="bg-[var(--gold)] text-[var(--dark)] px-8 py-3.5 text-[0.82rem] font-semibold tracking-[1.5px] uppercase border-2 border-[var(--gold)] hover:bg-[var(--gold2)] hover:border-[var(--gold2)] transition-all hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              Explore Projects
            </button>
            <button
              onClick={onContact}
              className="bg-transparent text-[var(--cream)] px-8 py-3.5 text-[0.82rem] font-medium tracking-[1.5px] uppercase border-2 transition-all hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
              style={{ borderColor: "rgba(244,239,230,0.3)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,239,230,0.3)"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-[0.6rem] tracking-[3px] uppercase text-[var(--muted)] [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-12 scroll-pulse" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-3 border-t"
        style={{ background: "rgba(9,9,14,0.88)", backdropFilter: "blur(10px)", borderColor: "var(--border)" }}
      >
        {[
          { target: 152, suffix: "+", label: "Projects Completed" },
          { target: 1200, suffix: "+", label: "Happy Families" },
          { target: 19, suffix: " Yrs", label: "Years of Trust" },
        ].map((stat, i) => (
          <div
            key={i}
            className="py-3 sm:py-4 text-center"
            style={{ borderRight: i < 2 ? "1px solid var(--border)" : "none" }}
          >
            <div className="font-serif text-[var(--gold)] font-bold" style={{ fontSize: "clamp(1.2rem,3vw,2.2rem)" }}>
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="text-[0.58rem] sm:text-[0.65rem] tracking-[1.5px] sm:tracking-[2px] uppercase text-[var(--muted)] mt-0.5 sm:mt-1 px-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}