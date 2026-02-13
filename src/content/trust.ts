import { URL_WHATSAPP_1 } from '../lib/constants';

/**
 * Copy for trust, services, and security messaging.
 * Icons are assigned in sections to keep UI decoupled from content.
 */

/** Trust strip (destaques no topo) */
export interface TrustFeatureCopy {
  title: string;
  description: string;
}

export const TRUST_FEATURES: TrustFeatureCopy[] = [
  {
    title: 'Atendimento imediato',
    description: 'Resposta rápida quando você precisar, 24h.',
  },
  {
    title: 'Preço justo',
    description: 'Orçamento transparente, sem surpresas na hora de pagar.',
  },
  {
    title: 'Dinheiro e Pix',
    description: 'Pagamento facilitado na hora do serviço.',
  },
];

/** Serviços (Como podemos te ajudar) */
export interface ServiceCopy {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const SERVICES_COPY: ServiceCopy[] = [
  {
    title: 'Carros',
    description:
      'Reboque ágil para carros de passeio e utilitários em Curitiba e região. Equipamentos revisados e condutor treinado.',
  },
  {
    title: 'Motos',
    description:
      'Transporte seguro para motos com equipamento adequado. Evitamos riscos ao seu veículo.',
  },
  {
    title: 'Carga de Bateria',
    description:
      'Bateria fraca ou descarregada? Fazemos a carga no local para você voltar a rodar.',
  },
  {
    title: 'Outros',
    description:
      'Veículos comerciais leves e situações especiais de resgate. Consulte-nos para um orçamento personalizado.',
    ctaLabel: 'Fale conosco',
    ctaHref: URL_WHATSAPP_1,
  },
];

/** Por que nos escolher – segurança e confiança */
export const WHY_CHOOSE_BULLETS: string[] = [
  'Cotação transparente e orçamento sem compromisso',
  'Pagamento em dinheiro ou Pix, como preferir',
  'Equipamentos revisados e condutores preparados',
  'Atendimento em Curitiba e região',
];
