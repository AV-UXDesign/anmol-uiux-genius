
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Cpu, Figma, PenTool, Brush,
  Layers, PackageCheck, BarChart4, Layout,
  Globe, Database, User, Terminal, Zap, Sparkles, FileCode, Paintbrush
} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ScrollArea } from '@/components/ui/scroll-area';

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
      description: 'Wireframes, high-fidelity UI, interactive prototypes',
      category: 'design',
      proficiency: 90
    },
    {
      name: 'Photoshop',
      icon: <Brush />,
      description: 'UI visuals, mockups, image editing',
      category: 'design',
      proficiency: 85
    },
    {
      name: 'Illustrator',
      icon: <Layers />,
      description: 'Vector design, branding assets, illustrations',
      category: 'design',
      proficiency: 80
    },

    {
      name: 'HTML',
      icon: <FileCode />,
      description: 'Semantic markup for structured layouts',
      category: 'development',
      proficiency: 85
    },
    {
      name: 'SCSS',
      icon: <Paintbrush />,
      description: 'Modular, maintainable CSS with variables & nesting',
      category: 'development',
      proficiency: 85
    },
    {
      name: 'Angular',
      icon: <Globe />,
      description: 'Scalable SPA development with TypeScript',
      category: 'development',
      proficiency: 95
    },
    {
      name: 'TypeScript',
      icon: <Code />,
      description: 'Typed JavaScript for robust applications',
      category: 'development',
      proficiency: 90
    },
    {
      name: 'Framer',
      icon: <Cpu />,
      description: 'Interactive UI, motion prototyping, micro animations',
      category: 'prototyping',
      proficiency: 85
    },
    {
      name: 'Analytics',
      icon: <BarChart4 />,
      description: 'User insights, behavior tracking, A/B testing',
      category: 'prototyping',
      proficiency: 75
    },
    {
      name: 'User Testing',
      icon: <User />,
      description: 'Research, usability testing, UX audits',
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4338ca_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
        <motion.div
          className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-indigo-500/10 filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="relative flex items-center justify-center mb-2">
              <Sparkles className="text-indigo-400 h-6 w-6 absolute -left-8" />
              <span className="text-indigo-400 font-medium">TOOLKIT</span>
              <Sparkles className="text-indigo-400 h-6 w-6 absolute -right-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Professional Arsenal
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging these powerful tools to create exceptional digital experiences that solve real business problems.
          </p>
        </div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ToggleGroup type="single" value={activeCategory} onValueChange={(value) => value && setActiveCategory(value as any)} className="p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl">
            <ToggleGroupItem value="all" variant="neonChip" className="relative overflow-hidden">
              All Tools
            </ToggleGroupItem>
            <ToggleGroupItem value="design" variant="neonChip" className="relative overflow-hidden">
              Design
            </ToggleGroupItem>
            <ToggleGroupItem value="development" variant="neonChip" className="relative overflow-hidden">
              Development
            </ToggleGroupItem>
            <ToggleGroupItem value="prototyping" variant="neonChip" className="relative overflow-hidden">
              Prototyping
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        {activeCategory === 'all' ? (
          <div className="space-y-16">
            <CategorySection
              title="Design Tools"
              icon={<Layout className="h-5 w-5 text-indigo-400" />}
              tools={toolsByCategory.design}
            />

            <CategorySection
              title="Development Tools"
              icon={<Terminal className="h-5 w-5 text-indigo-400" />}
              tools={toolsByCategory.development}
            />

            <CategorySection
              title="Prototyping & Testing"
              icon={<Cpu className="h-5 w-5 text-indigo-400" />}
              tools={toolsByCategory.prototyping}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-xl border border-indigo-500/20 shadow-xl mx-auto max-w-4xl bg-[#0c0c1d]/80 backdrop-blur-xl"
        >
          <div className="flex items-center px-4 py-2 bg-indigo-900/30 border-b border-indigo-500/20">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <p className="text-xs text-indigo-300 font-mono">toolkit.service.ts</p>
          </div>

          <ScrollArea className="p-6 font-mono text-sm overflow-auto max-h-[320px]">
            <p className="text-indigo-300">import {'{'} Injectable {'}'} from '@angular/core';</p>
            <p className="text-indigo-300">import {'{'} Observable, of {'}'} from 'rxjs';</p>
            <p className="text-indigo-300">import {'{'} delay, map {'}'} from 'rxjs/operators';</p>
            <p className="text-gray-500">// Interfaces</p>
            <p className="text-indigo-300">export interface Tool {'{'}</p>
            <p className="text-gray-300 ml-2">id: string;</p>
            <p className="text-gray-300 ml-2">name: string;</p>
            <p className="text-gray-300 ml-2">category: 'design' | 'development' | 'prototyping';</p>
            <p className="text-gray-300 ml-2">description: string;</p>
            <p className="text-gray-300 ml-2">proficiency: number;</p>
            <p className="text-indigo-300">{'}'}</p>
            <p className="text-gray-500">// Service</p>
            <p className="text-indigo-300">@Injectable({'{'}</p>
            <p className="text-gray-300 ml-2">providedIn: 'root'</p>
            <p className="text-indigo-300">{'})'}</p>
            <p className="text-indigo-300">export class ToolkitService {'{'}</p>
            <p className="text-indigo-300 ml-2">private tools: Tool[] = [</p>
            <p className="text-green-300 ml-4">// Design tools</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'figma', name: 'Figma', category: 'design', description: 'UI/UX design, prototyping, design systems', proficiency: 95 {'}'},</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'xd', name: 'Adobe XD', category: 'design', description: 'UI design, wireframing, prototyping', proficiency: 90 {'}'},</p>
            <p className="text-green-300 ml-4">// Development tools</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'angular', name: 'Angular', category: 'development', description: 'Enterprise frontend framework', proficiency: 95 {'}'},</p>
            <p className="text-gray-300 ml-4">{'{'} id: 'typescript', name: 'TypeScript', category: 'development', description: 'Strongly-typed JS development', proficiency: 90 {'}'},</p>
            <p className="text-indigo-300 ml-2">];</p>
            <p className="text-gray-300 ml-2"></p>
            <p className="text-indigo-300 ml-2">getTools(category?: string): Observable&lt;Tool[]&gt; {'{'}</p>
            <p className="text-indigo-300 ml-4">return of(this.tools)</p>
            <p className="text-indigo-300 ml-6">.pipe(</p>
            <p className="text-indigo-300 ml-8">delay(500),</p>
            <p className="text-indigo-300 ml-8">map(tools =&gt; category ? tools.filter(t =&gt; t.category === category) : tools)</p>
            <p className="text-indigo-300 ml-6">);</p>
            <p className="text-indigo-300 ml-2">{'}'}</p>
            <p className="text-indigo-300">{'}'}</p>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  );
};

const CategorySection = ({ title, icon, tools }: { title: string, icon: React.ReactNode, tools: Tool[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 flex items-center">
        <div className="w-10 h-10 rounded-full glass-enhanced flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ToolCard = ({ tool, index }: { tool: Tool, index: number }) => {
  return (
    <motion.div
      className="group relative perspective-500 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
    >
      <div className="h-full glass-card relative p-6 rounded-xl border border-indigo-500/20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        {/* Shiny effect overlay */}
        <div className="absolute -inset-[1px] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine z-0"></div>

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center glass mb-4 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300">
            {tool.icon}
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{tool.description}</p>

          <div className="mt-auto">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">Proficiency</span>
              <span className="text-indigo-400">{tool.proficiency}%</span>
            </div>
            <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                style={{ width: `${tool.proficiency}%` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolBeltSection;
