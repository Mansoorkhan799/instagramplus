import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { FEATURES } from "@/data/features";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/features",
    "/download",
    "/faq",
    "/blog",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/download" || path === "/features" ? 0.9 : 0.7,
  }));

  const featureRoutes = FEATURES.map((feature) => ({
    url: `${SITE.url}/features/${feature.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes];
}
