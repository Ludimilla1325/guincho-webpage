import { PHONE_MAIN_TEL, URL_GOOGLE, URL_FACEBOOK, URL_WHATSAPP_1, URL_WHATSAPP_2 } from '../lib/constants';
import { IconPhone, IconWhatsApp } from '../components/Icons';

export function ContactStrip() {
  return (
    <section className="bg-white border-b border-slate-200 py-5" aria-label="Links rápidos">
      <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <a
          href={`tel:${PHONE_MAIN_TEL}`}
          className="inline-flex items-center gap-2 font-medium text-brand-grey hover:text-brand-orange transition-colors min-h-touch py-1"
          aria-label="Telefone"
        >
          <IconPhone className="w-4 h-4 flex-shrink-0 text-brand-orange" />
          Ligar
        </a>
        <a
          href={URL_WHATSAPP_1}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-brand-grey hover:text-brand-orange transition-colors"
          aria-label="WhatsApp"
        >
          <IconWhatsApp className="w-4 h-4 flex-shrink-0 text-whatsapp" />
          WhatsApp
        </a>
        <a
          href={URL_WHATSAPP_2}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-brand-grey hover:text-brand-orange transition-colors"
          aria-label="WhatsApp segundo número"
        >
          WhatsApp 2
        </a>
        <span className="text-slate-200 hidden sm:inline" aria-hidden>·</span>
        <a href={URL_GOOGLE} target="_blank" rel="noopener noreferrer" className="text-brand-grey-light hover:text-brand-orange transition-colors" aria-label="Google">Google</a>
        <a href={URL_FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-brand-grey-light hover:text-brand-orange transition-colors" aria-label="Facebook">Facebook</a>
      </div>
    </section>
  );
}
