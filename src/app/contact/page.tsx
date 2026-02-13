"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xnqkvpzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          _subject: `New AI Audit Request from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.log("Form submitted:", formState);
        setIsSubmitted(true);
      }
    } catch {
      console.log("Form submitted:", formState);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 relative">
        <div className="fixed inset-0 industrial-grid pointer-events-none z-0" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-[#B87333]/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#B87333]" />
          </div>
          <h1 className="text-3xl font-serif text-[#F8F8F8] mb-4">Thanks for reaching out!</h1>
          <p className="text-[#C0C0C0] mb-8">
            I've received your message and will get back to you within 24 hours.
            Looking forward to learning about your business!
          </p>
          <Link href="/" className="btn-industrial inline-flex">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      <div className="fixed inset-0 industrial-grid pointer-events-none z-0" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#B87333] flex items-center justify-center">
              <svg className="w-10 h-10 text-[#0F1A28]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m4.22-10.22l4.24-4.24M6.34 6.34L2.1 2.1m17.8 17.8l-4.24-4.24M6.34 17.66l-4.24 4.24M23 12h-6m-6 0H1m17.07-4.93l-4.24 4.24M6.34 6.34l-4.24-4.24"/>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#F8F8F8] mb-4">
            Get Your Free AI Audit
          </h1>
          <p className="text-xl text-[#C0C0C0] font-light">
            20 minutes. I'll identify 2-3 high-impact AI opportunities for your business.
          </p>
        </div>

        <div className="bg-[#1C2A3C]/80 border border-[#1C2A3C] p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] placeholder-[#C0C0C0]/40 focus:border-[#B87333] outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="john@yourbusiness.com"
                  className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] placeholder-[#C0C0C0]/40 focus:border-[#B87333] outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="business" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formState.business}
                  onChange={handleChange}
                  required
                  placeholder="Acme Corp"
                  className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] placeholder-[#C0C0C0]/40 focus:border-[#B87333] outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formState.industry}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] focus:border-[#B87333] outline-none transition-all"
                >
                  <option value="">Select your industry...</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="contracting">Contracting / Home Services</option>
                  <option value="consulting">Consulting</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="healthcare">Healthcare / Wellness</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="marketing">Marketing / Creative</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                What are you interested in? *
              </label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                required
                className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] focus:border-[#B87333] outline-none transition-all"
              >
                <option value="">Select a service...</option>
                <option value="kickstart">AI Kickstart (Team Training)</option>
                <option value="automation">AI Workflow Automation</option>
                <option value="agent-system">AI Agent System (Full Transformation)</option>
                <option value="not-sure">Not sure — help me decide</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]/70 mb-2">
                What's your biggest time drain? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="e.g., I spend 2 hours every morning on emails, or I'm losing leads because I can't respond fast enough..."
                className="w-full bg-[#0F1A28] border border-[#1C2A3C] px-4 py-3 text-[#F8F8F8] placeholder-[#C0C0C0]/40 focus:border-[#B87333] outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-industrial disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                <>
                  Book My Free AI Audit
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-[#C0C0C0]/50">
              Or email me directly:{" "}
              <a href="mailto:hello@flowstateai.io" className="text-[#B87333] hover:text-[#D28540]">
                hello@flowstateai.io
              </a>
            </p>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-[#C0C0C0]/50 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#B87333]" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#B87333]" />
              <span>24-hour response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
