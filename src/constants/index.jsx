import { Lock, Shield, Zap, Users, TrendingUp, Globe } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Browse Events", href: "#browse" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Web3 Features", href: "#features" },
  { label: "Support", href: "#" },
];

export const categories = [
  { id: "movies", name: "Movies", icon: "🎬" },
  { id: "concerts", name: "Concerts", icon: "🎵" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "theater", name: "Theater", icon: "🎭" },
  { id: "events", name: "Events", icon: "🎉" },
];

export const events = {
  movies: [
    {
      id: 1,
      title: "Dune: Part Two",
      image: "https://images.unsplash.com/photo-1533613220915-6f8fa5a001be?w=400&h=500&fit=crop",
      venue: "PVR Cinemas, Mumbai",
      date: "2025-02-01",
      time: "19:00",
      price: 450,
      rating: 4.8,
      category: "movies",
      description: "Epic sci-fi masterpiece",
    },
    {
      id: 2,
      title: "The Brutalist",
      image: "https://images.unsplash.com/photo-1595432707802-36b80a50b939?w=400&h=500&fit=crop",
      venue: "IMAX Delhi",
      date: "2025-02-02",
      time: "14:00",
      price: 550,
      rating: 4.9,
      category: "movies",
      description: "Visionary filmmaking",
    },
    {
      id: 3,
      title: "Avengers: New Era",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=500&fit=crop",
      venue: "Cinepolis Bangalore",
      date: "2025-02-05",
      time: "20:30",
      price: 400,
      rating: 4.6,
      category: "movies",
      description: "Action-packed adventure",
    },
    {
      id: 4,
      title: "Oppenheimer",
      image: "https://images.unsplash.com/photo-1570993492881-4cb66faf7246?w=400&h=500&fit=crop",
      venue: "PVR Imax Pune",
      date: "2025-02-08",
      time: "18:00",
      price: 500,
      rating: 4.9,
      category: "movies",
      description: "Historical drama",
    },
  ],
  concerts: [
    {
      id: 5,
      title: "The Weeknd Live",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
      venue: "Arun Jaitley Stadium, Delhi",
      date: "2025-02-15",
      time: "19:00",
      price: 5000,
      rating: 4.9,
      category: "concerts",
      description: "Live performance experience",
    },
    {
      id: 6,
      title: "Coldplay World Tour",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=500&fit=crop",
      venue: "Mumbai Expo Centre",
      date: "2025-02-20",
      time: "18:30",
      price: 8000,
      rating: 4.8,
      category: "concerts",
      description: "International music festival",
    },
    {
      id: 7,
      title: "Bollywood Night",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop",
      venue: "Ramoji Film City, Hyderabad",
      date: "2025-02-25",
      time: "19:30",
      price: 2500,
      rating: 4.7,
      category: "concerts",
      description: "Bollywood stars live",
    },
    {
      id: 8,
      title: "EDM Festival 2025",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=500&fit=crop",
      venue: "Goa Convention Centre",
      date: "2025-03-01",
      time: "22:00",
      price: 3500,
      rating: 4.6,
      category: "concerts",
      description: "Electronic dance music",
    },
  ],
  sports: [
    {
      id: 9,
      title: "IPL 2025 - CSK vs MI",
      image: "https://images.unsplash.com/photo-1517891620221-23373f953055?w=400&h=500&fit=crop",
      venue: "Chennai Super King Stadium",
      date: "2025-03-20",
      time: "19:30",
      price: 1200,
      rating: 4.8,
      category: "sports",
      description: "Cricket blockbuster match",
    },
    {
      id: 10,
      title: "India vs Pakistan Cricket",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=500&fit=crop",
      venue: "Narendra Modi Stadium, Ahmedabad",
      date: "2025-03-15",
      time: "14:00",
      price: 2000,
      rating: 4.9,
      category: "sports",
      description: "Historic cricket rivalry",
    },
    {
      id: 11,
      title: "NBA Finals Watch Party",
      image: "https://images.unsplash.com/photo-1504624049728-5249d7ad135b?w=400&h=500&fit=crop",
      venue: "Phoenix Sports Lounge, Mumbai",
      date: "2025-03-25",
      time: "09:00",
      price: 500,
      rating: 4.5,
      category: "sports",
      description: "Basketball championship",
    },
    {
      id: 12,
      title: "Grand Slam Tennis",
      image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=500&fit=crop",
      venue: "Tennis Stadium, Delhi",
      date: "2025-03-28",
      time: "15:00",
      price: 1500,
      rating: 4.7,
      category: "sports",
      description: "International tennis",
    },
  ],
  theater: [
    {
      id: 13,
      title: "Hamlet - Shakespeare Live",
      image: "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?w=400&h=500&fit=crop",
      venue: "National Theatre, Delhi",
      date: "2025-02-10",
      time: "18:00",
      price: 800,
      rating: 4.7,
      category: "theater",
      description: "Classic theatrical masterpiece",
    },
    {
      id: 14,
      title: "Contemporary Dance Show",
      image: "https://images.unsplash.com/photo-1547394003-999862964e98?w=400&h=500&fit=crop",
      venue: "Kamani Auditorium, Delhi",
      date: "2025-02-12",
      time: "19:00",
      price: 600,
      rating: 4.6,
      category: "theater",
      description: "Modern dance experience",
    },
    {
      id: 15,
      title: "Stand-up Comedy Night",
      image: "https://images.unsplash.com/photo-1501281668051-e79e23a0e9dc?w=400&h=500&fit=crop",
      venue: "Comedy Store, Bangalore",
      date: "2025-02-14",
      time: "20:00",
      price: 700,
      rating: 4.8,
      category: "theater",
      description: "Laugh out loud comedy",
    },
    {
      id: 16,
      title: "Musical: The Phantom",
      image: "https://images.unsplash.com/photo-1548372328-c9fa89d128fa?w=400&h=500&fit=crop",
      venue: "Ravindra Sarovar, Pune",
      date: "2025-02-18",
      time: "18:30",
      price: 1000,
      rating: 4.9,
      category: "theater",
      description: "Iconic musical production",
    },
  ],
  events: [
    {
      id: 17,
      title: "Tech Summit 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
      venue: "HICC, Hyderabad",
      date: "2025-03-10",
      time: "09:00",
      price: 3000,
      rating: 4.7,
      category: "events",
      description: "Innovation conference",
    },
    {
      id: 18,
      title: "Blockchain Expo",
      image: "https://images.unsplash.com/photo-1605632215897-90d5e1c3e3f9?w=400&h=500&fit=crop",
      venue: "Bangalore Tech Park",
      date: "2025-03-12",
      time: "10:00",
      price: 2500,
      rating: 4.8,
      category: "events",
      description: "Web3 & Crypto showcase",
    },
    {
      id: 19,
      title: "Food Festival 2025",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561282?w=400&h=500&fit=crop",
      venue: "Jawaharlal Nehru Park, Mumbai",
      date: "2025-02-22",
      time: "11:00",
      price: 500,
      rating: 4.6,
      category: "events",
      description: "Culinary experience",
    },
    {
      id: 20,
      title: "Art Exhibition 2025",
      image: "https://images.unsplash.com/photo-1578868519967-febc7d440c80?w=400&h=500&fit=crop",
      venue: "National Art Gallery, Delhi",
      date: "2025-02-28",
      time: "10:00",
      price: 400,
      rating: 4.5,
      category: "events",
      description: "Contemporary art showcase",
    },
  ],
};

export const fanFundedEvents = [
  {
    id: 101,
    title: "Indie Artist Summer Tour",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop",
    venue: "Multiple Cities",
    date: "2025-04-15",
    time: "18:00",
    raisedAmount: 450000,
    targetAmount: 750000,
    contributors: 1240,
    type: "fanfund",
    category: "fanfund",
    description: "Help your favorite indie artist go on their first national tour. Every contribution supports the production, travel, and equipment.",
  },
  {
    id: 102,
    title: "Local Band Album Production",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=500&fit=crop",
    venue: "Studio Recording",
    date: "2025-03-20",
    time: "10:00",
    raisedAmount: 280000,
    targetAmount: 500000,
    contributors: 856,
    type: "fanfund",
    category: "fanfund",
    description: "Support the creation of an original album. Backers get exclusive content, early access, and vinyl copies.",
  },
  {
    id: 103,
    title: "Emerging Musician Talent Show",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
    venue: "Amphitheater, Bangalore",
    date: "2025-05-01",
    time: "19:30",
    raisedAmount: 620000,
    targetAmount: 900000,
    contributors: 2150,
    type: "fanfund",
    category: "fanfund",
    description: "Platform for emerging talent to showcase their skills. Help provide sound system, stage setup, and artist support.",
  },
  {
    id: 104,
    title: "Folk Music Documentary",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=500&fit=crop",
    venue: "Online Streaming",
    date: "2025-06-10",
    time: "20:00",
    raisedAmount: 185000,
    targetAmount: 400000,
    contributors: 432,
    type: "fanfund",
    category: "fanfund",
    description: "A documentary celebrating India's rich folk music heritage. Fund post-production, distribution, and artist compensation.",
  },
];

export const testimonials = [
  {
    user: "Raj Patel",
    company: "Event Enthusiast",
    image: user1,
    text: "Got my NFT ticket in seconds! No more worries about ticket counterfeits. The blockchain verification is brilliant.",
  },
  {
    user: "Priya Singh",
    company: "Concert Lover",
    image: user2,
    text: "Love that I can sell my ticket safely on the blockchain. No black market resale, just transparent and fair transactions.",
  },
  {
    user: "Arun Kumar",
    company: "Sports Fan",
    image: user3,
    text: "The instant crypto payment was seamless! No middlemen, just direct payments to organizers. Truly decentralized!",
  },
  {
    user: "Neha Sharma",
    company: "Movie Enthusiast",
    image: user4,
    text: "Being verified without sharing personal data is amazing. My crypto identity proves I'm eligible without privacy invasion.",
  },
  {
    user: "Vikram Das",
    company: "Theater Aficionado",
    image: user5,
    text: "The immutable records on blockchain give me confidence. Every ticket transaction is transparent and permanent.",
  },
  {
    user: "Anjali Gupta",
    company: "Event Organizer",
    image: user6,
    text: "Smart contract royalties are revolutionary! I get paid instantly and can set automatic revenue sharing. Game-changing!",
  },
];

export const features = [
  {
    icon: <Lock />,
    text: "Zero Black Market Resale",
    description:
      "NFT-based tickets prevent scalping with built-in transfer restrictions and transparent resale on blockchain.",
  },
  {
    icon: <Shield />,
    text: "Transparent & Immutable Records",
    description:
      "Every ticket transaction is recorded permanently on the blockchain, ensuring full transparency and verification.",
  },
  {
    icon: <Users />,
    text: "True Ownership & Transferability",
    description:
      "Own your tickets as digital assets on the blockchain. Transfer, gift, or sell with complete control and transparency.",
  },
  {
    icon: <Zap />,
    text: "Verified Identity Without Privacy Loss",
    description:
      "Crypto identity verification ensures eligibility without sharing personal data. Privacy-preserving authentication.",
  },
  {
    icon: <TrendingUp />,
    text: "Instant Royalties for Organizers",
    description:
      "Smart contracts enable automatic revenue sharing and instant payouts. Organizers get paid directly without intermediaries.",
  },
  {
    icon: <Globe />,
    text: "Lightning-Fast Borderless Payments",
    description:
      "Pay with cryptocurrency for instant, global transactions. No currency conversion delays or geographical restrictions.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
