
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Health Insurance Dashboard Redesign",
      challenge: "Healthcare provider faced 32% drop-off rate during insurance renewal process, leading to revenue loss and decreased customer retention.",
      approach: "Conducted user research with 15 customers, identified key pain points, and mapped the customer journey to redesign the renewal flow with user-centered principles.",
      process: "Led cross-functional team through problem framing, 4 design sprints, 3 rounds of user testing, and development handoff. Created comprehensive design system for consistency.",
      solution: "Redesigned dashboard focused on guided user flows, personalized recommendations, and simplified information architecture.",
      impact: [
        "Reduced drop-off rate by 27%",
        "Increased renewal conversions by 45%",
        "Decreased customer support calls by 38%",
        "97% satisfaction score from post-implementation survey"
      ],
      tools: "User Research, Journey Mapping, Figma, Angular, TypeScript",
      image: "https://placehold.co/600x400/0a0a0a/4287f5?text=Health+Dashboard"
    },
    {
      id: 2,
      title: "Financial Products Customer Portal",
      challenge: "Banking client needed a unified portal for their expanding financial products, facing customer confusion and operational inefficiencies.",
      approach: "Created a comprehensive information architecture and modular design system to support multiple product lines while maintaining consistent user experience.",
      process: "Facilitated stakeholder alignment workshop, developed UX strategy, information architecture, wireframes, high-fidelity designs, and interactive prototypes.",
      solution: "Designed a scalable portal with personalized dashboard, unified navigation, and responsive interface supporting all device types.",
      impact: [
        "Reduced customer service calls by 35%",
        "Increased digital policy management by 52%",
        "Improved cross-selling by 28%",
        "Decreased training time for customer service representatives by 40%"
      ],
      tools: "Stakeholder Workshops, Information Architecture, Wireframing, Adobe XD, Axure RP",
      image: "https://placehold.co/600x400/0a0a0a/4287f5?text=Financial+Portal"
    },
    {
      id: 3,
      title: "Investment Platform for First-Time Investors",
      challenge: "Fintech startup needed an intuitive platform to attract and retain first-time investors in a competitive market.",
      approach: "Employed a research-driven design process focusing on education, progressive disclosure, and guided investment journeys.",
      process: "Conducted competitive analysis, user interviews, created user personas, journey maps, and iterative design process with continuous usability testing.",
      solution: "Designed an educational investment platform with simplified onboarding, guided workflows, and visualized performance metrics.",
      impact: [
        "89% task completion rate (vs. industry average of 62%)",
        "4.8/5 usability score from testing",
        "75% of users successfully completed their first investment",
        "42% increase in user retention vs. previous platform"
      ],
      tools: "User Interviews, Competitive Analysis, Prototyping, Figma, Usability Testing",
      image: "https://placehold.co/600x400/0a0a0a/4287f5?text=Investment+Platform"
    }
  ];
  
  const currentCase = caseStudies[activeIndex];
  
  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };
  
  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
          Featured Case Studies
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my strategic approach to solving complex design challenges and delivering measurable business results.
        </p>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevCase}
            className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 z-10 p-2 rounded-full glass hover:neon-border transition-all"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button 
            onClick={nextCase}
            className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 z-10 p-2 rounded-full glass hover:neon-border transition-all"
            aria-label="Next case study"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Case Study Card */}
          <div className="glass-card overflow-hidden rounded-xl shadow-2xl transition-all duration-500 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 glass text-xs rounded-full font-medium text-blue-400 border border-blue-500/20">Case Study {activeIndex + 1}/{caseStudies.length}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{currentCase.title}</h3>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-6 bg-black/40 backdrop-blur-lg border-l border-blue-500/10">
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-blue-400 font-semibold flex items-center">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">1</span>
                      Business Challenge
                    </h4>
                    <p className="text-gray-300 ml-7">{currentCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold flex items-center">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">2</span>
                      Strategic Approach
                    </h4>
                    <p className="text-gray-300 ml-7">{currentCase.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold flex items-center">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">3</span>
                      Design Process
                    </h4>
                    <p className="text-gray-300 ml-7">{currentCase.process}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold flex items-center">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">4</span>
                      Solution
                    </h4>
                    <p className="text-gray-300 ml-7">{currentCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold flex items-center">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">5</span>
                      Business Impact
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 mt-2 ml-7">
                      {currentCase.impact.map((item, index) => (
                        <li key={index} className="text-gray-300 text-xs bg-blue-900/20 p-2 rounded-lg border border-blue-500/10 backdrop-blur-md">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-blue-400 font-semibold">Tools & Methods</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {currentCase.tools.split(', ').map((tool, index) => (
                        <span key={index} className="text-xs px-3 py-1 glass rounded-full text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <Button className="glass neon-border bg-blue-600/10 hover:bg-blue-600/20 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" /> 
                    View Detailed Case Study
                  </Button>
                  <Button variant="outline" className="glass border-blue-500/20 text-blue-400 hover:bg-blue-900/20">
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-1 transition-all ${
                  index === activeIndex 
                    ? 'bg-blue-500 w-14' 
                    : 'bg-gray-700'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
