import { EXHIBITIONS } from '../data';

export default function Exhibitions() {
  return (
    <section
      id="exhibitions"
      className="relative py-24 px-6 md:px-16 bg-[#ffe1ec] border-b-4 border-[#5b1030]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-4 text-center md:text-left">
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#b5507c] uppercase block font-bold">
            TIMELINE · EXHIBITIONS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5b1030]">
            Selected <span className="italic text-[#ff4f93]">Exhibitions</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#b5507c] max-w-2xl font-bold">
            A history of solo representations and group collections presenting the intersection of industrial Punjab and woven craft.
          </p>
        </div>

        {/* Table / List View */}
        <div className="overflow-x-auto border-3 border-[#5b1030] rounded-2xl bg-[#ffd0e0]/25 shadow-md">
          <table className="w-full text-left border-collapse font-bold">
            <thead>
              <tr className="bg-[#5b1030] text-[#ffe1ec] font-mono text-xs tracking-widest border-b-3 border-[#5b1030]">
                <th className="py-4 px-6 md:px-10">YEAR</th>
                <th className="py-4 px-6 md:px-10">TITLE</th>
                <th className="py-4 px-6 md:px-10">VENUE & CITY</th>
                <th className="py-4 px-6 md:px-10 text-right">TYPE</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#5b1030]/20 font-sans text-sm md:text-base text-[#5b1030]">
              {EXHIBITIONS.map((ex) => (
                <tr
                  key={ex.id}
                  className="hover-trigger hover:bg-[#ffd0e0] transition-colors duration-300 cursor-default group focus-within:bg-[#ffd0e0] outline-none"
                  tabIndex={0}
                >
                  {/* Year */}
                  <td className="py-6 px-6 md:px-10 font-mono text-xs tracking-wider text-[#b5507c] group-hover:text-[#ff4f93] transition-colors">
                    {ex.year}
                  </td>
                  
                  {/* Title */}
                  <td className="py-6 px-6 md:px-10 font-serif italic text-base md:text-lg text-[#5b1030] font-extrabold">
                    {ex.title}
                  </td>
                  
                  {/* Venue & City */}
                  <td className="py-6 px-6 md:px-10 text-sm md:text-base text-[#5b1030]">
                    <span className="block">{ex.venue}</span>
                    <span className="text-xs text-[#b5507c] block">{ex.city}, Pakistan</span>
                  </td>
                  
                  {/* Type */}
                  <td className="py-6 px-6 md:px-10 text-right">
                    <span className={`inline-block py-1 px-3.5 rounded-full font-mono text-[10px] tracking-wider uppercase border-2 ${
                      ex.type === 'Solo' 
                        ? 'bg-[#ff4f93]/10 text-[#ff4f93] border-[#ff4f93]/20 group-hover:bg-[#ff4f93] group-hover:text-white' 
                        : 'bg-[#5b1030]/10 text-[#5b1030] border-[#5b1030]/20 group-hover:bg-[#5b1030] group-hover:text-pink-100'
                    } transition-colors`}>
                      {ex.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
