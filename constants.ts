import type { Project, SkillCategory, Certification } from './types';
import { CredlyLogo, AWSIcon, GoogleCloudIcon, KubernetesIcon } from './components/icons/BrandIcons';

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROFILE = {
  name: "Laura M Pérez Bosio",
  title: "Cloud Engineer, Gen AI Leader & Full-Stack Developer",
  about: "I’m Laura Pérez Bosio, a tech-driven professional passionate about leveraging Cloud, AI, and Digital Transformation to drive innovation and make organizations more efficient, agile, and human-centered.

My background in architecture and procurement taught me how systems connect — people, processes, and technology. That systems thinking became the foundation for my journey into cloud computing and intelligent automation, where I now focus on transforming ideas into scalable, data-driven solutions.

I’m proactive, creative, and endlessly curious, with a hands-on mindset that thrives on learning, problem-solving, and delivering real impact through technology..",
  location: "Ciudad de Buenos Aires, Argentina"
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [{ name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'Python' }, { name: 'Java' }, { name: 'SQL' }],
  },
  {
    title: 'Frontend',
    skills: [{ name: 'React' }, { name: 'Tailwind CSS' }, { name: 'Vite' }, { name: 'Redux' }],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'GraphQL' }],
  },
  {
    title: 'Cloud & DevOps',
    skills: [{ name: 'AWS' }, { name: 'Google Cloud' }, { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Terraform' }, { name: 'CI/CD' }],
  },
  {
    title: 'Databases',
    skills: [{ name: 'MySQL' }, { name: 'DynamoDB' }],
  },
  {
    title: 'Architecture',
    skills: [{ name: 'Microservices' }, { name: 'Serverless' }, { name: 'Event-Driven' }, { name: 'Domain-Driven Design' }],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'AWS re/Start Graduate',
    issuer: 'Amazon Web Services',
    logo: AWSIcon,
    url: 'https://www.credly.com/badges/1c0e100a-3abb-47c5-a797-cad06020243e/public_url',
  },
  {
    title: 'Google Cloud Certified - Associate Cloud Engineer',
    issuer: 'Google Cloud',
    logo: GoogleCloudIcon,
    url: 'https://www.credly.com/earner/earned/badge/f437e247-557b-4f4d-a513-a08b8014ed37',
  },
  {
    title: 'Generative AI Leader Certification',
    issuer: 'Google Cloud',
    logo: GoogleCloudIcon,
    url: 'https://www.credly.com/earner/earned/badge/5cbac17f-c778-492e-933b-09b62540ac52',
  },
  {
    title: 'Data Fundamentals',
    issuer: 'IBM',
    logo: IBMIcon,
    url: 'https://www.credly.com/earner/earned/badge/434cc55b-375f-4350-9377-444dc797958d',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    logo: IBMIcon,
    url: 'https://www.credly.com/earner/earned/badge/da960fde-97ee-4aa1-a084-36251125f715',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'QuantumLeap AI - Scalable AI Analytics Platform',
    description: 'A cloud-native platform designed to process and analyze massive datasets in real-time, providing actionable insights through a customizable dashboard. Architected for high availability and fault tolerance.',
    tags: ['AWS', 'Kubernetes', 'Python', 'React', 'PostgreSQL', 'Microservices'],
    imageUrl: 'https://picsum.photos/seed/quantum/1024/768',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'ConnectSphere - Real-time Social Engagement App',
    description: 'A full-stack social media application featuring real-time chat, content feeds, and user engagement analytics. Built with a scalable backend and a highly responsive frontend for a seamless user experience.',
    tags: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'WebSockets', 'Google Cloud'],
    imageUrl: 'https://picsum.photos/seed/connect/1024/768',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'NovaPay - Secure FinTech Payment Gateway',
    description: 'A secure, PCI-DSS compliant payment gateway API for e-commerce platforms. Implemented advanced encryption, fraud detection, and robust transaction management to ensure reliability and trust.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API', 'Security'],
    imageUrl: 'https://picsum.photos/seed/nova/1024/768',
    repoUrl: '#',
  },
];