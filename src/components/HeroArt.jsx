import React from "react";

export default function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute inset-16 rounded-full bg-cyan-500/10 blur-3xl" />
      <svg viewBox="0 0 500 500" className="relative w-full h-full">
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="55%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* side panels */}
        <g opacity="0.9">
          <rect x="30" y="140" width="130" height="90" rx="6" fill="url(#panelGrad)" stroke="#67e8f9" strokeOpacity="0.5" />
          <rect x="340" y="140" width="130" height="90" rx="6" fill="url(#panelGrad)" stroke="#c084fc" strokeOpacity="0.5" />
          <polyline points="45,215 65,195 85,205 105,175 125,190 145,165" fill="none" stroke="#67e8f9" strokeWidth="2" />
          <polyline points="355,215 375,180 395,200 415,170 435,195 455,175" fill="none" stroke="#c084fc" strokeWidth="2" />
        </g>

        {/* hex platform */}
        <polygon
          points="250,300 340,335 340,405 250,440 160,405 160,335"
          fill="none"
          stroke="#8b5cf6"
          strokeOpacity="0.45"
          strokeWidth="2"
        />

        {/* shield */}
        <path
          d="M250 80 L340 115 L340 230 C340 300 300 340 250 365 C200 340 160 300 160 230 L160 115 Z"
          fill="#0b0b18"
          stroke="url(#shieldGrad)"
          strokeWidth="3"
        />
        <path
          d="M250 80 L340 115 L340 230 C340 300 300 340 250 365 C200 340 160 300 160 230 L160 115 Z"
          fill="url(#shieldGrad)"
          fillOpacity="0.08"
        />
        {/* column / A monogram */}
        <g stroke="url(#shieldGrad)" strokeWidth="3" fill="none" strokeLinecap="round">
          <line x1="250" y1="130" x2="250" y2="300" />
          <line x1="220" y1="300" x2="280" y2="300" />
          <line x1="215" y1="130" x2="285" y2="130" />
          <path d="M250 145 L210 290" />
          <path d="M250 145 L290 290" />
          <line x1="228" y1="245" x2="272" y2="245" />
        </g>

        {/* circuit dots */}
        {[
          [170, 140], [330, 140], [170, 220], [330, 220], [250, 350],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#67e8f9" />
        ))}
      </svg>
    </div>
  );
}
