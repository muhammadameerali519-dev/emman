import React, { useEffect, useRef, useState } from 'react';
import { PORTRAIT_IMAGE, STATS } from '../data';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 bg-[#ffd0e0] border-b-4 border-[#5b1030] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Portrait with Gold/Pink Gradient Ring Border */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group hover-trigger">
            {/* The gold/pink gradient ring border */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff4f93] via-[#e5c158] to-[#ff2e77] rounded-full blur-sm opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 animate-spin-slow" 
                 style={{ animationDuration: '15s' }} />
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#5b1030] bg-[#5b1030] shadow-xl">
              <img
                src={PORTRAIT_IMAGE}
                alt="Emaan Ali Portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Sialkot overlay badge */}
            <div className="absolute -bottom-3 -right-3 bg-[#5b1030] text-[#ffe1ec] border-2 border-fuchsia-400 py-2 px-4 rounded-full font-mono text-xxs tracking-wider font-bold shadow-lg">
              SIALKOT, PK
            </div>
          </div>
        </div>

        {/* Right Column - Artist Bio & Statistics */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#b5507c] uppercase block font-bold">
              THE ARTIST · EMAAN ALI
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5b1030] leading-tight">
              Stitching Stories from <span className="italic text-[#ff4f93]">Waste & Wonder</span>
            </h2>
          </div>

          <div className="space-y-6 text-[#5b1030] font-sans text-base md:text-lg leading-relaxed font-bold">
            <p>
              Based in the industrious hub of Sialkot, Pakistan, visual artist Emaan Ali marries industrial scrap with deep family lineage. Her practice explores Punjab's changing landscapes, utilizing reclaimed canvas waste, high-performance leather, and waste threads from local sport manufacturing units.
            </p>
            <p>
              By fusing raw canvas backings with heavy impasto painting techniques and layered embroidery, Emaan constructs architectural textures that speak to labor, lineage, and the soil. Her paintings are tactile landscapes — visceral memories frozen in paint and thread.
            </p>
          </div>

          {/* Stats Counters Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-[#5b1030]/20">
            {STATS.map((stat, idx) => (
              <StatCounter
                key={idx}
                label={stat.label}
                targetValue={stat.value}
                suffix={stat.suffix}
                trigger={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  key?: React.Key;
  label: string;
  targetValue: number;
  suffix: string;
  trigger: boolean;
}

function StatCounter({ label, targetValue, suffix, trigger }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = targetValue / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, targetValue]);

  return (
    <div className="flex flex-col space-y-1">
      <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#ff4f93] tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="font-mono text-xxs sm:text-xs tracking-wider text-[#b5507c] uppercase leading-snug">
        {label}
      </span>
    </div>
  );
}
