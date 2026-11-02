"use client";

import ContactInfo from "./ContactInfo";
import { CallLink, Container, PageBanner, WhatsAppLink } from "./ui";
import { useLang } from "@/lib/i18n";
import { contactPage, ui } from "@/lib/content";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <PageBanner title={contactPage.title} text={contactPage.text} />
      <section className="bg-cream py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-forest-900/10 bg-white p-6 sm:p-10">
            <h2 className="text-2xl text-forest-900 sm:text-3xl">{t(contactPage.detailsTitle)}</h2>
            <div className="mt-7">
              <ContactInfo />
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-forest-900/10 pt-6 sm:flex-row">
              <CallLink variant="forest" className="sm:flex-1" />
              <WhatsAppLink variant="whatsapp" label={ui.whatsapp} className="sm:flex-1" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
