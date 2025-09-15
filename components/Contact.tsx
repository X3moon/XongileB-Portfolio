import React from 'react';
import Section from './Section';
import { CAREER_LINKS, SOCIAL_ICONS } from '../constants';
import { Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm open to new opportunities and collaborations. Feel free to reach out!">
      <div className="max-w-md mx-auto text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
            <a 
                href={`mailto:${CAREER_LINKS.email}`} 
                className="group inline-block w-full max-w-xs text-center text-purple-500 dark:text-purple-400 font-bold border-2 border-purple-500/50 dark:border-purple-400/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] break-all"
            >
                {CAREER_LINKS.email}
            </a>
             <a 
                href={`mailto:${CAREER_LINKS.email2}`} 
                className="group inline-block w-full max-w-xs text-center text-purple-500 dark:text-purple-400 font-bold border-2 border-purple-500/50 dark:border-purple-400/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] break-all"
            >
                {CAREER_LINKS.email2}
            </a>
             <a 
                href={`tel:${CAREER_LINKS.phone}`} 
                className="group inline-flex items-center justify-center w-full max-w-xs text-purple-500 dark:text-purple-400 font-bold border-2 border-purple-500/50 dark:border-purple-400/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]"
             >
                <Phone className="w-5 h-5 mr-2" />
                <span>{CAREER_LINKS.phone}</span>
            </a>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">Or connect with me on social media:</p>
        <div className="flex justify-center space-x-6">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-12 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
            >
              {React.cloneElement(social.icon, { size: 32 })}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;