
import React, { useEffect, useRef } from 'react';
import { Search, Users, FileText, PenTool, Layers, BarChart } from 'lucide-react';

const DesignProcessSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionEl.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - sectionPosition;
      
      if (offset > -500 && offset < 500) {
        const elements = sectionEl.querySelectorAll('.process-card');
        elements.forEach((el, index) => {
          const delay = index * 0.15;
          const translateY = Math.min(100, Math.max(-100, offset * 0.2));
          el.style.transform = `translateY(${translateY * (0.5 - index * 0.1)}px)`;
          el.style.opacity = Math.min(1, Math.max(0.3, 1 - Math.abs(offset) * 0.001));
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
      tools: "User Interviews, Surveys, Heuristic Evaluation, Market Research"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-400" />,
      title: "User Definition",
      description: "Creating user personas, journey maps, and defining key scenarios to guide the design process.",
      tools: "Personas, Journey Mapping, Empathy Maps, User Scenarios"
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-400" />,
      title: "Information Architecture",
      description: "Organizing content and functionality to create intuitive navigation and user flows.",
      tools: "Site Maps, User Flows, Card Sorting, Navigation Models"
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-400" />,
      title: "Wireframing & Prototyping",
      description: "Translating requirements into low and high-fidelity wireframes and interactive prototypes.",
      tools: "Wireframes, Mockups, Interactive Prototypes, Figma, Adobe XD"
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-400" />,
      title: "UI Design & Design Systems",
      description: "Creating visually cohesive interfaces and scalable design systems aligned with brand guidelines.",
      tools: "Style Guides, Component Libraries, Design Tokens, Visual Design"
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-400" />,
      title: "Testing & Iteration",
      description: "Validating designs through usability testing and iterating based on user feedback and analytics.",
      tools: "Usability Testing, A/B Testing, Analytics, User Feedback Sessions"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-black min-h-screen">
      {/* Developer-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Code lines background */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="code-line text-xs text-blue-500 opacity-20 whitespace-nowrap overflow-hidden"
              style={{ 
                top: `${i * 5}%`, 
                left: `-${i * 2}px`,
                transform: `rotate(${i % 2 === 0 ? '0.5' : '-0.5'}deg)` 
              }}
            >
              {`import { design } from '@api/process';`}
              {`const [users, setUsers] = useState([]);`}
              {`function analyzeData(research) { return insights; }`}
              {`useEffect(() => { runDesignProcess() }, [iteration]);`}
            </div>
          ))}
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxQjFFMkMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoNjB2NjBIMzB6IiBzdHJva2U9IiMxOTJGNDUiIHN0cm9rZS1vcGFjaXR5PSIuMTUiLz48cGF0aCBkPSJNMCAzMGg2MHY2MEgweiIgc3Ryb2tlPSIjMTkyRjQ1IiBzdHJva2Utb3BhY2l0eT0iLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-blue animate-fade-in">
            My Design Process
          </h2>
          <div className="h-1 w-24 bg-blue-500/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-200/70 max-w-3xl mx-auto animate-fade-in">
            A structured and collaborative approach that balances user needs, business goals, and technical feasibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-card glass rounded-2xl p-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all duration-500 transform"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 150}ms` 
              }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-blue-900/20 mr-4">
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400/80">Step {index + 1}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 text-sm">
                {step.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-800">
                <h4 className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">Tools & Methods:</h4>
                <div className="flex flex-wrap gap-2">
                  {step.tools.split(', ').map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-900/20 rounded-full text-blue-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Connection lines between cards */}
              {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-6 h-1 bg-blue-500/30 -mr-6"></div>
              )}
              {index < processSteps.length - 3 && (
                <div className="hidden lg:block absolute bottom-0 left-1/2 w-1 h-6 bg-blue-500/30 -mb-6"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Terminal-like element */}
        <div className="mt-20 max-w-2xl mx-auto glass p-6 rounded-xl border border-blue-500/20">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="mx-auto text-sm font-mono text-gray-400">design-process.tsx</div>
          </div>
          <div className="font-mono text-xs text-gray-400 space-y-1">
            <div><span className="text-blue-400">const</span> <span className="text-green-400">designProcess</span> = <span className="text-blue-400">async</span> (<span className="text-orange-400">problem</span>) =&gt; {'{'}</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">research</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">gatherInsights</span>(problem);</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">users</span> = <span className="text-yellow-400">defineUsers</span>(research);</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">structure</span> = <span className="text-yellow-400">createArchitecture</span>(users, problem);</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">wireframes</span> = <span className="text-yellow-400">buildPrototypes</span>(structure);</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">ui</span> = <span className="text-yellow-400">designInterface</span>(wireframes);</div>
            <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-400">feedback</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">testWithUsers</span>(ui);</div>
            <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-yellow-400">iterate</span>(ui, feedback);</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
