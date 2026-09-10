import { FadeUp } from "../motion/PremiumReveal";
import { BRAND_LOGO, BRAND_LOGO_ALT } from "../../content/brand";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="bg-surface text-pura-text-body w-full pt-6 md:pt-7 pb-6 md:pb-7 px-4 md:px-margin-desktop border-t border-pura-border">
      <FadeUp>
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center gap-3">
          <img
            src={BRAND_LOGO}
            alt={BRAND_LOGO_ALT}
            className="pura-footer__logo"
            width={910}
            height={301}
            decoding="async"
          />
          <FooterCopyright className="font-body-md text-xs text-pura-text-light leading-relaxed py-1" />
        </div>
      </FadeUp>
    </footer>
  );
}
