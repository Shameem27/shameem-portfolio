import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "S Shameem Mohamed",
  initials: "S",
  url: "https://shameem.vercel.app", // Replace with your custom domain later
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu",
  description:
    "Final-year Computer Science student | Full Stack Developer | Problem Solver",
  summary:
    "I am a final-year Computer Science Engineering student at Chennai Institute of Technology with hands-on experience in building full-stack applications, solving 750+ LeetCode problems, and leading technical communities. I’ve completed multiple internships, built production-ready projects, and earned certifications from AWS, IBM, Cisco, and more.",
  avatarUrl: "/me.png",

  skills: [
    "Java", "Python", "C++", "JavaScript", "SQL",
    "React.js", "Node.js", "Flask", "Tailwind CSS",
    "PostgreSQL", "MySQL", "Docker", "Kubernetes",
    "Firebase", "Git", "Power BI", "Excel", "Unix Shell"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "shameemmohamed111s@gmail.com",
    tel: "+91 8778183065",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shameem27",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shameem-mohamed-s-681276236/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Shameem_Mohamed_S/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shameemmohamed111s@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KKR Robotics and Technology",
      title: "Web Development Intern",
      location: "Chennai",
      start: "May 2024",
      end: "June 2024",
      logoUrl: "/kkr.png",
      href: "#",
      badges: ["Internship"],
      description:
        "Built ERP applications using React.js and Node.js to enhance business process efficiency by 15%. Developed a Retail Store Management System and collaborated in Agile sprints with functional database integrations.",
    },
    {
      company: "DLK Technologies Pvt Ltd",
      title: "Java Developer Intern",
      location: "Chennai",
      start: "Nov 2023",
      end: "Dec 2023",
      logoUrl: "/dlk.png",
      href: "#",
      badges: ["Internship"],
      description:
        "Developed Java features, integrated RESTful APIs, improved performance by 25%, and reduced bugs by 20%. Gained experience in Spring, Hibernate, MySQL, and Agile practices.",
    },
  ],

  education: [
    {
      school: "Chennai Institute of Technology",
      degree: "B.E. in Computer Science and Engineering",
      logoUrl: "/cit.png",
      href: "https://citchennai.edu.in",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
  {
    title: "WealthBridge – Investment Management Website",
    href: "#",
    dates: "Nov 2024",
    active: true,
    description:
      "End-to-end investment platform with user auth, real-time portfolio tracking, RBAC, and live market data using React, Node, MySQL.",
    technologies: ["React.js", "Node.js", "MySQL", "Context API", "Axios"],
    image: "", // Empty string placeholder
    video: "", // Empty string placeholder
    links: [],
  },
  {
    title: "Hotel Management System",
    href: "#",
    dates: "May 2024",
    active: true,
    description:
      "Booking system built using Flask, HTML, JS, and SQL. Optimized data access for 100+ records, reducing retrieval time by 40%.",
    technologies: ["Flask", "HTML/CSS", "JavaScript", "SQL"],
    image: "",
    video: "",
    links: [],
  },
  {
    title: "StockPulse – AI Investment Dashboard",
    href: "#",
    dates: "Feb 2024",
    active: true,
    description:
      "Real-time stock analysis dashboard with ML-based price predictions using React, Express, and Scikit-learn.",
    technologies: ["React.js", "Express.js", "PostgreSQL", "Python", "Scikit-learn"],
    image: "",
    video: "",
    links: [],
  },
],


  certifications: [
    "AWS Cloud Practitioner – Amazon",
    "Fundamentals of Cybersecurity – Zscaler",
    "Full Stack Data Scientist – Udemy",
    "CCNA – Cisco",
    "Machine Learning with Python – IBM (Coursera)",
    "Large Language Models – NPTEL"
  ],

  achievements: [
    "LeetCode Contest Rank: 1630+ with 750+ problems solved",
    "Secretary – IEEE Computer Society, organized and led technical initiatives",
    "Event organizer – National-level Technical Symposium",
    "Led cultural and technical exchange programs in college"
  ],

  hackathons: [] as {
    title: string;
    href: string;
    dates: string;
    location: string;
    active: boolean;
    description: string;
    technologies: string[];
    image: string;
    video: string;
    links: string[];
  }[], // Add if needed

} as const;
