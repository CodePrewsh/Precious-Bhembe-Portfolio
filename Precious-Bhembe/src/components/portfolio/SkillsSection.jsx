import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'Java', level: 90, color: 'bg-orange-500' },
    { name: 'Spring Boot', level: 85, color: 'bg-green-500' },
    { name: 'React', level: 88, color: 'bg-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'Azure', level: 75, color: 'bg-blue-500' },
    { name: 'PostgreSQL', level: 82, color: 'bg-blue-600' },
    { name: 'Power BI', level: 78, color: 'bg-yellow-600' } // ✅ Added Power BI
  ];

  const tools = [
    'Git', 'REST APIs', 'Docker', 'Maven', 'npm', 'VS Code',
    'IntelliJ', 'Postman', 'MySQL', 'PostgreSQL', 'Azure', 'Power BI', 'AI/ML'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">// SKILLS</div>
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-cyan-400">—</span> Core Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-cyan-400">—</span> Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}