import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        // Custom Farming Palette
        soil: "hsl(var(--soil))",
        crop: "hsl(var(--crop))",
        water: "hsl(var(--water))",
        sun: "hsl(var(--sun))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-earth-sky': 'var(--gradient-earth-sky)',
        'gradient-farm': 'var(--gradient-farm)',
        'gradient-success': 'var(--gradient-success)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'earth': 'var(--shadow-earth)',
        'success': 'var(--shadow-success)',
        'glow': 'var(--shadow-glow)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
        'elastic': 'var(--transition-elastic)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "grow": {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(180deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))" 
          },
          "50%": { 
            boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))" 
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "particle-float": {
          "0%": { 
            transform: "translateY(100vh) translateX(0px) rotate(0deg)",
            opacity: "0"
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateY(-10vh) translateX(100px) rotate(360deg)",
            opacity: "0"
          },
        },
        "crop-grow": {
          "0%": { 
            transform: "scale(0.8) translateY(10px)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "scale(1.05) translateY(-5px)",
            opacity: "0.8"
          },
          "100%": { 
            transform: "scale(1) translateY(0)",
            opacity: "1"
          },
        },
        "moon-glow": {
          "0%, 100%": { 
            transform: "scale(1) rotate(0deg)",
            filter: "brightness(1) drop-shadow(0 0 20px rgba(255,255,255,0.3))"
          },
          "50%": { 
            transform: "scale(1.1) rotate(5deg)",
            filter: "brightness(1.2) drop-shadow(0 0 40px rgba(255,255,255,0.5))"
          },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "cloud-drift": {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "cloud-drift-reverse": {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        "headlight-sweep": {
          "0%": { opacity: "0.4", transform: "scaleX(0.8) rotate(12deg)" },
          "50%": { opacity: "0.8", transform: "scaleX(1.2) rotate(8deg)" },
          "100%": { opacity: "0.4", transform: "scaleX(0.8) rotate(12deg)" },
        },
        "mist-flow": {
          "0%": { transform: "translateX(-20px)", opacity: "0.2" },
          "50%": { transform: "translateX(20px)", opacity: "0.4" },
          "100%": { transform: "translateX(-20px)", opacity: "0.2" },
        },
        "mist-flow-reverse": {
          "0%": { transform: "translateX(20px)", opacity: "0.15" },
          "50%": { transform: "translateX(-20px)", opacity: "0.3" },
          "100%": { transform: "translateX(20px)", opacity: "0.15" },
        },
        "crop-wave": {
          "0%": { opacity: "0.3", transform: "scaleY(0.8)" },
          "50%": { opacity: "0.6", transform: "scaleY(1.2)" },
          "100%": { opacity: "0.3", transform: "scaleY(0.8)" },
        },
        "firefly": {
          "0%": { 
            opacity: "0.2", 
            transform: "translateY(0px) translateX(0px) scale(0.8)" 
          },
          "25%": { 
            opacity: "0.8", 
            transform: "translateY(-10px) translateX(5px) scale(1)" 
          },
          "50%": { 
            opacity: "1", 
            transform: "translateY(-5px) translateX(10px) scale(1.2)" 
          },
          "75%": { 
            opacity: "0.6", 
            transform: "translateY(-15px) translateX(3px) scale(1)" 
          },
          "100%": { 
            opacity: "0.2", 
            transform: "translateY(0px) translateX(0px) scale(0.8)" 
          },
        },
        "star-twinkle-1": {
          "0%": { 
            opacity: "0.3",
            transform: "scale(0.8) rotate(0deg)",
            filter: "brightness(0.8)"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.2) rotate(180deg)",
            filter: "brightness(1.3) drop-shadow(0 0 6px rgba(255,255,255,0.8))"
          },
          "100%": { 
            opacity: "0.3",
            transform: "scale(0.8) rotate(360deg)",
            filter: "brightness(0.8)"
          },
        },
        "star-twinkle-2": {
          "0%": { 
            opacity: "0.4",
            transform: "scale(0.9) rotate(45deg)",
            filter: "brightness(0.9)"
          },
          "25%": { 
            opacity: "0.8",
            transform: "scale(1.1) rotate(135deg)",
            filter: "brightness(1.1)"
          },
          "75%": { 
            opacity: "0.9",
            transform: "scale(1.3) rotate(270deg)",
            filter: "brightness(1.4) drop-shadow(0 0 8px rgba(255,255,255,0.6))"
          },
          "100%": { 
            opacity: "0.4",
            transform: "scale(0.9) rotate(405deg)",
            filter: "brightness(0.9)"
          },
        },
        "star-twinkle-3": {
          "0%": { 
            opacity: "0.2",
            transform: "scale(0.7) rotate(90deg)",
            filter: "brightness(0.7)"
          },
          "33%": { 
            opacity: "0.7",
            transform: "scale(1.0) rotate(180deg)",
            filter: "brightness(1.0)"
          },
          "66%": { 
            opacity: "1",
            transform: "scale(1.4) rotate(270deg)",
            filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.9))"
          },
          "100%": { 
            opacity: "0.2",
            transform: "scale(0.7) rotate(450deg)",
            filter: "brightness(0.7)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "grow": "grow 2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "particle-float": "particle-float 8s linear infinite",
        "crop-grow": "crop-grow 3s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "moon-glow": "moon-glow 4s ease-in-out infinite",
        "twinkle": "twinkle 2s ease-in-out infinite",
        "cloud-drift": "cloud-drift 25s linear infinite",
        "cloud-drift-reverse": "cloud-drift-reverse 30s linear infinite",
        "headlight-sweep": "headlight-sweep 3s ease-in-out infinite",
        "mist-flow": "mist-flow 8s ease-in-out infinite",
        "mist-flow-reverse": "mist-flow-reverse 10s ease-in-out infinite",
        "crop-wave": "crop-wave 4s ease-in-out infinite",
        "firefly": "firefly 6s ease-in-out infinite",
        "star-twinkle-1": "star-twinkle-1 3s ease-in-out infinite",
        "star-twinkle-2": "star-twinkle-2 4s ease-in-out infinite",
        "star-twinkle-3": "star-twinkle-3 5s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
