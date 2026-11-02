"use client";

import Link from "next/link";
import Icon from "./Icon";
import { Container, PageBanner, btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { aboutPage, ui } from "@/lib/content";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageBanner title={aboutPage.title} text={aboutPage.text} />
      <section className="bg-cream py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-forest-900/10 bg-white p-6 sm:p-10">
            <h2 className="text-3xl text-forest-900 sm:text-4xl">{t(aboutPage.heading)}</h2>
            <p className="mt-5 text-base text-muted sm:text-lg">{t(aboutPage.p1)}</p>
            <p className="mt-4 text-base text-muted sm:text-lg">{t(aboutPage.p2)}</p>

            <div className="mt-8 grid gap-5 border-t border-forest-900/10 pt-8 md:grid-cols-3">
              {aboutPage.principles.map((principle) => (
                <div key={principle.title.en}>
                  <div className="flex items-center gap-2.5">
                    <Icon name="check" className="size-5 shrink-0 text-gold-600" />
                    <h3 className="text-lg text-forest-900">{t(principle.title)}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted">{t(principle.text)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#services" className={btn("forest")}>
                {t(ui.allServices)}
              </Link>
              <Link href="/contact" className={btn("outlineDark")}>
                {t(ui.nav.contact)}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
