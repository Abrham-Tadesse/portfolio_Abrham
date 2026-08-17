export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Astro",
      "Tailwind CSS"
    ]
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "REST APIs"
    ]
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL"
    ]
  },

  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux"
    ]
  }
];