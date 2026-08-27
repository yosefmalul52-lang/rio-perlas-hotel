import { useLanguage } from "../../context/LanguageContext";
import { BRAND_NAME } from "../../content/brand";

/** Branded Suspense fallback — matches surface color to avoid white flash / CLS. */
export default function RouteFallback() {
  const { language } = useLanguage();
  const label = language === "he" ? "טוען…" : "Loading…";

  return (
    <div
      className="bg-surface min-h-[70vh] flex flex-col items-center justify-center px-6 py-32"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="font-headline-sm text-primary text-lg tracking-wide mb-2">{BRAND_NAME}</p>
      <p className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
    </div>
  );
}
