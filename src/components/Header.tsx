"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { CallLink, Container, WhatsAppLink } from "./ui";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/content";

const links = [
  { href: "/", label: ui.nav.home },
  { href: "/about", label: ui.nav.about },
  { href: "/contact", label: ui.nav.contact },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useLang();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Slim contact bar (desktop) */}
      <div className="hidden bg-forest-950 text-[0.8rem] text-white/80 md:block">
        <Container className="flex items-center justify-between py-2">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" className="size-3.5 text-gold-300" />
            {SITE.address[lang]}
          </span>
          <span className="flex items-center gap-6">
            <span className="hidden items-center gap-2 lg:inline-flex">
              <Icon name="clock" className="size-3.5 text-gold-300" />
              {t(ui.hours)}: {SITE.hours}
            </span>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white hover:text-gold-300">
              <Icon name="phone" className="size-3.5 text-gold-300" />
              {SITE.phoneDisplay}
            </a>
          </span>
        </Container>
      </div>

      <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream/95 backdrop-blur">
        <Container className="flex h-[4.5rem] items-center justify-between gap-3">
          <Link href="/" aria-label="GD TAX SERVICES – Home" onClick={() => setOpen(false)}>
            <Logo tagline={t(ui.tagline)} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-forest-100 text-forest-900"
                    : "text-forest-900/80 hover:bg-forest-50 hover:text-forest-900"
                }`}
              >
                {t(l.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <CallLink size="sm" variant="forest" label={{ en: SITE.phoneDisplay }} />
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-forest-800/20 bg-white text-forest-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(ui.closeMenu) : t(ui.menu)}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </Container>

        {/* Mobile / tablet menu */}
        {open ? (
          <div id="mobile-menu" className="border-t border-forest-900/10 bg-cream lg:hidden">
            <Container className="py-4">
              <nav className="flex flex-col" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-forest-900/10 py-3.5 text-lg font-medium ${
                      isActive(l.href) ? "text-gold-600" : "text-forest-900"
                    }`}
                  >
                    {t(l.label)}
                    <Icon name="arrow" className="size-4 opacity-60" />
                  </Link>
                ))}
              </nav>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <CallLink variant="forest" />
                <WhatsAppLink variant="whatsapp" label={ui.whatsapp} />
              </div>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
}
