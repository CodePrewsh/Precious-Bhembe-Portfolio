import React, { useState, useEffect } from 'react';
import { Code2, Rocket, Coffee, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Problem Solver', 'Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'Code Craftsman'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to next section (About)
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating Icons with animation */}
      <div 
        className="absolute top-20 left-20 animate-bounce opacity-0"
        style={{ 
          animationDelay: '0s', 
          animationDuration: '3s',
          animation: 'fadeInBounce 1s ease-out 0.2s forwards, bounce 3s ease-in-out 1.2s infinite'
        }}
      >
        <Code2 className="w-12 h-12 text-cyan-500/30" />
      </div>
      <div 
        className="absolute top-40 right-32 animate-bounce opacity-0"
        style={{ 
          animationDelay: '1s', 
          animationDuration: '4s',
          animation: 'fadeInBounce 1s ease-out 0.4s forwards, bounce 4s ease-in-out 1.4s infinite'
        }}
      >
        <Coffee className="w-10 h-10 text-purple-500/30" />
      </div>
      <div 
        className="absolute bottom-40 left-40 animate-bounce opacity-0"
        style={{ 
          animationDelay: '0.5s', 
          animationDuration: '3.5s',
          animation: 'fadeInBounce 1s ease-out 0.6s forwards, bounce 3.5s ease-in-out 1.6s infinite'
        }}
      >
        <Rocket className="w-10 h-10 text-yellow-500/30" />
      </div>

      <div className="text-center z-10">
        {/* Animated badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-cyan-400">Available for opportunities</span>
          <Rocket className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Animated greeting */}
        <div 
          className="text-sm text-cyan-400 mb-4 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
        >
          &lt;Hello, World /&gt;
        </div>
        
        {/* Animated name */}
        <h1 
          className="text-7xl font-bold mb-4 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}
        >
          I'm <span className="text-cyan-400">Precious</span>
          <br />
          <span className="text-white">Bhembe</span>
        </h1>

        {/* Animated rotating text */}
        <div 
          className="inline-block px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 mb-6 min-w-[320px] opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}
        >
          <span className="text-cyan-400 text-lg">&gt;</span>{' '}
          <span 
            className="inline-block text-lg font-medium"
            key={currentRole}
            style={{
              animation: 'fadeIn 0.5s ease-in-out'
            }}
          >
            {roles[currentRole]}
          </span>
          <span className="animate-pulse text-lg">█</span>
        </div>

        {/* Animated description - FIXED: bugs=RED, features=GREEN */}
        <p 
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}
        >
          I turn <span className="text-cyan-400 font-semibold">caffeine</span> into <span className="text-green-400 font-semibold">code</span>, ideas into <span className="text-blue-400 font-semibold">reality</span>, and <span className="text-red-500 font-semibold">bugs</span> into...<span className="text-green-500 font-semibold">features</span> 😊
        </p>

        {/* Animated tech tags */}
        <div 
          className="flex gap-4 justify-center mb-8 flex-wrap opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 1.2s forwards' }}
        >
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">Java</span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">Spring Boot</span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">React</span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">Azure</span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">AI</span>
        </div>

        {/* Animated buttons */}
        <div 
          className="flex gap-4 justify-center flex-wrap mb-6 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 1.4s forwards' }}
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            See My Work →
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-full font-semibold border border-slate-700 transition-all hover:border-cyan-500/50"
          >
            Let's Talk ☕
          </button>
        </div>

        {/* Animated social icons */}
        <div 
          className="flex gap-4 justify-center opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 1.6s forwards' }}
        >
          <a 
            href="https://github.com/CodePrewsh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-14 h-14 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all hover:scale-110 hover:border-cyan-500/50 group"
          >
            <Github className="w-7 h-7 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/precious-bhembe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-14 h-14 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all hover:scale-110 hover:border-cyan-500/50 group"
          >
            <Linkedin className="w-7 h-7 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* Fixed scroll button - now clickable */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors cursor-pointer opacity-0 flex flex-col items-center"
          style={{ animation: 'fadeIn 0.8s ease-out 2s forwards' }}
        >
          <div className="text-sm mb-1">scroll</div>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInBounce {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}