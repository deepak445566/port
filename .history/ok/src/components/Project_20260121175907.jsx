import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Projects data
const allProjects = [
  {
    id: 1,
    title: "Agriculture E-commerce platform",
    description: "A full-stack agriculture e-commerce platform with modern UI, cart functionality, payment integration, and an admin dashboard.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "User Authentication (Farmer & Customer)",
      "Admin Dashboard for Product & Order Management",
      "Secure Payment Gateway Integration"
    ],
    category: "mern",
    link: "https://kloi-one.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.8,
    progress: 100
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "Professional networking platform with real-time messaging, profile management, and connection features.",
    bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    technologies: ["React", "Material UI", "MongoDB", "Express", "Socket.io"],
    features: ["Real-time Chat", "Post Sharing", "Profile Analytics", "Notifications"],
    category: "mern",
    link: "https://game-tawny-nine-64.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.5,
    progress: 100
  },
  {
    id: 3,
    title: "Balloon Decor",
    description: "A vibrant and interactive frontend website for balloon decoration services.",
    bgImage: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsbG9uJTIwZGVjb3J8fGVufDB8fDB8fHww",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Event-wise Balloon Packages",
      "Interactive Gallery & Animations",
      "Booking Form & Contact Integration"
    ],
    category: "frontend",
    link: "https://precious-elf-6c250a.netlify.app/",
    githubUrl: "#",
    status: "In Progress",
    rating: 4.5,
    progress: 70
  },
  {
    id: 4,
    title: "Digital Agency Website",
    description: "Complete digital agency platform showcasing services, portfolio, and client testimonials.",
    bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
    features: ["Service Showcase", "Portfolio Gallery", "Contact System", "Blog Integration"],
    category: "frontend",
    link: "https://shery-l3ot.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.7,
    progress: 100
  },
  {
    id: 5,
    title: "Online Learning Platform",
    description: "Educational institute website with course management, student tracking, and virtual classroom.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    features: ["Course Management", "Student Dashboard", "Progress Tracking", "Payment System"],
    category: "frontend",
    link: "https://despaclasses.vercel.app",
    githubUrl: "#",
    status: "Live",
    rating: 4.6,
    progress: 100
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    description: "Modern portfolio with dark/light mode, animations, and project case studies.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Three.js"],
    features: ["Dark/Light Mode", "Smooth Animations", "Case Studies", "Contact Form"],
    category: "design",
    link: "#",
    githubUrl: "#",
    status: "Under Development",
    rating: 4.4,
    progress: 70
  }
];

// Desktop के लिए pairs में group करें
const desktopProjectPairs = [
  { id: 1, left: allProjects[0], right: allProjects[1] },
  { id: 2, left: allProjects[2], right: allProjects[3] },
  { id: 3, left: allProjects[4], right: allProjects[5] }
];

// Single Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl h-full"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={project.bgImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
              {project.category}
            </span>
            <h3 className="text-white text-xl font-bold mt-4">{project.title}</h3>
          </div>
          <span className="text-white/70 text-sm">{project.status}</span>
        </div>

        {/* Middle Section */}
        <p className="text-white/80 text-sm mt-4 line-clamp-2">{project.description}</p>

        {/* Bottom Section */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-white text-sm">{project.rating}</span>
            </div>
            <div className="w-24 bg-white/20 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

// Desktop Pair Card Component
const DesktopProjectPair = ({ i, pair, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-20 flex items-center justify-center h-screen">
      <motion.div
        style={{ scale }}
        className="relative flex gap-8 rounded-2xl w-[1100px] h-[400px]"
      >
        {/* Left Card */}
        <div className="flex-1 h-full">
          <ProjectCard project={pair.left} />
        </div>
        
        {/* Right Card */}
        <div className="flex-1 h-full">
          <ProjectCard project={pair.right} />
        </div>
      </motion.div>
    </div>
  );
};

const Skiper = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="work" className="bg-black min-h-screen">
      {/* Page Header */}
      <div className="px-6 lg:px-20 pt-20 lg:pt-32 pb-10">
        <h1 className='text-6xl lg:text-9xl text-white font-bold text-center lg:text-left'>
          CLIENT WORK
        </h1>
        <p className="text-gray-400 mt-4 text-lg text-center lg:text-left">
          {allProjects.length} featured projects for global brands
        </p>
      </div>

      <ReactLenis root options={{ lerp: 0.1 }}>
        <main
          ref={container}
          className="relative"
        >
          {/* MOBILE VIEW - All 6 projects in vertical stack */}
          <div className="lg:hidden w-full max-w-4xl mx-auto space-y-6 px-4 pb-20">
            {allProjects.map((project) => (
              <div 
                key={project.id} 
                className="h-[300px] w-full"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW - 3 pairs of cards with sticky effect */}
          <div className="hidden lg:block h-[300vh]">
            {desktopProjectPairs.map((pair, i) => {
              const targetScale = 1 - (desktopProjectPairs.length - i - 1) * 0.1;
              const range = [i / desktopProjectPairs.length, (i + 1) / desktopProjectPairs.length];
              
              return (
                <DesktopProjectPair
                  key={pair.id}
                  i={i}
                  pair={pair}
                  progress={scrollYProgress}
                  range={range}
                  targetScale={targetScale}
                />
              );
            })}
          </div>

          {/* Projects Counter */}
          <div className="fixed bottom-10 right-10 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm">
              0{allProjects.length}/0{allProjects.length}
            </span>
          </div>
        </main>
      </ReactLenis>
    </div>
  );
};

export default Skiper;