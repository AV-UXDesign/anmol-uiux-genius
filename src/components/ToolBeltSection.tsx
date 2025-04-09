
import React from 'react';
import { Card } from '@/components/ui/card';

const ToolBeltSection = () => {
  const designTools = [
    { name: 'Figma', icon: '🎨', level: 'Expert' },
    { name: 'Adobe XD', icon: '🖌️', level: 'Advanced' },
    { name: 'Miro', icon: '🧠', level: 'Expert' },
    { name: 'Sketch', icon: '✏️', level: 'Advanced' },
    { name: 'InVision', icon: '📱', level: 'Advanced' }
  ];

  const techTools = [
    { name: 'Angular', icon: '🅰️', level: 'Advanced' },
    { name: 'HTML5/CSS3', icon: '🌐', level: 'Expert' },
    { name: 'JavaScript', icon: '📝', level: 'Advanced' },
    { name: 'React', icon: '⚛️', level: 'Intermediate' },
    { name: 'Git/Version Control', icon: '📊', level: 'Advanced' }
  ];

  const designProcesses = [
    { name: 'User Research', icon: '🔍', level: 'Expert' },
    { name: 'Wireframing', icon: '📐', level: 'Expert' },
    { name: 'Prototyping', icon: '📲', level: 'Advanced' },
    { name: 'Usability Testing', icon: '📋', level: 'Expert' },
    { name: 'Design Systems', icon: '🧩', level: 'Advanced' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Professional Toolkit
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive set of tools and methodologies I've mastered to deliver end-to-end design solutions that align with business goals.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Design Tools */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Design Tools</h3>
            <div className="space-y-4">
              {designTools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Skills</h3>
            <div className="space-y-4">
              {techTools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Design Process */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Design Process</h3>
            <div className="space-y-4">
              {designProcesses.map((process) => (
                <div key={process.name} className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{process.icon}</span>
                    <span className="font-medium">{process.name}</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{process.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBeltSection;
