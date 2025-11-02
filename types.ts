export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// FIX: Added Project interface
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

