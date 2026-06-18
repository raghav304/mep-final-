"use client";

import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * Lightweight before/after comparison slider.
 * Uses CSS-rendered placeholder "site states" so it works without
 * uploaded photography; swap the inner content for real images later.
 */
export default function BeforeAfter({
  label,
  beforeText = "Before",
  afterText = "After",
}: {
  label: string;
  beforeText?: string;
  afterText?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-silver/50 shadow-card"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="text-center">
          <div className="grid-bg absolute inset-0 opacity-20" />
          <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {afterText}
          </span>
          <p className="relative mt-3 font-display text-lg font-semibold">{label}</p>
          <p className="relative text-xs text-silver/70">Completed &amp; Commissioned</p>
        </div>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 grid place-items-center bg-silver-light text-navy"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div className="text-center">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <span className="relative rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {beforeText}
          </span>
          <p className="relative mt-3 font-display text-lg font-semibold">{label}</p>
          <p className="relative text-xs text-navy-900/60">Site Readiness</p>
        </div>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Drag to compare"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-navy shadow-card-hover"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
