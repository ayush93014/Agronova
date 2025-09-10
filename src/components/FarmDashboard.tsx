import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sprout, Shield, Sun, Trophy, Coins, Star, Clock } from "lucide-react";

export const FarmDashboard = () => {
  const [playerData, setPlayerData] = useState({
    xp: 2850,
    level: 12,
    nextLevelXp: 3000,
    coins: 1240,
    sustainabilityScore: 87,
    badges: ['Organic Farmer', 'Water Saver', 'Soil Guardian'],
    activeTasks: [
      { id: 1, name: 'Water Tomatoes', duration: 120, progress: 75, reward: 50 },
      { id: 2, name: 'Apply Bio-Fertilizer', duration: 300, progress: 30, reward: 100 },
      { id: 3, name: 'Harvest Wheat', duration: 480, progress: 90, reward: 200 },
    ],
    crops: [
      { name: 'Tomatoes', stage: 3, maxStage: 4, health: 95 },
      { name: 'Wheat', stage: 4, maxStage: 4, health: 100 },
      { name: 'Rice', stage: 2, maxStage: 4, health: 88 },
      { name: 'Maize', stage: 1, maxStage: 4, health: 92 },
    ]
  });

  const completeTask = (taskId: number) => {
    setPlayerData(prev => ({
      ...prev,
      activeTasks: prev.activeTasks.filter(task => task.id !== taskId),
      xp: prev.xp + prev.activeTasks.find(task => task.id === taskId)?.reward || 0,
      coins: prev.coins + Math.floor((prev.activeTasks.find(task => task.id === taskId)?.reward || 0) / 2)
    }));
  };

  const getCropStageIcon = (stage: number, maxStage: number) => {
    const progress = stage / maxStage;
    if (progress < 0.25) return <div className="w-2 h-2 bg-soil rounded-full" />;
    if (progress < 0.5) return <Sprout className="w-4 h-4 text-crop" />;
    if (progress < 0.75) return <div className="w-4 h-6 bg-crop rounded-t-full" />;
    return <div className="w-4 h-8 bg-success rounded-t-full relative">
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
    </div>;
  };

  return (
    <section className="min-h-screen bg-gradient-farm py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-success text-success-foreground border-0 shadow-success">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Level {playerData.level}</p>
                  <p className="text-2xl font-bold">{playerData.xp} XP</p>
                </div>
                <Trophy className="w-8 h-8 opacity-80" />
              </div>
              <Progress 
                value={(playerData.xp / playerData.nextLevelXp) * 100} 
                className="mt-3 h-2 bg-success-foreground/20"
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent to-sun text-accent-foreground border-0 shadow-earth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Farm Coins</p>
                  <p className="text-2xl font-bold">{playerData.coins}</p>
                </div>
                <Coins className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-water to-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Sustainability</p>
                  <p className="text-2xl font-bold">{playerData.sustainabilityScore}%</p>
                </div>
                <Star className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-earth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                  <p className="text-2xl font-bold text-foreground">{playerData.activeTasks.length}</p>
                </div>
                <Clock className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Farm Plot */}
          <Card className="border-0 shadow-earth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-crop" />
                Your Farm Plot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {playerData.crops.map((crop, index) => (
                  <div key={index} className="bg-gradient-farm rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{crop.name}</h4>
                      <Badge variant={crop.health > 90 ? "default" : "outline"} className="bg-success text-success-foreground">
                        {crop.health}% Health
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center h-16 mb-3">
                      {getCropStageIcon(crop.stage, crop.maxStage)}
                    </div>
                    <Progress value={(crop.stage / crop.maxStage) * 100} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Stage {crop.stage} of {crop.maxStage}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card className="border-0 shadow-earth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Active Farming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {playerData.activeTasks.map((task) => (
                <div key={task.id} className="bg-gradient-farm rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      {task.name.includes('Water') && <Droplets className="w-4 h-4 text-water" />}
                      {task.name.includes('Bio') && <Shield className="w-4 h-4 text-success" />}
                      {task.name.includes('Harvest') && <Sun className="w-4 h-4 text-accent" />}
                      {task.name}
                    </h4>
                    <Badge variant="outline" className="bg-accent/10 text-accent-foreground">
                      +{task.reward} XP
                    </Badge>
                  </div>
                  <Progress value={task.progress} className="h-2 mb-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {Math.round((task.duration * (100 - task.progress)) / 100)} min remaining
                    </span>
                    {task.progress >= 100 ? (
                      <Button 
                        variant="success" 
                        size="sm" 
                        onClick={() => completeTask(task.id)}
                      >
                        Complete Task
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        In Progress
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mt-8 border-0 shadow-earth">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {playerData.badges.map((badge, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-gradient-success text-success-foreground border-success/20 px-4 py-2"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};