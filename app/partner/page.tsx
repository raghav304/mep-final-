import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { partnerAudience, partnerBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Alpha Clean Engineering. We help equipment suppliers, HVAC manufacturers, cleanroom suppliers, panel builders, EPC contractors and consultants execute projects with professional installation, testing and commissioning support.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        breadcrumb="Partner With Us"
        title="Partner With Alpha Clean Engineering"
        subtitle="Your equipment. Our execution. We help suppliers and contractors deliver projects through professional installation, testing and commissioning."
      />

      {/* Positioning statement */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-4xl rounded-3xl border border-silver/50 bg-silver-light/40 p-8 text-center sm:p-12">
            <h2 className="h-display text-2xl sm:text-3xl">
              We do not manufacture equipment.
              <br />
              <span className="text-navy/60">We provide execution support.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-900/70 sm:text-lg">
              We help equipment suppliers and contractors successfully execute
              projects through professional installation, testing and
              commissioning services — protecting your brand and your client
              relationships on every site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we partner with */}
      <section className="section bg-silver-light/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="Who We Partner With"
            title="Built for suppliers, contractors & consultants"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {partnerAudience.map((a, i) => (
              <Reveal key={a} delay={i % 3}>
                <div className="flex items-center gap-3 rounded-2xl border border-silver/50 bg-white p-4 shadow-card sm:gap-4 sm:p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white sm:h-12 sm:w-12">
                    <Icon name="handshake" className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="font-display text-sm font-semibold text-navy-900 sm:text-base">
                    {a}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner / not a competitor */}
      <section className="section">
        <div className="container-px grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Partnership Benefits"
              title="A partner that makes you faster"
            />
            <ul className="mt-8 space-y-4">
              {partnerBenefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-silver/50 bg-white p-5 shadow-card"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-navy-900">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <div className="overflow-hidden rounded-3xl border border-silver/50 shadow-card">
              <div className="grid grid-cols-2 bg-navy-900 text-white">
                <div className="border-r border-white/10 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-300">
                    <X className="h-5 w-5" /> We are NOT
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-silver/80">
                    <li>An equipment manufacturer</li>
                    <li>A competitor to suppliers</li>
                    <li>A rival for your clients</li>
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <Check className="h-5 w-5" /> We ARE
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-silver/80">
                    <li>Your execution partner</li>
                    <li>Skilled site teams</li>
                    <li>Testing & commissioning experts</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-7 text-center">
                <p className="font-display text-lg font-semibold text-navy-900">
                  &ldquo;We work with you, not against you.&rdquo;
                </p>
                <Link href="/contact" className="btn-primary group mt-6">
                  Become a Strategic Partner
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
