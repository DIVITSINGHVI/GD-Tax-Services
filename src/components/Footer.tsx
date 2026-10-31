"use client";

import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { Container } from "./ui";
import { useLang } from "@/lib/i18n";
import { MAP_LINK_URL, SITE, whatsappLink } from "@/lib/site";
import { services, ui, waMessages } from "@/lib/content";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white/75">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:py-14 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
        <div>
          <Logo light tagline={t(ui.tagline)} />
          <p className="mt-5 max-w-xs text-sm">{t(ui.servingAreas)}.</p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-white">{t(ui.quickLinks)}</h3>
          <ul className="mt-3 text-sm">
            <li><Link href="/" className="inline-block py-1.5 hover:text-gold-300">{t(ui.nav.home)}</Link></li>
            <li><Link href="/services" className="inline-block py-1.5 hover:text-gold-300">{t(ui.ourServices)}</Link></li>
            <li><Link href="/about" className="inline-block py-1.5 hover:text-gold-300">{t(ui.nav.about)}</Link></li>
            <li><Link href="/contact" className="inline-block py-1.5 hover:text-gold-300">{t(ui.nav.contact)}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-white">{t(ui.nav.services)}</h3>
          <ul className="mt-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="inline-block py-1.5 hover:text-gold-300">
                  {t(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-white">{t(ui.contactUs)}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a href={SITE.phoneHref} className="inline-block py-1 hover:text-gold-300">{SITE.phoneDisplay}</a>
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
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                {SITE.address[lang]}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              {SITE.email ? (
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">{SITE.email}</a>
              ) : (
                <span className="text-white/50">{t(ui.email)}: {t(ui.toBeUpdated)}</span>
              )}
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <span className={SITE.hours ? "" : "text-white/50"}>
                {t(ui.hours)}: {SITE.hours || t(ui.toBeUpdated)}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 pb-[calc(5.5rem_+_env(safe-area-inset-bottom))] pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between md:pb-20">
          <p>
            © {year} GD TAX SERVICES. {t(ui.rights)}
          </p>
          <p>Chikkanayakanahalli · Tumakuru · Karnataka</p>
        </Container>
      </div>
    </footer>
  );
}
