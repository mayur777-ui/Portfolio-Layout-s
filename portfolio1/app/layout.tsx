// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/component/layout/Navbar";
import { 
  dmSerifDisplay, 
  inter, 
  plusJakarta, 
  outfit, 
  spaceGrotesk,
  calistoga,
  syne 
} from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Souhardya Bose | Speaker & Community Architect",
  description: "Building communities that matter. Speaker, mentor, and event organizer inspiring thousands.",
  keywords: "speaker, community builder, event organizer, mentor, public speaker",
  openGraph: {
    title: "Souhardya Bose | Speaker & Community Architect",
    description: "Building communities that matter. Speaker, mentor, and event organizer inspiring thousands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`
        ${dmSerifDisplay.variable} 
        ${inter.variable} 
        ${plusJakarta.variable}
        ${outfit.variable}
        ${spaceGrotesk.variable}
        ${calistoga.variable}
        ${syne.variable}
      `}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}