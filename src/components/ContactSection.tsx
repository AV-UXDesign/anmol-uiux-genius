
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Linkedin, GitHub, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Let's Create Impact Together
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm open to discussing new opportunities, sharing insights, or just having a chat about design and development.
        </p>
        
        <Card className="glass-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-2">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@anmol.com" 
                  className="flex items-center space-x-3 glass p-3 rounded-md hover:neon-border transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-neon-blue" />
                  <span>contact@anmol.com</span>
                </a>
                
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center space-x-3 glass p-3 rounded-md hover:neon-border transition-all duration-300"
                >
                  <Phone className="h-5 w-5 text-neon-blue" />
                  <span>+91 9876 543 210</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/anmol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 glass p-3 rounded-md hover:neon-border transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-neon-blue" />
                  <span>linkedin.com/in/anmol</span>
                </a>
                
                <a 
                  href="https://github.com/anmol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 glass p-3 rounded-md hover:neon-border transition-all duration-300"
                >
                  <GitHub className="h-5 w-5 text-neon-blue" />
                  <span>github.com/anmol</span>
                </a>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="glass neon-border bg-neon-blue/10 hover:bg-neon-blue/20 w-full"
                >
                  <Download className="mr-2 h-5 w-5" /> 
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
            
            <div className="relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg"></div>
              
              {/* QR Code Placeholder */}
              <div className="relative glass p-4 rounded-lg">
                <div className="w-48 h-48 bg-white rounded-md flex items-center justify-center">
                  <div className="text-black text-center">
                    <p className="font-bold">QR Code</p>
                    <p className="text-xs">Scan to view portfolio</p>
                  </div>
                </div>
                <p className="text-center mt-2 text-sm">Scan for portfolio mobile view</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
