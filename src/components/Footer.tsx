import React from 'react';
import { SITE_CONTENT } from '@/src/data/content';
import { ExternalLink } from '@/src/components/ui/ExternalLink';

export const Footer: React.FC = () => {
  const { brand, footer, contact } = SITE_CONTENT;

  return (
    <footer className="w-full bg-[#0E0E0E] text-[#F4EBDD] pt-20 pb-12 hairline-t select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[rgba(244,235,221,0.08)]">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-[#B8975A] hover:brightness-110 transition-colors"
            >
              {brand.wordmark}
            </a>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A3A3] mt-2 mb-4">
              {brand.tagline}
            </div>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-sm leading-relaxed mb-6">
              Multidisciplinary design-and-build firm based in Bengaluru. Architecture, interiors, prefab LGSF construction and in-house modular manufacturing operating together under one roof.
            </p>
            {footer.brochure.hasBrochure && footer.brochure.url && (
              <ExternalLink
                href={footer.brochure.url}
                className="text-xs font-semibold uppercase tracking-wider text-[#B8975A]"
              >
                {footer.brochure.label}
              </ExternalLink>
            )}
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8975A] mb-5">
              Quick Links
            </div>
            <ul className="space-y-3 text-xs uppercase tracking-[0.15em]">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-[#F4EBDD] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Work (Outbound Portfolio Links) */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8975A] mb-5">
              Work
            </div>
            <ul className="space-y-3 text-xs uppercase tracking-[0.15em]">
              {footer.work.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('[') ? (
                    <a
                      href="#what-we-do"
                      className="text-[#A3A3A3] hover:text-[#F4EBDD] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <ExternalLink
                      href={item.href}
                      className="text-[#A3A3A3] hover:text-[#F4EBDD] transition-colors"
                    >
                      {item.label}
                    </ExternalLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Coordinates */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8975A] mb-5">
              Studio
            </div>
            <div className="space-y-3 text-xs text-[#A3A3A3]">
              <div className="text-[#F4EBDD] font-medium">{contact.officeAddress}</div>
              <div className="font-mono text-[11px]">{contact.addressPlaceholder}</div>
              <div className="pt-2 font-mono">{contact.phone}</div>
              <div>
                <a
                  href={`mailto:${contact.email.replace(/[\[\]]/g, '')}`}
                  className="font-mono text-[#F4EBDD] hover:text-[#B8975A] transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="font-mono text-[#B8975A]">{contact.website}</div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-[rgba(244,235,221,0.08)] flex flex-wrap gap-4 text-xs font-mono uppercase">
              {footer.socials.map((social) => (
                <span key={social.label} className="text-[#A3A3A3]">
                  {social.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A3A3A3] gap-4">
          <p>© {brand.copyrightYear} {brand.wordmark}. All rights reserved.</p>
          <p className="text-[11px] font-mono tracking-wider uppercase text-[#A3A3A3]/70">
            Design & Build Studio · Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
};
