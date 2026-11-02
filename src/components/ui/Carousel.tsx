import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  options?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  options = { loop: true },
  plugins = [],
  className = '',
  showArrows = true,
  showDots = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {(showArrows || showDots) && (
        <div className="flex items-center justify-between mt-6">
          {showDots && (
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex ? 'true' : 'false'}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#FBBF24] focus-visible:outline-offset-2 ${
                    index === selectedIndex
                      ? 'bg-[#FBBF24] w-8'
                      : 'bg-[#F2F0EB]/30 hover:bg-[#F2F0EB]/60'
                  }`}
                />
              ))}
            </div>
          )}

          {showArrows && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="w-10 h-10 border border-[#F2F0EB]/20 bg-[#141414] hover:bg-[#1E1E1E] text-[#F2F0EB] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#FBBF24]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next slide"
                className="w-10 h-10 border border-[#F2F0EB]/20 bg-[#141414] hover:bg-[#1E1E1E] text-[#F2F0EB] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#FBBF24]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
