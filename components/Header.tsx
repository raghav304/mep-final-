"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site, social } from "@/lib/site";
import Logo from "./Logo";
import { LinkedInIcon, FacebookIcon, InstagramIcon } from "./BrandIcon";

const socialLinks = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: social.linkedin },
  { Icon: FacebookIcon, label: "Facebook", href: social.facebook },
  { Icon: InstagramIcon, label: "Instagram", href: social.instagram },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-900/85 backdrop-blur-md"
          : "bg-navy-900"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1540px] items-center justify-between gap-5 px-5 py-2 sm:px-8 xl:gap-8 xl:py-2.5">
        <Logo
          variant="light"
          className={`transition-all duration-300 ${
            scrolled ? "h-10 xl:h-20" : "h-12 xl:h-32"
          }`}
        />

        {/* Desktop nav */}
        <nav className="hidden flex-nowrap items-center gap-1 xl:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-silver-light/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right: phone + socials, all inline */}
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {site.phone}
          </a>
          <span className="h-6 w-px bg-white/20" aria-hidden />
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 text-white xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 z-40 bg-navy-900/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`fixed inset-x-0 z-50 origin-top border-b border-silver/40 bg-white px-5 pb-8 pt-2 shadow-card transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-b border-silver/30 py-3.5 text-base font-medium ${
                      active ? "text-navy" : "text-navy-900/75"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <a href={`tel:${site.phoneRaw}`} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-silver/50 bg-white shadow-sm"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
