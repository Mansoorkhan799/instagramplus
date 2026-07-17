import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROBOTS_TXT, SITEMAP_XML } from "@/lib/seo-files";

/**
 * Serve sitemap/robots as raw responses in middleware so Next.js RSC
 * requests never turn them into HTML 404 flight payloads.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/sitemap.xml") {
    return new NextResponse(SITEMAP_XML, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  if (pathname === "/robots.txt") {
    return new NextResponse(ROBOTS_TXT, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sitemap.xml", "/robots.txt"],
};
