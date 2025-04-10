
import React from 'react';

const ToolBeltSection = () => {
  const designTools = [
    { name: 'Figma', icon: '🎨', level: 'Expert', percentage: 95 },
    { name: 'Adobe XD', icon: '🖌️', level: 'Advanced', percentage: 85 },
    { name: 'Miro', icon: '🧠', level: 'Expert', percentage: 90 },
    { name: 'Sketch', icon: '✏️', level: 'Advanced', percentage: 80 },
    { name: 'InVision', icon: '📱', level: 'Advanced', percentage: 85 }
  ];

  const techTools = [
    { name: 'Angular', icon: '🅰️', level: 'Advanced', percentage: 85 },
    { name: 'HTML5/CSS3', icon: '🌐', level: 'Expert', percentage: 95 },
    { name: 'JavaScript', icon: '📝', level: 'Advanced', percentage: 80 },
    { name: 'React', icon: '⚛️', level: 'Intermediate', percentage: 75 },
    { name: 'Git/Version Control', icon: '📊', level: 'Advanced', percentage: 85 }
  ];

  const designProcesses = [
    { name: 'User Research', icon: '🔍', level: 'Expert', percentage: 90 },
    { name: 'Wireframing', icon: '📐', level: 'Expert', percentage: 95 },
    { name: 'Prototyping', icon: '📲', level: 'Advanced', percentage: 85 },
    { name: 'Usability Testing', icon: '📋', level: 'Expert', percentage: 90 },
    { name: 'Design Systems', icon: '🧩', level: 'Advanced', percentage: 85 }
  ];

  const renderToolItem = (tool) => (
    <div key={tool.name} className="glass-card p-4 transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3 backdrop-blur-md bg-blue-500/10 h-10 w-10 flex items-center justify-center rounded-lg">{tool.icon}</span>
          <span className="font-medium text-white">{tool.name}</span>
        </div>
        <span className="text-sm px-2 py-1 glass rounded-full text-blue-400 border border-blue-500/20">{tool.level}</span>
      </div>
      <div className="h-1 w-full bg-gray-800 rounded-full">
        <div 
          className="h-1 bg-gradient-to-r from-blue-600/80 to-blue-400/80 rounded-full"
          style={{ width: `${tool.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Professional Toolkit
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive set of tools and methodologies I've mastered to deliver end-to-end design solutions that align with business goals.
        </p>
        
        <div className="relative z-10">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Design Tools */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 inline-block neon-text-blue relative">
                Design Tools
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
              </h3>
              <div className="space-y-4">
                {designTools.map(renderToolItem)}
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 inline-block neon-text-blue relative">
                Technical Skills
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
              </h3>
              <div className="space-y-4">
                {techTools.map(renderToolItem)}
              </div>
            </div>
            
            {/* Design Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 inline-block neon-text-blue relative">
                Design Process
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
              </h3>
              <div className="space-y-4">
                {designProcesses.map(renderToolItem)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBeltSection;
