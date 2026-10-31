import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
