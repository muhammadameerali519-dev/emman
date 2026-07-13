import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningScreenProps {
  onComplete: () => void;
}

export default function OpeningScreen({ onComplete }: OpeningScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  // Realistic non-linear progress counter (fast start, slow pause at 78%, fast finish)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startCounter = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDoneLoading(true);
          return 100;
        }

        // Variable speed based on current progress percentage
        let increment = 1;
        if (prev < 30) {
          increment = Math.floor(Math.random() * 8) + 4; // fast start
        } else if (prev < 75) {
          increment = Math.floor(Math.random() * 4) + 1; // steady progress
        } else if (prev < 88) {
          increment = Math.random() > 0.7 ? 1 : 0; // micro-pause/slow-down to simulate assets loading
        } else {
          increment = Math.floor(Math.random() * 6) + 3; // fast final rush
        }

        const nextVal = prev + increment;
        return nextVal > 100 ? 100 : nextVal;
      });
    };

    timer = setInterval(startCounter, 60);
    return () => clearInterval(timer);
  }, []);

  // Split-letter container variants
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleString = "EMAAN ALI";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDoneLoading || progress < 100 ? (
        <motion.div
          id="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-16 bg-[#5b1030] text-[#ffe1ec] overflow-hidden select-none"
        >
          {/* Subtle Grid Guidelines background for raw textile / canvas drafting motif */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="w-full h-full border border-[#ffe1ec]/30 flex flex-wrap">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1/4 h-1/4 border-r border-b border-[#ffe1ec]/20" />
              ))}
            </div>
          </div>

          {/* Top Metadata row */}
          <div className="z-10 flex justify-between items-start font-mono text-xxs md:text-xs tracking-[0.2em] text-[#ffb9d4]">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              PORTFOLIO COLLECTION
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-right"
            >
              SIALKOT, PUNJAB
            </motion.span>
          </div>

          {/* Central Elegant Typographic Reveal */}
          <div className="z-10 flex flex-col items-center justify-center flex-grow py-12">
            {/* Title */}
            <motion.div
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-[0.25em] md:gap-[0.4em] overflow-hidden"
            >
              {titleString.split('').map((char, index) => {
                if (char === ' ') {
                  return <span key={index} className="w-4 md:w-8" />;
                }
                return (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="font-serif italic text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight select-none text-transparent bg-clip-text bg-gradient-to-br from-white via-[#ffe1ec] to-[#ffb9d4]"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Subheading under title */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
              className="mt-6 font-mono text-xs md:text-sm tracking-[0.25em] text-[#ff4f93] uppercase text-center font-bold"
            >
              Mixed Media Textile & Oil Artist
            </motion.p>
          </div>

          {/* Bottom Loading Progress and Stats row */}
          <div className="z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Left side: Est detail */}
            <div className="font-mono text-xxs md:text-xs tracking-[0.15em] text-[#b5507c] uppercase space-y-1">
              <p>ESTABLISHED 2016</p>
              <p>RAW TEXTILES · INDIGO WASHES · IMPASTO OIL</p>
            </div>

            {/* Right side: Loading percentage with elegant fine-line track bar */}
            <div className="w-full md:w-80 flex flex-col gap-2 font-mono text-xs md:text-sm">
              <div className="flex justify-between items-baseline tracking-widest text-[#ffe1ec]">
                <span className="text-xxs uppercase tracking-[0.2em] text-[#b5507c]">INITIALIZING EXHIBIT</span>
                <span className="font-bold text-lg md:text-xl text-[#ff4f93]">{progress}%</span>
              </div>
              <div className="h-[2px] w-full bg-[#ffe1ec]/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#ff4f93] via-[#ff2e77] to-[#ffe1ec]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Slicing / Sliding curtain panel animation during reveal */
        <div key="curtain-reveal" className="fixed inset-0 z-50 pointer-events-none flex flex-col">
          {/* Top half sliding up */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
            className="h-1/2 w-full bg-[#5b1030] border-b border-[#ff4f93]/20 flex items-end justify-center"
          >
            <div className="w-full h-[1px] bg-[#ff4f93]/30 shadow-[0_0_12px_rgba(255,79,147,0.8)]" />
          </motion.div>

          {/* Bottom half sliding down */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
            className="h-1/2 w-full bg-[#5b1030] border-t border-[#ff4f93]/20 flex items-start justify-center"
          >
            <div className="w-full h-[1px] bg-[#ff4f93]/30 shadow-[0_0_12px_rgba(255,79,147,0.8)]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
