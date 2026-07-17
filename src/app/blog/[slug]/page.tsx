import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadButton } from "@/components/DownloadButton";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

const LINK_RE = /\[([^\]]+)\]\((\/[^)]+)\)/g;

function renderInline(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={`${keyPrefix}-${match.index}`}
        href={match[2]}
        className="link-inline"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function renderBlock(block: string, index: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-10 font-display text-2xl text-white">
        {block.replace("## ", "")}
      </h2>
    );
  }
  return (
    <p key={index} className="mt-4 leading-relaxed text-white/65">
      {renderInline(block, `p${index}`)}
    </p>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title },
          ]}
        />
        <header>
          <p className="section-kicker">{post.tags.join(" · ")}</p>
          <h1 className="mt-3 font-display text-4xl text-white">{post.title}</h1>
          <p className="mt-4 text-sm text-white/45">
            By {post.author} · <time dateTime={post.date}>{post.date}</time> ·
            Updated <time dateTime={post.updated}>{post.updated}</time> ·{" "}
            {post.readingTime}
          </p>
          <p className="mt-6 text-lg text-white/70">{post.description}</p>
        </header>
        <div className="mt-2">{post.content.map(renderBlock)}</div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="font-medium text-white">Ready to try Instagram Plus?</p>
          <p className="mt-2 text-sm text-white/60">
            Download the Android APK or browse every exclusive feature.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <DownloadButton className="btn-primary text-sm">
              Download APK
            </DownloadButton>
            <Link href="/features" className="btn-secondary text-sm">
              Feature list
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-white">Related guides</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/20"
                  >
                    <span className="font-medium text-[#4fc3f7]">{item.title}</span>
                    <span className="mt-1 block text-sm text-white/50">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav
          aria-label="Post navigation"
          className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2"
        >
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:border-white/20"
            >
              <span className="block text-xs text-white/40">Previous</span>
              <span className="mt-1 font-medium text-white">{prevPost.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-right text-sm transition hover:border-white/20 sm:justify-self-end"
            >
              <span className="block text-xs text-white/40">Next</span>
              <span className="mt-1 font-medium text-white">{nextPost.title}</span>
            </Link>
          )}
        </nav>
      </article>
    </>
  );
}
