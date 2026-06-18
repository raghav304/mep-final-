import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ready to execute your next project?",
  subtitle = "Let's talk about your installation, testing and commissioning requirements.",
  primary = { label: "Request a Consultation", href: "/contact" },
  secondary = { label: "Become a Partner", href: "/partner" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 lg:py-20">
          <div className="absolute inset-0 grid-bg opacity-[0.1]" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-navy-600/40 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-silver/80 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href={primary.href} className="btn-light group">
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={secondary.href} className="btn-ghost-light">
                {secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
