
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-5 shadow-md' : 'py-5'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="font-bold text-xl hover:neon-text-blue">figmatocode</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-300 hover:text-white hover:neon-text-blue transition-all">Home</a>
              <a href="#work" className="text-gray-300 hover:text-white hover:neon-text-blue transition-all">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-white hover:neon-text-blue transition-all">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white hover:neon-text-blue transition-all">Contact</a>
              <a
                href="/anmol-cv.pdf"
                download
                className="flass bg-blue-600/5 hover:bg-blue-600/10 px-4 py-2 rounded text-white text-sm font-medium transition-all  glass-enhanced bg-indigo-600/10 text-white border border-indigo-500/30 w-full sm:w-aut"
              >
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ?
                <X className="h-6 w-6" /> :
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 glass-card pt-20">
          <div className="flex flex-col items-center space-y-6 p-8">
            <a href="#home" className="text-xl text-white hover:neon-text-blue transition-all" onClick={toggleMobileMenu}>Home</a>
            <a href="#work" className="text-xl text-white hover:neon-text-blue transition-all" onClick={toggleMobileMenu}>Projects</a>
            <a href="#about" className="text-xl text-white hover:neon-text-blue transition-all" onClick={toggleMobileMenu}>About</a>
            <a href="#contact" className="text-xl text-white hover:neon-text-blue transition-all" onClick={toggleMobileMenu}>Contact</a>
            <a
              href="/anmol-cv.pdf"
              download
              onClick={toggleMobileMenu}
              className="glass neon-border bg-blue-600/5 hover:bg-blue-600/10 w-full text-center px-4 py-2 rounded text-white text-sm font-medium transition-all mt-4"
            >
              Download CV
            </a>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
