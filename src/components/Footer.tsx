
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold neon-text-blue">Anmol V</div>
            <div className="text-sm text-gray-400">UI/UX Designer & Angular Developer</div>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} All rights reserved | Made with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
