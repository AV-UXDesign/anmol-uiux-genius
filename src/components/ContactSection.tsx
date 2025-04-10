
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleResumeDownload = () => {
    // In a real implementation, this would trigger a file download
    toast({
      title: "Resume Download",
      description: "Your resume download has started.",
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Let's Create Impact Together
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm open to discussing new opportunities, sharing insights, or just having a conversation about design and product strategy.
        </p>
        
        <Card className="glass-card border-0 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@yourname.com" 
                  className="flex items-center space-x-3 p-3 rounded-md border border-gray-700 hover:border-blue-500 glass hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">contact@yourname.com</span>
                </a>
                
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-3 p-3 rounded-md border border-gray-700 hover:border-blue-500 glass hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+1 (234) 567-890</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-md border border-gray-700 hover:border-blue-500 glass hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">linkedin.com/in/yourusername</span>
                </a>
                
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-md border border-gray-700 hover:border-blue-500 glass hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">github.com/yourusername</span>
                </a>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleResumeDownload}
                  className="w-full glass bg-blue-600/30 hover:bg-blue-600/50 text-white neon-border"
                >
                  <Download className="mr-2 h-5 w-5" /> 
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center glass p-6 rounded-lg">
              <div className="text-center">
                <div className="w-48 h-48 glass flex items-center justify-center mx-auto mb-4 border border-gray-700 shadow-lg">
                  <div className="text-white text-center">
                    <p className="font-bold">QR Code</p>
                    <p className="text-xs text-gray-400">Scan to view portfolio</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">Scan for portfolio mobile view</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
