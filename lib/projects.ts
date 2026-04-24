export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  year: string;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "copy-lab",
    name: "copy-lab",
    description: "CLI tool for A/B testing headlines with local LLMs. No API keys, no dashboards.",
    longDescription: "Built to speed up landing page iteration without vendor lock-in. Runs entirely on your machine via Ollama.",
    tags: ["TypeScript", "Ollama"],
    github: "https://github.com",
    year: "2025",
    status: "Open Source"
  },
  {
    slug: "funnel-sh",
    name: "funnel.sh",
    description: "Minimal conversion tracking you self-host in an afternoon.",
    longDescription: "A lightweight alternative to bloated analytics platforms. SQLite-backed, single binary.",
    tags: ["Go", "SQLite"],
    github: "https://github.com",
    year: "2025",
    status: "Open Source"
  },
  {
    slug: "prompt-kit",
    name: "prompt-kit",
    description: "Reusable prompt components for React apps. Batteries included.",
    longDescription: "A collection of composable React components for building LLM-powered UIs quickly.",
    tags: ["React", "TypeScript"],
    github: "https://github.com",
    year: "2024",
    status: "Open Source"
  },
  {
    slug: "ship-log",
    name: "ship-log",
    description: "Public changelog generator from git commits. One command, clean output.",
    longDescription: "Turns your git history into a readable changelog. Supports markdown and HTML output.",
    tags: ["Node.js"],
    github: "https://github.com",
    year: "2024",
    status: "Open Source"
  }
];

export function getProjectBySlug(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}
