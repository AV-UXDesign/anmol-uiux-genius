
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import ToolBeltSection from '@/components/ToolBeltSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialSection from '@/components/TestimonialSection';
import DesignProcessSection from '@/components/DesignProcessSection';
import MicroInteractionSection from '@/components/MicroInteractionSection';
import DesignSystemSection from '@/components/DesignSystemSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Anmol V - Senior UI/UX Designer";
    
    // Simple parallax effect
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
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
          <TestimonialSection />
          <DesignSystemSection />
          <MicroInteractionSection />
        </div>
        
        <div id="contact" className="scroll-mt-16">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
