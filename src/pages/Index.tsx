
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
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
    document.title = "Senior UI/UX Designer Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <DesignProcessSection />
        <CaseStudySection />
        <ToolBeltSection />
        <TestimonialSection />
        <DesignSystemSection />
        <MicroInteractionSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
