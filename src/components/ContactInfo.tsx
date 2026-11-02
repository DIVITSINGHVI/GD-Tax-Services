"use client";

import type { ReactNode } from "react";
import Icon, { type IconKey } from "./Icon";
import { useLang } from "@/lib/i18n";
import { MAP_LINK_URL, SITE, whatsappLink } from "@/lib/site";
import { contactPage, ui, waMessages } from "@/lib/content";

function Row({
  icon,
  label,
  children,
  hint,
}: {
  icon: IconKey;
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
        <Icon name={icon} className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="tracking-eyebrow text-[0.7rem] font-semibold text-gold-600">{label}</p>
        <div className="mt-0.5 text-base font-medium text-forest-900">{children}</div>
        {hint ? <p className="mt-0.5 text-sm text-muted">{hint}</p> : null}
      </div>
    </li>
  );
}

/** Central phone, WhatsApp, address, email and working-hours display. */
export default function ContactInfo() {
  const { t, lang } = useLang();
  return (
    <ul className="space-y-6">
      <Row icon="phone" label={t(ui.phone)} hint={t(contactPage.tapToCall)}>
        <a href={SITE.phoneHref} className="text-xl hover:text-gold-600">
          {SITE.phoneDisplay}
        </a>
      </Row>
      <Row icon="whatsapp" label={t(ui.whatsapp)} hint={t(contactPage.tapToChat)}>
        <a
          href={whatsappLink(waMessages.generic[lang])}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold-600"
        >
          wa.me/917975171155
        </a>
      </Row>
      <Row icon="pin" label={t(ui.address)}>
        <address className="not-italic">
          {SITE.address[lang]}
          <a
            href={MAP_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm font-semibold text-forest-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-600"
          >
            {t(ui.directions)}
          </a>
        </address>
      </Row>
      <Row icon="mail" label={t(ui.email)}>
        {SITE.email ? (
          <a href={`mailto:${SITE.email}`} className="hover:text-gold-600">
            {SITE.email}
          </a>
        ) : (
          <span className="text-muted">{t(ui.toBeUpdated)}</span>
        )}
      </Row>
      <Row icon="clock" label={t(ui.hours)}>
        {SITE.hours ? SITE.hours : <span className="text-muted">{t(ui.toBeUpdated)}</span>}
      </Row>
    </ul>
  );
}
