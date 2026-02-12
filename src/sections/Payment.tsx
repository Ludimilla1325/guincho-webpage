import { IconCash } from '../components/Icons';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function Payment() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-white border-t border-slate-200" aria-labelledby="payment-heading">
      <Container>
        <SectionHeader
          id="payment-heading"
          title="Formas de pagamento"
          subtitle="Pagamento na hora, após o serviço. Sem taxas escondidas."
          centered
        />
        <div className="flex flex-wrap justify-center items-center gap-6 px-6 py-5 bg-brand-grey-bg rounded-2xl border border-slate-100 max-w-md mx-auto">
          <span className="flex items-center gap-2 font-semibold text-brand-grey">
            <IconCash className="w-5 h-5 text-brand-orange" aria-hidden />
            Dinheiro
          </span>
          <span className="w-px h-6 bg-slate-200" aria-hidden />
          <span className="font-semibold text-brand-grey">Pix</span>
        </div>
      </Container>
    </section>
  );
}
