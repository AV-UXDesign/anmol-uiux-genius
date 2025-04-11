
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div id="home" ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Animated Background Dots/Particles */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-indigo-500/20" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 7, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-3/4 left-1/3 w-32 h-32 rounded-full bg-purple-500/20" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-teal-500/20" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 9, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        ></motion.div>
      </div>
      
      {/* Main Hero Content */}
      <div ref={textRef} className="z-10 max-w-4xl mx-auto text-center transition-all duration-300 animate-fade-in">
        {/* Main Heading - Apple Style */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hey, I'm <span className="neon-text-indigo">Anmol</span>.
        </motion.h1>
        
        {/* Professional Tagline */}
        <motion.p 
          className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          UI/UX Designer & Angular Developer
        </motion.p>
        
        {/* Brief Professional Introduction */}
        <motion.p 
          className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          With 8+ years of experience designing for fintech, healthcare, and enterprise platforms, I transform complex problems into intuitive digital experiences.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="px-6 py-6 text-lg glass-enhanced bg-indigo-600/10 hover:bg-indigo-600/20 text-white border border-indigo-500/30 w-full sm:w-auto neon-border"
            variant="default"
            onClick={scrollToWork}
          >
            <ExternalLink className="mr-2 h-5 w-5" /> 
            <span className="relative group">
              View My Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Button>
          <Button 
            className="px-6 py-6 text-lg glass-enhanced bg-transparent hover:bg-white/5 text-white border border-white/10 w-full sm:w-auto"
            variant="outline"
          >
            <Download className="mr-2 h-5 w-5" /> 
            <span className="relative group">
              Download Resume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/40 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll Down</span>
        </motion.div>
      </div>
      
      {/* Glassmorphism Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a18] to-transparent"></div>
    </div>
  );
};

export default HeroSection;
