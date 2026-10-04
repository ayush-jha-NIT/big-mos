import type { Metadata } from "next";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  privatePage = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [
        { url: "/outlets/prayagraj/exterior-golden-hour.webp", alt: "Cafe Big Mo’s Prayagraj" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/outlets/prayagraj/exterior-golden-hour.webp"],
    },
    ...(privatePage ? { robots: { index: false, follow: false } } : {}),
  };
}
