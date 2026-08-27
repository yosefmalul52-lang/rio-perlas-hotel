import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { pageSeo, type SeoPageKey } from "../content/seo";
import { BRAND_NAME } from "../content/brand";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function absoluteUrl(path: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  if (!path.startsWith("/")) return path;
  return `${origin}${path}`;
}

export function usePageSeo(pageKey: SeoPageKey) {
  const { language } = useLanguage();
  const seo = pageSeo[language][pageKey];

  React.useEffect(() => {
    const isHe = language === "he";
    const canonical = absoluteUrl(seo.path);
    const ogImage = absoluteUrl(seo.ogImage ?? "/videos/hero-poster-web.jpg");

    document.title = seo.title;
    document.documentElement.lang = isHe ? "he" : "en";
    document.documentElement.dir = isHe ? "rtl" : "ltr";

    upsertMeta("name", "description", seo.description);
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", BRAND_NAME);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", isHe ? "he_IL" : "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [language, pageKey, seo]);
}
