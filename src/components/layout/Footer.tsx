import { FadeUp } from "../motion/PremiumReveal";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface text-pura-text-body w-full pt-6 md:pt-7 pb-6 md:pb-7 px-4 md:px-margin-desktop border-t border-pura-border">
      <FadeUp>
        <div className="max-w-container-max mx-auto text-center">
          <p className="font-body-md text-xs text-pura-text-light leading-none py-1">{t.footer.copyright}</p>
        </div>
      </FadeUp>
    </footer>
  );
}
