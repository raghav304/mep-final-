import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Blueprint from "./Blueprint";

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 grid-bg opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <Blueprint
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 text-white"
        stroke="#9bb4d6"
        opacity={0.18}
      />
      <div className="container-px relative py-16 lg:py-24">
        <nav className="flex items-center gap-1.5 text-xs font-medium text-silver/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
