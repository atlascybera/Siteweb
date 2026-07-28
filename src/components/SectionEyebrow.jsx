import React from "react";

export default function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/70" />
      <span className="text-xs sm:text-sm tracking-[0.35em] text-violet-300 font-semibold">
        {children}
      </span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/70" />
    </div>
  );
}
