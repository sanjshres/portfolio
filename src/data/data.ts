import type { Project } from "../components/Projects";
import type { SkillCategory } from "../components/Skills";
import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";
import type { SocialLink } from "../layout/footer";
import type { ExperienceItem } from "../components/Experience";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
  {
    id: 2,
    title: "Project 2",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
  {
    id: 3,
    title: "Project 3",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
  {
    id: 4,
    title: "Project 4",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
  {
    id: 5,
    title: "Project 5",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
  {
    id: 6,
    title: "Project 6",
    link: "#",
    description: "A web application built with React and TypeScript.",
  },
];

export const skillData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "Jest", "Figma", "Framer Motion"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Problem-solving",
      "Time management",
      "Adaptability",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: GithubLogoIcon },
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinLogoIcon },
  { name: "Twitter", url: "https://twitter.com", icon: XLogoIcon },
  { name: "Email", url: "mailto:contact@example.com", icon: EnvelopeIcon },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Apple",
    role: "Software Developer",
    duration: "July – December 2016",
    responsibilities: [
      "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
      "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
      "Integrated interactive data analytics features into the platform.",
    ],
  },
  {
    company: "Microsoft",
    role: "Frontend Engineer",
    duration: "Jan – June 2017",
    responsibilities: [
      "Built scalable React components for internal dashboards.",
      "Collaborated with design team to improve accessibility.",
    ],
  },
  {
    company: "Spotify",
    role: "UI Developer",
    duration: "July – Dec 2017",
    responsibilities: [
      "Optimized media streaming interfaces for faster load times.",
      "Implemented A/B testing features for UX improvements.",
    ],
  },
  {
    company: "Stripe",
    role: "Frontend Developer",
    duration: "Jan – Dec 2018",
    responsibilities: [
      "Designed payment integration features for web apps.",
      "Improved UI responsiveness across devices.",
    ],
  },
  {
    company: "Webflow",
    role: "Software Developer",
    duration: "Jan – June 2019",
    responsibilities: [
      "Implemented interactive analytics features.",
      "Enhanced platform performance by 20%.",
    ],
  },
];
