
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-400 mb-2">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;