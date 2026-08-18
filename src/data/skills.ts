export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS"
    ]
  },

  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "REST APIs"
    ]
  },

  {
    category: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL"
    ]
  },

  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux"
    ]
  }
];