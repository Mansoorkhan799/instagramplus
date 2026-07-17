import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1014",
    theme_color: "#0B1014",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
