import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
