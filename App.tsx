import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Capstone from './components/Capstone';
import Certifications from './components/Certifications';
import Badges from './components/Badges';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetworkAnimation from './components/NeuralNetworkAnimation';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorGlow from './components/CursorGlow';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = useRef<Record<string, HTMLElement>>({});
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      sectionRefs.current[section.id] = section as HTMLElement;
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="relative text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <CursorGlow />
      <ScrollProgressBar />
      <NeuralNetworkAnimation theme={theme} />
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Capstone />
        <Certifications />
        <Badges />
        <Presentation />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;