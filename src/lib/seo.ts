import { SITE } from "./site";

type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/images/logo.svg"),
    email: SITE.email,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/features?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Instagram Plus Mod APK",
    operatingSystem: "Android",
    applicationCategory: "SocialNetworkingApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      ratingCount: SITE.rating.count,
      bestRating: SITE.rating.best,
      worstRating: 1,
    },
    downloadUrl: SITE.apkDownloadUrl,
    softwareVersion: SITE.apkVersion,
    fileSize: SITE.apkSize,
    description: SITE.description,
    url: absoluteUrl("/download"),
    image: absoluteUrl("/images/17.webp"),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function reviewSchema(
  reviews: {
    author: string;
    rating: number;
    date: string;
    title: string;
    body: string;
  }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Instagram Plus Mod APK",
    description: SITE.description,
    brand: {
      "@type": "Brand",
      name: "Instagram Plus",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: SITE.rating.best,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.date,
      name: review.title,
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  slug: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl("/images/17.webp"),
  };
}

export function howToSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download and Install Instagram Plus APK",
    description:
      "Install Instagram Plus Mod APK on Android in a few minutes with safe sideloading steps.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the download page",
        text: "Go to InstagramPlusModAPK.com/download and tap Download Instagram Plus APK, or use the direct APK link hosted on dl.instagramplusmodapk.com.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow install permission",
        text: "When Android prompts you, allow installs from your browser or Files app.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Install the APK",
        text: "Open the downloaded Insta-Plus-APK.apk file and tap Install, then open Instagram Plus and sign in.",
      },
    ],
  };
}

export function speakableSchema(cssSelectors: string[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE.name,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: SITE.url,
  };
}
