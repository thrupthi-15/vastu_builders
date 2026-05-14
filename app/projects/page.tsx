import Image from "next/image";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Vaastu Builders Mysore",
  description: "Explore our portfolio of residential, commercial and township projects across Mysore, Karnataka.",
};

export default function ProjectsPage() {
  return (
    <>
      <NavbarWrapper />
      <div className="mt-[70px] py-20 px-6 text-center" style={{ background:"var(--dark2)", borderBottom:"1px solid var(--border)" }}>
        <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center justify-center gap-2 mb-3"><span className="w-6 h-px bg-[var(--gold)]" />Portfolio</p>
        <h1 className="font-serif font-bold text-white" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>Our <em className="text-[var(--gold)]">Projects</em></h1>
        <p className="text-[var(--muted)] text-sm mt-3 max-w-lg mx-auto">Landmark constructions across Mysore — each a testament to our craftsmanship and commitment.</p>
      </div>
      <section style={{ background:"var(--dark)", padding:"5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.id} className="border border-[var(--border)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300" style={{ background:"var(--dark3)" }}>
              <div className="h-56 overflow-hidden relative">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="450px" />
                <span className={`absolute top-3 right-3 px-3 py-1 text-[0.65rem] tracking-[1.5px] uppercase border ${p.status==="Completed"?"text-[var(--gold)] border-[var(--gold)] bg-[rgba(201,168,76,0.1)]":"text-green-400 border-green-400 bg-[rgba(100,200,100,0.1)]"}`}>{p.status}</span>
              </div>
              <div className="p-5">
                <p className="text-[0.65rem] tracking-[2px] uppercase text-[var(--gold)] mb-1">{p.type} · {p.location}</p>
                <h2 className="font-serif text-[1.25rem] text-white mb-3">{p.name}</h2>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {[["Units",p.units],["Config",p.config],["Area",p.area],["Floors",p.floors],["Price",p.price],["Year",p.year]].map(([k,v])=>(
                    <div key={k as string}><div className="text-[var(--muted)] text-[0.68rem] uppercase tracking-wide">{k}</div><div className="text-[var(--cream)] text-[0.82rem] font-medium mt-0.5">{v}</div></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
