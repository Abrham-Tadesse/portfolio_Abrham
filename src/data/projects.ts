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
      "https://github.com/your-username/smart-community-service",

    demo: "",

    featured: true
  },

  {
    title: "AI Assistant",

    slug: "ai-assistant",

    description:
      "A web-based AI assistant that accepts user messages through a frontend and communicates with an AI model through a Flask backend.",

    problem:
      "Users need a simple interface for communicating with an AI model without exposing API credentials in the frontend.",

    solution:
      "I created a frontend-to-backend architecture where the browser sends requests to Flask, and the backend communicates with the AI service securely.",

    features: [
      "Chat interface",
      "Backend API",
      "AI model integration",
      "Environment-based API key configuration",
      "JSON request and response handling"
    ],

    technologies: [
      "Python",
      "Flask",
      "Gemini API"
    ],

    challenges: [
      "Handling API credentials securely",
      "Connecting the frontend to the Flask backend",
      "Handling JSON requests and responses",
      "Managing API errors"
    ],

    github:
      "https://github.com/your-username/ai-assistant",

    demo: "",

    featured: true
  },

  {
    title: "Menu and Ordering System",

    slug: "menu-ordering-system",

    description:
      "A web application for browsing food items, adding them to a cart, and submitting orders through a Flask backend.",

    problem:
      "A simple restaurant menu needs an easy way for customers to browse available food and submit orders digitally.",

    solution:
      "I built a frontend menu and cart interface connected to Flask API endpoints for retrieving food and storing orders.",

    features: [
      "Food menu",
      "Category filtering",
      "Shopping cart",
      "Order submission",
      "Order retrieval",
      "REST API"
    ],

    technologies: [
      "JavaScript",
      "Python",
      "Flask",
      "JSON"
    ],

    challenges: [
      "Connecting frontend JavaScript to Flask",
      "Handling JSON requests",
      "Managing cart state",
      "Persisting orders"
    ],

    github:
      "https://github.com/your-username/menu-ordering-system",

    demo: "",

    featured: false
  }
];