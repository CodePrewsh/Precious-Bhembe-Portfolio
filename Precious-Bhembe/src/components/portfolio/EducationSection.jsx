import React from "react";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const timeline = [
    {
      type: "education",
      institution: "Code College",
      title: "Software Development Bootcamp",
      description:
        "Completed intensive software development training at Code College, specializing in Web and Java Development with an emphasis on building real applications and understanding how software works end-to-end.",
      period: "2024 - 2025",
      icon: "🎓",
      color: "border-cyan-500",
    },
    {
      type: "Software Engineer internship",
      institution: "Compuways",
      title: "Internship",
      description:
        "Completed a software development internship at Compuways through Code College, gaining hands-on experience in web and Java development, building applications, and applying core programming and software engineering practices in real projects.",
      period: "2025",
      icon: "💼",
      color: "border-purple-500",
    },
    {
      type: "program",
      institution: "The Faith Mangope Technology and Leadership Institute (FMTALI)",
      title: "Software Development and data Analytics Trainee ",
      description:
        "Currently enrolled in an intensive program focusing on advanced software development and data analytics techniques",
      period: "2025 - Present",
      icon: "🚀",
      color: "border-green-500",
      current: true,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">
            // EDUCATION & EXPERIENCE
          </div>
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Education, training, and professional development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-800 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div
                    className={`bg-slate-900/50 backdrop-blur border-2 ${item.color} rounded-2xl p-6 hover:scale-105 transition-all relative`}
                  >
                    {item.current && (
                      <div className="absolute -top-3 -right-3">
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                          Current
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">
                          {item.institution}
                        </h3>
                        <div className="text-cyan-400 font-semibold mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-500">
                          {item.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-full">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold">Continuous Learning & Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
