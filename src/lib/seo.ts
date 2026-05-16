export const SITE_NAME = "Ashby Education Consultancy";

export const DEFAULT_TITLE =
  "Study Abroad in UK, Canada, Australia & Europe";

export const DEFAULT_DESCRIPTION =
  "Trusted study abroad consultancy with a 98% visa success rate. Expert guidance for admissions to top universities in the UK, Canada, Australia and Europe.";

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const DEFAULT_KEYWORDS = [
  "study abroad consultancy",
  "education consultant",
  "study in UK",
  "study in Canada",
  "study in Australia",
  "study in Europe",
  "student visa assistance",
  "university admissions support",
];

export const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/$/, "");
  }

  return "";
};

export const getAbsoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return "";
  }

  return `${siteUrl}${normalizedPath}`;
};

export const getAbsoluteImageUrl = (image?: string) => {
  if (!image) {
    return "";
  }

  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  return getAbsoluteUrl(image);
};
