import { IconClock, IconShield, IconCash } from '../components/Icons';
import { Container } from '../components/ui/Container';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TRUST_FEATURES } from '../content/trust';

const TRUST_ICONS = [IconClock, IconShield, IconCash] as const;

export function TrustStrip() {
  return (
    <section className="bg-brand-orange-bg pt-16 pb-16 sm:pt-20 sm:pb-20 border-b border-brand-orange/15" aria-label="Destaques do serviço">
      <Container>
        <ul className="grid sm:grid-cols-3 gap-10 sm:gap-8" role="list">
          {TRUST_FEATURES.map((item, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <li key={item.title}>
                <FeatureCard
                  icon={Icon ? <Icon className="w-6 h-6" /> : null}
                  title={item.title}
                  description={item.description}
                  iconVariant="circle"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
