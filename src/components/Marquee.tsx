export default function Marquee() {
  const tickerItems = [
    'ORIGINAL WORKS',
    'LIMITED PRINTS',
    'COMMISSIONS OPEN',
    'ARCHIVE 2016–2026',
  ];

  // Repeat items to fill up the track for infinite animation
  const repeatedItems = Array(12).fill(tickerItems).flat();

  return (
    <section
      id="marquee"
      className="relative bg-[#5b1030] text-[#ffe1ec] py-6 md:py-8 overflow-hidden border-y-4 border-[#ff4f93] z-10"
    >
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm md:text-lg font-mono tracking-widest font-bold">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span>{item.toUpperCase()}</span>
              <span className="text-[#ff4f93] text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
