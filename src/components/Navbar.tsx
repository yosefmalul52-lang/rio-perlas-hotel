import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { BRAND_LOGO, BRAND_LOGO_LIGHT, BRAND_LOGO_ALT, BRAND_NAME } from "../content/brand";
import { SITE_NAV_ITEMS, type SiteNavItem } from "../content/navItems";

const NAV_LEFT = SITE_NAV_ITEMS.slice(0, 3);
const NAV_RIGHT = SITE_NAV_ITEMS.slice(3);

function NavLinks({
  items,
  locale,
}: {
  items: readonly SiteNavItem[];
  locale: "en" | "he";
}) {
  return items.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) =>
        ["pura-header__link", isActive ? "is-active" : ""].join(" ")
      }
    >
      {item.label[locale]}
    </NavLink>
  ));
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { language, t } = useLanguage();
  const { pathname } = useLocation();
  const locale = language === "he" ? "he" : "en";
  const isHome = pathname === "/";
  const [overHero, setOverHero] = React.useState(isHome);
  const transparent = isHome && overHero && !mobileOpen;

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname, language]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  React.useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return;
    }

    setOverHero(true);

    const update = () => {
      const hero = document.querySelector<HTMLElement>(".pura-hero");
      if (!hero) {
        setOverHero(window.scrollY < 40);
        return;
      }
      setOverHero(hero.getBoundingClientRect().bottom > 96);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new MutationObserver(() => {
      if (document.querySelector(".pura-hero")) {
        update();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [isHome]);

  return (
    <header
      id="top-nav"
      className={["pura-header fixed top-0 w-full z-50", transparent ? "is-over-hero" : ""].join(" ")}
    >
      <div className="pura-header__bar">
        <nav className="pura-header__nav pura-header__nav--left" aria-label="Primary">
          <NavLinks items={NAV_LEFT} locale={locale} />
        </nav>

        <NavLink to="/" end className="pura-header__logo" aria-label={BRAND_NAME}>
          <img
            id="nav-logo"
            src={transparent ? BRAND_LOGO_LIGHT : BRAND_LOGO}
            alt={BRAND_LOGO_ALT}
            width={910}
            height={301}
            decoding="async"
          />
        </NavLink>

        <div className="pura-header__end">
          <nav className="pura-header__nav pura-header__nav--right" aria-label="Secondary">
            <NavLinks items={NAV_RIGHT} locale={locale} />
          </nav>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="pura-header__menu"
            aria-label={mobileOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="pura-header__mobile min-[1200px]:hidden">
          <nav className="pura-header__mobile-nav" aria-label="Mobile">
            {SITE_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  ["pura-header__mobile-link", isActive ? "is-active" : ""].join(" ")
                }
              >
                {item.label[locale]}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
