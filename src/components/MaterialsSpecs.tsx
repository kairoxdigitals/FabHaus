import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { DataTable } from '@/src/components/ui/DataTable';
import { Reveal } from '@/src/components/ui/Reveal';

export const MaterialsSpecs: React.FC = () => {
  const { label, headingPrefix, headingHighlight, headers, rows, chips } =
    SITE_CONTENT.materialsSpecs;

  const tableData = rows.map((r) => [r.component, r.standard, r.meaning]);

  return (
    <section
      id="materials-specs"
      aria-label="Materials and Factory Specifications"
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

        {/* 6-Row Specifications Table */}
        <Reveal type="card" delay={0.1}>
          <div className="mb-8">
            <DataTable
              headers={headers}
              rows={tableData}
              theme="dark"
              caption="Materials and Factory Specifications for FH_Modulars Cabinetry and Joinery"
            />
          </div>
        </Reveal>

        {/* 4 Outlined Chips (Static per catalogue spec) */}
        <Reveal type="text" delay={0.2}>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {chips.map((chip) => (
              <div
                key={chip}
                className="px-4 py-2 border border-[#B8975A]/40 bg-[#1E1B1B] text-[#B8975A] text-xs font-mono uppercase tracking-[0.2em] select-none"
              >
                {chip}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
