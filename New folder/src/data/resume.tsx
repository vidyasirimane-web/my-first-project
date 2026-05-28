import React from 'react';
import { Database, Terminal, Code2, Briefcase } from 'lucide-react';

export const RESUME_DATA = {
  profilePhoto: "/profile.jpg",
  resumeFile: "/resume.png", 
  name: "Vidya",
  lastName: "Shree",
  fullName: "Vidyashree P C",
  title: "BCA Student & Tech Enthusiast",
  tagline: "Building digital solutions with SQL, Python, and a passion for automation.",
  location: "Tumkur, Karnataka - 572222",
  phone: "7411141839 / 9743116877",
  email: "vvidyasirimane@gmail.com",
  github: "https://github.com/", // Add your real GitHub link here
  linkedin: "https://linkedin.com/", // Add your real LinkedIn link here
  objective: "To obtain a suitable position in a reputed organization where I can utilize my skills and knowledge to grow professionally and contribute to the company's success, and to make a contribution in the organization with the best of my ability.",
  education: [
    {
      degree: "BCA Graduation",
      institution: "Vidya First Grade College",
      year: "2026",
      score: "8.5 CGPA"
    },
    {
      degree: "PUC",
      institution: "GGJC College, Gubbi",
      year: "2023",
      score: "425 Marks (73%)"
    },
    {
      degree: "SSLC",
      institution: "GGJC High School, Gubbi",
      year: "2021",
      score: "525 Marks (84%)"
    }
  ],
  skills: [
    { name: "SQL", level: 90, icon: <Database className="w-5 h-5" /> },
    { name: "Python", level: 85, icon: <Terminal className="w-5 h-5" /> },
    { name: "Visual Studio", level: 80, icon: <Code2 className="w-5 h-5" /> },
    { name: "Project Management", level: 75, icon: <Briefcase className="w-5 h-5" /> }
  ],
  softSkills: ["Communication", "Project Management", "Time Management"],
  experience: [
    {
      role: "Software Development Intern",
      company: "Aikshetra Tech Solutions Pvt Ltd",
      duration: "1 Month",
      description: "Gained hands-on experience in software development workflows and contributed to team projects."
    }
  ],
  projects: [
    {
      title: "Automatic Projects",
      description: "Working on research and development of automation systems.",
      tech: ["Python", "Automation"],
      link: "#"
    },
    {
      title: "TechWorld - Online Course Platform",
      description: "A modern e-learning website featuring functional enroll buttons, login popups, embedded video courses (Web Dev, React, Python), and a responsive UI with smooth scrolling and CSS gradients.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/techworld.html"
    }
  ],
  certifications: [
    { name: "Java Programming", issuer: "Great Learning Academy", image: "/java-cert.png" },
    { name: "Database Management System", issuer: "Great Learning Academy", image: "/dbms-cert.png" },
    { name: "SQL and Data Science", issuer: "Great Learning", image: "" },
    { name: "Python Fundamentals for Beginners", issuer: "Great Learning", image: "" }
  ]
};
