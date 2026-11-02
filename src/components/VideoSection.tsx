import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { SITE_CONTENT } from '@/src/data/content';
import { Reveal } from '@/src/components/ui/Reveal';

export const VideoSection: React.FC = () => {
  const videoData = SITE_CONTENT.video;
  const [isPlaying, setIsPlaying] = useState(false);

  // Hidden if no video or client has not supplied a video URL per section 4
  if (!videoData.hasVideo || !videoData.videoUrl) {
    return null;
  }

  return (
    <section
      id="studio-video"
      aria-label="Studio Video Tour"
      className="w-full bg-[#141414] text-[#F2F0EB] py-24 sm:py-32 hairline-b"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <Reveal type="text">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FBBF24] block mb-3">
              Documentary
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F0EB] leading-tight mb-4">
              Inside the Atelier & Shop Floor.
            </h2>
          </Reveal>
        </div>

        <Reveal type="card" delay={0.1}>
          <div className="relative aspect-video w-full bg-[#0A0A0A] border border-[#F2F0EB]/10 overflow-hidden">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src={videoData.posterImage}
                  alt={videoData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/40 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Play video: ${videoData.title}`}
                    className="w-20 h-20 rounded-full bg-[#FBBF24] text-[#0A0A0A] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl focus-visible:outline-2 focus-visible:outline-[#FBBF24] focus-visible:outline-offset-4"
                  >
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                src={`${videoData.videoUrl}?autoplay=1`}
                title={videoData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
