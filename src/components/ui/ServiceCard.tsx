import { type ReactNode } from 'react';

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  /** Optional CTA (e.g. "Fale conosco" for "Outros") */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  className = '',
}: ServiceCardProps) {
  return (
    <article
      className={`h-full p-7 md:p-8 bg-white rounded-3xl shadow-card border border-slate-100 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-orange/20 transition-all duration-300 ${className}`.trim()}
    >
      <span
        className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange mb-5"
        aria-hidden
      >
        {icon}
      </span>
      <h3 className="text-xl font-bold text-brand-grey mb-2">{title}</h3>
      <p className="text-brand-grey-light leading-relaxed">{description}</p>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="mt-4 inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-orange/30 rounded-lg"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}
