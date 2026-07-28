import React from "react";
import { Mail } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { CEO, TEAM, OPEN_ROLES } from "../data";

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionEyebrow>CORE TEAM</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black text-center uppercase tracking-tight">
        Notre Équipe
      </h2>

      {/* CEO */}
      <div className="mt-14 flex justify-center">
        <div className="relative rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/30 via-[#0a0a14] to-cyan-900/20 p-8 max-w-sm w-full text-center">
          <div className="text-[11px] tracking-[0.3em] text-cyan-300 font-bold mb-3">
            {CEO.role.toUpperCase()}
          </div>
          <div className="text-xl font-black text-white">{CEO.name}</div>
          <a
            href={`mailto:${CEO.email}`}
            className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors break-all"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            {CEO.email}
          </a>
        </div>
      </div>

      {/* connector */}
      <div className="flex justify-center">
        <div className="w-px h-10 bg-gradient-to-b from-violet-400/50 to-transparent" />
      </div>

      {/* Core team */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-2">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-cyan-300/40 transition-colors"
          >
            <div className="font-bold text-white">{member.name}</div>
            <div className="text-sm text-fuchsia-300 mt-1">{member.role}</div>
          </div>
        ))}

        {OPEN_ROLES.map((role) => (
          <div
            key={role}
            className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] p-6 text-center"
          >
            <div className="font-bold text-slate-500">{role}</div>
            <div className="text-xs text-slate-600 mt-1">Poste à pourvoir</div>
          </div>
        ))}
      </div>
    </section>
  );
}
