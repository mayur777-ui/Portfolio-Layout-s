import heroImg from "../assets/images/heroImg.png";
import Event1 from "../assets/images/Events/Event.jpeg";
import Event2 from "../assets/images/Events/Event2.jpg";
import Event3 from "../assets/images/Events/Event3.jpeg";
import Event4 from "../assets/images/Events/Event4.jpg";
import Event5 from "../assets/images/Events/Event5.jpg";
import youth1 from "../assets/images/youthIcons/youth1.jpg";
import youth2 from "../assets/images/youthIcons/youth2.jpg";
import youth3 from "../assets/images/youthIcons/youth3.jpg";
import youth4 from "../assets/images/youthIcons/youth4.jpg";
import youth5 from "../assets/images/youthIcons/youth5.jpg";
import youth6 from "../assets/images/youthIcons/youth6.jpg";
import institute1 from "../assets/images/Institutional/institute1.jpg";
import institute2 from "../assets/images/Institutional/institute2.jpg";
import institute3 from "../assets/images/Institutional/institute3.jpg";
import institute4 from "../assets/images/Institutional/institute4.jpg";
import institute5 from "../assets/images/Institutional/institute5.jpg";
import community1 from "../assets/images/community/community1.jpg";
import community2 from "../assets/images/community/community2.jpg";
import community3 from "../assets/images/community/community3.jpg";
import community4 from "../assets/images/community/community4.jpg";
import community5 from "../assets/images/community/community5.jpg";
import journey1 from '../assets/images/journey1.jpg';
import journey2 from '../assets/images/journey2.jpg';

export const heroData = {
    firstName: "Souhardya",
    lastName: "BOSE",
    photo: heroImg,
    stat: {
        number: "5000+",
        label: "STUDENTS"
    },
    location: "LPU",
    established: "2021",
    cta: {
        primary: { label: "JOURNEY", href: "#journey", },
    }
};

export const galleryData = {
    title: "Moments",
    categories: [
        {
            id: "events",
            name: "Events",
            items: [
                { id: "e1", src: Event1, alt: "Sukoon - Youthfest", caption: "Sukoon - Youthfest", category: "event", year: "2023", event: "Cultural Festival" },
                { id: "e2", src: Event2, alt: "TechnOcean", caption: "TechnOcean - Tech Fest", category: "event", year: "2023", event: "Technical Summit" },
                { id: "e3", src: Event3, alt: "XPRESSIONS", caption: "XPRESSIONS - Media Fest", category: "event", year: "2022", event: "Media Festival" },
                { id: "e4", src: Event4, alt: "GET PLACED", caption: "GET PLACED - Career Workshop", category: "event", year: "2022", event: "Workshop" },
                { id: "e5", src: Event5, alt: "Chai ka Anubhav", caption: "Chai ka Anubhav with Anubhav Dubey", category: "event", year: "2023", event: "Inspirational Talk" },
                { id: "e6", src: Event1, alt: "Podcast Session", caption: "Podcast with Rahul Maheshwari", category: "event", year: "2023", event: "Podcast" },
                { id: "e7", src: Event2, alt: "Workshop", caption: "Technical Workshop", category: "event", year: "2022", event: "Workshop" },
                { id: "e8", src: Event3, alt: "Seminar", caption: "Leadership Seminar", category: "event", year: "2023", event: "Seminar" },
                { id: "e9", src: Event4, alt: "Hackathon", caption: "Campus Hackathon", category: "event", year: "2022", event: "Hackathon" },
                { id: "e10", src: Event5, alt: "Conference", caption: "Student Conference", category: "event", year: "2023", event: "Conference" },
            ]
        },
        {
            id: "youth",
            name: "Youth Icons",
            items: [
                { id: "y1", src: youth1, alt: "Faisal Malik", caption: "Faisal Malik - Actor", category: "youth", year: "2023", event: "Xpression" },
                { id: "y2", src: youth2, alt: "Sourabh Dubey", caption: "Sourabh Dubey - Speaker", category: "youth", year: "2023", event: "Xpression" },
                { id: "y3", src: youth3, alt: "Nishant Chahar", caption: "Nishant Chahar - SDE Microsoft", category: "youth", year: "2022", event: "Get Placed" },
                { id: "y4", src: youth4, alt: "Subhesh Kumar", caption: "Subhesh Kumar - SDE Amazon", category: "youth", year: "2022", event: "Get Placed" },
                { id: "y5", src: youth5, alt: "Rahul Maheshwari", caption: "Rahul Maheshwari - Ex-Google", category: "youth", year: "2023", event: "Podcast" },
                { id: "y6", src: youth6, alt: "Aman Dhattarwal", caption: "Aman Dhattarwal - Apna College", category: "youth", year: "2023", event: "Session" },
                { id: "y7", src: youth1, alt: "Shashank Mishra", caption: "Shashank Mishra - Data Engineer", category: "youth", year: "2022", event: "Mentorship" },
                { id: "y8", src: youth2, alt: "Anuj Kumar Sharma", caption: "Anuj Kumar Sharma - Ex-Amazon", category: "youth", year: "2023", event: "Session" },
                { id: "y9", src: youth3, alt: "Rocky Bhatia", caption: "Rocky Bhatia - Technical Lead", category: "youth", year: "2023", event: "Workshop" },
            ]
        },
        {
            id: "institutional",
            name: "Institutional Leaders",
            items: [
                { id: "i1", src: institute1, alt: "Dr. Preeti Bajaj", caption: "Dr. Preeti Bajaj - Vice Chancellor", category: "institutional", year: "2023", event: "Convocation" },
                { id: "i2", src: institute2, alt: "Dr. Prateek Agrawal", caption: "Dr. Prateek Agrawal - Head of School", category: "institutional", year: "2023", event: "Academic Council" },
                { id: "i3", src: institute3, alt: "Dr. Lovi Raj Gupta", caption: "Dr. Lovi Raj Gupta - Pro Vice Chancellor", category: "institutional", year: "2022", event: "TechnOcean" },
                { id: "i4", src: institute4, alt: "Madam Rashmi Mittal", caption: "Madam Rashmi Mittal - Pro Chancellor", category: "institutional", year: "2022", event: "Convocation" },
                { id: "i5", src: institute5, alt: "Sami Anand", caption: "Sami Anand - Associate Dean", category: "institutional", year: "2023", event: "Faculty Meet" },
                { id: "i6", src: institute1, alt: "Sorabh Lakhanpal", caption: "Sorabh Lakhanpal - Senior Dean", category: "institutional", year: "2023", event: "Conference" },
            ]
        },
        {
            id: "community",
            name: "Community",
            items: [
                { id: "c1", src: community1, alt: "Student Mentorship", caption: "One-on-One Mentorship", category: "community", year: "2023", event: "Mentorship" },
                { id: "c2", src: community2, alt: "Workshop", caption: "Hands-on Technical Workshop", category: "community", year: "2023", event: "Workshop" },
                { id: "c3", src: community3, alt: "Group Discussion", caption: "Student-Led Discussion Circle", category: "community", year: "2022", event: "Discussion" },
                { id: "c4", src: community4, alt: "Award Ceremony", caption: "Recognizing Excellence", category: "community", year: "2023", event: "Awards" },
                { id: "c5", src: community5, alt: "Team Meeting", caption: "Community Planning", category: "community", year: "2022", event: "Meeting" },
                { id: "c6", src: community1, alt: "Campus Drive", caption: "Student Engagement Campaign", category: "community", year: "2023", event: "Outreach" },
                { id: "c7", src: community2, alt: "Guest Lecture", caption: "Industry Expert Session", category: "community", year: "2023", event: "Lecture" },
                { id: "c8", src: community3, alt: "Cultural Night", caption: "Celebrating Diversity", category: "community", year: "2022", event: "Cultural" },
                { id: "c9", src: community4, alt: "Tech Talk", caption: "Emerging Technologies", category: "community", year: "2023", event: "Tech Talk" },
                { id: "c10", src: community5, alt: "Alumni Meet", caption: "Connecting Generations", category: "community", year: "2023", event: "Alumni" },
                { id: "c11", src: community1, alt: "Orientation", caption: "Welcoming New Students", category: "community", year: "2022", event: "Orientation" },
                { id: "c12", src: community2, alt: "Farewell", caption: "Celebrating Graduates", category: "community", year: "2023", event: "Farewell" },
            ]
        }
    ]
};

export const journeyData = {
    title: "Journey",
    items: [
        {
            id: "1",
            year: "2021",
            title: "Foundations in Community",
            subtitle: "Early beliefs",
            description: "Early exposure to strong communities shaped a belief that people grow best when supported collectively. Started with 5 students in a classroom. No budget. Just belief.",
            media: { type: "image", src: journey1 },
            metric: "5→50",
            metricLabel: "community members"
        },
        {
            id: "2",
            year: "2022",
            title: "Learning Through Practice",
            subtitle: "Events & technology",
            description: "Hands-on work in event management and technical projects built a deep understanding of creating meaningful experiences that resonate and inspire action.",
            media: { type: "image", src: journey2 },
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
            media: { type: "image", src: journey2 },
            metric: "4",
            metricLabel: "active programs"
        }
    ]
};

export const achievementsData = {
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
        },
        {
            id: "a2",
            text: "Elected as Chairperson of IEEE LPU.",
            category: "leadership",
            year: "2022",
        },
        {
            id: "a3",
            text: "Invited by VIT Vellore as a guest speaker for a podcast (Oct 2020).",
            category: "recognition",
            year: "2020",
        },
        {
            id: "a4",
            text: "Mentored and guided teams for Google Solutions Challenge (2020, 2021).",
            category: "mentorship",
            year: "2021",
        },
        {
            id: "a5",
            text: "Completed industrial research training at IIT Kanpur under Dr. Aman (HOD, CSE).",
            category: "research",
            year: "2022",
        },
        {
            id: "a6",
            text: "Hosted and organized multiple workshops, seminars, and podcasts for Google Developer Student Clubs.",
            category: "leadership",
            year: "2023",
        }
    ]
};

export const testimonialsData = {
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

export const techfluenceData = {
    title: "Techfluence",
    subtitle: "The Show",
    description: "Hosting meaningful conversations with tech leaders, innovators, and creators. Shaping the future of tech evangelism.",
    episodes: [
        { id: "tf1", title: "Future of Product Management", guest: "Rahul Maheshwari", platform: "YouTube", duration: "45 min", thumbnail: community1 },
        { id: "tf2", title: "Scaling Tech Communities", guest: "Aman Dhattarwal", platform: "LinkedIn Live", duration: "32 min", thumbnail: community2 },
        { id: "tf3", title: "The Startup Mindset", guest: "Jaideep Prasad", platform: "YouTube", duration: "50 min", thumbnail: community3 }
    ]
};

export const productIdeologyData = {
    title: "Product Ideology",
    pillars: [
        { id: "p1", title: "User Centricity", description: "Deeply understanding student pain points to build educational products that actually matter.", icon: "Users" },
        { id: "p2", title: "Scalable Systems", description: "Designing architectures that support millions of concurrent users without compromising depth.", icon: "Layers" },
        { id: "p3", title: "Agile Growth", description: "Rapid iteration cycles from classroom feedback to global product updates.", icon: "Zap" }
    ],
    workflow: [
        { step: "01", name: "Insight", detail: "Gathering raw feedback from millions of students." },
        { step: "02", name: "Strategy", detail: "Mapping product roadmaps to educational outcomes." },
        { step: "03", name: "Delivery", detail: "Consulting on high-impact tech deployments." }
    ]
};

export const contactData = {
    email: "souhardya.bose@example.com",
    location: "Punjab, India",
    responseTime: "< 24 hours",
    socials: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/souhardya-bose", handle: "souhardya-bose", followers: "15k+" },
        { platform: "Twitter", url: "https://twitter.com/souhardya_bose", handle: "@souhardya_bose", followers: "8.2k" },
        { platform: "Instagram", url: "https://instagram.com/souhardya_bose", handle: "@souhardya_bose", followers: "12.7k" },
        { platform: "YouTube", url: "https://youtube.com/@souhardya_bose", handle: "@souhardya_bose", followers: "5.3k" }
    ]
};

export function getProfile() {
    return {
        ...heroData,
        stats: achievementsData.stats,
        socialLinks: contactData.socials,
    };
}

export function getGallery() {
    return galleryData.categories.flatMap(cat =>
        cat.items.map((item) => ({
            ...item,
            image: item.src,
            category: cat.name,
            title: item.caption || item.alt,
        }))
    );
}

export function getJourney() { return journeyData.items; }
export function getAchievements() { return achievementsData.items; }
export function getTestimonials() { return testimonialsData.items; }
export function getContact() { return contactData; }
export function getTechfluence() { return techfluenceData; }
export function getProductIdeology() { return productIdeologyData; }
