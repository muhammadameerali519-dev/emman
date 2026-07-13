import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function FloatingContact() {
  const instagramUrl = 'https://instagram.com/emaan_ali_emaan1616';

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Instagram Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', damping: 15, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center group"
      >
        <span className="absolute right-14 bg-[#5b1030] text-[#ffe1ec] text-xs font-mono tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-[#ff4f93]/30 uppercase font-bold">
          Follow on Instagram
        </span>
        
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_4px_15px_rgba(238,42,123,0.4)] relative"
          aria-label="Instagram Contact"
        >
          {/* Pulsing visual halo */}
          <div className="absolute inset-0 rounded-full bg-[#ee2a7b] opacity-20 animate-ping -z-10" />
          <Instagram className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
