
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create particles
    const container = particlesRef.current;
    const particleCount = 50;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Random styling for each particle
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 10;
      const opacity = 0.1 + Math.random() * 0.5;
      
      // Choose a random color
      const colors = ['#0ff', '#f0f', '#0f0'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Apply styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = color;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = `${opacity}`;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="relative min-h-[100vh] w-full flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Particles Background */}
      <div ref={particlesRef} className="particles-container"></div>
      
      {/* Content Container */}
      <div className="z-10 max-w-4xl mx-auto text-center">
        {/* 3D Character Placeholder - This would be replaced with your actual 3D model */}
        <div className="w-64 h-64 mx-auto mb-8 relative animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-blue/20 to-transparent"></div>
          <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center overflow-hidden">
            <span className="text-5xl font-bold">3D</span>
          </div>
        </div>
        
        {/* Tagline with Neon Effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text-blue">
          Designing Systems, Not Just Screens
        </h1>
        
        {/* Brief Introduction */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Hi, I'm Anmol, a Senior UI/UX Designer & Angular Developer crafting digital confidence through research, design, and engineering.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            className="glass neon-border px-6 py-6 text-lg group"
            variant="outline"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" /> 
            Download Resume
          </Button>
          <Button 
            className="glass neon-border bg-neon-blue/10 text-white hover:bg-neon-blue/20 px-6 py-6 text-lg"
          >
            <ExternalLink className="mr-2 h-5 w-5" /> 
            View Projects
          </Button>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-neon-blue animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
