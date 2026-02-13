interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Linear-style logo with line gaps */}
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <mask id="lineGap">
          <rect width="40" height="40" fill="white" />
          <rect x="12" y="0" width="4" height="40" fill="black" />
          <rect x="28" y="0" width="2" height="40" fill="black" />
        </mask>
      </defs>
      
      {/* Main circle with gaps */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#logoGrad)"
        strokeWidth="3"
        fill="none"
        mask="url(#lineGap)"
      />
      
      {/* Flow lines */}
      <path
        d="M8 20C8 20 13 12 20 12C27 12 32 20 32 20"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        mask="url(#lineGap)"
      />
      
      <path
        d="M10 26C10 26 14 20 20 20C26 20 30 26 30 26"
        stroke="url(#logoGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        mask="url(#lineGap)"
      />
      
      {/* Center dot */}
      <circle
        cx="20"
        cy="20"
        r="2.5"
        fill="url(#logoGrad)"
      />
    </svg>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="w-10 h-10" />
      <span className="text-2xl font-bold text-white">
        Flowstate<span className="text-blue-400">AI</span>
      </span>
    </div>
  );
}
