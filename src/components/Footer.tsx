
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-indigo-900/50 bg-gradient-to-b from-transparent to-[#080816]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold neon-text-indigo">Anmol V</div>
            <div className="text-sm text-gray-400">UI/UX Designer & Angular Developer</div>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="#" 
              className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110" 
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-300" />
            </a>
            <a 
              href="#" 
              className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a 
              href="#" 
              className="p-2 glass-enhanced rounded-full hover:bg-indigo-500/10 transition-colors duration-300 transform hover:scale-110" 
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} All rights reserved | Made with 
            <span className="inline-block animate-pulse mx-1 text-pink-500">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
