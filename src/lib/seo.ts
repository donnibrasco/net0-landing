import type { JSX } from "react";

import { articles } from "./articles";
import { guideNav, site, absoluteUrl, addressLine } from "./site";

type JsonLd = Record<string, unknown>;

type Head = {
  meta: Array<JSX.IntrinsicElements["meta"]>;
  links: Array<JSX.IntrinsicElements["link"]>;
};

type PageHeadInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  jsonLd?: JsonLd[];
};

export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SolarEnergyCompany"],
    name: site.name,
    alternateName: site.legalName,
    url: absoluteUrl("/"),
    telephone: site.phoneSchema,
    email: site.email,
    image: absoluteUrl(site.ogImagePath),
    description: "net0 designs and installs residential solar for homes in Calgary, Alberta.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: {
      "@type": "City",
      name: "Calgary",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

export function faqJsonLd(faqs: ReadonlyArray<{ question: string; answer: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  publishedOn: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedOn,
    author: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    image: absoluteUrl(site.ogImagePath),
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
  };
}

export function pageHead({
  title,
  description,
  path,
  ogType = "website",
  jsonLd = [],
}: PageHeadInput): Head {
  const url = absoluteUrl(path);
  const image = absoluteUrl(site.ogImagePath);
  // TanStack Start renders `title` and `script:ld+json` meta entries at runtime.
  // The React meta element type does not list those keys, so the object is asserted.
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "net0 technician with a solar panel" },
      { property: "og:locale", content: site.locale },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      ...jsonLd.map((data) => ({ "script:ld+json": data })),
    ],
    links: [{ rel: "canonical", href: url }],
  } as Head;
}

export function indexablePaths(): string[] {
  return [
    "/",
    ...guideNav.map((item) => item.to),
    "/blog",
    ...articles.map((article) => `/blog/${article.slug}`),
  ];
}

export function sitemapXml(): string {
  const urls = indexablePaths()
    .map((path) => `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(): string {
  return [
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "User-agent: Twitterbot",
    "Allow: /",
    "",
    "User-agent: facebookexternalhit",
    "Allow: /",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
  ].join("\n");
}

export const visibleAddress = addressLine();
