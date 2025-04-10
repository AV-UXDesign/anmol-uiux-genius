
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const DesignSystemSection = () => {
  const [selectedColor, setSelectedColor] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  
  const colors = [
    { name: 'primary', class: 'bg-blue-500' },
    { name: 'success', class: 'bg-green-500' },
    { name: 'warning', class: 'bg-yellow-500' },
    { name: 'danger', class: 'bg-red-500' },
    { name: 'neutral', class: 'bg-gray-500' }
  ];
  
  const sizes = [
    { name: 'sm', label: 'Small' },
    { name: 'md', label: 'Medium' },
    { name: 'lg', label: 'Large' }
  ];

  const getButtonClass = (color) => {
    switch(color) {
      case 'primary': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-blue-500/50';
      case 'success': return 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/50';
      case 'warning': return 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border-yellow-500/50';
      case 'danger': return 'bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/50';
      case 'neutral': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 border-gray-500/50';
      default: return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-blue-500/50';
    }
  };
  
  const getButtonSize = (size) => {
    switch(size) {
      case 'sm': return 'text-xs px-2 py-1';
      case 'md': return 'text-sm px-4 py-2';
      case 'lg': return 'text-base px-6 py-3';
      default: return 'text-sm px-4 py-2';
    }
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Design System
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Consistency at scale with reusable components and design tokens
        </p>
        
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="mx-auto flex justify-center mb-8 backdrop-blur-xl bg-black/40 border border-blue-500/20 rounded-full overflow-hidden p-1">
            <TabsTrigger value="buttons" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Buttons
            </TabsTrigger>
            <TabsTrigger value="cards" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Cards
            </TabsTrigger>
            <TabsTrigger value="forms" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Forms
            </TabsTrigger>
            <TabsTrigger value="typography" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Typography
            </TabsTrigger>
          </TabsList>
          
          {/* Buttons */}
          <TabsContent value="buttons" className="animate-fade-in">
            <Card className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 neon-text-blue">Button Components</h3>
                
                <div className="space-y-8">
                  {/* Color Selection */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Color Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      {colors.map(color => (
                        <button
                          key={color.name}
                          className={`w-12 h-12 rounded-full ${color.class} ${
                            selectedColor === color.name ? 'ring-2 ring-white shadow-lg shadow-' + color.class : ''
                          } transition-all duration-300 hover:scale-110`}
                          onClick={() => setSelectedColor(color.name)}
                          aria-label={`Select ${color.name} color`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Size Selection */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Size Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      {sizes.map(size => (
                        <button
                          key={size.name}
                          className={`backdrop-blur-xl bg-black/60 px-4 py-2 rounded-md border ${
                            selectedSize === size.name ? 'border-blue-500/50 text-blue-400' : 'border-gray-800 text-gray-400'
                          } transition-all duration-300`}
                          onClick={() => setSelectedSize(size.name)}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Button Preview */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Result</h4>
                    <div className="backdrop-blur-xl bg-black/60 p-8 rounded-lg flex items-center justify-center border border-gray-800">
                      <button
                        className={`rounded-md backdrop-blur-xl border ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)} transition-all duration-300 hover:scale-105`}
                      >
                        Example Button
                      </button>
                    </div>
                  </div>
                  
                  {/* Code */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Component Code</h4>
                    <div className="backdrop-blur-xl bg-black/60 p-4 rounded-lg overflow-x-auto text-xs border border-gray-800">
                      <pre className="text-gray-300 font-mono">
{`<button
  className="rounded-md backdrop-blur-xl border ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)} transition-all hover:scale-105"
>
  Example Button
</button>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Cards */}
          <TabsContent value="cards" className="animate-fade-in">
            <Card className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 neon-text-blue">Card Components</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Card Types */}
                  <div>
                    <h4 className="font-medium mb-4 text-gray-300">Card Variations</h4>
                    <div className="space-y-6">
                      {/* Simple Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <h5 className="font-medium mb-2 text-white">Simple Card</h5>
                        <p className="text-sm text-gray-400">Basic container with minimal styling</p>
                      </div>
                      
                      {/* Feature Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-4 rounded-lg border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 border border-blue-500/30">
                          <span className="text-blue-400">✨</span>
                        </div>
                        <h5 className="font-medium mb-2 text-white">Feature Card</h5>
                        <p className="text-sm text-gray-400">Highlight key features or benefits</p>
                      </div>
                      
                      {/* Profile Card */}
                      <div className="backdrop-blur-xl bg-black/60 p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:border-blue-500/30">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                            <span className="text-xl">👤</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-white">Profile Card</h5>
                            <p className="text-xs text-gray-400">User information display</p>
                          </div>
                        </div>
                        <div className="border-t border-gray-800 pt-3 mt-3">
                          <p className="text-sm text-gray-400">Additional profile information and actions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Tokens */}
                  <div>
                    <h4 className="font-medium mb-4 text-gray-300">Design Tokens</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium mb-2 text-gray-300">Border Radius</h5>
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-sm mb-2 border border-blue-500/30"></div>
                            <span className="text-xs text-gray-400">sm</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-md mb-2 border border-blue-500/30"></div>
                            <span className="text-xs text-gray-400">md</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-lg mb-2 border border-blue-500/30"></div>
                            <span className="text-xs text-gray-400">lg</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full mb-2 border border-blue-500/30"></div>
                            <span className="text-xs text-gray-400">full</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-2 text-gray-300">Shadows</h5>
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/60 rounded-md shadow-[0_0_5px_rgba(59,130,246,0.1)] border border-blue-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">sm</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/60 rounded-md shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">md</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/60 rounded-md shadow-[0_0_25px_rgba(59,130,246,0.15)] border border-blue-500/20 mb-2"></div>
                            <span className="text-xs text-gray-400">lg</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-2 text-gray-300">Effects</h5>
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/40 rounded-md border border-white/10 mb-2"></div>
                            <span className="text-xs text-gray-400">Glass</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 backdrop-blur-xl bg-black/40 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] rounded-md mb-2"></div>
                            <span className="text-xs text-gray-400">Neon</span>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md border border-white/10 mb-2"></div>
                            <span className="text-xs text-gray-400">Gradient</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Forms */}
          <TabsContent value="forms" className="animate-fade-in">
            <Card className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 neon-text-blue">Form Components</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 text-gray-300">Input Types</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">Text Input</label>
                        <input 
                          type="text" 
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-blue-500/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.15)] outline-none text-white transition-all duration-300" 
                          placeholder="Enter text" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">Dropdown Select</label>
                        <div className="relative">
                          <select 
                            className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-blue-500/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.15)] outline-none text-white appearance-none transition-all duration-300"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L6 6L11 1" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input type="checkbox" id="checkbox" className="peer opacity-0 absolute h-5 w-5" />
                          <div className="border border-gray-700 peer-checked:border-blue-500 rounded h-5 w-5 transition-all"></div>
                          <div className="absolute hidden peer-checked:flex top-0 left-0 h-5 w-5 items-center justify-center text-blue-500">✓</div>
                        </div>
                        <label htmlFor="checkbox" className="text-sm text-gray-300">Checkbox Option</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input type="radio" id="radio" name="radio-group" className="peer opacity-0 absolute h-5 w-5" />
                          <div className="border border-gray-700 peer-checked:border-blue-500 rounded-full h-5 w-5"></div>
                          <div className="absolute hidden peer-checked:block top-1 left-1 h-3 w-3 rounded-full bg-blue-500"></div>
                        </div>
                        <label htmlFor="radio" className="text-sm text-gray-300">Radio Option</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4 text-gray-300">Form Example</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">Full Name</label>
                        <input 
                          type="text" 
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-blue-500/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.15)] outline-none text-white transition-all duration-300" 
                          placeholder="John Doe" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">Email Address</label>
                        <input 
                          type="email" 
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-blue-500/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.15)] outline-none text-white transition-all duration-300" 
                          placeholder="john@example.com" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                        <textarea 
                          className="backdrop-blur-xl bg-black/40 w-full p-3 rounded-md border border-gray-800 focus:border-blue-500/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.15)] outline-none text-white transition-all duration-300" 
                          rows={3} 
                          placeholder="Your message here"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input type="checkbox" id="terms" className="peer opacity-0 absolute h-5 w-5" />
                          <div className="border border-gray-700 peer-checked:border-blue-500 rounded h-5 w-5"></div>
                          <div className="absolute hidden peer-checked:flex top-0 left-0 h-5 w-5 items-center justify-center text-blue-500">✓</div>
                        </div>
                        <label htmlFor="terms" className="text-xs text-gray-400">I agree to the terms and conditions</label>
                      </div>
                      
                      <Button 
                        className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-white w-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      >
                        Submit Form
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Typography */}
          <TabsContent value="typography" className="animate-fade-in">
            <Card className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 neon-text-blue">Typography System</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Headings</h4>
                    <div className="space-y-4">
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <h1 className="text-4xl font-bold text-white">Heading 1</h1>
                        <div className="text-xs text-blue-400 mt-1">4xl / Bold / 36px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-white">Heading 2</h2>
                        <div className="text-xs text-blue-400 mt-1">3xl / Bold / 30px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white">Heading 3</h3>
                        <div className="text-xs text-blue-400 mt-1">2xl / Bold / 24px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <h4 className="text-xl font-medium text-white">Heading 4</h4>
                        <div className="text-xs text-blue-400 mt-1">xl / Medium / 20px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <h5 className="text-lg font-medium text-white">Heading 5</h5>
                        <div className="text-xs text-blue-400 mt-1">lg / Medium / 18px</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Body Text</h4>
                    <div className="space-y-4">
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <p className="text-base text-white">Body Regular - The quick brown fox jumps over the lazy dog.</p>
                        <div className="text-xs text-blue-400 mt-1">base / Regular / 16px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <p className="text-sm text-white">Body Small - The quick brown fox jumps over the lazy dog.</p>
                        <div className="text-xs text-blue-400 mt-1">sm / Regular / 14px</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <p className="text-xs text-white">Caption - The quick brown fox jumps over the lazy dog.</p>
                        <div className="text-xs text-blue-400 mt-1">xs / Regular / 12px</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Special Text</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <p className="neon-text-blue text-base">Neon Blue Text</p>
                        <div className="text-xs text-gray-400 mt-1">With glow effect</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-purple-500/20 transition-all duration-300">
                        <p className="text-purple-400 text-base" style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}>Neon Purple Text</p>
                        <div className="text-xs text-gray-400 mt-1">With glow effect</div>
                      </div>
                      <div className="p-3 backdrop-blur-xl bg-black/30 rounded-md border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-base font-bold">Gradient Text</p>
                        <div className="text-xs text-gray-400 mt-1">Text with gradient fill</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DesignSystemSection;
