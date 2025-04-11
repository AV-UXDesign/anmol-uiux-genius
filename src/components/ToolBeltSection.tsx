
import React, { useEffect, useRef } from 'react';
import { 
  Paintbrush, Code, Braces, Layers, MonitorSmartphone, 
  PenTool, Figma, Palette, BarChart, BookOpen, Brain, 
  GitBranch, Hammer, Lightbulb, Sparkles 
} from 'lucide-react';

const ToolBeltSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionEl.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - sectionPosition;
      const viewportHeight = window.innerHeight;
      
      if (offset > -viewportHeight && offset < sectionEl.offsetHeight + viewportHeight) {
        const cards = sectionEl.querySelectorAll('.tool-card');
        cards.forEach((el, index) => {
          const delay = index * 0.05;
          const translateY = Math.min(20, Math.max(-20, offset * 0.03 * (index % 3 === 0 ? 1 : -1)));
          
          el.setAttribute('style', `transform: translateY(${translateY}px); transition-delay: ${delay}s`);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const designTools = [
    { name: 'Figma', icon: <Figma className="h-6 w-6" />, level: 'Expert', percentage: 95 },
    { name: 'Adobe XD', icon: <PenTool className="h-6 w-6" />, level: 'Advanced', percentage: 85 },
    { name: 'Miro', icon: <Lightbulb className="h-6 w-6" />, level: 'Expert', percentage: 90 },
    { name: 'Sketch', icon: <Paintbrush className="h-6 w-6" />, level: 'Advanced', percentage: 80 },
    { name: 'InVision', icon: <MonitorSmartphone className="h-6 w-6" />, level: 'Advanced', percentage: 85 }
  ];

  const techTools = [
    { name: 'Angular', icon: <Braces className="h-6 w-6" />, level: 'Advanced', percentage: 85 },
    { name: 'HTML5/CSS3', icon: <Code className="h-6 w-6" />, level: 'Expert', percentage: 95 },
    { name: 'JavaScript', icon: <GitBranch className="h-6 w-6" />, level: 'Advanced', percentage: 80 },
    { name: 'React', icon: <Hammer className="h-6 w-6" />, level: 'Intermediate', percentage: 75 },
    { name: 'Git/Version Control', icon: <GitBranch className="h-6 w-6" />, level: 'Advanced', percentage: 85 }
  ];

  const designProcesses = [
    { name: 'User Research', icon: <BookOpen className="h-6 w-6" />, level: 'Expert', percentage: 90 },
    { name: 'Wireframing', icon: <Layers className="h-6 w-6" />, level: 'Expert', percentage: 95 },
    { name: 'Prototyping', icon: <Palette className="h-6 w-6" />, level: 'Advanced', percentage: 85 },
    { name: 'Usability Testing', icon: <BarChart className="h-6 w-6" />, level: 'Expert', percentage: 90 },
    { name: 'Design Systems', icon: <Brain className="h-6 w-6" />, level: 'Advanced', percentage: 85 }
  ];

  // Generate 3D-looking hex grid for background
  const hexGridItems = Array.from({ length: 30 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 10 + Math.random() * 30,
    duration: 20 + Math.random() * 30,
    delay: Math.random() * -30,
  }));

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden z-10">
      {/* 3D Hex Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {hexGridItems.map((hex, index) => (
          <div
            key={index}
            className="absolute opacity-10"
            style={{
              left: hex.left,
              top: hex.top,
              width: `${hex.size}px`,
              height: `${hex.size * 0.866}px`, // Hex height ratio
              background: index % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(244, 114, 182, 0.3)',
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              animation: `float ${hex.duration}s infinite ease-in-out ${hex.delay}s`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block neon-text-blue">
            Professional Toolkit
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of tools and methodologies I've mastered to deliver end-to-end design solutions that align with business goals.
          </p>
        </div>
        
        {/* New 3D-style card layout */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Design Tools */}
          <div className="glass-enhanced p-6 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)] transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold neon-text-blue">Design Tools</h3>
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            
            <div className="space-y-6">
              {designTools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-900/30 border border-blue-500/20">
                        {tool.icon}
                      </div>
                      <span className="font-medium text-white">{tool.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tool.level}
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ 
                        width: `${tool.percentage}%`,
                        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6), rgba(37, 99, 235, 0.8))',
                        boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="glass-enhanced p-6 rounded-2xl border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)] transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#b794f4', textShadow: '0 0 10px rgba(183, 148, 244, 0.5)' }}>
                Technical Skills
              </h3>
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            
            <div className="space-y-6">
              {techTools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/30 border border-purple-500/20">
                        {tool.icon}
                      </div>
                      <span className="font-medium text-white">{tool.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {tool.level}
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ 
                        width: `${tool.percentage}%`,
                        background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.6), rgba(124, 58, 237, 0.8))',
                        boxShadow: '0 0 8px rgba(139, 92, 246, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Design Process */}
          <div className="glass-enhanced p-6 rounded-2xl border border-pink-500/20 shadow-[0_0_25px_rgba(236,72,153,0.15)] transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#f9a8d4', textShadow: '0 0 10px rgba(249, 168, 212, 0.5)' }}>
                Design Process
              </h3>
              <Layers className="h-6 w-6 text-pink-400" />
            </div>
            
            <div className="space-y-6">
              {designProcesses.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-pink-900/30 border border-pink-500/20">
                        {tool.icon}
                      </div>
                      <span className="font-medium text-white">{tool.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      {tool.level}
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ 
                        width: `${tool.percentage}%`,
                        background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.6), rgba(219, 39, 119, 0.8))',
                        boxShadow: '0 0 8px rgba(236, 72, 153, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal element with code animation */}
        <div className="mt-16 max-w-2xl mx-auto glass-enhanced rounded-xl border border-blue-500/30 overflow-hidden">
          <div className="p-3 border-b border-gray-800 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
            </div>
            <div className="mx-auto text-sm font-mono text-gray-400">toolkit.js</div>
          </div>
          
          <div className="p-4 font-mono text-xs space-y-1 relative">
            <div><span className="text-purple-400">const</span> <span className="text-green-400">designerToolkit</span> = {'{'}
              <span className="text-yellow-400"> tools</span>: [<span className="text-blue-400">'Figma'</span>, <span className="text-blue-400">'Sketch'</span>, <span className="text-blue-400">'AdobeXD'</span>],
              <span className="text-yellow-400"> skills</span>: [<span className="text-blue-400">'UX Research'</span>, <span className="text-blue-400">'Wireframing'</span>, <span className="text-blue-400">'Prototyping'</span>]
            {'}'}</div>
            <div><span className="text-purple-400">const</span> <span className="text-green-400">developerToolkit</span> = {'{'}
              <span className="text-yellow-400"> languages</span>: [<span className="text-blue-400">'JavaScript'</span>, <span className="text-blue-400">'HTML/CSS'</span>, <span className="text-blue-400">'React'</span>],
              <span className="text-yellow-400"> tools</span>: [<span className="text-blue-400">'Git'</span>, <span className="text-blue-400">'VS Code'</span>, <span className="text-blue-400">'Terminal'</span>]
            {'}'}</div>
            <div><span className="text-purple-400">function</span> <span className="text-green-400">combineSkills</span>() {'{'}</div>
            <div className="pl-4"><span className="text-purple-400">return</span> {'{'} 
              <span className="text-yellow-400">...designerToolkit</span>, 
              <span className="text-yellow-400"> ...developerToolkit</span>, 
              <span className="text-yellow-400"> title</span>: <span className="text-blue-400">'UI/UX Engineer'</span> 
            {'}'}</div>
            <div>{'}'}</div>
            <div className="mt-2"><span className="text-purple-400">const</span> <span className="text-green-400">result</span> = <span className="text-green-400">combineSkills</span>();</div>
            <div><span className="text-green-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">result</span>); <span className="text-gray-500">// The perfect hybrid skillset</span></div>
            
            <div className="h-4 w-2 bg-blue-400 opacity-70 absolute bottom-2 left-[calc(50%+100px)] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBeltSection;
