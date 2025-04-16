import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Building, Activity, Brain, Code, ChevronsRight, LucideIcon, Sparkles, Award, Rocket, ArrowRight, Users, Target, Zap, Heart, Car, Grape } from 'lucide-react';
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
  designProcess: string[];
  designSolution: string;
  outcome: string[];
  tools: string[];
  personas: {
    name: string;
    role: string;
    age: number;
    goals: string[];
    challenges: string[];
  }[];
  impact: {
    metric: string;
    value: string;
  }[];
  icon: LucideIcon;
  color: string;
  gradientColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Engagely.ai",
    subtitle: "CX Automation Platform",
    company: "AI-Powered Customer Experience",
    challenge: "The client, a leading CX platform, needed a scalable solution to handle high-volume customer queries across voice, chat, and messaging. Existing solutions were slow and failed to engage users effectively. The challenge was to create an AI-driven conversational experience that felt human, intelligent, and empathetic to users' needs.",
    designProcess: [
      "Stakeholder Alignment: Engaged deeply with key stakeholders including CX managers, product owners, and AI experts to ensure the design aligned with business goals and technical feasibility.",
      "User-Centered Design: Conducted interviews and observational studies to understand user pain points, ensuring the design directly addressed agent frustrations and customer interaction complexities.",
      "Empathy Mapping & Personas: Focused on understanding not just the user needs but also the emotional journey. Developed personas based on real user data to ensure the solution was both efficient and empathetic.",
      "Prototyping & Iteration: Delivered several high-fidelity prototypes with integrated conversational flows, using rapid feedback loops to continuously refine the design based on real-world agent and customer feedback."
    ],
    designSolution: "Created an AI-powered no-code platform that empowered CX teams to design workflows, conversational UI, and analytics dashboards. Focused on ease of use for agents and personalized customer interactions, ensuring minimal manual effort while improving response time and engagement.",
    outcome: [
      "Increased automation rate by 40%, significantly reducing manual interventions and enhancing service quality.",
      "Improved response times by 45%, reducing user wait time and increasing customer satisfaction.",
      "Customer NPS score increased by 34% after implementing conversational AI features."
    ],
    tools: ["Figma", "Angular", "Voice AI", "Machine Learning", "Prototyping"],
    personas: [
      {
        name: "Ravi",
        role: "CX Operations Lead",
        age: 40,
        goals: ["Increase automation", "Streamline workflows", "Improve customer engagement"],
        challenges: ["Fragmented tools", "Slow response times", "Limited analytics"]
      },
      {
        name: "Sita",
        role: "Customer Support Agent",
        age: 28,
        goals: ["Reduce task burden", "Enhance personal interactions with customers", "Improve response efficiency"],
        challenges: ["Multiple tools", "High cognitive load", "Lack of automation"]
      }
    ],
    impact: [
      { metric: "Automation Rate", value: "+40%" },
      { metric: "Response Time", value: "Improved by 45%" },
      { metric: "NPS Score", value: "+34%" }
    ],
    icon: Building,
    color: "from-indigo-900/30 to-violet-900/30",
    gradientColor: "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"
  },
  {
    id: 2,
    title: "Nysa Health",
    subtitle: "Health Insurance Agent Portal",
    company: "Health Insurance Solutions",
    challenge: "Insurance agents were overwhelmed with fragmented systems, making it difficult to track policy renewals, communicate with clients, and generate leads. The renewal process had a high drop-off rate and agents struggled with user interfaces that lacked key features like smart reminders and policy tracking.",
    designProcess: [
      "User Research: Conducted qualitative research with agents and policyholders to map out frustrations with existing systems. Focused on pinpointing bottlenecks in the renewal process and understanding the workflow gaps.",
      "Journey Mapping: Mapped the end-to-end journey of agents, focusing on critical touchpoints such as policy management and renewals to identify opportunities for improvement.",
      "Wireframing & Prototyping: Developed wireframes with a focus on simplifying tasks while maintaining critical functionalities. Prototypes were tested in multiple cycles with real users to validate hypotheses.",
      "Design Iteration: Based on user feedback, iterated the design to prioritize ease of navigation, automated reminders, and the ability to cross-sell insurance products effortlessly."
    ],
    designSolution: "Designed a comprehensive agent portal that streamlined policy management, integrated smart reminders, and allowed agents to easily view and manage renewals. The portal also featured AI-driven cross-sell recommendations, boosting upsell potential.",
    outcome: [
      "Renewal drop-off rate reduced by 27% through automated reminders and real-time policy tracking.",
      "Agent productivity improved by 2.3x, with a more intuitive UI and integrated functionalities that minimized manual effort.",
      "Cross-sell rate increased by 32%, as agents could easily recommend complementary products through smart AI suggestions."
    ],
    tools: ["Angular", "Figma", "User Research", "Prototyping", "Design Systems"],
    personas: [
      {
        name: "Rajesh",
        role: "Senior Insurance Agent",
        age: 34,
        goals: ["Increase client engagement", "Automate policy renewals", "Cross-sell more products"],
        challenges: ["Manual processes", "Overloaded interface", "Difficulty tracking renewals"]
      },
      {
        name: "Maya",
        role: "Policyholder",
        age: 40,
        goals: ["Receive timely reminders", "Understand policy coverage", "Easily track renewals"],
        challenges: ["Inconsistent reminders", "Lack of clear policy info", "Manual steps in renewal process"]
      }
    ],
    impact: [
      { metric: "Drop-off Rate", value: "-27%" },
      { metric: "Productivity", value: "2.3x increase" },
      { metric: "Cross-Sell Rate", value: "+32%" }
    ],
    icon: Heart,
    color: "from-green-900/30 to-teal-900/30",
    gradientColor: "bg-gradient-to-r from-green-500/10 via-teal-500/10 to-green-500/10"
  },
  {
    id: 3,
    title: "Nysa Motor",
    subtitle: "Vehicle Insurance Platform",
    company: "Motor Insurance Solutions",
    challenge: "Motor insurance agents faced challenges in managing policies and claims efficiently. The existing platform was fragmented, leading to missed upselling opportunities and inefficient claims management. Additionally, users struggled to navigate between multiple sections of the platform.",
    designProcess: [
      "Competitive Analysis: Conducted a competitive analysis to identify market gaps and emerging trends in motor insurance platforms, particularly for mobile-first experiences.",
      "User Interviews: Conducted interviews with both agents and car owners to understand their pain points. The key insights revolved around long manual processes and unclear policy details.",
      "Prototyping: Rapid prototyping focused on creating mobile-first, simplified designs that allowed agents to perform tasks like policy comparison and claims submission quickly.",
      "User Testing & Refinement: Tested the prototypes with real users, refined based on feedback, and ensured seamless integration of OCR features for quicker data entry."
    ],
    designSolution: "Developed a streamlined, mobile-first design for vehicle insurance, integrating OCR technology for instant document uploads and smart product recommendations based on user profiles. Focus was on reducing friction and improving conversion rates.",
    outcome: [
      "Increased upsell by 25% through personalized product recommendations based on car type and user behavior.",
      "Policy purchase completion time reduced to under 3 minutes for 90% of users.",
      "Mobile conversion rate increased by 38%, emphasizing the importance of mobile-first design for users on the go."
    ],
    tools: ["Angular", "OCR", "Figma", "A/B Testing", "Mobile Design Systems"],
    personas: [
      {
        name: "Amit",
        role: "Car Owner",
        age: 30,
        goals: ["Fast renewal", "Clear policy coverage", "Quick claims process"],
        challenges: ["Manual data entry", "Unclear pricing", "Difficult claims submission"]
      },
      {
        name: "Neel",
        role: "Insurance Agent",
        age: 32,
        goals: ["Increase upsell", "Simplify policy comparison", "Enhance mobile usage"],
        challenges: ["Manual data input", "Fragmented tools", "Difficulty tracking claims"]
      }
    ],
    impact: [
      { metric: "Upsell Rate", value: "+25%" },
      { metric: "Purchase Completion", value: "Under 3 minutes for 90% of users" },
      { metric: "Mobile Conversion", value: "+38%" }
    ],
    icon: Car,
    color: "from-amber-900/30 to-orange-900/30",
    gradientColor: "bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10"
  },
  {
    id: 4,
    title: "ThoughtNudge",
    subtitle: "AI-Driven Campaign Management",
    company: "Marketing Automation",
    challenge: "Campaign managers were using fragmented tools to manage and track multi-channel campaigns. They lacked centralized control over campaign assets and struggled with manual processes that led to delays and poor engagement rates.",
    designProcess: [
      "Stakeholder Workshops: Held sessions with marketing teams and product managers to understand the pain points and goals for campaign management.",
      "Persona Building: Developed personas for both marketers and end-users to ensure the design catered to their specific needs.",
      "Prototyping: Created rapid prototypes of AI-powered campaign workflows, focusing on intuitive UI for campaign creation, content approval, and real-time tracking.",
      "User Testing: Iterative testing with real campaign managers to validate features such as template creation, AI variant generation, and multi-channel integration."
    ],
    designSolution: "Developed an intuitive, AI-powered campaign management platform with an integrated stepper interface for easy navigation across multiple stages of campaign creation. This platform allowed marketers to AI-generate content variants and track campaigns in real-time.",
    outcome: [
      "Campaign creation time reduced by 45%, allowing marketing teams to focus on strategy rather than execution.",
      "Click-through rates increased by 32%, thanks to AI-driven personalization.",
      "Overall engagement rate increased by 38%, driven by targeted messaging and improved campaign management."
    ],
    tools: ["Angular", "Figma", "AI/ML", "Prototyping", "Analytics Tools"],
    personas: [
      {
        name: "Shweta",
        role: "Campaign Manager",
        age: 33,
        goals: ["Efficient campaign creation", "Maximize engagement", "Improve real-time tracking"],
        challenges: ["Fragmented tools", "Manual approval processes", "Difficulty tracking campaign performance"]
      },
      {
        name: "Vikram",
        role: "Marketing Director",
        age: 45,
        goals: ["Optimize campaign ROI", "Increase reach", "Integrate cross-channel campaigns"],
        challenges: ["Inefficient tracking", "Lack of AI insights", "Manual content creation"]
      }
    ],
    impact: [
      { metric: "Campaign Time", value: "-45%" },
      { metric: "Click-Through Rate", value: "+32%" },
      { metric: "Engagement Rate", value: "+38%" }
    ],
    icon: Grape,
    color: "from-teal-900/30 to-green-900/30",
    gradientColor: "bg-gradient-to-r from-teal-500/10 via-green-500/10 to-teal-500/10"
  }
];

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"ux" | "dev">("ux");

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
        <p className="text-gray-300 max-w-2xl mx-auto text-base">
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
          <Card className="overflow-hidden rounded-2xl shadow-2xl bg-black/30 backdrop-blur-lg border border-white/10 w-full md:w-4/4">
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

                    {/* Key Outcomes */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">Key Outcomes</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentCase.impact.map((outcome, index) => (
                          <div key={index} className="glass p-3 rounded-lg border border-white/5 flex flex-col">
                            <p className="text-xs text-gray-400 font-bold">{outcome.metric}</p>
                            <p className="text-lg font-bold text-white">{outcome.value}</p>
                          </div>
                        ))}
                      </div>
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
                            <p className="text-gray-300 text-base">{currentCase.challenge}</p>
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
                                      <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Challenges</h6>
                                      <ul className="space-y-2">
                                        {persona.challenges.map((challenge, cIndex) => (
                                          <li key={cIndex} className="flex items-start text-sm text-gray-300">
                                            <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                                            {challenge}
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
                              Design Process
                            </h4>
                            <ul className="space-y-2">
                              {currentCase.designProcess.map((process, index) => (
                                <li key={index} className="text-gray-300 text-base flex items-start">
                                  <ArrowRight className="h-4 w-4 text-purple-400 mr-2 mt-0.5 shrink-0" />
                                  <span className="font-bold">{process}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="glass rounded-xl p-6 border border-white/5">
                            <h4 className="flex items-center text-lg font-medium text-white mb-3">
                              <Zap className="h-5 w-5 mr-2 text-purple-400" />
                              Design Solution
                            </h4>
                            <p className="text-gray-300 font-bold">{currentCase.designSolution}</p>
                          </div>

                          <div>
                            <h4 className="flex items-center text-lg font-medium text-white mb-4">
                              <Award className="h-5 w-5 mr-2 text-purple-400" />
                              Business Outcome
                            </h4>
                            <ul className="space-y-2">
                              {currentCase.outcome.map((item, index) => (
                                <li key={index} className="text-gray-300 text-base flex items-start">
                                  <ArrowRight className="h-4 w-4 text-purple-400 mr-2 mt-0.5 shrink-0" />
                                  <span className="font-bold">{item}</span>
                                </li>
                              ))}
                            </ul>
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
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/5 glass-enhanced">
                        Case Study {activeIndex + 1}/{caseStudies.length}
                      </span>
                    </div>

                    <div className="space-y-8">
                      {/* Problem Statement */}
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">1</span>
                          Problem Statement
                        </h4>
                        <p className="text-gray-300 mx-auto text-sm">{currentCase.challenge}</p>
                      </div>
                      
                      {/* User Research */}
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
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
                                  <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-2">Challenges</h6>
                                  <ul className="space-y-1.5">
                                    {persona.challenges.map((challenge, cIndex) => (
                                      <li key={cIndex} className="flex items-start text-sm text-gray-300">
                                        <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-1.5 mt-0.5 shrink-0" />
                                        {challenge}
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
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">3</span>
                          Design Strategy
                        </h4>
                        <ul className="space-y-1.5">
                          {currentCase.designProcess.map((process, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-300">
                              <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-1.5 mt-0.5 shrink-0" />
                              {process}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* UX Process */}
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">4</span>
                          UX Process
                        </h4>
                        <p className="text-gray-300 text-sm">{currentCase.designSolution}</p>
                      </div>
                      
                      {/* Solution */}
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">5</span>
                          Solution
                        </h4>
                        <p className="text-gray-300 text-sm">{currentCase.designSolution}</p>
                      </div>
                      
                      {/* Impact */}
                      <div className="glass glass-enhanced rounded-xl p-6 border border-white/5">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-white text-sm">6</span>
                          Business Impact
                        </h4>
                        <ul className="space-y-1.5">
                          {currentCase.outcome.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-300">
                              <ArrowRight className="h-3.5 w-3.5 text-purple-400 mr-1.5 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
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
