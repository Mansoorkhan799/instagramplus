import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { FEATURES } from "@/data/features";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-17");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/features`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/download`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const featureRoutes: MetadataRoute.Sitemap = FEATURES.map((feature) => ({
    url: `${SITE.url}/features/${feature.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes];
}
