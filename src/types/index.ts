/**
 * Core TypeScript interfaces for Tech Professional Portfolio
 */

export type ProjectCategory = 'web-app' | 'mobile' | 'saas' | 'consulting' | 'open-source';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  technologies?: string[];
  results?: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProfessionalInfo {
  name: string;
  title: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  expertise: string[];
  skills: string[];
  experience: {
    years: number;
    projects: number;
    clients: number;
  };
  achievements: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  consultingRate?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  profileImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'consulting' | 'contract' | 'fulltime' | 'other';
  budget?: string;
  message: string;
  timestamp: Date;
}
