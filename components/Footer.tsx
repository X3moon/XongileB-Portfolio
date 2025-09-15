
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;