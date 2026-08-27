import React from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  activeTab: "discover" | "planner" | "inquiries" | "chat";
  setActiveTab: (tab: "discover" | "planner" | "inquiries" | "chat") => void;
  inquiriesCount: number;
}

export default function Navbar({ activeTab, setActiveTab, inquiriesCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [activeTab]);

  const isSolid = isScrolled || activeTab !== "discover";
  const textClass = isSolid ? "text-pura-green-dark" : "text-pura-bg";
  const underlineClass = isSolid ? "bg-pura-gold" : "bg-pura-gold-soft";

  const navLinkClass = (tab: typeof activeTab) =>
    `font-label-caps text-label-caps pb-1 transition-all border-b-2 hover:opacity-100 ${
      activeTab === tab
        ? "border-pura-gold opacity-100 font-semibold"
        : "border-transparent opacity-70 hover:border-pura-green/40 hover:text-pura-green"
    } ${textClass}`;

  const handleTab = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  const phoneHref = `tel:${t.nav.phone.replace(/[^\d+]/g, "")}`;
  const actionBorderClass = isSolid ? "border-pura-green" : "border-pura-bg/45";
  const actionTextClass = isSolid ? "text-pura-green" : "text-pura-bg";
  const actionHoverClass = isSolid ? "hover:bg-pura-green/8" : "hover:bg-pura-bg/10";
  const searchTextClass = isSolid
    ? "text-pura-green-dark placeholder:text-pura-green-dark/50"
    : "text-pura-bg placeholder:text-pura-bg/60";

  return (
    <header
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isSolid
          ? "bg-surface shadow-md py-4 border-b border-surface-container-high"
          : "bg-transparent py-6"
      }`}
    >
      <div className="relative flex justify-between items-center px-4 md:px-margin-desktop py-unit max-w-container-max mx-auto h-16">
        <button
          onClick={() => handleTab("discover")}
          className="text-start focus:outline-none group"
        >
          <span
            id="nav-logo"
            className={`font-headline-sm text-headline-sm tracking-[0.2em] uppercase transition-colors duration-500 block ${textClass}`}
          >
            {t.nav.logo}
          </span>
          <span
            className={`block h-[1px] w-0 group-hover:w-full transition-all duration-300 ${underlineClass}`}
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleTab("discover")} className={navLinkClass("discover")}>
            {t.nav.discover}
          </button>
          <button onClick={() => handleTab("planner")} className={navLinkClass("planner")}>
            {t.nav.planner}
          </button>
          <button
            onClick={() => handleTab("inquiries")}
            className={`${navLinkClass("inquiries")} relative`}
          >
            {t.nav.inquiries}
            {inquiriesCount > 0 && (
              <span className="absolute -top-1.5 -end-3.5 bg-pura-gold text-pura-green-dark text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {inquiriesCount}
              </span>
            )}
          </button>
          <button onClick={() => handleTab("chat")} className={navLinkClass("chat")}>
            {t.nav.chat}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <label
            className={[
              "hidden md:flex h-7 w-14 lg:w-20 items-center gap-1 rounded-full border bg-transparent px-2 transition-colors",
              actionBorderClass,
              actionHoverClass,
            ].join(" ")}
          >
            <Search className={["h-3 w-3 shrink-0 opacity-80", actionTextClass].join(" ")} aria-hidden="true" />
            <input
              type="search"
              placeholder={t.nav.searchPlaceholder}
              aria-label={t.nav.searchPlaceholder}
              className={[
                "min-w-0 flex-1 bg-transparent border-0 outline-none",
                "font-label-caps text-[9px] tracking-[0.1em] uppercase",
                searchTextClass,
              ].join(" ")}
            />
          </label>

          <LanguageToggle />

          <a
            href={phoneHref}
            className={[
              "hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border bg-transparent transition-all",
              actionBorderClass,
              actionTextClass,
              actionHoverClass,
            ].join(" ")}
            aria-label={t.nav.phoneAria}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`md:hidden p-2 rounded transition-colors cursor-pointer ${textClass}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-surface-container-high bg-surface shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1 max-w-container-max mx-auto">
            <button onClick={() => handleTab("discover")} className={`${navLinkClass("discover")} text-start py-3`}>
              {t.nav.discover}
            </button>
            <button onClick={() => handleTab("planner")} className={`${navLinkClass("planner")} text-start py-3`}>
              {t.nav.planner}
            </button>
            <button onClick={() => handleTab("inquiries")} className={`${navLinkClass("inquiries")} text-start py-3 relative`}>
              {t.nav.inquiries}
              {inquiriesCount > 0 && (
                <span className="ms-2 bg-pura-gold text-pura-green-dark text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                  {inquiriesCount}
                </span>
              )}
            </button>
            <button onClick={() => handleTab("chat")} className={`${navLinkClass("chat")} text-start py-3`}>
              {t.nav.chat}
            </button>
            <div className="pt-3 mt-2 border-t border-surface-container-high flex flex-col gap-3">
              <label className="flex h-8 w-1/2 max-w-[5rem] items-center gap-1.5 rounded-full border border-pura-green bg-transparent px-2.5">
                <Search className="h-3 w-3 shrink-0 text-pura-green opacity-80" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.nav.searchPlaceholder}
                  aria-label={t.nav.searchPlaceholder}
                  className="min-w-0 flex-1 bg-transparent border-0 outline-none font-label-caps text-[9px] tracking-[0.1em] uppercase text-pura-green-dark placeholder:text-pura-green-dark/50"
                />
              </label>
              <div className="flex items-center justify-between gap-3">
                <LanguageToggle />
                <a
                  href={phoneHref}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-pura-green bg-transparent text-pura-green transition-colors hover:bg-pura-green/8"
                  aria-label={t.nav.phoneAria}
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
