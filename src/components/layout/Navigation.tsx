import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Menu, Sprout, Target, Trophy, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "problem", label: "Problem", icon: Info },
  { id: "dashboard", label: "Farm Preview", icon: Target },
  { id: "missions", label: "Missions", icon: Trophy },
  { id: "status", label: "Status", icon: Info },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/agronova-logo.png" alt="Agronova logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">AGRONOVA</span>
            <Badge variant="outline" className="hidden sm:inline-flex bg-success/10 text-success border-success/30">
              SIH Prototype
            </Badge>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button key={id} variant="ghost" onClick={() => scrollToSection(id)} className="gap-2">
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </Button>
            ))}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <Button asChild variant="outline" size="sm" className="text-earth-dark border-earth-medium hover:bg-earth-light">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="hero" size="sm">
                <Link to="/register">
                  <Sprout className="w-4 h-4" aria-hidden="true" />
                  Register
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 flex flex-col gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button key={id} variant="ghost" onClick={() => scrollToSection(id)} className="justify-start">
                <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                {label}
              </Button>
            ))}
            <div className="pt-2 border-t border-border/50 mt-2 space-y-2">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild variant="hero" className="w-full">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Sprout className="w-4 h-4 mr-2" aria-hidden="true" />
                  Register
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
