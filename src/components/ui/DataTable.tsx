import React from 'react';

export interface DataTableProps {
  caption?: string;
  headers: string[];
  rows: (string | React.ReactNode)[][];
  footnote?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  caption,
  headers,
  rows,
  footnote,
  theme = 'dark',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full ${className}`}>
      {/* Scrollable table container ensuring 0 horizontal page overflow at 360px */}
      <div className="overflow-x-auto w-full border border-[rgba(244,235,221,0.08)] bg-[#141414]/50 rounded-none focus-within:ring-1 focus-within:ring-[#B8975A]/50">
        <table className="w-full min-w-[560px] text-left border-collapse">
          {caption && (
            <caption className="sr-only">{caption}</caption>
          )}
          <thead>
            <tr className={isDark ? 'bg-[#1E1B1B] border-b border-[rgba(244,235,221,0.12)]' : 'bg-[#E3D5BD] border-b border-[#0E0E0E]/15'}>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.18em] ${
                    isDark ? 'text-[#F4EBDD]' : 'text-[#0E0E0E]'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(244,235,221,0.06)] text-sm">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={
                  rowIdx % 2 === 0
                    ? isDark
                      ? 'bg-[#0E0E0E]/40 hover:bg-[#1E1B1B]/60 transition-colors'
                      : 'bg-[#F4EBDD]/60 hover:bg-[#E3D5BD]/50 transition-colors'
                    : isDark
                    ? 'bg-[#141414]/60 hover:bg-[#1E1B1B]/80 transition-colors'
                    : 'bg-[#E3D5BD]/30 hover:bg-[#E3D5BD]/60 transition-colors'
                }
              >
                {row.map((cell, cellIdx) => {
                  if (cellIdx === 0) {
                    return (
                      <th
                        key={cellIdx}
                        scope="row"
                        className={`py-3.5 px-4 font-semibold text-sm whitespace-nowrap ${
                          isDark ? 'text-[#F4EBDD]' : 'text-[#0E0E0E]'
                        }`}
                      >
                        {cell}
                      </th>
                    );
                  }
                  return (
                    <td
                      key={cellIdx}
                      className={`py-3.5 px-4 text-sm leading-relaxed ${
                        cellIdx === 1 && isDark
                          ? 'text-[#F4EBDD] font-medium'
                          : isDark
                          ? 'text-[#A3A3A3]'
                          : 'text-[#5C5549]'
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote && (
        <p className="mt-3 text-xs italic tracking-wide text-[#A3A3A3] flex items-start gap-1.5">
          <span className="text-[#B8975A] font-bold not-italic">*</span>
          <span>{footnote}</span>
        </p>
      )}
    </div>
  );
};
