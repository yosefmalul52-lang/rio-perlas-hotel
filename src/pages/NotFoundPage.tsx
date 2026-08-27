import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FadeUp } from "../components/motion/PremiumReveal";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const isHe = language === "he";

  return (
    <div className="bg-surface min-h-[70vh] select-text">
      <section className="pt-28 sm:pt-32 pb-20 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <FadeUp eager>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {isHe ? "שגיאה 404" : "Error 404"}
            </span>
          </FadeUp>
          <FadeUp eager delay={0.06}>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-4 md:mb-6">
              {isHe ? "העמוד לא נמצא" : "Page not found"}
            </h1>
          </FadeUp>
          <FadeUp eager delay={0.1}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
              {isHe
                ? "ייתכן שהקישור שגוי או שהעמוד הוסר. ניתן לחזור לדף הבית ולהמשיך לתכנן את השהות."
                : "The link may be incorrect, or the page may have been moved. Return home to continue planning your stay."}
            </p>
          </FadeUp>
          <FadeUp eager delay={0.14}>
            <Link
              to="/"
              className="inline-block btn-cta px-8 py-3.5 font-label-caps text-label-caps transition-all shadow-lg rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pura-green focus-visible:ring-offset-2"
            >
              {isHe ? "חזרה לדף הבית" : "Back to home"}
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
