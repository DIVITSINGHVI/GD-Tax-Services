import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
