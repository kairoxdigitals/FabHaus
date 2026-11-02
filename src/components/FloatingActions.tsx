import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Instagram, ArrowUpRight, X } from 'lucide-react';
import { SITE_CONTENT } from '@/src/data/content';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { whatsappNumber, phone, instagramUrl, hasInstagram } = SITE_CONTENT.floatingActions;

  useEffect(() => {
    // Fade in 0.3s after load per spec section 5
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Dismiss on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Dismiss on Escape key & return focus to trigger
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    SITE_CONTENT.contact.whatsappPrefill
  )}`;
  const telUrl = phone.startsWith('[') ? '#contact' : `tel:${phone.replace(/[\[\]\s()-]/g, '')}`;

  return (
    <aside
      aria-label="Quick Communication Channels"
      className={`fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-300 safe-area-bottom pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Pop-Up Labeled Pills Menu */}
      <div
        ref={popoverRef}
        role="dialog"
        aria-label="Social and Direct Contact Channels"
        aria-hidden={!isOpen}
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ease-out origin-bottom-right pointer-events-auto ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* WhatsApp Pill */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isOpen ? 0 : -1}
          aria-label="Direct WhatsApp Chat (opens in new tab)"
          className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#181616]/95 backdrop-blur-md border border-[#25D366]/40 text-[#F4EBDD] hover:border-[#25D366] hover:bg-[#25D366]/10 shadow-2xl transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#25D366]"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-[#0E0E0E] transition-colors">
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-xs font-semibold tracking-wide text-[#F4EBDD] group-hover:text-white">
              WhatsApp
            </span>
            <span className="text-[10px] text-[#A3A3A3] font-mono leading-tight">
              Chat with team
            </span>
          </div>
          <span className="text-xs text-[#25D366] opacity-70 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        {/* Direct Call Pill */}
        <a
          href={telUrl}
          tabIndex={isOpen ? 0 : -1}
          aria-label={`Call studio: ${phone}`}
          className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#181616]/95 backdrop-blur-md border border-[#B8975A]/40 text-[#F4EBDD] hover:border-[#B8975A] hover:bg-[#B8975A]/10 shadow-2xl transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#B8975A]"
        >
          <div className="w-8 h-8 rounded-full bg-[#B8975A]/20 flex items-center justify-center text-[#B8975A] group-hover:bg-[#B8975A] group-hover:text-[#0E0E0E] transition-colors">
            <Phone className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-xs font-semibold tracking-wide text-[#F4EBDD] group-hover:text-[#B8975A]">
              Direct Call
            </span>
            <span className="text-[10px] text-[#A3A3A3] font-mono leading-tight">
              {phone.startsWith('[') ? 'Call Studio' : phone}
            </span>
          </div>
          <span className="text-xs text-[#B8975A] opacity-70 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </a>

        {/* Instagram Pill */}
        {hasInstagram && instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            aria-label="Fab Haus Instagram (opens in new tab)"
            className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#181616]/95 backdrop-blur-md border border-white/15 text-[#F4EBDD] hover:border-[#E1306C] hover:bg-[#E1306C]/10 shadow-2xl transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#E1306C]"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F4EBDD] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-left pr-1">
              <span className="text-xs font-semibold tracking-wide text-[#F4EBDD] group-hover:text-[#E1306C]">
                Instagram
              </span>
              <span className="text-[10px] text-[#A3A3A3] font-mono leading-tight">
                @fabhaus.in
              </span>
            </div>
            <span className="text-xs text-[#E1306C] opacity-70 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>

      {/* Floating Circular Fab Haus Favicon Trigger Badge */}
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={isOpen ? 'Close contact channels' : 'Open Fab Haus communication channels'}
          className="relative w-14 h-14 rounded-full p-0.5 bg-[#0E0E0E] border-2 border-[#B8975A]/70 hover:border-[#B8975A] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#B8975A] cursor-pointer flex items-center justify-center overflow-hidden group"
        >
          {/* Logo Emblem Image */}
          <img
            src="/assets/aistudio/Fab_Haus_Circular_Logo_5fd5c0e0.png"
            alt="Fab Haus Emblem"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Active Overlay Indicator */}
          {isOpen && (
            <div
              className="absolute inset-0 bg-[#0E0E0E]/80 backdrop-blur-xs flex items-center justify-center text-[#B8975A] transition-opacity"
              aria-hidden="true"
            >
              <X className="w-6 h-6" />
            </div>
          )}

          {/* Pulsing subtle presence indicator dot when closed */}
          {!isOpen && (
            <span
              className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#0E0E0E]"
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Maintained quick "Get in touch" anchor directly below it */}
      <div className="pointer-events-auto">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#9E1B24] text-white text-[11px] font-semibold uppercase tracking-[0.16em] shadow-2xl hover:bg-[#80141C] transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
        >
          <span>Get in touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
};
