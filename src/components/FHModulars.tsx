import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { ImageOrPlaceholder } from '@/src/components/ui/ImageOrPlaceholder';
import { Reveal } from '@/src/components/ui/Reveal';

export const FHModulars: React.FC = () => {
  const { label, headingPrefix, headingHighlight, text, panels, images } =
    SITE_CONTENT.fhModulars;

  return (
    <section
      id="fh-modulars"
      aria-label="FH Modulars Manufacturing Facility"
      className="w-full bg-[#141414] text-[#F4EBDD] py-20 sm:py-28 lg:py-32 select-none hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] font-semibold block mb-3">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-5">
              <span className="font-light text-[#A3A3A3]">{headingPrefix} </span>
              <span className="font-bold text-[#F4EBDD]">{headingHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              {text}
            </p>
          </Reveal>
        </div>

        {/* Dual Panels: Clients vs Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <Reveal type="card" delay={0.1}>
            <div className="p-8 sm:p-10 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-2">
                  Integrated Delivery
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4EBDD] mb-4">
                  {panels.clients.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  {panels.clients.description}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal type="card" delay={0.2}>
            <div className="p-8 sm:p-10 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-2">
                  B2B OEM Network
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4EBDD] mb-4">
                  {panels.partners.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  {panels.partners.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4-Image Production Group */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <Reveal key={idx} type="image" delay={idx * 0.1}>
              <ImageOrPlaceholder
                src={img.src}
                alt={img.alt}
                placeholderLabel={img.placeholderLabel}
                aspectRatio="aspect-[4/3]"
                theme="dark"
                className="border border-[rgba(244,235,221,0.08)]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
