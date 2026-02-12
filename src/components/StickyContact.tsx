import { PHONE_MAIN_TEL, URL_WHATSAPP_1 } from '../lib/constants';
import { IconPhone, IconWhatsApp } from '../components/Icons';

export function StickyContact() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden rounded-t-3xl bg-brand-grey/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.2)] pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] px-3"
      role="complementary"
      aria-label="Contato rápido"
    >
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href={`tel:${PHONE_MAIN_TEL}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold bg-white text-brand-grey rounded-2xl hover:bg-slate-50 active:scale-[0.98] transition-all min-h-touch shadow-card"
          aria-label="Ligar"
        >
          <IconPhone className="w-5 h-5 flex-shrink-0" />
          Ligar
        </a>
        <a
          href={URL_WHATSAPP_1}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold bg-whatsapp text-white rounded-2xl hover:bg-whatsapp-hover active:scale-[0.98] transition-all min-h-touch shadow-card"
          aria-label="WhatsApp"
        >
          <IconWhatsApp className="w-5 h-5 flex-shrink-0" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
