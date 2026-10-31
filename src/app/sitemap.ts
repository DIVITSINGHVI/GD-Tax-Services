import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
