import { NextRequest, NextResponse } from "next/server";

/** Strip Next.js RSC headers so crawlers always get raw XML/text for these paths. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/sitemap.xml" && pathname !== "/robots.txt") {
    return NextResponse.next();
  }

  const headers = new Headers(request.headers);
  headers.delete("rsc");
  headers.delete("RSC");
  headers.delete("next-router-state-tree");
  headers.delete("Next-Router-State-Tree");
  headers.delete("next-router-prefetch");
  headers.delete("Next-Router-Prefetch");
  headers.delete("next-url");
  headers.delete("Next-Url");

  return NextResponse.next({
    request: { headers },
  });
}

export const config = {
  matcher: ["/sitemap.xml", "/robots.txt"],
};
