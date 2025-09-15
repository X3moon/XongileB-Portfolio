import React from 'react';
import Section from './Section';
import { PRESENTATION } from '../constants';

const Presentation: React.FC = () => {
  return (
    <Section id="presentation" title="Showcase Presentation" subtitle="A deeper dive into my work, methodology, and vision for the future.">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-purple-500/20 h-full">
                    <h3 className="text-xl font-bold text-purple-500 dark:text-purple-400 mb-3">Introduction & My Story</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{PRESENTATION.intro}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">{PRESENTATION.myStory}</p>
                </div>
            </div>
            <div className="space-y-8">
                 <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-amber-500/20 h-full">
                    <h3 className="text-xl font-bold text-amber-500 dark:text-amber-400 mb-3">Vision & Skill Philosophy</h3>
                     <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{PRESENTATION.myVision}</p>
                     <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">{PRESENTATION.skillPhilosophy}</p>
                </div>
            </div>
        </div>

        <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Project Highlights</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{PRESENTATION.projectHighlights}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/5 to-amber-500/5 dark:from-purple-500/10 dark:to-amber-500/10 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Future Learning Plans</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{PRESENTATION.futurePlans}</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Presentation;