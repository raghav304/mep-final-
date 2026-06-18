import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alpha Clean Engineering",
    short_name: "Alpha Clean",
    description:
      "Installation, Testing & Commissioning partner for India and North Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B2E5B",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
