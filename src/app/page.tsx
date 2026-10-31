import type { Metadata } from "next";
import {
  Faqs,
  Hero,
  HowItWorks,
  Intro,
  LocationSection,
  MostRequested,
  ServicesGrid,
} from "@/components/HomeSections";
import { CtaBand } from "@/components/ui";
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
      <Intro />
      <ServicesGrid />
      <MostRequested />
      <HowItWorks />
      <Faqs />
      <LocationSection />
      <CtaBand />
    </>
  );
}
