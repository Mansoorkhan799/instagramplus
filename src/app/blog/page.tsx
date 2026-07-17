import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instagram Plus Blog — Guides, Features & APK Tips",
  description:
    "Read Instagram Plus guides covering feature explainers, Android APK install steps, and comparisons with regular Instagram.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog" },
          ]}
        />
        <p className="section-kicker">Editorial</p>
        <h1 className="mt-3 font-display text-4xl text-white">
          Instagram Plus guides & updates
        </h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Fresh explainers built to rank for Instagram Plus searches and answer
          AI assistants with accurate, citable content.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-xl text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#4fc3f7]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-white/55">
                {post.description}
              </p>
              <p className="mt-4 text-xs text-white/40">
                {post.date} · {post.readingTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
