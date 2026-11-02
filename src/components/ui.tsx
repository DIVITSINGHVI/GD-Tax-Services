"use client";

import type { ReactNode } from "react";
import Icon from "./Icon";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { ui, waMessages, type L } from "@/lib/content";

/* ----------------------------- layout helpers ----------------------------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/* --------------------------------- buttons -------------------------------- */

type Variant = "gold" | "forest" | "whatsapp" | "outlineLight" | "outlineDark" | "ghostDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 text-center";

const variants: Record<Variant, string> = {
  gold: "bg-gold-400 text-forest-950 hover:bg-gold-300",
  forest: "bg-forest-800 text-white hover:bg-forest-700",
  whatsapp: "bg-[#25D366] text-forest-950 hover:bg-[#3ee27b]",
  outlineLight: "border border-white/45 text-white hover:bg-white/10",
  outlineDark: "border border-forest-800/35 text-forest-800 hover:bg-forest-800 hover:text-white",
  ghostDark: "text-forest-800 hover:text-gold-600",
};

const sizes = {
  sm: "min-h-11 px-4 py-2.5 text-sm",
  md: "min-h-12 px-6 py-3 text-[0.95rem]",
  lg: "min-h-[3.25rem] px-7 py-3.5 text-base",
};

export function btn(variant: Variant, size: keyof typeof sizes = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

export function CallLink({
  variant = "forest",
  size = "md",
  label,
  className = "",
}: {
  variant?: Variant;
  size?: keyof typeof sizes;
  label?: L;
  className?: string;
}) {
  const { t } = useLang();
  return (
    <a href={SITE.phoneHref} className={`${btn(variant, size)} ${className}`}>
      <Icon name="phone" className="size-[1.1em]" />
      {label ? t(label) : t(ui.callNow)}
    </a>
  );
}

/** WhatsApp link with a pre-filled message. Pass `service` to mention a specific service. */
export function WhatsAppLink({
  variant = "whatsapp",
  size = "md",
  label,
  service,
  className = "",
  children,
}: {
  variant?: Variant;
  size?: keyof typeof sizes;
  label?: L;
  service?: L;
  className?: string;
  children?: ReactNode;
}) {
  const { t, lang } = useLang();
  const message = service ? waMessages.service[lang] + service[lang] : waMessages.generic[lang];
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btn(variant, size)} ${className}`}
    >
      {children ?? (
        <>
          <Icon name="whatsapp" className="size-[1.15em]" />
          {label ? t(label) : t(ui.whatsappUs)}
        </>
      )}
    </a>
  );
}

/* -------------------------------- headings -------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow?: L;
  title: L;
  text?: L;
  align?: "center" | "left";
  light?: boolean;
}) {
  const { t } = useLang();
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow ? (
        <p
          className={`tracking-eyebrow mb-3 inline-flex items-center gap-3 text-xs font-semibold ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          <span className={`h-px w-8 ${light ? "bg-gold-400" : "bg-gold-500"}`} />
          {t(eyebrow)}
        </p>
      ) : null}
      <h2 className={`text-3xl sm:text-4xl ${light ? "text-white" : "text-forest-900"}`}>{t(title)}</h2>
      {text ? (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/75" : "text-muted"}`}>{t(text)}</p>
      ) : null}
    </div>
  );
}

export function PageBanner({ title, text }: { title: L; text: L }) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(207,169,92,0.2),transparent_60%)]" />
      <Container className="relative py-10 sm:py-20">
        <p className="tracking-eyebrow mb-4 inline-flex items-center gap-3 text-xs font-semibold text-gold-300">
          <span className="h-px w-8 bg-gold-400" />
          GD TAX SERVICES
        </p>
        <h1 className="max-w-3xl text-4xl sm:text-5xl">{t(title)}</h1>
        <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{t(text)}</p>
      </Container>
    </section>
  );
}

