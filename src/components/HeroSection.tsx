
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - Math.min(1, scrollY / 700);
        const translateY = scrollY * 0.4;
        
        textRef.current.style.opacity = `${opacity}`;
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Background Dots/Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/20 animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 rounded-full bg-purple-500/20 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-teal-500/20 animate-pulse" style={{ animationDuration: '9s' }}></div>
      </div>
      
      {/* Main Hero Content */}
      <div ref={textRef} className="z-10 max-w-4xl mx-auto text-center transition-all duration-300 animate-fade-in">
        {/* Main Heading - Apple Style */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          Hey, I'm <span className="neon-text-blue">Anmol</span>.
        </h1>
        
        {/* Professional Tagline */}
        <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-2xl mx-auto">
          UI/UX Designer & Angular Developer
        </p>
        
        {/* Brief Professional Introduction */}
        <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
          With 8+ years of experience designing for fintech, healthcare, and enterprise platforms, I transform complex problems into intuitive digital experiences.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button 
            className="px-6 py-6 text-lg glass bg-blue-600/20 hover:bg-blue-600/40 text-white border border-blue-500/30 w-full sm:w-auto neon-border"
            variant="default"
            onClick={scrollToWork}
          >
            <ExternalLink className="mr-2 h-5 w-5" /> 
            View My Work
          </Button>
          <Button 
            className="px-6 py-6 text-lg glass bg-transparent hover:bg-white/10 text-white border border-white/20 w-full sm:w-auto"
            variant="outline"
          >
            <Download className="mr-2 h-5 w-5" /> 
            Download Resume
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll Down</span>
        </div>
      </div>
      
      {/* Glassmorphism Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;
