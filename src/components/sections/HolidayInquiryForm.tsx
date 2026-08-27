import React from "react";
import { Link } from "react-router-dom";
import { HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../../content/brand";
import { FadeUp } from "../motion/PremiumReveal";

export type HolidayStayType = "full" | "custom";

export type HolidayStayOption = {
  value: HolidayStayType;
  label: string;
  hint: string;
};

export type HolidayInquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  adults: string;
  children: string;
  stayType: HolidayStayType;
  checkIn: string;
  checkOut: string;
  roomPreference: string;
  specialNeeds: string;
  message: string;
};

type HolidayInquiryFormProps = {
  formId?: string;
  stayOptions: readonly HolidayStayOption[];
  labels: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    adults: string;
    children: string;
    stayType: string;
    roomPreference: string;
    specialNeeds: string;
    message: string;
    submit: string;
    contactUs: string;
    whatsapp: string;
    whatsappPlaceholder?: string;
    roomOptions: readonly string[];
    success: string;
  };
  dateLabels: {
    checkIn: string;
    checkOut: string;
  };
};

const initialState = (defaultStay: HolidayStayType): HolidayInquiryFormData => ({
  fullName: "",
  email: "",
  phone: "",
  country: "",
  adults: "",
  children: "",
  stayType: defaultStay,
  checkIn: "",
  checkOut: "",
  roomPreference: "",
  specialNeeds: "",
  message: "",
});

export default function HolidayInquiryForm({
  formId = "holiday-inquiry",
  stayOptions,
  labels,
  dateLabels,
}: HolidayInquiryFormProps) {
  const defaultStay = stayOptions[0]?.value ?? "custom";
  const [form, setForm] = React.useState<HolidayInquiryFormData>(() => initialState(defaultStay));
  const [submitted, setSubmitted] = React.useState(false);

  const update = <K extends keyof HolidayInquiryFormData>(field: K, value: HolidayInquiryFormData[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info(`[${formId}]`, form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-bg-card border border-surface-container-high px-4 py-3 text-sm text-primary placeholder:text-on-surface-variant/60 rounded-sm focus:outline-none focus:border-pura-green";

  const stayOptionClass = (active: boolean) =>
    [
      "text-start border rounded-sm p-4 transition-colors cursor-pointer",
      active
        ? "border-pura-green bg-pura-green/10 shadow-sm"
        : "border-surface-container-high bg-surface hover:border-secondary/50",
    ].join(" ");

  const showDates = form.stayType === "custom";

  return (
    <FadeUp>
      <form
        onSubmit={handleSubmit}
        className="bg-bg-card border border-surface-container-high p-5 sm:p-8 md:p-10 rounded-sm shadow-sm space-y-5"
        data-form={formId}
      >
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
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.country}</span>
            <input type="text" value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.adults}</span>
            <input required type="number" min={1} value={form.adults} onChange={(e) => update("adults", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.children}</span>
            <input type="number" min={0} value={form.children} onChange={(e) => update("children", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>
        </div>

        <fieldset className="space-y-3">
          <legend className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted mb-1">{labels.stayType}</legend>
          <div className={`grid grid-cols-1 gap-3 ${stayOptions.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {stayOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={stayOptionClass(form.stayType === option.value)}
                onClick={() => update("stayType", option.value)}
                aria-pressed={form.stayType === option.value}
              >
                <span className="font-headline-sm text-base text-primary block mb-1">{option.label}</span>
                <span className="text-sm text-on-surface-variant leading-relaxed">{option.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {showDates ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block space-y-1.5">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{dateLabels.checkIn}</span>
              <input
                required
                type="date"
                value={form.checkIn}
                onChange={(e) => update("checkIn", e.target.value)}
                className={`${inputClass} input-ltr`}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{dateLabels.checkOut}</span>
              <input
                required
                type="date"
                value={form.checkOut}
                onChange={(e) => update("checkOut", e.target.value)}
                className={`${inputClass} input-ltr`}
              />
            </label>
          </div>
        ) : null}

        <label className="block space-y-1.5">
          <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.roomPreference}</span>
          <select value={form.roomPreference} onChange={(e) => update("roomPreference", e.target.value)} className={inputClass}>
            <option value="">{labels.roomPreference}</option>
            {labels.roomOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5">
          <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.specialNeeds}</span>
          <textarea
            rows={3}
            value={form.specialNeeds}
            onChange={(e) => update("specialNeeds", e.target.value)}
            className={`${inputClass} resize-y min-h-[96px]`}
          />
        </label>

        <label className="block space-y-1.5">
          <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-text-muted">{labels.message}</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputClass} resize-y min-h-[120px]`}
          />
        </label>

        {submitted ? (
          <p className="text-sm text-secondary font-medium text-center pt-2" role="status">
            {labels.success}
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="btn-premium-hover flex-1 btn-cta py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm cursor-pointer"
            >
              {labels.submit}
            </button>
            <Link
              to="/contact"
              className="btn-premium-hover flex-1 text-center border border-primary text-primary hover:bg-primary hover:text-on-primary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {labels.contactUs}
            </Link>
            {HAS_REAL_WHATSAPP ? (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-hover flex-1 text-center border border-pura-green text-pura-green hover:bg-pura-green hover:text-on-primary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                {labels.whatsapp}
              </a>
            ) : (
              <span
                className="flex-1 text-center border border-surface-container-high text-on-surface-variant py-3.5 px-4 font-label-caps text-xs uppercase tracking-widest rounded-sm"
                aria-disabled="true"
              >
                {labels.whatsappPlaceholder ?? labels.whatsapp}
              </span>
            )}
          </div>
        )}
      </form>
    </FadeUp>
  );
}
