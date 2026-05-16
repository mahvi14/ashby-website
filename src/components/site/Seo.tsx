import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  getAbsoluteImageUrl,
  getAbsoluteUrl,
} from "@/lib/seo";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  keywords?: string[];
  structuredData?: StructuredData;
};

const ensureMetaTag = (
  selector: string,
  attribute: "name" | "property",
  value: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  return element;
};

const ensureLinkTag = (selector: string, rel: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  return element;
};

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  keywords = DEFAULT_KEYWORDS,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = getAbsoluteUrl(path);
    const imageUrl = getAbsoluteImageUrl(image);
    const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', "name", "description").content =
      description;
    ensureMetaTag('meta[name="author"]', "name", "author").content = SITE_NAME;
    ensureMetaTag('meta[name="keywords"]', "name", "keywords").content =
      keywords.join(", ");
    ensureMetaTag('meta[name="robots"]', "name", "robots").content =
      robotsContent;

    ensureMetaTag('meta[property="og:title"]', "property", "og:title").content =
      fullTitle;
    ensureMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
    ).content = description;
    ensureMetaTag('meta[property="og:type"]', "property", "og:type").content =
      type;
    ensureMetaTag(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
    ).content = SITE_NAME;

    if (canonicalUrl) {
      ensureLinkTag('link[rel="canonical"]', "canonical").href = canonicalUrl;
      ensureMetaTag('meta[property="og:url"]', "property", "og:url").content =
        canonicalUrl;
    }

    if (imageUrl) {
      ensureMetaTag(
        'meta[property="og:image"]',
        "property",
        "og:image",
      ).content = imageUrl;
      ensureMetaTag(
        'meta[name="twitter:image"]',
        "name",
        "twitter:image",
      ).content = imageUrl;
    }

    ensureMetaTag('meta[name="twitter:card"]', "name", "twitter:card").content =
      "summary_large_image";
    ensureMetaTag('meta[name="twitter:title"]', "name", "twitter:title").content =
      fullTitle;
    ensureMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
    ).content = description;

    document.head
      .querySelectorAll('script[data-seo-structured-data="true"]')
      .forEach((element) => element.remove());

    if (structuredData) {
      const payload = Array.isArray(structuredData)
        ? structuredData
        : [structuredData];

      payload.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.seoStructuredData = "true";
        script.text = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }
  }, [description, image, keywords, noIndex, path, structuredData, title, type]);

  return null;
};

export default Seo;
