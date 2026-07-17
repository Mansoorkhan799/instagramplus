import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeatureCard } from "@/components/FeatureCard";
import { JsonLd } from "@/components/JsonLd";
import { FEATURES, FEATURE_CATEGORIES } from "@/data/features";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instagram Plus Features List — Story Preview, Super Hearts & More",
  description:
    "Complete Instagram Plus features list for 2026: Story Preview, Message Preview, Super Hearts, Story Spotlight, viewer insights, custom fonts, app icons, and more.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "All Instagram Plus Features Explained",
    description:
      "Browse every Instagram Plus exclusive feature with guides for privacy, stories, insights, and personalization.",
    url: "https://instagramplusmodapk.com/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Features" },
          ]}
        />
        <p className="section-kicker">Feature hub</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          Instagram Plus features explained
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/60">
          Meta launched Instagram Plus with exclusive tools for quieter viewing,
          stronger story reach, clearer insights, and personal expression. Pick
          a feature below for a full guide — or{" "}
          <Link href="/download" className="link-inline">
            download the Instagram Plus APK
          </Link>
          .
        </p>

        {FEATURE_CATEGORIES.map((category) => (
          <section key={category.id} className="mt-14">
            <h2 className="font-display text-2xl text-white">{category.title}</h2>
            <p className="mt-2 max-w-2xl text-white/55">{category.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {FEATURES.filter((f) => f.category === category.id).map(
                (feature) => (
                  <FeatureCard key={feature.slug} feature={feature} />
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
