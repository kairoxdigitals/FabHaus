
import React, { useEffect, useState } from 'react';

interface ImageOrPlaceholderProps {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  theme?: 'dark' | 'light';
  showMockBadge?: boolean;
}

export const ImageOrPlaceholder: React.FC<ImageOrPlaceholderProps> = ({
  src,
  alt,
  placeholderLabel,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false,
  theme = 'dark',
  showMockBadge = true,
}) => {
  const isDark = theme === 'dark';

  const imageSrc = src?.trim();

  const isValidSource = Boolean(
    imageSrc &&
    !imageSrc.startsWith('[') &&
    !imageSrc.endsWith(']')
  );

  const [imageError, setImageError] = useState(false);

  // Reset error when the image source changes
  useEffect(() => {
    setImageError(false);
  }, [imageSrc]);

  const showImage = isValidSource && !imageError;

  if (!showImage) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center overflow-hidden border ${
          isDark
            ? 'bg-[#1E1B1B] border-[#F4EBDD]/10 text-[#F4EBDD]'
            : 'bg-[#E3D5BD]/40 border-[#0E0E0E]/10 text-[#0E0E0E]'
        } ${aspectRatio} ${className}`}
        role="img"
        aria-label={alt || placeholderLabel || 'Image placeholder'}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-md px-4">
          <span
            className={`inline-block text-[11px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 mb-2 border ${
              isDark
                ? 'bg-[#0E0E0E]/80 text-[#B8975A] border-[#B8975A]/30'
                : 'bg-[#F4EBDD] text-[#9E1B24] border-[#9E1B24]/30'
            }`}
          >
            Client Asset Slot
          </span>

          <p className="text-xs md:text-sm font-medium tracking-wide opacity-90 break-words">
            {imageError
              ? 'Image unavailable'
              : placeholderLabel || '[Catalogue Photography Placeholder]'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setImageError(true)}
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
      />

      {showMockBadge && placeholderLabel && (
        <div className="absolute bottom-2.5 left-2.5 z-10 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest uppercase bg-[#0E0E0E]/85 text-[#B8975A] border border-[#B8975A]/25 px-2 py-0.5 rounded-none backdrop-blur-xs">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
};
