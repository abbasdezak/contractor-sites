import type { MetadataRoute } from "next";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/services/",
  "/projects/",
  "/reviews/",
  "/about/",
  "/service-areas/",
  "/contact/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const paths = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}/`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
