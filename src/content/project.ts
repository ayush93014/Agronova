/**
 * Single place to edit project facts shown on the homepage.
 * Anything left empty renders as a clearly-marked placeholder.
 */
export const sihProblemStatement = {
  id: "", // e.g. "SIHxxxx" — fill in from the official SIH portal
  title: "", // official problem statement title
  organisation: "", // sponsoring organisation / ministry, as listed by SIH
  summary: "", // 2–3 sentences describing the challenge in your own words
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
    name: "Farm dashboard",
    description: "XP, coins, crop progress and sustainability score — currently driven by sample data.",
    status: "prototype",
  },
  {
    name: "Mission board",
    description: "Daily, weekly and seasonal sustainable-farming missions — currently sample missions.",
    status: "prototype",
  },
  {
    name: "Login and registration",
    description: "Forms and validation are in place; there is no account backend connected yet.",
    status: "prototype",
  },
  {
    name: "Real accounts and saved progress",
    description: "Connect a backend so profiles, missions and rewards persist.",
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
