import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate percentage (0 to 1) and ensure it's valid
    const scrolled = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial position on mount
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Container is fixed at the top with a high z-index to appear over the header
    <div className="fixed top-0 left-0 w-full h-1 z-[60]" aria-hidden="true">
      {/* The actual progress bar uses scaleX for a performant animation */}
      <div 
        className="h-full bg-gradient-to-r from-purple-500 to-amber-500 origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
