import {
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Globe,
  Linkedin,
  Mail,
  Send,
  ServerCog,
  Sparkles,
  SquareTerminal,
  Workflow,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "Frontend + Systems", label: "Polished interfaces backed by scalable logic." },
  { value: "AI / ML", label: "Intelligent features built into real product flows." },
  { value: "Startup-Level", label: "Speed, clarity, and engineering maturity in one stack." },
];

export const capabilityPillars = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    text: "Responsive interfaces, smooth interactions, component systems, and clean execution.",
  },
  {
    icon: Workflow,
    title: "Backend Architecture",
    text: "Structured APIs, auth flows, service reliability, and maintainable product logic.",
  },
  {
    icon: BrainCircuit,
    title: "Applied Intelligence",
    text: "AI-powered systems that enhance products instead of just decorating them.",
  },
];

export const aboutCards = [
  {
    icon: Binary,
    title: "System Thinking",
    text: "Every interface choice should support performance, scale, and maintainability.",
  },
  {
    icon: Sparkles,
    title: "Premium UX",
    text: "Minimal design should still feel alive, expressive, and confidently engineered.",
  },
  {
    icon: Bot,
    title: "AI-First Product Mindset",
    text: "Machine learning belongs inside useful workflows, not as a gimmick.",
  },
  {
    icon: CloudCog,
    title: "Delivery Discipline",
    text: "Deployment, infrastructure, and reliability are part of the product experience.",
  },
];

export const skillGroups = [
  {
    icon: Blocks,
    title: "Frontend",
    description: "Crafting high-quality product surfaces with responsive behavior, motion, and reusable UI systems.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "DOM/BOM", "React", "Vue", "TailwindCSS", "Sass/SCSS", "shadcn/ui", "Responsive UI", "REST API integration"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    description: "Designing service layers and APIs that feel stable, scalable, and product-ready.",
    skills: ["Python", "Django", "Django REST Framework", "FastAPI", "JavaScript backend", "REST API", "JWT authentication", "HTTP architecture"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Building clean data foundations for performance, reliability, and future growth.",
    skills: ["PostgreSQL", "MongoDB", "Database architecture"],
  },
  {
    icon: CloudCog,
    title: "DevOps",
    description: "Delivering software with secure infrastructure, deployment clarity, and operational confidence.",
    skills: ["Docker", "Nginx", "HTTPS", "CI/CD", "Linux basics", "Deployment systems"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    description: "Applying intelligent models and data-driven behavior to modern digital products.",
    skills: ["Machine Learning", "Deep Learning", "AI-powered systems", "Intelligent web apps"],
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Using fast modern tooling to collaborate, iterate, and ship with precision.",
    skills: ["Git", "GitHub", "GitLab", "npm", "pnpm", "bun", "yarn", "Vite"],
  },
];

export const projects = [
  {
    title: "EduTC Platform",
    type: "Learning Ecosystem",
    icon: Globe,
    summary:
      "A premium education platform concept combining student flows, mentoring surfaces, role-based dashboards, and AI-guided learning experiences.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    accent: "from-cyan-400/25 via-sky-500/10 to-transparent",
    demoLink: "https://edu-tc.vercel.app/",
    previewVariant: "edutc",
  },
  {
    title: "AI Web App",
    type: "Intelligent Product",
    icon: Bot,
    summary:
      "A production-style AI interface for prompt workflows, semantic outputs, and assistant-driven actions inside a polished web shell.",
    stack: ["React", "Python", "OpenAI API", "TailwindCSS", "Streaming UI"],
    accent: "from-blue-400/20 via-indigo-500/10 to-transparent",
  },
  {
    title: "Fullstack Dashboard",
    type: "Operational Control Layer",
    icon: SquareTerminal,
    summary:
      "A command-style analytics dashboard built for modern teams that need visibility, actionable data, and elegant information architecture.",
    stack: ["React", "JWT", "REST API", "Charts", "Role-based UI"],
    accent: "from-emerald-400/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "DRF / FastAPI Backend",
    type: "API Foundation",
    icon: Workflow,
    summary:
      "A backend architecture focused on clean auth boundaries, structured services, documentation clarity, and production-minded API contracts.",
    stack: ["Django REST", "FastAPI", "JWT", "PostgreSQL", "Nginx"],
    accent: "from-violet-400/20 via-blue-500/10 to-transparent",
  },
];

export const journey = [
  {
    year: "01",
    title: "Frontend foundations",
    description: "Started with structure, visual hierarchy, layout systems, and browser-native interaction thinking.",
    points: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
  {
    year: "02",
    title: "Component engineering",
    description: "Shifted into scalable frontend work with React, TypeScript, reusable patterns, and stronger product design execution.",
    points: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  },
  {
    year: "03",
    title: "Backend and data systems",
    description: "Expanded into APIs, authentication, service architecture, and data structure for fullstack product delivery.",
    points: ["Python", "Django REST", "FastAPI", "PostgreSQL"],
  },
  {
    year: "04",
    title: "AI-powered web products",
    description: "Focused on integrating ML and AI into practical interfaces, workflows, and modern digital systems.",
    points: ["Machine Learning", "Deep Learning", "AI apps", "Automation"],
  },
];

export const contacts = [
  {
    label: "Email",
    value: "sadirovabduloh@gmail.com",
    href: "mailto:sadirovabduloh@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdulloh-sadirov-96274b399",
    href: "https://linkedin.com/in/abdulloh-sadirov-96274b399",
    icon: Linkedin,
  },
  {
    label: "Telegram",
    value: "@sadirovdev",
    href: "https://t.me/sadirovdev",
    icon: Send,
  },
];

export const links = {
  email: "mailto:sadirovabduloh@gmail.com",
  contact: "https://t.me/sadirovdev",
  live: "https://sadirov.dev",
};
