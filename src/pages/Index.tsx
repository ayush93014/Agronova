import { Navigation } from "@/components/Navigation";
import { FarmHero } from "@/components/FarmHero";
import { FarmDashboard } from "@/components/FarmDashboard";
import { MissionBoard } from "@/components/MissionBoard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <FarmHero />
      </div>
      <div id="dashboard">
        <FarmDashboard />
      </div>
      <div id="missions">
        <MissionBoard />
      </div>
    </div>
  );
};

export default Index;
