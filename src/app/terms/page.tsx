import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.domain.replace("https://", "")} covering website use and APK downloads.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service" },
        ]}
      />
      <h1 className="font-display text-4xl text-white">Terms of Service</h1>
      <p className="mt-2 text-sm text-white/40">Last updated: July 17, 2026</p>
      <div className="prose-site mt-6">
        <p>
          By using {SITE.domain.replace("https://", "")}, you agree to these
          Terms of Service.
        </p>
        <h2>Educational & independent site</h2>
        <p>
          Content about Instagram Plus is provided for informational purposes.
          We are not affiliated with Meta Platforms, Inc. or Instagram.
        </p>
        <h2>APK downloads</h2>
        <p>
          Android packages are provided as-is. You are responsible for enabling
          unknown sources, verifying device compatibility, and complying with
          local laws.
        </p>
        <h2>Disclaimer</h2>
        <p>
          Features, pricing, and availability of official Instagram Plus may
          change. We strive for accuracy but make no warranties about
          uninterrupted access.
        </p>
        <h2>Contact</h2>
        <p>Questions about these terms: {SITE.email}.</p>
      </div>
    </div>
  );
}
