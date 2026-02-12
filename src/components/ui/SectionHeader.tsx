import { type ReactNode } from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: ReactNode;
  /** Centered layout (default true for sections) */
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  const alignClass = centered ? 'text-center max-w-2xl mx-auto' : '';
  return (
    <header className={`mb-14 sm:mb-16 ${alignClass} ${className}`.trim()}>
      <h2 id={id} className="text-section font-bold text-brand-grey mb-4">
        {title}
      </h2>
      {subtitle != null && (
        <div className="text-brand-grey-light text-lead mt-4 leading-relaxed">
          {subtitle}
        </div>
      )}
    </header>
  );
}
