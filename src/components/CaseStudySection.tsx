
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const caseStudies = [
    {
      id: 1,
      title: "Nysa Health Dashboard Redesign",
      goal: "Reduce customer drop-off during the health insurance renewal process",
      strategy: "Simplified UI with clear next steps and contextual help",
      process: "Conducted user research, created journey maps, and designed low-friction flows",
      testing: "A/B tested with 200 users to validate the new design",
      impact: "27% reduction in drop-off rate, 45% increase in quote conversions",
      stack: "Figma, Angular, TypeScript, SCSS",
      image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Nysa+Health+Dashboard"
    },
    {
      id: 2,
      title: "ICICI Lombard Customer Portal",
      goal: "Create a unified portal for all insurance products",
      strategy: "Design a modular system with consistent patterns across products",
      process: "Created a design system, prototyped key user journeys, conducted usability testing",
      testing: "Guerrilla testing with 50 users and 10 stakeholder interviews",
      impact: "Reduced customer service calls by 35%, increased digital policy management by 52%",
      stack: "Adobe XD, Miro, Angular, REST API",
      image: "https://placehold.co/600x400/16213e/ffffff?text=ICICI+Lombard+Portal"
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      goal: "Design an investment platform for first-time investors",
      strategy: "Educational UI with progressive disclosure and guided journeys",
      process: "Competitor analysis, user interviews, journey mapping, and iterative design",
      testing: "Prototype testing with 30 first-time investors across 3 iterations",
      impact: "89% task completion rate, 4.8/5 usability score",
      stack: "Figma, Miro, iOS/Android Guidelines, RESTful API",
      image: "https://placehold.co/600x400/0f3460/ffffff?text=FinTech+Mobile+App"
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text-blue">
          Featured Case Studies
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevCase}
            className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 z-10 p-2 rounded-full glass hover:neon-border"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextCase}
            className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 z-10 p-2 rounded-full glass hover:neon-border"
            aria-label="Next case study"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Case Study Card */}
          <Card className="glass-card overflow-hidden transition-all duration-500 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden rounded-md">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-neon-blue/30 text-white text-xs rounded">Case Study {activeIndex + 1}/{caseStudies.length}</span>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-2">
                <h3 className="text-2xl font-bold mb-4">{currentCase.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-neon-blue font-semibold">Business Goal</h4>
                    <p>{currentCase.goal}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-neon-blue font-semibold">Strategy</h4>
                    <p>{currentCase.strategy}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-neon-blue font-semibold">Design Process</h4>
                    <p>{currentCase.process}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-neon-blue font-semibold">Testing & Validation</h4>
                    <p>{currentCase.testing}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-neon-blue font-semibold">Business Impact</h4>
                    <p className="font-bold">{currentCase.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-neon-blue font-semibold">Tech Stack</h4>
                    <p>{currentCase.stack}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="glass neon-border bg-neon-blue/10 text-white hover:bg-neon-blue/20">
                    <ExternalLink className="mr-2 h-4 w-4" /> 
                    View Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-neon-blue neon-border' 
                    : 'bg-gray-600'
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
