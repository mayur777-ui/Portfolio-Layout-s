// types/index.ts - Updated to match your existing data

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  photo: string;
  location: string;
  availability: string;
  stats: Stat[];
  featuredIn: string[];
  socialLinks: SocialLink[];
  cta: {
    primary: { label: string; href: string; icon: string };
    secondary: { label: string; href: string; icon: string };
  };
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram' | 'youtube' | 'website';
  url: string;
  handle?: string;
  followers?: string;
}

export interface Journey {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  media: {
    type: 'image' | 'youtube';
    url: string;
  };
  metrics?: {
    value: string;
    label: string;
  };
  tags: string[];
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'leadership' | 'recognition' | 'research' | 'mentorship';
  year: string;
  organization: string;
  icon?: string;
  featured: boolean;
}

export interface GuestAppearance {
  id: string;
  guestName: string;
  guestTitle: string;
  organization: string;
  eventName: string;
  date: string;
  description: string;
  photo?: string;
  category: 'industry' | 'academic' | 'celebrity';
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: 'events' | 'guests' | 'behind_scenes';
  date: string;
  guest?: {
    name: string;
    title: string;
  };
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating?: number;
  photo?: string;
  featured: boolean;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  responseTime: string;
  bookingUrl?: string;
  socials: SocialLink[];
  office?: {
    address: string;
    hours: string;
  };
}

export interface SiteContent {
  profile: Profile;
  journey: Journey[];
  achievements: Achievement[];
  guestAppearances: GuestAppearance[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}