import React from 'react';
import { ArrowUp, Instagram, Mail, Globe, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#5b1030] text-[#ffe1ec] py-16 px-6 md:px-16 border-t-4 border-[#ff4f93] z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left - Brand Signature */}
        <div className="space-y-2 text-center md:text-left">
          <span className="font-serif italic text-xl md:text-2xl font-extrabold tracking-tight text-white block">
            EMAAN ALI
          </span>
          <span className="font-mono text-xxs tracking-widest text-[#ff4f93] uppercase block font-bold">
            PAINTER & MIXED MEDIA ARTIST · SIALKOT, PUNJAB, PK
          </span>
        </div>

        {/* Center - Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://instagram.com/emaan_ali_emaan1616"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-trigger text-[#ffe1ec] hover:text-[#ff4f93] transition-colors focus:outline-2 focus:outline-fuchsia-400 p-2 rounded-full border-2 border-[#ffe1ec]/25"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://artsy.net/emaan-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-trigger text-[#ffe1ec] hover:text-[#ff4f93] transition-colors focus:outline-2 focus:outline-fuchsia-400 p-2 rounded-full border-2 border-[#ffe1ec]/25"
            aria-label="Artsy Portfolio"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@emaanali.studio"
            className="hover-trigger text-[#ffe1ec] hover:text-[#ff4f93] transition-colors focus:outline-2 focus:outline-fuchsia-400 p-2 rounded-full border-2 border-[#ffe1ec]/25"
            aria-label="Email Studio"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right - Back to Top */}
        <div className="flex items-center">
          <button
            onClick={handleScrollToTop}
            className="hover-trigger group flex items-center gap-2 font-mono text-xs tracking-widest text-[#ffe1ec] hover:text-[#ff4f93] transition-colors focus:outline-2 focus:outline-fuchsia-400 p-2.5 rounded border-2 border-[#ffe1ec]/10 hover:border-[#ff4f93]/30"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Sub-Footer Copyright block */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-[#ffe1ec]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider text-[#b5507c] font-bold">
        <span>© {currentYear} EMAAN ALI. ALL RIGHTS RESERVED.</span>
        <span className="flex items-center gap-1.5">
          STITCHED WITH LOVE IN SIALKOT, PUNJAB <ArrowRight className="w-3 h-3 text-[#ff4f93]" />
        </span>
      </div>
    </footer>
  );
}
