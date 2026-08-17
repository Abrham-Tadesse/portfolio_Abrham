export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Smart Community Service",
    slug: "smart-community-service",
    description: "A community service platform.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-username/smart-community-service",
    featured: true
  }
];