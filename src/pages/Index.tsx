
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ToolBeltSection from '@/components/ToolBeltSection';
import CaseStudySection from '@/components/CaseStudySection';
import MicroInteractionSection from '@/components/MicroInteractionSection';
import DesignSystemSection from '@/components/DesignSystemSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Anmol V | Senior UI/UX Designer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <ToolBeltSection />
        <CaseStudySection />
        <MicroInteractionSection />
        <DesignSystemSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
