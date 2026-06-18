import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC, cleanroom, piping, electrical, plumbing and testing & commissioning installation services for pharmaceutical and industrial facilities across India and North Africa.",
};

const process = [
  { step: "01", title: "Survey & Planning", desc: "Site assessment, scope freeze and execution planning aligned to your schedule." },
  { step: "02", title: "Installation", desc: "Skilled crews execute HVAC, cleanroom, piping and electrical works to spec." },
  { step: "03", title: "Testing", desc: "Pressure testing, functional checks and performance verification." },
  { step: "04", title: "Commissioning & Handover", desc: "System commissioning, documentation and validation-ready handover." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        title="Installation, Testing & Commissioning Services"
        subtitle="One accountable execution partner for the full MEP scope — delivered to pharmaceutical-grade standards."
      />

      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Execution process */}
      <section className="section bg-silver-light/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="How We Work"
            title="A disciplined execution process"
            intro="From survey to handover, every project follows a structured, accountable workflow."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i % 4}>
                <div className="relative h-full rounded-2xl border border-silver/50 bg-white p-5 shadow-card sm:p-7">
                  <span className="font-display text-4xl font-bold text-navy/15">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project scope ready?"
        subtitle="Share your drawings and requirements — we'll respond with an execution approach."
        primary={{ label: "Request a Consultation", href: "/contact" }}
        secondary={{ label: "See Our Projects", href: "/projects" }}
      />
    </>
  );
}
