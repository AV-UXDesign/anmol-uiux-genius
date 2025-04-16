
import React, { useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { motion } from 'framer-motion';
import { Sparkles, MousePointer, Focus, RotateCw, FolderOpen, AlertCircle } from 'lucide-react';

const MicroInteractionSection = () => {
  const [hoverState, setHoverState] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [activeTab, setActiveTab] = useState<'hover' | 'focus' | 'loading' | 'empty'>('hover');

  // Toggle loading state
  const toggleLoading = () => {
    setLoadingState(true);
    setTimeout(() => setLoadingState(false), 2000);
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>

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
              <span className="text-indigo-400 font-medium">INTERACTIONS</span>
              <Sparkles className="text-indigo-400 h-6 w-6 absolute -right-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Micro-Interaction Showcase
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delightful details that enhance user experience through thoughtful animation and feedbacks.
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
            <ToggleGroupItem value="hover" variant="neonChip" className="relative overflow-hidden">
              <MousePointer className="w-4 h-4 mr-2 inline-block" />
              Hover
            </ToggleGroupItem>
            <ToggleGroupItem value="focus" variant="neonChip" className="relative overflow-hidden">
              <Focus className="w-4 h-4 mr-2 inline-block" />
              Focus
            </ToggleGroupItem>
            <ToggleGroupItem value="loading" variant="neonChip" className="relative overflow-hidden">
              <RotateCw className="w-4 h-4 mr-2 inline-block" />
              Loading
            </ToggleGroupItem>
            <ToggleGroupItem value="empty" variant="neonChip" className="relative overflow-hidden">
              <FolderOpen className="w-4 h-4 mr-2 inline-block" />
              Empty States
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        {/* Hover States */}
        {activeTab === 'hover' && (
          <div className="animate-fade-in">
            <div className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden rounded-xl">
              <div className="md:flex">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:w-1/2 p-8 border-r border-indigo-500/10"
                >
                  <motion.h3 variants={item} className="text-2xl font-bold mb-6 neon-text-indigo flex items-center">
                    <MousePointer className="w-5 h-5 mr-2" />
                    Hover State Design
                  </motion.h3>
                  <div className="space-y-6">
                    <motion.p variants={item} className="text-gray-300">
                      Hover states provide visual feedback and improve discoverability, making interfaces more intuitive and responsive.
                    </motion.p>
                    <motion.ul variants={item} className="space-y-4">
                      {['Subtle animation indicates interactivity', 'Increased contrast for accessibility', 'Consistent behavior across the system', 'Provides context without adding visual noise'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-indigo-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                <div className="md:w-1/2 bg-black/40 backdrop-blur-xl p-8 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm relative overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className={`relative p-12 backdrop-blur-xl transition-all duration-500 rounded-xl border transform-gpu ${hoverState
                        ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.4)] scale-105'
                        : 'border-gray-800 bg-black/40'
                        }`}
                      onMouseEnter={() => setHoverState(true)}
                      onMouseLeave={() => setHoverState(false)}
                    >
                      <div className={`text-center transition-all duration-500`}>
                        <div className={`text-4xl mb-3 transition-all duration-500 transform-gpu ${hoverState ? 'text-indigo-400 scale-110' : 'text-gray-400'}`}>
                          ✨
                        </div>
                        <div className={`font-medium transition-all duration-500 transform-gpu ${hoverState ? 'text-indigo-400 scale-105' : 'text-gray-300'}`}>
                          Hover me
                        </div>
                        <div className={`mt-2 text-xs transition-all duration-500 ${hoverState ? 'opacity-100 text-indigo-400' : 'opacity-0 text-gray-500'
                          }`}>
                          Interactive element
                        </div>
                      </div>

                      {hoverState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse"></div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      )}
                    </motion.div>

                    <div className="mt-4 text-center text-xs text-gray-500">
                      Try hovering over the element above
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Focus States */}
        {activeTab === 'focus' && (
          <div className="animate-fade-in">
            <div className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden rounded-xl">
              <div className="md:flex">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:w-1/2 p-8 border-r border-indigo-500/10"
                >
                  <motion.h3 variants={item} className="text-2xl font-bold mb-6 neon-text-indigo flex items-center">
                    <Focus className="w-5 h-5 mr-2" />
                    Focus Indicators
                  </motion.h3>
                  <div className="space-y-6">
                    <motion.p variants={item} className="text-gray-300">
                      Focus states are crucial for accessibility, helping keyboard users and assistive technology navigate interfaces efficiently.
                    </motion.p>
                    <motion.ul variants={item} className="space-y-4">
                      {['High contrast outlines for keyboard navigation', 'Meets WCAG accessibility standards', 'Consistent across all interactive elements', 'Visible but not disruptive to the design'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-indigo-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                <div className="md:w-1/2 bg-black/40 backdrop-blur-xl p-8 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        className={`w-full py-4 px-5 backdrop-blur-xl bg-black/40 outline-none rounded-lg transition-all duration-500 ${focusState
                          ? 'border border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                          : 'border border-gray-800'
                          }`}
                        placeholder="Click to focus"
                        onFocus={() => setFocusState(true)}
                        onBlur={() => setFocusState(false)}
                      />

                      {focusState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse"></div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      )}
                    </motion.div>

                    <div className="text-sm text-center mt-4">
                      {focusState ?
                        <span className="text-indigo-400 animate-fade-in">Element focused for accessibility ✓</span> :
                        <span className="text-gray-500">Click the input to see focus state</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading States */}
        {activeTab === 'loading' && (
          <div className="animate-fade-in">
            <div className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden rounded-xl">
              <div className="md:flex">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:w-1/2 p-8 border-r border-indigo-500/10"
                >
                  <motion.h3 variants={item} className="text-2xl font-bold mb-6 neon-text-indigo flex items-center">
                    <RotateCw className="w-5 h-5 mr-2" />
                    Loading Animations
                  </motion.h3>
                  <div className="space-y-6">
                    <motion.p variants={item} className="text-gray-300">
                      Loading states provide feedback during wait times, reducing perceived wait time and increasing user confidence.
                    </motion.p>
                    <motion.ul variants={item} className="space-y-4">
                      {['Branded, consistent loading animations', 'Progress indicators for longer operations', 'Skeleton screens for content loading', 'Micro-copy to explain the wait when needed'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-indigo-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                <div className="md:w-1/2 bg-black/40 backdrop-blur-xl p-8 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative space-y-8"
                    >
                      <button
                        onClick={toggleLoading}
                        disabled={loadingState}
                        className={`py-3 px-8 backdrop-blur-xl rounded-lg transition-all duration-500 ${loadingState
                          ? 'bg-indigo-500/20 border border-indigo-500/50 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                          : 'bg-black/40 border border-gray-800 text-gray-300 hover:border-indigo-500/30 hover:text-indigo-400'
                          }`}
                      >
                        {loadingState ? (
                          <div className="flex items-center justify-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing...</span>
                          </div>
                        ) : "Click to Load"}
                      </button>

                      {loadingState && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse"></div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      )}

                      {/* Skeleton Loading Example */}
                      <div className="backdrop-blur-xl bg-black/40 rounded-lg border border-gray-800 p-5 text-left">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`h-14 w-14 rounded-full flex items-center justify-center ${loadingState ? 'animate-pulse bg-gray-800/80' : 'bg-indigo-500/20 text-2xl border border-indigo-500/30'}`}>
                            {!loadingState && '👤'}
                          </div>
                          <div className="flex-1">
                            {loadingState ? (
                              <>
                                <div className="h-4 bg-gray-800/80 rounded animate-pulse mb-2 w-1/3"></div>
                                <div className="h-3 bg-gray-800/80 rounded animate-pulse w-1/2"></div>
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
                            <div className="h-3 bg-gray-800/80 rounded animate-pulse mb-2"></div>
                            <div className="h-3 bg-gray-800/80 rounded animate-pulse mb-2"></div>
                            <div className="h-3 bg-gray-800/80 rounded animate-pulse w-2/3"></div>
                          </>
                        ) : (
                          <p className="text-sm text-gray-300">User profile information loaded successfully with all the relevant details.</p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty States */}
        {activeTab === 'empty' && (
          <div className="animate-fade-in">
            <div className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden rounded-xl">
              <div className="md:flex">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:w-1/2 p-8 border-r border-indigo-500/10"
                >
                  <motion.h3 variants={item} className="text-2xl font-bold mb-6 neon-text-indigo flex items-center">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    Empty States
                  </motion.h3>
                  <div className="space-y-6">
                    <motion.p variants={item} className="text-gray-300">
                      Empty states guide users when no content is available, providing clear next steps and preventing confusion.
                    </motion.p>
                    <motion.ul variants={item} className="space-y-4">
                      {['Helpful illustrations that guide users', 'Clear call-to-action buttons', 'Friendly, helpful microcopy', 'Consistent with brand personality'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs mr-3 mt-0.5 border border-indigo-500/30">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                <div className="md:w-1/2 bg-black/40 backdrop-blur-xl p-8 flex items-center justify-center">
                  <div className="p-8 w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      whileHover={{ scale: 1.03 }}
                      className="backdrop-blur-xl bg-black/40 rounded-xl border border-indigo-500/20 shadow-[0_0_30px_rgba(0,0,0,0.25)] p-6 transform-gpu transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center py-8">
                        <div className="w-24 h-24 rounded-full backdrop-blur-xl bg-indigo-500/10 mb-6 flex items-center justify-center border border-indigo-500/30">
                          <span className="text-4xl">📂</span>
                        </div>
                        <h4 className="font-medium mb-3 text-white text-xl">No Projects Yet</h4>
                        <p className="text-gray-400 text-base mb-6">This is where your projects will appear once you create them.</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="py-3 px-6 text-sm rounded-lg backdrop-blur-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                        >
                          + Create First Project
                        </motion.button>
                      </div>
                    </motion.div>

                    <div className="mt-4 text-center text-sm text-gray-500">
                      Empty state design with clear next steps for better UX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-indigo-500/20">
            <AlertCircle className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-gray-400">Micro-interactions increase user engagement by up to 40%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroInteractionSection;
