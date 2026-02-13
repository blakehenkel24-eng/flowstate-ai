import Link from "next/link";
import { 
  Check,
  ArrowRight,
  Settings,
  FileText,
  Users,
  TrendingUp,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <Services />
      <Process />
      <CaseStudies />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Industrial Grid Background */}
      <div className="fixed inset-0 industrial-grid pointer-events-none z-0" />
      
      {/* Heritage Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full heritage-glow pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#B87333]/20 bg-[#B87333]/5 text-[10px] uppercase tracking-[0.3em] font-bold text-[#B87333] mb-10">
          <span className="w-1 h-1 bg-[#B87333] rounded-full animate-pulse" />
          Now Scaling Chicago Businesses
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#F8F8F8] leading-[1.05] tracking-tight mb-10 font-serif">
          Automate any process.
          <br />
          <span className="italic text-[#C0C0C0]/50">Build any tool. With AI.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          Engineering custom AI automation for high-stakes workflows. Save 10+ hours per week 
          with precision-built systems designed for the industrial professional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="btn-industrial"
          >
            Book A Free Call
          </Link>
          <Link
            href="#process"
            className="btn-outline"
          >
            View Process
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustLogos() {
  return (
    <section className="py-16 border-t border-[#1C2A3C]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#C0C0C0]/40 text-[10px] uppercase tracking-[0.4em] font-black mb-8 text-center">
          Trusted Partners in Chicago
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-80 transition-opacity">
          <span className="font-serif text-2xl italic tracking-tighter text-[#F8F8F8]">REALTORS®</span>
          <span className="font-serif text-2xl italic tracking-tighter text-[#F8F8F8]">CONSTRUCT_CO</span>
          <span className="font-serif text-2xl italic tracking-tighter text-[#F8F8F8]">CHI_CONSULT</span>
          <span className="font-serif text-2xl italic tracking-tighter text-[#F8F8F8]">PRO_SERVICE</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      tier: "AI Kickstart",
      price: "$500",
      subprice: "one-time",
      description: "Audit and foundational modern toolkit for teams exploring AI implementation.",
      features: [
        "Foundation Audit",
        "AI Readiness",
        "Core Integrations"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      tier: "Workflow Automation",
      price: "$1,000 - $2,000",
      subprice: "+ $150/mo management",
      badge: "Most Popular",
      description: "Custom end-to-end automation integrated with your stack for immediate ROI.",
      features: [
        "End-to-end build",
        "Full Stack Config",
        "API Engineering",
        "Priority Support"
      ],
      cta: "Start Automating",
      highlight: true
    },
    {
      tier: "AI Agent System",
      price: "Custom",
      subprice: "",
      description: "Multi-automation AI systems and custom agent deployment for complex enterprise operations.",
      features: [
        "Agent Fleet",
        "Custom LLM Fine-Tuning",
        "24/7 Monitoring"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative border-t border-[#1C2A3C] bg-[#0F1A28]/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl text-[#F8F8F8] mb-6 font-serif">
            Precision-Built AI Systems
          </h2>
          <p className="text-[#C0C0C0]/60 font-light tracking-wide">
            Standardized tiers for high-performance outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-10 flex flex-col transition-all ${
                service.highlight
                  ? 'bg-[#1C2A3C] border border-[#B87333]/40 z-10 shadow-2xl'
                  : 'bg-[#0F1A28] border border-[#1C2A3C] hover:border-[#B87333]/40'
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 right-10 px-3 py-1 bg-[#B87333] text-[#0F1A28] text-[9px] font-bold uppercase tracking-[0.2em]">
                  {service.badge}
                </div>
              )}

              <h3 className="text-[#B87333] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {service.tier}
              </h3>

              <div className="flex flex-col mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light text-[#F8F8F8]">{service.price}</span>
                </div>
                {service.subprice && (
                  <span className="text-[#C0C0C0]/60 text-[10px] mt-2 uppercase font-bold tracking-[0.15em]">
                    {service.subprice}
                  </span>
                )}
              </div>

              <p className={`text-sm leading-relaxed mb-10 font-light ${
                service.highlight ? 'text-[#F8F8F8]/80' : 'text-[#C0C0C0]'
              }`}>
                {service.description}
              </p>

              <ul className="space-y-5 mb-12 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center gap-4 text-xs font-bold uppercase tracking-widest ${
                    service.highlight ? 'text-[#F8F8F8]' : 'text-[#C0C0C0]/60'
                  }`}>
                    <Check className={`text-lg ${service.highlight ? 'text-[#B87333]' : 'text-[#B87333]'}`} size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all text-center ${
                  service.highlight
                    ? 'btn-industrial'
                    : 'border border-[#1C2A3C] text-[#C0C0C0]/60 hover:text-[#F8F8F8] hover:border-[#B87333]/50'
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

function Process() {
  const phases = [
    {
      phase: "Phase 0.1",
      title: "Discovery Call",
      description: "Deep dive into your current manual workflows to identify high-impact automation opportunities and bottlenecks.",
      svg: (
        <svg className="w-40 h-40 stroke-[#B87333]/40 fill-none" strokeWidth="0.75" viewBox="0 0 200 200">
          <circle className="stroke-[#B87333]/60" cx="100" cy="70" r="30"/>
          <path className="opacity-60" d="M40 100 L100 70 L160 100 L100 130 Z"/>
          <path className="opacity-80" d="M40 120 L100 90 L160 120 L100 150 Z"/>
          <path className="stroke-[#B87333]" d="M40 140 L100 110 L160 140 L100 170 Z"/>
        </svg>
      )
    },
    {
      phase: "Phase 0.2",
      title: "Build & Deploy",
      description: "Rapid engineering cycle. We deliver your custom automation ready to use in just 5-7 days, not months.",
      svg: (
        <svg className="w-40 h-40 stroke-[#B87333]/40 fill-none" strokeWidth="0.75" viewBox="0 0 200 200">
          <g transform="translate(0, -10)">
            <path className="stroke-[#B87333]/60" d="M100 40 L130 55 L100 70 L70 55 Z"/>
            <path className="stroke-[#B87333]/60" d="M70 55 V85 L100 100 V70"/>
            <path className="stroke-[#B87333]/60" d="M130 55 V85 L100 100"/>
            <path className="opacity-60" d="M70 80 L100 95 L70 110 L40 95 Z"/>
            <path className="opacity-60" d="M40 95 V125 L70 140 V110"/>
            <path className="opacity-60" d="M100 95 V125 L70 140"/>
            <path className="opacity-60" d="M130 80 L160 95 L130 110 L100 95 Z"/>
            <path className="opacity-60" d="M100 95 V125 L130 140 V110"/>
            <path className="opacity-60" d="M160 95 V125 L130 140"/>
          </g>
        </svg>
      )
    },
    {
      phase: "Phase 0.3",
      title: "Optimize & Scale",
      description: "Continuous calibration and scaling support to ensure your system evolves alongside your business growth.",
      svg: (
        <svg className="w-40 h-40 stroke-[#B87333]/40 fill-none" strokeWidth="0.75" viewBox="0 0 200 200">
          <path className="opacity-50" d="M50 150 L130 110 V95 L50 135 Z"/>
          <path className="opacity-70" d="M60 140 L140 100 V85 L60 125 Z"/>
          <path className="opacity-90" d="M70 130 L150 90 V75 L70 115 Z"/>
          <path className="stroke-[#B87333]" d="M80 120 L160 80 V65 L80 105 Z"/>
          <path className="stroke-[#B87333]/30" d="M40 160 H140" strokeDasharray="3 3"/>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#0F1A28] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-[#F8F8F8] mb-8 font-serif font-medium">
            Fast Deployment. Predictable Results.
          </h2>
          <p className="text-[#C0C0C0] max-w-2xl mx-auto font-light leading-relaxed">
            We bypass the jargon and focus on the mechanics. Audit, build, and deploy systems 
            that deliver measurable impact from Day 1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {phases.map((phase, index) => (
            <div key={index} className="group flex flex-col items-start">
              <div className="w-full aspect-square mb-10 flex items-center justify-center bg-[#1C2A3C]/40 border border-[#1C2A3C]">
                {phase.svg}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold text-[#B87333] uppercase tracking-[0.3em]">
                  {phase.phase}
                </span>
                <div className="h-[1px] w-12 bg-[#B87333]/30" />
              </div>

              <h4 className="text-[#F8F8F8] text-2xl mb-4 italic font-serif">
                {phase.title}
              </h4>

              <p className="text-[#C0C0C0]/60 text-sm leading-relaxed font-light">
                {phase.description}
              </p>
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
      icon: Settings,
      metric: "100%",
      title: "Service Firm Adoption",
      description: "A 12-person Chicago service firm automated their delivery pipeline. Achieved full team adoption within 14 days, building complex projects in minutes instead of hours.",
      attribution: "Managing Partner",
      quote: "It just flows. We're never going back."
    },
    {
      icon: FileText,
      metric: "90%",
      title: "Reduction in SOW Time",
      description: "Custom AI-powered SOW generator replaced hours of manual drafting. Reducing statement-of-work creation from 4 hours to 15 minutes per client.",
      attribution: "Operations Director",
      quote: "Significant ROI within the first month."
    }
  ];

  return (
    <section id="case-studies" className="py-32 px-6 border-y border-[#1C2A3C] bg-[#0F1A28]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#F8F8F8] mb-20 text-center font-serif font-medium">
          Proven Performance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((study, index) => (
            <div
              key={index}
              className="bg-[#1C2A3C]/50 border border-[#1C2A3C] p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                <study.icon className="w-40 h-40 text-[#B87333]" strokeWidth={0.5} />
              </div>

              <div className="text-[#B87333] text-6xl font-serif italic mb-6">
                {study.metric}
              </div>

              <h3 className="text-2xl text-[#F8F8F8] mb-4">
                {study.title}
              </h3>

              <p className="text-[#C0C0C0] text-sm leading-relaxed mb-8 font-light">
                {study.description}
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-[#1C2A3C]">
                <div className="w-12 h-12 bg-[#0F1A28] flex items-center justify-center border border-[#1C2A3C]">
                  <Users className="text-[#C0C0C0]/40" size={20} />
                </div>
                <div>
                  <p className="text-[#F8F8F8] text-xs font-bold uppercase tracking-widest">
                    {study.attribution}
                  </p>
                  <p className="text-[#C0C0C0]/40 text-xs italic mt-1">
                    "{study.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-gradient-to-b from-[#0F1A28] to-[#1C2A3C]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-[#F8F8F8] mb-8 tracking-tight font-serif font-medium">
          Ready to enter flowstate?
        </h2>

        <p className="text-[#C0C0C0] mb-12 text-lg md:text-xl font-light">
          Stop fighting your workflow. Start building your industrial advantage. 
          Let's find your first 10 hours this week.
        </p>

        <Link
          href="/contact"
          className="btn-industrial h-20 px-16 text-xl tracking-[0.2em] shadow-[0_10px_40px_rgba(184,115,51,0.2)] inline-flex"
        >
          Book A Free Audit Call
        </Link>

        <p className="mt-10 text-[#C0C0C0]/40 text-[10px] uppercase tracking-[0.5em] font-black">
          No-obligation technical strategy session
        </p>
      </div>
    </section>
  );
}
