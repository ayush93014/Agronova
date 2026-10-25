/**
 * Single place to edit project facts shown on the homepage.
 * Anything left empty renders as a clearly-marked placeholder.
 */
export const sihProblemStatement = {
  id: "SIH25075",
  title: "Gamified Platform to Promote Sustainable Farming Practices",
  organisation: "Government of Kerala",
  theme: "Agriculture, FoodTech & Rural Development",
  category: "Software",
  summary:
    "Smart India Hackathon 2025 asks for a software platform that uses game mechanics to encourage sustainable farming practices. Agronova's approach: turn growing plants and vegetables into a level-based journey where achievements earn points, so that farming feels approachable and rewarding, especially for a generation that loves games.",
};

export type FeatureStatus = "prototype" | "planned";

export interface ProjectFeature {
  name: string;
  description: string;
  status: FeatureStatus;
}

/** Keep this honest: "prototype" = visible in the app today (sample data / no backend). */
export const projectFeatures: ProjectFeature[] = [
  {
    name: "Farm profile setup",
    description: "Choose soil types, farm size and preferred crops after signing up.",
    status: "prototype",
  },
  {
    name: "Levels, XP and rewards preview",
    description: "XP, coins, levels and crop progress on a dashboard, currently driven by sample data.",
    status: "prototype",
  },
  {
    name: "Mission board",
    description: "Daily, weekly and seasonal sustainable-farming missions, currently sample missions.",
    status: "prototype",
  },
  {
    name: "Login and registration",
    description: "Forms and validation are in place; there is no account backend connected yet.",
    status: "prototype",
  },
  {
    name: "Real accounts and saved progress",
    description: "Connect a backend so profiles, levels, missions and points persist.",
    status: "planned",
  },
  {
    name: "Government-connected marketplace",
    description:
      "Idea: buy seeds and other farming supplies from the same place, linked to government schemes. This is a concept only; no government integration exists.",
    status: "planned",
  },
  {
    name: "Mission verification",
    description: "Photo-based task evidence, carried over from our earlier prototype idea.",
    status: "planned",
  },
  {
    name: "Crop listing for bulk buying",
    description: "A simple marketplace concept from our earlier prototype.",
    status: "planned",
  },
];
