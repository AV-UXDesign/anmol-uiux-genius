
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-4 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="z-10 max-w-4xl mx-auto text-center md:text-left md:flex md:items-center md:space-x-12">
        {/* Professional Photo/Avatar */}
        <div className="w-64 h-64 mx-auto md:mx-0 mb-8 md:mb-0 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/40 flex items-center justify-center overflow-hidden border-4 border-blue-600/20">
            <span className="text-5xl font-bold">AV</span>
          </div>
        </div>
        
        <div className="md:flex-1">
          {/* Professional Tagline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Senior UI/UX Designer with a Product Mindset
          </h1>
          
          {/* Brief Professional Introduction */}
          <p className="text-xl mb-8 text-gray-300 max-w-2xl">
            With 5+ years of hands-on design experience across fintech and enterprise tools, I craft usable, scalable, and delightful interfaces backed by research and business outcomes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16">
            <Button 
              className="px-6 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              variant="default"
            >
              <Download className="mr-2 h-5 w-5" /> 
              Download Resume
            </Button>
            <Button 
              className="px-6 py-6 text-lg bg-transparent border border-blue-600 hover:bg-blue-600/10 text-white w-full sm:w-auto"
              variant="outline"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> 
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
