import { PULL_QUOTE } from '../data';

export default function PullQuote() {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#5b1030] text-[#ffe1ec] text-center border-b-4 border-[#ff4f93] overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[15rem] leading-none text-white/5 font-serif font-black select-none pointer-events-none">
        “
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed tracking-tight text-white px-4 md:px-10">
          {PULL_QUOTE}
        </p>
        
        {/* Author Line */}
        <div className="pt-6 flex flex-col items-center justify-center space-y-2">
          <span className="w-12 h-[2px] bg-[#ff4f93]" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#ff4f93] uppercase font-bold">
            EMAAN ALI · ARTIST MANIFESTO
          </span>
        </div>
      </div>
    </section>
  );
}
