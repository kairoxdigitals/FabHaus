import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { Reveal } from '@/src/components/ui/Reveal';
import { ImageOrPlaceholder } from '@/src/components/ui/ImageOrPlaceholder';

export const About: React.FC = () => {
  const { label, headingPrefix, headingHighlight, paragraphs, images, stats } = SITE_CONTENT.about;

  // Filter out any stat that is pending confirmation (e.g. 100% satisfaction)
  const verifiedStats = stats.filter((s) => !s.pendingConfirmation);

  return (
    <section
      id="about"
      aria-label="About Fab Haus"
      className="w-full bg-[#F4EBDD] text-[#0E0E0E] py-20 sm:py-28 lg:py-32 select-none border-b border-[#0E0E0E]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal type="text">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#9E1B24] font-semibold block mb-3">
                {label}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
                <span className="font-light text-[#5C5549]">{headingPrefix} </span>
                <span className="font-bold text-[#0E0E0E]">{headingHighlight}</span>
              </h2>
            </Reveal>

            <Reveal type="text" delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-[#262422] leading-relaxed mb-10">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Verified Stats Row: 9+, 250+, 25+ (100% hidden per spec) */}
            {verifiedStats.length > 0 && (
              <Reveal type="text" delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#0E0E0E]/12">
                  {verifiedStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#E3D5BD]/50 border border-[#0E0E0E]/10"
                    >
                      <div className="text-3xl sm:text-4xl font-black text-[#9E1B24] font-serif tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#3D3833] font-medium mt-2 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Two Cabin Images */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {images.map((img, idx) => (
              <Reveal key={idx} type="image" delay={0.1 * (idx + 1)}>
                <ImageOrPlaceholder
                  src={img.src}
                  alt={img.alt}
                  placeholderLabel={img.placeholderLabel}
                  aspectRatio="aspect-[16/10]"
                  theme="light"
                  className="shadow-sm"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
