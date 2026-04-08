import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/rate`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaRoutes: MetadataRoute.Sitemap = cities.flatMap((city) =>
    city.areas.map((area) => ({
      url: `${base}/${city.slug}/${area.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...cityRoutes, ...areaRoutes];
}
