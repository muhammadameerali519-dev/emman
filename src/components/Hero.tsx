import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  // Animation container variants for staggered children reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 80,
      },
    },
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#marquee');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-6 py-24 md:px-16 md:py-32 overflow-hidden bg-[#ffe1ec]"
    >
      {/* Drifting Soft Pink Blobs in Background (4 blobs, different sizes, locations, and speeds) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Blob 1 */}
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#ffd0e0] opacity-60 blur-3xl animate-drift-1"
          style={{ top: '10%', left: '5%' }}
        />
        {/* Blob 2 */}
        <div
          className="absolute w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-[#ffb9d4] opacity-50 blur-3xl animate-drift-2"
          style={{ bottom: '15%', right: '8%' }}
        />
        {/* Blob 3 */}
        <div
          className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#ffdce9] opacity-75 blur-2xl animate-drift-3"
          style={{ top: '40%', right: '25%' }}
        />
        {/* Blob 4 */}
        <div
          className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-[#ff99c4] opacity-30 blur-3xl animate-drift-4"
          style={{ bottom: '5%', left: '30%' }}
        />
      </div>

      <div className="z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-10"
        >
          {/* Eyebrow in label font */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#b5507c] uppercase font-bold"
          >
            Painter · Mixed Media · Est. Sialkot, Pakistan
          </motion.p>

          {/* Staggered Name Reveal */}
          <div className="overflow-hidden space-y-1 md:space-y-4">
            <motion.h1
              variants={itemVariants}
              className="font-serif italic font-extrabold text-7xl sm:text-8xl md:text-[11rem] leading-none text-[#5b1030] tracking-tight"
            >
              Emaan
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="font-serif italic font-extrabold text-7xl sm:text-8xl md:text-[11rem] leading-none text-[#5b1030] tracking-tight pl-8 md:pl-24"
            >
              Ali
            </motion.h1>
          </div>

          {/* Subtext about medium */}
          <motion.div variants={itemVariants} className="max-w-2xl pt-4">
            <p className="font-sans text-lg md:text-2xl text-[#5b1030] leading-relaxed font-bold">
              Crafting vibrant tactile narratives using raw indigo ink, impasto oils, and reclaimed sports-factory textiles. Born and sustained in Sialkot, Punjab.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <div className="z-10 flex justify-center items-center pb-4">
        <button
          onClick={handleScrollDown}
          className="group hover-trigger flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-[#b5507c] focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-4 rounded p-2"
          aria-label="Scroll to portfolio content"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-[#ff4f93] group-hover:text-[#ff2e77] transition-colors" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
