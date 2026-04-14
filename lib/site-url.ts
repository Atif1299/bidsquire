/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Override per environment: NEXT_PUBLIC_SITE_URL (e.g. Cloud Run URL before DNS cutover).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const origin =
    raw && raw.length > 0 ? raw : "https://www.bidsquire.com";
  return origin.replace(/\/$/, "");
}
