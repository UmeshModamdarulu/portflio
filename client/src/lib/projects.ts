import { Database, Network, Music } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  iconName: string;
  gradientClasses: string;
  technologies: { name: string; badgeClasses: string }[];
  highlights: string[];
  buttonClasses: string;
};

export const projects: Project[] = [
  {
    title: "RESTful API Integration System",
    description: "Developed a comprehensive RESTful API system integrating multiple services for seamless data exchange.",
    iconName: "database",
    gradientClasses: "bg-gradient-to-r from-primary to-primary-600",
    technologies: [
      { name: ".NET Core", badgeClasses: "bg-primary-100 text-primary-700" },
      { name: "C#", badgeClasses: "bg-primary-100 text-primary-700" },
      { name: "SQL", badgeClasses: "bg-primary-100 text-primary-700" },
      { name: "REST", badgeClasses: "bg-primary-100 text-primary-700" }
    ],
    highlights: [
      "Implemented robust error handling and input validation",
      "Optimized API performance with advanced caching strategies",
      "Designed comprehensive documentation using Swagger",
      "Created thorough test suites for API endpoints",
      "Implemented secure authentication using JWT tokens"
    ],
    buttonClasses: "text-primary hover:text-primary-700"
  },
  {
    title: "API Gateway Implementation",
    description: "Created a robust API gateway that optimized request routing and improved overall system performance.",
    iconName: "network",
    gradientClasses: "bg-gradient-to-r from-cyan-500 to-blue-400",
    technologies: [
      { name: "Java", badgeClasses: "bg-cyan-100 text-cyan-700" },
      { name: "Spring Boot", badgeClasses: "bg-cyan-100 text-cyan-700" },
      { name: "Microservices", badgeClasses: "bg-cyan-100 text-cyan-700" }
    ],
    highlights: [
      "Built a centralized gateway for multiple microservices",
      "Implemented rate limiting and request throttling",
      "Designed service discovery and routing mechanisms",
      "Created traffic management with circuit breaker patterns",
      "Developed detailed metrics and monitoring dashboard"
    ],
    buttonClasses: "text-cyan-500 hover:text-cyan-600"
  },
  {
    title: "Real-time Data Processing System",
    description: "Built a scalable system for processing and analyzing real-time data streams with efficient API endpoints.",
    iconName: "music",
    gradientClasses: "bg-gradient-to-r from-blue-600 to-blue-400",
    technologies: [
      { name: "Python", badgeClasses: "bg-blue-100 text-blue-700" },
      { name: "FastAPI", badgeClasses: "bg-blue-100 text-blue-700" },
      { name: "MySQL", badgeClasses: "bg-blue-100 text-blue-700" },
      { name: "WebSockets", badgeClasses: "bg-blue-100 text-blue-700" }
    ],
    highlights: [
      "Created real-time data processing pipeline",
      "Implemented WebSocket endpoints for live updates",
      "Designed efficient database schema for high-volume data",
      "Built interactive dashboards for data visualization",
      "Developed automated alert system for anomaly detection"
    ],
    buttonClasses: "text-blue-600 hover:text-blue-700"
  }
];

// Helper function to get the appropriate icon component
export const getIconComponent = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'database':
      return Database;
    case 'network':
      return Network;
    case 'music':
      return Music;
    default:
      return Database;
  }
};
