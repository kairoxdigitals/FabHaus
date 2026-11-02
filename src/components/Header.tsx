import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE_CONTENT } from '@/src/data/content';
import { useActiveSection } from '@/src/hooks/useActiveSection';
import { ExternalLink } from '@/src/components/ui/ExternalLink';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkAccordionOpen, setMobileWorkAccordionOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const activeSection = useActiveSection(
    ['home', 'about', 'disciplines', 'what-we-do', 'prefab-lgsf', 'fh-modulars', 'process', 'contact'],
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for dropdown and mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (workDropdownOpen) {
          setWorkDropdownOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [workDropdownOpen, mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const workDropdown = SITE_CONTENT.navigation.workDropdown;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E0E0E] hairline-b shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0E0E0E]/95 via-[#0E0E0E]/70 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Wordmark (flat gold per catalogue spec) */}
        <a
          href="#home"
          className="text-lg md:text-xl font-bold tracking-tight text-[#B8975A] hover:brightness-110 transition-colors focus-visible:outline-2 focus-visible:outline-[#B8975A]"
        >
          {SITE_CONTENT.brand.wordmark}
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium"
          aria-label="Main Navigation"
        >
          <a
            href="#home"
            className={`transition-colors py-1 relative ${
              activeSection === 'home' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8975A]" />
            )}
          </a>

          <a
            href="#about"
            className={`transition-colors py-1 relative ${
              activeSection === 'about' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
            }`}
          >
            About
            {activeSection === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8975A]" />
            )}
          </a>

          {/* Work Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setWorkDropdownOpen(true)}
            onMouseLeave={() => setWorkDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setWorkDropdownOpen((prev) => !prev)}
              aria-expanded={workDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8975A] ${
                activeSection === 'what-we-do' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
              }`}
            >
              <span>Work</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  workDropdownOpen ? 'rotate-180 text-[#B8975A]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            {workDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-72 bg-[#1E1B1B] border border-[rgba(244,235,221,0.12)] shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8975A] px-3 py-1 mb-1 border-b border-[rgba(244,235,221,0.08)]">
                  Portfolio Disciplines
                </div>
                {workDropdown.map((item) => (
                  <div key={item.label} className="p-2 hover:bg-[#0E0E0E]/60 transition-colors">
                    {item.href.startsWith('[') ? (
                      <a
                        href="#what-we-do"
                        onClick={() => setWorkDropdownOpen(false)}
                        className="text-xs font-semibold text-[#F4EBDD] hover:text-[#B8975A] flex items-center justify-between w-full"
                      >
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <ExternalLink
                        href={item.href}
                        className="text-xs font-semibold text-[#F4EBDD] hover:text-[#B8975A] flex items-center justify-between w-full"
                      >
                        {item.label}
                      </ExternalLink>
                    )}
                    <p className="text-[11px] text-[#A3A3A3] normal-case tracking-normal mt-0.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="#prefab-lgsf"
            className={`transition-colors py-1 relative ${
              activeSection === 'prefab-lgsf' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
            }`}
          >
            Prefab & LGSF
            {activeSection === 'prefab-lgsf' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8975A]" />
            )}
          </a>

          <a
            href="#fh-modulars"
            className={`transition-colors py-1 relative ${
              activeSection === 'fh-modulars' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
            }`}
          >
            FH_Modulars
            {activeSection === 'fh-modulars' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8975A]" />
            )}
          </a>

          <a
            href="#process"
            className={`transition-colors py-1 relative ${
              activeSection === 'process' ? 'text-[#B8975A]' : 'text-[#F4EBDD]/90 hover:text-[#B8975A]'
            }`}
          >
            Process
            {activeSection === 'process' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8975A]" />
            )}
          </a>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#9E1B24] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#80141C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9E1B24]"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open mobile menu"
            className="lg:hidden p-2 text-[#F4EBDD] hover:text-[#B8975A] focus-visible:outline-2 focus-visible:outline-[#B8975A]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div
            ref={drawerRef}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0E0E0E] border-l border-[rgba(244,235,221,0.1)] p-6 flex flex-col justify-between overflow-y-auto safe-area-bottom"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(244,235,221,0.1)]">
                <span className="text-base font-bold text-[#B8975A]">
                  {SITE_CONTENT.brand.wordmark}
                </span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                  className="p-2 text-[#F4EBDD] hover:text-[#B8975A] focus-visible:outline-2 focus-visible:outline-[#B8975A]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav
                className="flex flex-col gap-4 mt-8 text-sm uppercase tracking-[0.18em]"
                aria-label="Mobile Drawer Navigation"
              >
                <a
                  href="#home"
                  onClick={closeMobileMenu}
                  className={`py-2 transition-colors border-b border-[rgba(244,235,221,0.06)] ${
                    activeSection === 'home' ? 'text-[#B8975A]' : 'text-[#F4EBDD]'
                  }`}
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className={`py-2 transition-colors border-b border-[rgba(244,235,221,0.06)] ${
                    activeSection === 'about' ? 'text-[#B8975A]' : 'text-[#F4EBDD]'
                  }`}
                >
                  About
                </a>

                {/* Mobile Work Accordion */}
                <div className="border-b border-[rgba(244,235,221,0.06)] pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileWorkAccordionOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full py-2 text-left uppercase tracking-[0.18em] text-[#F4EBDD]"
                  >
                    <span>Work</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 text-[#B8975A] ${
                        mobileWorkAccordionOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileWorkAccordionOpen && (
                    <div className="pl-4 pt-2 pb-2 flex flex-col gap-3">
                      {workDropdown.map((item) => (
                        <div key={item.label}>
                          {item.href.startsWith('[') ? (
                            <a
                              href="#what-we-do"
                              onClick={closeMobileMenu}
                              className="text-xs font-semibold text-[#F4EBDD] hover:text-[#B8975A]"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <ExternalLink
                              href={item.href}
                              className="text-xs font-semibold text-[#F4EBDD] hover:text-[#B8975A]"
                            >
                              {item.label}
                            </ExternalLink>
                          )}
                          <p className="text-[11px] text-[#A3A3A3] normal-case mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#prefab-lgsf"
                  onClick={closeMobileMenu}
                  className={`py-2 transition-colors border-b border-[rgba(244,235,221,0.06)] ${
                    activeSection === 'prefab-lgsf' ? 'text-[#B8975A]' : 'text-[#F4EBDD]'
                  }`}
                >
                  Prefab & LGSF
                </a>

                <a
                  href="#fh-modulars"
                  onClick={closeMobileMenu}
                  className={`py-2 transition-colors border-b border-[rgba(244,235,221,0.06)] ${
                    activeSection === 'fh-modulars' ? 'text-[#B8975A]' : 'text-[#F4EBDD]'
                  }`}
                >
                  FH_Modulars
                </a>

                <a
                  href="#process"
                  onClick={closeMobileMenu}
                  className={`py-2 transition-colors border-b border-[rgba(244,235,221,0.06)] ${
                    activeSection === 'process' ? 'text-[#B8975A]' : 'text-[#F4EBDD]'
                  }`}
                >
                  Process
                </a>
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-8 border-t border-[rgba(244,235,221,0.1)] flex flex-col gap-4">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full py-3.5 bg-[#9E1B24] text-white text-center text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#80141C] transition-colors"
              >
                Get in touch
              </a>
              <div className="text-[11px] text-[#A3A3A3] text-center font-mono">
                {SITE_CONTENT.brand.city} · Fab Haus Studio
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
