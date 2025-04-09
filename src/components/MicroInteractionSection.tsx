
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MicroInteractionSection = () => {
  const [hoverState, setHoverState] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  
  // Toggle loading state
  const toggleLoading = () => {
    setLoadingState(true);
    setTimeout(() => setLoadingState(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-dark-100/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-purple">
          Micro-Interaction Showcase
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Small details that create delightful experiences and guide users naturally through interfaces
        </p>
        
        <Tabs defaultValue="hover" className="w-full">
          <TabsList className="glass mx-auto flex justify-center mb-8">
            <TabsTrigger value="hover">Hover States</TabsTrigger>
            <TabsTrigger value="focus">Focus States</TabsTrigger>
            <TabsTrigger value="loading">Loading States</TabsTrigger>
            <TabsTrigger value="empty">Empty States</TabsTrigger>
          </TabsList>
          
          {/* Hover States */}
          <TabsContent value="hover" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Hover State Design</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Hover states provide visual feedback and improve discoverability, making interfaces more intuitive and responsive.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Subtle animation indicates interactivity</li>
                    <li>Increased contrast for accessibility</li>
                    <li>Consistent behavior across the system</li>
                    <li>Provides context without adding visual noise</li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div
                    className={`relative p-6 glass transition-all duration-300 rounded-lg w-64 h-32 flex items-center justify-center ${
                      hoverState ? 'neon-border bg-neon-blue/10' : ''
                    }`}
                    onMouseEnter={() => setHoverState(true)}
                    onMouseLeave={() => setHoverState(false)}
                  >
                    <div className="text-center transition-all duration-300">
                      <span className={`font-medium ${hoverState ? 'text-neon-blue' : 'text-gray-300'}`}>
                        Hover me
                      </span>
                      {hoverState && (
                        <div className="mt-2 text-xs text-neon-blue animate-fade-in">
                          Interactive element
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Focus States */}
          <TabsContent value="focus" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Focus Indicators</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Focus states are crucial for accessibility, helping keyboard users and assistive technology navigate interfaces efficiently.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>High contrast outlines for keyboard navigation</li>
                    <li>Meets WCAG accessibility standards</li>
                    <li>Consistent across all interactive elements</li>
                    <li>Visible but not disruptive to the design</li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="space-y-4">
                    <input
                      type="text"
                      className={`glass w-64 p-3 outline-none rounded-md ${
                        focusState ? 'neon-border' : 'border border-gray-700'
                      }`}
                      placeholder="Click to focus"
                      onFocus={() => setFocusState(true)}
                      onBlur={() => setFocusState(false)}
                    />
                    <div className="text-xs text-center text-gray-400">
                      {focusState ? 
                        <span className="text-neon-blue animate-fade-in">Element focused for accessibility</span> :
                        "Click the input to see focus state"
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Loading States */}
          <TabsContent value="loading" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Loading Animations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Loading states provide feedback during wait times, reducing perceived wait time and increasing user confidence.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Branded, consistent loading animations</li>
                    <li>Progress indicators for longer operations</li>
                    <li>Skeleton screens for content loading</li>
                    <li>Micro-copy to explain the wait when needed</li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="space-y-4 text-center">
                    <button
                      className="glass px-4 py-2 rounded-md hover:neon-border transition-all duration-300"
                      onClick={toggleLoading}
                    >
                      {loadingState ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-t-transparent border-neon-blue rounded-full animate-spin"></div>
                          <span>Loading...</span>
                        </div>
                      ) : "Click to Load"}
                    </button>
                    <div className="text-xs text-gray-400">
                      Click the button to see loading state
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Empty States */}
          <TabsContent value="empty" className="animate-fade-in">
            <Card className="glass-card">
              <h3 className="text-xl font-bold mb-6">Empty States</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Empty states guide users when no content is available, providing clear next steps and preventing confusion.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Helpful illustrations that guide users</li>
                    <li>Clear call-to-action buttons</li>
                    <li>Friendly, helpful microcopy</li>
                    <li>Consistent with brand personality</li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="glass rounded-lg p-6 w-full max-w-xs">
                    <div className="flex flex-col items-center text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-dark-300 mb-4 flex items-center justify-center">
                        <span className="text-2xl">📂</span>
                      </div>
                      <h4 className="font-medium mb-2">No Projects Yet</h4>
                      <p className="text-gray-400 text-sm mb-4">This is where your projects will appear once you create them.</p>
                      <button className="glass px-4 py-2 text-sm rounded-md hover:neon-border transition-all duration-300">
                        + Create First Project
                      </button>
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

export default MicroInteractionSection;
