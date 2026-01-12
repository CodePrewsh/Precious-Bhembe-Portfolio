import React from "react";
import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Java OCA",
      subtitle: "Oracle Certified Associate",
      description: "Oracle Java SE Programmer",
      provider: "Oracle",
      icon: "☕",
      color: "border-orange-500",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=743AE4FD9A9CF62617B3982FB99BEE5D319D2A7233A602B788A14C9F4069C993",
      date: " September 2025",
    },
    {
      title: "AZ-900",
      subtitle: "Azure Fundamentals",
      description: "Cloud Computing Fundamentals",
      provider: "Microsoft",
      icon: "☁️",
      color: "border-blue-500",
      link: "https://learn.microsoft.com/api/credentials/share/en-za/PreciousBhembe-5881/1D46340753AD29A?sharingId=CAD96EAF35620F6",
      date: " May 2025",
    },
    {
      title: "PL-300",
      subtitle: "Power BI Data Analyst Associate",
      description: "Data Analytics & Visualization",
      provider: "Microsoft",
      icon: "📊",
      color: "border-purple-500",
      link: "https://learn.microsoft.com/api/credentials/share/en-za/PreciousBhembe-5881/7658459291BD1B7E?sharingId=CAD96EAF35620F6",
      date: "November 2025",
    },
    {
      title: "AI-900",
      subtitle: "Azure AI Fundamentals",
      description: "Artificial Intelligence Essentials",
      provider: "Microsoft",
      icon: "🤖",
      color: "border-pink-500",
      link: "https://learn.microsoft.com/api/credentials/share/en-za/PreciousBhembe-5881/68B741D012B1F39?sharingId=CAD96EAF35620F6",
      date: "December 2025",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">// CERTIFICATIONS</div>
          <h2 className="text-5xl font-bold">
            Verified <span className="text-cyan-400">Credentials</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Industry-recognized certifications that validate my expertise
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6 font-mono text-sm">
            <div className="text-cyan-400">
              $ cat credentials.json | jq '.certifications'
            </div>
            <div className="mt-2 text-slate-400">{"{"}</div>
            <div className="pl-4 text-green-400">"developer"</div>:{" "}
            <span className="text-orange-400">"Precious Bhembe"</span>,<br />
            <div className="pl-4 text-green-400">"verified"</div>:{" "}
            <span className="text-blue-400">true</span>,<br />
            <div className="pl-4 text-green-400">"total_certs"</div>:{" "}
            <span className="text-purple-400">4</span>,<br />
            <div className="pl-4 text-green-400">"status"</div>:{" "}
            <span className="text-orange-400">
              "🚀 Ready to build amazing things"
            </span>
            <br />
            <div className="text-slate-400">{"}"}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/50 backdrop-blur border-2 ${cert.color} rounded-2xl p-6 hover:scale-105 transition-transform group`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <span className="text-yellow-400">🏆</span>
                  </div>
                  <h4 className="font-semibold text-cyan-400 mb-2">
                    {cert.subtitle}
                  </h4>
                  <p className="text-sm text-slate-400 mb-3">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                      {cert.provider}
                    </span>
                    <span className="text-xs text-slate-500">{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Verified
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-full">
            <span className="text-2xl">🎓</span>
            <span className="text-2xl">☁️</span>
            <span className="text-2xl">📊</span>
            <span className="text-2xl">🤖</span>
            <span className="ml-2 font-semibold">
              4 Industry Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
