import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-slate-900 py-12 mt-20 relative z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright branding */}
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} • Saras Portfolio
          </p>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            Built with React, Tailwind v4 & Framer Motion
          </p>
        </div>

        {/* Right Side: Quick Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-slate-900/50 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-slate-900/50 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:yourcurrentemail@example.com" 
            className="p-2 bg-slate-900/50 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}