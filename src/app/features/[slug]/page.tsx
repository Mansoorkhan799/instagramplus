import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadButton } from "@/components/DownloadButton";
import { JsonLd } from "@/components/JsonLd";
import { FEATURES, getFeatureBySlug } from "@/data/features";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return FEATURES.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return {
    title: `${feature.title} | Instagram Plus Feature`,
    description: feature.description,
    keywords: feature.keywords,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: {
      title: `${feature.shortTitle} — Instagram Plus`,
      description: feature.summary,
      url: `${SITE.url}/features/${feature.slug}`,
      images: [
        {
          url: feature.image,
          alt: feature.imageAlt,
        },
      ],
    },
  };
}

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const related = FEATURES.filter(
    (f) => f.category === feature.category && f.slug !== feature.slug,
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: feature.shortTitle, path: `/features/${feature.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: feature.title,
            description: feature.description,
            url: `${SITE.url}/features/${feature.slug}`,
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: `${SITE.url}${feature.image}`,
              name: feature.imageAlt,
            },
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
            about: {
              "@type": "Thing",
              name: feature.shortTitle,
              description: feature.summary,
            },
          },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Features", href: "/features" },
            { name: feature.shortTitle },
          ]}
        />
        <p className="section-kicker capitalize">{feature.category}</p>
        <h1 className="mt-2 font-display text-4xl text-white">{feature.title}</h1>

        <figure className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1014]">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            title={feature.title}
            width={800}
            height={1000}
            priority
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">{feature.imageAlt}</figcaption>
        </figure>

        <p className="mt-6 text-lg leading-relaxed text-white/70">
          {feature.description}
        </p>

        <h2 className="mt-10 font-display text-2xl text-white">
          Why {feature.shortTitle} matters
        </h2>
        <ul className="mt-4 space-y-3">
          {feature.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/70"
            >
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="font-display text-xl text-white">
            Try {feature.shortTitle} on Android
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Download the Instagram Plus Mod APK to explore this feature and the
            full Plus toolkit.
          </p>
          <DownloadButton className="btn-primary mt-5">
            Download Instagram Plus APK
          </DownloadButton>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-white">Related features</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/features/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="200px"
                      className="object-cover object-top transition group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="p-3 text-sm font-medium text-[#4fc3f7]">
                    {item.shortTitle}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
