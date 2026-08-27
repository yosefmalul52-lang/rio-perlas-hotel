import OptimizedImage from "../OptimizedImage";

type EditorialCollageImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function GoldBotanicalAccent() {
  return (
    <svg
      viewBox="0 0 120 88"
      aria-hidden="true"
      className="editorial-collage__branch pointer-events-none"
    >
      <path
        d="M8 78 C28 58 42 34 62 28 C78 23 92 14 108 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M62 28 C58 42 54 56 48 70 M62 28 C72 38 82 50 90 64 M62 28 C50 22 36 18 22 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse cx="108" cy="8" rx="2.2" ry="3.2" fill="currentColor" opacity="0.55" />
      <ellipse cx="90" cy="64" rx="2" ry="2.8" fill="currentColor" opacity="0.45" />
      <ellipse cx="22" cy="20" rx="1.8" ry="2.6" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export default function EditorialCollageImage({ src, alt, className = "" }: EditorialCollageImageProps) {
  return (
    <div className={["editorial-collage group", className].filter(Boolean).join(" ")}>
      <div className="editorial-collage__teal" aria-hidden="true" />
      <div className="editorial-collage__paper" aria-hidden="true" />

      <div className="editorial-collage__frame">
        <div className="editorial-collage__photo-wrap">
          <OptimizedImage
            src={src}
            alt={alt}
            className="editorial-collage__photo"
            decoding="async"
          />
        </div>
        <GoldBotanicalAccent />
      </div>
    </div>
  );
}
