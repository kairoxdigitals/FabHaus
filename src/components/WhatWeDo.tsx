import React from 'react';
import { SITE_CONTENT, SegmentCard } from '@/src/data/content';
import { ExternalLink } from '@/src/components/ui/ExternalLink';
import { ImageOrPlaceholder } from '@/src/components/ui/ImageOrPlaceholder';
import { Reveal } from '@/src/components/ui/Reveal';

export const WhatWeDo: React.FC = () => {
  const { label, headingPrefix, headingHighlight, cards } = SITE_CONTENT.whatWeDo;

  const renderCard = (card: SegmentCard, delay: number) => {
    return (
      <Reveal key={card.title} type="card" delay={delay} className="flex-1">
        <div className="group relative bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] overflow-hidden flex flex-col h-full transition-colors duration-300 hover:border-[#B8975A]/40">
          {/* Card Images Grid (2 image slots per spec) */}
          <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#0E0E0E]">
            {card.placeholderImages.map((img, i) => (
              <ImageOrPlaceholder
                key={i}
                src={img.src}
                alt={img.alt}
                placeholderLabel={img.label}
                aspectRatio="aspect-[4/3]"
                theme="dark"
              />
            ))}
          </div>

          {/* Card Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-2">
                Specialization
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4EBDD] mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-[#B8975A] mb-3">
                "{card.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-8 border-t border-[rgba(244,235,221,0.08)] pt-4 text-xs sm:text-sm text-[#F4EBDD]/90">
                {card.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#B8975A] font-bold select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Outbound Link */}
            <div className="pt-4 border-t border-[rgba(244,235,221,0.08)]">
              {card.portfolioUrl.startsWith('[') ? (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#F4EBDD] hover:text-[#B8975A] transition-colors"
                >
                  <span>{card.linkLabel}</span>
                  <span className="text-[#B8975A]">↗</span>
                </a>
              ) : (
                <ExternalLink
                  href={card.portfolioUrl}
                  className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F4EBDD] hover:text-[#B8975A] transition-colors"
                >
                  {card.linkLabel}
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    );
  };

  return (
    <section
      id="what-we-do"
      aria-label="Design Services — Architecture and Interiors"
      className="w-full bg-[#0E0E0E] text-[#F4EBDD] py-20 sm:py-28 lg:py-32 hairline-b"
    >
      <div id="work" className="relative -top-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] font-semibold block mb-3">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              <span className="font-light text-[#A3A3A3]">{headingPrefix} </span>
              <span className="font-bold text-[#F4EBDD]">{headingHighlight}</span>
            </h2>
          </Reveal>
        </div>

        {/* Two Segment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, idx) => renderCard(card, idx * 0.1))}
        </div>
      </div>
    </section>
  );
};
