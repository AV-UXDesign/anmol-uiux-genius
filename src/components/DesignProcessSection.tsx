
import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, Users, FileText, PenTool, Layers, BarChart } from 'lucide-react';

const DesignProcessSection = () => {
  const processSteps = [
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Research & Discovery",
      description: "Understanding the problem space through user research, stakeholder interviews, and competitive analysis.",
      tools: "User Interviews, Surveys, Heuristic Evaluation, Market Research"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "User Definition",
      description: "Creating user personas, journey maps, and defining key scenarios to guide the design process.",
      tools: "Personas, Journey Mapping, Empathy Maps, User Scenarios"
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Information Architecture",
      description: "Organizing content and functionality to create intuitive navigation and user flows.",
      tools: "Site Maps, User Flows, Card Sorting, Navigation Models"
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-600" />,
      title: "Wireframing & Prototyping",
      description: "Translating requirements into low and high-fidelity wireframes and interactive prototypes.",
      tools: "Wireframes, Mockups, Interactive Prototypes, Figma, Adobe XD"
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-600" />,
      title: "UI Design & Design Systems",
      description: "Creating visually cohesive interfaces and scalable design systems aligned with brand guidelines.",
      tools: "Style Guides, Component Libraries, Design Tokens, Visual Design"
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Testing & Iteration",
      description: "Validating designs through usability testing and iterating based on user feedback and analytics.",
      tools: "Usability Testing, A/B Testing, Analytics, User Feedback Sessions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">My Design Process</h2>
        <p className="section-subheading text-center">
          A structured and collaborative approach that balances user needs, business goals, and technical feasibility.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {processSteps.map((step, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center card-hover">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                <h4 className="text-sm font-semibold text-blue-600 mb-1">Tools & Methods:</h4>
                <p className="text-sm text-gray-500">{step.tools}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
