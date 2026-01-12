import React from "react";
import { Database, Code2, Cloud, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-4">
          <div className="text-sm text-cyan-400 mb-2">// A LITTLE ABOUT ME</div>
          <h2 className="text-5xl font-bold">
            Who I <span className="text-cyan-400">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
            <div className="bg-slate-800/50 rounded-lg p-6 mb-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-slate-500">// Developer Profile</div>
              <div className="text-cyan-400">const</div>{" "}
              <span className="text-purple-400">developer</span> = {"{"}
              <br />
              <div className="pl-4">
                <span className="text-green-400">name:</span>{" "}
                <span className="text-orange-400">"Precious Bhembe"</span>,
                <br />
                <span className="text-green-400">role:</span>{" "}
                <span className="text-orange-400">"Software Developer"</span>,
                <br />
                <span className="text-green-400">passion:</span>{" "}
                <span className="text-orange-400">"Building Solutions"</span>,
                <br />
                <span className="text-green-400">available:</span>{" "}
                <span className="text-blue-400">true</span>
              </div>
              {"}"};
            </div>

            <p className="text-slate-300 leading-relaxed">
              Full-stack & cloud developer with hands-on experience building
              backend systems, APIs, and frontend interfaces using Java, Spring
              Boot, JavaScript, React, and SQL/NoSQL databases. I design clean,
              reliable, cloud-ready solutions, focus on real-world system
              behavior, and continuously improve performance and scalability
              through practical projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <Database className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Backend</h3>
              <p className="text-sm text-slate-400">Java & Spring Boot</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <Code2 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Frontend</h3>
              <p className="text-sm text-slate-400">React & JavaScript</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <Cloud className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Cloud & Data</h3>
              <p className="text-sm text-slate-400">Azure & Power BI</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">AI & Full Stack</h3>
              <p className="text-sm text-slate-400">Node.js & AI Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}