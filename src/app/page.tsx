import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { DownloadButton } from "@/components/DownloadButton";
import { FeatureCard } from "@/components/FeatureCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ReviewCard } from "@/components/ReviewCard";
import { FEATURES, FEATURE_CATEGORIES } from "@/data/features";
import { FAQ_ITEMS } from "@/data/faq";
import { BLOG_POSTS } from "@/data/blog";
import { REVIEWS } from "@/data/reviews";
import {
  breadcrumbSchema,
  faqSchema,
  reviewSchema,
  softwareApplicationSchema,
  speakableSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instagram Plus Mod APK Download | Features, Guide & Android APK 2026",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Instagram Plus Mod APK — Unlock Meta's Newest Instagram Features",
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: "/images/17.webp",
        alt: "Instagram Plus Preview Stories feature",
      },
    ],
  },
};

export default function HomePage() {
  const highlightFeatures = FEATURES.slice(0, 8);
  const homeFaqs = FAQ_ITEMS.slice(0, 6);
  const heroFeatures = [
    FEATURES.find((f) => f.slug === "preview-stories")!,
    FEATURES.find((f) => f.slug === "super-hearts")!,
    FEATURES.find((f) => f.slug === "spotlight-story")!,
    FEATURES.find((f) => f.slug === "custom-app-icon")!,
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          softwareApplicationSchema(),
          faqSchema(homeFaqs),
          reviewSchema(REVIEWS),
          speakableSchema([".aeo-answer", ".hero-title", ".hero-lead"]),
        ]}
      />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <p className="section-kicker animate-fade-up">
              <span className="ig-gradient-ring h-1.5 w-1.5 rounded-full" />
              Meta&apos;s newest Instagram subscription
            </p>
            <h1 className="hero-title animate-fade-up-delay mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="ig-text-gradient">Instagram Plus</span>
              <span className="mt-2 block text-white">
                Features guide & APK download
              </span>
            </h1>
            <p className="hero-lead animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Unlock Story Preview, Super Hearts, Story Spotlight, viewer
              insights, and custom fonts. The complete 2026 guide to Instagram
              Plus — with a free Android APK download.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadButton>Download Instagram Plus APK</DownloadButton>
              <Link href="/features" className="btn-secondary">
                Explore all features
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
              <p>
                ★ {SITE.rating.value}/5 · {SITE.rating.count.toLocaleString()}{" "}
                reviews
              </p>
              <span aria-hidden="true">·</span>
              <p>
                v{SITE.apkVersion} · {SITE.apkSize}
              </p>
              <span aria-hidden="true">·</span>
              <p>Updated {SITE.apkUpdated}</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {heroFeatures.map((feature, i) => (
              <Link
                key={feature.slug}
                href={`/features/${feature.slug}`}
                className={`group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 ${
                  i % 2 === 1 ? "sm:translate-y-3" : ""
                }`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    title={feature.shortTitle}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    loading={i === 0 ? "eager" : undefined}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AEO */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            What is Instagram Plus?
          </h2>
          <p className="aeo-answer mt-4 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
            <strong className="text-white">Instagram Plus</strong> is Meta&apos;s
            optional monthly subscription that unlocks exclusive Instagram
            features including{" "}
            <Link href="/features/preview-stories" className="link-inline">
              Story Preview
            </Link>
            ,{" "}
            <Link href="/features/super-hearts" className="link-inline">
              Super Hearts
            </Link>
            ,{" "}
            <Link href="/features/spotlight-story" className="link-inline">
              Story Spotlight
            </Link>
            , rewatch insights, searchable viewer lists, custom bio fonts, and
            custom app icons. Regular Instagram stays free — Plus is an upgrade
            for privacy, insights, and personalization. On this site you can
            learn every feature and{" "}
            <Link href="/download" className="link-inline">
              download the Instagram Plus Mod APK for Android
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="section-kicker">Quick facts</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Instagram Plus at a glance
        </h2>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { dt: "Launched", dd: "June 2026 by Meta / Instagram" },
            { dt: "Platforms", dd: "Official app + Android APK guide here" },
            {
              dt: "Core value",
              dd: "Privacy, story tools, insights, personalization",
            },
            {
              dt: "Feature count",
              dd: `${FEATURES.length}+ exclusive Plus capabilities`,
            },
          ].map((item) => (
            <div
              key={item.dt}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {item.dt}
              </dt>
              <dd className="mt-2 text-base text-white">{item.dd}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Exclusive features</p>
            <h2 className="mt-3 font-display text-3xl text-white">
              Everything Instagram Plus unlocks
            </h2>
            <p className="mt-3 max-w-2xl text-white/55">
              From anonymous story viewing to 48-hour story expiry and custom
              icons — explore the tools Meta designed for deeper control.
            </p>
          </div>
          <Link href="/features" className="btn-secondary self-start text-sm">
            View full feature list
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {highlightFeatures.map((feature) => (
            <FeatureCard key={feature.slug} feature={feature} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="section-kicker">Feature categories</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Built around how you already use Instagram
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {FEATURE_CATEGORIES.map((category) => {
            const items = FEATURES.filter((f) => f.category === category.id);
            return (
              <article
                key={category.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-display text-xl text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-white/55">{category.description}</p>
                <ul className="mt-5 space-y-2">
                  {items.map((feature) => (
                    <li key={feature.slug}>
                      <Link
                        href={`/features/${feature.slug}`}
                        className="text-sm text-[#4fc3f7] hover:underline"
                      >
                        {feature.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Download CTA */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 sm:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Download Instagram Plus APK for Android
            </h2>
            <p className="mt-4 text-white/65">
              Get the latest Instagram Plus Mod APK (v{SITE.apkVersion},{" "}
              {SITE.apkSize}). Safe install steps, version notes, and feature
              walkthroughs are on the download page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadButton>Download APK now</DownloadButton>
              <Link
                href="/blog/how-to-download-instagram-plus-apk-android"
                className="btn-secondary"
              >
                Read install guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="section-kicker">User reviews</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Rated {SITE.rating.value}/5 by Android users
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {REVIEWS.slice(0, 4).map((review) => (
            <ReviewCard key={review.author + review.date} review={review} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="section-kicker">Guides</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Latest Instagram Plus updates & how-tos
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <time className="text-xs text-white/40" dateTime={post.date}>
                {post.date}
              </time>
              <h3 className="mt-2 font-display text-lg text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-white/55">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14 pb-20 sm:px-6">
        <p className="section-kicker">FAQ</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Instagram Plus questions people ask
        </h2>
        <div className="mt-8">
          <FaqAccordion items={homeFaqs} />
        </div>
        <p className="mt-6 text-center text-sm text-white/45">
          <Link href="/faq" className="text-[#4fc3f7] hover:underline">
            Browse the full FAQ
          </Link>
        </p>
      </section>
    </>
  );
}
