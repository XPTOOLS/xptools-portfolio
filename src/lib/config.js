// Configuration file for easy customization
export const CONFIG = {
  // Personal Information
  personalInfo: {
    name: "Ramy Phoenix",
    title: "Developer/CEO",
    email: "freenethubbusiness@gmail.com",
    location: "Uganda",
    bio: "Hardest Choices Require Strongest Will",
  },

  // Social Media Links
  socialLinks: {
    github: "https://github.com/AnonyXguy",
    linkedin: "https://linkedin.com/in/RamyDev",
    twitter: "https://x.com/freenethub_",
    instagram: "https://instagram.com/ramy.phoenix",
    facebook: "https://facebook.com/ramy.phoenix",
    youtube: "https://youtube.com/@Freenethubtech",
    tiktok: "https://tiktok.com/@ramy.phoenix",
  },

  // Project Defaults
  projectDefaults: {
    githubBase: "https://github.com/AnonyXguy",
    demoBase: "https://yourproject.demo",
  },

  // Portfolio Settings
  portfolio: {
    initialProjectsToShow: 6,
    initialCertificatesToShow: 6,
  },

  // Projects Data
  projects: [
    {
      id: 1,
      Title: "MunoFlix",
      Description: "A Netflix-inspired streaming platform with user and admin panels for content management. Features include user authentication, content categorization, and admin controls for media management.",
      Img: "https://i.ibb.co/2bV98rm/munoapp.jpg",
      Link: "https://munoflix.site/",
      Github: "https://github.com/AnonyXguy",
      TechStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      Features: [
        "User authentication & authorization",
        "Content categorization and filtering",
        "Admin panel for media management",
        "Responsive design for all devices",
        "Video streaming capabilities"
      ]
    },
    {
      id: 2,
      Title: "SMM Hub",
      Description: "Social Media Marketing platform with user dashboard and admin panel. Provides tools for social media management, analytics, and automated posting across multiple platforms.",
      Img: "https://i.ibb.co/W4QCL4d9/smmapp.jpg",
      Link: "https://smmhub.site/",
      Github: "https://github.com/AnonyXguy",
      TechStack: ["React", "Tailwind", "Firebase", "Node.js", "Python"],
      Features: [
        "Social media management tools",
        "Analytics and reporting dashboard",
        "Automated posting scheduler",
        "Multi-platform integration",
        "Real-time notifications"
      ]
    },
    {
      id: 3,
      Title: "SNI Hunter",
      Description: "Security tool for Server Name Indication detection with both user interface and admin controls. Helps security professionals identify and analyze SSL/TLS configurations.",
      Img: "https://i.ibb.co/F4SpQvLV/sniapp.jpg",
      Link: "https://sni-hunter.vercel.app/",
      Github: "https://github.com/AnonyXguy",
      TechStack: ["React", "JavaScript", "CSS", "Vite", "Express"],
      Features: [
        "SNI detection and analysis",
        "SSL/TLS configuration scanning",
        "Security vulnerability reports",
        "Admin panel for monitoring",
        "Exportable reports in multiple formats"
      ]
    }
  ],

  // Certificates Data
  certificates: [
    {
      id: 1,
      Img: "https://i.ibb.co/FqqJ7MhS/certificate1.jpg",
      Title: "Full Stack Development",
      Issuer: "Tech Academy",
      Date: "2023"
    },
    {
      id: 2,
      Img: "https://i.ibb.co/HDPbtTTx/certificate2.jpg",
      Title: "React Mastery",
      Issuer: "Frontend Masters",
      Date: "2023"
    },
    {
      id: 3,
      Img: "https://i.ibb.co/KcYM6F5z/certificate3.jpg",
      Title: "UI/UX Design",
      Issuer: "Design Institute",
      Date: "2023"
    },
  ],

  // Supabase Configuration (if using Supabase)
  supabase: {
    url: "your-supabase-url",
    key: "your-supabase-key",
  },

  // Theme Colors
  colors: {
    primary: "#6366f1",
    secondary: "#a855f7",
    background: "#030014",
  },
};

export default CONFIG;