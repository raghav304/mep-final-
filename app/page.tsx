import Link from "next/link";
import { ArrowRight, Check, X, Handshake } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import RegionMap from "@/components/RegionMap";
import StatsBand from "@/components/StatsBand";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import {
  services,
  industries,
  whyChooseUs,
  partnerBenefits,
  northAfricaCountries,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <StatsBand />

      {/* Partnership — Equipment Suppliers Welcome */}
      <section className="section bg-silver-light/50">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Equipment Suppliers Welcome</span>
            <h2 className="h-display mt-5 text-3xl sm:text-4xl">
              We are not your competitor.
              <br />
              <span className="text-navy/60">We are your execution partner.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-900/70 sm:text-lg">
              We collaborate with equipment manufacturers, cleanroom suppliers,
              HVAC companies, panel builders and EPC contractors to provide
              complete installation, testing and commissioning support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/partner" className="btn-primary group">
                <Handshake className="h-4 w-4" />
                Become a Partner
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1} className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {partnerBenefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-silver/50 bg-white p-5 shadow-card"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-navy-900">{b}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-300" />
                  <span className="text-silver/80">We don&apos;t manufacture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span className="text-silver/80">We execute &amp; deliver</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About preview */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white">
              <div className="grid-bg absolute inset-0 opacity-[0.12]" />
              <p className="relative font-display text-2xl font-semibold leading-snug">
                Your Equipment.
                <br />
                Our Execution.
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                {[
                  ["Vision", "A trusted engineering execution partner across India & North Africa."],
                  ["Mission", "Excellence in engineering with purity, safety & compliance."],
                ].map(([t, d]) => (
                  <div key={t}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7fb0ff]">
                      {t}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-silver/80">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Alpha Clean Engineering"
              title="A specialised engineering execution company"
              intro="We provide Installation, Testing and Commissioning services for pharmaceutical, biotech, healthcare, laboratory and industrial projects — partnering with equipment suppliers, consultants, EPC contractors and facility owners to deliver successful projects on time and to quality."
            />
            <Reveal delay={1}>
              <Link href="/about" className="btn-outline mt-8 group">
                More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-silver-light/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete engineering execution services"
            intro="From HVAC and cleanrooms to piping, electrical and commissioning — one accountable execution partner across the full MEP scope."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn-primary group">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Industries Served"
            title="Trusted across regulated & industrial sectors"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i % 4}>
                <div className="card-hover group flex flex-col items-center gap-4 rounded-2xl border border-silver/50 bg-white p-7 text-center shadow-card transition-all">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">
                    {ind.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <Certifications />

      {/* Why choose us */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl" />
        <div className="container-px relative">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="Built to execute, trusted to deliver"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i % 4}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08] sm:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9fc1ff]">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver/75">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Geographic presence */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Geographic Presence"
              title="Serving India & North Africa"
              intro="Serving projects across India and North Africa through strategic partnerships and execution excellence."
            />
            <Reveal delay={1} className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
                India
              </span>
              {northAfricaCountries.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy"
                >
                  {c}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-silver/50 bg-gradient-to-b from-white to-silver-light/40 p-5 shadow-card sm:p-8">
              <RegionMap />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
