import React, { useState, useRef, useCallback } from 'react';

interface CompareSliderProps {
  beforeImage: string;
  beforeAlt: string;
  beforeLabel?: string;
  afterImage: string;
  afterAlt: string;
  afterLabel?: string;
  className?: string;
}

export const CompareSlider: React.FC<CompareSliderProps> = ({
  beforeImage,
  beforeAlt,
  beforeLabel = 'What you approve',
  afterImage,
  afterAlt,
  afterLabel = 'What we deliver',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setIsDragging(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 2));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 2));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full overflow-hidden select-none touch-none aspect-[16/10] sm:aspect-[16/9] bg-[#1E1B1B] border border-[rgba(244,235,221,0.12)] rounded-none cursor-ew-resize ${className}`}
    >
      {/* Background (After / Built) image */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
        draggable={false}
      />
      
      {/* Badge: Built */}
      <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-[#0E0E0E]/85 backdrop-blur-xs border border-[rgba(244,235,221,0.2)] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F4EBDD] pointer-events-none">
        {afterLabel}
      </div>

      {/* Foreground (Before / 3D Render) image with clip-path */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          draggable={false}
        />
        {/* Badge: Render */}
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-[#0E0E0E]/85 backdrop-blur-xs border border-[rgba(244,235,221,0.2)] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B8975A] pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Divider line and draggable handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#F4EBDD] pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* Accessible focusable slider handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          aria-label="Compare 3D render to completed built project"
          onKeyDown={handleKeyDown}
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-[#0E0E0E] border-2 border-[#B8975A] text-[#F4EBDD] flex items-center justify-center shadow-lg transition-transform focus-visible:outline-2 focus-visible:outline-[#B8975A] focus-visible:outline-offset-2 pointer-events-auto cursor-grab ${
            isDragging ? 'scale-110 cursor-grabbing bg-[#1E1B1B]' : 'hover:scale-105'
          }`}
        >
          <svg
            className="w-4 h-4 text-[#B8975A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
