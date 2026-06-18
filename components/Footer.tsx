import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { site, services, social } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-silver-light">
      <div className="container-px section !pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="text-white"
                style={{ display: "inline-block" }}
                aria-hidden
              >
                <svg viewBox="0 0 120 110" className="h-14 w-14" fill="none">
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M60 6 L116 104 L4 104 Z M60 34 L96 96 L24 96 Z"
                  />
                </svg>
              </span>
              <div className="font-display text-lg font-bold leading-tight text-white">
                Alpha Clean
                <br />
                Engineering
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver/80">
              Installation, Testing &amp; Commissioning partner for cleanroom,
              HVAC and MEP projects across India and North Africa.
            </p>
            <p className="mt-5 font-display text-base font-semibold text-white">
              {site.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-silver/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-silver/80 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <span className="text-silver/80">{site.location}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: social.linkedin },
                { Icon: Facebook, label: "Facebook", href: social.facebook },
                { Icon: Instagram, label: "Instagram", href: social.instagram },
                { Icon: Twitter, label: "Twitter", href: social.twitter },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-silver transition-colors hover:border-white hover:bg-white hover:text-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-silver/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-medium text-silver/80">{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}
