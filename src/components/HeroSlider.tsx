import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react';
import { SITE_CONTENT, HeroSlide } from '@/src/data/content';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';

export const HeroSlider: React.FC = () => {
  const slides: HeroSlide[] = SITE_CONTENT.hero.slides;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = slides.length;
  const hasMultipleSlides = totalSlides > 1;

  const goToNextSlide = useCallback(() => {
    if (!hasMultipleSlides) return;
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [hasMultipleSlides, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (!hasMultipleSlides) return;
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [hasMultipleSlides, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (!hasMultipleSlides || prefersReducedMotion || !isPlaying || isHovered || isFocused) {
      return;
    }

    const timer = setInterval(() => {
      goToNextSlide();
    }, SITE_CONTENT.hero.autoplayIntervalMs || 6000);

    return () => clearInterval(timer);
  }, [hasMultipleSlides, isPlaying, isHovered, isFocused, prefersReducedMotion, goToNextSlide]);

  // Pause autoplay when browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else if (!prefersReducedMotion) {
        setIsPlaying(true);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [prefersReducedMotion]);

  // Keyboard navigation when slider is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextSlide();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNextSlide();
    } else if (distance < -minSwipeDistance) {
      goToPrevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      id="home"
      aria-label="Hero Showcase"
      aria-roledescription="carousel"
      className="relative w-full h-[100svh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#0E0E0E] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      {/* Slides Deck */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlideIndex;

        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalSlides}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Ken Burns zoom on active slide */}
            <div className="absolute inset-0 overflow-hidden">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive && !prefersReducedMotion ? 'animate-ken-burns' : 'scale-100'
                  }`}
                />
              ) : (
                <div className="w-full h-full bg-[#1E1B1B] flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B8975A]">
                    {slide.placeholderLabel}
                  </span>
                </div>
              )}
              {/* Dark overlay: at least 40% per WCAG AA text contrast requirement */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-[#0E0E0E]/45" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28 lg:pb-32 hero-slide-content">
              <div className="max-w-4xl">
                {/* Uppercase Slide Label */}
                <div
                  className={`text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#B8975A] mb-3 sm:mb-5 transition-all duration-700 delay-100 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.label}
                </div>

                {/* Headline */}
                <h1
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F4EBDD] leading-[0.98] mb-3 sm:mb-5 hero-headline transition-all duration-700 delay-200 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.headline}
                </h1>

                {/* Tagline */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-[#F4EBDD]/90 max-w-2xl font-light leading-relaxed mb-4 sm:mb-6 hero-tagline transition-all duration-700 delay-300 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.tagline}
                </p>

                {/* Mandatory catalogue footnote if applicable */}
                {slide.footnote && (
                  <p
                    className={`text-xs italic text-[#A3A3A3] mb-6 max-w-xl transition-all duration-700 delay-350 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    *{slide.footnote.replace(/^\*/, '')}
                  </p>
                )}

                {/* Action CTA Button */}
                <div
                  className={`transition-all duration-700 delay-400 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <a
                    href={slide.buttonHref}
                    className="inline-flex items-center gap-3 px-7 py-4 bg-[#9E1B24] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#80141C] transition-all group focus-visible:outline-2 focus-visible:outline-[#9E1B24]"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Controls Overlay (shown only when multiple slides exist) */}
      {hasMultipleSlides && (
        <div className="absolute bottom-8 left-5 right-5 sm:left-6 sm:right-6 lg:left-12 lg:right-12 z-30 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
          {/* Slide Dots and Pause/Play Button */}
          <div className="flex items-center gap-4 pointer-events-auto">
            {/* Pause / Play Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="w-9 h-9 border border-[rgba(244,235,221,0.2)] bg-[#0E0E0E]/80 backdrop-blur-xs text-[#F4EBDD] flex items-center justify-center hover:bg-[#1E1B1B] hover:border-[#B8975A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8975A]"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-[#B8975A]" />
              ) : (
                <Play className="w-3.5 h-3.5 text-[#B8975A] translate-x-0.5" />
              )}
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentSlideIndex}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#B8975A] ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-[#B8975A]'
                      : 'w-2 bg-[#F4EBDD]/40 hover:bg-[#F4EBDD]/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Previous / Next Arrow Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 border border-[rgba(244,235,221,0.2)] bg-[#0E0E0E]/80 backdrop-blur-xs text-[#F4EBDD] flex items-center justify-center hover:bg-[#1E1B1B] hover:border-[#B8975A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8975A]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next slide"
              className="w-10 h-10 border border-[rgba(244,235,221,0.2)] bg-[#0E0E0E]/80 backdrop-blur-xs text-[#F4EBDD] flex items-center justify-center hover:bg-[#1E1B1B] hover:border-[#B8975A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8975A]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
