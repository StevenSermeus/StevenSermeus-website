import type { FrontmatterType } from "@types";
import siteData from "./data/SEO.json";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default function jsonLDGenerator({
  type,
  post,
  url,
}: {
  type: string;
  post?: FrontmatterType;
  url?: string | URL;
}) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post?.title}",
        "description": "${post?.description}",
        "image": "${post?.image?.src}",
        "author": {
          "@type": "Person",
          "name": "${post?.author}",
          "url": "/author/${slugify(post?.author ?? "")}"
        },
        "datePublished": "${post?.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "https://stevensermeus.be"
      }
    </script>`;
}

export function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("fr-Fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
