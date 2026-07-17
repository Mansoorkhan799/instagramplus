import Link from "next/link";
import { FEATURES } from "@/data/features";
import { SITE } from "@/lib/site";

const EXTERNAL_LINKS = [
  {
    href: "https://help.instagram.com/1455320872971466/",
    label: "Instagram Help — Subscribe to Plus",
  },
  {
    href: "https://www.facebook.com/help/instagram/1455320872971466",
    label: "Facebook Help — Instagram Plus",
  },
  {
    href: "https://x.com/ishanagarwal24/status/2062790274305400983?lang=en",
    label: "Instagram Plus features overview (X)",
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const topFeatures = FEATURES.slice(0, 5);

  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-display text-xl">
            <span className="ig-text-gradient font-semibold">Instagram</span>{" "}
            <span className="text-white">Plus</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Guides, feature explainers, and Android APK download for Meta&apos;s
            Instagram Plus subscription experience.
          </p>
          <p className="mt-3 text-xs text-white/35">
            Not affiliated with Meta Platforms, Inc. or Instagram.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-white/55">
            <li>
              <Link href="/features" className="hover:text-white">
                All Features
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-white">
                Download APK
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Popular Features</p>
          <ul className="mt-3 space-y-2 text-sm text-white/55">
            {topFeatures.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/features/${feature.slug}`}
                  className="hover:text-white"
                >
                  {feature.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Resources</p>
          <ul className="mt-3 space-y-2 text-sm text-white/55">
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Trust & legal</p>
          <ul className="mt-3 space-y-2 text-sm text-white/55">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {SITE.domain.replace("https://", "")}
          </p>
          <p>Educational guides + Android APK distribution</p>
        </div>
      </div>
    </footer>
  );
}
