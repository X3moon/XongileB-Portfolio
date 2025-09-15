import React, { useRef, useEffect } from 'react';

interface NeuralNetworkAnimationProps {
  theme: 'light' | 'dark';
}

const NeuralNetworkAnimation: React.FC<NeuralNetworkAnimationProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const isDarkMode = theme === 'dark';
    const themeColors = isDarkMode
      ? ['#a855f7', '#f59e0b', '#e5e7eb'] // Dark: Purple, Amber, Light Gray
      : ['#8b5cf6', '#f97316', '#4b5563']; // Light: Purple-600, Orange-500, Gray-600

    const lineColorPurple = isDarkMode ? 'rgba(168, 85, 247, ' : 'rgba(139, 92, 246, ';
    const lineColorAmber = isDarkMode ? 'rgba(245, 158, 11, ' : 'rgba(249, 115, 22, ';
    const hoverColor = isDarkMode ? '#f59e0b' : '#f97316';

    class Particle {
      x: number;
      y: number;
      radius: number;
      originalRadius: number;
      color: string;
      originalColor: string;
      vx: number;
      vy: number;

      constructor(x: number, y: number, radius: number, color: string, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.originalRadius = radius;
        this.color = color;
        this.originalColor = color;
        this.vx = vx;
        this.vy = vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(mousePos: { x: number, y: number }) {
        // Mouse hover interaction & attraction
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;
        const hoverRadius = this.originalRadius * 3;
        const attractionForce = 0.03;

        if (distance < interactionRadius) {
            this.radius += (hoverRadius - this.radius) * 0.1;
            this.color = hoverColor;
            // Attraction
            this.vx += (dx / distance) * attractionForce;
            this.vy += (dy / distance) * attractionForce;
        } else {
            this.radius += (this.originalRadius - this.radius) * 0.1;
            this.color = this.originalColor;
        }

        // Apply friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Wrap particles around the screen
        if (this.x - this.radius > canvas.width) this.x = 0 - this.radius;
        if (this.x + this.radius < 0) this.x = canvas.width + this.radius;
        if (this.y - this.radius > canvas.height) this.y = 0 - this.radius;
        if (this.y + this.radius < 0) this.y = canvas.height + this.radius;
        
        this.draw();
      }
    }
    
    const connect = () => {
        const connectionDistance = 120;
        const mouseConnectionDistance = 150;

        if (!ctx) return;

        for (let a = 0; a < particles.length; a++) {
            // Connect particles to each other
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.strokeStyle = `${lineColorPurple}${1 - distance / connectionDistance})`;
                    ctx.lineWidth = 0.4;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
            
            // Connect particles to mouse
            const dxMouse = mouse.current.x - particles[a].x;
            const dyMouse = mouse.current.y - particles[a].y;
            const distanceMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
            
            if(distanceMouse < mouseConnectionDistance){
                ctx.strokeStyle = `${lineColorAmber}${1 - distanceMouse / mouseConnectionDistance})`;
                ctx.lineWidth = 0.4;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.current.x, mouse.current.y);
                ctx.stroke();
            }
        }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000); // Adjusted density

      for (let i = 0; i < numberOfParticles; i++) {
        const radius = Math.random() * 1.5 + 1; // Smaller particles
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = themeColors[Math.floor(Math.random() * themeColors.length)];
        const vx = (Math.random() - 0.5) * 0.3; // Slower movement
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push(new Particle(x, y, radius, color, vx, vy));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => particle.update(mouse.current));
      connect();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    
    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
    };

    const handleMouseOut = () => {
        mouse.current.x = -1000;
        mouse.current.y = -1000;
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-15 dark:opacity-25 transition-opacity duration-300" />;
};

export default NeuralNetworkAnimation;