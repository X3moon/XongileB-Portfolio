import React, { useState } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically get initials for the new logo
  const nameParts = PERSONAL_INFO.name.split(' ');
  const firstNameInitial = nameParts[0]?.[0] || '';
  const lastNameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1]?.[0] : '';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const ThemeToggleButton = () => (
     <button 
        onClick={toggleTheme} 
        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md dark:shadow-lg dark:shadow-purple-500/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-3xl font-bold flex items-baseline group" aria-label="Home">
          <span className="text-gray-800 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
            {firstNameInitial}
          </span>
          {lastNameInitial && (
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-amber-400 text-4xl transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
              style={{ marginLeft: '-0.12em' }}
            >
              {lastNameInitial}
            </span>
          )}
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-purple-500 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggleButton />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-gray-900/90 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } overflow-y-auto`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-base font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-purple-500 dark:text-purple-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;