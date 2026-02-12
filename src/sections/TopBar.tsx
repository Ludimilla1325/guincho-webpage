import { PHONE_MAIN_TEL, PHONE_MAIN, URL_WHATSAPP_1, URL_GOOGLE, URL_FACEBOOK, CONTACT_NAME } from '../lib/constants';
import { IconPhone, IconWhatsApp } from '../components/Icons';

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-brand-grey text-white shadow-md">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="font-bold text-base tracking-tight">Guincho Taquari</span>
          <span className="hidden sm:inline text-white/50 text-sm">|</span>
          <span className="hidden sm:inline text-white/80 text-sm">{CONTACT_NAME}</span>
        </div>
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Contato e redes">
          <a
            href={`tel:${PHONE_MAIN_TEL}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors min-h-touch px-2 py-1.5 rounded-lg hover:bg-white/10"
            aria-label={`Ligar ${PHONE_MAIN}`}
          >
            <IconPhone className="w-5 h-5 flex-shrink-0" />
            <span className="hidden sm:inline">{PHONE_MAIN}</span>
          </a>
          <a
            href={URL_WHATSAPP_1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all min-h-touch shadow-button active:scale-[0.98]"
            aria-label="Abrir WhatsApp"
          >
            <IconWhatsApp className="w-5 h-5 flex-shrink-0" />
            WhatsApp
          </a>
          <span className="hidden md:inline w-px h-6 bg-white/20" aria-hidden />
          <a
            href={URL_GOOGLE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-sm text-white/80 hover:text-white transition-colors"
            aria-label="Google"
          >
            Google
          </a>
          <a
            href={URL_FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-sm text-white/80 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}
