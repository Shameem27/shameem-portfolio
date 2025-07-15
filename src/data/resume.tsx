import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shameem Mohamed",
  initials: "S",
  url: "https://shameem.vercel.app", // Change to your deployed portfolio domain
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu",
  description:
    "Aspiring Software Engineer passionate about building scalable full-stack applications and solving real-world problems.",
  summary:
    "I'm a final-year Computer Science student at Chennai Institute of Technology, specializing in full-stack development, object detection, and system design. With hands-on experience from multiple internships, personal projects, and over 750+ problems solved in competitive programming, I bring both depth and curiosity to everything I do. I'm currently seeking opportunities to apply my skills and grow as a developer.",
  avatarUrl: "/me.png", // Place your own image in the public folder as "me.png"

  skills: [
    "Java",
    "Python",
    "C++",
    "C",
    "SQL",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Git",
    "Linux"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" }, // optional
  ],

  contact: {
    email: "shameemmohamed04@gmail.com",
    tel: "+91-XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shameem04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/shameem04",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shameem04",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shameemmohamed04@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DLK Technologies",
      href: "https://www.dlkcareerdevelopment.in/",
      badges: ["Internship"],
      location: "Chennai",
      title: "Java Developer Intern",
      logoUrl: "/dlk.png", // Add your logo in public
      start: "June 2023",
      end: "July 2023",
      description:
        "Developed backend components using Java and JDBC. Built modules for dynamic data processing and contributed to the testing phase of production systems.",
    },
    {
      company: "KKR Robotics",
      href: "https://kkrrobotics.com/",
      badges: ["Internship"],
      location: "Chennai",
      title: "Web Developer Intern",
      logoUrl: "/kkr.png",
      start: "May 2023",
      end: "June 2023",
      description:
        "Designed and implemented responsive web interfaces using React.js and Bootstrap. Worked closely with hardware engineers to develop dashboards for robotic components.",
    },
  ],

  education: [
    {
      school: "Chennai Institute of Technology",
      href: "https://www.citchennai.edu.in/",
      degree: "B.E. in Computer Science and Engineering",
      logoUrl: "/cit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "XYZ Higher Secondary School",
      href: "#",
      degree: "HSC - Computer Science",
      logoUrl: "/school.png",
      start: "2020",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Crime Detection using YOLO v3",
      href: "#",
      dates: "March 2024",
      active: true,
      description:
        "An AI-powered crime detection system using YOLO v3 and OpenCV to recognize violent behavior and trigger alerts.",
      technologies: ["Python", "YOLO v3", "OpenCV"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "E-commerce Website",
      href: "#",
      dates: "January 2024",
      active: true,
      description:
        "Full-stack e-commerce site built with React, Node.js, Express, and MySQL featuring cart, product listings, and admin control.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Visitor Management System",
      href: "#",
      dates: "May 2024",
      active: true,
      description:
        "Web-based visitor tracking app with separate admin login, dashboard view, and MySQL integration.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Smart Parking System",
      href: "#",
      dates: "Feb 2024",
      active: true,
      description:
        "An IoT project using Raspberry Pi and Python to detect and display available parking slots with real-time updates.",
      technologies: ["Python", "Raspberry Pi", "IR Sensors"],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [], // Add if you participate in any

} as const;
