import React from "react";

export function GradientButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] hover:-translate-y-0.5 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold text-sm tracking-wide text-slate-100 border border-violet-400/40 bg-white/[0.02] hover:bg-white/[0.06] hover:border-cyan-300/60 transition-all duration-200 flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
