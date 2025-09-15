
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => (
  <div className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className="bg-purple-500/10 dark:bg-purple-500/20 p-3 rounded-full border border-purple-500/30 dark:border-purple-500/50">
        {experience.icon}
      </div>
      {!isLast && <div className="w-px flex-grow bg-gray-300 dark:bg-gray-700 my-2"></div>}
    </div>
    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 w-full mb-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{experience.duration}</p>
      <h3 className="text-xl font-bold text-purple-500 dark:text-purple-400 mb-1">{experience.title}</h3>
      <p className="font-semibold text-amber-500 dark:text-amber-400 mb-4">{experience.company}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey and key contributions.">
      <div className="max-w-3xl mx-auto">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard 
            key={index} 
            experience={exp} 
            isLast={index === EXPERIENCE_DATA.length - 1} 
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;