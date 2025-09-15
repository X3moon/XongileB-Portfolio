import React from 'react';
import type { Project, Skill, Certification, Badge, Experience } from './types';
import { BrainCircuit, Cpu, Code, Users, BarChart, Mic, Linkedin, Github, Mail, Download, ExternalLink, Network, Shield, Server, Database, Cloud, Monitor, Clock, MessageSquare, CodeXml, GitBranch, Waypoints, Briefcase, GraduationCap, Phone } from 'lucide-react';


// Personal Information
export const PERSONAL_INFO = {
    name: "Xongile Baloyi",
    profilePicture: "https://i.postimg.cc/D03z1Gy4/Me.jpg",
    bio: "IT Graduate with a Diploma in IT in Network Management. A multi-talented Junior Stack Developer with a strong foundation in network infrastructure, security, and cloud computing, complemented by a deep passion for Artificial Intelligence and Machine Learning. I excel at building secure, efficient, and intelligent systems that solve complex problems.",
    objectives: "To secure a challenging role where I can leverage my unique blend of expertise in networking, server administration, and AI/ML. Eager to contribute to a dynamic team by tackling complex problems at the intersection of cloud infrastructure, network security, and intelligent systems, while continuously expanding my skills in these ever-evolving fields.",
    brandingStatement: "Building secure, intelligent, and efficient digital infrastructures."
};


// Skills
// FIX: Replaced JSX with React.createElement to be compatible with .ts files. This resolves parsing errors.
export const TECHNICAL_SKILLS: Skill[] = [
    { name: "Machine Learning", icon: React.createElement(BrainCircuit, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Deep Learning", icon: React.createElement(Cpu, { className: "w-8 h-8 text-purple-400" }) },
    { name: "NLP", icon: React.createElement(Mic, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Python", icon: React.createElement(Code, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Network Security", icon: React.createElement(Shield, { className: "w-8 h-8 text-purple-400" }) },
    { name: "TCP/IP & Protocols", icon: React.createElement(Network, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Server Admin", icon: React.createElement(Server, { className: "w-8 h-8 text-purple-400" }) },
    { name: "SQL & Databases", icon: React.createElement(Database, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Azure Cloud", icon: React.createElement(Cloud, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Windows OS", icon: React.createElement(Monitor, { className: "w-8 h-8 text-purple-400" }) },
    { name: "HTML/CSS/JS", icon: React.createElement(CodeXml, { className: "w-8 h-8 text-purple-400" }) },
];

// FIX: Replaced JSX with React.createElement to be compatible with .ts files. This resolves parsing errors.
export const SOFT_SKILLS: Skill[] = [
    { name: "Collaboration", icon: React.createElement(Users, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Analysis", icon: React.createElement(BarChart, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Problem-solving", icon: React.createElement(BrainCircuit, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Time Management", icon: React.createElement(Clock, { className: "w-8 h-8 text-purple-400" }) },
    { name: "Communication", icon: React.createElement(MessageSquare, { className: "w-8 h-8 text-purple-400" }) },
];

// Experience
export const EXPERIENCE_DATA: Experience[] = [
    {
        title: "Digital Associate",
        company: "CAPACITI",
        duration: "July 2025 - Present",
        icon: React.createElement(Briefcase, { className: "w-6 h-6 text-purple-400" }),
        responsibilities: [
            "Completed an intensive AI Bootcamp, gaining skills in Machine Learning, Deep Learning, NLP, and Generative AI.",
            "Earned certifications from IBM, Microsoft, and Coursera covering Python for Data Science, AI Foundations, and Azure AI.",
            "Developed practical AI solutions, including a sentiment analysis tool, a data bias audit app, and a creative writing assistant.",
            "Collaborated on a capstone project to build an AI-powered Job Readiness & Wellness Coach using React, Python, and cloud services."
        ]
    },
    {
        title: "Tutor for Client Systems Configuration",
        company: "IIE Rosebank College",
        duration: "July 2024 - December 2024",
        icon: React.createElement(GraduationCap, { className: "w-6 h-6 text-purple-400" }),
        responsibilities: [
            "Assisted students with installing and configuring Windows Client and Server software.",
            "Provided guidance on assignments and practical labs related to computer technologies.",
            "Taught foundational PC usage, hardware installation (drives), and storage pool setup.",
            "Instructed students on utilizing Azure Lab Services for virtual machine environments."
        ]
    }
];

// Projects
export const PROJECTS: Project[] = [
    {
        title: "Verse Engine",
        description: "An AI-powered creative writing assistant that generates poetic verses and short stories from simple prompts, helping users overcome writer's block.",
        liveDemoUrl: "https://verseengine.netlify.app/",
        githubUrl: "https://github.com/X3moon",
        techStack: ["React", "AI API", "Tailwind CSS"],
        image: "https://i.postimg.cc/Xqd3Vwpv/verse.avif"
    },
    {
        title: "Bias Audit App",
        description: "A data analysis tool designed to audit datasets for potential biases, providing visualizations and reports to promote fairness in ML models.",
        liveDemoUrl: "https://45bs.netlify.app/",
        githubUrl: "https://github.com/X3moon",
        techStack: ["Python", "Pandas", "Streamlit"],
        image: "https://i.postimg.cc/445B0Y8v/bias.jpg"
    },
    {
        title: "Sentiment AI Explorer",
        description: "A real-time sentiment analysis tool for social media streams, using recurrent neural networks to classify text with high accuracy.",
        liveDemoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/xongile_baloyi_capaciti_org_za/EUbobrXDWItNv1PVfcHpl8AB8RiWo_ZvMNpU8uZiD1C14g?e=FFk89l",
        githubUrl: "https://sentiment-sense-hub.lovable.app/",
        techStack: ["Python", "TensorFlow", "Flask", "React"],
        image: "https://i.postimg.cc/H8Mk6y9k/sentiment.jpg"
    },
];

// Capstone Project
export const CAPSTONE_PROJECT = {
    title: "AI Job Readiness & Wellness Coach",
    problemStatement: "Job seekers often face a dual challenge: navigating the complexities of the application process and managing the mental stress of unemployment. Traditional job platforms lack integrated support for mental well-being, leaving users to find fragmented solutions for resume building, interview practice, and mental health.",
    solution: "This project is a holistic web application that serves as a personal career and wellness coach. It combines AI-powered tools for job readiness—including resume analysis and mock interview coaching—with integrated mental wellness features. Users can access guided breathing exercises, a private journaling space, and a supportive chatbot to help them stay resilient and focused throughout their job search.",
    technicalDeepDive: "The application is built with a React frontend and a Python (Flask) backend. The job readiness module leverages NLP models to parse resumes and provide feedback against job descriptions. Interview coaching is powered by speech-to-text APIs and a generative AI for dynamic question generation and response evaluation. The wellness features are driven by a conversational AI for the chatbot and simple, effective UI components for exercises and journaling. The entire system is containerized with Docker and deployed on a cloud platform for reliable access.",
    liveDemoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/xongile_baloyi_capaciti_org_za/EZ29-hVGQQ9JsR0hjlv-8QABj5zF1OwV3fcm9EOTaWEUZw?e=8fR2i1",
    githubUrl: "https://github.com/ByteBandits-Org/job-readiness",
    image: "https://i.postimg.cc/q7dY29bj/trabajos-del_futuro.jpg"
};

// Certifications
export const CERTIFICATIONS: Certification[] = [
    { name: "Diploma in IT in Network Management", issuer: "IIE Rosebank College", url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/xongile_baloyi_capaciti_org_za/EbbDnwEQH4JMtgcf5l6JYhEBYJFSiXZqjAhgCxqy-cUEtw?e=mlXL9M" },
    { name: "Sports Management SLP", issuer: "Boston City College and Business College", url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/xongile_baloyi_capaciti_org_za/EbcKHpSkatdEquzTSNTwYvMBIxJUf1VaoH-SnArcgybs5A?e=k8AIHF" },
    { name: "Artificial Intelligence on Microsoft Azure", issuer: "Microsoft", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EWS-OftaAf5PkN4CtPmW8dkBngBLC0oxheCD9HnTBsPWqA?e=KHRAap" },
    { name: "Building AI Powered Chatbots Without Programming", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/Ed7aai2K3FNFqxK7znKeWesBKERglozf10lsEBU3GBVu8Q?e=siLFig" },
    { name: "AI Essentials", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EehtE73HXf5JnZOVy_xZC-kBFhhrsHwV69oEzATbtIgT5w?e=oG2qbH" },
    { name: "AI Foundations Prompt Engineering with ChatGPT", issuer: "LinkedIn Learning", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EQriunY7erFJorVoQOPTUacBSgUHEaWsLQDbQNNbPZCfAQ?e=nEayMe" },
    { name: "Bias from a Data Perspective", issuer: "SkillsBuild", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EexObkKFcPpKgwuBu4YuCfQByHsuNXa-fV-bN1uHc5yBgA?e=FTXlLq" },
    { name: "Generative AI with LLMs", issuer: "Coursera", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EfXSGbep4RRCkFriqG17fGcBye11_6ibr-iTJyrSuDhkvA?e=myviAO" },
    { name: "Introduction to Artificial Intelligence", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/Eaj_QnwoQrxAg0nCK9DtQcAB7Dhx8zHCTqiljpNDQllqlA?e=3p7gYq" },
    { name: "Introduction to Generative AI", issuer: "Coursera", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EeEYLPEV-KFIuIBQVIUr_MMBruW0kz81AC68h0NELb1vKQ?e=aUeYmd" },
    { name: "Introduction to Responsible AI", issuer: "Microsoft", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EUBkhVVutMFCk654kMM4DHIB7N9IdTaVB8ym7dZjg2DzrA?e=cieGo4" },
    { name: "Time Management", issuer: "SkillsBuild", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/ETcHNVfgGJdDsbKhhDc-GDEBiUXFctYymwFSJmg58T3QCg?e=wYet9L" },
    { name: "Financial Planning for Young Adults", issuer: "SkillsBuild", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EcnhUfXDgANBjjD5bJwH1JEBJSlL1SUGxIgk4mk0ybkvNA?e=HvO6v9" },
    { name: "Grit and Growth Mindset", issuer: "SkillsBuild", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EUN685yBAzZDh2Kf5VSdZpwB6FBpkIWmXfeI7lgExNbVPg?e=31Vg1A" },
    { name: "Python for Data Science and AI", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/ETUMi4EL6EdKiBHEojK9alABu7CGHnE2HiGPNAsHoAJPuA?e=hN929O" },
    { name: "Solving Problems with Creative and Critical Thinking", issuer: "SkillsBuild", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EWv9YgZ6wD9Dk-zwVrvDBSABBZV0gWHtGhWtGwK77ZpOcw?e=O0S8rI" },
    { name: "Introduction to Artificial Intelligence", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EYOzMxanxKJIkxGE4mXkzdEB2vlrUVdnkZtB5QP-4ClJcQ?e=xaN1uU" },
    { name: "Python Development & AI Foundations", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EQqB6puyDPJAp_xR5kBDAFcBo_-7VzZBv7E7zT-PYlZaBg?e=RFT6bm" },
];

// Badges
export const BADGES: Badge[] = [
    { name: "Artificial Intelligence (AI) Bootcamp Completion Badge", issuer: "Capaciti", url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Eb02NmAB8IFJmf3fbXKgZm0Bqch5iWSKtLFbp1qoMQwysg?e=n93uHy" },
    { name: "Artificial Intelligence Essentials V2", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/ESxyHOGP-I5Km-QdN3GRNaYBrZ2rXM8KDXmSE1rsa9GRlg?e=ycajTR" },
    { name: "Chatbot Building Essentials with IBM Watson Assist", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Ef7F8IiS5xtPupGXhQh2FikBMU37c3c-yO0Vpx_jKHDeIg?e=oOsfvY" },
    { name: "Professional Development Completion Badge", issuer: "Capaciti", url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/ETOBsNUNEKxIjtgExV86bPsBJjv5Idbrxaudo_K2wJsP9w?e=fLTQCr" },
    { name: "Python for Data Science and AI", issuer: "IBM", url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Ec7dBIYof-hNjq7gDm6-HugBKPSETWS0VMM43rSQ-yDZYA?e=NhHFAS" },
];

// Career Materials & Contact
export const CAREER_LINKS = {
    resume: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/xongile_baloyi_capaciti_org_za/Easr_kIGQiVDuUtDsvYXQUEB_cXqIdaMfG2uZFp8Tzlkjg?e=6N4dz2&download=1",
    linkedin: "https://linkedin.com/in/xongile-baloyi-1749731a2",
    github: "https://github.com/X3moon",
    email: "xongile.baloyi@capaciti.org.za",
    email2: "xongile33@gmail.com",
    phone: "0765480545",
    calendly: "https://calendly.com/xongile-baloyi/30min",
};

// Presentation Section
export const PRESENTATION = {
    intro: "Welcome to my showcase! This presentation provides a brief overview of my journey, key projects, and future aspirations in the field of AI and Machine Learning.",
    myStory: "My journey began with a strong foundation in IT and Network Management, where I mastered the principles of building secure and robust digital infrastructures. This background sparked a deep passion for AI and Machine Learning, leading me to blend my skills in network security and cloud computing with advanced data science techniques. Today, I am a multi-talented developer dedicated to creating systems that are not just efficient, but truly intelligent.",
    myVision: "My goal is to tackle complex challenges at the intersection of cloud infrastructure, network security, and artificial intelligence. I am driven to join a forward-thinking team where I can apply my unique blend of skills to develop innovative solutions, continuously pushing the boundaries of what's possible in these dynamic and ever-evolving fields.",
    skillPhilosophy: "I believe that the most powerful solutions come from a multidisciplinary approach. My expertise spans from core technical skills like Machine Learning, Python, and Azure Cloud to critical networking and security principles. This is complemented by strong soft skills in analysis, collaboration, and problem-solving, enabling me to not only build effective systems but also to communicate their value and work seamlessly within a team.",
    projectHighlights: "I've focused on creating practical, high-impact solutions, from real-time sentiment analysis to predictive modeling. Each project presented a unique challenge and an opportunity to apply cutting-edge techniques.",
    futurePlans: "I am eager to explore reinforcement learning and its applications in robotics. I'm also committed to staying at the forefront of AI ethics and developing responsible AI systems."
};

// Navigation
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capstone', href: '#capstone' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Badges', href: '#badges' },
    { name: 'Showcase', href: '#presentation' },
    { name: 'Contact', href: '#contact' },
];

// FIX: Replaced JSX with React.createElement. This resolves a type inference issue that caused an error in Contact.tsx because the `url` property was not being correctly inferred.
export const SOCIAL_ICONS = [
    { name: "Email", icon: React.createElement(Mail), url: `mailto:${CAREER_LINKS.email}` },
    { name: "LinkedIn", icon: React.createElement(Linkedin), url: CAREER_LINKS.linkedin },
    { name: "GitHub", icon: React.createElement(Github), url: CAREER_LINKS.github },
];