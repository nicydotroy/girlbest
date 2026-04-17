import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = "2026-04-17T00:00:00.000Z";

  const bannerImages = Array.from({ length: 46 }, (_, i) => ({
    url: `${base}/images/banner/${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  const galleryImageEntries = Array.from({ length: 6 }, (_, i) => ({
    url: `${base}/images/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  const sliderImageEntries = Array.from({ length: 3 }, (_, i) => ({
    url: `${base}/images/slider/${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [...sliderImageEntries.map((img) => img.url), ...galleryImageEntries.map((img) => img.url)],
    },
    {
      url: `${base}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: bannerImages.map((img) => img.url),
    },
    {
      url: `${base}/rate`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
    images: bannerImages.slice(0, 10).map((img) => img.url),
  }));

  const areaRoutes: MetadataRoute.Sitemap = cities.flatMap((city) =>
    city.areas.map((area) => ({
      url: `${base}/${city.slug}/${area.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: bannerImages.slice(0, 6).map((img) => img.url),
    }))
  );

  return [...staticRoutes, ...cityRoutes, ...areaRoutes];
}
