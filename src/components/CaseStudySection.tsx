import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Building, Activity, Brain, Code, ChevronsRight, LucideIcon, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

// Type for case study
interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  logo?: string;
  company: string;
  challenge: string;
  approach: string;
  process: string;
  solution: string;
  impact: string[];
  tools: string[];
  personas: {
    name: string;
    role: string;
    age: number;
    goals: string[];
    painPoints: string[];
  }[];
  outcomes: {
    metric: string;
    value: string;
  }[];
  icon: LucideIcon;
  color: string;
}

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"ux" | "dev">("ux");

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Engagely.ai",
      subtitle: "CX Automation Platform",
      company: "AI-Powered Customer Experience",
      challenge: "Streamline customer interactions across voice, chat, email, and messaging apps while managing high query volumes and ensuring consistent experiences with limited resources.",
      approach: "Implemented a no-code, AI-powered platform with conversational bots, voice AI, and automated workflows to enhance customer engagement.",
      process: "Conducted extensive UX research with Rakesh (CX Operations Manager) and Anjali (Customer Support Agent) to identify pain points. Developed comprehensive mind maps, user flows, and information architecture.",
      solution: "Created an integrated platform with conversational AI bots, voice assistants, predictive analytics, and a no-code workflow builder that seamlessly connects with existing systems.",
      impact: [
        "40% automation rate in inbound queries",
        "Response time reduced to under 1 minute",
        "Customer wait times reduced by 45%",
        "34% increase in Net Promoter Score",
        "Agent training time cut from 6 weeks to 6 days"
      ],
      tools: ["Angular", "TypeScript", "Figma", "AI/ML Models", "Voice Recognition", "NLP"],
      personas: [
        {
          name: "Rakesh",
          role: "CX Operations Manager",
          age: 38,
          goals: ["Automate support processes", "Reduce response times", "Improve CSAT scores"],
          painPoints: ["High volume of repetitive queries", "Limited 24/7 support resources", "Integration difficulties"]
        },
        {
          name: "Anjali",
          role: "Customer Support Agent",
          age: 28,
          goals: ["Efficiently handle queries", "Quick information access", "Provide accurate responses"],
          painPoints: ["Multiple system navigation", "Lack of real-time information", "High workload during peaks"]
        }
      ],
      outcomes: [
        { metric: "Automation Rate", value: "40%" },
        { metric: "Response Time", value: "<1 min" },
        { metric: "NPS Increase", value: "34%" },
        { metric: "Training Time", value: "6 days (was 6 weeks)" }
      ],
      icon: Building,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Nysa Health",
      subtitle: "Insurance Platform",
      company: "Healthcare Insurance Solutions",
      challenge: "Healthcare provider faced 32% drop-off rate during insurance renewal process, leading to revenue loss and decreased customer retention.",
      approach: "Conducted user research with 15 customers, identified key pain points, and mapped the customer journey to redesign the renewal flow with user-centered principles.",
      process: "Led cross-functional team through problem framing, 4 design sprints, 3 rounds of user testing, and development handoff. Created comprehensive design system for consistency.",
      solution: "Redesigned dashboard focused on guided user flows, personalized recommendations, simplified information architecture, and AI-powered Smart Reminders.",
      impact: [
        "Reduced drop-off rate by 27%",
        "Increased renewal conversions by 45%",
        "Decreased customer support calls by 38%",
        "97% satisfaction score from post-implementation survey",
        "2x faster agent processing",
        "20% increase in customer retention"
      ],
      tools: ["Angular", "TypeScript", "User Research", "Journey Mapping", "Figma"],
      personas: [
        {
          name: "Ravi",
          role: "Insurance Agent",
          age: 33,
          goals: ["Manage policies efficiently", "Handle renewals smoothly", "Set reminders"],
          painPoints: ["Missed follow-ups", "Clunky tools", "Complex processes"]
        },
        {
          name: "Neha",
          role: "Customer",
          age: 42,
          goals: ["Self-service renewal", "Understand policy terms", "Quick process"],
          painPoints: ["Agent dependency", "Confusing jargon", "Long forms"]
        }
      ],
      outcomes: [
        { metric: "Drop-off Reduction", value: "27%" },
        { metric: "Renewal Conversion", value: "+45%" },
        { metric: "Support Calls", value: "-38%" },
        { metric: "User Satisfaction", value: "97%" }
      ],
      icon: Activity,
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "Nysa Motor",
      subtitle: "Vehicle Insurance Platform",
      company: "Motor Insurance Solutions",
      challenge: "Complex and confusing motor insurance processes leading to low renewal rates, manual data entry errors, and poor mobile experience especially for policy comparisons and claims tracking.",
      approach: "Simplified the vehicle insurance experience for both users and agents by focusing on renewals, claim status tracking, and policy comparisons with AI-powered features.",
      process: "Developed personas for car owners and agents, analyzed pain points, and created intuitive user flows with emphasis on OCR technology and visual comparison interfaces.",
      solution: "Implemented OCR for RC card scanning, smart add-on recommender, claim timeline tracker, and policy snapshot view for side-by-side comparisons.",
      impact: [
        "25% increase in policy upsell",
        "90% users finished purchase under 3 minutes",
        "Reduced form errors by 65%",
        "Increased mobile conversion by 38%",
        "Claim satisfaction scores improved by 42%"
      ],
      tools: ["Angular", "TypeScript", "OCR Technology", "Mobile-First Design", "A/B Testing"],
      personas: [
        {
          name: "Sameer",
          role: "Car Owner",
          age: 35,
          goals: ["Easy policy renewal", "Understand coverage", "Quick claim process"],
          painPoints: ["Confusing IDV & add-ons", "Manual data entry", "Unclear claim status"]
        },
        {
          name: "Pooja",
          role: "Insurance Agent",
          age: 29,
          goals: ["Quick policy comparisons", "Upsell add-ons", "Streamline renewals"],
          painPoints: ["Clunky comparison tools", "Manual data entry", "Limited mobile support"]
        }
      ],
      outcomes: [
        { metric: "Policy Upsell", value: "+25%" },
        { metric: "Purchase Speed", value: "<3 mins (90%)" },
        { metric: "Form Errors", value: "-65%" },
        { metric: "Mobile Conversion", value: "+38%" }
      ],
      icon: Brain,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 4,
      title: "ThoughtNudge",
      subtitle: "Campaign Management Platform",
      company: "Marketing Campaign Solution",
      challenge: "Campaign managers and marketers struggled with fragmented tools, resulting in excessive steps for campaign creation, poor template management, and underwhelming performance metrics.",
      approach: "Created a unified platform for multi-channel campaigns (Email + WhatsApp) with AI-powered personalization, variant testing, and streamlined workflows.",
      process: "Analyzed workflows of campaign managers and CX heads, created journey maps, and developed a stepper-based UI with card and table views for maximum flexibility.",
      solution: "Implemented AI Variant Generator for subject lines/images/CTAs, Template Card View with variants, Table View Toggle for high info density, and stepper-based journey with micro-interactions.",
      impact: [
        "Campaign creation time reduced by 45%",
        "Click-through rate improved by 32%",
        "38% boost in engagement using AI variants",
        "Template reuse increased by 60%",
        "Reporting time decreased by 75%"
      ],
      tools: ["Angular", "TypeScript", "AI/ML Models", "A/B Testing Framework", "Interactive Prototyping"],
      personas: [
        {
          name: "Priya",
          role: "Campaign Manager",
          age: 32,
          goals: ["Campaign overview", "Quick template creation", "Variant testing"],
          painPoints: ["Tool switching", "Many manual steps", "Limited analytics"]
        },
        {
          name: "Rohit",
          role: "CX Head",
          age: 40,
          goals: ["Performance visibility", "ROI tracking", "Campaign optimization"],
          painPoints: ["Siloed reporting", "Lack of insights", "Poor template management"]
        }
      ],
      outcomes: [
        { metric: "Creation Time", value: "-45%" },
        { metric: "Click Rate", value: "+32%" },
        { metric: "AI Engagement Boost", value: "+38%" },
        { metric: "Template Reuse", value: "+60%" }
      ],
      icon: Code,
      color: "from-purple-500/20 to-pink-500/20"
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
    <section className="py-20 px-4 bg-black" id="case-studies">
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
            Featured Case Studies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        </motion.div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of projects showcasing my strategic approach to solving complex design challenges and delivering measurable business results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* View Mode Toggle */}
        <div className="flex justify-center mb-10 gap-12">
          <ToggleGroup className="gap-4" type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as "ux" | "dev")}>
            <ToggleGroupItem value="ux" className="h-12 px-6 py-3 glass rounded-md text-white font-medium text-sm">
              UX Designer Lens
            </ToggleGroupItem>
            <ToggleGroupItem value="dev" className="h-12 px-6 py-3 glass rounded-md text-white font-medium text-sm">
              Angular Dev Lens
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

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
          <Card className={`glass-card overflow-hidden rounded-xl shadow-2xl transition-all duration-500 border border-blue-500/20 bg-gradient-to-br ${currentCase.color}`}>
            <div className="grid md:grid-cols-5 gap-1">
              {/* Sidebar */}
              <div className="md:col-span-1 p-6 glass-enhanced border-r border-blue-500/10 flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center glass">
                    <currentCase.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{currentCase.title}</h3>
                    <p className="text-xs text-blue-300">{currentCase.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="text-xs">
                    <h4 className="text-blue-400 font-semibold mb-2">COMPANY</h4>
                    <p className="text-gray-300">{currentCase.company}</p>
                  </div>

                  <div className="text-xs">
                    <h4 className="text-blue-400 font-semibold mb-2">TOOLS & METHODS</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.tools.map((tool, index) => (
                        <span key={index} className="text-xs px-2 py-1 glass rounded-full text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs mt-auto">
                    <h4 className="text-blue-400 font-semibold mb-2">KEY OUTCOMES</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentCase.outcomes.map((outcome, index) => (
                        <div key={index} className="glass p-2 rounded-md">
                          <p className="text-gray-400 text-[10px]">{outcome.metric}</p>
                          <p className="text-white font-bold">{outcome.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mt-4 glass border-blue-500/20 text-blue-400 hover:bg-blue-900/20">
                      <FileText className="mr-2 h-4 w-4" />
                      Full Case Study
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="glass-enhanced overflow-y-auto w-full sm:max-w-none md:max-w-xl">
                    <div className="space-y-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center glass">
                          <currentCase.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{currentCase.title}</h3>
                          <p className="text-blue-300">{currentCase.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Challenge</h4>
                          <p className="text-gray-300 mt-2">{currentCase.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Key Personas</h4>
                          <div className="grid md:grid-cols-2 gap-4 mt-3">
                            {currentCase.personas.map((persona, index) => (
                              <div key={index} className="glass p-4 rounded-xl">
                                <h5 className="font-bold text-white">{persona.name}, {persona.age}</h5>
                                <p className="text-sm text-blue-300 mb-2">{persona.role}</p>

                                <div className="mb-2">
                                  <h6 className="text-xs text-blue-400">GOALS</h6>
                                  <ul className="text-xs text-gray-300 mt-1 space-y-1">
                                    {persona.goals.map((goal, gIndex) => (
                                      <li key={gIndex} className="flex items-start">
                                        <ChevronsRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5" />
                                        {goal}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h6 className="text-xs text-blue-400">PAIN POINTS</h6>
                                  <ul className="text-xs text-gray-300 mt-1 space-y-1">
                                    {persona.painPoints.map((pain, pIndex) => (
                                      <li key={pIndex} className="flex items-start">
                                        <ChevronsRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5" />
                                        {pain}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Approach & Process</h4>
                          <p className="text-gray-300 mt-2">{currentCase.approach}</p>
                          <p className="text-gray-300 mt-2">{currentCase.process}</p>
                        </div>

                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Solution</h4>
                          <p className="text-gray-300 mt-2">{currentCase.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Business Impact</h4>
                          <div className="grid grid-cols-2 gap-3 mt-3">
                            {currentCase.impact.map((item, index) => (
                              <div key={index} className="glass p-3 rounded-lg border border-blue-500/10">
                                <p className="text-gray-300 text-sm">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg text-blue-400 font-semibold">Tools & Technologies</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {currentCase.tools.map((tool, index) => (
                              <span key={index} className="px-3 py-1 glass rounded-full text-gray-300">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Main Content */}
              <div className="md:col-span-4">
                {viewMode === "ux" ? (
                  <div className="p-6 bg-black/40 backdrop-blur-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{currentCase.title}</h3>
                      <span className="px-3 py-1 glass text-xs rounded-full font-medium text-blue-400 border border-blue-500/20">Case Study {activeIndex + 1}/{caseStudies.length}</span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">1</span>
                          Business Challenge
                        </h4>
                        <p className="text-gray-300 ml-8 mt-2">{currentCase.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">2</span>
                          User Personas & Research
                        </h4>
                        <div className="ml-8 mt-2 grid md:grid-cols-2 gap-4">
                          {currentCase.personas.map((persona, index) => (
                            <div key={index} className="glass-card p-4 rounded-lg border border-blue-500/10">
                              <div className="flex items-center mb-2">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mr-3">
                                  {persona.name.charAt(0)}
                                </div>
                                <div>
                                  <h5 className="text-white font-medium">{persona.name}, {persona.age}</h5>
                                  <p className="text-xs text-gray-400">{persona.role}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <h6 className="text-blue-400 mb-1">Goals:</h6>
                                  <ul className="space-y-1 text-gray-300">
                                    {persona.goals.map((goal, gIndex) => (
                                      <li key={gIndex} className="flex items-start">
                                        <span className="text-blue-400 mr-1">•</span> {goal}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h6 className="text-blue-400 mb-1">Pain Points:</h6>
                                  <ul className="space-y-1 text-gray-300">
                                    {persona.painPoints.map((pain, pIndex) => (
                                      <li key={pIndex} className="flex items-start">
                                        <span className="text-blue-400 mr-1">•</span> {pain}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">3</span>
                          Design Approach
                        </h4>
                        <p className="text-gray-300 ml-8 mt-2">{currentCase.approach}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">4</span>
                          UX Process
                        </h4>
                        <p className="text-gray-300 ml-8 mt-2">{currentCase.process}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">5</span>
                          Solution & Implementation
                        </h4>
                        <p className="text-gray-300 ml-8 mt-2">{currentCase.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">6</span>
                          Business Impact
                        </h4>
                        <div className="grid grid-cols-2 gap-3 mt-2 ml-8">
                          {currentCase.impact.map((item, index) => (
                            <div key={index} className="glass p-3 rounded-lg border border-blue-500/10 flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 text-blue-300 text-xs">
                                {index + 1}
                              </div>
                              <p className="text-gray-300 text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-black/40 backdrop-blur-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{currentCase.title} - Technical Implementation</h3>
                      <span className="px-3 py-1 glass text-xs rounded-full font-medium text-blue-400 border border-blue-500/20">Angular Dev View</span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">1</span>
                          Technical Stack
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2 ml-8">
                          {currentCase.tools.map((tool, index) => (
                            <span key={index} className="px-3 py-2 glass rounded-lg text-gray-300 text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">2</span>
                          Architecture Overview
                        </h4>
                        <div className="ml-8 mt-2 terminal p-4 font-mono text-xs">
                          <p className="text-green-400">// {currentCase.title} Angular Architecture</p>
                          <p className="text-gray-400 mt-2">├── core/</p>
                          <p className="text-blue-300 ml-4">├── auth/         <span className="text-gray-500">// Authentication services</span></p>
                          <p className="text-blue-300 ml-4">├── http/         <span className="text-gray-500">// API interceptors & handlers</span></p>
                          <p className="text-blue-300 ml-4">└── store/        <span className="text-gray-500">// State management (NgRx)</span></p>
                          <p className="text-gray-400">├── shared/</p>
                          <p className="text-blue-300 ml-4">├── components/   <span className="text-gray-500">// Reusable UI components</span></p>
                          <p className="text-blue-300 ml-4">├── directives/   <span className="text-gray-500">// Custom directives</span></p>
                          <p className="text-blue-300 ml-4">└── pipes/        <span className="text-gray-500">// Custom pipes</span></p>
                          <p className="text-gray-400">└── features/</p>
                          <p className="text-blue-300 ml-4">├── dashboard/    <span className="text-gray-500">// Feature module</span></p>
                          <p className="text-blue-300 ml-4">├── {currentCase.title.toLowerCase()}/  <span className="text-gray-500">// Main feature module</span></p>
                          <p className="text-blue-300 ml-8">├── components/</p>
                          <p className="text-blue-300 ml-8">├── services/</p>
                          <p className="text-blue-300 ml-8">├── models/</p>
                          <p className="text-blue-300 ml-8">└── store/</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">3</span>
                          Key Implementation Features
                        </h4>
                        <div className="ml-8 mt-2 space-y-3">
                          <div className="glass p-3 rounded-lg">
                            <h5 className="text-blue-300 font-medium mb-1">Responsive Angular Components</h5>
                            <p className="text-gray-300 text-sm">Built with Angular Material and custom components using responsive design principles with Flexbox and CSS Grid.</p>
                          </div>
                          <div className="glass p-3 rounded-lg">
                            <h5 className="text-blue-300 font-medium mb-1">State Management</h5>
                            <p className="text-gray-300 text-sm">Implemented NgRx for global state management with side-effects handling via Effects API and optimized with selectors.</p>
                          </div>
                          <div className="glass p-3 rounded-lg">
                            <h5 className="text-blue-300 font-medium mb-1">Performance Optimization</h5>
                            <p className="text-gray-300 text-sm">Leveraged Angular's OnPush change detection strategy, lazy loading, and virtual scrolling for optimal performance.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">4</span>
                          Sample Component Code
                        </h4>
                        <div className="ml-8 mt-2 terminal p-4 font-mono text-xs overflow-auto">
                          <p className="text-green-400">// {currentCase.title} Main Component</p>
                          <p className="text-blue-300">@Component{'({'}</p>
                          <p className="text-gray-300 ml-4">selector: 'app-{currentCase.title.toLowerCase()}-dashboard',</p>
                          <p className="text-gray-300 ml-4">templateUrl: './dashboard.component.html',</p>
                          <p className="text-gray-300 ml-4">styleUrls: ['./dashboard.component.scss'],</p>
                          <p className="text-gray-300 ml-4">changeDetection: ChangeDetectionStrategy.OnPush</p>
                          <p className="text-blue-300">{'})'}</p>
                          <p className="text-blue-300">export class {currentCase.title}DashboardComponent implements OnInit {'{'}</p>
                          <p className="text-gray-300 ml-4">// Observable data streams</p>
                          <p className="text-blue-300 ml-4">data$ = this.store.select(select{currentCase.title}Data);</p>
                          <p className="text-blue-300 ml-4">loading$ = this.store.select(select{currentCase.title}Loading);</p>
                          <p className="text-blue-300 ml-4">error$ = this.store.select(select{currentCase.title}Error);</p>
                          <p className="text-gray-300 ml-4"></p>
                          <p className="text-gray-300 ml-4">constructor(</p>
                          <p className="text-blue-300 ml-8">private store: Store,</p>
                          <p className="text-blue-300 ml-8">private {currentCase.title.toLowerCase()}Service: {currentCase.title}Service</p>
                          <p className="text-gray-300 ml-4">) {'{'} {'}'}</p>
                          <p className="text-gray-300 ml-4"></p>
                          <p className="text-blue-300 ml-4">ngOnInit(): void {'{'}</p>
                          <p className="text-blue-300 ml-8">this.store.dispatch({currentCase.title}Actions.loadData());</p>
                          <p className="text-blue-300 ml-4">{'}'}</p>
                          <p className="text-blue-300">{'}'}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-xs">5</span>
                          Technical Outcomes
                        </h4>
                        <div className="grid grid-cols-2 gap-3 mt-2 ml-8">
                          {currentCase.outcomes.map((outcome, index) => (
                            <div key={index} className="glass p-3 rounded-lg border border-blue-500/10">
                              <p className="text-gray-400 text-xs">{outcome.metric}</p>
                              <p className="text-white font-bold">{outcome.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-1 transition-all ${index === activeIndex
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
