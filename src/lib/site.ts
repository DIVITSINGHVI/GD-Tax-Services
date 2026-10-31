import type { Lang } from "./content";

/**
 * Central business details. Edit values here and they update across the site.
 */
export const SITE = {
  name: "GD TAX SERVICES",
  phone: "7975171155",
  phoneDisplay: "79751 71155",
  phoneHref: "tel:+917975171155",
  whatsappBase: "https://wa.me/917975171155",
  address: {
    en: "Tarabenahalli, Chikkanayakanahalli Taluk, Tumakuru, Karnataka 572214",
  },
  email: "gdtax1379@gmail.com",
  hours: "7 AM – 9 PM",
  // Placeholder domain – replace with the real website address before launch
  // (or set NEXT_PUBLIC_SITE_URL in the environment).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gdtaxservices.in",
  mapQuery: "Tarabenahalli, Chikkanayakanahalli, Tumakuru, Karnataka 572214",
} as const;

export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapQuery,
)}`;

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  return message
    ? `${SITE.whatsappBase}?text=${encodeURIComponent(message)}`
    : SITE.whatsappBase;
}

export type { Lang };
