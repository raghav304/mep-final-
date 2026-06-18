import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import BeforeAfter from "@/components/BeforeAfter";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";
import { projectCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project showcase across HVAC installation, cleanroom installation, electrical works, piping systems and testing & commissioning.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        title="Projects & Execution Showcase"
        subtitle="A look at the scope we deliver — from cleanroom and HVAC installation to piping, electrical works and full commissioning."
      />

      {/* Categories */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Project Categories"
            title="Execution across every system"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {projectCategories.map((c, i) => (
              <Reveal key={c.title} delay={i % 3}>
                <div className="card card-hover group h-full p-5 sm:p-7">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy/[0.06] text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section bg-silver-light/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Execution in the field"
            intro="A look at the cleanroom, HVAC, piping and electrical scope we install, test and commission."
          />
          <ProjectGallery />
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Before & After"
            title="From site readiness to commissioned facility"
            intro="Drag the slider to compare project states. Drop in your own site photography to bring these to life."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              "Cleanroom Installation",
              "HVAC Ducting",
              "Chilled Water Piping",
              "Electrical Panel Room",
            ].map((label, i) => (
              <Reveal key={label} delay={i % 2}>
                <BeforeAfter label={label} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center text-sm text-navy-900/60">
            Project gallery placeholders — ready for your real before/after
            photography.
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to see relevant case work?"
        subtitle="Tell us your sector and scope — we'll share the most relevant execution experience."
      />
    </>
  );
}
