"use client";

import Icon from "./Icon";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { ui, waMessages } from "@/lib/content";

/**
 * - Mobile: sticky bottom bar with Call + WhatsApp.
 * - Desktop: floating WhatsApp button (bottom-right).
 */
export default function FloatingActions() {
  const { t, lang } = useLang();
  const waHref = whatsappLink(waMessages.generic[lang]);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(ui.whatsappUs)}
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-forest-950 shadow-lg shadow-forest-950/25 ring-1 ring-black/5 transition-colors hover:bg-[#3ee27b] md:inline-flex"
      >
        <Icon name="whatsapp" className="size-6" />
        {t(ui.whatsapp)}
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-gold-400/40 bg-forest-950 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cream py-3 text-[0.95rem] font-semibold text-forest-900"
        >
          <Icon name="phone" className="size-5" />
          {t(ui.call)}
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[0.95rem] font-semibold text-forest-950"
        >
          <Icon name="whatsapp" className="size-5" />
          {t(ui.whatsapp)}
        </a>
      </div>
    </>
  );
}
