import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/menu",
    "/about",
    "/gallery",
    "/outlets",
    "/outlets/prayagraj",
    "/outlets/haldwani",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/photo-credits",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "/menu" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
