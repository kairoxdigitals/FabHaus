import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { Carousel } from '@/src/components/ui/Carousel';
import { Reveal } from '@/src/components/ui/Reveal';

interface TestimonialItem {
  quote: string;
  clientName: string;
  location: string;
}

export const Testimonials: React.FC = () => {
  const testimonialsData = SITE_CONTENT.testimonials as {
    hasTestimonials: boolean;
    items?: TestimonialItem[];
    clientLogos?: { name: string; logoUrl?: string }[];
  };

  // Fallback rule: Hidden entirely if client has none yet ("Do not fake it")
  if (
    !testimonialsData.hasTestimonials ||
    !testimonialsData.items ||
    testimonialsData.items.length === 0
  ) {
    return null;
  }

  const items = testimonialsData.items;
  const clientLogos = testimonialsData.clientLogos || [];

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="w-full bg-[#0E0E0E] text-[#F4EBDD] py-20 sm:py-28 hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] block mb-3">
              Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4EBDD] leading-tight mb-4">
              Client & Collaborator Voices.
            </h2>
          </Reveal>
        </div>

        <Reveal type="card" delay={0.1}>
          <Carousel>
            {items.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] px-4 min-w-0">
                <div className="p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] h-full flex flex-col justify-between">
                  <p className="text-base sm:text-lg italic text-[#F4EBDD]/90 mb-6 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="pt-4 border-t border-[rgba(244,235,221,0.08)]">
                    <div className="text-sm font-bold text-[#F4EBDD]">{item.clientName}</div>
                    <div className="text-xs text-[#A3A3A3] mt-0.5">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Reveal>

        {clientLogos.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[rgba(244,235,221,0.08)] grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3]">
                {logo.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
