# Instagram Plus Mod APK Website

Production-ready Next.js site for [instagramplusmodapk.com](https://instagramplusmodapk.com) — Instagram Plus feature guides, SEO/AEO content, and Android APK download.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Built-in SEO: metadata, sitemap, robots, JSON-LD, breadcrumbs, review snippets

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live

1. Confirm the APK CDN URL in `src/lib/site.ts` (`apkDownloadUrl`)
2. Add Google Search Console verification in `src/app/layout.tsx` (`metadata.verification.google`)
3. Point the domain DNS to your host (Vercel recommended)
4. Submit `https://instagramplusmodapk.com/sitemap.xml` in Search Console

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Pages

| Route | Purpose |
|-------|---------|
| `/` | SEO homepage |
| `/features` | Feature hub |
| `/features/[slug]` | Individual feature landing pages |
| `/download` | APK download + HowTo schema |
| `/faq` | FAQPage schema |
| `/blog` | Guides for topical authority |
| `/about`, `/privacy`, `/terms` | Trust & legal |

## Note

This site is an independent resource and is not affiliated with Meta Platforms, Inc. or Instagram.
