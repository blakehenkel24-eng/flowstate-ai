import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/Logo";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Flowstate AI | Heritage Industrial AI Automation",
  description: "Engineering custom AI automation for high-stakes workflows. Save 10+ hours per week with precision-built systems.",
  keywords: ["AI automation", "small business", "Chicago", "workflow automation", "AI tools", "industrial"],
  openGraph: {
    title: "Flowstate AI | Heritage Industrial AI Automation",
    description: "Engineering custom AI automation for high-stakes workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1C2A3C] bg-[#0F1A28]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Flowstate AI" className="w-8 h-8 rounded-sm" />
          <span className="text-[#F8F8F8] font-serif italic text-2xl tracking-tight">
            Flowstate AI
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[#C0C0C0]/70 text-xs font-bold uppercase tracking-[0.2em]">
          <Link href="#services" className="hover:text-[#B87333] transition-colors">
            Services
          </Link>
          <Link href="#process" className="hover:text-[#B87333] transition-colors">
            Process
          </Link>
          <Link href="#case-studies" className="hover:text-[#B87333] transition-colors">
            Case Studies
          </Link>
        </div>

        <Link 
          href="/contact"
          className="text-xs font-bold uppercase tracking-widest border border-[#B87333]/40 px-6 py-2.5 hover:bg-[#B87333] hover:text-[#0F1A28] transition-all text-[#B87333]"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F1A28] border-t border-[#1C2A3C] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Flowstate AI" className="w-7 h-7 rounded-sm" />
            <span className="text-[#F8F8F8] font-serif italic text-xl">Flowstate AI</span>
          </div>
          <p className="text-[#C0C0C0]/40 text-xs font-light max-w-xs">
            Custom AI engineering for the modern industrial Chicago landscape.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-10 text-[#C0C0C0]/60 text-[10px] font-bold uppercase tracking-[0.3em]">
          <Link href="#services" className="hover:text-[#B87333] transition-colors">Services</Link>
          <Link href="#process" className="hover:text-[#B87333] transition-colors">Process</Link>
          <Link href="#case-studies" className="hover:text-[#B87333] transition-colors">Case Studies</Link>
          <Link href="#" className="hover:text-[#B87333] transition-colors">Privacy</Link>
          <Link href="/contact" className="hover:text-[#B87333] transition-colors">Contact</Link>
        </div>
        
        <div className="text-[#C0C0C0]/20 text-[9px] uppercase tracking-[0.4em] font-black">
          © 2024 Flowstate AI. CHICAGO, IL.
        </div>
      </div>
    </footer>
  );
}
