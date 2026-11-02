"use client";

import Link from "next/link";
import ContactInfo from "./ContactInfo";
import Icon from "./Icon";
import { CallLink, Container, SectionHeading, WhatsAppLink, btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { hero, location, services, servicesSection, ui } from "@/lib/content";

/** Simple, text-first hero with only the primary actions. */
export function Hero() {
  const { t } = useLang();
  return (
    <section className="bg-forest-900 text-white">
      <Container className="py-14 text-center sm:py-20 lg:py-24">
        <p className="tracking-eyebrow mx-auto mb-4 flex w-fit items-center gap-3 text-xs font-semibold text-gold-300">
          <span className="h-px w-8 bg-gold-400" />
          {t(hero.eyebrow)}
          <span className="h-px w-8 bg-gold-400" />
        </p>
        <h1 className="mx-auto max-w-4xl text-[2.15rem] sm:text-5xl lg:text-[3.4rem]">{t(hero.title)}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/78 sm:text-lg">{t(hero.text)}</p>

        <div className="mx-auto mt-6 flex max-w-2xl flex-col justify-center gap-2 sm:flex-row">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-gold-400/35 bg-white/8 px-4 py-3 text-sm font-semibold sm:flex-1">
            <Icon name="file" className="size-5 shrink-0 text-gold-300" />
            GST Registration
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-gold-400/35 bg-white/8 px-4 py-3 text-sm font-semibold sm:flex-1">
            <Icon name="calculator" className="size-5 shrink-0 text-gold-300" />
            Income Tax Return (ITR) Filing
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href="#services" className={btn("gold", "lg")}>
            {t(ui.nav.services)}
            <Icon name="arrow" className="size-4" />
          </Link>
          <CallLink variant="outlineLight" size="lg" />
          <WhatsAppLink variant="whatsapp" size="lg" />
        </div>
      </Container>
    </section>
  );
}

/** Every service and its common requests are visible directly on Home. */
export function ServicesGrid() {
  const { t } = useLang();
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-12 sm:py-20">
      <Container>
        <SectionHeading eyebrow={servicesSection.eyebrow} title={servicesSection.title} text={servicesSection.text} />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-2xl border border-forest-900/10 bg-white p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <div>
                  <h2 className="text-2xl text-forest-900">{t(service.title)}</h2>
                  <p className="mt-1.5 text-[0.95rem] text-muted">{t(service.short)}</p>
                </div>
              </div>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item.en} className="flex gap-2.5 text-sm text-forest-900">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 border-t border-forest-900/10 pt-5 sm:flex-row">
                <WhatsAppLink
                  variant="whatsapp"
                  size="sm"
                  service={service.title}
                  label={ui.enquireWhatsApp}
                  className="sm:flex-1"
                />
                <Link href="/contact" className={`${btn("outlineDark", "sm")} sm:flex-1`}>
                  {t(ui.nav.contact)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Compact business details and direct contact actions. */
export function LocationSection() {
  const { t } = useLang();
  return (
    <section className="bg-white py-12 sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading align="left" eyebrow={location.eyebrow} title={location.title} text={location.text} />
          <div className="rounded-2xl border border-forest-900/10 bg-paper p-5 sm:p-7">
            <ContactInfo />
            <div className="mt-7 flex flex-col gap-3 border-t border-forest-900/10 pt-6 sm:flex-row">
              <CallLink variant="forest" className="sm:flex-1" />
              <WhatsAppLink variant="whatsapp" className="sm:flex-1" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
