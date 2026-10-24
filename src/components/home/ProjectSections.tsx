import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, Clock, Compass, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectFeatures, sihProblemStatement } from "@/content/project";

const Section = ({
  id,
  title,
  intro,
  tone = "background",
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  tone?: "background" | "muted";
  children: ReactNode;
}) => (
  <section id={id} className={`py-20 ${tone === "muted" ? "bg-muted/40" : "bg-background"}`}>
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        {intro && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{intro}</p>}
      </div>
      {children}
    </div>
  </section>
);

export const StatusNotice = () => (
  <div className="bg-accent/15 border-y border-accent/40">
    <div className="max-w-5xl mx-auto px-6 py-4 flex gap-3 items-start">
      <AlertTriangle className="w-5 h-5 mt-0.5 text-accent-foreground shrink-0" aria-hidden="true" />
      <p className="text-sm text-foreground">
        <strong>Project status: work in progress.</strong> Agronova is an evolving prototype built
        for the Smart India Hackathon. Some features are incomplete, use sample data, or are
        awaiting backend integration. This site shows our concept, design direction and progress.
      </p>
    </div>
  </div>
);

export const ProblemSection = () => {
  const { id, title, organisation, summary } = sihProblemStatement;
  const hasDetails = Boolean(title || summary);
  return (
    <Section
      id="problem"
      title="The Problem"
      intro="The agricultural challenge our SIH problem statement asks us to address."
    >
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 space-y-3">
          {hasDetails ? (
            <>
              {(id || organisation) && (
                <p className="text-sm text-muted-foreground">
                  {[id, organisation].filter(Boolean).join(" · ")}
                </p>
              )}
              {title && <h3 className="text-xl font-semibold text-foreground">{title}</h3>}
              {summary && <p className="text-foreground/90 leading-relaxed">{summary}</p>}
            </>
          ) : (
            <p className="text-muted-foreground italic">
              [Placeholder] Add the official SIH problem statement ID, title and a short summary in{" "}
              <code>src/content/project.ts</code>. This section stays generic until real details
              are provided.
            </p>
          )}
        </CardContent>
      </Card>
    </Section>
  );
};

export const SolutionSection = () => (
  <Section
    id="solution"
    tone="muted"
    title="Our Proposed Solution"
    intro="Agronova explores how digital tools can make guidance and decision support more accessible to farmers, and how game-style missions can encourage sustainable practices."
  >
    <div className="grid md:grid-cols-3 gap-6">
      {[
        ["Know your farm", "Farmers describe their soil, farm size and preferred crops once."],
        ["Take small actions", "Missions break sustainable practices into trackable steps with rewards."],
        ["See progress", "A dashboard summarises crops, tasks and a sustainability score."],
      ].map(([heading, text]) => (
        <Card key={heading}>
          <CardHeader>
            <CardTitle className="text-lg">{heading}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{text}</CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export const HowItWorks = () => (
  <Section id="how-it-works" title="How It Works" intro="The intended journey through the platform.">
    <ol className="grid md:grid-cols-4 gap-6">
      {[
        ["Register or log in", "Create an account with mobile number and password."],
        ["Set up your farm", "Pick soil types, farm size and crops you grow."],
        ["Complete missions", "Work through daily, weekly and seasonal missions."],
        ["Track progress", "Review XP, crop health and sustainability on the dashboard."],
      ].map(([heading, text], index) => (
        <li key={heading} className="text-center space-y-2">
          <div className="mx-auto w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <h3 className="font-semibold text-foreground">{heading}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export const DevelopmentStatus = () => (
  <Section
    id="status"
    tone="muted"
    title="Project Development"
    intro="What exists in the prototype today, and what is still planned."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {(["prototype", "planned"] as const).map((status) => (
        <Card key={status}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {status === "prototype" ? (
                <CheckCircle2 className="w-5 h-5 text-success" aria-hidden="true" />
              ) : (
                <Clock className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              )}
              {status === "prototype" ? "In the prototype (sample data)" : "Planned"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {projectFeatures
                .filter((feature) => feature.status === status)
                .map((feature) => (
                  <li key={feature.name}>
                    <p className="font-medium text-foreground">{feature.name}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export const AboutProject = () => (
  <Section id="about" title="About the Project">
    <p className="max-w-3xl mx-auto text-center text-lg text-foreground/90 leading-relaxed">
      Agronova is a student-developed project created in the context of the Smart India Hackathon
      (SIH). We are refining the platform, validating its features and improving how useful it is
      to farmers and other agricultural stakeholders.
    </p>
    <div className="flex justify-center mt-4">
      <Badge variant="outline" className="gap-1">
        <Compass className="w-3 h-3" aria-hidden="true" />
        Student prototype · not a production service
      </Badge>
    </div>
  </Section>
);

export const CallToAction = () => (
  <section className="py-16 bg-gradient-hero text-primary-foreground">
    <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
      <h2 className="text-3xl font-bold">Try the Agronova prototype</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary">
          <Link to="/register">
            <Sprout className="w-5 h-5" aria-hidden="true" />
            Register
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  </section>
);
