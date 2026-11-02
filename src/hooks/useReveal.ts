import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number; // in seconds
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -15% 0px', delay = 0 } = options;
  const prefersReducedMotion = useReducedMotion();
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Use IntersectionObserver to trigger reveal once
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, prefersReducedMotion]);

  const style = prefersReducedMotion
    ? {}
    : {
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.6s',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
      };

  return { ref: elementRef, isRevealed, style, prefersReducedMotion };
}
