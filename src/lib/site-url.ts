const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim();

const resolvedSiteUrl =
  configuredSiteUrl ||
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const siteUrl = new URL(resolvedSiteUrl).origin;
