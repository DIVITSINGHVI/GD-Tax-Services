import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";
import { CtaBand } from "@/components/ui";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <ServicesPage />
      <CtaBand />
    </>
  );
}
