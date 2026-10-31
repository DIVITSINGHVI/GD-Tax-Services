"use client";

import { Suspense } from "react";
import ContactInfo from "./ContactInfo";
import EnquiryForm from "./EnquiryForm";
import { CallLink, Container, PageBanner, WhatsAppLink } from "./ui";
import { useLang } from "@/lib/i18n";
import { contactPage, form, ui } from "@/lib/content";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <PageBanner title={contactPage.title} text={contactPage.text} />

      <section className="bg-cream py-12 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="rounded-3xl border border-forest-900/10 bg-white p-5 shadow-sm sm:p-9 lg:col-span-2">
            <h2 className="text-2xl text-forest-900 sm:text-3xl">{t(contactPage.detailsTitle)}</h2>
            <div className="mt-7">
              <ContactInfo />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CallLink variant="forest" />
              <WhatsAppLink variant="whatsapp" label={ui.whatsapp} />
            </div>
          </div>

          <div className="rounded-3xl border border-forest-900/10 bg-white p-5 shadow-sm sm:p-9 lg:col-span-3">
            <h2 className="text-2xl text-forest-900 sm:text-3xl">{t(form.title)}</h2>
            <p className="mt-2 mb-7 text-muted">{t(form.text)}</p>
            <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-forest-50" aria-hidden="true" />}>
              <EnquiryForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
