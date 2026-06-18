import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2E5B",
          50: "#eaf0f8",
          100: "#cdddf0",
          600: "#0B2E5B",
          700: "#092548",
          800: "#061b35",
          900: "#041222",
        },
        silver: {
          DEFAULT: "#C7CDD6",
          light: "#EEF1F5",
          dark: "#9AA3B0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 46, 91, 0.18)",
        "card-hover": "0 24px 60px -16px rgba(11, 46, 91, 0.30)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(11,46,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,91,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
