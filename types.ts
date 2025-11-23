export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
  timeline: string;
  features: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Website' | 'App' | 'Portal' | 'E-commerce';
  image: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactFormData {
  fullName: string;
  businessName?: string;
  email: string;
  phone?: string;
  budgetRange: string;
  service: string;
  message: string;
  consent: boolean;
  honeypot?: string; // For spam protection
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}