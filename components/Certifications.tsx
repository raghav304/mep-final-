import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  if (!certifications.length) return null;
  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Quality & Compliance"
          title="Built to recognised standards"
          intro="We execute to the quality, safety and cleanliness standards demanded by regulated industries."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.label} delay={i % 4}>
              <div className="card card-hover flex h-full flex-col items-center gap-3 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy">
                  <ShieldCheck className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <div className="font-display text-lg font-bold text-navy-900">
                  {c.label}
                </div>
                <div className="text-xs text-navy-900/60">{c.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
