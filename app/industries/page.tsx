import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Installation, testing and commissioning for pharmaceuticals, biotechnology, healthcare, hospitals, laboratories, food processing, electronics and industrial facilities.",
};

const detail: Record<string, string> = {
  Pharmaceuticals: "GMP-compliant cleanroom, HVAC and utility execution for formulation, OSD and sterile facilities.",
  Biotechnology: "Controlled environments and process utilities for biotech and life-science production.",
  Healthcare: "HVAC, cleanroom and MEP execution for modern healthcare infrastructure.",
  Hospitals: "Operation theatres, ICUs and critical-care environments built to standard.",
  Laboratories: "Containment, fume management and clean utility installation for R&D and QC labs.",
  "Food Processing": "Hygienic HVAC, piping and utility installation for food and beverage plants.",
  "Electronics Manufacturing": "Particle-controlled cleanrooms and precision utilities for electronics.",
  "Industrial Facilities": "Robust MEP, piping and electrical execution for industrial plants.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries"
        title="Industries We Serve"
        subtitle="Trusted execution across regulated and industrial sectors where cleanliness, safety and compliance are non-negotiable."
      />

      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Sectors"
            title="Specialised execution for demanding environments"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i % 3}>
                <div className="card card-hover group h-full p-5 sm:p-7">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/[0.06] text-navy transition-colors group-hover:bg-navy group-hover:text-white sm:h-14 sm:w-14">
                      <Icon name={ind.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
                    {detail[ind.name]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Building in a regulated sector?"
        subtitle="Let's discuss how we can execute your installation, testing and commissioning scope."
      />
    </>
  );
}
