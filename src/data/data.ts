import type { Project } from "../components/Projects";
import type { SkillCategory } from "../components/Skills";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";
import type { SocialLink } from "../layout/footer";
import type { ExperienceItem } from "../components/Experience";

export const projects: Project[] = [
  {
    id: 1,
    title: "Druk Handicraft",
    link: "https://drukhandicraft.com/",
    description:
      "A frontend-only React project built for a family-owned handicraft business and delivered free of charge as a community contribution.",
  },
  {
    id: 2,
    title: "Precision Dental Clinic",
    link: "https://www.dentalclinicprecision.com.np/",
    description:
      "A static React-based website developed free of charge to support a local dental clinic, with a simple UI and mock API for easy content updates.",
  },
  {
    id: 3,
    title: "Adventist Clinic – Better Living Guide",
    link: "https://www.adventistclinic.com/better-living-guide",
    description:
      "A production-ready health education platform built with Next.js and Tailwind CSS, implementing all guide pages while adhering to existing design guidelines and ensuring responsive, cross-device compatibility.",
  },
  {
    id: 4,
    title: "AI Studio — Multi-Agent Platform",
    link: "https://fusemachines.com/ai-products/ai-studio/",
    description:
      "Frontend development for a unified AI Studio platform, including a reusable chat UI, fraud detection workflows, database (DB) agent interfaces, and modular project pages built on a plugin-based architecture.",
  },
  // {
  //   id: 5,
  //   title: "Project 5",
  //   link: "#",
  //   description: "A web application built with React and TypeScript.",
  // },
  // {
  //   id: 6,
  //   title: "Project 6",
  //   link: "#",
  //   description: "A web application built with React and TypeScript.",
  // },
];

export const skillData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "PHP"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Context API",
      "React Query (TanStack Query)",
      "TanStack Table",
      "Vite",
      "NX Monorepo",
      "SCSS / Sass",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Jira", "Postman", "Storybook", "Figma"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Technical Leadership",
      "Cross-team Collaboration",
      "Problem Solving",
      "System Design Thinking",
      "Time Management",
      "Adaptability",
    ],
  },
  {
    category: "Spoken languages",
    skills: [
      "English (Fluent)",
      "Nepali (Native)",
      "Hindi (Intermediate)",
      "Chinese (Beginner)",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sanjshres", icon: GithubLogoIcon },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanjaygshres/",
    icon: LinkedinLogoIcon,
  },
  { name: "Email", url: "sanjaygopalshrestha@gmail.com", icon: EnvelopeIcon },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Fusemachines",
    role: "Software Engineer",
    duration: "September 2025 – Present",
    responsibilities: [
      "Led development of a reusable, multi-functional chat UI component used across AI agents and conversation workflows in AI Studio.",
      "Designed and implemented a plugin-based architecture enabling multi-purpose extensibility across AI use cases.",
      "Built scalable frontend architecture using React Context API and custom hooks for clean and maintainable code.",
      "Implemented chat history, response regeneration, and suggestion visualization features.",
      "Created centralized chart components to handle analytics and data visualization across AI Studio.",
      "Collaborated closely with backend and AI teams to support streaming responses and agent workflows.",
    ],
  },
  {
    company: "Fusemachines",
    role: "Software Engineer",
    duration: "January 2024 – August 2025",
    responsibilities: [
      "Developed frontend logic to convert user inputs into SQL queries processed by backend services for charts and analytics.",
      "Built applications using Vite to improve development speed and build efficiency.",
      "Created reusable table components using TanStack Table with drag-and-drop and pin/unpin column features.",
      "Used React Query for efficient data fetching and server-state management.",
      "Integrated AWS S3 for scalable and secure file storage.",
      "Developed pixel-perfect, responsive interfaces using Next.js and Tailwind CSS aligned with Figma designs.",
    ],
  },
  {
    company: "Fusemachines",
    role: "Software Engineer",
    duration: "January 2023 – December 2023",
    responsibilities: [
      "Built complete client-side authentication and login session management flows.",
      "Configured authentication using AWS Amplify and JWT tokens.",
      "Developed projects from scratch using an NX monorepo architecture.",
      "Implemented Redux Toolkit for predictable and scalable state management.",
    ],
  },
  {
    company: "Fusemachines",
    role: "Software Engineer Trainee",
    duration: "October 2021 – March 2022",
    responsibilities: [
      "Built parent and student profile features for a school management platform.",
      "Implemented linking and unlinking of parent–student accounts with notification flows.",
      "Collaborated with team members during feature development and testing.",
    ],
  },
];
