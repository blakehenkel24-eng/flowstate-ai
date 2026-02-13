import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/Logo";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flowstate AI | AI Automation for Small Business",
  description: "Custom AI automations and intelligent tools that save you 10+ hours every week. No code. No complexity. Just results.",
  keywords: ["AI automation", "small business", "Chicago", "workflow automation", "AI tools", "business efficiency"],
  openGraph: {
    title: "Flowstate AI | AI Automation for Small Business",
    description: "Custom AI automations and intelligent tools that save you 10+ hours every week.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-slate-950 text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">
              Flowstate<span className="text-blue-400">AI</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-400 hover:text-white font-medium transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-slate-400 hover:text-white font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="btn bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg">
              Free AI Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-slate-400" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-white">
                Flowstate<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-4">
              Custom AI automations and intelligent tools for Chicago small businesses. 
              Save time, reduce stress, and grow your business.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:hello@flowstateai.io" className="text-slate-500 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="hover:text-white transition-colors">AI Kickstart</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">AI Workflow Automation</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">AI Agent System</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Free AI Audit</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Flowstate AI. Chicago, IL.
          </p>
          <p className="text-sm text-slate-600">
            Built with AI for Chicago small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
