// app/fonts.ts - Premium font stack with available fonts
import { 
  DM_Serif_Display, 
  Inter, 
  Plus_Jakarta_Sans,
  Outfit,
  Space_Grotesk,
  Calistoga,
  Syne
} from 'next/font/google';

export const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
});

export const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Premium sans-serif - very modern and clean
export const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

// Premium geometric sans - great for headlines
export const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Premium display font - techy but elegant
export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
});

// Premium serif alternative
export const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-calistoga',
});

// Premium display font - artistic
export const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});