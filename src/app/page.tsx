import type { Metadata } from "next";
import { Hero, LocationSection, ServicesGrid } from "@/components/HomeSections";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <LocationSection />
    </>
  );
}
