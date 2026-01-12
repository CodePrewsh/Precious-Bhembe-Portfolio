import React from 'react';
import { Award, Users, ExternalLink } from 'lucide-react';

export default function VolunteerSection() {
  const experiences = [
    {
      organization: 'BSides',
      role: 'Volunteer',
      description: 'Volunteered at BSides cybersecurity conference, supporting event logistics and community engagement',
      period: '2024',
      image: '🛡️', // Replace with actual image: <img src="/path-to-bsides-image.jpg" alt="BSides" className="w-full h-48 object-cover rounded-lg mb-4" />
      website: 'https://bsidesjoburg.co.za/2025/03/bsides-joburg-2025/',
      color: 'border-red-500',
      tags: ['Cybersecurity', 'Community', 'Networking']
    },
    {
      organization: 'Cyberm8',
      role: 'Hackathon Organizer',
      description: 'Organized and coordinated hackathon events, fostering innovation and collaboration in the tech community',
      period: '2024 - Present',
      image: '🎯', // Replace with actual image
      website: 'https://www.cyberm8.org.za/',
      color: 'border-purple-500',
      tags: ['Event Management', 'Leadership', 'Tech Community']
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">// COMMUNITY INVOLVEMENT</div>
          <h2 className="text-5xl font-bold">
            Volunteer <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-slate-400 mt-4">Giving back to the tech community through volunteering and organizing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className={`bg-slate-900/50 backdrop-blur border-2 ${exp.color} rounded-2xl p-6 hover:scale-105 transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{exp.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.organization}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400 font-semibold">{exp.role}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Placeholder for actual image - uncomment and add your image path */}
              {/* <img src="/path-to-image.jpg" alt={exp.organization} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
              
              <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Users className="w-4 h-4" />
                Visit Website
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-full">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Active Community Member & Organizer</span>
          </div>
        </div>
      </div>
    </section>
  );
}