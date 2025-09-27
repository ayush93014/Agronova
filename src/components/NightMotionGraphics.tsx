import { Moon, Star } from 'lucide-react';

export const NightMotionGraphics = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated Moon */}
      <div className="absolute top-16 right-1/4 animate-moon-glow">
        <Moon className="w-16 h-16 text-white/90" />
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-glow scale-150" />
      </div>

      {/* Twinkling Stars */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${5 + (i % 3) * 15}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <Star className="w-3 h-3 text-white/70" fill="currentColor" />
        </div>
      ))}

      {/* Moving Clouds */}
      <div className="absolute top-20 left-0 w-96 h-32 bg-white/5 rounded-full blur-2xl animate-cloud-drift opacity-30" />
      <div 
        className="absolute top-32 right-0 w-80 h-28 bg-white/5 rounded-full blur-2xl animate-cloud-drift-reverse opacity-25"
        style={{ animationDelay: '3s' }}
      />

      {/* Tractor Headlight Beams */}
      <div className="absolute bottom-1/3 right-1/4">
        <div className="w-32 h-2 bg-gradient-to-r from-yellow-300/60 via-yellow-200/40 to-transparent animate-headlight-sweep transform rotate-12 blur-sm" />
        <div className="w-28 h-2 bg-gradient-to-r from-yellow-300/40 via-yellow-200/20 to-transparent animate-headlight-sweep transform rotate-6 blur-sm mt-1" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Animated Mist/Fog */}
      <div className="absolute bottom-0 left-0 w-full h-64">
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-teal-900/20 via-teal-800/10 to-transparent animate-mist-flow" />
        <div 
          className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-teal-800/15 via-teal-700/8 to-transparent animate-mist-flow-reverse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Crop Row Animation */}
      <div className="absolute bottom-20 left-1/4 right-1/4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-green-400/30 via-green-500/40 to-green-400/30 animate-crop-wave blur-sm"
            style={{
              left: `${i * 12}%`,
              width: '8%',
              bottom: `${i * 4}px`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Fireflies */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300/60 rounded-full animate-firefly blur-sm"
          style={{
            left: `${20 + (i * 8)}%`,
            top: `${40 + (i % 4) * 10}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
    </div>
  );
};