import heroNightFarm from "@/assets/hero-night-farm.png";
import { Button } from "@/components/ui/button";
import { Sprout, Target, Users, Award } from "lucide-react";
import { AnimatedParticles } from "./AnimatedParticles";
import { AnimatedBackground } from "./AnimatedBackground";
import { NightMotionGraphics } from "./NightMotionGraphics";

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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight animate-grow">
            AGRONOVA
            <span className="text-accent block animate-shimmer bg-gradient-to-r from-accent via-sun to-accent bg-[length:200%_auto] bg-clip-text text-transparent">Sustainable</span>
            <span className="text-sun animate-pulse-glow">Farming</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-float">
            India's revolutionary gamified platform for sustainable farming. Complete missions, earn rewards, 
            and join the agricultural transformation of 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Sprout className="w-6 h-6 group-hover:animate-wiggle" />
              Start Your Farm Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:scale-105 transition-all duration-300 group"
            >
              <Target className="w-6 h-6 group-hover:animate-wiggle" />
              View Missions
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '0.5s' }}>
              <div className="bg-success rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Sprout className="w-6 h-6 text-success-foreground group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Interactive Farming</h3>
              <p className="text-primary-foreground/80">Plant, water, and harvest crops in your virtual farm while learning sustainable practices.</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '1s' }}>
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Award className="w-6 h-6 text-accent-foreground group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Earn Rewards</h3>
              <p className="text-primary-foreground/80">Complete daily missions and earn XP, badges, and real-world benefits.</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-card/20 hover:scale-105 transition-all duration-500 group animate-crop-grow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-water rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Users className="w-6 h-6 text-card group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Farm Community</h3>
              <p className="text-primary-foreground/80">Connect with fellow farmers, share knowledge, and grow together.</p>
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