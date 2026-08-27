import { Link } from "react-router-dom";

type SectionCtaProps = {
  to: string;
  label: string;
  className?: string;
};

export default function SectionCta({ to, label, className = "" }: SectionCtaProps) {
  return (
    <Link
      to={to}
      className={[
        "btn-premium-hover inline-flex font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1",
        "hover:text-primary hover:border-primary transition-all font-semibold uppercase",
        className,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
