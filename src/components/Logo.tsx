export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B87333" />
          <stop offset="50%" stopColor="#D28540" />
          <stop offset="100%" stopColor="#B87333" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="url(#copperGradient)" 
        strokeWidth="6"
      />
      
      {/* Vertical flow line */}
      <path 
        d="M50 15 L50 85" 
        stroke="url(#copperGradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* Horizontal bars */}
      <path 
        d="M25 50 L40 50" 
        stroke="url(#copperGradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M60 50 L75 50" 
        stroke="url(#copperGradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* Center dot */}
      <circle 
        cx="50" 
        cy="50" 
        r="12" 
        fill="url(#copperGradient)"
      />
    </svg>
  );
}
