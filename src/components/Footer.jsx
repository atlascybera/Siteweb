import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SERVICES, CONTACT } from "../data";

export default function Footer() {
  return (
    <footer id="blog" className="border-t border-white/5 bg-[#030308]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="text-sm text-slate-500 mt-5 leading-relaxed max-w-xs">
            Sécurité, performance et évolutivité pour l'infrastructure IT de
            votre entreprise.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-300/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white mb-5">
            NAVIGATION
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-cyan-300 transition-colors">
                  {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white mb-5">
            SERVICES
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  {s.title.charAt(0) + s.title.slice(1).toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white mb-5">
            CONTACT
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-violet-300 shrink-0" />
              {CONTACT.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-violet-300 shrink-0" />
              {CONTACT.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-violet-300 shrink-0" />
              {CONTACT.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AtlasCybera. Tous droits réservés.
      </div>
    </footer>
  );
}
