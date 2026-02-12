import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** Optional max width: default (content), 'narrow' (max-w-lg), 'wide' (max-w-6xl) */
  variant?: 'default' | 'narrow' | 'wide';
  className?: string;
}

const maxWidthClass = {
  default: 'max-w-content',
  narrow: 'max-w-lg',
  wide: 'max-w-6xl',
} as const;

export function Container({ children, variant = 'default', className = '' }: ContainerProps) {
  return (
    <div className={`${maxWidthClass[variant]} mx-auto px-4 sm:px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
