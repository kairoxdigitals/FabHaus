import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = '',
  showIcon = true,
}) => {
  // If the destination URL is still an unconfirmed bracketed placeholder or empty, hide the link
  if (!href || href.trim() === '' || href.startsWith('[')) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 group/extlink relative py-1 focus-visible:outline-2 focus-visible:outline-[#B8975A] ${className}`}
    >
      <span>{children}</span>
      {showIcon && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover/extlink:translate-x-1 group-hover/extlink:-translate-y-1 font-sans text-sm leading-none text-[#B8975A]"
        >
          ↗
        </span>
      )}
      {/* Visually hidden screen reader announcement */}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
};
