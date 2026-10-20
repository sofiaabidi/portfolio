import { posts, projects } from "@/lib/portfolio-data";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

type SitemapEntry = {
  url: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/?view=about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/?view=projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/?view=writing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/?view=experience`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/?view=contact`, changeFrequency: "monthly", priority: 0.6 },
    ...projects.map((project) => ({
      url: `${siteUrl}/?view=project&id=${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/?view=article&id=${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const urls = entries
    .map(
      (entry) => `<url>
  <loc>${escapeXml(entry.url)}</loc>
  <lastmod>${lastModified}</lastmod>
  <changefreq>${entry.changeFrequency}</changefreq>
  <priority>${entry.priority}</priority>
</url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
