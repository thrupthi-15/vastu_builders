import Image from "next/image";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vaastu Builders Mysore",
  description: "Learn about Vaastu Builders — Mysore's most trusted builder since 2005. 150+ projects, RERA registered, ISO 9001:2015 certified.",
};

const team = [
  { name: "Ar. Suresh Murthy", role: "Founder & Principal Architect", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", exp: "24 Years" },
  { name: "Kavitha Reddy", role: "Head – Interior Design", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", exp: "16 Years" },
  { name: "Rajan Nair", role: "Chief Structural Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", exp: "19 Years" },
  { name: "Divya Shankar", role: "Project Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", exp: "12 Years" },
];

const milestones = [
  { year: "2005", title: "Founded", desc: "Established in Mysore by Ar. Suresh Murthy with a team of 8 professionals.", done: true },
  { year: "2009", title: "First Major Project", desc: "Completed Vaastu Heritage Apartments — 48 units in Vijayanagar. First RERA-compliant project.", done: true },
  { year: "2013", title: "ISO Certified", desc: "Received ISO 9001:2008 quality management certification. Expanded to commercial construction.", done: true },
  { year: "2017", title: "100 Projects", desc: "Celebrated delivery of 100th project. Team grew to 80+ professionals across Mysore.", done: true },
  { year: "2020", title: "RERA Registered", desc: "Registered under Karnataka RERA. Launched interior design division for turnkey solutions.", done: false },
  { year: "2024", title: "Township Launch", desc: "Launched Vaastu Horizon Township — 12-acre integrated township on Mysore–Bangalore Highway.", done: false },
];

export default function AboutPage() {
  return (
    <>
      <NavbarWrapper />
      <div className="relative h-[50vh] min-h-[380px] flex items-end mt-[70px]">
        <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" alt="Vaastu Builders team" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,14,0.95) 0%, rgba(9,9,14,0.3) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-12">
          <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-2">Our Story</p>
          <h1 className="font-serif text-white font-bold" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>About <em className="text-[var(--gold)]">Vaastu Builders</em></h1>
        </div>
      </div>

      <section style={{ background: "var(--dark)", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="w-12 h-0.5 bg-[var(--gold)] mb-6" />
              <p className="text-[var(--muted)] text-[0.95rem] leading-[1.85] mb-5 font-light">Founded in 2005 by Ar. Suresh Murthy, Vaastu Builders & Constructions has grown from a modest residential contractor into Mysore&apos;s most respected real estate developer — delivering over 150 projects across Vijayanagar, Hebbal, Kuvempunagar, Nanjangud Road, and the Ring Road corridor.</p>
              <p className="text-[var(--muted)] text-[0.95rem] leading-[1.85] mb-5 font-light">Every structure we build honors Karnataka&apos;s architectural heritage while embracing modern engineering excellence. We believe homes are more than four walls — they&apos;re where generations write their stories.</p>
              <p className="text-[var(--muted)] text-[0.95rem] leading-[1.85] font-light">Our team of 120+ skilled professionals operates with one goal: to deliver your dream space on time, within budget, and beyond expectations.</p>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[["RERA Registered","RERA/KA/2024/0182"],["Vastu Certified","All layouts expert-verified"],["ISO 9001:2015","Quality management certified"],["97% On-Time","Delivery track record"]].map(([t,s])=>(
                  <div key={t} className="border-l-2 border-[var(--gold)] pl-3"><div className="text-[var(--cream)] text-sm font-medium">{t}</div><div className="text-[var(--muted)] text-[0.73rem] mt-0.5">{s}</div></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["150+","Projects Completed"],["1,200+","Happy Families"],["19 Yrs","In Business"],["120+","Team Members"],["12 Acres","Township Developed"],["6","Service Categories"]].map(([n,l])=>(
                <div key={l} className="border border-[var(--border)] p-5 text-center hover:border-[var(--gold)] transition-colors" style={{ background:"var(--dark3)" }}>
                  <div className="font-serif text-3xl font-bold text-[var(--gold)] mb-1">{n}</div>
                  <div className="text-[var(--muted)] text-[0.72rem] tracking-wide uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background:"var(--dark2)", padding:"5rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Our Journey</p>
          <h2 className="font-serif font-bold text-white mb-12" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)" }}>Two Decades of <em className="text-[var(--gold)]">Excellence</em></h2>
          <div className="relative pl-8 border-l border-[var(--border)]">
            {milestones.map((m) => (
              <div key={m.year} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full border-2 border-[var(--gold)]" style={{ background: m.done ? "var(--gold)" : "var(--dark2)" }} />
                <div className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-1">{m.year}</div>
                <div className="font-serif text-[1.1rem] text-white mb-1">{m.title}</div>
                <div className="text-[var(--muted)] text-sm leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"var(--dark)", padding:"5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-2"><span className="w-6 h-px bg-[var(--gold)]" />Our People</p>
          <h2 className="font-serif font-bold text-white mb-10" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)" }}>Meet the <em className="text-[var(--gold)]">Team</em></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="border border-[var(--border)] overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300" style={{ background:"var(--dark3)" }}>
                <div className="h-60 overflow-hidden relative">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ background:"linear-gradient(to top,rgba(9,9,14,0.8),transparent)" }}>
                    <span className="text-[var(--gold)] text-sm">{m.exp} experience</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-[1.05rem] text-white">{m.name}</h3>
                  <p className="text-[var(--gold)] text-[0.73rem] mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"var(--dark2)", padding:"3rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] text-center mb-6">Certifications & Compliance</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["🛡️ RERA/KA/2024/0182","✅ ISO 9001:2015","🏗️ MUDA Approved","☀️ Vastu Certified","🔒 BIS/ISI Standards"].map(b => (
              <div key={b} className="border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all" style={{ background:"var(--dark3)" }}>{b}</div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
