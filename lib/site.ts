export const site = {
  name: "Alpha Clean Engineering",
  shortName: "Alpha Clean Engineering",
  tagline: "Engineering Clean Environment",
  motto: "Your Equipment. Our Execution.",
  domain: "alphacleanengineering.com",
  url: "https://alphacleanengineering.com",
  phone: "+91 7382720287",
  phoneRaw: "917382720287",
  email: "info@alphacleanengineering.com",
  location: "Hyderabad, Telangana, India",
  director: {
    name: "Durga Kanigiri",
    role: "Managing Director",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  items: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "hvac",
    title: "HVAC Systems",
    blurb:
      "Complete HVAC execution from ducting to balancing — built for controlled, contamination-free environments.",
    icon: "wind",
    items: [
      "GI Ducting Installation",
      "SS Ducting Installation",
      "Duct Insulation",
      "AHU Installation",
      "Exhaust Systems",
      "HVAC Commissioning",
    ],
  },
  {
    slug: "cleanroom",
    title: "Cleanroom Systems",
    blurb:
      "Turnkey cleanroom installation to classified standards, validation-ready and audit-ready on handover.",
    icon: "box",
    items: [
      "Cleanroom Installation",
      "Modular Panels",
      "Cleanroom Doors",
      "Pass Boxes",
      "Airlocks",
      "Validation Support",
    ],
  },
  {
    slug: "piping",
    title: "Piping Systems",
    blurb:
      "Precision piping for chilled water, hot water and process utilities — pressure-tested and certified.",
    icon: "git-merge",
    items: [
      "Chilled Water Piping",
      "Hot Water Piping",
      "Utility Piping",
      "SS Piping",
      "Insulation Works",
      "Pressure Testing",
    ],
  },
  {
    slug: "electrical",
    title: "Electrical Systems",
    blurb:
      "Power and control installation executed safely, neatly and to specification across the facility.",
    icon: "zap",
    items: [
      "Cable Tray Installation",
      "Power Cabling",
      "Control Cabling",
      "Panel Installation",
      "Earthing Systems",
      "Testing & Commissioning",
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing Systems",
    blurb:
      "Clean water, drainage and process utility connections installed and tested for reliable operation.",
    icon: "droplets",
    items: [
      "Water Supply Systems",
      "Drainage Systems",
      "Process Utility Connections",
      "Plumbing Installation",
      "Testing",
    ],
  },
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    blurb:
      "Functional testing, verification and documented handover that gets systems signed off and running.",
    icon: "clipboard-check",
    items: [
      "Functional Testing",
      "System Commissioning",
      "Performance Verification",
      "Documentation Support",
      "Handover Assistance",
    ],
  },
];

export type Industry = { name: string; icon: string };

export const industries: Industry[] = [
  { name: "Pharmaceuticals", icon: "pill" },
  { name: "Biotechnology", icon: "dna" },
  { name: "Healthcare", icon: "heart-pulse" },
  { name: "Hospitals", icon: "hospital" },
  { name: "Laboratories", icon: "flask-conical" },
  { name: "Food Processing", icon: "utensils" },
  { name: "Electronics Manufacturing", icon: "cpu" },
  { name: "Industrial Facilities", icon: "factory" },
];

export const whyChooseUs = [
  {
    title: "Execution-Focused Team",
    desc: "A workforce built for the site — mobilised, supervised and accountable from kickoff to handover.",
    icon: "users",
  },
  {
    title: "Quality Workmanship",
    desc: "Installations that pass inspection the first time, finished to pharmaceutical-grade standards.",
    icon: "badge-check",
  },
  {
    title: "Safety First",
    desc: "Disciplined HSE practices protecting your site, your timeline and our people.",
    icon: "shield-check",
  },
  {
    title: "On-Time Delivery",
    desc: "Realistic plans and tight site management that keep your project on schedule.",
    icon: "clock",
  },
  {
    title: "Strong Technical Expertise",
    desc: "Deep MEP, HVAC and cleanroom know-how across regulated industries.",
    icon: "wrench",
  },
  {
    title: "Flexible Resource Deployment",
    desc: "Scale crews up or down to match your project phases and peak demand.",
    icon: "scaling",
  },
  {
    title: "Partner-Friendly Approach",
    desc: "We execute under your brand and protect your client relationships.",
    icon: "handshake",
  },
  {
    title: "India & North Africa Coverage",
    desc: "Execution capability across India and North African markets through strategic partnerships.",
    icon: "globe",
  },
];

export const partnerAudience = [
  "Equipment Suppliers",
  "HVAC Manufacturers",
  "Cleanroom Suppliers",
  "Electrical Panel Manufacturers",
  "EPC Contractors",
  "Engineering Consultants",
];

export const partnerBenefits = [
  "Faster project completion",
  "Skilled execution teams",
  "Site management support",
  "Testing and commissioning expertise",
  "Long-term partnership opportunities",
];

export const projectCategories = [
  {
    title: "HVAC Installation",
    desc: "Ducting, AHUs and exhaust systems delivered and balanced for controlled environments.",
    icon: "wind",
  },
  {
    title: "Cleanroom Installation",
    desc: "Modular panels, doors, pass boxes and airlocks built to classified cleanliness standards.",
    icon: "box",
  },
  {
    title: "Electrical Works",
    desc: "Cable trays, power and control cabling, panels and earthing executed to spec.",
    icon: "zap",
  },
  {
    title: "Piping Systems",
    desc: "Chilled water, utility and SS piping installed, insulated and pressure-tested.",
    icon: "git-merge",
  },
  {
    title: "Testing & Commissioning",
    desc: "Functional testing, verification and documented handover across full facilities.",
    icon: "clipboard-check",
  },
];

export const northAfricaCountries = [
  "Morocco",
  "Algeria",
  "Tunisia",
  "Libya",
  "Egypt",
];

// Project showcase photos. Drop files into public/projects/ with these exact
// names. Missing files fall back to a branded navy panel automatically.
export const projectGallery: {
  src: string;
  title: string;
  category: string;
  icon: string;
}[] = [
  { src: "/projects/cleanroom.jpg", title: "Modular Cleanroom & Corridor", category: "Cleanroom", icon: "box" },
  { src: "/projects/hvac.jpg", title: "GI Duct Distribution & AHUs", category: "HVAC", icon: "wind" },
  { src: "/projects/piping.jpg", title: "Chilled & Hot Water Piping", category: "Piping", icon: "git-merge" },
  { src: "/projects/electrical.jpg", title: "MCC & Control Panels", category: "Electrical", icon: "zap" },
  { src: "/projects/utilities.jpg", title: "Pharma Process Utilities", category: "Piping", icon: "git-merge" },
  { src: "/projects/process.jpg", title: "Process Skid Installation", category: "Commissioning", icon: "clipboard-check" },
];

/* ------------------------------------------------------------------ *
 * TRUST CONTENT — EDIT THESE WITH YOUR REAL FIGURES / CERTS / QUOTES.
 * Placeholder values are marked. Do not publish figures you can't back.
 * ------------------------------------------------------------------ */

// Headline metrics. value = number shown, suffix = "+", "%", "K", etc.
// Kept honest for a newly-started company — add Projects/Years later as you grow.
export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "", label: "Service Lines" },
  { value: 8, suffix: "+", label: "Industries Served" },
  { value: 2, suffix: "", label: "Regions — India & N. Africa" },
];

// Certifications / standards you actually hold or work to.
// Remove any you do not hold — do NOT claim certifications you lack.
export const certifications: { label: string; note: string }[] = [
  { label: "ISO 9001", note: "Quality Management" }, // CONFIRM / EDIT
  { label: "GMP / cGMP", note: "Good Manufacturing Practice" }, // CONFIRM / EDIT
  { label: "HSE", note: "Health, Safety & Environment" }, // CONFIRM / EDIT
  { label: "ISO 14644", note: "Cleanroom Standards" }, // CONFIRM / EDIT
];

// Client testimonials (optional). Leave empty array [] to hide the section.
export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [
  {
    quote:
      "Alpha Clean Engineering executed our cleanroom and HVAC installation on schedule and to specification — a dependable execution partner.", // EDIT
    name: "Project Lead", // EDIT
    role: "Pharmaceutical EPC Contractor", // EDIT
  },
  {
    quote:
      "Their testing and commissioning team made our handover smooth and fully documented. We will work with them again.", // EDIT
    name: "Facility Manager", // EDIT
    role: "Biotech Facility", // EDIT
  },
];

// Footer / header social links. Replace "#" with your real profile URLs.
export const social = {
  linkedin: "#", // EDIT
  facebook: "#", // EDIT
  instagram: "#", // EDIT
  twitter: "#", // EDIT
};
