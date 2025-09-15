
import React from 'react';
import Section from './Section';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-purple-500/20 h-full">
    <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 mb-2">
      {skill.icon}
    </div>
    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="A showcase of my technical and professional abilities.">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-center md:text-left text-purple-500 dark:text-purple-400 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center md:text-left text-amber-500 dark:text-amber-400 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SOFT_SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;