import Link from "next/link";
import { Logo } from "@/components/Logo";
import { 
  Zap, 
  Target, 
  Brain, 
  Clock, 
  Mail, 
  FileText, 
  Star,
  ArrowRight,
  Check,
  Users,
  Sparkles,
  Workflow
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <AutomationExamples />
      <Founder />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">AI-Powered Automation for Chicago Small Business</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Reclaim 10+ Hours Every Week
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              with Custom AI Built for You
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            We build AI automations and intelligent tools that handle your busy work—lead follow-ups, 
            document processing, meeting prep—so you can focus on growing your business. 
            No coding. No complexity. Just results in 5-7 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn bg-blue-500 hover:bg-blue-600 text-white text-lg py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transition-all inline-flex items-center gap-2">
              Discover Your AI Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-400" />
              <span>Custom AI Tools Built For You</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-400" />
              <span>One-Week Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-400" />
              <span>Chicago-Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const pains = [
    {
      icon: Clock,
      title: "Spending 2+ hours daily on repetitive tasks",
      description: "Emails, follow-ups, data entry—these tasks drain your energy but don't grow your business."
    },
    {
      icon: Target,
      title: "Losing hot leads to slow response times",
      description: "While you're in meetings or sleeping, prospects move on to competitors who respond faster."
    },
    {
      icon: Brain,
      title: "Drowning in admin instead of strategizing",
      description: "You started your business to solve problems, not to push paper and manage spreadsheets."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Doing These Tasks Manually?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The most successful small businesses are using AI to automate the work that used to eat their days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <pain.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
              <p className="text-slate-400">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We analyze your workflow and identify 2-3 high-impact AI opportunities specific to your business."
    },
    {
      number: "02",
      title: "Build & Deploy",
      description: "We build your custom AI automation in 5-7 days. You review, we refine until it's perfect."
    },
    {
      number: "03",
      title: "Optimize & Scale",
      description: "We monitor performance, make adjustments, and help you identify your next automation."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From first call to working AI in one week. No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-slate-800 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      icon: Users,
      company: "12-Person Professional Services Firm",
      challenge: "Team struggling to leverage AI effectively",
      solution: "Custom AI tool + hands-on workshop",
      result: "Team built custom AI projects saving hours daily",
      metric: "100% adoption",
      detail: "Implemented a custom AI enterprise tool (ChatGPT workspace) for the team, then hosted an AI workshop where team members shared ideas on leveraging AI. I showed them how to turn those ideas into custom projects, which they built and deployed—now saving significant time daily."
    },
    {
      icon: FileText,
      company: "Mid-Size Consulting Firm",
      challenge: "Hours wasted manually creating SOWs",
      solution: "AI-powered SOW generator with templates",
      result: "90% reduction in SOW creation time",
      metric: "90% faster",
      detail: "Built a custom SOW (Statement of Work) generator. Created templates for their common project types, infused them into a custom AI tool, and configured it to generate professional SOWs from simple inputs. What took hours now takes minutes."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.08),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Real Results from Real Clients</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See how Chicago businesses are using custom AI to transform their operations.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <study.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{study.company}</h3>
                  <p className="text-slate-500 text-sm">{study.challenge}</p>
                </div>
                
                <div className="lg:w-1/3">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Solution</h4>
                  <p className="text-white mb-4">{study.solution}</p>
                  <p className="text-slate-400 text-sm">{study.detail}</p>
                </div>
                
                <div className="lg:w-1/3">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Result</h4>
                  <p className="text-white mb-4">{study.result}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-2xl font-bold text-green-400">{study.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      tier: "AI FOUNDATION",
      name: "AI Kickstart",
      description: "Your fast track to AI productivity. In one 90-minute session, we'll set up your AI workspace, train your team on effective prompting, and identify your first 3 automation opportunities.",
      features: [
        "Team AI workshop & hands-on training",
        "Custom ChatGPT workspace setup",
        "Prompt library tailored to your work",
        "3 automation opportunity assessments",
        "30 days of email support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      tier: "MOST POPULAR",
      name: "AI Workflow Automation",
      description: "Our most popular option. We build one custom AI automation tailored to your biggest time drain—whether that's lead response, document processing, or content creation.",
      features: [
        "Custom AI automation built for your workflow",
        "Choose from proven templates or bespoke build",
        "Delivered in 5-7 business days",
        "30 days of unlimited refinements",
        "Ongoing monitoring & optimization",
        "Monthly performance reports"
      ],
      cta: "Build My Automation",
      highlight: true
    },
    {
      tier: "ENTERPRISE",
      name: "AI Agent System",
      description: "Complete AI transformation. Multiple automations working together, custom AI agents, and ongoing strategic support.",
      features: [
        "Multiple AI automations integrated",
        "Custom AI agents for complex tasks",
        "Branded AI deployment",
        "Advanced system integrations",
        "Priority support & strategy calls",
        "Quarterly business reviews"
      ],
      cta: "Book a Strategy Call",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Three Ways to Transform with AI
          </h2>
          <p className="text-xl text-slate-400">
            Start with training, automate one workflow, or build a complete AI system.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                service.highlight
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-900/50 border border-slate-800'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    {service.tier}
                  </span>
                </div>
              )}
              
              {!service.highlight && (
                <div className="text-xs font-semibold text-slate-500 mb-2 tracking-wide">{service.tier}</div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all mt-auto ${
                  service.highlight
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationExamples() {
  const automations = [
    {
      icon: Zap,
      title: "Instant Lead Response AI",
      description: "Every form fill gets an intelligent, personalized reply within 5 minutes—24/7. Your prospects feel heard immediately.",
      aiFeature: "AI analyzes inquiry intent and crafts contextual responses"
    },
    {
      icon: Target,
      title: "AI Meeting Prepper",
      description: "Before every sales call, receive a comprehensive briefing: company research, contact background, talking points.",
      aiFeature: "AI researches prospects across LinkedIn, news, and databases"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automatically extract data from PDFs, emails, and forms directly into your CRM or spreadsheets.",
      aiFeature: "AI understands document structure and extracts key fields"
    },
    {
      icon: Mail,
      title: "Smart Follow-Up Sequences",
      description: "AI-powered email sequences that adapt based on prospect behavior and engagement patterns.",
      aiFeature: "AI adjusts timing and messaging based on open/click data"
    },
    {
      icon: Workflow,
      title: "Workflow Automator",
      description: "Connect your tools and automate entire processes—CRM updates, notifications, task creation.",
      aiFeature: "AI identifies bottlenecks and suggests optimizations"
    },
    {
      icon: Star,
      title: "Review Generation System",
      description: "Automatically request reviews at the perfect moment, with AI-crafted personalized messages.",
      aiFeature: "AI identifies optimal timing and tailors requests"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI Automation Examples
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            These are just starting points. We build custom AI tools tailored to your exact workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((auto, index) => (
            <div key={index} className="group bg-slate-950 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-6 transition-all hover:bg-slate-950/80">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <auto.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">{auto.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{auto.description}</p>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-blue-400 font-medium">{auto.aiFeature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">BH</span>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm Blake</h3>
              <p className="text-blue-400 font-medium mb-4">Founder, Flowstate AI</p>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  After multiple years as a technology consultant building solutions for large clients, 
                  I saw firsthand how AI could transform businesses. But I noticed small businesses 
                  were being left behind—they couldn't afford enterprise consultants or didn't know 
                  where to start.
                </p>
                
                <p>
                  I started Flowstate AI to bring that same enterprise-grade AI expertise to Chicago's 
                  small businesses. I have a vision for what the future of AI will be, and I want to 
                  help our local communities take advantage of this technology.
                </p>
                
                <p>
                  We don't sell software. We build AI systems that become your competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Will this work with my existing tools?",
      answer: "Yes. We integrate with the tools you already use—Gmail, Slack, HubSpot, Salesforce, QuickBooks, and hundreds more. We design automations around your current workflow, not the other way around."
    },
    {
      question: "What if I don't know what to automate?",
      answer: "That's exactly what our free AI audit is for. We'll analyze your workflow and identify the 2-3 highest-impact opportunities. Most business owners are surprised by how much time they can reclaim."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Not at all. We handle all the technical work. You tell us what you want to achieve, and we build it. We'll train you on how to use it, but you don't need to understand the underlying technology."
    },
    {
      question: "How long does implementation take?",
      answer: "Most automations are delivered in 5-7 business days. Complex multi-step systems may take 2-3 weeks. We'll give you a clear timeline during our discovery call."
    },
    {
      question: "What if it doesn't work as expected?",
      answer: "We offer a 30-day optimization guarantee. If the automation isn't performing as promised, we'll keep refining it at no additional cost until it meets the agreed-upon specifications."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
          <span className="text-sm font-medium text-orange-300">Limited Availability</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        
        <p className="text-xl text-slate-400 mb-4">
          20-minute AI audit. We'll identify 2-3 high-impact automations specific to your workflow.
        </p>

        <p className="text-slate-500 mb-8">
          Only accepting 5 new clients this month. Next project slot: March 1st.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="btn bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2"
          >
            Get Your Free AI Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-slate-500">
          <Check className="w-4 h-4 text-green-400" />
          <span>30-Day Optimization Guarantee</span>
        </div>

        <p className="text-slate-500 mt-6 text-sm">
          Or email directly: <a href="mailto:hello@flowstateai.io" className="text-blue-400 hover:text-blue-300">hello@flowstateai.io</a>
        </p>
      </div>
    </section>
  );
}
