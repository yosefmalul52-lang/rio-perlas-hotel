import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import FaqAccordion from "../components/sections/FaqAccordion";
import PageCta from "../components/sections/PageCta";

export default function FaqPage() {
  const { t } = useLanguage();
  const copy = t.pages.faq;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <FaqAccordion items={copy.items} showCategory />
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </>
  );
}
