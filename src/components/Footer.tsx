
import React from 'react';
import { Github, Linkedin, Twitter, Heart, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <footer className="py-12 px-4 relative bg-gradient-to-t from-[#080816] via-[#0a0a18]/95 to-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated subtle particles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-500/5" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/5" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Logo & Description */}
          <motion.div variants={item} className="md:col-span-4">
            <div className="mb-6">
              <div className="text-3xl font-bold relative inline-block">
                Anmol V
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 mt-2">UI/UX Designer & Angular Developer</div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Crafting intuitive digital experiences that solve real user problems with a focus on accessibility, performance, and beautiful design.
            </p>
            
            <button className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span>Contact Me</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </button>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={item} className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Work', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={item} className="md:col-span-3">
            <h3 className="text-white font-medium mb-4">Expertise</h3>
            <ul className="space-y-2">
              {['UI/UX Design', 'Angular Development', 'Interaction Design', 'Design Systems', 'Prototyping'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Social & Contact */}
          <motion.div variants={item} className="md:col-span-3">
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="#" 
                className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110 border border-indigo-500/20" 
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110 border border-indigo-500/20" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110 border border-indigo-500/20" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
              </a>
            </div>
            
            <div>
              <div className="text-gray-400 mb-2">Get in touch</div>
              <a href="mailto:anmolvishwakarma1105@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                anmolvishwakarma1105@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Border & Copyright */}
        <div className="border-t border-indigo-900/50 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} All rights reserved | Anmol V
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              Made with 
              <Heart className="h-4 w-4 text-rose-500 mx-1 animate-pulse" />
              and code
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
