
import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, Users, FileText, PenTool, 
  Layers, BarChart, Code, Terminal, 
  Laptop, Monitor, Database, GitBranch 
} from 'lucide-react';

const DesignProcessSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      const sectionPosition = sectionEl.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - sectionPosition;
      
      if (offset > -800 && offset < 600) {
        const elements = sectionEl.querySelectorAll('.process-card');
        elements.forEach((el, index) => {
          const delay = index * 0.15;
          const translateY = Math.min(100, Math.max(-100, offset * 0.2));
          el.setAttribute('style', `transform: translateY(${translateY * (0.5 - index * 0.1)}px); 
                                   opacity: ${Math.min(1, Math.max(0.3, 1 - Math.abs(offset) * 0.001))};
                                   transition-delay: ${delay}s`);
        });
        
        // Apply parallax to floating elements
        const floating = sectionEl.querySelectorAll('.floating-element');
        floating.forEach((el, index) => {
          const speed = 0.05 + (index % 3) * 0.02;
          const direction = index % 2 === 0 ? 1 : -1;
          el.setAttribute('style', `transform: translateY(${direction * scrollPosition * speed}px)`);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    {
      icon: <Search className="h-10 w-10 text-blue-400" />,
      title: "Research & Discovery",
      description: "Understanding the problem space through user research, stakeholder interviews, and competitive analysis.",
      tools: "User Interviews, Surveys, Heuristic Evaluation, Market Research",
      devIcon: <Terminal className="floating-dev-icon text-green-400" />
    },
    {
      icon: <Users className="h-10 w-10 text-blue-400" />,
      title: "User Definition",
      description: "Creating user personas, journey maps, and defining key scenarios to guide the design process.",
      tools: "Personas, Journey Mapping, Empathy Maps, User Scenarios",
      devIcon: <Database className="floating-dev-icon text-purple-400" />
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-400" />,
      title: "Information Architecture",
      description: "Organizing content and functionality to create intuitive navigation and user flows.",
      tools: "Site Maps, User Flows, Card Sorting, Navigation Models",
      devIcon: <GitBranch className="floating-dev-icon text-yellow-400" />
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-400" />,
      title: "Wireframing & Prototyping",
      description: "Translating requirements into low and high-fidelity wireframes and interactive prototypes.",
      tools: "Wireframes, Mockups, Interactive Prototypes, Figma, Adobe XD",
      devIcon: <Code className="floating-dev-icon text-blue-400" />
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-400" />,
      title: "UI Design & Design Systems",
      description: "Creating visually cohesive interfaces and scalable design systems aligned with brand guidelines.",
      tools: "Style Guides, Component Libraries, Design Tokens, Visual Design",
      devIcon: <Laptop className="floating-dev-icon text-pink-400" />
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-400" />,
      title: "Testing & Iteration",
      description: "Validating designs through usability testing and iterating based on user feedback and analytics.",
      tools: "Usability Testing, A/B Testing, Analytics, User Feedback Sessions",
      devIcon: <Monitor className="floating-dev-icon text-orange-400" />
    }
  ];

  // Generate floating elements that will move with parallax
  const floatingElements = [
    { icon: <Code size={24} />, color: 'blue', top: '15%', left: '10%', size: 'md' },
    { icon: <Terminal size={16} />, color: 'green', top: '25%', left: '85%', size: 'sm' },
    { icon: <Database size={20} />, color: 'purple', top: '70%', left: '12%', size: 'lg' },
    { icon: <GitBranch size={18} />, color: 'yellow', top: '85%', left: '80%', size: 'md' },
    { icon: <PenTool size={22} />, color: 'pink', top: '40%', left: '8%', size: 'xl' },
    { icon: <Laptop size={24} />, color: 'teal', top: '60%', left: '90%', size: 'lg' },
  ];

  // Lines of code for the background
  const codeLines = [
    "const designProcess = async (problem) => {",
    "  const research = await analyzeUserNeeds(problem);",
    "  if (research.insights.length === 0) {",
    "    return conductMoreResearch(problem);",
    "  }",
    "  const personas = createPersonas(research.data);",
    "  const architecture = buildInformationArchitecture(personas);",
    "  const wireframes = [];",
    "  for (const userFlow of architecture.flows) {",
    "    wireframes.push(createWireframe(userFlow));",
    "  }",
    "  const prototype = buildPrototype(wireframes);",
    "  const feedback = await testWithUsers(prototype);",
    "  return iterateDesign(feedback);",
    "};",
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-black min-h-screen z-10">
      {/* Floating Code Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Code lines background */}
        {codeLines.map((line, i) => (
          <div 
            key={i} 
            className="code-line font-mono text-xs opacity-20 whitespace-nowrap overflow-hidden"
            style={{ 
              top: `${(i * 7) + 5}%`, 
              left: i % 2 === 0 ? '5%' : '15%',
              color: i % 3 === 0 ? '#60A5FA' : i % 3 === 1 ? '#34D399' : '#F472B6',
              transform: `rotate(${i % 2 === 0 ? '0.5' : '-0.5'}deg)`,
              opacity: 0.15,
              textShadow: i % 3 === 0 ? '0 0 5px rgba(96, 165, 250, 0.5)' : 
                          i % 3 === 1 ? '0 0 5px rgba(52, 211, 153, 0.5)' : 
                          '0 0 5px rgba(244, 114, 182, 0.5)'
            }}
          >
            {line}
          </div>
        ))}
      </div>
      
      {/* Floating elements with parallax effect */}
      {floatingElements.map((el, index) => (
        <div 
          key={index}
          className={`floating-element absolute opacity-20 z-10`}
          style={{
            top: el.top,
            left: el.left,
            color: `var(--${el.color}-500, #3B82F6)`,
            textShadow: `0 0 10px var(--${el.color}-500, #3B82F6)`,
          }}
        >
          {el.icon}
        </div>
      ))}
      
      {/* Glowing orbs with parallax effect */}
      <div 
        className="absolute top-20 left-20 w-60 h-60 rounded-full filter blur-3xl floating-element"
        style={{ 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%, rgba(0,0,0,0) 100%)',
          transform: `translateY(${scrollY * -0.05}px)` 
        }}
      ></div>
      <div 
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full filter blur-3xl floating-element"
        style={{ 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 70%, rgba(0,0,0,0) 100%)',
          transform: `translateY(${scrollY * 0.08}px)` 
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full filter blur-3xl floating-element"
        style={{ 
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.15) 0%, rgba(244, 114, 182, 0.05) 70%, rgba(0,0,0,0) 100%)',
          transform: `translateY(${scrollY * -0.03}px)` 
        }}
      ></div>
      
      {/* Grid pattern with depth */}
      <div 
        className="absolute inset-0 floating-element"
        style={{
          backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          transform: `translateY(${scrollY * 0.02}px)`,
          opacity: 0.1
        }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <div 
          className="text-center mb-16 relative" 
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-blue animate-fade-in">
            My Design Process
          </h2>
          <div className="h-1 w-24 bg-blue-500/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-200/70 max-w-3xl mx-auto animate-fade-in">
            A structured and collaborative approach that balances user needs, business goals, and technical feasibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative z-30">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-card glass neon-border rounded-2xl p-6 border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-blue-500/60 transition-all duration-500 transform relative z-20 backdrop-blur-xl"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 150}ms`,
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }}
            >
              <div className="absolute -right-2 -top-2 opacity-20">
                {step.devIcon}
              </div>
              
              <div className="absolute bottom-0 right-0 w-full h-1/2 overflow-hidden rounded-b-2xl" style={{ zIndex: -1 }}>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-500/20 mr-4">
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400/80">Step {index + 1}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm backdrop-blur-sm">
                {step.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-800/50">
                <h4 className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">Tools & Methods:</h4>
                <div className="flex flex-wrap gap-2">
                  {step.tools.split(', ').map((tool, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full text-blue-300"
                      style={{
                        background: 'linear-gradient(180deg, rgba(30, 64, 175, 0.3) 0%, rgba(30, 58, 138, 0.1) 100%)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.1)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Connection lines between cards with pulsing effect */}
              {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-6 h-1 bg-gradient-to-r from-blue-500/50 to-blue-500/0 -mr-6 animate-pulse"></div>
              )}
              {index < processSteps.length - 3 && (
                <div className="hidden lg:block absolute bottom-0 left-1/2 w-1 h-6 bg-gradient-to-b from-blue-500/50 to-blue-500/0 -mb-6 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Terminal-like element with parallax effect */}
        <div 
          className="mt-20 max-w-2xl mx-auto glass rounded-xl border border-blue-500/30 relative transform"
          style={{ 
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 30, 0.9) 100%)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(0, 0, 0, 0.3)',
            transform: `translateY(${scrollY * 0.05}px)`,
            backdropFilter: 'blur(16px)'
          }}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
              </div>
              <div className="mx-auto text-sm font-mono text-gray-400">design-process.tsx</div>
            </div>
            <div className="font-mono text-xs space-y-1 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none z-10"></div>
              <div><span className="text-blue-400">const</span> <span className="text-green-400">designProcess</span> = <span className="text-blue-400">async</span> (<span className="text-orange-400">problem</span>) =&gt; {'{'}</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">research</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">gatherInsights</span>(problem);</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">users</span> = <span className="text-yellow-400">defineUsers</span>(research);</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">structure</span> = <span className="text-yellow-400">createArchitecture</span>(users, problem);</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">wireframes</span> = <span className="text-yellow-400">buildPrototypes</span>(structure);</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">ui</span> = <span className="text-yellow-400">designInterface</span>(wireframes);</div>
              <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">feedback</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">testWithUsers</span>(ui);</div>
              <div className="pl-4 text-blue-400">return</div>
              <div className="pl-8"><span className="text-yellow-400">iterate</span>(ui, feedback)</div>
              <div className="pl-8">.<span className="text-green-400">then</span>(<span className="text-orange-400">result</span> =&gt; <span className="text-yellow-400">deployToProduction</span>(result))</div>
              <div className="pl-8">.<span className="text-green-400">catch</span>(<span className="text-orange-400">error</span> =&gt; <span className="text-yellow-400">refineDesign</span>(error));</div>
              <div>{'}'}</div>
              
              {/* Blinking cursor effect */}
              <div className="h-4 w-2 bg-blue-400 opacity-70 absolute bottom-0 left-4 animate-ping"></div>
            </div>
          </div>
          
          {/* Reflection effect at the bottom */}
          <div className="h-8 w-full absolute -bottom-8 left-0 right-0" style={{
            background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), transparent)',
            filter: 'blur(4px)',
            transform: 'scaleY(-1)'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
