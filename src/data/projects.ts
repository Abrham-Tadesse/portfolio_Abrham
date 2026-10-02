export interface Project {
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Smart Community Service",

    slug: "smart-community-service",

    description:
      "A full-stack platform that allows people to report community problems and helps administrators manage and respond to those issues.",

    problem:
      "Community problems such as water supply, electricity, roads, sanitation, and security issues can be difficult to report and track through a centralized system.",

    solution:
      "I built a web platform where users can submit issues, track their status, and interact with administrators through a centralized reporting system.",

    features: [
      "User authentication",
      "Issue reporting",
      "Issue status tracking",
      "Comments",
      "Notifications",
      "Admin dashboard",
      "Role-based access"
    ],

    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    challenges: [
      "Managing authentication and authorization",
      "Designing the issue data model",
      "Keeping frontend state synchronized with the backend",
      "Implementing role-based functionality"
    ],

    github:
      "https://github.com/Abrham-Tadesse/smart-community-service",

    demo: "",

    featured: true
  },

  {
    title: "p2p-exam preparation platform",

    slug: "p2p-exam preparation platform",

    description:
"A web-based peer-to-peer exam preparation platform that connects students with tutors, allowing students to access quizzes, communicate with tutors, submit tutor applications, and receive academic support through a role-based backend system.",

problem:
"Students need a centralized platform where they can access exam preparation resources, connect with qualified tutors, communicate in real time, and receive structured academic support, while administrators need tools to manage users, tutor applications, and platform activities.",

solution:
"I developed a modular backend architecture using Node.js and Express.js that manages authentication, tutor applications, administrative approval, quizzes, conversations, messaging, ratings, and reporting. ",

features: [
"Student, Tutor, and Admin role-based access",
"JWT-based authentication and authorization",
"Quiz creation, participation, and submission",
"Real-time student–tutor messaging",
"Conversation management",
"Document upload and storage for tutor applications",
],

technologies: [
"Node.js",
"Express.js",
"PostgreSQL",
"Prisma ORM",
"Socket.IO",
"JWT",
"bcrypt",
"Zod",
"Cloudinary"
],

challenges: [
"Managing relational data and complex relationships with PostgreSQL and Prisma",
"Implementing authenticated real-time communication using Socket.IO",
"Validating and securely processing tutor application documents",
],

    github:
      "https://github.com/your-username/p2p-exam_platform",

    demo: "",

    featured: true
  },

  {
title: "Graphic Designer Portfolio",

slug: "graphic-designer-portfolio",

description:
"A modern personal portfolio website developed for a graphic designer to showcase creative work, design projects, professional experience, and visual identity through an engaging and responsive digital portfolio.",

problem:
"Graphic designers need a visually compelling online presence where they can showcase their creative work, communicate their design style, highlight professional experience, and give potential clients an easy way to explore their portfolio.",

solution:
"I designed and developed a responsive portfolio website centered around the designer's visual identity and creative work, with structured project presentation, smooth navigation, interactive sections, and a clean interface that allows visitors to explore the designer's work and professional background.",

features: [
"Creative portfolio showcase",
"Graphic design project presentation",
"Skills and design tools showcase",
"Responsive design across devices",
"Interactive navigation",
"Smooth page transitions and animations",
],

technologies: [
"React",
"JavaScript",
"HTML",
"CSS"
],

challenges: [
"Translating the graphic designer's visual identity into a cohesive web experience",
"Designing a portfolio that emphasizes visual work without sacrificing usability",
"Implementing smooth interactions and animations while maintaining a responsive user experience"
],

github:
"YOUR_GITHUB_REPOSITORY_URL",

demo:
"YOUR_DEPLOYED_WEBSITE_URL",

featured: false
},

];