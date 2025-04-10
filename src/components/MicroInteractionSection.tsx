
import React, { useState } from 'react';
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
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Micro-Interaction Showcase
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Small details that create delightful experiences and guide users naturally through interfaces
        </p>
        
        <Tabs defaultValue="hover" className="w-full">
          <TabsList className="mx-auto flex justify-center mb-8 backdrop-blur-xl bg-black/40 border border-blue-500/20 rounded-full overflow-hidden p-1">
            <TabsTrigger value="hover" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Hover
            </TabsTrigger>
            <TabsTrigger value="focus" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Focus
            </TabsTrigger>
            <TabsTrigger value="loading" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Loading
            </TabsTrigger>
            <TabsTrigger value="empty" className="rounded-full px-6 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Empty States
            </TabsTrigger>
          </TabsList>
          
          {/* Hover States */}
          <TabsContent value="hover" className="animate-fade-in">
            <div className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40 rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 border-r border-blue-500/10">
                  <h3 className="text-xl font-bold mb-6 neon-text-blue">Hover State Design</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Hover states provide visual feedback and improve discoverability, making interfaces more intuitive and responsive.
                    </p>
                    <ul className="space-y-3">
                      {['Subtle animation indicates interactivity', 'Increased contrast for accessibility', 'Consistent behavior across the system', 'Provides context without adding visual noise'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-blue-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-black/20 backdrop-blur-xl p-6 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm relative overflow-hidden">
                    <div
                      className={`relative p-10 backdrop-blur-xl bg-black/40 transition-all duration-300 rounded-xl border ${
                        hoverState 
                          ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                          : 'border-gray-800'
                      }`}
                      onMouseEnter={() => setHoverState(true)}
                      onMouseLeave={() => setHoverState(false)}
                    >
                      <div className={`text-center transition-all duration-300 ${hoverState ? 'scale-110' : ''}`}>
                        <div className={`text-3xl mb-2 transition-all duration-300 ${hoverState ? 'text-blue-400' : 'text-gray-400'}`}>
                          ✨
                        </div>
                        <div className={`font-medium transition-all duration-300 ${hoverState ? 'text-blue-400' : 'text-gray-300'}`}>
                          Hover me
                        </div>
                        <div className={`mt-2 text-xs transition-all duration-300 ${
                          hoverState ? 'opacity-100 text-blue-400' : 'opacity-0 text-gray-500'
                        }`}>
                          Interactive element
                        </div>
                      </div>
                      
                      {hoverState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center text-xs text-gray-500">
                      Try hovering over the element above
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Focus States */}
          <TabsContent value="focus" className="animate-fade-in">
            <div className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40 rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 border-r border-blue-500/10">
                  <h3 className="text-xl font-bold mb-6 neon-text-blue">Focus Indicators</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Focus states are crucial for accessibility, helping keyboard users and assistive technology navigate interfaces efficiently.
                    </p>
                    <ul className="space-y-3">
                      {['High contrast outlines for keyboard navigation', 'Meets WCAG accessibility standards', 'Consistent across all interactive elements', 'Visible but not disruptive to the design'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-blue-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-black/20 backdrop-blur-xl p-6 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm">
                    <div className="relative">
                      <input
                        type="text"
                        className={`w-full py-3 px-4 backdrop-blur-xl bg-black/40 outline-none rounded-lg transition-all duration-300 ${
                          focusState 
                            ? 'border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                            : 'border border-gray-800'
                        }`}
                        placeholder="Click to focus"
                        onFocus={() => setFocusState(true)}
                        onBlur={() => setFocusState(false)}
                      />
                      
                      {focusState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs text-center mt-4">
                      {focusState ? 
                        <span className="text-blue-400 animate-fade-in">Element focused for accessibility</span> :
                        <span className="text-gray-500">Click the input to see focus state</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Loading States */}
          <TabsContent value="loading" className="animate-fade-in">
            <div className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40 rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 border-r border-blue-500/10">
                  <h3 className="text-xl font-bold mb-6 neon-text-blue">Loading Animations</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Loading states provide feedback during wait times, reducing perceived wait time and increasing user confidence.
                    </p>
                    <ul className="space-y-3">
                      {['Branded, consistent loading animations', 'Progress indicators for longer operations', 'Skeleton screens for content loading', 'Micro-copy to explain the wait when needed'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-blue-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-black/20 backdrop-blur-xl p-6 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm text-center">
                    <div className="relative">
                      <button
                        onClick={toggleLoading}
                        disabled={loadingState}
                        className={`py-3 px-6 backdrop-blur-xl rounded-lg transition-all duration-300 ${
                          loadingState 
                            ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                            : 'bg-black/40 border border-gray-800 text-gray-300 hover:border-blue-500/30 hover:text-blue-400'
                        }`}
                      >
                        {loadingState ? (
                          <div className="flex items-center justify-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing...</span>
                          </div>
                        ) : "Click to Load"}
                      </button>
                      
                      {loadingState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center text-xs text-gray-500">
                      Click the button to see the loading state
                    </div>
                    
                    {/* Skeleton Loading Example */}
                    <div className="mt-8 backdrop-blur-xl bg-black/40 rounded-lg border border-gray-800 p-4 text-left">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`h-12 w-12 rounded-full ${loadingState ? 'animate-pulse bg-gray-800' : 'bg-blue-500/20 text-2xl flex items-center justify-center border border-blue-500/30'}`}>
                          {!loadingState && '👤'}
                        </div>
                        <div className="flex-1">
                          {loadingState ? (
                            <>
                              <div className="h-4 bg-gray-800 rounded animate-pulse mb-2 w-1/3"></div>
                              <div className="h-3 bg-gray-800 rounded animate-pulse w-1/2"></div>
                            </>
                          ) : (
                            <>
                              <div className="font-medium text-white">John Doe</div>
                              <div className="text-xs text-gray-400">Product Designer</div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {loadingState ? (
                        <>
                          <div className="h-3 bg-gray-800 rounded animate-pulse mb-2"></div>
                          <div className="h-3 bg-gray-800 rounded animate-pulse mb-2"></div>
                          <div className="h-3 bg-gray-800 rounded animate-pulse w-2/3"></div>
                        </>
                      ) : (
                        <p className="text-sm text-gray-300">User profile information loaded successfully with all the relevant details.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Empty States */}
          <TabsContent value="empty" className="animate-fade-in">
            <div className="glass-card border border-blue-500/20 backdrop-blur-xl bg-black/40 rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 border-r border-blue-500/10">
                  <h3 className="text-xl font-bold mb-6 neon-text-blue">Empty States</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Empty states guide users when no content is available, providing clear next steps and preventing confusion.
                    </p>
                    <ul className="space-y-3">
                      {['Helpful illustrations that guide users', 'Clear call-to-action buttons', 'Friendly, helpful microcopy', 'Consistent with brand personality'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-blue-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-black/20 backdrop-blur-xl p-6 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm">
                    <div className="backdrop-blur-xl bg-black/40 rounded-xl border border-gray-800 p-6">
                      <div className="flex flex-col items-center text-center py-6">
                        <div className="w-20 h-20 rounded-full backdrop-blur-xl bg-blue-500/10 mb-4 flex items-center justify-center border border-blue-500/30">
                          <span className="text-3xl">📂</span>
                        </div>
                        <h4 className="font-medium mb-2 text-white">No Projects Yet</h4>
                        <p className="text-gray-400 text-sm mb-4">This is where your projects will appear once you create them.</p>
                        <button className="py-2 px-4 text-sm rounded-lg backdrop-blur-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                          + Create First Project
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center text-xs text-gray-500">
                      Empty state design with clear next steps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MicroInteractionSection;
