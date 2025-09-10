import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, Home, Target, Users, Trophy, Bell, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f2ee9f02-6fb1-4990-82cb-a4be934e38fb.png" 
              alt="AGRONOVA - Sustainable Farming Platform" 
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">AGRONOVA</span>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                2025
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('dashboard')}
              className="flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              My Farm
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('missions')}
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Missions
            </Button>
            <Button 
              variant="ghost" 
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Community
            </Button>
            
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-earth-dark border-earth-medium hover:bg-earth-light"
                onClick={() => window.location.href = '/login'}
              >
                Login
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.location.href = '/login'}
              >
                <Sprout className="w-4 h-4" />
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('hero')}
                className="justify-start"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('dashboard')}
                className="justify-start"
              >
                <Target className="w-4 h-4 mr-2" />
                My Farm
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('missions')}
                className="justify-start"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Missions
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start"
              >
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
              <div className="pt-2 border-t border-border/50 mt-2 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/login'}
                >
                  Login
                </Button>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.location.href = '/login'}
                >
                  <Sprout className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};