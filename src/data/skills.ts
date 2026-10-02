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
      "REST APIs"
    ]
  },

  {
    category: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma"
    ]

  },

  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "insomnia",
      "postman"
    ]
  }
];