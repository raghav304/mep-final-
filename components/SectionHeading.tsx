import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`eyebrow ${
            light ? "border-white/25 bg-white/10 text-white" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`h-display text-3xl sm:text-4xl lg:text-[2.7rem] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-silver-light/90" : "text-navy-900/70"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
