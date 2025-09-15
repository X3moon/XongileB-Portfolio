import React, { useState, useEffect } from 'react';

const CursorGlow: React.FC = () => {
  const [isPointerInside, setIsPointerInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // We only need to update the CSS variables; the rendering is handled by CSS.
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    const handleMouseEnter = () => {
      setIsPointerInside(true);
    };

    const handleMouseLeave = () => {
      setIsPointerInside(false);
    };

    // Listen on the documentElement for robust enter/leave detection.
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    // Always listen for mousemove to have the position ready for when the glow becomes visible.
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Run this effect only once on mount.

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[-1] transition-opacity duration-500
                 bg-[radial-gradient(circle_500px_at_var(--mouse-x)_var(--mouse-y),_rgba(168,85,247,0.12),_transparent_80%)]
                 dark:bg-[radial-gradient(circle_500px_at_var(--mouse-x)_var(--mouse-y),_rgba(168,85,247,0.25),_transparent_80%)]
                 ${isPointerInside ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default CursorGlow;
