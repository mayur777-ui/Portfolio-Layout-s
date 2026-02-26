// app/data/index.ts
import { HeroData } from "../types/hero";
import { GalleryData } from "../types/gallery";
import { JourneyData } from "../types/journey";
import { AchievementsData } from "../types/achievements";
import { TestimonialsData } from "../types/testimonials";
import { ContactData } from "../types/contact";

// Import images
import heroImg from "@/images/heroImg.png";
import Event1 from "@/images/Events/Event.jpeg";
import Event2 from "@/images/Events/Event2.jpg";
import Event3 from "@/images/Events/Event3.jpeg";
import Event4 from "@/images/Events/Event4.jpg";
import Event5 from "@/images/Events/Event5.jpg";
import youth1 from "@/images/youthIcons/youth1.jpg";
import youth2 from "@/images/youthIcons/youth1.jpg";
import youth3 from "@/images/youthIcons/youth1.jpg";
import youth4 from "@/images/youthIcons/youth1.jpg";
import youth5 from "@/images/youthIcons/youth1.jpg";
import youth6 from "@/images/youthIcons/youth6.jpg";
import institute1 from "@/images/Institutional/institute1.jpg";
import institute2 from "@/images/Institutional/institute2.jpg";
import institute3 from "@/images/Institutional/institute3.jpg";
import institute4 from "@/images/Institutional/institute4.jpg";
import institute5 from "@/images/Institutional/institute5.jpg";
import community1 from "@/images/community/community1.jpg";
import community2 from "@/images/community/community2.jpg";
import community3 from "@/images/community/community3.jpg";
import community4 from "@/images/community/community4.jpg";
import community5 from "@/images/community/community5.jpg";
import journey1 from '@/images/journey1.jpg';
import journey2 from '@/images/journey2.jpg';

// lib/data/index.ts - Update hero section
export const heroData: HeroData = {
  firstName: "Souhardya",
  lastName: "BOSE",
  photo: heroImg.src, // Using existing image
  stat: {
    number: "5000+",
    label: "STUDENTS"
  },
  location: "LPU",
  established: "2021",
  cta: {
    primary: { label: "JOURNEY", href: "#journey", icon: "▼" },
    secondary: { label: "CONNECT", href: "#contact", icon: "✺" }
  }
};

export const galleryData: GalleryData = {
  title: "Moments",
  categories: [
    {
      id: "events",
      name: "Events",
      items: [
        { id: "e1", src: Event1.src, alt: "Sukoon - Youthfest", caption: "Sukoon - Youthfest", category: "event", year: "2023", event: "Cultural Festival" },
        { id: "e2", src: Event2.src, alt: "TechnOcean", caption: "TechnOcean - Tech Fest", category: "event", year: "2023", event: "Technical Summit" },
        { id: "e3", src: Event3.src, alt: "XPRESSIONS", caption: "XPRESSIONS - Media Fest", category: "event", year: "2022", event: "Media Festival" },
        { id: "e4", src: Event4.src, alt: "GET PLACED", caption: "GET PLACED - Career Workshop", category: "event", year: "2022", event: "Workshop" },
        { id: "e5", src: Event5.src, alt: "Chai ka Anubhav", caption: "Chai ka Anubhav with Anubhav Dubey", category: "event", year: "2023", event: "Inspirational Talk" },
        { id: "e6", src: Event1.src, alt: "Podcast Session", caption: "Podcast with Rahul Maheshwari", category: "event", year: "2023", event: "Podcast" },
        { id: "e7", src: Event2.src, alt: "Workshop", caption: "Technical Workshop", category: "event", year: "2022", event: "Workshop" },
        { id: "e8", src: Event3.src, alt: "Seminar", caption: "Leadership Seminar", category: "event", year: "2023", event: "Seminar" },
        { id: "e9", src: Event4.src, alt: "Hackathon", caption: "Campus Hackathon", category: "event", year: "2022", event: "Hackathon" },
        { id: "e10", src: Event5.src, alt: "Conference", caption: "Student Conference", category: "event", year: "2023", event: "Conference" },
      ]
    },
    {
      id: "youth",
      name: "Youth Icons",
      items: [
        { id: "y1", src: youth1.src, alt: "Faisal Malik", caption: "Faisal Malik - Actor", category: "youth", year: "2023", event: "Xpression" },
        { id: "y2", src: youth2.src, alt: "Sourabh Dubey", caption: "Sourabh Dubey - Speaker", category: "youth", year: "2023", event: "Xpression" },
        { id: "y3", src: youth3.src, alt: "Nishant Chahar", caption: "Nishant Chahar - SDE Microsoft", category: "youth", year: "2022", event: "Get Placed" },
        { id: "y4", src: youth4.src, alt: "Subhesh Kumar", caption: "Subhesh Kumar - SDE Amazon", category: "youth", year: "2022", event: "Get Placed" },
        { id: "y5", src: youth5.src, alt: "Rahul Maheshwari", caption: "Rahul Maheshwari - Ex-Google", category: "youth", year: "2023", event: "Podcast" },
        { id: "y6", src: youth6.src, alt: "Aman Dhattarwal", caption: "Aman Dhattarwal - Apna College", category: "youth", year: "2023", event: "Session" },
        { id: "y7", src: youth1.src, alt: "Shashank Mishra", caption: "Shashank Mishra - Data Engineer", category: "youth", year: "2022", event: "Mentorship" },
        { id: "y8", src: youth2.src, alt: "Anuj Kumar Sharma", caption: "Anuj Kumar Sharma - Ex-Amazon", category: "youth", year: "2023", event: "Session" },
        { id: "y9", src: youth3.src, alt: "Rocky Bhatia", caption: "Rocky Bhatia - Technical Lead", category: "youth", year: "2023", event: "Workshop" },
      ]
    },
    {
      id: "institutional",
      name: "Institutional Leaders",
      items: [
        { id: "i1", src: institute1.src, alt: "Dr. Preeti Bajaj", caption: "Dr. Preeti Bajaj - Vice Chancellor", category: "institutional", year: "2023", event: "Convocation" },
        { id: "i2", src: institute2.src, alt: "Dr. Prateek Agrawal", caption: "Dr. Prateek Agrawal - Head of School", category: "institutional", year: "2023", event: "Academic Council" },
        { id: "i3", src: institute3.src, alt: "Dr. Lovi Raj Gupta", caption: "Dr. Lovi Raj Gupta - Pro Vice Chancellor", category: "institutional", year: "2022", event: "TechnOcean" },
        { id: "i4", src: institute4.src, alt: "Madam Rashmi Mittal", caption: "Madam Rashmi Mittal - Pro Chancellor", category: "institutional", year: "2022", event: "Convocation" },
        { id: "i5", src: institute5.src, alt: "Sami Anand", caption: "Sami Anand - Associate Dean", category: "institutional", year: "2023", event: "Faculty Meet" },
        { id: "i6", src: institute1.src, alt: "Sorabh Lakhanpal", caption: "Sorabh Lakhanpal - Senior Dean", category: "institutional", year: "2023", event: "Conference" },
      ]
    },
    {
      id: "community",
      name: "Community",
      items: [
        { id: "c1", src: community1.src, alt: "Student Mentorship", caption: "One-on-One Mentorship", category: "community", year: "2023", event: "Mentorship" },
        { id: "c2", src: community2.src, alt: "Workshop", caption: "Hands-on Technical Workshop", category: "community", year: "2023", event: "Workshop" },
        { id: "c3", src: community3.src, alt: "Group Discussion", caption: "Student-Led Discussion Circle", category: "community", year: "2022", event: "Discussion" },
        { id: "c4", src: community4.src, alt: "Award Ceremony", caption: "Recognizing Excellence", category: "community", year: "2023", event: "Awards" },
        { id: "c5", src: community5.src, alt: "Team Meeting", caption: "Community Planning", category: "community", year: "2022", event: "Meeting" },
        { id: "c6", src: community1.src, alt: "Campus Drive", caption: "Student Engagement Campaign", category: "community", year: "2023", event: "Outreach" },
        { id: "c7", src: community2.src, alt: "Guest Lecture", caption: "Industry Expert Session", category: "community", year: "2023", event: "Lecture" },
        { id: "c8", src: community3.src, alt: "Cultural Night", caption: "Celebrating Diversity", category: "community", year: "2022", event: "Cultural" },
        { id: "c9", src: community4.src, alt: "Tech Talk", caption: "Emerging Technologies", category: "community", year: "2023", event: "Tech Talk" },
        { id: "c10", src: community5.src, alt: "Alumni Meet", caption: "Connecting Generations", category: "community", year: "2023", event: "Alumni" },
        { id: "c11", src: community1.src, alt: "Orientation", caption: "Welcoming New Students", category: "community", year: "2022", event: "Orientation" },
        { id: "c12", src: community2.src, alt: "Farewell", caption: "Celebrating Graduates", category: "community", year: "2023", event: "Farewell" },
      ]
    }
  ]
};

export const journeyData: JourneyData = {
  title: "Journey",
  items: [
    {
      id: "1",
      year: "2021",
      title: "Foundations in Community",
      subtitle: "Early beliefs",
      description: "Early exposure to strong communities shaped a belief that people grow best when supported collectively. Started with 5 students in a classroom. No budget. Just belief.",
      media: { type: "image", src: journey1.src },
      metric: "5→50",
      metricLabel: "community members"
    },
    {
      id: "2",
      year: "2022",
      title: "Learning Through Practice",
      subtitle: "Events & technology",
      description: "Hands-on work in event management and technical projects built a deep understanding of creating meaningful experiences that resonate and inspire action.",
      media: { type: "image", src: journey2.src },
      metric: "12",
      metricLabel: "events organized"
    },
    {
      id: "3",
      year: "2023",
      title: "Community in Action",
      subtitle: "Real-world moments",
      description: "Working directly with students and partners demonstrated the impact of well-designed programs. Quiet students found their voice. Introverts became leaders.",
      media: { type: "youtube", src: "https://www.youtube.com/embed/Iqp9DeqrqYI" },
      metric: "2000+",
      metricLabel: "attendees"
    },
    {
      id: "4",
      year: "2024",
      title: "Long-Term Purpose",
      subtitle: "Sustainable growth",
      description: "Focused on building systems and programs that continue to support communities over time. Passed down, improved, reimagined by each new cohort.",
      media: { type: "image", src: journey2.src },
      metric: "4",
      metricLabel: "active programs"
    }
  ]
};

export const achievementsData: AchievementsData = {
  title: "Achievements",
  stats: [
    {
      value: "5000+",
      label: "Students Mentored",
      description: "Positively impacted the lives of students through mentorship, guiding them towards success."
    },
    {
      value: "150+",
      label: "Seminars Delivered",
      description: "A seasoned speaker who has delivered impactful seminars with engaging, thought-provoking ideas."
    },
    {
      value: "10+",
      label: "TEDx Talks",
      description: "Featured as a speaker at multiple TEDx events, presenting complex ideas in an accessible manner."
    },
    {
      value: "15+",
      label: "Podcast Guest",
      description: "Shared expertise on leading podcasts through meaningful conversations and insights."
    }
  ],
  items: [
    {
      id: "a1",
      text: "Appointed as NEP SAARTHI by Govt of India (UGC, Ministry of Education); selected among 40,000 students to represent India's largest university to the UGC Chairman.",
      category: "recognition",
      year: "2023",
      icon: "GraduationCap"
    },
    {
      id: "a2",
      text: "Elected as Chairperson of IEEE LPU.",
      category: "leadership",
      year: "2022",
      icon: "Award"
    },
    {
      id: "a3",
      text: "Invited by VIT Vellore as a guest speaker for a podcast (Oct 2020).",
      category: "recognition",
      year: "2020",
      icon: "Mic"
    },
    {
      id: "a4",
      text: "Mentored and guided teams for Google Solutions Challenge (2020, 2021).",
      category: "mentorship",
      year: "2021",
      icon: "Users"
    },
    {
      id: "a5",
      text: "Completed industrial research training at IIT Kanpur under Dr. Aman (HOD, CSE).",
      category: "research",
      year: "2022",
      icon: "Sparkles"
    },
    {
      id: "a6",
      text: "Hosted and organized multiple workshops, seminars, and podcasts for Google Developer Student Clubs.",
      category: "leadership",
      year: "2023",
      icon: "Calendar"
    }
  ]
};

export const testimonialsData: TestimonialsData = {
  title: "Testimonials",
  items: [
    {
      id: "1",
      name: "Shashank Mishra",
      role: "Data Engineer - III",
      company: "Expedia",
      text: "I had a great experience working with Souhardya, he is very passionate and innovative with community building skills. His presence always made me comfortable in large scale events. Keep it up Souhardya!",
      rating: 5,
      featured: true
    },
    {
      id: "2",
      name: "Jaideep Prasad",
      role: "Founder",
      company: "Mentro",
      text: "He is a very dedicated team player with skills to match with it. Souhardya will be a great fit to any organization and help in its growth. Wish him all the best!",
      rating: 5,
      featured: true
    },
    {
      id: "3",
      name: "Abhishek Mitra",
      role: "CEO & Managing Director",
      company: "Indian Cyber Security Solutions",
      text: "Out of the box thinker and a team player to have in the team. Young chap like him who is matured and professional which is really good to see. Wish him a very bright future ahead. All the best.",
      rating: 5,
      featured: true
    }
  ]
};

export const contactData: ContactData = {
  email: "souhardya.bose@example.com",
  location: "Punjab, India",
  responseTime: "< 24 hours",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/souhardya-bose", icon: "Linkedin", handle: "souhardya-bose", followers: "15k+" },
    { platform: "Twitter", url: "https://twitter.com/souhardya_bose", icon: "Twitter", handle: "@souhardya_bose", followers: "8.2k" },
    { platform: "Instagram", url: "https://instagram.com/souhardya_bose", icon: "Instagram", handle: "@souhardya_bose", followers: "12.7k" },
    { platform: "YouTube", url: "https://youtube.com/@souhardya_bose", icon: "Youtube", handle: "@souhardya_bose", followers: "5.3k" }
  ]
};