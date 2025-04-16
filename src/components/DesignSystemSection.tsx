import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { motion } from 'framer-motion';
import { Code, Brush, Layout, Palette, Type, Layers, Box, Sparkles } from 'lucide-react';

const DesignSystemSection = () => {
  const [selectedColor, setSelectedColor] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  const [activeTab, setActiveTab] = useState<'buttons' | 'cards' | 'forms' | 'typography'>('buttons');

  const colors = [
    { name: 'primary', class: 'bg-indigo-500', textClass: 'text-indigo-400', borderClass: 'border-indigo-500/50' },
    { name: 'success', class: 'bg-emerald-500', textClass: 'text-emerald-400', borderClass: 'border-emerald-500/50' },
    { name: 'warning', class: 'bg-amber-500', textClass: 'text-amber-400', borderClass: 'border-amber-500/50' },
    { name: 'danger', class: 'bg-rose-500', textClass: 'text-rose-400', borderClass: 'border-rose-500/50' },
    { name: 'neutral', class: 'bg-slate-500', textClass: 'text-slate-400', borderClass: 'border-slate-500/50' }
  ];

  const sizes = [
    { name: 'sm', label: 'Small' },
    { name: 'md', label: 'Medium' },
    { name: 'lg', label: 'Large' }
  ];

  const getButtonClass = (color) => {
    const selectedColor = colors.find(c => c.name === color);
    return `${selectedColor.class}/20 hover:${selectedColor.class}/30 ${selectedColor.textClass} ${selectedColor.borderClass}`;
  };

  const getButtonSize = (size) => {
    switch (size) {
      case 'sm': return 'text-xs px-2 py-1';
      case 'md': return 'text-sm px-4 py-2';
      case 'lg': return 'text-base px-6 py-3';
      default: return 'text-sm px-4 py-2';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-[#0a0a18]/80 via-[#0d0d20] to-[#0a0a18]/80 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.1
          }}
        ></div>
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
              <Sparkles className="text-indigo-400 h-6 w-6 absolute -right-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Design System
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistency at scale with reusable components and design tokens
          </p>
        </div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => value && setActiveTab(value as any)}
            className="p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl"
          >
            <ToggleGroupItem value="buttons" variant="neonChip" className="relative overflow-hidden">
              Buttons
            </ToggleGroupItem>
            <ToggleGroupItem value="cards" variant="neonChip" className="relative overflow-hidden">
              Cards
            </ToggleGroupItem>
            <ToggleGroupItem value="forms" variant="neonChip" className="relative overflow-hidden">
              Forms
            </ToggleGroupItem>
            <ToggleGroupItem value="typography" variant="neonChip" className="relative overflow-hidden">
              Typography
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="p-1">
          {/* <TabsList className="mx-auto flex justify-center mb-8 p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl">
            <TabsTrigger value="buttons" className="rounded-full px-6 data-[state=active]:bg-indigo-500/20 data-[state=active]:text-indigo-400">
              <Box className="w-4 h-4 mr-2" />
              Buttons
            </TabsTrigger>
            <TabsTrigger value="cards" className="rounded-full px-6 data-[state=active]:bg-indigo-500/20 data-[state=active]:text-indigo-400">
              <Layers className="w-4 h-4 mr-2" />
              Cards
            </TabsTrigger>
            <TabsTrigger value="forms" className="rounded-full px-6 data-[state=active]:bg-indigo-500/20 data-[state=active]:text-indigo-400">
              <Layout className="w-4 h-4 mr-2" />
              Forms
            </TabsTrigger>
            <TabsTrigger value="typography" className="rounded-full px-6 data-[state=active]:bg-indigo-500/20 data-[state=active]:text-indigo-400">
              <Type className="w-4 h-4 mr-2" />
              Typography
            </TabsTrigger>
          </TabsList> */}

          {/* Buttons */}
          <TabsContent value="buttons" className="animate-fade-in">
            <Card className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <motion.div
                className="p-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <h3 className="text-2xl font-bold mb-8 neon-text-indigo flex items-center">
                    <Box className="h-5 w-5 mr-2 text-indigo-400" />
                    Button Components
                  </h3>
                </motion.div>

                <div className="space-y-10">
                  {/* Color Selection */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-4 text-gray-300 text-lg">Color Variants</h4>
                    <ToggleGroup type="single" value={selectedColor} onValueChange={(value) => value && setSelectedColor(value)} className="flex flex-wrap gap-4 p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl">
                      {colors.map(color => (
                        <ToggleGroupItem
                          key={color.name}
                          value={color.name}
                          variant="neonChip"
                          className={`w-auto h-auto ${color.textClass}`}
                        >
                          <div className={`w-4 h-4 rounded-full ${color.class} mr-2 inline-block`}></div>
                          {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </motion.div>

                  {/* Size Selection */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-4 text-gray-300 text-lg">Size Variants</h4>
                    <ToggleGroup type="single" value={selectedSize} onValueChange={(value) => value && setSelectedSize(value)} className="flex flex-wrap gap-4 p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl">
                      {sizes.map(size => (
                        <ToggleGroupItem
                          key={size.name}
                          value={size.name}
                          variant="neonChip"
                        >
                          {size.label}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </motion.div>

                  {/* Button Preview */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-4 text-gray-300 text-lg">Result</h4>
                    <div className="backdrop-blur-xl bg-black/30 p-10 rounded-xl flex items-center justify-center border border-indigo-500/10">
                      <button
                        className={`rounded-lg backdrop-blur-xl border ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)} transition-all duration-300 hover:scale-105 transform-gpu`}
                      >
                        Example Button
                      </button>
                    </div>
                  </motion.div>

                  {/* Code */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-4 text-gray-300 text-lg flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Component Code
                    </h4>
                    <div className="terminal backdrop-blur-xl bg-black/80 p-5 rounded-lg overflow-x-auto text-sm border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                      <pre className="text-gray-300 font-mono">
                        {`<button
  className="rounded-lg backdrop-blur-xl border ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)} transition-all hover:scale-105"
>
  Example Button
</button>`}
                      </pre>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Card>
          </TabsContent>

          {/* Cards */}
          <TabsContent value="cards" className="animate-fade-in">
            <Card className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <motion.div
                className="p-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <h3 className="text-2xl font-bold mb-8 neon-text-indigo flex items-center">
                    <Layers className="h-5 w-5 mr-2" />
                    Card Components
                  </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Card Types */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Card Variations</h4>
                    <div className="space-y-8">
                      {/* Simple Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transform-gpu group">
                        <h5 className="font-medium mb-2 text-white group-hover:text-indigo-300 transition-colors">Simple Card</h5>
                        <p className="text-sm text-gray-400">Basic container with minimal styling</p>
                      </div>

                      {/* Feature Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-6 rounded-xl border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transform-gpu">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-500/30">
                          <span className="text-indigo-400">✨</span>
                        </div>
                        <h5 className="font-medium mb-2 text-white">Feature Card</h5>
                        <p className="text-sm text-gray-400">Highlight key features or benefits</p>
                      </div>

                      {/* Profile Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500/30 transform-gpu group">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-14 h-14 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                            <span className="text-xl">👤</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-white group-hover:text-indigo-300 transition-colors">Profile Card</h5>
                            <p className="text-xs text-gray-400">User information display</p>
                          </div>
                        </div>
                        <div className="border-t border-gray-800 pt-4 mt-4">
                          <p className="text-sm text-gray-400">Additional profile information and actions</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card Tokens */}
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Design Tokens</h4>
                    <div className="space-y-8 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div>
                        <h5 className="text-sm font-medium mb-3 text-indigo-300">Border Radius</h5>
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-sm mb-2 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]"></div>
                            <span className="text-xs text-gray-400">sm</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-md mb-2 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]"></div>
                            <span className="text-xs text-gray-400">md</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-lg mb-2 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]"></div>
                            <span className="text-xs text-gray-400">lg</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-full mb-2 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]"></div>
                            <span className="text-xs text-gray-400">full</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium mb-3 text-indigo-300">Shadows</h5>
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-indigo-500/10 rounded-md shadow-[0_0_5px_rgba(99,102,241,0.1)] border border-indigo-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">sm</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-indigo-500/10 rounded-md shadow-[0_0_15px_rgba(99,102,241,0.15)] border border-indigo-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">md</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-indigo-500/10 rounded-md shadow-[0_0_25px_rgba(99,102,241,0.25)] border border-indigo-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">lg</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium mb-3 text-indigo-300">Effects</h5>
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/40 rounded-md border border-white/10 mb-2"></div>
                            <span className="text-xs text-gray-400">Glass</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/40 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)] rounded-md mb-2"></div>
                            <span className="text-xs text-gray-400">Neon</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-md border border-white/10 mb-2"></div>
                            <span className="text-xs text-gray-400">Gradient</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Card>
          </TabsContent>

          {/* Forms */}
          <TabsContent value="forms" className="animate-fade-in">
            <Card className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <motion.div
                className="p-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <h3 className="text-2xl font-bold mb-8 neon-text-indigo flex items-center">
                    <Layout className="h-5 w-5 mr-2" />
                    Form Components
                  </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Input Types</h4>
                    <div className="space-y-6 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-indigo-300">Text Input</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] outline-none text-white transition-all duration-300"
                            placeholder="Enter text"
                          />
                          <div className="absolute inset-0 pointer-events-none rounded-md border border-indigo-400/0 group-focus:border-indigo-400/30 transition-colors duration-300"></div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-indigo-300">Dropdown Select</label>
                        <div className="relative">
                          <select
                            className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] outline-none text-white appearance-none transition-all duration-300"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L6 6L11 1" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="relative w-5 h-5 group">
                          <input type="checkbox" id="checkbox" className="peer opacity-0 absolute h-5 w-5 cursor-pointer z-10" />
                          <div className="absolute top-0 left-0 border border-gray-700 peer-checked:border-indigo-500 rounded w-5 h-5 transition-all peer-checked:bg-indigo-500/20"></div>
                          <div className="absolute hidden peer-checked:flex top-0 left-0 h-5 w-5 items-center justify-center text-indigo-400">✓</div>
                        </div>
                        <label htmlFor="checkbox" className="text-sm text-indigo-300 cursor-pointer">Checkbox Option</label>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="relative w-5 h-5 group">
                          <input type="radio" id="radio" name="radio-group" className="peer opacity-0 absolute h-5 w-5 cursor-pointer z-10" />
                          <div className="absolute top-0 left-0 border border-gray-700 peer-checked:border-indigo-500 rounded-full w-5 h-5 transition-all"></div>
                          <div className="absolute hidden peer-checked:block top-1 left-1 h-3 w-3 rounded-full bg-indigo-500"></div>
                        </div>
                        <label htmlFor="radio" className="text-sm text-indigo-300 cursor-pointer">Radio Option</label>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Form Example</h4>
                    <form className="space-y-5 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-indigo-300">Full Name</label>
                        <input
                          type="text"
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] outline-none text-white transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-indigo-300">Email Address</label>
                        <input
                          type="email"
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] outline-none text-white transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-indigo-300">Message</label>
                        <textarea
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] outline-none text-white transition-all duration-300"
                          rows={3}
                          placeholder="Your message here"
                        ></textarea>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="relative w-5 h-5 group">
                          <input type="checkbox" id="terms" className="peer opacity-0 absolute h-5 w-5 cursor-pointer z-10" />
                          <div className="absolute top-0 left-0 border border-gray-700 peer-checked:border-indigo-500 rounded w-5 h-5 transition-all peer-checked:bg-indigo-500/20"></div>
                          <div className="absolute hidden peer-checked:flex top-0 left-0 h-5 w-5 items-center justify-center text-indigo-400">✓</div>
                        </div>
                        <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer">I agree to the terms and conditions</label>
                      </div>

                      <Button
                        className="w-full backdrop-blur-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/50 text-indigo-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] py-3"
                      >
                        Submit Form
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </motion.div>
            </Card>
          </TabsContent>

          {/* Typography */}
          <TabsContent value="typography" className="animate-fade-in">
            <Card className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <motion.div
                className="p-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <h3 className="text-2xl font-bold mb-8 neon-text-indigo flex items-center">
                    <Type className="h-5 w-5 mr-2" />
                    Typography System
                  </h3>
                </motion.div>

                <div className="space-y-10">
                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Headings</h4>
                    <div className="space-y-5 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <h1 className="text-4xl font-bold text-white">Heading 1</h1>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">4xl / Bold / 36px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-white">Heading 2</h2>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">3xl / Bold / 30px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white">Heading 3</h3>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">2xl / Bold / 24px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-white">Heading 4</h4>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">xl / Medium / 20px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <h5 className="text-lg font-medium text-white">Heading 5</h5>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">lg / Medium / 18px</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Body Text</h4>
                    <div className="space-y-5 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <p className="text-base text-white">Body Regular - The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">base / Regular / 16px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <p className="text-sm text-white">Body Small - The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">sm / Regular / 14px</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 flex items-center">
                        <div className="flex-1">
                          <p className="text-xs text-white">Caption - The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">xs / Regular / 12px</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item}>
                    <h4 className="font-medium mb-6 text-gray-300 text-lg">Special Text</h4>
                    <div className="grid md:grid-cols-3 gap-5 backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 text-center">
                        <p className="neon-text-indigo text-xl mb-2">Neon Indigo Text</p>
                        <div className="text-xs text-gray-400">With glow effect</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-purple-500/20 transition-all duration-300 text-center">
                        <p className="text-purple-400 text-xl mb-2" style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4)' }}>Neon Purple Text</p>
                        <div className="text-xs text-gray-400">With glow effect</div>
                      </div>
                      <div className="p-4 backdrop-blur-xl bg-black/50 rounded-lg border border-gray-800 hover:border-indigo-500/20 transition-all duration-300 text-center">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 text-xl font-bold mb-2">Gradient Text</p>
                        <div className="text-xs text-gray-400">Text with gradient fill</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DesignSystemSection;
