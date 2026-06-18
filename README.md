# Alpha Clean Engineering — Website

Modern corporate site for **Alpha Clean Engineering** — an Installation, Testing &
Commissioning contractor for pharmaceutical, biotech, healthcare, laboratory and
industrial facilities across **India and North Africa**.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, partnership, about, services, industries, why-us, region map |
| `/about` | About, vision, mission, values, positioning |
| `/services` | 6 service cards + execution process |
| `/industries` | 8 industries served |
| `/projects` | Project categories + drag before/after gallery |
| `/partner` | "Partner With Us" — equipment suppliers / EPC / consultants |
| `/contact` | Contact details, enquiry form, WhatsApp, Google Maps |

## Brand

- Navy `#0B2E5B`, silver/light-grey accents, white background.
- Colours and fonts: `tailwind.config.ts`.
- All site content (services, industries, contact info, nav) lives in
  [`lib/site.ts`](lib/site.ts) — edit there to update copy site-wide.

## Logo

The logo is a clean SVG recreation in [`public/logo.svg`](public/logo.svg)
(header/footer/contact) with a favicon at [`app/icon.svg`](app/icon.svg).

**To use the original PNG logo:** drop your file into `public/` (e.g.
`public/logo.png`) and update the `src` in
[`components/Logo.tsx`](components/Logo.tsx) from `/logo.svg` to `/logo.png`.

## Geographic map

The Geographic Presence map (`components/RegionMap.tsx`) uses **accurate** India
and North Africa country geometry extracted from the CC BY-SA "Simple World Map"
(A. MacDonald / F. Lekschas) — no distorted shapes.

## Contact form

The enquiry form opens the visitor's email client (`mailto:`) pre-filled to
`info@alphacleanengineering.com`. To capture submissions server-side instead,
wire `handleSubmit` in [`components/ContactForm.tsx`](components/ContactForm.tsx)
to an API route or a form service (Formspree, Resend, etc.).

## Projects gallery

`/projects` ships a working drag **before/after** comparison with CSS placeholders.
Replace the inner content of [`components/BeforeAfter.tsx`](components/BeforeAfter.tsx)
with real site photography when available.
