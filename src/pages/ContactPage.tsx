import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FadeUp, SoftScale } from "../components/motion/PremiumReveal";
import InquiryForm from "../components/sections/InquiryForm";
import { HAS_REAL_EMAIL, HAS_REAL_PHONE } from "../content/brand";
import { getPublicContactChannels, RESORT_MAP } from "../content/resortLocation";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.contact;
  const channels = getPublicContactChannels({
    phone: copy.details.phone,
    email: copy.details.email,
  });
  const addressLines = RESORT_MAP.addressLines[language];

  return (
    <div className="pura-contact select-text">
      <section className="pura-contact__hero" aria-labelledby="contact-hero-title">
        <div className="pura-contact__hero-texture" aria-hidden />
        <div className="pura-contact__hero-content">
          <SoftScale>
            <p className="pura-contact__eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="contact-hero-title" className="pura-contact__title">
              {copy.hero.title}
            </h1>
            <p className="pura-contact__body">{copy.hero.body}</p>
          </SoftScale>
        </div>
      </section>

      <section className="py-12 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <aside className="lg:col-span-5" aria-labelledby="contact-aside-title">
            <FadeUp eager>
              <div className="border border-pura-green-deep bg-pura-green-deep p-6 md:p-8 rounded-sm space-y-8">
                <div>
                  <h2
                    id="contact-aside-title"
                    className="font-headline-sm text-xl md:text-2xl text-on-primary mb-3 leading-snug"
                  >
                    {copy.aside.title}
                  </h2>
                  <p className="text-sm md:text-[0.95rem] text-on-primary/80 leading-relaxed">
                    {copy.aside.intro}
                  </p>
                </div>

                <div className="space-y-5 border-t border-on-primary/15 pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-pura-gold-soft shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-gold-soft block mb-1">
                        {copy.details.phoneLabel}
                      </span>
                      {HAS_REAL_PHONE ? (
                        <a
                          href={`tel:${copy.details.phone.replace(/\s/g, "")}`}
                          className="text-on-primary hover:text-pura-gold-soft transition-colors input-ltr"
                        >
                          {copy.details.phone}
                        </a>
                      ) : (
                        <p className="text-on-primary/80">{copy.details.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-pura-gold-soft shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-gold-soft block mb-1">
                        {copy.details.emailLabel}
                      </span>
                      {HAS_REAL_EMAIL ? (
                        <a
                          href={`mailto:${copy.details.email}`}
                          className="text-on-primary hover:text-pura-gold-soft transition-colors input-ltr"
                        >
                          {copy.details.email}
                        </a>
                      ) : (
                        <p className="text-on-primary/80">{copy.details.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-pura-gold-soft shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-gold-soft block mb-1">
                        {copy.details.locationLabel}
                      </span>
                      <p className="text-on-primary/80 leading-relaxed">{copy.details.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-pura-gold-soft shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-pura-gold-soft block mb-1">
                        {copy.details.hoursLabel}
                      </span>
                      <p className="text-on-primary/80">{copy.details.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </aside>

          <div className="lg:col-span-7">
            <InquiryForm
              variant="contact"
              labels={{
                ...copy.form,
                whatsappPlaceholder: copy.details.whatsappPlaceholder,
              }}
            />
          </div>
        </div>
      </section>

      <section
        className="pb-12 md:pb-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto"
        aria-labelledby="contact-map-title"
      >
        <FadeUp>
          <div className="mb-6 md:mb-8 max-w-2xl space-y-4">
            <div>
              <p className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
                {copy.map.eyebrow}
              </p>
              <h2
                id="contact-map-title"
                className="font-headline-sm text-2xl md:text-3xl text-primary leading-snug"
              >
                {copy.map.title}
              </h2>
            </div>

            <div className="text-sm md:text-[0.95rem] text-on-surface/80 leading-relaxed space-y-1">
              <p className="font-medium text-primary">{RESORT_MAP.placeName}</p>
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {copy.map.phoneLabel}:{" "}
                {channels.phoneHref ? (
                  <a href={channels.phoneHref} className="input-ltr hover:text-secondary transition-colors">
                    {channels.phone}
                  </a>
                ) : (
                  <span className="input-ltr">{channels.phone}</span>
                )}
              </p>
              <p>
                {copy.map.emailLabel}:{" "}
                {channels.emailHref ? (
                  <a href={channels.emailHref} className="input-ltr hover:text-secondary transition-colors">
                    {channels.email}
                  </a>
                ) : (
                  <span className="input-ltr">{channels.email}</span>
                )}
              </p>
            </div>

            <p className="text-sm text-on-surface/70 leading-relaxed">{copy.map.privacy}</p>

            <a
              href={RESORT_MAP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-caps text-[11px] uppercase tracking-[0.16em] text-primary border-b border-secondary/60 pb-0.5 hover:text-secondary hover:border-secondary transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" aria-hidden />
              {copy.map.openMaps}
            </a>
          </div>

          <div className="relative w-full overflow-hidden border border-pura-green-deep/20 bg-surface-container-low aspect-[16/10] md:aspect-[21/9] rounded-sm">
            <iframe
              title={`${RESORT_MAP.placeName} — Google Maps`}
              src={RESORT_MAP.embedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
