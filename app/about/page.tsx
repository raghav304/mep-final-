import type { Metadata } from "next";
import { Target, Compass, ShieldCheck, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alpha Clean Engineering is a specialised Installation, Testing & Commissioning company for pharmaceutical, biotech, healthcare, laboratory and industrial projects across India and North Africa.",
};

const values = [
  { title: "Purity", icon: "shield" },
  { title: "Safety", icon: "shield" },
  { title: "Compliance", icon: "shield" },
  { title: "Customer Satisfaction", icon: "shield" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="About Alpha Clean Engineering"
        subtitle="A specialised engineering execution company delivering Installation, Testing & Commissioning services across regulated and industrial sectors."
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="h-display mt-5 text-3xl sm:text-4xl">
              Your equipment. Our execution.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-900/75 sm:text-lg">
              <p>
                Alpha Clean Engineering is a specialised engineering execution
                company providing Installation, Testing and Commissioning
                services for pharmaceutical, biotech, healthcare, laboratory and
                industrial projects.
              </p>
              <p>
                We partner with equipment suppliers, consultants, EPC contractors
                and facility owners to deliver successful projects on time and
                within quality requirements. We are not an equipment manufacturer
                — we are the execution team that turns your equipment and designs
                into fully commissioned, compliant facilities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-3xl border border-silver/50 bg-silver-light/40 p-8">
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Our Positioning
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Installation Contractor",
                  "Testing & Commissioning Contractor",
                  "Cleanroom Execution Partner",
                  "HVAC Execution Partner",
                  "MEP Project Execution Partner",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-navy-900">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section bg-silver-light/50">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy">
                <Compass className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
                Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-900/70">
                To become a trusted engineering execution partner across India
                and North Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="card h-full">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy">
                <Target className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
                Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-900/70">
                Deliver excellence in engineering while ensuring purity, safety,
                compliance and customer satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The principles behind every handover"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i % 4}>
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-silver/50 bg-white p-7 text-center shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-base font-semibold text-navy-900">
                    {v.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
