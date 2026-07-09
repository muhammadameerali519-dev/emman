import { useState } from 'react';
import { ARTWORKS } from '../data';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState<typeof ARTWORKS[0] | null>(null);

  return (
    <section
      id="work"
      className="relative py-24 px-6 md:px-16 bg-[#ffe1ec] border-b-4 border-[#5b1030]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="space-y-4 text-center md:text-left">
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#b5507c] uppercase block font-bold">
            SELECTED WORKS · GALLERY
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5b1030]">
            Tactile Landscapes <span className="italic text-[#ff4f93]">&</span> Ancestral Threads
          </h2>
          <p className="font-sans text-sm md:text-base text-[#b5507c] max-w-2xl font-bold">
            Hover over each canvas to reveal its organic colors, industrial textures, and detailed composition notes. Click any piece for a full-screen display.
          </p>
        </div>

        {/* Gallery Grid - 3 Column (Responsive to 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTWORKS.map((art, index) => {
            const tiltClass = index % 2 === 0 ? 'group-hover:rotate-1' : 'group-hover:-rotate-1';
            
            return (
              <div
                key={art.id}
                onClick={() => setSelectedArt(art)}
                className="group hover-trigger relative aspect-[3/4] rounded-2xl overflow-hidden border-3 border-[#5b1030] bg-[#5b1030] shadow-md cursor-pointer transition-all duration-500 hover:shadow-2xl focus-within:ring-4 focus-within:ring-fuchsia-400 outline-none"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedArt(art);
                  }
                }}
              >
                {/* Image Component with Grayscale default & hover reveal */}
                <div className={`w-full h-full overflow-hidden transition-all duration-500 ${tiltClass}`}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Number Overlay in Upper Left */}
                <div className="absolute top-4 left-4 bg-[#ffe1ec] text-[#5b1030] font-mono text-xs font-bold py-1 px-2.5 rounded-full border-2 border-[#5b1030] z-20">
                  {art.number}
                </div>

                {/* Zoom Overlay Button on Hover */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Info Overlay Sliding Up on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#5b1030] via-[#5b1030]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end space-y-2 text-[#ffe1ec]">
                  <span className="font-mono text-[10px] tracking-widest text-[#ff4f93] uppercase font-bold">
                    {art.year} · {art.dimensions}
                  </span>
                  <h3 className="font-serif italic text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                    {art.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-pink-200 leading-snug font-bold">
                    {art.medium}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Full-screen display Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-[#5b1030]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 z-50 overflow-y-auto"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="relative bg-[#ffe1ec] rounded-3xl border-4 border-[#ff4f93] p-4 md:p-8 max-w-4xl w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto flex flex-col md:flex-row gap-6 md:gap-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 bg-[#5b1030] hover:bg-[#ff4f93] text-white p-2 rounded-full border-2 border-[#ff4f93] transition-colors focus:outline-2 focus:outline-fuchsia-400 z-50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Grid Column */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#5b1030] bg-[#5b1030] shadow-md">
                <img
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Modal Info Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-[#5b1030]">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest text-[#b5507c] uppercase block font-bold">
                  PIECE {selectedArt.number} · {selectedArt.year}
                </span>
                <h3 className="font-serif italic text-3xl sm:text-4xl font-extrabold leading-tight text-[#5b1030]">
                  {selectedArt.title}
                </h3>
              </div>

              <div className="space-y-4 font-bold">
                <div>
                  <h4 className="font-mono text-xxs tracking-wider text-[#b5507c] uppercase">Medium</h4>
                  <p className="font-sans text-sm md:text-base text-[#5b1030]">{selectedArt.medium}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xxs tracking-wider text-[#b5507c] uppercase">Dimensions</h4>
                  <p className="font-sans text-sm md:text-base text-[#5b1030]">{selectedArt.dimensions}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xxs tracking-wider text-[#b5507c] uppercase">Origin</h4>
                  <p className="font-sans text-sm md:text-base text-[#5b1030]">Handcrafted in Sialkot, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#5b1030]/10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedArt(null);
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-block text-center bg-[#ff4f93] hover:bg-[#ff2e77] text-white px-6 py-3 rounded-full font-mono text-xs tracking-widest font-bold transition-colors focus:outline-2 focus:outline-fuchsia-400"
                >
                  INQUIRE ABOUT THIS WORK
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
