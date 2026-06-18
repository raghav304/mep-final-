"use client";

import { useState } from "react";
import Icon from "./Icon";
import { projectGallery } from "@/lib/site";

function GalleryItem({
  src,
  title,
  category,
  icon,
}: {
  src: string;
  title: string;
  category: string;
  icon: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-silver/40 bg-navy-900 shadow-card">
      {failed ? (
        <div className="grid-bg flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
          <Icon name={icon} className="h-10 w-10 text-white/40" />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${title} — Alpha Clean Engineering`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Caption overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent p-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          <Icon name={icon} className="h-3.5 w-3.5" />
          {category}
        </span>
        <h3 className="mt-2 font-display text-base font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
      {projectGallery.map((p) => (
        <GalleryItem key={p.src} {...p} />
      ))}
    </div>
  );
}
