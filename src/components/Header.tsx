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

// Three public pages. Services live as a dedicated section on the Home page.
const pageLinks = [
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
      <div className="hidden bg-forest-950 text-[0.8rem] text-white/80 md:block">
        <Container className="flex items-center justify-between py-2">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" className="size-3.5 text-gold-300" />
            {SITE.address[lang]}
          </span>
          <span className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">
              {SITE.email}
            </a>
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
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-forest-100 text-forest-900"
                    : "text-forest-900/80 hover:bg-forest-50 hover:text-forest-900"
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#services"
              className="hidden min-h-11 items-center rounded-full bg-gold-400 px-5 text-sm font-semibold text-forest-950 hover:bg-gold-300 lg:inline-flex"
            >
              {t(ui.nav.services)}
            </Link>
            <div className="hidden xl:block">
              <CallLink size="sm" variant="forest" label={{ en: SITE.phoneDisplay }} />
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-forest-800/20 bg-white text-forest-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(ui.closeMenu) : t(ui.menu)}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </Container>

        {open ? (
          <div id="mobile-menu" className="border-t border-forest-900/10 bg-cream lg:hidden">
            <Container className="py-4">
              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="mb-2 flex min-h-12 items-center justify-between rounded-xl bg-gold-100 px-4 font-semibold text-forest-900"
              >
                {t(ui.nav.services)}
                <Icon name="arrow" className="size-4" />
              </Link>
              <nav className="flex flex-col" aria-label="Mobile">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between border-b border-forest-900/10 py-3 text-lg font-medium ${
                      isActive(link.href) ? "text-gold-600" : "text-forest-900"
                    }`}
                  >
                    {t(link.label)}
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
