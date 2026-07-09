import { Instagram, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const instagramUrl = 'https://instagram.com/emaan_ali_emaan1616';

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 bg-[#ffd0e0] border-b-4 border-[#5b1030] text-center overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background graphic details */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full border-8 border-[#5b1030]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-[16px] border-[#ff4f93]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Label */}
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#b5507c] uppercase block font-bold">
          COLLABORATIONS & ACQUISITIONS
        </span>

        {/* Big Statement Heading */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#5b1030] leading-none tracking-tight">
          Let’s weave some <br />
          <span className="italic text-[#ff4f93]">magic</span> together.
        </h2>

        {/* Description */}
        <p className="font-sans text-base md:text-xl text-[#5b1030] max-w-xl mx-auto leading-relaxed font-bold">
          Whether you are looking to acquire original canvases, commission a custom textile installation, or simply say hello — my Instagram is open.
        </p>

        {/* Glowing Pulsing Button (heartbeat style) */}
        <div className="pt-4 flex justify-center items-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-trigger relative inline-flex items-center gap-3 px-8 py-5 md:px-12 md:py-6 rounded-full bg-[#ff4f93] hover:bg-[#ff2e77] text-white font-mono text-xs md:text-sm tracking-[0.2em] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-ring focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-4"
          >
            <Instagram className="w-5 h-5 text-pink-100" />
            <span>@EMAAN_ALI_EMAAN1616</span>
            <ArrowUpRight className="w-4 h-4 text-pink-200" />
          </a>
        </div>
        
        <p className="font-mono text-xxs text-[#b5507c] uppercase tracking-widest pt-2">
          Typically responds within 24 hours
        </p>
      </div>
    </section>
  );
}
