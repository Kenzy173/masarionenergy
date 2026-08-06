"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/content";

type Status = "idle" | "submitting" | "success";
type Errors = Partial<
  Record<"name" | "email" | "phone" | "service" | "stage" | "message", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stages = [
  "Exploration / appraisal",
  "Development",
  "Operations / production",
  "Financing / capital",
  "Maintenance / upgrades",
  "Other",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const next: Errors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const stage = String(formData.get("stage") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email.";
    else if (!emailPattern.test(email)) next.email = "Enter a valid email address.";
    if (!phone) next.phone = "Enter your phone number.";
    if (!service) next.service = "Select a service.";
    if (!stage) next.stage = "Select a stage.";
    if (!message) next.message = "Tell us what you need.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // TODO: wire to a real intake endpoint once the Masarion domain/email is confirmed.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-6">
        <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-700" size={22} />
        <div>
          <p className="font-medium text-ink">Request received.</p>
          <p className="mt-1 type-body-sm text-ink-soft">
            A member of the Masarion Energy team will get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" error={errors.name} autoComplete="name" />
      <Field
        label="Email"
        name="email"
        type="email"
        error={errors.email}
        autoComplete="email"
      />
      <Field
        label="Phone number"
        name="phone"
        type="tel"
        error={errors.phone}
        autoComplete="tel"
      />
      <div>
        <label htmlFor="service" className="type-label text-ink">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-indigo-700 aria-invalid:border-amber-600"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other / multiple</option>
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-sm text-amber-800">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="stage" className="type-label text-ink">
          Project stage
        </label>
        <select
          id="stage"
          name="stage"
          defaultValue=""
          aria-invalid={Boolean(errors.stage)}
          aria-describedby={errors.stage ? "stage-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-indigo-700 aria-invalid:border-amber-600"
        >
          <option value="" disabled>
            Select a stage
          </option>
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
        {errors.stage && (
          <p id="stage-error" className="mt-1.5 text-sm text-amber-800">{errors.stage}</p>
        )}
      </div>

      <div>
        <label htmlFor="hear" className="type-label text-ink">
          How did you find us?
        </label>
        <select
          id="hear"
          name="hear"
          defaultValue=""
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-indigo-700"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Our Website">Our Website</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="type-label text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-indigo-700 aria-invalid:border-amber-600"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-amber-800">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-amber-600/60"
        >
          {submitting ? "Sending…" : "Request a consultation"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="type-label text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-indigo-700 aria-invalid:border-amber-600"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-amber-800">
          {error}
        </p>
      )}
    </div>
  );
}
