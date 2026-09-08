import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Clock, Loader2, Mail, Phone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import OptimizedImage from "../OptimizedImage";
import { hotelGallery } from "../../lib/hotelGallery";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  HAS_REAL_WHATSAPP,
  WHATSAPP_URL,
} from "../../content/brand";
import {
  EMAIL_PATTERN,
  type HomepageInquiryPayload,
} from "../../lib/homepageInquiry";

const GUEST_OPTIONS = [
  { value: "2", en: "2 Guests", he: "2 אורחים" },
  { value: "3-4", en: "3–4 Guests", he: "3–4 אורחים" },
  { value: "5-6", en: "5–6 Guests", he: "5–6 אורחים" },
  { value: "7-10", en: "7–10 Guests", he: "7–10 אורחים" },
  { value: "10+", en: "10+ Guests", he: "10+ אורחים" },
] as const;

const COPY = {
  en: {
    title: "Let Us Plan Your Stay",
    body: "We’d love to help you create a meaningful and unforgettable experience for you and your family.\n\nInquire today and we’ll be in touch within 24 hours.",
    emailHint: "We reply within 24 hours",
    phoneHint: "WhatsApp Available",
    hoursPrimary: "Office Hours",
    hoursSecondary: "Sunday – Thursday, 9am – 6pm EST",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone / WhatsApp",
    guests: "Number of Guests",
    message: "Tell us more about your stay...",
    marketing: "I’d like to receive updates and special offers from Pura Shalom.",
    submit: "Send Inquiry",
    sending: "Sending...",
    successTitle: "Thank you.",
    successBody: "We’ve received your inquiry.\nA member of our team will be in touch within 24 hours.",
    submitError: "We couldn’t send your inquiry.\nPlease try again or contact us directly.",
    required: "This field is required.",
    emailInvalid: "Please enter a valid email address.",
  },
  he: {
    title: "תנו לנו לתכנן את השהות",
    body: "נשמח לעזור לכם ליצור חוויה משמעותית ובלתי נשכחת עבורכם ועבור המשפחה.\n\nהשאירו פנייה ונחזור אליכם תוך 24 שעות.",
    emailHint: "נשיב תוך 24 שעות",
    phoneHint: "זמינים ב־WhatsApp",
    hoursPrimary: "שעות פעילות",
    hoursSecondary: "ראשון – חמישי, 9:00 – 18:00 שעון החוף המזרחי",
    fullName: "שם מלא",
    email: "כתובת אימייל",
    phone: "טלפון / WhatsApp",
    guests: "מספר אורחים",
    message: "ספרו לנו עוד על השהות...",
    marketing: "אשמח לקבל עדכונים והצעות מפורה שלום.",
    submit: "שליחת פנייה",
    sending: "שולחים...",
    successTitle: "תודה.",
    successBody: "קיבלנו את הפנייה.\nחבר צוות ייצור איתכם קשר תוך 24 שעות.",
    submitError: "לא הצלחנו לשלוח את הפנייה.\nנסו שוב או צרו איתנו קשר ישירות.",
    required: "שדה חובה.",
    emailInvalid: "נא להזין כתובת אימייל תקינה.",
  },
} as const;

type FieldErrors = {
  fullName?: string;
  email?: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  numberOfGuests: string;
  message: string;
  marketingConsent: boolean;
};

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  numberOfGuests: "",
  message: "",
  marketingConsent: false,
};

const panelTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export default function HomeConciergeInquiry() {
  const { language, isRtl, t } = useLanguage();
  const copy = COPY[language === "he" ? "he" : "en"];
  const locale = language === "he" ? "he" : "en";
  const reduceMotion = useReducedMotion();
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const [form, setForm] = React.useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const submitting = status === "submitting";

  const phoneHref = HAS_REAL_WHATSAPP ? WHATSAPP_URL : `tel:${CONTACT_PHONE_TEL}`;

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "fullName" || field === "email") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.fullName.trim()) next.fullName = copy.required;
    if (!form.email.trim()) next.email = copy.required;
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = copy.emailInvalid;
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || status === "success") return;

    const nextErrors = validate();
    if (nextErrors.fullName || nextErrors.email) {
      setErrors(nextErrors);
      setStatus("idle");
      const first = nextErrors.fullName ? nameRef.current : emailRef.current;
      first?.focus();
      first?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      return;
    }

    const payload: HomepageInquiryPayload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      marketingConsent: form.marketingConsent,
      source: "website-homepage",
      interest: "pesach",
    };
    if (form.phone.trim()) payload.phone = form.phone.trim();
    if (form.numberOfGuests) payload.numberOfGuests = form.numberOfGuests;
    if (form.message.trim()) payload.message = form.message.trim();

    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setForm(EMPTY_FORM);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inquire" className="pura-inquire" aria-labelledby="pura-inquire-title">
      <div className="pura-inquire__media" aria-hidden="true">
        <OptimizedImage
          src={hotelGallery.tropicalPoolRetreat.src}
          alt=""
          sizes="100vw"
        />
      </div>
      <div className="pura-inquire__overlay" aria-hidden="true" />
      <motion.aside
        className="pura-inquire__info"
        dir={isRtl ? "rtl" : "ltr"}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={panelTransition}
      >
        <div className="pura-inquire__info-content">
          <h2 id="pura-inquire-title" className="pura-inquire__title">
            {copy.title}
          </h2>
          <div className="pura-inquire__rule" aria-hidden="true" />
          <p className="pura-inquire__body">{copy.body}</p>

          <div className="pura-inquire__contacts">
            <a className="pura-inquire__contact" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="pura-inquire__icon" aria-hidden="true">
                <Mail strokeWidth={1.4} size={15} />
              </span>
              <span>
                <span className="pura-inquire__contact-primary input-ltr">{CONTACT_EMAIL}</span>
                <span className="pura-inquire__contact-secondary">{copy.emailHint}</span>
              </span>
            </a>

            <a className="pura-inquire__contact" href={phoneHref}>
              <span className="pura-inquire__icon" aria-hidden="true">
                <Phone strokeWidth={1.4} size={15} />
              </span>
              <span>
                <span className="pura-inquire__contact-primary input-ltr">{CONTACT_PHONE}</span>
                <span className="pura-inquire__contact-secondary">{copy.phoneHint}</span>
              </span>
            </a>

            <div className="pura-inquire__contact">
              <span className="pura-inquire__icon" aria-hidden="true">
                <Clock strokeWidth={1.4} size={15} />
              </span>
              <span>
                <span className="pura-inquire__contact-primary">{copy.hoursPrimary}</span>
                <span className="pura-inquire__contact-secondary">{copy.hoursSecondary}</span>
              </span>
            </div>
          </div>
        </div>
      </motion.aside>

      <motion.div
        className="pura-inquire__panel"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ ...panelTransition, delay: reduceMotion ? 0 : 0.1 }}
      >
        {status === "success" ? (
          <div className="pura-inquire__success" role="status" aria-live="polite">
            <p className="pura-inquire__success-title">{copy.successTitle}</p>
            <p className="pura-inquire__success-body">{copy.successBody}</p>
          </div>
        ) : (
          <form className="pura-inquire__form" onSubmit={handleSubmit} noValidate>
            <div className="pura-inquire__fields">
              <div className="pura-inquire__field">
                <label className="sr-only" htmlFor="inquire-fullName">
                  {copy.fullName}
                </label>
                <input
                  ref={nameRef}
                  id="inquire-fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder={copy.fullName}
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  aria-invalid={errors.fullName ? true : undefined}
                  aria-describedby={errors.fullName ? "inquire-fullName-error" : undefined}
                />
                {errors.fullName ? (
                  <p id="inquire-fullName-error" className="pura-inquire__field-error">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className="pura-inquire__field">
                <label className="sr-only" htmlFor="inquire-email">
                  {copy.email}
                </label>
                <input
                  ref={emailRef}
                  id="inquire-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  placeholder={copy.email}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input-ltr"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "inquire-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="inquire-email-error" className="pura-inquire__field-error">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="pura-inquire__field">
                <label className="sr-only" htmlFor="inquire-phone">
                  {copy.phone}
                </label>
                <input
                  id="inquire-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder={copy.phone}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="input-ltr"
                />
              </div>

              <div className="pura-inquire__field">
                <label className="sr-only" htmlFor="inquire-guests">
                  {copy.guests}
                </label>
                <select
                  id="inquire-guests"
                  name="numberOfGuests"
                  value={form.numberOfGuests}
                  data-empty={form.numberOfGuests ? "false" : "true"}
                  onChange={(e) => update("numberOfGuests", e.target.value)}
                >
                  <option value="" disabled>
                    {copy.guests}
                  </option>
                  {GUEST_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option[locale]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pura-inquire__field pura-inquire__field--wide">
              <label className="sr-only" htmlFor="inquire-message">
                {copy.message}
              </label>
              <textarea
                id="inquire-message"
                name="message"
                placeholder={copy.message}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
              />
            </div>

            <label className="pura-inquire__optin">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={form.marketingConsent}
                onChange={(e) => update("marketingConsent", e.target.checked)}
              />
              <span>{copy.marketing}</span>
            </label>

            {status === "error" ? (
              <p className="pura-inquire__error" role="alert" aria-live="polite">
                {copy.submitError}
              </p>
            ) : null}

            {/* TODO: Cloudflare Turnstile — add widget here when API protection is enabled. */}
            <button
              type="submit"
              className="pura-inquire__submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="pura-inquire__spinner" size={14} aria-hidden="true" />
                  {copy.sending}
                </>
              ) : (
                copy.submit
              )}
            </button>
          </form>
        )}
      </motion.div>

      <p className="pura-inquire__copyright">{t.footer.copyright}</p>
    </section>
  );
}
