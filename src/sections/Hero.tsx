import { PHONE_MAIN_TEL, URL_WHATSAPP_1, CONTACT_NAME } from '../lib/constants';
import { IconWhatsApp } from '../components/Icons';

export function Hero() {
  return (
    <section className="relative bg-brand-grey text-white min-h-[min(88vh,640px)] flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-20 max-w-xl animate-fade-in">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-5">
          Atendimento 24h
        </div>
        <h1 className="text-display font-extrabold tracking-tight mb-4">
          Guincho em Curitiba e Região
        </h1>
        <p className="text-lead text-white/90 mb-8 max-w-md">
          Parou na rua? A gente resolve. Reboque 24h com preço justo e sem surpresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={URL_WHATSAPP_1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-7 py-4 rounded-2xl transition-all min-h-touch shadow-button-hover hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] active:scale-[0.98]"
            aria-label="Chamar no WhatsApp"
          >
            <IconWhatsApp className="w-6 h-6 flex-shrink-0" />
            Orçamento no WhatsApp
          </a>
          <a
            href={`tel:${PHONE_MAIN_TEL}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-4 rounded-2xl border border-white/20 transition-all min-h-touch active:scale-[0.98]"
            aria-label={`Ligar para ${CONTACT_NAME}`}
          >
            Ligar agora
          </a>
        </div>
        <p className="mt-8 text-sm text-white/60">
          {CONTACT_NAME} · Curitiba e região
        </p>
      </div>
      <div className="flex-1 relative min-h-[300px] md:min-h-0 md:flex md:items-stretch">
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-grey via-brand-grey/90 to-transparent z-10 pointer-events-none" />
        <img
          src="/assets/guincho-frente.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
        />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-full rounded-l-3xl overflow-hidden z-0" aria-hidden />
      </div>
    </section>
  );
}
