import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, RotateCcw, BookOpen, Layers, Check, Info, Heart, ArrowRight } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  tag: string;
  color: string;
  secondaryColor: string;
  description: string;
  sourcing: string;
  tactileNote: string;
  diaryExcerpt: string;
  drawingType: 'textile' | 'indigo' | 'impasto' | 'stitch';
}

const MATERIALS: Material[] = [
  {
    id: 'mat-1',
    name: 'Reclaimed Sports Textile Scraps',
    tag: 'Sialkot Factory Scraps',
    color: '#eae3d5', // raw cotton/canvas
    secondaryColor: '#5b1030',
    description: 'Heavyweight canvas, high-performance athletic fabrics, and synthetic leather salvaged directly from cutting-room floors of Sialkot sports-manufacturing units.',
    sourcing: 'Salvaged from waste piles near Sambrial & Head Marala cutting units, where soccer ball panels and cricket bags are pressed.',
    tactileNote: 'Rugged, stiff, printed with industrial stencil marks, factory stamps, and raw seam stitches.',
    diaryExcerpt: '"July 2024 — Gathered 12 kilograms of discarded panels from a football stitching cottage. These pieces have traveled through dozens of hands, holding a visceral memory of Sialkot\'s global kinetic output before they ever met my easel."',
    drawingType: 'textile',
  },
  {
    id: 'mat-2',
    name: 'Raw Chenab Indigo Washes',
    tag: 'Natural River Pigment',
    color: '#1a365d', // Deep indigo blue
    secondaryColor: '#4299e1',
    description: 'Pure, water-extracted organic indigo pigment mixed with natural gum arabic and water from the Chenab riverbed to create fluid, deep-staining watercolor washes.',
    sourcing: 'Extracted by hand in cooperation with traditional village dyers along the banks of the Chenab river.',
    tactileNote: 'Fluid, deeply absorbent, leaving rich matte sediment deposits with organic branching edges when dry.',
    diaryExcerpt: '"October 2025 — The indigo wash behaves like water itself. It floods the coarse, starched sports canvas, seeking out the factory seams and settling in dark pools that look like maps of the old Punjab waterways."',
    drawingType: 'indigo',
  },
  {
    id: 'mat-3',
    name: 'Heavy Sculpted Impasto Oils',
    tag: 'Thick Organic Paint',
    color: '#ff4f93', // vibrant fuchsia
    secondaryColor: '#5b1030',
    description: 'Thick, un-thinned oil paints blended with organic marble dust to create heavy structural masses applied with flexible steel palette knives.',
    sourcing: 'Custom blended in the studio using raw linseed oils, dense mineral pigments, and locally milled limestone dust.',
    tactileNote: 'Highly dimensional, glossy, holding crisp three-dimensional peaks and heavy, scarred ridges.',
    diaryExcerpt: '"February 2026 — Applying fuchsia impasto is an act of construction, not painting. I carve into the wet mounds with steel knives, scarring the surface just as the sports presses slice leather panels. It is violence and beauty held together."',
    drawingType: 'impasto',
  },
  {
    id: 'mat-4',
    name: 'Gold Filigree & Industrial Thread',
    tag: 'Zardozi & Soccer Stitches',
    color: '#e5c158', // Antique Gold
    secondaryColor: '#ffe1ec',
    description: 'Heavy wax-coated polyester thread used for hand-stitching sporting leather, interwoven with antique metal Zardozi cords.',
    sourcing: 'Sourced from heavy-duty industrial spool leftovers and traditional embroidery suppliers in Sialkot\'s old bazaars.',
    tactileNote: 'Taut, highly textured, reflecting metallic glints, bridging the gap between soft fabrics and heavy paints.',
    diaryExcerpt: '"May 2025 — I use the exact heavy thread that local craftsmen use to stitch export soccer balls by hand. Every gold stitch is a suture, joining my grandmother\'s embroidery legacy with the industrial sweat of today\'s Sialkot."',
    drawingType: 'stitch',
  },
];

export default function MaterialLab() {
  const [selectedMat, setSelectedMat] = useState<Material>(MATERIALS[0]);
  const [activeLayers, setActiveLayers] = useState<string[]>(['mat-1']);
  const [canvasMasterpiece, setCanvasMasterpiece] = useState<boolean>(true);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  // Clear or reset user edits on the live canvas
  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasMasterpiece(false);
    drawBackgroundTexture(ctx, canvas.width, canvas.height);
  };

  // Draws the organic base linen texture
  const drawBackgroundTexture = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    // Fill raw warm cream base
    ctx.fillStyle = '#f5ede0';
    ctx.fillRect(0, 0, w, h);

    // Draw coarse linen grid lines for tactile feel
    ctx.strokeStyle = '#e6d8c4';
    ctx.lineWidth = 0.8;
    
    // Horizontal lines
    for (let i = 0; i < h; i += 6) {
      ctx.beginPath();
      ctx.moveTo(0, i + Math.random() * 2);
      ctx.lineTo(w, i + Math.random() * 2);
      ctx.stroke();
    }
    // Vertical lines
    for (let j = 0; j < w; j += 6) {
      ctx.beginPath();
      ctx.moveTo(j + Math.random() * 2, 0);
      ctx.lineTo(j + Math.random() * 2, h);
      ctx.stroke();
    }

    // Add random factory stencil stamp for backstory
    ctx.save();
    ctx.translate(w * 0.25, h * 0.2);
    ctx.rotate(-0.15);
    ctx.fillStyle = 'rgba(91, 16, 48, 0.08)';
    ctx.font = 'bold 22px Courier, monospace';
    ctx.fillText('SIALKOT FACTORY SECTOR 4', 0, 0);
    ctx.fillText('BATCH: 2026/SLK-TX', 0, 24);
    ctx.strokeStyle = 'rgba(91, 16, 48, 0.08)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-10, -22, 330, 60);
    ctx.restore();
  };

  // Draw the gorgeous predefined masterpiece overlay to start with something stunning
  const drawMasterpieceTemplate = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    // 1. Draw raw canvas patches (reclaimed textile)
    if (activeLayers.includes('mat-1')) {
      ctx.fillStyle = '#e4dac9';
      ctx.fillRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);
      
      // Stitch marks around the textile patch
      ctx.strokeStyle = '#b5507c';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 8]);
      ctx.strokeRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);
      ctx.setLineDash([]); // Reset
      
      // Factory stamps on the canvas
      ctx.save();
      ctx.fillStyle = 'rgba(91, 16, 48, 0.12)';
      ctx.font = 'bold 36px Courier New, monospace';
      ctx.fillText('★ EXPORT STRENGTH ★', w * 0.2, h * 0.35);
      ctx.font = '14px Courier New';
      ctx.fillText('REF: RECLAIMED ATHLETIC WEAVE', w * 0.2, h * 0.4);
      ctx.restore();
    }

    // 2. Draw organic Indigo stains (Chenab blue washes)
    if (activeLayers.includes('mat-2')) {
      ctx.save();
      const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 50, w * 0.45, h * 0.5, 200);
      gradient.addColorStop(0, 'rgba(26, 54, 93, 0.75)');
      gradient.addColorStop(0.5, 'rgba(26, 54, 93, 0.4)');
      gradient.addColorStop(1, 'rgba(26, 54, 93, 0)');
      ctx.fillStyle = gradient;
      
      // Draw flowing watercolor puddles
      ctx.beginPath();
      ctx.arc(w * 0.45, h * 0.52, 160, 0, Math.PI * 2);
      ctx.fill();

      // Branching water runoffs
      ctx.strokeStyle = 'rgba(26, 54, 93, 0.3)';
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * 0.52);
      ctx.quadraticCurveTo(w * 0.3, h * 0.75, w * 0.2, h * 0.82);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * 0.52);
      ctx.quadraticCurveTo(w * 0.65, h * 0.3, w * 0.75, h * 0.22);
      ctx.stroke();
      ctx.restore();
    }

    // 3. Draw heavy pink/fuchsia impasto strokes
    if (activeLayers.includes('mat-3')) {
      ctx.save();
      // Thick 3D Palette knife strokes
      ctx.strokeStyle = '#ff4f93';
      ctx.lineWidth = 35;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(91, 16, 48, 0.4)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 4;

      // Vertical structural stroke
      ctx.beginPath();
      ctx.moveTo(w * 0.55, h * 0.25);
      ctx.lineTo(w * 0.58, h * 0.72);
      ctx.stroke();

      // Highlight stroke
      ctx.strokeStyle = '#ffe1ec';
      ctx.lineWidth = 14;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.57, h * 0.3);
      ctx.lineTo(w * 0.59, h * 0.65);
      ctx.stroke();

      // Dark companion stroke
      ctx.strokeStyle = '#5b1030';
      ctx.lineWidth = 22;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(w * 0.38, h * 0.4);
      ctx.lineTo(w * 0.42, h * 0.68);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Gold Thread & Embroidery Sutures
    if (activeLayers.includes('mat-4')) {
      ctx.save();
      // Gold Stitch Lines bridging layers
      ctx.strokeStyle = '#e5c158';
      ctx.lineWidth = 4;
      ctx.setLineDash([4, 6]);
      ctx.shadowColor = 'rgba(0,0,0,0.2)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetY = 2;

      // Golden suture cross stitch across the fuchsia oil paint
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.6);
      ctx.lineTo(w * 0.7, h * 0.4);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.2);
      ctx.lineTo(w * 0.6, h * 0.8);
      ctx.stroke();
      ctx.restore();
    }
  };

  // Trigger base canvas redrawing on layer changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 600;
    canvas.height = 700;

    // Draw base fabric
    drawBackgroundTexture(ctx, canvas.width, canvas.height);

    // If masterpiece state is enabled, paint Emaan's masterpiece
    if (canvasMasterpiece) {
      drawMasterpieceTemplate(ctx, canvas.width, canvas.height);
    }
  }, [activeLayers, canvasMasterpiece]);

  // Drawing event handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // Map screen coordinate to canvas coordinate
    lastX.current = ((clientX - rect.left) / rect.width) * canvas.width;
    lastY.current = ((clientY - rect.top) / rect.height) * canvas.height;
    
    // Draw initial spot click
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const currentX = ((clientX - rect.left) / rect.width) * canvas.width;
    const currentY = ((clientY - rect.top) / rect.height) * canvas.height;

    ctx.save();
    
    // Configure strokes based on current active material
    switch (selectedMat.drawingType) {
      case 'textile':
        // Pastes woven fabric squares with raw edges
        ctx.fillStyle = 'rgba(234, 227, 213, 0.45)';
        ctx.fillRect(currentX - 30, currentY - 30, 60, 60);
        ctx.strokeStyle = 'rgba(91, 16, 48, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(currentX - 30, currentY - 30, 60, 60);
        break;

      case 'indigo':
        // Flowy indigo bleed
        ctx.strokeStyle = 'rgba(26, 54, 93, 0.5)';
        ctx.fillStyle = 'rgba(26, 54, 93, 0.05)';
        ctx.lineWidth = 24;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX.current, lastY.current);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // Water drop pools
        ctx.beginPath();
        ctx.arc(currentX, currentY, 20 + Math.random() * 15, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'impasto':
        // Thick impasto paint with strong shadows (holding knife peaks)
        ctx.strokeStyle = '#ff4f93';
        ctx.lineWidth = 18;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(91, 16, 48, 0.45)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.moveTo(lastX.current, lastY.current);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // White secondary pigment swirl highlights
        ctx.strokeStyle = '#ffe1ec';
        ctx.lineWidth = 6;
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.moveTo(lastX.current - 2, lastY.current - 2);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        break;

      case 'stitch':
        // Gold dashed zardozi stitches
        ctx.strokeStyle = '#e5c158';
        ctx.lineWidth = 3.5;
        ctx.setLineDash([5, 8]);
        ctx.shadowColor = 'rgba(0,0,0,0.15)';
        ctx.shadowBlur = 2;
        ctx.shadowOffsetY = 1;
        ctx.beginPath();
        ctx.moveTo(lastX.current, lastY.current);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        break;
    }

    ctx.restore();

    lastX.current = currentX;
    lastY.current = currentY;
    setCanvasMasterpiece(false); // Flag that user has drawn custom things
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  // Toggle layer in standard composition list
  const toggleLayer = (layerId: string) => {
    setCanvasMasterpiece(true); // Return to standard composite template
    if (activeLayers.includes(layerId)) {
      setActiveLayers(activeLayers.filter(l => l !== layerId));
    } else {
      setActiveLayers([...activeLayers, layerId]);
    }
  };

  return (
    <section
      id="materials-studio"
      className="relative py-24 px-6 md:px-16 bg-[#ffdce9] border-b-4 border-[#5b1030] overflow-hidden"
    >
      {/* Dynamic background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4f93] rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e5c158] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Text */}
        <div className="space-y-4 text-center md:text-left">
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#b5507c] uppercase block font-bold">
            STUDIO EXPLORER · INTERACTIVE MATERIAL LAB
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5b1030] leading-none">
            The Sialkot Alchemy: <span className="italic text-[#ff4f93]">Textile & Oil</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#b5507c] max-w-3xl font-bold">
            Step directly into Emaan's studio. Explore the tactile mediums reclaimed from Sialkot's sports-manufacturing plants, read diary excerpts, and click or drag directly on the raw linen canvas to custom-paint your own physical composition!
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Interactive Canvas - Left column span 6 */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Canvas Header/Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#5b1030] text-[#ffe1ec] px-4 py-3 rounded-2xl border-2 border-[#5b1030]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff4f93]" />
                <span className="font-mono text-xs tracking-wider uppercase font-bold">
                  {canvasMasterpiece ? 'Emaan\'s Composition Template' : 'Your Custom Composition Scratchpad'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCanvasMasterpiece(true);
                    setActiveLayers(['mat-1', 'mat-2', 'mat-3', 'mat-4']);
                  }}
                  className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#ff4f93] text-white hover:bg-[#ff2e77] rounded transition-all duration-300"
                  title="Restore original masterpiece layers"
                >
                  Template
                </button>
                <button
                  onClick={handleClearCanvas}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded transition-all duration-300"
                  title="Clear custom strokes"
                >
                  <RotateCcw className="w-3 h-3" />
                  Clear
                </button>
              </div>
            </div>

            {/* Canvas Wrap */}
            <div className="relative w-full aspect-[6/7] rounded-3xl overflow-hidden border-4 border-[#5b1030] bg-[#eae3d5] shadow-xl group">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-full object-cover cursor-crosshair block touch-none"
              />

              {/* Drawing Tool Overlay Prompt */}
              <div className="absolute top-4 left-4 pointer-events-none bg-[#5b1030] text-[#ffe1ec] border border-[#ff4f93]/40 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase font-bold shadow flex items-center gap-1.5 animate-bounce">
                <Sparkles className="w-3.5 h-3.5 text-[#ff4f93]" />
                Click & Drag to Paint: {selectedMat.drawingType}
              </div>

              {/* Floating Composition Layer Toggles at bottom */}
              <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border-2 border-[#5b1030] flex justify-between gap-1 sm:gap-2 shadow-lg">
                {MATERIALS.map((m) => {
                  const isActive = activeLayers.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggleLayer(m.id)}
                      className={`flex-1 font-mono text-[9px] sm:text-xxs tracking-wider uppercase font-bold py-2 px-1 rounded-lg border transition-all duration-300 text-center ${
                        isActive
                          ? 'bg-[#5b1030] text-[#ffe1ec] border-[#5b1030]'
                          : 'bg-transparent text-[#b5507c] hover:bg-pink-100 border-pink-200'
                      }`}
                    >
                      {m.name.split(' ')[0]} {isActive ? '✓' : ''}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Instruction footnote */}
            <div className="flex items-start gap-2 text-xxs font-mono text-[#b5507c] px-2 font-bold leading-relaxed">
              <Info className="w-4 h-4 shrink-0 text-[#ff4f93]" />
              <span>You can physically draw on this canvas using the active tool. Adjust the toggles above the canvas to layer Emaan\'s original design components back on top!</span>
            </div>
          </div>

          {/* Interactive Material Catalog & Diary - Right column span 6 */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Material Selector buttons */}
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-[#b5507c] uppercase font-bold block">
                Select Medium to Equip Paintbrush / Read Diaries
              </span>
              <div className="grid grid-cols-2 gap-3">
                {MATERIALS.map((mat) => {
                  const isSelected = selectedMat.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMat(mat)}
                      className={`flex flex-col items-start text-left p-3 rounded-2xl border-2 transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#5b1030] text-white border-[#ff4f93] shadow-md scale-[1.02]'
                          : 'bg-white/45 text-[#5b1030] border-[#5b1030]/10 hover:border-[#5b1030]/30 hover:bg-white/60'
                      }`}
                    >
                      <span className="font-mono text-[9px] tracking-wider text-[#ff4f93] font-bold block mb-1 uppercase">
                        {mat.tag}
                      </span>
                      <span className="font-serif italic text-sm md:text-base font-bold leading-tight">
                        {mat.name}
                      </span>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: mat.color }}
                        />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#b5507c] font-bold">
                          {mat.drawingType} brush
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail Sheet Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMat.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#ffe1ec] border-3 border-[#5b1030] rounded-3xl p-6 md:p-8 shadow-md flex-grow flex flex-col justify-between gap-6"
              >
                {/* Upper block */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#5b1030]/10 pb-3">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#ff4f93] uppercase font-bold">
                      Medium Profile
                    </span>
                    <span className="bg-[#5b1030] text-[#ffe1ec] font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Active Tool
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl md:text-3xl font-black text-[#5b1030]">
                    {selectedMat.name}
                  </h3>

                  <p className="font-sans text-sm md:text-base text-[#5b1030] leading-relaxed font-bold">
                    {selectedMat.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/45 p-3 rounded-xl border border-[#5b1030]/5">
                      <span className="font-mono text-[10px] uppercase text-[#ff4f93] font-bold block mb-1">
                        Sourcing Location
                      </span>
                      <p className="font-sans text-xs text-[#5b1030] font-bold leading-normal">
                        {selectedMat.sourcing}
                      </p>
                    </div>

                    <div className="bg-white/45 p-3 rounded-xl border border-[#5b1030]/5">
                      <span className="font-mono text-[10px] uppercase text-[#ff4f93] font-bold block mb-1">
                        Tactile Profile
                      </span>
                      <p className="font-sans text-xs text-[#5b1030] font-bold leading-normal">
                        {selectedMat.tactileNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Diary Excerpt Block */}
                <div className="border-t-2 border-dashed border-[#5b1030]/15 pt-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-[#ff4f93]">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase font-bold tracking-widest">
                      Studio Diary Entry
                    </span>
                  </div>
                  <p className="font-serif italic text-sm md:text-base text-[#5b1030] bg-[#ffdce9] p-4 rounded-2xl border-l-4 border-[#ff4f93] font-medium leading-relaxed">
                    {selectedMat.diaryExcerpt}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
