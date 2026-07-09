import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Exhibitions', href: '#exhibitions' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleScroll(e, '#hero')}
        className="font-serif italic text-2xl md:text-3xl tracking-tight text-white focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-4 rounded"
      >
        EMAAN ALI
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10 font-mono text-sm tracking-widest text-white">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="relative py-1 group focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-4 rounded transition-all duration-300 hover:text-fuchsia-400"
          >
            {link.label.toUpperCase()}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-fuchsia-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-4 p-1 rounded"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-[#5b1030] border-2 border-fuchsia-400 rounded-2xl p-6 flex flex-col space-y-6 md:hidden text-right font-mono text-base tracking-widest text-pink-100 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-fuchsia-400 focus:outline-2 focus:outline-fuchsia-400 p-2 block"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
