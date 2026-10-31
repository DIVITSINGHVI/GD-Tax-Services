"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { Container, CallLink, PageBanner, WhatsAppLink, btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { services, servicesPage, ui } from "@/lib/content";

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <PageBanner title={servicesPage.title} text={servicesPage.text} />

      {/* Category quick-jump bar */}
      <div className="z-30 border-b border-forest-900/10 bg-cream/95 backdrop-blur md:sticky md:top-[4.5rem]">
        <Container>
          <nav
            aria-label={t(ui.nav.services)}
            className="-mx-1 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest-800/20 bg-white px-4 py-2 text-sm font-medium text-forest-900 hover:border-gold-400 hover:bg-gold-100"
              >
                <Icon name={s.icon} className="size-4 text-gold-600" />
                {t(s.title)}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`py-12 sm:py-20 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                <div
                  className={`absolute inset-0 translate-y-3 rounded-3xl border border-gold-400/60 ${
                    flip ? "-translate-x-3" : "translate-x-3"
                  }`}
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-forest-100">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-14 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                    <Icon name={s.icon} className="size-7" />
                  </span>
                  <span className="font-serif text-4xl text-gold-400/80">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-5 text-3xl text-forest-900 sm:text-4xl">{t(s.title)}</h2>
                <p className="mt-4 text-base text-muted sm:text-lg">{t(s.description)}</p>

                <h3 className="tracking-eyebrow mt-7 text-xs font-semibold text-gold-600">
                  {t(servicesPage.helpWith)}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item.en} className="flex gap-3 text-forest-900">
                      <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      {t(item)}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <WhatsAppLink variant="whatsapp" service={s.title} label={ui.enquireWhatsApp} />
                  <CallLink variant="forest" label={ui.call} />
                  <Link href={`/contact?service=${s.slug}`} className={btn("outlineDark")}>
                    {t(ui.enquiryForm)}
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-sand py-8">
        <Container>
          <p className="text-center text-sm text-muted">{t(servicesPage.note)}</p>
        </Container>
      </section>
    </>
  );
}
