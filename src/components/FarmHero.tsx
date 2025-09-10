import heroFarm from "@/assets/hero-farm.jpg";
import { Button } from "@/components/ui/button";
import { Sprout, Target, Users, Award } from "lucide-react";

export const FarmHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFarm} 
          alt="Sustainable farming landscape with modern technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            AGRONOVA
            <span className="text-accent block">Sustainable</span>
            <span className="text-sun">Farming</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            India's revolutionary gamified platform for sustainable farming. Complete missions, earn rewards, 
            and join the agricultural transformation of 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Sprout className="w-6 h-6" />
              Start Your Farm Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20">
              <Target className="w-6 h-6" />
              View Missions
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="bg-success rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-6 h-6 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Interactive Farming</h3>
              <p className="text-primary-foreground/80">Plant, water, and harvest crops in your virtual farm while learning sustainable practices.</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Earn Rewards</h3>
              <p className="text-primary-foreground/80">Complete daily missions and earn XP, badges, and real-world benefits.</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="bg-water rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-card" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Farm Community</h3>
              <p className="text-primary-foreground/80">Connect with fellow farmers, share knowledge, and grow together.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-success rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-sun rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-water rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};