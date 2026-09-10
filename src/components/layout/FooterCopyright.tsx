import { COMPANY_URL } from "../../content/brand";
import { useLanguage } from "../../context/LanguageContext";

type FooterCopyrightProps = {
  className?: string;
  linkClassName?: string;
};

export default function FooterCopyright({ className, linkClassName }: FooterCopyrightProps) {
  const { t } = useLanguage();
  const { prefix, company } = t.footer.copyright;

  return (
    <p className={className}>
      {prefix}
      <a
        href={COMPANY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName ?? "pura-footer__company-link"}
      >
        {company}
      </a>
      .
    </p>
  );
}
