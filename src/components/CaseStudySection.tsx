
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Building, Activity, Brain, Code, ChevronsRight, LucideIcon, Sparkles, Award, Rocket, ArrowRight, Users, Target, Zap } from 'lucide-react';
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
  gradientColor: string;
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
      color: "from-indigo-900/30 to-violet-900/30",
      gradientColor: "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"
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
      color: "from-emerald-900/30 to-teal-900/30",
      gradientColor: "bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10"
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
      color: "from-amber-900/30 to-orange-900/30",
      gradientColor: "bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10"
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
      color: "from-fuchsia-900/30 to-pink-900/30",
      gradientColor: "bg-gradient-to-r from-fuchsia-500/10 via-pink-500/10 to-fuchsia-500/10"
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
            <Award className="text-purple-400 h-6 w-6 absolute -left-8" />
            <Sparkles className="text-purple-400 h-6 w-6 absolute -right-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400">
            Featured Case Studies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full mb-6"></div>
        </motion.div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A selection of projects showcasing my strategic approach to solving complex design challenges and delivering measurable business results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* View Mode Toggle */}
        <div className="flex justify-center mb-10">
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
            className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 z-10 p-3 rounded-full glass hover:scale-110 transition-all duration-300 border border-white/10"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={nextCase}
            className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 z-10 p-3 rounded-full glass hover:scale-110 transition-all duration-300 border border-white/10"
            aria-label="Next case study"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Modern Case Study Card with glassmorphism */}
          <Card className="overflow-hidden rounded-2xl shadow-2xl glass-enhanced border-0">
            <div className="grid md:grid-cols-12 gap-0">
              {/* Left Sidebar */}
              <div className="md:col-span-3 glass-enhanced">
                <div className="p-8 flex flex-col h-full">
                  {/* Case Study Header */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center glass border border-white/10">
                      <currentCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{currentCase.title}</h3>
                      <p className="text-sm text-gray-300">{currentCase.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Key Info */}
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Industry</h4>
                      <p className="text-white font-medium">{currentCase.company}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Technology & Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentCase.tools.map((tool, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium glass border border-white/5 text-gray-200">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Case Study Outcomes */}
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">Key Outcomes</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentCase.outcomes.map((outcome, index) => (
                        <div key={index} className="glass p-3 rounded-lg border border-white/5 flex flex-col">
                          <p className="text-xs text-gray-400">{outcome.metric}</p>
                          <p className="text-lg font-bold text-white">{outcome.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Call to Action Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full mt-6 rounded-lg bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20">
                        <FileText className="mr-2 h-4 w-4" />
                        Full Case Study
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="glass-enhanced backdrop-blur-lg border-none overflow-y-auto w-full sm:max-w-none md:max-w-2xl">
                      <div className="space-y-6 py-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-14 h-14 rounded-lg flex items-center justify-center glass border border-white/10">
                            <currentCase.icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{currentCase.title}</h3>
                            <p className="text-gray-300">{currentCase.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="glass rounded-xl p-6 border border-white/5">
                            <h4 className="flex items-center text-lg font-medium text-white mb-3">
                              <Target className="h-5 w-5 mr-2 text-purple-400" />
                              Business Challenge
                            </h4>
                            <p className="text-gray-300">{currentCase.challenge}</p>
                          </div>

                          <div>
                            <h4 className="flex items-center text-lg font-medium text-white mb-4">
                              <Users className="h-5 w-5 mr-2 text-purple-400" />
                              Key Personas
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {currentCase.personas.map((persona, index) => (
                                <div key={index} className="glass p-5 rounded-xl border border-white/5">
                                  <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-white font-bold mr-3">
                                      {persona.name.charAt(0)}
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-white">{persona.name}, {persona.age}</h5>
                                      <p className="text-sm text-gray-400">{persona.role}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Goals</h6>
                                      <ul className="space-y-2">
                                        {persona.goals.map((goal, gIndex) => (
                                          <li key={gIndex} className="flex items-start text-sm text-gray-300">
                                            <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                                            {goal}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Pain Points</h6>
                                      <ul className="space-y-2">
                                        {persona.painPoints.map((pain, pIndex) => (
                                          <li key={pIndex} className="flex items-start text-sm text-gray-300">
                                            <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                                            {pain}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="glass rounded-xl p-6 border border-white/5">
                            <h4 className="flex items-center text-lg font-medium text-white mb-3">
                              <Rocket className="h-5 w-5 mr-2 text-purple-400" />
                              Approach & Process
                            </h4>
                            <p className="text-gray-300 mb-3">{currentCase.approach}</p>
                            <p className="text-gray-300">{currentCase.process}</p>
                          </div>

                          <div className="glass rounded-xl p-6 border border-white/5">
                            <h4 className="flex items-center text-lg font-medium text-white mb-3">
                              <Zap className="h-5 w-5 mr-2 text-purple-400" />
                              Solution
                            </h4>
                            <p className="text-gray-300">{currentCase.solution}</p>
                          </div>

                          <div>
                            <h4 className="flex items-center text-lg font-medium text-white mb-4">
                              <Award className="h-5 w-5 mr-2 text-purple-400" />
                              Business Impact
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {currentCase.impact.map((item, index) => (
                                <div key={index} className="glass p-4 rounded-lg border border-white/5 flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">
                                    {index + 1}
                                  </div>
                                  <p className="text-gray-300">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9 bg-black/20 backdrop-blur-sm">
                {viewMode === "ux" ? (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{currentCase.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/5">
                        Case Study {activeIndex + 1}/{caseStudies.length}
                      </span>
                    </div>

                    <div className="space-y-8">
                      {/* Problem Statement */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">1</span>
                          Problem Statement
                        </h4>
                        <p className="text-gray-300">{currentCase.challenge}</p>
                      </div>
                      
                      {/* User Research */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">2</span>
                          User Research
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {currentCase.personas.map((persona, index) => (
                            <div key={index} className="glass rounded-xl p-5 border border-white/5">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-white font-bold mr-3">
                                  {persona.name.charAt(0)}
                                </div>
                                <div>
                                  <h5 className="font-bold text-white">{persona.name}, {persona.age}</h5>
                                  <p className="text-sm text-gray-400">{persona.role}</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Goals</h6>
                                  <ul className="space-y-1.5">
                                    {persona.goals.map((goal, gIndex) => (
                                      <li key={gIndex} className="flex items-start text-sm text-gray-300">
                                        <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-1.5 mt-0.5 shrink-0" />
                                        {goal}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Pain Points</h6>
                                  <ul className="space-y-1.5">
                                    {persona.painPoints.map((pain, pIndex) => (
                                      <li key={pIndex} className="flex items-start text-sm text-gray-300">
                                        <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-1.5 mt-0.5 shrink-0" />
                                        {pain}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Design Strategy */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">3</span>
                          Design Strategy
                        </h4>
                        <p className="text-gray-300">{currentCase.approach}</p>
                      </div>
                      
                      {/* UX Process */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">4</span>
                          UX Process
                        </h4>
                        <p className="text-gray-300">{currentCase.process}</p>
                      </div>
                      
                      {/* Solution */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">5</span>
                          Solution
                        </h4>
                        <p className="text-gray-300">{currentCase.solution}</p>
                      </div>
                      
                      {/* Impact */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">6</span>
                          Business Impact
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {currentCase.impact.map((item, index) => (
                            <div key={index} className="glass p-4 rounded-lg border border-white/5 flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">
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
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{currentCase.title} - Angular Implementation</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/5">
                        Dev View
                      </span>
                    </div>

                    <div className="space-y-8">
                      {/* Tech Stack */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">1</span>
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {currentCase.tools.map((tool, index) => (
                            <span key={index} className="px-4 py-2 rounded-lg glass border border-white/5 text-white">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Architecture */}
                      <div className="glass rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">2</span>
                          Architecture
                        </h4>
                        <div className="terminal p-5 font-mono text-sm rounded-lg">
                          <p className="text-purple-400">// {currentCase.title} Architecture</p>
                          <p className="text-gray-300 mt-3">├── core/</p>
                          <p className="text-gray-300 ml-4">├── auth/         <span className="text-gray-500">// Authentication</span></p>
                          <p className="text-gray-300 ml-4">├── http/         <span className="text-gray-500">// Interceptors</span></p>
                          <p className="text-gray-300 ml-4">└── store/        <span className="text-gray-500">// NgRx state</span></p>
                          <p className="text-gray-300 mt-1">├── shared/</p>
                          <p className="text-gray-300 ml-4">├── components/   <span className="text-gray-500">// UI components</span></p>
                          <p className="text-gray-300 ml-4">├── directives/   <span className="text-gray-500">// Directives</span></p>
                          <p className="text-gray-300 ml-4">└── pipes/        <span className="text-gray-500">// Pipes</span></p>
                          <p className="text-gray-300 mt-1">└── features/</p>
                          <p className="text-gray-300 ml-4">├── dashboard/    <span className="text-gray-500">// Feature module</span></p>
                          <p className="text-gray-300 ml-4">└── {currentCase.title.toLowerCase()}/</p>
                          <p className="text-gray-300 ml-8">├── components/</p>
                          <p className="text-gray-300 ml-8">├── services/</p>
                          <p className="text-gray-300 ml-8">├── models/</p>
                          <p className="text-gray-300 ml-8">└── store/</p>
                        </div>
                      </div>
                      
                      {/* Implementation */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">3</span>
                          Key Implementation Features
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="glass p-5 rounded-lg border border-white/5">
                            <h5 className="text-white font-medium mb-3">State Management</h5>
                            <p className="text-sm text-gray-300">Implemented NgRx for centralized state with actions, reducers, effects, and selectors to manage complex data flow.</p>
                          </div>
                          <div className="glass p-5 rounded-lg border border-white/5">
                            <h5 className="text-white font-medium mb-3">Dynamic Components</h5>
                            <p className="text-sm text-gray-300">Used Angular's ComponentFactoryResolver for rendering dynamic UI elements based on user configuration.</p>
                          </div>
                          <div className="glass p-5 rounded-lg border border-white/5">
                            <h5 className="text-white font-medium mb-3">Real-time Updates</h5>
                            <p className="text-sm text-gray-300">Integrated WebSockets with RxJS for instant notifications and live data synchronization.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
