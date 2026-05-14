import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: `${service.name} | Vaastu Builders Mysore`, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <NavbarWrapper />
      <div className="relative h-[55vh] min-h-[400px] flex items-end mt-[70px]">
        <Image src={service.heroImage} alt={service.name} fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(9,9,14,0.95) 0%,rgba(9,9,14,0.3) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-12">
          <Link href="/#services" className="text-[var(--muted)] text-sm hover:text-[var(--gold)] transition-colors">← Back to Services</Link>
          <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mt-4 mb-2">Our Services</p>
          <h1 className="font-serif text-white font-bold" style={{ fontSize:"clamp(2rem,4.5vw,3.5rem)" }}>{service.name}</h1>
        </div>
      </div>

      <section style={{ background:"var(--dark)", padding:"5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-0.5 bg-[var(--gold)] mb-6" />
              <p className="text-[var(--muted)] text-[0.95rem] leading-[1.85] mb-8 font-light">{service.description}</p>
              <Link href="/contact" className="inline-block bg-[var(--gold)] text-[var(--dark)] px-8 py-3.5 text-[0.82rem] font-semibold tracking-[1.5px] uppercase hover:bg-[var(--gold2)] transition-all">Get Free Quote →</Link>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] mb-4">What&apos;s Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f.title} className="border-l-2 border-[var(--gold)]" style={{ background:"var(--dark3)", padding:"1rem 1rem 1rem 1.2rem" }}>
                    <div className="text-[var(--cream)] text-sm font-medium mb-1">{f.title}</div>
                    <div className="text-[var(--muted)] text-[0.75rem] leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--gold)] flex items-center gap-2 mb-6"><span className="w-6 h-px bg-[var(--gold)]" />Other Services</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="border border-[var(--border)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block" style={{ background:"var(--dark3)" }}>
                  <div className="h-36 overflow-hidden relative">
                    <Image src={s.image} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-[1.05rem] text-white mb-1">{s.name}</h3>
                    <p className="text-[var(--muted)] text-[0.75rem] line-clamp-2">{s.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
