import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const PATHS = [
  "/",
  "/how-it-works",
  "/pricing-tiers",
  "/auction-results",
  "/more-auction-results",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  return PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
