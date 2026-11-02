import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { ImageOrPlaceholder } from '@/src/components/ui/ImageOrPlaceholder';
import { Reveal } from '@/src/components/ui/Reveal';

export const PrefabLGSF: React.FC = () => {
  const {
    label,
    headingPrefix,
    headingHighlight,
    text,
    bigFigure,
    bigFigureTagline,
    image,
    features,
    typologies,
  } = SITE_CONTENT.prefabLgsf;

  return (
    <section
      id="prefab-lgsf"
      aria-label="Prefabrication and Light Gauge Steel Framing"
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

        {/* Hero Figure & Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Big Figure & Performance Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal type="card">
              <div className="p-8 sm:p-10 bg-[#1E1B1B] border border-[rgba(244,235,221,0.12)]">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-2">
                  Speed Multiplier
                </span>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#F4EBDD] font-serif tracking-tight leading-none mb-4">
                  {bigFigure}
                </div>
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  {bigFigureTagline}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: LGSF Structure Image */}
          <div className="lg:col-span-7">
            <Reveal type="image" delay={0.1}>
              <ImageOrPlaceholder
                src={image.src}
                alt={image.alt}
                placeholderLabel={image.placeholderLabel}
                aspectRatio="aspect-[16/10]"
                theme="dark"
                className="border border-[rgba(244,235,221,0.12)] shadow-xl"
              />
            </Reveal>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feat, idx) => (
            <Reveal key={feat.title} type="card" delay={idx * 0.1}>
              <div className="h-full p-6 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] hover:border-[#B8975A]/40 transition-colors">
                <div className="w-2.5 h-2.5 bg-[#B8975A] mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-[#F4EBDD] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Typology Line */}
        <Reveal type="text" delay={0.3}>
          <div className="p-4 sm:p-5 bg-[#0E0E0E] border border-[rgba(244,235,221,0.08)] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-[#B8975A]">
            {typologies.map((item, idx) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {idx < typologies.length - 1 && (
                  <span className="text-[#F4EBDD]/20 select-none hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
