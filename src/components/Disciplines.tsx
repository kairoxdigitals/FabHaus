import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { Reveal } from '@/src/components/ui/Reveal';

export const Disciplines: React.FC = () => {
  const { label, headingPrefix, headingHighlight, items, closingBand } = SITE_CONTENT.disciplines;

  return (
    <section
      id="disciplines"
      aria-label="One Roof, Four Disciplines"
      className="w-full bg-[#141414] text-[#F4EBDD] py-20 sm:py-28 lg:py-32 select-none hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
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

        {/* 4 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {items.map((item, idx) => (
            <Reveal key={item.number} type="card" delay={idx * 0.1}>
              <div className="h-full p-6 sm:p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] flex flex-col justify-between group hover:border-[#B8975A]/40 transition-colors">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#B8975A] block mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F4EBDD] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing line in a brand red band */}
        <Reveal type="text" delay={0.2}>
          <div className="w-full bg-[#9E1B24] text-white p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base sm:text-lg md:text-xl font-bold tracking-wide">
              {closingBand}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-[#0E0E0E] text-[#F4EBDD] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#1E1B1B] transition-colors shrink-0"
            >
              Start Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
