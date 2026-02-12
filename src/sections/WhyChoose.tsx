import { IconCheck } from '../components/Icons';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { WHY_CHOOSE_BULLETS } from '../content/trust';

export function WhyChoose() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-brand-grey-bg-alt border-t border-slate-200" aria-labelledby="why-heading">
      <Container>
        <SectionHeader
          id="why-heading"
          title="Por que nos escolher?"
          subtitle="Segurança e transparência em cada atendimento."
        />
        <ul className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto" role="list">
          {WHY_CHOOSE_BULLETS.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center" aria-hidden>
                <IconCheck className="w-3.5 h-3.5" />
              </span>
              <span className="text-brand-grey-light text-left leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
