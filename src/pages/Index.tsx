import { Navigation } from "@/components/layout/Navigation";
import { FarmHero } from "@/components/home/FarmHero";
import { FarmDashboard } from "@/components/home/FarmDashboard";
import { MissionBoard } from "@/components/home/MissionBoard";
import {
  AboutProject,
  CallToAction,
  DevelopmentStatus,
  HowItWorks,
  ProblemSection,
  SolutionSection,
  StatusNotice,
} from "@/components/home/ProjectSections";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <div id="hero">
        <FarmHero />
      </div>
      <StatusNotice />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <div id="dashboard">
        <FarmDashboard />
      </div>
      <div id="missions">
        <MissionBoard />
      </div>
      <DevelopmentStatus />
      <AboutProject />
      <CallToAction />
    </main>
  </div>
);

export default Index;
