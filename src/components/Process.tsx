import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { Reveal } from '@/src/components/ui/Reveal';

export const Process: React.FC = () => {
  const {
    label,
    headingPrefix,
    headingHighlight,
    steps,
    timelineBlock,
    accountabilityBlock,
  } = SITE_CONTENT.process;

  return (
    <section
      id="process"
      aria-label="Process — From Discovery to Handover"
      className="w-full bg-[#F4EBDD] text-[#0E0E0E] py-20 sm:py-28 lg:py-32 select-none border-b border-[#0E0E0E]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#9E1B24] font-semibold block mb-3">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              <span className="font-light text-[#5C5549]">{headingPrefix} </span>
              <span className="font-bold text-[#0E0E0E]">{headingHighlight}</span>
            </h2>
          </Reveal>
        </div>

        {/* 5 Steps in a Row with Static Connecting Line */}
        <div className="relative mb-16">
          {/* Static horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-[5%] right-[5%] h-0.5 bg-[#0E0E0E]/15 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <Reveal key={step.number} type="card" delay={index * 0.1}>
                <div className="p-6 bg-[#E3D5BD]/40 border border-[#0E0E0E]/10 h-full flex flex-col justify-between">
                  <div>
                    {/* Brand red circle with step number */}
                    <div className="w-12 h-12 rounded-full bg-[#9E1B24] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-[#0E0E0E] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D3833] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Two Highlight Blocks: Timeline (Brand Red) and Single-point Accountability (Dark) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4">
          {/* 45 to 75 Days Brand Red Block */}
          <div className="lg:col-span-5">
            <Reveal type="card" delay={0.2} className="h-full">
              <div className="p-8 sm:p-10 bg-[#9E1B24] text-white h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/80 block mb-2">
                    Predictable Turnkey Delivery
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-none mb-3">
                    {timelineBlock.days}
                  </div>
                  <div className="text-sm sm:text-base font-semibold tracking-wide uppercase">
                    {timelineBlock.label}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Single-point Accountability Dark Block */}
          <div className="lg:col-span-7">
            <Reveal type="card" delay={0.3} className="h-full">
              <div className="p-8 sm:p-10 bg-[#0E0E0E] text-[#F4EBDD] border border-[rgba(244,235,221,0.08)] h-full flex flex-col justify-center">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-2">
                  Unified Accountability
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4EBDD] mb-3">
                  {accountabilityBlock.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  {accountabilityBlock.description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline footnote directly beneath */}
        <p className="text-xs italic text-[#5C5549] mt-3">
          {timelineBlock.footnote}
        </p>
      </div>
    </section>
  );
};
