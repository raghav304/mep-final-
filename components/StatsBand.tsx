"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/site";

function Counter({
  value,
  suffix,
  play,
}: {
  value: number;
  suffix: string;
  play: boolean;
}) {
  const [n, setN] = useState(0);
  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!play) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, value]);

  return (
    <span>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative -mt-px overflow-hidden bg-navy-900 text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div
        ref={ref}
        className="container-px relative grid grid-cols-3 gap-x-4 gap-y-10 py-14 lg:py-16"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} play={inView} />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-silver/70 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
