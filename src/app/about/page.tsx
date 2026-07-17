import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Instagram Plus Mod APK",
  description:
    "Learn about InstagramPlusModAPK.com — our mission to explain Meta's Instagram Plus features and provide a trusted Android APK download.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <h1 className="font-display text-4xl text-white">About {SITE.name}</h1>
        <div className="prose-site mt-6">
          <p>
            InstagramPlusModAPK.com is an independent resource dedicated to
            Meta&apos;s Instagram Plus subscription. We publish accurate feature
            explainers, install guides, and an Android APK download path so users
            can understand — and try — the newest Instagram premium tools.
          </p>
          <p>
            When Meta announced Instagram Plus in June 2026, searches spiked for
            Story Preview, Super Hearts, Story Spotlight, and Instagram Plus APK.
            Our pages are written to answer those queries clearly for Google, AI
            Overviews, and chat-based assistants.
          </p>
          <p>
            We are <strong className="text-white">not affiliated</strong> with
            Meta Platforms, Inc., Instagram, or Facebook. Trademarks belong to
            their respective owners.
          </p>
          <p>
            Questions? Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or start with our{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
