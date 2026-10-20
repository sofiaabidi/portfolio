import type { MetadataRoute } from "next";
import { siteUrl, projects, posts } from "@/lib/portfolio-data";

// Dynamic sitemap — auto-includes all views + every project case study.
// Google Search Console will pick this up at /sitemap.xml automatically.
//
// Note on URL encoding: per the sitemap protocol (sitemaps.org), ampersands
// in URLs MUST be escaped as &amp; in the XML. Next.js' MetadataRoute.Sitemap
// type doesn't auto-escape query string separators, so we build URLs with
// encoded ampersands here. Google reads them correctly as literal &.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const views = [
    { path: "", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/?view=about", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/?view=projects", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/?view=writing", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/?view=experience", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/?view=contact", priority: 0.6, changeFreq: "monthly" as const },
  ];

  // Use &amp; in URLs so the sitemap XML is valid.
  // (Google reads &amp; as a literal & when parsing.)
  const projectEntries = projects.map((p) => ({
    url: `${siteUrl}/?view=project&amp;id=${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const articleEntries = posts.map((p) => ({
    url: `${siteUrl}/?view=article&amp;id=${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...views.map((v) => ({
      url: `${siteUrl}${v.path}`,
      lastModified: now,
      changeFrequency: v.changeFreq,
      priority: v.priority,
    })),
    ...projectEntries,
    ...articleEntries,
  ];
}
