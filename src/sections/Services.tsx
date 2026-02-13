import { IconCar, IconMoto, IconTool } from '../components/Icons';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SERVICES_COPY } from '../content/trust';

const SERVICE_ICONS = [IconCar, IconMoto, IconTool] as const;

export function Services() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-brand-grey-bg border-t border-slate-200" aria-labelledby="services-heading">
      <Container>
        <SectionHeader
          id="services-heading"
          title="Como podemos te ajudar?"
          subtitle="Reboque rápido e seguro para carros, motos e mais. Curitiba e região."
        />
        <ul className="grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_COPY.map((item, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <li key={item.title}>
                <ServiceCard
                  icon={Icon ? <Icon className="w-8 h-8" /> : null}
                  title={item.title}
                  description={item.description}
                  ctaLabel={item.ctaLabel}
                  ctaHref={item.ctaHref}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
