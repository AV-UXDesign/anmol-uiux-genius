
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Mail, Phone, Send, ExternalLink, ChevronRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResumeDownload = () => {
    // In a real implementation, this would trigger a file download
    toast({
      title: "Resume Download",
      description: "Your resume download has started.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.1
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
            Let's Create Something Amazing
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 mb-0 max-w-2xl mx-auto">
            Ready to transform your digital vision into reality? Let's collaborate and build something extraordinary together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full glass-card border-0 overflow-hidden backdrop-blur-xl bg-black/40 border border-indigo-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Get in Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-300">Your Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none text-white transition-all duration-300" 
                      placeholder="John Doe" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-300">Email Address</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none text-white transition-all duration-300" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-300">Your Message</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none text-white transition-all duration-300" 
                      rows={4} 
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/50 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
          
          {/* Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full glass-card border-0 overflow-hidden backdrop-blur-xl bg-black/40 border border-indigo-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Connect With Me</h3>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href="mailto:anmolvishwakarma1105@gmail.com" 
                    className="flex items-center space-x-3 p-3 rounded-md border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Mail className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-gray-300 group-hover:text-indigo-300 transition-colors">Anmol Vishawakarma</span>
                      <span className="text-xs text-gray-500">Email me anytime</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                  
                  <a 
                    href="tel:+9321041338" 
                    className="flex items-center space-x-3 p-3 rounded-md border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Phone className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-gray-300 group-hover:text-indigo-300 transition-colors">+91 9321-041-338</span>
                      <span className="text-xs text-gray-500">Monday to Friday, 9AM-7PM</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/anmol-vishwakarma-4ba05b69/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-md border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Linkedin className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-gray-300 group-hover:text-indigo-300 transition-colors">linkedin.com/Anmol</span>
                      <span className="text-xs text-gray-500">Connect professionally</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                  </a>
                  
                  <a 
                    href="https://github.com/AV-UXDesign/anmol-uiux-genius" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-md border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Github className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-gray-300 group-hover:text-indigo-300 transition-colors">github.com/Anmol
                      </span>
                      <span className="text-xs text-gray-500">View my open source work</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                  </a>
                </div>
                
                <Button 
                  onClick={handleResumeDownload}
                  className="w-full glass bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/40 hover:to-purple-600/40 text-white border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 py-6 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" /> 
                  Download Resume (PDF)
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
