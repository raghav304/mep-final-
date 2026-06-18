import { Check } from "lucide-react";
import CardPhoto from "./CardPhoto";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card card-hover group flex h-full flex-col overflow-hidden !p-0">
      <CardPhoto
        src={`/services/${service.slug}.jpg`}
        alt={`${service.title} — Alpha Clean Engineering`}
        icon={service.icon}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-navy-900">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
          {service.blurb}
        </p>

        <ul className="mt-5 grid gap-2.5 border-t border-silver/40 pt-5">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-navy-900/80"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                strokeWidth={2.5}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
