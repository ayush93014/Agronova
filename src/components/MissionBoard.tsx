import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Droplets, Leaf, Shield, Sun, Target, Trophy, Clock, Star } from "lucide-react";

interface Mission {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'seasonal';
  difficulty: 'easy' | 'medium' | 'hard';
  reward: {
    xp: number;
    coins: number;
    badge?: string;
  };
  progress: number;
  maxProgress: number;
  timeLeft: string;
  icon: string;
  requirements: string[];
}

export const MissionBoard = () => {
  const [missions] = useState<Mission[]>([
    {
      id: 1,
      title: "Morning Hydration",
      description: "Water all your crops before 8 AM for optimal growth",
      type: "daily",
      difficulty: "easy",
      reward: { xp: 100, coins: 50 },
      progress: 3,
      maxProgress: 5,
      timeLeft: "6h 24m",
      icon: "droplets",
      requirements: ["Access to water source", "Active crops"]
    },
    {
      id: 2,
      title: "Organic Pest Control",
      description: "Use bio-pesticides on 10 different crop plots",
      type: "weekly",
      difficulty: "medium",
      reward: { xp: 500, coins: 250, badge: "Eco Warrior" },
      progress: 6,
      maxProgress: 10,
      timeLeft: "3d 12h",
      icon: "shield",
      requirements: ["Bio-pesticide supply", "Pest identification knowledge"]
    },
    {
      id: 3,
      title: "Soil Health Champion",
      description: "Improve soil quality using compost and organic matter",
      type: "weekly",
      difficulty: "hard",
      reward: { xp: 750, coins: 400, badge: "Soil Guardian" },
      progress: 2,
      maxProgress: 8,
      timeLeft: "5d 8h",
      icon: "leaf",
      requirements: ["Compost preparation", "Soil testing kit"]
    },
    {
      id: 4,
      title: "Monsoon Harvest Festival",
      description: "Participate in the seasonal harvest celebration",
      type: "seasonal",
      difficulty: "medium",
      reward: { xp: 1000, coins: 600, badge: "Harvest Master" },
      progress: 0,
      maxProgress: 1,
      timeLeft: "12d 6h",
      icon: "sun",
      requirements: ["Complete daily missions for 7 days", "Community participation"]
    }
  ]);

  const getIcon = (iconName: string) => {
    const icons = {
      droplets: <Droplets className="w-6 h-6" />,
      shield: <Shield className="w-6 h-6" />,
      leaf: <Leaf className="w-6 h-6" />,
      sun: <Sun className="w-6 h-6" />,
    };
    return icons[iconName as keyof typeof icons] || <Target className="w-6 h-6" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'daily': return <Calendar className="w-4 h-4" />;
      case 'weekly': return <Clock className="w-4 h-4" />;
      case 'seasonal': return <Star className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const filterMissions = (type: string) => {
    if (type === 'all') return missions;
    return missions.filter(mission => mission.type === type);
  };

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Mission Board</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete sustainable farming missions to earn XP, unlock rewards, and contribute to a greener future
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Missions</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filterMissions('all').map((mission) => (
                <MissionCard key={mission.id} mission={mission} getIcon={getIcon} getDifficultyColor={getDifficultyColor} getTypeIcon={getTypeIcon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filterMissions('daily').map((mission) => (
                <MissionCard key={mission.id} mission={mission} getIcon={getIcon} getDifficultyColor={getDifficultyColor} getTypeIcon={getTypeIcon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filterMissions('weekly').map((mission) => (
                <MissionCard key={mission.id} mission={mission} getIcon={getIcon} getDifficultyColor={getDifficultyColor} getTypeIcon={getTypeIcon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seasonal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filterMissions('seasonal').map((mission) => (
                <MissionCard key={mission.id} mission={mission} getIcon={getIcon} getDifficultyColor={getDifficultyColor} getTypeIcon={getTypeIcon} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const MissionCard = ({ mission, getIcon, getDifficultyColor, getTypeIcon }: {
  mission: Mission;
  getIcon: (iconName: string) => JSX.Element;
  getDifficultyColor: (difficulty: string) => string;
  getTypeIcon: (type: string) => JSX.Element;
}) => {
  const isCompleted = mission.progress >= mission.maxProgress;
  const progressPercentage = (mission.progress / mission.maxProgress) * 100;

  return (
    <Card className="border-0 shadow-earth hover:shadow-glow transition-smooth">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${mission.type === 'daily' ? 'bg-success/10 text-success' : mission.type === 'weekly' ? 'bg-warning/10 text-warning' : 'bg-accent/10 text-accent'}`}>
              {getIcon(mission.icon)}
            </div>
            <div>
              <CardTitle className="text-lg mb-1">{mission.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getDifficultyColor(mission.difficulty)}>
                  {mission.difficulty.toUpperCase()}
                </Badge>
                <Badge variant="outline" className="bg-muted text-muted-foreground">
                  {getTypeIcon(mission.type)}
                  <span className="ml-1 capitalize">{mission.type}</span>
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Time Left</p>
            <p className="font-semibold text-accent">{mission.timeLeft}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4">{mission.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{mission.progress}/{mission.maxProgress}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {mission.requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold">{mission.reward.xp} XP</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-accent rounded-full" />
                <span className="text-sm font-semibold">{mission.reward.coins} Coins</span>
              </div>
              {mission.reward.badge && (
                <Badge variant="outline" className="bg-gradient-success text-success-foreground">
                  {mission.reward.badge}
                </Badge>
              )}
            </div>
            
            <Button 
              variant={isCompleted ? "success" : "default"} 
              disabled={isCompleted}
              className="transition-bounce"
            >
              {isCompleted ? "Completed" : "Start Mission"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};