import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/data/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instagram Plus FAQ — APK, Features, Pricing & Safety",
  description:
    "Answers to the most searched Instagram Plus questions: what it is, how to download the Mod APK, which features are included, pricing, cancellation, and safety tips.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "FAQ" },
          ]}
        />
        <p className="section-kicker">Help center</p>
        <h1 className="mt-3 font-display text-4xl text-white">
          Instagram Plus FAQ
        </h1>
        <p className="mt-4 text-white/60">
          Straight answers for Google featured snippets, AI Overviews, and
          first-time downloaders.
        </p>
        <div className="mt-8">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </>
  );
}
