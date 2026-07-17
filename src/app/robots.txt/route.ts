import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

const ROBOTS = `User-agent: *
Allow: /

Sitemap: https://instagramplusmodapk.com/sitemap.xml
`;

export function GET() {
  return new NextResponse(ROBOTS, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
