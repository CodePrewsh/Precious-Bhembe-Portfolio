import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2026 Precious Bhembe. Built with Code and Coffee.☕
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/CodePrewsh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="linkedin.com/in/precious-bhembe" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:bhembepreciouspt@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}