import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { SITE_CONTENT } from '@/src/data/content';

export const UtilityBar: React.FC = () => {
  const { email, phone } = SITE_CONTENT.utilityBar;

  return (
    <div className="hidden md:block bg-[#1E1B1B] hairline-b text-xs text-[#A3A3A3] py-2 px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={email.startsWith('[') ? '#contact' : `mailto:${email}`}
            className="flex items-center gap-2 hover:text-[#F4EBDD] transition-colors focus-visible:outline-[#B8975A]"
          >
            <Mail className="w-3.5 h-3.5 text-[#B8975A]" aria-hidden="true" />
            <span className="font-mono text-xs">{email}</span>
          </a>
          <span className="text-[#F4EBDD]/20">·</span>
          <a
            href={phone.startsWith('[') ? '#contact' : `tel:${phone}`}
            className="flex items-center gap-2 hover:text-[#F4EBDD] transition-colors focus-visible:outline-[#B8975A]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B8975A]" aria-hidden="true" />
            <span className="font-mono text-xs">{phone}</span>
          </a>
        </div>
        <div className="text-[11px] tracking-widest uppercase text-[#A3A3A3]">
          Bengaluru · Multidisciplinary Design-and-Build
        </div>
      </div>
    </div>
  );
};
