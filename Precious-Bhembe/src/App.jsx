import React from 'react';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import EducationSection from './components/portfolio/EducationSection';
import SkillsSection from './components/portfolio/SkillsSection';
import CertificationsSection from './components/portfolio/CertificationsSection';
import VolunteerSection from './components/portfolio/VolunteerSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ContactSection from './components/portfolio/ContactSection';
import Footer from './components/portfolio/Footer';
import ThemeToggle from './components/portfolio/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white dark:text-white transition-colors duration-500">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <VolunteerSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;