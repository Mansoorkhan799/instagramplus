"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DownloadButton } from "@/components/DownloadButton";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#0b1014]/55 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={closeMenu}
        >
          <span className="ig-gradient-ring flex h-8 w-8 items-center justify-center rounded-xl sm:h-9 sm:w-9">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0b1014] text-sm font-bold text-white sm:h-7 sm:w-7">
              +
            </span>
          </span>
          <span className="font-display whitespace-nowrap text-base tracking-tight sm:text-lg">
            <span className="ig-text-gradient font-semibold">Instagram</span>{" "}
            <span className="text-white">Plus</span>
          </span>
        </Link>

        {/* Desktop nav — lg+ only so tablet doesn't crush links */}
        <nav
          className="hidden min-w-0 items-center lg:flex lg:gap-0.5 xl:gap-1"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm transition-colors xl:px-3 xl:py-2 ${
                  active
                    ? "bg-white/10 font-medium text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <DownloadButton className="btn-primary ml-2 whitespace-nowrap !px-4 !py-2 text-sm">
            Get APK
          </DownloadButton>
        </nav>

        {/* Tablet + mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[#0b1014]/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-3 transition-colors ${
                    active
                      ? "bg-white/10 font-medium text-white"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <DownloadButton
              className="btn-primary mt-3 whitespace-nowrap text-center"
              onClick={closeMenu}
            >
              Download {SITE.shortName} APK
            </DownloadButton>
          </nav>
        </div>
      )}
    </header>
  );
}
