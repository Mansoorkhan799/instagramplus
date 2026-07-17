import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.domain.replace("https://", "")} — how we handle analytics, downloads, and contact data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />
      <h1 className="font-display text-4xl text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-white/40">Last updated: July 17, 2026</p>
      <div className="prose-site mt-6">
        <p>
          This Privacy Policy explains how {SITE.name} (&quot;we&quot;,
          &quot;us&quot;) handles information when you visit{" "}
          {SITE.domain.replace("https://", "")}.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect basic server logs (IP address, browser type, pages
          visited), optional contact emails you send us, and anonymized analytics
          if enabled. We do not require an account to read guides or download the
          APK.
        </p>
        <h2>How we use information</h2>
        <p>
          Information is used to operate the website, improve content, diagnose
          technical issues, and respond to support requests.
        </p>
        <h2>Cookies</h2>
        <p>
          Essential cookies may be used for site functionality. Analytics cookies,
          if added later, will be disclosed here.
        </p>
        <h2>Contact</h2>
        <p>For privacy requests, email {SITE.email}.</p>
      </div>
    </div>
  );
}
