import { Link } from "react-router-dom";
import { SoftScale } from "../motion/PremiumReveal";

type PageCtaProps = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonTo?: string;
  onButtonClick?: () => void;
};

export default function PageCta({ title, body, buttonLabel, buttonTo = "/contact", onButtonClick }: PageCtaProps) {
  return (
    <section className="pura-dining__cta pura-dining__cta--outline-btn" aria-labelledby="page-cta-title">
      <div className="pura-dining__cta-texture" aria-hidden />
      <div className="pura-dining__shell pura-dining__cta-inner">
        <SoftScale>
          <h2 id="page-cta-title" className="pura-dining__cta-title">
            {title}
          </h2>
          <p className="pura-dining__cta-body">{body}</p>
          <div className="pura-dining__cta-actions">
            {onButtonClick ? (
              <button type="button" onClick={onButtonClick} className="pura-dining__btn-solid">
                {buttonLabel}
              </button>
            ) : (
              <Link to={buttonTo} className="pura-dining__btn-solid">
                {buttonLabel}
              </Link>
            )}
          </div>
        </SoftScale>
      </div>
    </section>
  );
}
