
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold neon-text-blue">Anmol V</div>
            <div className="text-sm text-gray-400">Senior UI/UX Designer & Angular Developer</div>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
