/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UtilityBar } from './components/UtilityBar';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { About } from './components/About';
import { RenderVsReality } from './components/RenderVsReality';
import { Disciplines } from './components/Disciplines';
import { WhatWeDo } from './components/WhatWeDo';
import { PrefabLGSF } from './components/PrefabLGSF';
import { LgsfComparison } from './components/LgsfComparison';
import { FHModulars } from './components/FHModulars';
import { MaterialsSpecs } from './components/MaterialsSpecs';
import { SignatureProjects } from './components/SignatureProjects';
import { Process } from './components/Process';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0E0E0E] text-[#F4EBDD] selection:bg-[#B8975A]/30 selection:text-[#F4EBDD]">
      {/* 0. Accessible Skip Link (First Focusable Element) */}
      <a
        href="#main-content"
        className="skip-link focus-visible:outline-2 focus-visible:outline-[#9E1B24]"
      >
        Skip to main content
      </a>

      {/* 1. Utility Bar (Thin strip above header; email/phone; hidden below 768px) */}
      <UtilityBar />

      {/* 2. Sticky Header with Work Dropdown & Mobile Drawer */}
      <Header />

      {/* Main Page Canvas */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* 3. Hero Slider (4 slides from catalogue, Ken Burns zoom, footnotes, controls) */}
        <HeroSlider />

        {/* 4. About (Light section, verified stats 9+, 250+, 25+, 2 cabin images) */}
        <About />

        {/* 5. Render vs Reality (Before/After drag compare slider) */}
        <RenderVsReality />

        {/* 6. One Roof, Four Disciplines (4 numbered cards + brand closing band) */}
        <Disciplines />

        {/* 7. What We Do: Architecture & Interiors (Segment cards with portfolio links) */}
        <WhatWeDo />

        {/* 8. Prefab & LGSF (Steel-framed construction, 3x-4x speed, 4 feature cards, typologies) */}
        <PrefabLGSF />

        {/* 9. LGSF vs Conventional (Accessible 8-row comparison table + mandatory footnote) */}
        <LgsfComparison />

        {/* 10. FH_Modulars Factory (Client and OEM partner panels, 4 production images) */}
        <FHModulars />

        {/* 11. Materials & Specifications (6-row specifications table + 4 outlined chips) */}
        <MaterialsSpecs />

        {/* 12. Signature Projects (Light section, 3 cards: Mysore, Prestige, Nagarbhavi) */}
        <SignatureProjects />

        {/* 13. Process (5 steps, 45-75 days red block with footnote, single-point accountability) */}
        <Process />

        {/* 14. Video Section (Poster facade; hidden if no video per catalogue) */}
        <VideoSection />

        {/* 15. Testimonials (Carousel; hidden if no catalogue reviews) */}
        <Testimonials />

        {/* 16. Contact (Annapoorneshwari Nagar office, mailto + WhatsApp, consultation block) */}
        <Contact />
      </main>

      {/* 17. Multi-column Footer */}
      <Footer />

      {/* 18. Floating Action Buttons (WhatsApp, Call, Instagram, Get in touch tab) */}
      <FloatingActions />
    </div>
  );
}
