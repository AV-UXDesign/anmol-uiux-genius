
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import ToolBeltSection from '@/components/ToolBeltSection';
import CaseStudySection from '@/components/CaseStudySection';
import DesignProcessSection from '@/components/DesignProcessSection';
import MicroInteractionSection from '@/components/MicroInteractionSection';
import DesignSystemSection from '@/components/DesignSystemSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Anmol V - Senior UI/UX Designer";
    
    // Enhanced parallax effect for the entire page
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Code lines background */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="code-line font-mono text-xs whitespace-nowrap overflow-hidden"
            style={{ 
              top: `${(i * 7) + 5}%`, 
              left: i % 2 === 0 ? '5%' : '15%',
              color: i % 3 === 0 ? '#60A5FA' : i % 3 === 1 ? '#34D399' : '#F472B6',
              transform: `rotate(${i % 2 === 0 ? '0.5' : '-0.5'}deg)`,
              opacity: 0.1,
              textShadow: i % 3 === 0 ? '0 0 5px rgba(96, 165, 250, 0.5)' : 
                          i % 3 === 1 ? '0 0 5px rgba(52, 211, 153, 0.5)' : 
                          '0 0 5px rgba(244, 114, 182, 0.5)'
            }}
          >
            {i % 5 === 0 ? "const design = () => createImpact();" :
             i % 5 === 1 ? "function blendTechAndArt() {" :
             i % 5 === 2 ? "  return innovation.solve(userProblems);" :
             i % 5 === 3 ? "}" :
             "export default CreativeExperience;"}
          </div>
        ))}

        {/* Enhanced Grid pattern with depth */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.15
          }}
        ></div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full filter blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%, rgba(0,0,0,0) 100%)',
          }}
        ></div>
        <div className="absolute bottom-40 right-20 w-120 h-120 rounded-full filter blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 70%, rgba(0,0,0,0) 100%)',
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <FloatingNav />
        
        <main>
          <HeroSection />
          
          <div id="work" className="scroll-mt-16">
            <CaseStudySection />
          </div>
          
          <div id="about">
            <DesignProcessSection />
            <ToolBeltSection />
            <DesignSystemSection />
            <MicroInteractionSection />
          </div>
          
          <div id="contact" className="scroll-mt-16">
            <ContactSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
