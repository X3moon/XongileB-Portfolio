
import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import type { Certification } from '../types';
import { Award } from 'lucide-react';

const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => (
  <a 
    href={cert.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex items-center justify-between border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-purple-500/20"
  >
    <div className="flex items-center">
      <Award className="w-6 h-6 text-purple-500 dark:text-purple-400 mr-4 flex-shrink-0"/>
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
      </div>
    </div>
    <span className="text-xs text-purple-500 dark:text-purple-400 font-semibold">VERIFY</span>
  </a>
);

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications" subtitle="My commitment to continuous learning and professional development.">
      <div className="max-w-3xl mx-auto space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <CertificationItem key={cert.name} cert={cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;