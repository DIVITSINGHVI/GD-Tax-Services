import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { SITE } from "@/lib/site";
import { seo, services } from "@/lib/content";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: seo.home.title,
    template: "%s | GD TAX SERVICES",
  },
  description: seo.home.description,
  applicationName: "GD TAX SERVICES",
  keywords: [
    "GD TAX SERVICES",
    "tax services Chikkanayakanahalli",
    "tax services C N Halli",
    "tax filing Tumakuru",
    "GST registration Tumakuru",
    "ITR filing Chikkanayakanahalli",
    "PF services Tumakuru",
    "passport application Tumakuru",
    "insurance Tumakuru",
    "Udyam registration Tumakuru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GD TAX SERVICES",
    locale: "en_IN",
    title: seo.home.title,
    description: seo.home.description,
  },
  twitter: { card: "summary", title: seo.home.title, description: seo.home.description },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0f3023",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  telephone: "+917975171155",
  email: SITE.email,
  description: seo.home.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tumakuru",
    addressRegion: "Karnataka",
    postalCode: "572214",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Chikkanayakanahalli" },
    { "@type": "AdministrativeArea", name: "Tumakuru District" },
  ],
  availableLanguage: "English",
  sameAs: [SITE.whatsappBase],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title.en, description: s.short.en },
    })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
