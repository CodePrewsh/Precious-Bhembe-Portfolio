import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 mb-2">// GET IN TOUCH</div>
          <h2 className="text-5xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4">Have a project in mind? Let's build something amazing together!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <a href="mailto:bhembepreciouspt@gmail.com" className="font-semibold text-lg hover:text-cyan-400 transition-colors">
                    bhembepreciouspt@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Phone className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <a href="tel:+27642941645" className="font-semibold text-lg hover:text-cyan-400 transition-colors">
                    +27 64 294 1645
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <MapPin className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="font-semibold text-lg">Johannesburg, South Africa</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Button */}
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-center text-slate-400 mb-4">Quick Contact</p>
              <div className="flex justify-center">
                <a 
                  href="mailto: bhembepreciouspt@gmail.com?subject=Project%20Inquiry&body=Hi%20Precious,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you." 
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Me an Email</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-slate-800 mt-6">
              <p className="text-center text-slate-400 mb-4">Connect with me on social media</p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://github.com/CodePrewsh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all hover:scale-110 group"
                >
                  <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/in/precious-bhembe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}