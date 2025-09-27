import { useEffect, useState } from 'react';
import { Leaf, Sprout, Sun, Droplets } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: 'leaf' | 'sprout' | 'sun' | 'droplet';
  delay: number;
  duration: number;
}

export const AnimatedParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const icons: Particle['icon'][] = ['leaf', 'sprout', 'sun', 'droplet'];
      
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          icon: icons[Math.floor(Math.random() * icons.length)],
          delay: Math.random() * 8,
          duration: 8 + Math.random() * 4,
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 12000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (iconType: Particle['icon']) => {
    switch (iconType) {
      case 'leaf':
        return <Leaf className="w-4 h-4 text-success" />;
      case 'sprout':
        return <Sprout className="w-4 h-4 text-crop" />;
      case 'sun':
        return <Sun className="w-4 h-4 text-sun" />;
      case 'droplet':
        return <Droplets className="w-4 h-4 text-water" />;
      default:
        return <Leaf className="w-4 h-4 text-success" />;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-particle-float opacity-70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {getIcon(particle.icon)}
        </div>
      ))}
    </div>
  );
};