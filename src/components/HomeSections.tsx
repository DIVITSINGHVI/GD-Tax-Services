"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import ContactInfo from "./ContactInfo";
import { ArrowLink, CallLink, Container, SectionHeading, WhatsAppLink, btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { faqs, hero, how, intro, location, popular, services, servicesSection, ui, waMessages } from "@/lib/content";
import { IMAGES } from "@/lib/images";

/* ---------------------------------- Hero ---------------------------------- */

export function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(207,169,92,0.22),transparent_55%)]" />
      <Container className="relative grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="tracking-eyebrow mb-5 inline-flex items-center gap-3 text-xs font-semibold text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            {t(hero.eyebrow)}
          </p>
          <h1 className="text-[2.15rem] sm:text-5xl lg:text-[3.4rem]">{t(hero.title)}</h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">{t(hero.text)}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/services" className={btn("gold", "lg")}>
              {t(ui.ourServices)}
              <Icon name="arrow" className="size-4" />
            </Link>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <CallLink variant="outlineLight" size="pair" label={ui.call} />
              <WhatsAppLink variant="outlineLight" size="pair" label={ui.whatsapp} />
            </div>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/85">
            {hero.points.map((p) => (
              <li key={p.en} className="inline-flex items-center gap-2">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                  <Icon name="check" className="size-3.5" />
                </span>
                {t(p)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[1.5rem] border border-gold-400/60 sm:translate-x-3 sm:translate-y-3" />
          <div className="relative overflow-hidden rounded-[1.5rem] bg-cream shadow-xl shadow-forest-950/30">
            <div className="relative aspect-[16/10] bg-forest-800 sm:aspect-[4/3] lg:aspect-[4/4.6]">
              <Image
                src={IMAGES.hero}
                alt="Desk with laptop, calculator, notebooks and green document folders"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 90vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5 text-forest-900 sm:px-5 sm:py-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-forest-900 text-gold-300">
                <Icon name="pin" className="size-5" />
              </span>
              <div className="min-w-0 leading-snug">
                <p className="tracking-eyebrow text-[0.65rem] font-semibold text-gold-600">{t(hero.visitLabel)}</p>
                <p className="text-sm font-semibold">{t(hero.visitPlace)}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- Intro --------------------------------- */

export function Intro() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-12 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl border border-gold-400/60" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={IMAGES.about}
              alt="Coconut palms and green farmland in the countryside"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow={intro.eyebrow} title={intro.title} text={intro.text} />
          <ul className="mt-8 space-y-5">
            {intro.values.map((v) => (
              <li key={v.title.en} className="flex gap-4">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-300">
                  <Icon name="check" className="size-4" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-forest-900">{t(v.title)}</h3>
                  <p className="text-muted">{t(v.text)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Link href="/about" className={btn("outlineDark")}>
              {t(ui.nav.about)}
              <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Services -------------------------------- */

export function ServicesGrid() {
  const { t } = useLang();
  return (
    <section className="bg-white py-12 sm:py-24">
      <Container>
        <SectionHeading eyebrow={servicesSection.eyebrow} title={servicesSection.title} text={servicesSection.text} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-paper shadow-sm transition-shadow hover:shadow-lg hover:shadow-forest-900/10"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6">
                <span className="relative z-10 -mt-7 mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-forest-900 text-gold-300 ring-4 ring-paper">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <h3 className="text-xl text-forest-900">{t(s.title)}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] text-muted">{t(s.short)}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <ArrowLink href={`/services#${s.slug}`}>{t(ui.learnMore)}</ArrowLink>
                  <WhatsAppLink variant="whatsapp" size="sm" service={s.title} label={ui.whatsapp} />
                </div>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center rounded-2xl bg-forest-900 p-6 text-white sm:p-7">
            <h3 className="text-2xl">{t(servicesSection.notSure)}</h3>
            <p className="mt-3 text-white/75">{t(servicesSection.notSureText)}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <CallLink variant="gold" size="sm" />
              <WhatsAppLink variant="outlineLight" size="sm" label={ui.whatsapp} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className={`${btn("forest", "lg")} w-full sm:w-auto`}>
            {t(ui.ourServices)}
            <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------- Most-requested ------------------------------ */

export function MostRequested() {
  const { t, lang } = useLang();
  return (
    <section className="bg-sand py-12 sm:py-24">
      <Container>
        <SectionHeading eyebrow={popular.eyebrow} title={popular.title} text={popular.text} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popular.items.map((item) => (
            <a
              key={item.title.en}
              href={whatsappLink(waMessages.service[lang] + item.title[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-paper p-5 transition-colors hover:border-gold-400"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                <Icon name={item.icon} className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-[1.05rem] font-semibold text-forest-900">{t(item.title)}</span>
                <span className="block text-sm text-muted">{t(item.sub)}</span>
              </span>
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-forest-950 transition-transform group-hover:scale-105">
                <Icon name="whatsapp" className="size-5" />
              </span>
              <span className="sr-only">{t(ui.enquireWhatsApp)}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ How it works ------------------------------ */

export function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-forest-900 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(207,169,92,0.16),transparent_55%)]" />
      <Container className="relative">
        <SectionHeading light eyebrow={how.eyebrow} title={how.title} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gold-400/30 lg:block" />
          {how.steps.map((step, i) => (
            <li key={step.title.en} className="relative text-center lg:px-2">
              <span className="relative mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full border border-gold-400 bg-forest-900 font-serif text-xl font-semibold text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl">{t(step.title)}</h3>
              <p className="mt-2 text-[0.95rem] text-white/70">{t(step.text)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ----------------------------------- FAQs --------------------------------- */

export function Faqs() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-12 sm:py-24">
      <Container>
        <SectionHeading eyebrow={faqs.eyebrow} title={faqs.title} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.items.map((f) => (
            <details
              key={f.q.en}
              name="faq"
              className="group rounded-xl border border-forest-900/10 bg-white open:border-gold-400/70 open:shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-serif text-[1.05rem] font-semibold text-forest-900 sm:px-6">
                {t(f.q)}
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-800 transition-transform group-open:rotate-180">
                  <Icon name="chevron" className="size-4" />
                </span>
              </summary>
              <p className="px-5 pb-5 text-muted sm:px-6">{t(f.a)}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Location -------------------------------- */

export function LocationSection() {
  return (
    <section className="bg-white py-12 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading align="left" eyebrow={location.eyebrow} title={location.title} text={location.text} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallLink variant="forest" />
            <WhatsAppLink variant="whatsapp" />
          </div>
        </div>

        <div className="rounded-3xl border border-forest-900/10 bg-paper p-5 shadow-sm sm:p-8">
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
}
