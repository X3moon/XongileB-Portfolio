import React from 'react';
import { PERSONAL_INFO, CAREER_LINKS } from '../constants';
import { Download, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
            <img
                src={PERSONAL_INFO.profilePicture}
                alt={PERSONAL_INFO.name}
                className="rounded-full w-full h-full object-cover border-4 border-purple-500/50 shadow-lg shadow-purple-500/20"
            />
            <div className="absolute inset-0 rounded-full border-4 border-amber-400/50 animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="block text-gray-800 dark:text-gray-300 mb-2">Hi, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          {PERSONAL_INFO.brandingStatement}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={CAREER_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-white dark:text-gray-900 font-medium rounded-lg overflow-hidden bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-white transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
            </span>
          </a>
          <a
            href={CAREER_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-gray-800 dark:text-white font-medium rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            <span className="relative flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;