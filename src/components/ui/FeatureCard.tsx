import { type ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  /** Circle (trust strip style) or square (service style) icon container */
  iconVariant?: 'circle' | 'square';
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconVariant = 'circle',
  className = '',
}: FeatureCardProps) {
  const iconWrapperClass =
    iconVariant === 'circle'
      ? 'flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-orange text-white flex-shrink-0 shadow-button'
      : 'flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex-shrink-0';

  return (
    <div className={`flex items-start gap-4 ${className}`.trim()}>
      <span className={iconWrapperClass} aria-hidden>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-bold text-brand-grey">{title}</p>
        <p className="text-sm text-brand-grey-light mt-3 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
