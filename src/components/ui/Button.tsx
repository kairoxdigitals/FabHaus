import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'accent';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  showArrow = true,
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 rounded-none overflow-hidden transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2";

  let variantClasses = "";

  if (variant === 'primary') {
    // Red brand primary button per catalogue specification
    variantClasses =
      "bg-[#9E1B24] text-[#FFFFFF] hover:bg-[#80141C] focus-visible:outline-[#9E1B24]";
  } else if (variant === 'accent') {
    // Gold accent on dark backgrounds only
    variantClasses =
      "bg-[#B8975A] text-[#0E0E0E] hover:bg-[#A68347] focus-visible:outline-[#B8975A]";
  } else if (variant === 'secondary') {
    variantClasses =
      "bg-transparent text-[#F4EBDD] border border-[rgba(244,235,221,0.25)] hover:border-[#F4EBDD] hover:bg-[#F4EBDD]/10 focus-visible:outline-[#F4EBDD]";
  } else if (variant === 'light') {
    variantClasses =
      "bg-[#0E0E0E] text-[#F4EBDD] hover:bg-[#1E1B1B] focus-visible:outline-[#0E0E0E]";
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {content}
    </button>
  );
};
