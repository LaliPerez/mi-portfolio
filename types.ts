// Fix: Import React types to resolve 'Cannot find namespace React' error.
import type { FC, SVGProps } from 'react';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  logo: FC<SVGProps<SVGSVGElement>>;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
