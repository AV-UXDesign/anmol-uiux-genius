import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Cpu, Figma, PenTool, Brush, 
  Layers, PackageCheck, BarChart4, Layout, 
  Globe, Database, User, Terminal, Zap
} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Tool {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'design' | 'development' | 'prototyping';
  proficiency: number;
}

const ToolBeltSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'development' | 'prototyping'>('all');
  
  const tools: Tool[] = [
    { 
      name: 'Figma', 
      icon: <Figma />, 
      description: 'UI/UX design, prototyping, design systems', 
      category: 'design',
      proficiency: 95
    },
    { 
      name: 'Adobe XD', 
      icon: <PenTool />, 
      description: 'UI design, wireframing, prototyping', 
      category: 'design',
      proficiency: 90
    },
    { 
      name: 'Sketch', 
      icon: <Brush />, 
      description: 'Digital design, vector editing, UI layouts', 
      category: 'design',
      proficiency: 85
    },
    { 
      name: 'Illustrator', 
      icon: <Layers />, 
      description: 'Vector graphics, icon design, illustrations', 
      category: 'design',
      proficiency: 80
    },
    
    { 
      name: 'Angular', 
      icon: <Globe />, 
      description: 'Enterprise-grade frontend framework', 
      category: 'development',
      proficiency: 95
    },
    { 
      name: 'TypeScript', 
      icon: <Code />, 
      description: 'Strongly-typed JavaScript development', 
      category: 'development',
      proficiency: 90
    },
    { 
      name: 'RxJS', 
      icon: <Zap />, 
      description: 'Reactive programming with observables', 
      category: 'development',
      proficiency: 85
    },
    { 
      name: 'NgRx', 
      icon: <Database />, 
      description: 'State management for Angular applications', 
      category: 'development',
      proficiency: 85
    },
    
    { 
      name: 'Axure RP', 
      icon: <PackageCheck />, 
      description: 'Advanced prototyping, interactions', 
      category: 'prototyping',
      proficiency: 80
    },
    { 
      name: 'Framer', 
      icon: <Cpu />, 
      description: 'Motion design, interactive prototyping', 
      category: 'prototyping',
      proficiency: 85
    },
    { 
      name: 'Analytics', 
      icon: <BarChart4 />, 
      description: 'Data-driven UX decisions, A/B testing', 
      category: 'prototyping',
      proficiency: 75
    },
    { 
      name: 'User Testing', 
      icon: <User />, 
      description: 'Usability studies, research methods', 
      category: 'prototyping',
      proficiency: 90
    },
  ];
  
  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);
    
  const toolsByCategory = {
    design: tools.filter(tool => tool.category === 'design'),
    development: tools.filter(tool => tool.category === 'development'),
    prototyping: tools.filter(tool => tool.category === 'prototyping')
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-blue">
            Professional Toolkit
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and technologies to create exceptional digital experiences that solve real business problems.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <ToggleGroup type="single" value={activeCategory} onValueChange={(value) => value && setActiveCategory(value as any)}>
            <ToggleGroupItem value="all" className="px-6 py-2 glass">
              All Tools
            </ToggleGroupItem>
            <ToggleGroupItem value="design" className="px-6 py-2 glass">
              Design
            </ToggleGroupItem>
            <ToggleGroupItem value="development" className="px-6 py-2 glass">
              Development
            </ToggleGroupItem>
            <ToggleGroupItem value="prototyping" className="px-6 py-2 glass">
              Prototyping
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {activeCategory === 'all' ? (
          <div className="space-y-16">
            <div>
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mr-3">
                  <Layout className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Design Tools</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsByCategory.design.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mr-3">
                  <Terminal className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Development Tools</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsByCategory.development.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mr-3">
                  <Cpu className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Prototyping & Testing</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsByCategory.prototyping.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        )}
        
        <div className="mt-20 terminal overflow-hidden rounded-xl glass-card border border-blue-500/20 shadow-xl mx-auto max-w-4xl">
          <div className="flex items-center px-4 py-2 bg-blue-900/20 border-b border-blue-500/20">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <p className="text-xs text-blue-300 font-mono">toolkit.service.ts</p>
          </div>
          
          <div className="p-6 font-mono text-sm overflow-auto max-h-80">
            <p className="text-blue-300">import {'{ Injectable }'} from '@angular/core';</p>
            <p className="text-blue-300">import {'{ Observable, of }'} from 'rxjs';</p>
            <p className="text-blue-300">import {'{ delay, map }'} from 'rxjs/operators';</p>
            <p className="text-gray-500">// Interfaces</p>
            <p className="text-blue-300">export interface Tool {'{'}</p>
            <p className="text-gray-300 ml-2">id: string;</p>
            <p className="text-gray-300 ml-2">name: string;</p>
            <p className="text-gray-300 ml-2">category: 'design' | 'development' | 'prototyping';</p>
            <p className="text-gray-300 ml-2">description: string;</p>
            <p className="text-gray-300 ml-2">proficiency: number;</p>
            <p className="text-blue-300">{'}'}</p>
            <p className="text-gray-500">// Service</p>
            <p className="text-blue-300">@Injectable({'{'}</p>
            <p className="text-gray-300 ml-2">providedIn: 'root'</p>
            <p className="text-blue-300">{'})'}</p>
            <p className="text-blue-300">export class ToolkitService {'{'}</p>
            <p className="text-blue-300 ml-2">private tools: Tool[] = [</p>
            <p className="text-green-300 ml-4">// Design tools</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'figma', name: 'Figma', category: 'design', description: 'UI/UX design, prototyping, design systems', proficiency: 95 {'}'},</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'xd', name: 'Adobe XD', category: 'design', description: 'UI design, wireframing, prototyping', proficiency: 90 {'}'},</p>
            <p className="text-green-300 ml-4">// Development tools</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'angular', name: 'Angular', category: 'development', description: 'Enterprise frontend framework', proficiency: 95 {'}'},</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'typescript', name: 'TypeScript', category: 'development', description: 'Strongly-typed JS development', proficiency: 90 {'}'},</p>
            <p className="text-blue-300 ml-2">];</p>
            <p className="text-gray-300 ml-2"></p>
            <p className="text-blue-300 ml-2">getTools(category?: string): Observable{'{'}Tool[]{'}'}{'{'}</p>
            <p className="text-blue-300 ml-4">return of(this.tools)</p>
            <p className="text-blue-300 ml-6">.pipe(</p>
            <p className="text-blue-300 ml-8">delay(500),</p>
            <p className="text-blue-300 ml-8">map(tools => category ? tools.filter(t => t.category === category) : tools)</p>
            <p className="text-blue-300 ml-6">);</p>
            <p className="text-blue-300 ml-2">{'}'}</p>
            <p className="text-blue-300">{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <motion.div 
      className="group relative perspective-500 w-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-card relative p-6 rounded-xl border border-blue-500/20 transform transition-transform duration-500 group-hover:transform-style-3d group-hover:rotate-y-10 group-hover:rotate-x-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-500"></div>
        
        <div className="w-12 h-12 rounded-lg flex items-center justify-center glass mb-4 text-blue-400 group-hover:text-blue-300 transition-all duration-300">
          {tool.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Proficiency</span>
            <span className="text-blue-400">{tool.proficiency}%</span>
          </div>
          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${tool.proficiency}%` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolBeltSection;
