import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">// PROJECTS</div>
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Selected projects focused on real-world impact
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur border-2 border-cyan-500 rounded-2xl p-8 hover:scale-[1.02] transition-all">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-3">
                  GoTo — E-Hailing Platform
                </h3>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-400 font-semibold">
                    🏅 Top 10 Project — Geekulcha Hackathon 2025
                  </span>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  GoTo is an e-hailing application built for South Africa’s
                  minibus taxi industry, designed to bring structure, safety,
                  and data-driven insights to a transport system used by
                  millions daily. The platform focuses on real-world usability,
                  scalability, and supporting township-based transport
                  entrepreneurs through practical technology.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    C#
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    Google Maps API
                  </span>
                </div>

                <a
                  href="https://play.google.com/apps/internaltest/4701496228039849441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on Play Store</span>
                </a>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <img
                    src="/goto-app.png"
                    alt="GoTo App"
                    className="relative rounded-2xl border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all shadow-2xl w-64 h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
