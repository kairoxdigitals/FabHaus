import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { CompareSlider } from '@/src/components/ui/CompareSlider';
import { Reveal } from '@/src/components/ui/Reveal';

export const RenderVsReality: React.FC = () => {
  const {
    hasComparePair,
    label,
    headingPrefix,
    headingHighlight,
    subtext,
    renderLabel,
    builtLabel,
    renderImage,
    builtImage,
  } = SITE_CONTENT.renderVsReality;

  // If client has no matching pair, hide section per spec fallback rules
  if (!hasComparePair) {
    return null;
  }

  return (
    <section
      id="render-vs-reality"
      aria-label="Render vs Reality Comparison"
      className="w-full bg-[#0E0E0E] text-[#F4EBDD] py-20 sm:py-28 lg:py-32 select-none hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] font-semibold block mb-3">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-5">
              <span className="font-light text-[#A3A3A3]">{headingPrefix} </span>
              <span className="font-bold text-[#F4EBDD]">{headingHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              {subtext}
            </p>
          </Reveal>
        </div>

        <Reveal type="image" delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <CompareSlider
              beforeImage={renderImage.src || ''}
              beforeAlt={renderImage.alt}
              beforeLabel={renderLabel}
              afterImage={builtImage.src || ''}
              afterAlt={builtImage.alt}
              afterLabel={builtLabel}
              className="shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-between text-xs text-[#A3A3A3] font-mono px-1">
              <span>{renderImage.placeholderLabel}</span>
              <span>{builtImage.placeholderLabel}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
