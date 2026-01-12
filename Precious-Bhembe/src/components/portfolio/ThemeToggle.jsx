import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700 light:bg-slate-200 light:hover:bg-slate-300 rounded-full border-2 border-slate-700 dark:border-slate-600 light:border-slate-400 transition-all hover:scale-110 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-7 h-7 text-yellow-400" />
      ) : (
        <Moon className="w-7 h-7 text-slate-700" />
      )}
    </button>
  );
}