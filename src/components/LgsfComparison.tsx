import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { DataTable } from '@/src/components/ui/DataTable';
import { Reveal } from '@/src/components/ui/Reveal';

export const LgsfComparison: React.FC = () => {
  const { label, headingPrefix, headingHighlight, footnote, headers, rows } =
    SITE_CONTENT.lgsfComparison;

  const tableData = rows.map((r) => [r.parameter, r.lgsf, r.conventional]);

  return (
    <section
      id="lgsf-comparison"
      aria-label="LGSF vs Conventional Comparison Table"
      className="w-full bg-[#0E0E0E] text-[#F4EBDD] py-16 sm:py-24 select-none hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] font-semibold block mb-3">
              {label}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
              <span className="font-light text-[#A3A3A3]">{headingPrefix} </span>
              <span className="font-bold text-[#F4EBDD]">{headingHighlight}</span>
            </h2>
          </Reveal>
        </div>

        <Reveal type="card" delay={0.1}>
          <DataTable
            headers={headers}
            rows={tableData}
            footnote={footnote}
            theme="dark"
            caption="Comparison between Fab Haus Light Gauge Steel Framing and Conventional wet brick / RCC construction"
          />
        </Reveal>
      </div>
    </section>
  );
};
