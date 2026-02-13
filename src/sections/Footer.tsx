import {
  PHONE_MAIN,
  PHONE_MAIN_TEL,
  URL_GOOGLE,
  URL_FACEBOOK,
  URL_WHATSAPP_1,
  URL_WHATSAPP_2,
  EMAIL,
  CONTACT_NAME,
} from '../lib/constants';
import { IconPhone, IconWhatsApp } from '../components/Icons';

export function Footer() {
  return (
    <footer className="bg-brand-grey text-white border-t-2 border-white/20">
      <div className="max-w-content mx-auto px-4 sm:px-6 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <img
            src="/assets/logo.jpg"
            alt="Guincho Taquari"
            className="h-10 w-auto max-w-[200px] object-contain block mb-2"
            width={200}
            height={52}
            loading="eager"
          />
            <p className="text-white/60 text-sm">Curitiba e Região</p>
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 mb-3">Contato</p>
            <a
              href={`tel:${PHONE_MAIN_TEL}`}
              className="inline-flex items-center gap-2 font-medium text-white hover:text-brand-yellow transition-colors mb-1"
            >
              <IconPhone className="w-4 h-4 flex-shrink-0" />
              {PHONE_MAIN}
            </a>
            <p className="text-sm text-white/60 mb-2">{CONTACT_NAME}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white/80 hover:text-brand-yellow transition-colors"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 mb-3">Redes</p>
            <div className="flex flex-col gap-2">
              <a
                href={URL_WHATSAPP_1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-brand-yellow transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={URL_WHATSAPP_2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-brand-yellow transition-colors"
              >
                WhatsApp 2
              </a>
              <a href={URL_GOOGLE} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-brand-yellow transition-colors">Google</a>
              <a href={URL_FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-brand-yellow transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Guincho Taquari. Curitiba e Região.
        </div>
      </div>
    </footer>
  );
}
