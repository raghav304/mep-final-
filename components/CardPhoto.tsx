"use client";

import { useState } from "react";
import Icon from "./Icon";

/**
 * Photo banner for cards. Tries to load `src`; if the file isn't present yet
 * it falls back to a branded navy panel so nothing ever looks broken.
 */
export default function CardPhoto({
  src,
  alt,
  icon,
  className = "h-44",
}: {
  src: string;
  alt: string;
  icon: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {failed ? (
        <div className="grid-bg h-full w-full bg-gradient-to-br from-navy-800 to-navy-900" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-navy shadow-card backdrop-blur">
        <Icon name={icon} className="h-5 w-5" />
      </span>
    </div>
  );
}
