/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Gallery from './components/Gallery';
import PullQuote from './components/PullQuote';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import OpeningScreen from './components/OpeningScreen';

export default function App() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  // Lock scrolling during the intro loading screen phase
  useEffect(() => {
    if (!isIntroFinished) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isIntroFinished]);

  return (
    <div className="relative min-h-screen bg-[#ffe1ec] text-[#5b1030] selection:bg-[#ff4f93] selection:text-white overflow-x-hidden antialiased">
      {/* Animated Gallery Preloader Overlay */}
      <OpeningScreen onComplete={() => {
        setIsIntroFinished(true);
        setShowMainContent(true);
      }} />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main content with high-end fade-and-scale entry reveal */}
      {showMainContent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating Navigation Bar */}
          <Navbar />

          {/* Main Layout Sections */}
          <main>
            {/* Hero Section (Loaded directly with its own staggered reveal) */}
            <Hero />

            {/* Marquee Strip */}
            <Marquee />

            {/* Selected Gallery Grid with scroll reveal */}
            <ScrollReveal>
              <Gallery />
            </ScrollReveal>

            {/* About the Artist Section with scroll reveal */}
            <ScrollReveal>
              <About />
            </ScrollReveal>

            {/* Centered Pull Quote Section with scroll reveal */}
            <ScrollReveal>
              <PullQuote />
            </ScrollReveal>

            {/* Exhibitions Timeline/Table with scroll reveal */}
            <ScrollReveal>
              <Exhibitions />
            </ScrollReveal>

            {/* Pulsing Contact CTA with scroll reveal */}
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </main>

          {/* Footer Section */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}


