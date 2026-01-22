export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  contributions: string[];
  liveLink: string;
  githubLink: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
}