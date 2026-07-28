import React from "react";
import { Shield } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-11 h-11 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-90 blur-[2px]" />
        <div className="relative w-11 h-11 rounded-lg bg-[#07070f] flex items-center justify-center border border-white/10">
          <Shield className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
        </div>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-lg sm:text-xl bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
          ATLASCYBERA
        </div>
        <div className="text-[10px] sm:text-[11px] tracking-[0.3em] text-slate-400 -mt-0.5">
          CYBERA
        </div>
      </div>
    </div>
  );
}
