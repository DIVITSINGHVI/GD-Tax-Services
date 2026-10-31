"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { Container, CtaBand, PageBanner, SectionHeading, btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { aboutPage, ui } from "@/lib/content";
import { IMAGES } from "@/lib/images";

const principleIcons = ["file", "shield", "pin"] as const;

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageBanner title={aboutPage.title} text={aboutPage.text} />

      <section className="bg-cream py-12 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl text-forest-900 sm:text-4xl">{t(aboutPage.heading)}</h2>
            <p className="mt-5 text-base text-muted sm:text-lg">{t(aboutPage.p1)}</p>
            <p className="mt-4 text-base text-muted sm:text-lg">{t(aboutPage.p2)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className={btn("forest")}>
                {t(ui.allServices)}
                <Icon name="arrow" className="size-4" />
              </Link>
              <Link href="/contact" className={btn("outlineDark")}>
                {t(ui.nav.contact)}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-gold-400/60" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={IMAGES.about}
                alt={aboutPage.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-24">
        <Container>
          <SectionHeading title={aboutPage.principlesTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutPage.principles.map((p, i) => (
              <div key={p.title.en} className="rounded-2xl border border-forest-900/10 bg-paper p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                  <Icon name={principleIcons[i]} className="size-6" />
                </span>
                <h3 className="mt-5 text-xl text-forest-900">{t(p.title)}</h3>
                <p className="mt-2 text-muted">{t(p.text)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-12 sm:py-20">
        <Container>
          <SectionHeading title={aboutPage.whoTitle} />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {aboutPage.who.map((w) => (
              <li
                key={w.en}
                className="flex items-center gap-3 rounded-xl border border-forest-900/10 bg-paper px-5 py-4 font-medium text-forest-900"
              >
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-300">
                  <Icon name="check" className="size-3.5" />
                </span>
                {t(w)}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
