import React from "react";
import { Link } from "react-router-dom";
import { HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../../content/brand";
import { submitInquiry } from "../../lib/submitInquiry";
import { FadeUp } from "../motion/PremiumReveal";

export type InquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  guests: string;
  preferredDates: string;
  roomPreference: string;
  requirements: string;
  message: string;
};

type InquiryFormProps = {
  labels: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    guests: string;
    preferredDates: string;
    preferredDatesPlaceholder?: string;
    roomPreference: string;
    requirements: string;
    message: string;
    submit: string;
    whatsapp: string;
    whatsappPlaceholder?: string;
    roomOptions: readonly string[];
    requirementOptions: readonly string[];
    success: string;
    error?: string;
    sending?: string;
  };
  /** @deprecated Prefer variant — compact maps to contact fields */
  compact?: boolean;
  /** full = Plan Your Stay fields; contact = conversion form fields only */
  variant?: "full" | "contact";
};

const initialState: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  guests: "",
  preferredDates: "",
  roomPreference: "",
  requirements: "",
  message: "",
};

export default function InquiryForm({ labels, compact = false, variant }: InquiryFormProps) {
  const [form, setForm] = React.useState<InquiryFormData>(initialState);
  const [honeypot, setHoneypot] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const mode = variant ?? (compact ? "contact" : "full");
  const isContact = mode === "contact";
  const submitting = status === "submitting";

  const update = (field: keyof InquiryFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || status === "success") return;

    setStatus("submitting");
    const result = await submitInquiry({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone || undefined,
      country: isContact ? undefined : form.country || undefined,
      numberOfGuests: form.guests || undefined,
      travelDates: isContact ? undefined : form.preferredDates || undefined,
      roomPreference: isContact ? undefined : form.roomPreference || undefined,
      requirements: isContact ? undefined : form.requirements || undefined,
      message: form.message || undefined,
      source: isContact ? "website-contact" : "website-contact-full",
      website: honeypot,
    });

    if (!result.ok) {
      setStatus("error");
      return;
    }

    setForm(initialState);
    setHoneypot("");
    setStatus("success");
  };

  const inputClass =
    "w-full bg-bg-card border border-surface-container-high px-4 py-3 text-sm text-primary placeholder:text-on-surface-variant/60 rounded-sm focus:outline-none focus:border-pura-green";

  return (
    <FadeUp eager={isContact}>
      <form
        onSubmit={handleSubmit}
        className="bg-bg-card border border-surface-container-high p-5 sm:p-8 md:p-10 rounded-sm shadow-sm space-y-5"
        data-form="inquiry"
        noValidate
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
        >
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.fullName}</span>
            <input required type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.email}</span>
            <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.phone}</span>
            <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>

          {isContact ? (
            <label className="block space-y-1.5">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.guests}</span>
              <input type="text" value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputClass} />
            </label>
          ) : (
            <>
              <label className="block space-y-1.5">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.country}</span>
                <input type="text" value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass} />
              </label>
              <label className="block space-y-1.5">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.guests}</span>
                <input type="text" value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputClass} />
              </label>
              <label className="block space-y-1.5">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.preferredDates}</span>
                <input
                  type="text"
                  value={form.preferredDates}
                  onChange={(e) => update("preferredDates", e.target.value)}
                  className={inputClass}
                  placeholder={labels.preferredDatesPlaceholder ?? ""}
                />
              </label>
              <label className="block space-y-1.5 md:col-span-2">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.roomPreference}</span>
                <select value={form.roomPreference} onChange={(e) => update("roomPreference", e.target.value)} className={inputClass}>
                  <option value="">{labels.roomPreference}</option>
                  {labels.roomOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block space-y-1.5 md:col-span-2">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.requirements}</span>
                <select value={form.requirements} onChange={(e) => update("requirements", e.target.value)} className={inputClass}>
                  <option value="">{labels.requirements}</option>
                  {labels.requirementOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </>
          )}

          <label className="block space-y-1.5 md:col-span-2">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.message}</span>
            <textarea
              rows={isContact ? 4 : 5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </label>
        </div>

        {status === "success" ? (
          <p className="text-sm text-secondary font-medium text-center pt-2" role="status">
            {labels.success}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-red-700 font-medium text-center pt-2" role="alert">
            {labels.error ?? "We couldn’t send your inquiry. Please try again or contact us directly."}
          </p>
        ) : null}

        {status !== "success" ? (
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="btn-premium-hover flex-1 btn-cta py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm cursor-pointer disabled:opacity-60"
            >
              {submitting ? labels.sending ?? "Sending..." : labels.submit}
            </button>
            {HAS_REAL_WHATSAPP ? (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-hover flex-1 text-center border border-pura-green text-pura-green hover:bg-pura-green hover:text-on-primary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                {labels.whatsapp}
              </a>
            ) : labels.whatsappPlaceholder ? (
              <span
                className="flex-1 text-center border border-surface-container-high text-on-surface-variant py-3.5 px-4 font-label-caps text-xs uppercase tracking-widest rounded-sm"
                aria-disabled="true"
              >
                {labels.whatsappPlaceholder}
              </span>
            ) : (
              <Link
                to="/contact"
                className="btn-premium-hover flex-1 text-center border border-pura-green text-pura-green hover:bg-pura-green hover:text-on-primary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                {labels.whatsapp}
              </Link>
            )}
          </div>
        ) : null}
      </form>
    </FadeUp>
  );
}
