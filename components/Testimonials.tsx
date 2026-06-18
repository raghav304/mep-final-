import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="section bg-silver-light/50">
      <div className="container-px">
        <SectionHeading
          eyebrow="What Partners Say"
          title="Trusted by contractors & facility owners"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i % 2}>
              <figure className="card h-full">
                <Quote className="h-8 w-8 text-navy/20" />
                <blockquote className="mt-4 text-base leading-relaxed text-navy-900/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-silver/40 pt-5">
                  <div className="font-display font-semibold text-navy-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-navy-900/60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
