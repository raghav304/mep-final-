/**
 * Decorative engineering line-art: HVAC ducting, piping runs and panels.
 * Pure SVG so it stays crisp, fast and on-brand (no stock photography).
 */
export default function Blueprint({
  className = "",
  stroke = "#0B2E5B",
  opacity = 0.5,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke={stroke} strokeWidth="2" opacity={opacity}>
        {/* HVAC duct run */}
        <path d="M40 120 H300 V200 H520 V120 H760" />
        <path d="M40 132 H288" opacity="0.5" />
        <path d="M300 200 V120" opacity="0.5" />
        {/* Duct flanges */}
        {[120, 180, 240].map((x) => (
          <line key={x} x1={x} y1="108" x2={x} y2="146" opacity="0.5" />
        ))}
        {/* AHU box */}
        <rect x="600" y="80" width="120" height="90" rx="4" />
        <line x1="600" y1="110" x2="720" y2="110" opacity="0.5" />
        <circle cx="660" cy="140" r="16" />
        <circle cx="660" cy="140" r="6" />

        {/* Chilled water piping */}
        <path d="M60 360 H260 a24 24 0 0 1 24 24 V470 H560" />
        <path d="M60 384 H236" opacity="0.5" />
        <circle cx="120" cy="360" r="10" />
        <circle cx="200" cy="360" r="10" />
        {/* Valve */}
        <path d="M392 458 l24 24 M392 482 l24 -24" />
        <rect x="386" y="452" width="36" height="36" />

        {/* Electrical panel */}
        <rect x="610" y="380" width="130" height="160" rx="4" />
        <rect x="628" y="402" width="94" height="40" rx="2" opacity="0.6" />
        <rect x="628" y="456" width="44" height="20" rx="2" opacity="0.6" />
        <rect x="678" y="456" width="44" height="20" rx="2" opacity="0.6" />
        <line x1="628" y1="498" x2="722" y2="498" opacity="0.6" />
        <line x1="628" y1="514" x2="722" y2="514" opacity="0.6" />

        {/* Cable tray */}
        <path d="M40 540 H560" />
        <path d="M40 552 H560" opacity="0.5" />
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={i} x1={40 + i * 30} y1="540" x2={40 + i * 30} y2="552" opacity="0.4" />
        ))}

        {/* Nodes */}
        {[
          [300, 120],
          [520, 200],
          [284, 384],
          [560, 470],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill={stroke} stroke="none" />
        ))}
      </g>
    </svg>
  );
}
