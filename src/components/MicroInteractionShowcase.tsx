
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader2, Search, AlertTriangle, Zap, Check, X, RefreshCw, LayoutGrid , Sparkles} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const MicroInteractionShowcase = () => {
  const [activeSection, setActiveSection] = useState<'hover' | 'focus' | 'loading' | 'empty'>('hover');

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4338ca_1px,transparent_1px)]"
          style={{ backgroundSize: '20px 20px' }}></div>
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"
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
          className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-indigo-500/10 filter blur-3xl"
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
              <Zap className="text-indigo-400 h-6 w-6 absolute -left-8" />
              <Zap className="text-indigo-400 h-6 w-6 absolute -right-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Micro-Interaction Showcase
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delightful details that enhance user experience through thoughtful animation and feedback.
          </p>
        </div>

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
              Micro-Interaction Showcase
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delightful details that enhance user experience through thoughtful animation and feedback.
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
            value={activeSection}
            onValueChange={(value) => value && setActiveSection(value as any)}
            className="p-1 bg-indigo-950/30 backdrop-blur-md rounded-full border border-indigo-500/20 shadow-xl"
          >
            <ToggleGroupItem value="hover" variant="neonChip" className="relative overflow-hidden">
              Hover Effects
            </ToggleGroupItem>
            <ToggleGroupItem value="focus" variant="neonChip" className="relative overflow-hidden">
              Focus States
            </ToggleGroupItem>
            <ToggleGroupItem value="loading" variant="neonChip" className="relative overflow-hidden">
              Loading States
            </ToggleGroupItem>
            <ToggleGroupItem value="empty" variant="neonChip" className="relative overflow-hidden">
              Empty States
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        <div className="glass-card border border-indigo-500/20 backdrop-blur-xl bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl">
          {activeSection === 'hover' && <HoverEffectsSection />}
          {activeSection === 'focus' && <FocusStatesSection />}
          {activeSection === 'loading' && <LoadingStatesSection />}
          {activeSection === 'empty' && <EmptyStatesSection />}
        </div>
      </div>
    </section>
  );
};

const HoverEffectsSection = () => {
  const hoverEffects = [
    {
      name: "Shine Effect",
      element: (
        <motion.div
          className="group relative w-full py-3 px-6 rounded-md shadow-lg bg-indigo-600/30 backdrop-blur-md border border-indigo-500/30 overflow-hidden"
          whileHover={{ scale: 1.01 }}
        >
          <span className="relative z-10 text-white font-medium flex items-center justify-center">
            <Heart className="mr-2 h-4 w-4" /> Like
          </span>
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
        </motion.div>
      )
    },
    {
      name: "Glow Effect",
      element: (
        <motion.button
          className="relative w-full py-3 px-6 rounded-md bg-black/40 backdrop-blur-md text-indigo-400 border border-indigo-500/30 transition-shadow duration-300"
          whileHover={{
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.5), inset 0 0 10px rgba(99, 102, 241, 0.2)',
            borderColor: 'rgba(99, 102, 241, 0.5)'
          }}
        >
          <span className="relative z-10 font-medium flex items-center justify-center">
            <Zap className="mr-2 h-4 w-4" /> Energy Boost
          </span>
        </motion.button>
      )
    },
    {
      name: "Gradient Shift",
      element: (
        <motion.div
          className="group relative w-full py-3 px-6 rounded-md overflow-hidden border border-indigo-500/30 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-700"></div>
          <span className="relative z-10 text-white font-medium flex items-center justify-center">
            <LayoutGrid className="mr-2 h-4 w-4" /> Gallery View
          </span>
        </motion.div>
      )
    },
    {
      name: "Icon Animation",
      element: (
        <motion.div
          className="group relative w-full py-3 px-6 rounded-md bg-black/40 backdrop-blur-md text-white border border-gray-800 transition-all duration-300 hover:border-indigo-500/30"
          whileHover={{ backgroundColor: 'rgba(10, 10, 40, 0.6)' }}
        >
          <span className="relative z-10 font-medium flex items-center justify-center">
            <motion.div
              className="mr-2"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <RefreshCw className="h-4 w-4 group-hover:text-indigo-400 transition-colors" />
            </motion.div>
            Refresh
          </span>
        </motion.div>
      )
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Hover Interactions</h3>
      <p className="text-gray-400 mb-8">Hover over these elements to see the micro-interactions in action.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hoverEffects.map((effect, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="backdrop-blur-xl bg-black/30 p-4 rounded-xl border border-indigo-500/10">
              <h4 className="text-indigo-300 text-sm font-medium mb-4">{effect.name}</h4>
              {effect.element}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 text-white">Hover Cards</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <HoverCard>
            <HoverCardTrigger>
              <motion.button
                className="py-2 px-4 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Hover for Details
              </motion.button>
            </HoverCardTrigger>
            <HoverCardContent className="backdrop-blur-xl bg-black/80 border border-indigo-500/30 text-white p-4 w-80 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <div className="flex flex-col space-y-2">
                <h4 className="text-indigo-300 font-medium">Hover Card Example</h4>
                <p className="text-sm text-gray-300">Hover cards provide additional context without requiring a click, improving user experience.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

const FocusStatesSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Focus States</h3>
      <p className="text-gray-400 mb-8">Click or tab through these elements to see focus states in action.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Text Input Focus</h4>
          <div className="relative overflow-hidden group">
            <input
              type="text"
              placeholder="Click me..."
              className="w-full p-3 rounded-md bg-black/40 border border-gray-800 text-white outline-none transition-all duration-300 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Button Focus Ring</h4>
          <button className="w-full p-3 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-black">
            Click me or press Tab
          </button>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Checkbox Focus</h4>
          <label className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-6 rounded border-2 border-gray-700 peer-focus:border-indigo-500 peer-focus:ring-2 peer-focus:ring-indigo-500/30 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-500 transition-all"></div>
              <Check className="absolute top-1 left-1 h-4 w-4 text-indigo-400 transform scale-0 peer-checked:scale-100 transition-transform" />
            </div>
            <span className="text-gray-300">Custom checkbox with focus state</span>
          </label>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Link Focus</h4>
          <div className="p-4 rounded-md bg-black/40">
            <a href="#" className="text-indigo-400 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 hover:after:w-full focus:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:rounded-sm focus:ring-offset-2 focus:ring-offset-black">
              Interactive link with focus state
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingStatesSection = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);

  const handleLoad = (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    stateSetter(true);
    setTimeout(() => {
      stateSetter(false);
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Loading States</h3>
      <p className="text-gray-400 mb-8">Click the buttons to trigger different loading states.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Spinner Animation</h4>
          <button
            className="w-full p-3 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all duration-300 focus:outline-none disabled:opacity-70"
            onClick={() => handleLoad(setIsLoading1)}
            disabled={isLoading1}
          >
            {isLoading1 ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </div>
            ) : (
              "Click to Load"
            )}
          </button>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Progress Bar</h4>
          <button
            className="w-full p-3 mb-4 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all duration-300 focus:outline-none disabled:opacity-70"
            onClick={() => handleLoad(setIsLoading2)}
            disabled={isLoading2}
          >
            {isLoading2 ? "Loading..." : "Click to Load"}
          </button>

          {isLoading2 && (
            <div className="h-1 w-full bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Skeleton Loading</h4>
          <button
            className="w-full p-3 mb-4 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all duration-300 focus:outline-none disabled:opacity-70"
            onClick={() => handleLoad(setIsLoading3)}
            disabled={isLoading3}
          >
            {isLoading3 ? "Loading Content..." : "Load Content"}
          </button>

          {isLoading3 ? (
            <div className="space-y-2">
              <div className="h-4 bg-gray-700/50 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-700/50 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700/50 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-700/50 rounded animate-pulse w-2/3"></div>
            </div>
          ) : (
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Content is ready to be displayed here after loading.</p>
              <p>This is an example of skeleton loading states.</p>
            </div>
          )}
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Button State Transition</h4>
          <button
            className="w-full p-3 rounded-md transition-all duration-300 focus:outline-none relative overflow-hidden"
            style={{
              background: isLoading4 ? 'linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))' : 'rgba(99, 102, 241, 0.2)',
              borderColor: isLoading4 ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
              color: isLoading4 ? '#a78bfa' : '#818cf8',
            }}
            onClick={() => handleLoad(setIsLoading4)}
            disabled={isLoading4}
          >
            {isLoading4 ? (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Processing...
                </span>
              </>
            ) : (
              "Submit Form"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const EmptyStatesSection = () => {
  const [hasResults, setHasResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasResults(Math.random() > 0.5);
    }, 1500);
  };

  const resetSearch = () => {
    setHasResults(false);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Empty States</h3>
      <p className="text-gray-400 mb-8">User-friendly feedback when there's no content to display.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10 md:col-span-2">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Search Results</h4>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for something..."
              className="w-full p-3 pl-10 rounded-md bg-black/40 border border-gray-800 text-white outline-none transition-all duration-300 focus:border-indigo-500/50"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <button
              className="absolute right-3 top-3 text-indigo-400 hover:text-indigo-300 transition-colors"
              onClick={handleSearch}
              disabled={isSearching}
            >
              {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : "Search"}
            </button>
          </div>

          <div className="min-h-[200px] flex items-center justify-center">
            {isSearching ? (
              <div className="text-center">
                <Loader2 className="h-10 w-10 text-indigo-400 animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Searching...</p>
              </div>
            ) : hasResults ? (
              <div className="space-y-4 w-full">
                <div className="flex justify-between items-center">
                  <h5 className="text-white">Search Results</h5>
                  <button
                    className="text-sm text-indigo-400 hover:text-indigo-300"
                    onClick={resetSearch}
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-2 w-full">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-3 rounded-md bg-black/40 border border-gray-800 hover:border-indigo-500/30 transition-colors">
                      <p className="text-white">Result item {item}</p>
                      <p className="text-sm text-gray-400">Description for result {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                  <Search className="h-8 w-8 text-indigo-400" />
                </div>
                <h5 className="text-white text-lg mb-2">No results found</h5>
                <p className="text-gray-400 text-sm mb-4">Try searching for something else or check your spelling.</p>
                <button
                  className="text-indigo-400 hover:text-indigo-300 text-sm"
                  onClick={handleSearch}
                >
                  Try Another Search
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Empty Notifications</h4>
          <div className="p-6 rounded-md bg-black/40 border border-gray-800 min-h-[180px] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-3 border border-indigo-500/30">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Bell className="h-6 w-6 text-indigo-400" />
              </motion.div>
            </div>
            <h5 className="text-white mb-2">All caught up!</h5>
            <p className="text-gray-400 text-sm">You don't have any notifications right now.</p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-indigo-500/10">
          <h4 className="text-indigo-300 text-sm font-medium mb-4">Error State</h4>
          <div className="p-6 rounded-md bg-black/40 border border-red-500/30 min-h-[180px] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3 border border-red-500/30">
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              >
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </motion.div>
            </div>
            <h5 className="text-white mb-2">Something went wrong</h5>
            <p className="text-gray-400 text-sm mb-4">We couldn't load your data. Please try again.</p>
            <button className="px-4 py-2 rounded-md bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-colors text-sm">
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the notification bell icon
const Bell = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
};

export default MicroInteractionShowcase;
