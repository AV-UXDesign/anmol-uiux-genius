
import React from 'react';
import { Card } from '@/components/ui/card';

const ToolBeltSection = () => {
  const designTools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '🖌️' },
    { name: 'Miro', icon: '🧠' },
    { name: 'Photoshop', icon: '📷' },
    { name: 'Illustrator', icon: '✏️' }
  ];

  const techTools = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'SCSS', icon: '🎨' },
    { name: 'TypeScript', icon: '📝' },
    { name: 'Git', icon: '📊' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text-purple">
          Tool Belt
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Stack */}
          <div className="glass-card animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-6 text-center">Design Stack</h3>
            <div className="grid grid-cols-3 gap-4">
              {designTools.map((tool, index) => (
                <Card key={tool.name} className="glass hover:neon-border transition-all duration-300 flex flex-col items-center justify-center p-4 aspect-square">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <div className="font-medium">{tool.name}</div>
                </Card>
              ))}
              {/* Visual UI Kit Preview */}
              <Card className="glass col-span-3 p-4 h-40 mt-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 w-full p-2">
                    {Array.from({length: 8}).map((_, i) => (
                      <div key={i} className="h-8 rounded-md bg-neon-blue/20 animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">Design System Preview</div>
              </Card>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="glass-card animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-4">
              {techTools.map((tool, index) => (
                <Card key={tool.name} className="glass hover:neon-border transition-all duration-300 flex flex-col items-center justify-center p-4 aspect-square">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <div className="font-medium">{tool.name}</div>
                </Card>
              ))}
              {/* Animated Code Block */}
              <Card className="glass col-span-3 p-4 h-40 mt-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <pre className="text-xs text-green-400 animate-float">
                    <code>
                      {`import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: \`<div>UI/UX Magic</div>\`,\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent { }`}
                    </code>
                  </pre>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">Angular Component</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBeltSection;
