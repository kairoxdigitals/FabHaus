import React from 'react';
import { Mail, MessageCircle, Phone, MapPin, Globe } from 'lucide-react';
import { SITE_CONTENT } from '@/src/data/content';
import { Reveal } from '@/src/components/ui/Reveal';

export const Contact: React.FC = () => {
  const {
    label,
    heading,
    subtext,
    officeAddress,
    addressPlaceholder,
    phone,
    email,
    website,
    mailtoSubject,
    whatsappNumber,
    whatsappPrefill,
    hasMap,
    hasQrCode,
  } = SITE_CONTENT.contact;

  const mailtoUrl = email.startsWith('[')
    ? 'mailto:contact@fabhaus.in'
    : `mailto:${email}?subject=${encodeURIComponent(mailtoSubject)}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappPrefill
  )}`;

  return (
    <section
      id="contact"
      aria-label="Start Your Project"
      className="w-full bg-[#0E0E0E] text-[#F4EBDD] py-20 sm:py-28 lg:py-32 select-none hairline-b"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading and Consultation Block */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal type="text">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] font-semibold block mb-3">
                  {label}
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F4EBDD] leading-[1.05] mb-6">
                  {heading}
                </h2>
                <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-8 max-w-xl">
                  {subtext}
                </p>
              </Reveal>

              {/* Brand Red Block: Book a consultation */}
              <Reveal type="card" delay={0.15}>
                <div className="p-8 sm:p-10 bg-[#9E1B24] text-white mb-8 border border-[#9E1B24]/40">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-wide">
                    Book a consultation
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                    Visit our office or talk to our team about your villa, apartment, farmhouse or commercial project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0E0E0E] text-[#F4EBDD] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#1E1B1B] transition-colors focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <Mail className="w-4 h-4 text-[#B8975A]" aria-hidden="true" />
                      <span>Send Email</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#F4EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                      <span>WhatsApp</span>
                      <span className="text-xs" aria-hidden="true">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Office Address & Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <Reveal type="card" delay={0.1}>
              <div className="p-6 sm:p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#B8975A] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-1">
                      Office Location
                    </span>
                    <p className="text-base font-semibold text-[#F4EBDD] leading-snug">
                      {officeAddress}
                    </p>
                    <p className="text-xs text-[#A3A3A3] mt-1 font-mono">
                      {addressPlaceholder}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal type="card" delay={0.2}>
              <div className="p-6 sm:p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)]">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#B8975A] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-1">
                      Email
                    </span>
                    <p className="text-sm sm:text-base font-mono font-medium text-[#F4EBDD]">
                      {email}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal type="card" delay={0.3}>
              <div className="p-6 sm:p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)]">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#B8975A] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-1">
                      Direct Line
                    </span>
                    <p className="text-sm sm:text-base font-mono font-medium text-[#F4EBDD]">
                      {phone}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal type="card" delay={0.4}>
              <div className="p-6 sm:p-8 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)]">
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-[#B8975A] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8975A] block mb-1">
                      Web Portal
                    </span>
                    <p className="text-sm sm:text-base font-mono font-medium text-[#F4EBDD]">
                      {website}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Optional Map Facade or QR code if configured by client */}
            {hasMap && (
              <div className="p-4 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] text-center text-xs text-[#A3A3A3]">
                [Map Facade]
              </div>
            )}
            {hasQrCode && (
              <div className="p-4 bg-[#1E1B1B] border border-[rgba(244,235,221,0.08)] text-center text-xs text-[#A3A3A3]">
                [QR Code]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
