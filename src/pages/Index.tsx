
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
    document.title = "Anmol V - Senior UI/UX Designer & Angular Developer";
    
    // Enhanced parallax effect for the entire page
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a18] via-[#12122a] to-[#0a0a18] text-white relative">
      {/* Global background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Enhanced background grid with depth */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.15
          }}
        ></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Abstract floating shapes */}
          <svg className="absolute top-10 left-10 w-96 h-96 opacity-10 animate-floating" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6366f1" d="M44.7,-76.4C58.9,-69.9,71.7,-59.5,79.4,-45.9C87.1,-32.3,89.8,-16.1,88.2,-0.9C86.7,14.3,81,28.6,73.1,41.4C65.3,54.2,55.4,65.5,42.8,73.2C30.2,80.9,15.1,85,0.2,84.7C-14.8,84.4,-29.6,79.8,-42.2,71.9C-54.8,64,-65.2,52.7,-73.3,39.5C-81.4,26.2,-87.2,13.1,-86.8,0.2C-86.4,-12.7,-79.8,-25.3,-71.6,-37C-63.4,-48.7,-53.6,-59.3,-41.5,-66.8C-29.4,-74.3,-14.7,-78.6,0.6,-79.7C16,-80.7,32,-82.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          
          <svg className="absolute bottom-10 right-20 w-80 h-80 opacity-10 animate-floating" style={{ animationDelay: "2s" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8B5CF6" d="M45.3,-77.5C58.3,-71.2,68.5,-58.4,76.8,-44.3C85.1,-30.1,91.6,-15.1,90.2,-0.8C88.9,13.5,79.8,27,70.3,39.4C60.9,51.8,51.1,63.2,38.9,71.4C26.6,79.6,13.3,84.6,-0.9,86.2C-15.1,87.7,-30.3,85.8,-42.5,77.9C-54.8,70,-64.1,56.2,-71.4,41.8C-78.7,27.4,-84,13.7,-85.4,-0.8C-86.8,-15.3,-84.3,-30.6,-76.3,-43C-68.3,-55.4,-54.8,-65,-40.7,-70.8C-26.5,-76.7,-13.3,-78.8,1.2,-81C15.6,-83.2,31.2,-85.5,45.3,-77.5Z" transform="translate(100 100)" />
          </svg>
          
          <svg className="absolute top-1/2 right-1/4 w-64 h-64 opacity-5 animate-floating" style={{ animationDelay: "1s" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10B981" d="M39.9,-67.1C52.6,-62.1,64.4,-52.8,71.9,-40.4C79.3,-28,82.5,-14,81.1,-0.8C79.8,12.4,74,24.7,66.6,35.8C59.2,46.9,50.2,56.8,39,63.1C27.8,69.5,13.9,72.4,-0.3,72.9C-14.6,73.4,-29.1,71.5,-41.8,65.3C-54.5,59.1,-65.2,48.6,-71.9,35.9C-78.6,23.2,-81.2,8.3,-78.9,-5.3C-76.5,-19,-69.2,-31.4,-59.9,-40.8C-50.6,-50.2,-39.3,-56.5,-28,-61.3C-16.6,-66,-8.3,-69.3,2.2,-73C12.7,-76.7,25.4,-80.8,39.9,-67.1Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Code lines background */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="code-line font-mono text-xs whitespace-nowrap overflow-hidden"
            style={{ 
              top: `${(i * 7) + 5}%`, 
              left: i % 2 === 0 ? '5%' : '15%',
              color: i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#34D399' : '#F472B6',
              transform: `rotate(${i % 2 === 0 ? '0.5' : '-0.5'}deg)`,
              opacity: 0.1,
              textShadow: i % 3 === 0 ? '0 0 5px rgba(129, 140, 248, 0.5)' : 
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

        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full filter blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 70%, rgba(0,0,0,0) 100%)',
            animationDuration: '8s'
          }}
        ></div>
        <div className="absolute bottom-40 right-20 w-120 h-120 rounded-full filter blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 70%, rgba(0,0,0,0) 100%)',
            animationDuration: '12s'
          }}
        ></div>
        
        {/* Design process background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a18] via-indigo-950/20 to-[#0a0a18] opacity-60"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366F1" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
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
