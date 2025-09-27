export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-success/20 rounded-full animate-float blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-accent/20 to-sun/20 rounded-full animate-float blur-3xl opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-water/30 to-crop/30 rounded-full animate-pulse-slow blur-2xl opacity-40" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-success/20 rotate-45 animate-wiggle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-accent/30 rounded-full animate-bounce-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-water/20 rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};