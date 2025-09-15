
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-purple-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-500 dark:text-purple-400 mb-4">Professional Biography</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{PERSONAL_INFO.bio}</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-purple-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-500 dark:text-amber-400 mb-4">Career Objectives</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{PERSONAL_INFO.objectives}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;