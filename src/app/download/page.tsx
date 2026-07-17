import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadButton } from "@/components/DownloadButton";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  howToSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Instagram Plus Mod APK for Android (Free)",
  description: `Download Instagram Plus Mod APK v${SITE.apkVersion} (${SITE.apkSize}). Safe Android install steps, version details, and feature access for Story Preview, Super Hearts, and more.`,
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Instagram Plus APK — Free Android Install",
    description:
      "Get Instagram Plus Mod APK with install guide, file size, version, and safety tips.",
    url: `${SITE.url}/download`,
  },
};

const STEPS = [
  {
    title: "Open this download page",
    body: "Use the button below to fetch the package hosted on InstagramPlusModAPK.com — avoid unknown mirror sites.",
  },
  {
    title: "Allow install from your browser",
    body: "Android may ask permission to install unknown apps. Enable it only for your browser or Files app, then return.",
  },
  {
    title: "Install the APK",
    body: "Open the downloaded file, tap Install, wait for completion, then open Instagram Plus and sign in.",
  },
  {
    title: "Explore Plus features",
    body: "Look for Story Preview, Spotlight, Super Hearts, custom icons, and viewer insights in settings and story tools.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Download", path: "/download" },
          ]),
          softwareApplicationSchema(),
          howToSchema(),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Download APK" },
          ]}
        />
        <h1 className="font-display text-3xl text-white sm:text-4xl">
          Download Instagram Plus Mod APK
        </h1>
        <p className="mt-4 text-white/65">
          Free Android package for exploring Meta&apos;s Instagram Plus feature
          set. Review the file details, then follow the install steps.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-5 py-3">
            <p className="text-sm font-medium text-white">Package details</p>
          </div>
          <dl className="grid gap-4 px-5 py-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-white/40">
                Version
              </dt>
              <dd className="mt-1 text-lg text-white">v{SITE.apkVersion}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-white/40">
                Size
              </dt>
              <dd className="mt-1 text-lg text-white">{SITE.apkSize}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-white/40">
                Last updated
              </dt>
              <dd className="mt-1 text-lg text-white">{SITE.apkUpdated}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-white/40">
                Rating
              </dt>
              <dd className="mt-1 text-lg text-white">
                ★ {SITE.rating.value}/5 ({SITE.rating.count.toLocaleString()})
              </dd>
            </div>
          </dl>
          <div className="border-t border-white/10 px-5 py-5">
            <DownloadButton className="btn-primary w-full sm:w-auto">
              Download Instagram Plus APK
            </DownloadButton>
            <p className="mt-3 text-xs text-white/40">
              Direct file:{" "}
              <a
                href={SITE.apkDownloadUrl}
                className="break-all text-[#4fc3f7] hover:underline"
                rel="noopener noreferrer"
              >
                {SITE.apkDownloadUrl}
              </a>
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl text-white">How to install</h2>
        <ol className="mt-5 space-y-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0095f6] text-sm font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-medium text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/60">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-[var(--warning-border)] bg-[var(--warning-bg)] p-5 text-sm text-[var(--warning-text)]">
          <p className="font-semibold">Safety notes</p>
          <p className="mt-2 text-amber-100/80">
            Only download from this domain. Uninstall older mod builds first,
            keep Play Protect enabled, and never share your Instagram password on
            third-party forms. This site is not affiliated with Meta.
          </p>
        </div>

        <p className="mt-8 text-sm text-white/50">
          Prefer a full walkthrough?{" "}
          <Link
            href="/blog/how-to-download-instagram-plus-apk-android"
            className="link-inline"
          >
            Read the Android install guide
          </Link>
          .
        </p>
      </div>
    </>
  );
}
