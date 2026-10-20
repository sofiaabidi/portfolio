import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/portfolio-data";

// robots.txt — allows all crawlers, points them to the sitemap.
// Accessible at /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
