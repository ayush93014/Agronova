import heroNightFarm from "@/assets/hero-night-farm.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout, Target, Compass, Award } from "lucide-react";
import { AnimatedParticles } from "@/components/effects/AnimatedParticles";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { NightMotionGraphics } from "@/components/effects/NightMotionGraphics";

export const FarmHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroNightFarm} 
          alt="Nighttime sustainable farming landscape with tractor and moonlight" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-teal-800/40 to-teal-700/30" />
      </div>
      
      {/* Night Motion Graphics */}
      <NightMotionGraphics />
      
      {/* Animated Background Elements */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-grow">
            AGRONOVA
            <span className="text-accent block text-3xl md:text-4xl lg:text-5xl mt-3 text-balance animate-shimmer bg-gradient-to-r from-accent via-sun to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
              Smarter Agriculture, Better Decisions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A gamified farming prototype for Smart India Hackathon 2025 (SIH25075): grow plants and vegetables level by level, earn points for achievements, and make sustainable farming simple and fun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4 group">
              <a href="#problem">
                <Compass className="w-6 h-6" aria-hidden="true" />
                Explore Agronova
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20"
            >
              <Link to="/register">
                <Sprout className="w-6 h-6" aria-hidden="true" />
                Register
              </Link>
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '0.5s' }}>
              <div className="bg-success rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Sprout className="w-6 h-6 text-success-foreground group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Farm Profile Setup</h3>
              <p className="text-primary-foreground/80">Record soil types, farm size and preferred crops to personalise the experience.</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '1s' }}>
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Award className="w-6 h-6 text-accent-foreground group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Gamified Missions</h3>
              <p className="text-primary-foreground/80">Level up and earn points for sustainable practices through missions (sample missions for now).</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-water rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Target className="w-6 h-6 text-card group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Progress Dashboard</h3>
              <p className="text-primary-foreground/80">Track crops, tasks and a sustainability score in one place (sample data for now).</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating particles effect */}
      <AnimatedParticles />
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
    </section>
  );
};