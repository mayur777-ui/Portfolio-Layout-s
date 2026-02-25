// lib/cms-service.ts
import { SiteContent, Profile, Journey, Achievement, GuestAppearance, GalleryItem, Testimonial, ContactInfo } from '../types/index';
import { heroData, journeyData, achievementsData, testimonialsData, contactData, galleryData } from './index';

// This transforms your existing data to match the CMS types
export async function getSiteContent(): Promise<SiteContent> {
  
  // Transform hero data to Profile
  const profile: Profile = {
    id: '1',
    firstName: heroData.firstName,
    lastName: heroData.lastName,
    title: 'Head of Guest Relations & Events', // You might want to make this dynamic
    subtitle: 'Building communities that matter',
    photo: heroData.photo,
    location: heroData.location,
    availability: 'Available for 2024-2025',
    stats: [
      { 
        id: '1', 
        value: achievementsData.stats[0].value, 
        label: achievementsData.stats[0].label,
        icon: 'Users',
        description: achievementsData.stats[0].description
      },
      { 
        id: '2', 
        value: achievementsData.stats[1].value, 
        label: achievementsData.stats[1].label,
        icon: 'Mic',
        description: achievementsData.stats[1].description
      },
      { 
        id: '3', 
        value: achievementsData.stats[2].value, 
        label: achievementsData.stats[2].label,
        icon: 'Award',
        description: achievementsData.stats[2].description
      },
      { 
        id: '4', 
        value: achievementsData.stats[3].value, 
        label: achievementsData.stats[3].label,
        icon: 'Calendar',
        description: achievementsData.stats[3].description
      },
    ],
    featuredIn: ['IEEE', 'TEDx', 'NEP', 'Times of India'],
    socialLinks: contactData.socials.map((social, index) => ({
      platform: social.platform.toLowerCase() as any,
      url: social.url,
      handle: social.handle,
      followers: social.followers
    })),
    cta: {
      primary: { label: heroData.cta.primary.label, href: heroData.cta.primary.href, icon: heroData.cta.primary.icon },
      secondary: { label: heroData.cta.secondary.label, href: heroData.cta.secondary.href, icon: heroData.cta.secondary.icon }
    }
  };

  // Transform journey data
  const journey: Journey[] = journeyData.items.map((item, index) => ({
    id: item.id,
    year: item.year,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    media: {
      type: item.media.type,
      url: item.media.src,
    },
    metrics: item.metric ? {
      value: item.metric,
      label: item.metricLabel || ''
    } : undefined,
    tags: [item.subtitle.toLowerCase().replace(/\s+/g, '-')],
    featured: true
  }));

  // Transform achievements to include both stats and items
  const achievements: Achievement[] = achievementsData.items.map((item) => ({
    id: item.id,
    title: item.text.split('.')[0], // First sentence as title
    description: item.text,
    category: item.category as any,
    year: item.year || '2023',
    organization: extractOrganization(item.text),
    icon: item.icon,
    featured: true
  }));

  // Create guest appearances from gallery data
  const guestAppearances: GuestAppearance[] = galleryData.categories
    .flatMap(cat => cat.items)
    .filter(item => item.category === 'youth' || item.category === 'institutional')
    .map((item, index) => ({
      id: `guest-${index}`,
      guestName: item.alt.split(' - ')[0] || item.alt,
      guestTitle: item.caption?.split(' - ')[1] || 'Guest',
      organization: item.event || 'LPU',
      eventName: item.caption || 'Event',
      date: item.year || '2023',
      description: `Managed and coordinated ${item.caption} at LPU`,
      category: item.category === 'youth' ? 'industry' : 'academic',
      featured: true
    }));

  // Transform gallery data
  const gallery: GalleryItem[] = galleryData.categories.flatMap(cat => 
    cat.items.map((item, index) => ({
      id: item.id,
      title: item.caption || item.alt,
      description: item.alt,
      image: item.src,
      category: mapCategory(cat.id),
      date: item.year || '2023',
      guest: item.caption ? {
        name: item.caption.split(' - ')[0] || item.caption,
        title: item.caption.split(' - ')[1] || 'Guest'
      } : undefined,
      featured: true
    }))
  );

  // Transform testimonials
  const testimonials: Testimonial[] = testimonialsData.items.map((item) => ({
    id: item.id,
    name: item.name,
    role: item.role,
    company: item.company,
    text: item.text,
    rating: item.rating,
    featured: item.featured || true,
    date: '2023'
  }));

  // Transform contact info
  const contact: ContactInfo = {
    email: contactData.email,
    location: contactData.location,
    responseTime: contactData.responseTime,
    socials: contactData.socials.map(social => ({
      platform: social.platform.toLowerCase() as any,
      url: social.url,
      handle: social.handle,
      followers: social.followers
    })),
    office: {
      address: 'Division of Guest Relations, LPU',
      hours: 'Mon-Fri, 9:00 AM - 6:00 PM'
    }
  };

  return {
    profile,
    journey,
    achievements,
    guestAppearances,
    gallery,
    testimonials,
    contact,
    seo: {
      title: 'Souhardya Bose | Head of Guest Relations, LPU',
      description: 'Managing high-profile guest relations and events at India\'s largest university.',
      keywords: ['guest relations', 'event management', 'LPU', 'speaker']
    }
  };
}

// Helper function to extract organization from text
function extractOrganization(text: string): string {
  const orgMatch = text.match(/(?:at|by|of)\s+([A-Z][A-Za-z\s&]+)/);
  return orgMatch ? orgMatch[1] : 'LPU';
}

// Helper function to map categories
function mapCategory(catId: string): 'events' | 'guests' | 'speaking' | 'behind_scenes' {
  switch(catId) {
    case 'events': return 'events';
    case 'youth': return 'guests';
    case 'institutional': return 'guests';
    case 'community': return 'behind_scenes';
    default: return 'events';
  }
}

// Hook for using CMS data
import { useEffect, useState } from 'react';

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getSiteContent()
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}