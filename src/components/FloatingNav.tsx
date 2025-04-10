
import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);
  
  // Track scroll position to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setExpanded(false);
    }
  };
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden glass p-3 rounded-full mb-2 mx-auto block"
        onClick={toggleExpanded}
      >
        {expanded ? <X /> : <Menu />}
      </button>
      
      {/* Navigation Bar */}
      <div className={`glass px-3 py-2 rounded-full transition-all duration-300 ${
        expanded ? 'opacity-100 translate-y-0' : 'md:opacity-100 md:translate-y-0 opacity-0 translate-y-10 pointer-events-none md:pointer-events-auto'
      }`}>
        <div className="flex items-center justify-center space-x-6 md:space-x-8 px-2">
          <button
            onClick={() => scrollToSection('home')}
            className={`p-3 rounded-full transition-all duration-300 ${
              activeSection === 'home' ? 'bg-blue-600/20 text-blue-400 scale-110 neon-text-blue' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('work')}
            className={`p-3 rounded-full transition-all duration-300 ${
              activeSection === 'work' ? 'bg-blue-600/20 text-blue-400 scale-110 neon-text-blue' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="Work"
          >
            <Briefcase className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className={`p-3 rounded-full transition-all duration-300 ${
              activeSection === 'about' ? 'bg-blue-600/20 text-blue-400 scale-110 neon-text-blue' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="About"
          >
            <User className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`p-3 rounded-full transition-all duration-300 ${
              activeSection === 'contact' ? 'bg-blue-600/20 text-blue-400 scale-110 neon-text-blue' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="Contact"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
