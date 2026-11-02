import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { ImageOrPlaceholder } from '@/src/components/ui/ImageOrPlaceholder';
import { Reveal } from '@/src/components/ui/Reveal';

export const SignatureProjects: React.FC = () => {
  const { label, headingPrefix, headingHighlight, items } = SITE_CONTENT.signatureProjects;

  return (
    <section
      id="signature-projects"
      aria-label="Signature Interior and Architecture Projects"
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

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((project, idx) => (
            <Reveal key={project.id} type="card" delay={idx * 0.1}>
              <div className="bg-[#E3D5BD]/40 border border-[#0E0E0E]/12 overflow-hidden flex flex-col h-full group hover:border-[#9E1B24]/40 transition-colors">
                <ImageOrPlaceholder
                  src={project.image}
                  alt={project.alt}
                  placeholderLabel={project.placeholderLabel}
                  aspectRatio="aspect-[16/11]"
                  theme="light"
                />

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9E1B24] font-semibold mb-2">
                      {project.city}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E0E] mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#3D3833] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
