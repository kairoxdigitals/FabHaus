import React, { ReactNode } from 'react';
import { useReveal } from '@/src/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number; // Delay in seconds (e.g. 0.1, 0.2)
  className?: string;
  type?: 'text' | 'image' | 'card';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  type = 'text',
}) => {
  const { ref, isRevealed, prefersReducedMotion } = useReveal<HTMLDivElement>({ delay });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const duration = type === 'image' ? '0.8s' : '0.6s';

  const transformStyle =
    type === 'image'
      ? isRevealed
        ? 'scale(1)'
        : 'scale(1.04)'
      : isRevealed
      ? 'translateY(0)'
      : 'translateY(24px)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: transformStyle,
        transitionProperty: 'opacity, transform',
        transitionDuration: duration,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
