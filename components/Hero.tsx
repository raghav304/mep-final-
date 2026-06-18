"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, CheckCircle2 } from "lucide-react";
import Blueprint from "./Blueprint";

const pills = [
  "Installation",
  "Testing",
  "Commissioning",
];

export default function Hero() {
  const [hasHero, setHasHero] = useState(true);

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Optional hero photo — drop public/hero.jpg to enable (auto-detected) */}
      {hasHero && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.jpg"
            alt=""
            aria-hidden
            onError={() => setHasHero(false)}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/65" />
        </>
      )}
      <Blueprint
        className="pointer-events-none absolute -right-10 top-0 h-full w-[70%] text-white"
        stroke="#9bb4d6"
        opacity={0.22}
      />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-silver-light"
          >
            Your Equipment. Our Execution.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Alpha Clean Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-lg font-medium text-silver-light sm:text-xl"
          >
            Installation <span className="text-silver/60">|</span> Testing{" "}
            <span className="text-silver/60">|</span> Commissioning Contractor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-silver/80 sm:text-lg"
          >
            Delivering high-quality engineering execution services across India
            and North Africa — for pharmaceutical, biotech, healthcare,
            laboratory and industrial facilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-light group">
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/partner" className="btn-ghost-light">
              <Handshake className="h-4 w-4" />
              Become a Partner
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {pills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 text-sm text-silver-light"
              >
                <CheckCircle2 className="h-4 w-4 text-[#6fa8ff]" />
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Floating stat / message card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm">
            <p className="font-display text-2xl font-semibold leading-snug text-white">
              “We work with you, not against you.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-silver/80">
              We are not an equipment manufacturer. We are your installation,
              testing &amp; commissioning execution partner.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
              {[
                ["6+", "Service Lines"],
                ["8+", "Industries"],
                ["2", "Regions"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-white">
                    {n}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-silver/70">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-t border-white/10 bg-navy-900/60">
        <div className="container-px flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-silver/70">
          <span>Pharmaceutical</span>
          <span className="text-silver/30">•</span>
          <span>Biotechnology</span>
          <span className="text-silver/30">•</span>
          <span>Healthcare</span>
          <span className="text-silver/30">•</span>
          <span>Laboratory</span>
          <span className="text-silver/30">•</span>
          <span>Food Processing</span>
          <span className="text-silver/30">•</span>
          <span>Industrial</span>
        </div>
      </div>
    </section>
  );
}
