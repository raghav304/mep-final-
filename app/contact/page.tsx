import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, User, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alpha Clean Engineering in Hyderabad, India. Phone +91 7382720287, info@alphacleanengineering.com. Installation, Testing & Commissioning partner.",
};

const details = [
  { icon: User, label: site.director.role, value: site.director.name },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Globe, label: "Website", value: site.domain, href: `https://${site.domain}` },
  { icon: MapPin, label: "Location", value: site.location },
];

export default function ContactPage() {
  const whatsapp = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
    "Hello Alpha Clean Engineering, I'd like to discuss a project."
  )}`;

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Let's Talk About Your Project"
        subtitle="Request a consultation or a quick enquiry — our team responds promptly to installation, testing and commissioning requirements."
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: details */}
          <Reveal>
            <div className="flex items-center gap-4">
              <Logo href={null} className="h-20 sm:h-24" />
            </div>

            <h2 className="h-display mt-8 text-2xl sm:text-3xl">
              Contact Information
            </h2>
            <p className="mt-3 text-base text-navy-900/70">
              Reach out and we&apos;ll get back to you with the right execution
              approach for your project.
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <li
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-silver/50 bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/[0.06] text-navy">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-medium text-navy-900 hover:text-navy"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="font-medium text-navy-900">{d.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={1}>
            <div className="rounded-3xl border border-silver/50 bg-white p-7 shadow-card sm:p-9">
              <h2 className="h-display text-2xl">Quick Enquiry</h2>
              <p className="mt-2 text-sm text-navy-900/60">
                Fill in the form and we&apos;ll respond shortly.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
