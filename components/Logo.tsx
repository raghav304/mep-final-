import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand logo. Size it with height utilities via `className`
 * (e.g. "h-14 xl:h-16") — width scales automatically from the
 * intrinsic aspect ratio. A dedicated white asset is used on dark
 * backgrounds (crisper than a CSS invert).
 */
export default function Logo({
  variant = "dark",
  className = "h-14",
  href = "/",
}: {
  variant?: "dark" | "light";
  className?: string;
  href?: string | null;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  const img = (
    <img
      src={variant === "light" ? "/logo-white.png" : "/logo.png"}
      alt={`${site.name} logo`}
      width={1018}
      height={860}
      className={`block w-auto ${className}`}
    />
  );

  if (href === null) return img;

  return (
    <Link href={href} aria-label={`${site.name} home`} className="inline-flex shrink-0">
      {img}
    </Link>
  );
}
