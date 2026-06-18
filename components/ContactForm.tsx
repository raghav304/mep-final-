"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site, services } from "@/lib/site";

type Status = "idle" | "sent";

export default function ContactForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry from ${form.name || "Website"}${
        form.company ? ` (${form.company})` : ""
      }`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Company: ${form.company}`,
        `Service of interest: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const field =
    "w-full rounded-xl border border-silver/60 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-900/40 focus:border-navy focus:ring-2 focus:ring-navy/15";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
            Full Name
          </label>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
            Email
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={field}
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
            Phone
          </label>
          <input
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
            Company
          </label>
          <input
            value={form.company}
            onChange={update("company")}
            placeholder="Company / Organisation"
            className={field}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
          Service of Interest
        </label>
        <select value={form.service} onChange={update("service")} className={field}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Partnership">Partnership / Collaboration</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-900/70">
          Message
        </label>
        <textarea
          required
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project, scope and timeline..."
          className={field}
        />
      </div>

      {status === "sent" ? (
        <div className="flex items-center gap-2 rounded-xl bg-navy/[0.05] px-4 py-3 text-sm font-medium text-navy">
          <CheckCircle2 className="h-5 w-5" />
          Thank you — your email client has opened. We&apos;ll respond shortly.
        </div>
      ) : (
        <button type="submit" className="btn-primary group mt-1 w-full sm:w-auto">
          Send Enquiry
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      )}
    </form>
  );
}
