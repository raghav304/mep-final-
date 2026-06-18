import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Alpha Clean Engineering | Installation, Testing & Commissioning Contractor",
    template: "%s | Alpha Clean Engineering",
  },
  description:
    "Alpha Clean Engineering is an Installation, Testing & Commissioning contractor for pharmaceutical, biotech, healthcare and industrial facilities across India and North Africa. Cleanroom, HVAC and MEP execution partner.",
  keywords: [
    "Cleanroom Installation Contractor",
    "HVAC Installation Contractor",
    "Testing and Commissioning Contractor",
    "Pharmaceutical HVAC Contractor",
    "Cleanroom Contractor India",
    "HVAC Contractor Hyderabad",
    "MEP Contractor India",
    "Cleanroom Solutions India",
    "Industrial Installation Contractor",
    "Commissioning Services India",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title:
      "Alpha Clean Engineering | Installation, Testing & Commissioning Contractor",
    description:
      "Installation, Testing & Commissioning partner for cleanroom, HVAC and MEP projects across India and North Africa.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Clean Engineering",
    description:
      "Installation, Testing & Commissioning partner for India and North Africa.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    description:
      "Installation, Testing & Commissioning contractor for cleanroom, HVAC and MEP projects.",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: ["India", "Morocco", "Algeria", "Tunisia", "Libya", "Egypt"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Spacer so the mobile sticky bar never overlaps footer content */}
        <div className="h-14 xl:hidden" />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
