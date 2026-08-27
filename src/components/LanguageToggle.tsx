import { useLanguage } from "../context/LanguageContext";

type LanguageToggleProps = {
  className?: string;
  variant?: "overlay" | "solid";
};

function FlagUs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 1.08h20M0 2.92h20M0 4.75h20M0 6.58h20M0 8.42h20M0 10.25h20M0 12.08h20"
        stroke="#fff"
        strokeWidth="1.08"
      />
      <rect width="8" height="7.58" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="1.4" cy="1.2" r="0.45" />
        <circle cx="3.2" cy="1.2" r="0.45" />
        <circle cx="5" cy="1.2" r="0.45" />
        <circle cx="6.8" cy="1.2" r="0.45" />
        <circle cx="2.3" cy="2.35" r="0.45" />
        <circle cx="4.1" cy="2.35" r="0.45" />
        <circle cx="5.9" cy="2.35" r="0.45" />
        <circle cx="1.4" cy="3.5" r="0.45" />
        <circle cx="3.2" cy="3.5" r="0.45" />
        <circle cx="5" cy="3.5" r="0.45" />
        <circle cx="6.8" cy="3.5" r="0.45" />
        <circle cx="2.3" cy="4.65" r="0.45" />
        <circle cx="4.1" cy="4.65" r="0.45" />
        <circle cx="5.9" cy="4.65" r="0.45" />
        <circle cx="1.4" cy="5.8" r="0.45" />
        <circle cx="3.2" cy="5.8" r="0.45" />
        <circle cx="5" cy="5.8" r="0.45" />
        <circle cx="6.8" cy="5.8" r="0.45" />
      </g>
    </svg>
  );
}

function FlagIl({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" fill="#fff" />
      <rect y="1.6" width="20" height="2.1" fill="#0038B8" />
      <rect y="10.3" width="20" height="2.1" fill="#0038B8" />
      <path
        fill="none"
        stroke="#0038B8"
        strokeWidth="0.55"
        d="M10 4.2l1.05 2.25 2.45.2-1.85 1.6.55 2.4-2.2-1.35-2.2 1.35.55-2.4-1.85-1.6 2.45-.2z"
      />
    </svg>
  );
}

const flagClass = "h-2.5 w-3.5 rounded-[1px] ring-1 ring-black/5";

export default function LanguageToggle({ className = "", variant = "solid" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const isEn = language === "en";
  const isOverlay = variant === "overlay";

  const shellClass = isOverlay
    ? "border-pura-bg/45 bg-transparent"
    : "border-pura-green bg-transparent";

  const sliderClass = isOverlay ? "bg-pura-bg/10" : "bg-pura-green/10";

  const focusRingClass = isOverlay
    ? "focus-visible:ring-pura-bg/35"
    : "focus-visible:ring-pura-green/35";

  const segmentClass = (active: boolean) =>
    [
      "relative z-10 flex flex-1 items-center justify-center rounded-full",
      "transition-opacity duration-200 ease-out cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
      focusRingClass,
      active ? "pointer-events-none" : "opacity-90 hover:opacity-100",
    ].join(" ");

  return (
    <div
      role="group"
      aria-label="Select language"
      dir="ltr"
      className={["relative inline-flex shrink-0", className].join(" ")}
    >
      <div
        className={["relative grid h-6 w-[68px] grid-cols-2 rounded-full border p-0.5", shellClass].join(" ")}
      >
        <span
          aria-hidden
          className={["pointer-events-none absolute top-0.5 bottom-0.5 rounded-full transition-transform duration-300 ease-out", sliderClass].join(" ")}
          style={{
            width: "calc(50% - 2px)",
            left: "2px",
            transform: isEn ? "translateX(0)" : "translateX(100%)",
          }}
        />

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={segmentClass(isEn)}
          aria-pressed={isEn}
          aria-label="English"
        >
          {!isEn ? <FlagUs className={flagClass} /> : null}
        </button>

        <button
          type="button"
          onClick={() => setLanguage("he")}
          className={segmentClass(!isEn)}
          aria-pressed={!isEn}
          aria-label="Hebrew"
        >
          {isEn ? <FlagIl className={flagClass} /> : null}
        </button>
      </div>
    </div>
  );
}
