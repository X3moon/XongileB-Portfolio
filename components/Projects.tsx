
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transform hover:-translate-y-2">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-purple-500 dark:text-purple-400 mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map(tech => (
          <span key={tech} className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
          <Github className="w-4 h-4 mr-2" /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my work demonstrating my skills in AI and software development.">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;