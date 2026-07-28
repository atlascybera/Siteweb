import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { GradientButton } from "./Buttons";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#05050c]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                i === 0
                  ? "text-white border-b-2 border-fuchsia-400 pb-1"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <GradientButton className="hidden lg:inline-flex">
          CONTACTEZ-NOUS
        </GradientButton>

        <button
          className="lg:hidden text-slate-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-5 pb-6 flex flex-col gap-4 border-t border-white/5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-slate-200 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <GradientButton className="w-full mt-1">CONTACTEZ-NOUS</GradientButton>
        </div>
      )}
    </header>
  );
}
