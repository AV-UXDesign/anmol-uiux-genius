
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const DesignSystemSection = () => {
  const [selectedColor, setSelectedColor] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  
  const colors = [
    { name: 'primary', class: 'bg-neon-blue' },
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
      case 'primary': return 'bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue';
      case 'success': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'warning': return 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500';
      case 'danger': return 'bg-red-500/20 hover:bg-red-500/30 text-red-500';
      case 'neutral': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-300';
      default: return 'bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue';
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Design System
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Consistency at scale with reusable components and design tokens
        </p>
        
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="glass mx-auto flex justify-center mb-8">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>
          
          {/* Buttons */}
          <TabsContent value="buttons" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Button Components</h3>
              
              <div className="space-y-8">
                {/* Color Selection */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Color Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    {colors.map(color => (
                      <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full ${color.class} ${
                          selectedColor === color.name ? 'ring-2 ring-white' : ''
                        }`}
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
                        className={`glass px-3 py-1 rounded-md ${
                          selectedSize === size.name ? 'neon-border' : ''
                        }`}
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
                  <div className="bg-dark-300/50 p-8 rounded-lg flex items-center justify-center">
                    <button
                      className={`rounded-md glass ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)}`}
                    >
                      Example Button
                    </button>
                  </div>
                </div>
                
                {/* Code */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Component Code</h4>
                  <pre className="bg-dark-300/50 p-4 rounded-lg overflow-x-auto text-xs">
                    <code className="text-gray-300">
{`<button
  className="rounded-md glass ${getButtonClass(selectedColor)} ${getButtonSize(selectedSize)}"
>
  Example Button
</button>`}
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Cards */}
          <TabsContent value="cards" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Card Components</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card Types */}
                <div>
                  <h4 className="font-medium mb-4 text-gray-300">Card Variations</h4>
                  <div className="space-y-6">
                    {/* Simple Card */}
                    <div className="glass p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Simple Card</h5>
                      <p className="text-sm text-gray-400">Basic container with minimal styling</p>
                    </div>
                    
                    {/* Feature Card */}
                    <div className="glass p-4 rounded-lg border border-neon-blue/30">
                      <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mb-3">
                        <span>✨</span>
                      </div>
                      <h5 className="font-medium mb-2">Feature Card</h5>
                      <p className="text-sm text-gray-400">Highlight key features or benefits</p>
                    </div>
                    
                    {/* Profile Card */}
                    <div className="glass p-4 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                        <div>
                          <h5 className="font-medium">Profile Card</h5>
                          <p className="text-xs text-gray-400">User information display</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-700 pt-3 mt-3">
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
                      <h5 className="text-sm font-medium mb-2">Border Radius</h5>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-neon-blue/20 rounded-sm mb-2"></div>
                          <span className="text-xs text-gray-400">sm</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-neon-blue/20 rounded-md mb-2"></div>
                          <span className="text-xs text-gray-400">md</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-neon-blue/20 rounded-lg mb-2"></div>
                          <span className="text-xs text-gray-400">lg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Shadows</h5>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-dark-300 rounded-md shadow-sm mb-2"></div>
                          <span className="text-xs text-gray-400">sm</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-dark-300 rounded-md shadow-md mb-2"></div>
                          <span className="text-xs text-gray-400">md</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-dark-300 rounded-md shadow-lg mb-2"></div>
                          <span className="text-xs text-gray-400">lg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Effects</h5>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="w-16 h-16 glass rounded-md mb-2"></div>
                          <span className="text-xs text-gray-400">Glass</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 glass neon-border rounded-md mb-2"></div>
                          <span className="text-xs text-gray-400">Neon</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-md mb-2"></div>
                          <span className="text-xs text-gray-400">Gradient</span>
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
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Form Components</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4 text-gray-300">Input Types</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Text Input</label>
                      <input type="text" className="glass w-full p-2 rounded-md border border-gray-700 focus:neon-border outline-none" placeholder="Enter text" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Dropdown Select</label>
                      <select className="glass w-full p-2 rounded-md border border-gray-700 focus:neon-border outline-none bg-transparent">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="checkbox" className="rounded border-gray-700 text-neon-blue" />
                      <label htmlFor="checkbox" className="text-sm text-gray-300">Checkbox Option</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="radio" name="radio-group" className="border-gray-700 text-neon-blue" />
                      <label htmlFor="radio" className="text-sm text-gray-300">Radio Option</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4 text-gray-300">Form Example</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Full Name</label>
                      <input type="text" className="glass w-full p-2 rounded-md border border-gray-700 focus:neon-border outline-none" placeholder="John Doe" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Email Address</label>
                      <input type="email" className="glass w-full p-2 rounded-md border border-gray-700 focus:neon-border outline-none" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                      <textarea className="glass w-full p-2 rounded-md border border-gray-700 focus:neon-border outline-none" rows={3} placeholder="Your message here"></textarea>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded border-gray-700 text-neon-blue" />
                      <label htmlFor="terms" className="text-xs text-gray-400">I agree to the terms and conditions</label>
                    </div>
                    
                    <Button 
                      className="glass neon-border bg-neon-blue/10 hover:bg-neon-blue/20 w-full"
                    >
                      Submit Form
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Typography */}
          <TabsContent value="typography" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Typography System</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Headings</h4>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold">Heading 1</h1>
                      <div className="text-xs text-gray-400 mt-1">4xl / Bold / 36px</div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Heading 2</h2>
                      <div className="text-xs text-gray-400 mt-1">3xl / Bold / 30px</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Heading 3</h3>
                      <div className="text-xs text-gray-400 mt-1">2xl / Bold / 24px</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">Heading 4</h4>
                      <div className="text-xs text-gray-400 mt-1">xl / Medium / 20px</div>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium">Heading 5</h5>
                      <div className="text-xs text-gray-400 mt-1">lg / Medium / 18px</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Body Text</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-base">Body Regular - The quick brown fox jumps over the lazy dog.</p>
                      <div className="text-xs text-gray-400 mt-1">base / Regular / 16px</div>
                    </div>
                    <div>
                      <p className="text-sm">Body Small - The quick brown fox jumps over the lazy dog.</p>
                      <div className="text-xs text-gray-400 mt-1">sm / Regular / 14px</div>
                    </div>
                    <div>
                      <p className="text-xs">Caption - The quick brown fox jumps over the lazy dog.</p>
                      <div className="text-xs text-gray-400 mt-1">xs / Regular / 12px</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Special Text</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="neon-text-blue text-base">Neon Blue Text</p>
                      <div className="text-xs text-gray-400 mt-1">With glow effect</div>
                    </div>
                    <div>
                      <p className="neon-text-purple text-base">Neon Purple Text</p>
                      <div className="text-xs text-gray-400 mt-1">With glow effect</div>
                    </div>
                    <div>
                      <p className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple text-base font-bold">Gradient Text</p>
                      <div className="text-xs text-gray-400 mt-1">Text with gradient fill</div>
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
