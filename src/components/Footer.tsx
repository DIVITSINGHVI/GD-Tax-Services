"use client";

import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { Container } from "./ui";
import { useLang } from "@/lib/i18n";
import { MAP_LINK_URL, SITE, whatsappLink } from "@/lib/site";
import { ui, waMessages } from "@/lib/content";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white/75">
      <div className="h-px bg-gold-400/45" />
      <Container className="grid gap-9 py-10 md:grid-cols-3 md:py-12">
        <div>
          <Logo light tagline={t(ui.tagline)} />
          <p className="mt-4 max-w-xs text-sm">{t(ui.servingAreas)}.</p>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">{t(ui.quickLinks)}</h2>
          <nav className="mt-3 flex flex-col text-sm" aria-label="Footer">
            <Link href="/" className="w-fit py-1.5 hover:text-gold-300">{t(ui.nav.home)}</Link>
            <Link href="/#services" className="w-fit py-1.5 hover:text-gold-300">{t(ui.nav.services)}</Link>
            <Link href="/about" className="w-fit py-1.5 hover:text-gold-300">{t(ui.nav.about)}</Link>
            <Link href="/contact" className="w-fit py-1.5 hover:text-gold-300">{t(ui.nav.contact)}</Link>
          </nav>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">{t(ui.contactUs)}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a href={SITE.phoneHref} className="hover:text-gold-300">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="whatsapp" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a
                href={whatsappLink(waMessages.generic[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300"
              >
                {t(ui.whatsappUs)}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold-300">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <span>{SITE.hours}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                {SITE.address[lang]}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 pb-[calc(5.5rem_+_env(safe-area-inset-bottom))] pt-4 text-xs text-white/50 sm:flex-row sm:justify-between md:pb-16">
          <p>© {year} GD TAX SERVICES. {t(ui.rights)}</p>
          <p>Chikkanayakanahalli · Tumakuru</p>
        </Container>
      </div>
    </footer>
  );
}
