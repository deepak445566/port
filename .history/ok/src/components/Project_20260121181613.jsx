import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

// सभी 6 Projects अलग-अलग array में
const allProjects = [
  {
    id: 1,
    title: "Agriculture E-commerce platform",
    description: "A full-stack agriculture e-commerce platform with modern UI, cart functionality, payment integration, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "User Authentication (Farmer & Customer)",
      "Admin Dashboard for Product & Order Management",
      "Secure Payment Gateway Integration",
      "Inventory & Category Management"
    ],
    category: "mern",
    liveUrl: "https://kloi-one.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.8,
    progress: 100
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "Professional networking platform with real-time messaging, profile management, and connection features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    technologies: ["React", "Material UI", "MongoDB", "Express", "Socket.io"],
    features: ["Real-time Chat", "Post Sharing", "Profile Analytics", "Notifications"],
    category: "mern",
    liveUrl: "https://game-tawny-nine-64.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.5,
    progress: 100
  },
  {
    id: 3,
    title: "Balloon Decor",
    description: "A vibrant and interactive frontend website for balloon decoration services.",
    image: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsbG9uJTIwZGVjb3JlfGVufDB8fDB8fHww",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Event-wise Balloon Packages",
      "Interactive Gallery & Animations",
      "Booking Form & Contact Integration",
      "Responsive & Mobile-Friendly UI"
    ],
    category: "frontend",
    liveUrl: "https://precious-elf-6c250a.netlify.app/",
    githubUrl: "#",
    status: "In Progress",
    rating: 4.5,
    progress: 70
  },
  {
    id: 4,
    title: "Digital Agency Website",
    description: "Complete digital agency platform showcasing services, portfolio, and client testimonials.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
    features: ["Service Showcase", "Portfolio Gallery", "Contact System", "Blog Integration"],
    category: "frontend",
    liveUrl: "https://shery-l3ot.vercel.app/",
    githubUrl: "#",
    status: "Live",
    rating: 4.7,
    progress: 100
  },
  {
    id: 5,
    title: "Online Learning Platform",
    description: "Educational institute website with course management, student tracking, and virtual classroom.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    features: ["Course Management", "Student Dashboard", "Progress Tracking", "Payment System"],
    category: "frontend",
    liveUrl: "https://despaclasses.vercel.app",
    githubUrl: "#",
    status: "Live",
    rating: 4.6,
    progress: 100
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    description: "Modern portfolio with dark/light mode, animations, and project case studies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Three.js"],
    features: ["Dark/Light Mode", "Smooth Animations", "Case Studies", "Contact Form"],
    category: "design",
    liveUrl: "#",
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

// Single Project Card Component - FIXED VERSION
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-blue-900/20"
    >
      {/* Image Section - Top */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            project.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
            project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
            "bg-blue-500/20 text-blue-400 border border-blue-500/30"
          }`}>
            {project.status}
          </span>
        </div>

        {/* Progress Bar for In Progress projects */}
        {project.progress < 100 && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-white font-medium">{project.progress}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section - Bottom */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        {/* Title and Rating */}
        <div className="mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600/50'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-400">{project.rating}/5.0</span>
            <span className="text-gray-600">•</span>
            <span className="text-xs md:text-sm text-gray-400 capitalize">{project.category}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 flex-1 line-clamp-2 md:line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons - FIXED CLICK ISSUE */}
        <div className="flex gap-2 md:gap-3 mt-auto">
          {/* Live Demo Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.liveUrl === "#") {
                e.preventDefault();
                alert("Live demo coming soon!");
              }
            }}
            className={`flex-1 text-white font-medium py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm md:text-base ${
              project.liveUrl === "#" 
                ? "bg-gray-700 cursor-not-allowed" 
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25"
            }`}
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Live Demo</span>
          </a>

          {/* GitHub Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.githubUrl === "#") {
                e.preventDefault();
                alert("GitHub link coming soon!");
              }
            }}
            className={`flex-1 font-medium py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm md:text-base ${
              project.githubUrl === "#" 
                ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:shadow-lg hover:shadow-gray-800/25"
            }`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Pair Card Component - UPDATED
const DesktopProjectPair = ({ i, pair, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div 
      className="sticky top-0 h-screen flex items-center justify-center py-10"
      style={{ scale }}
    >
      <div className="flex w-full max-w-7xl px-4 gap-6 md:gap-8">
        {/* Left Card */}
        <div className="flex-1 h-[500px]">
          <ProjectCard project={pair.left} index={i * 2} />
        </div>
        
        {/* Right Card */}
        <div className="flex-1 h-[500px]">
          <ProjectCard project={pair.right} index={i * 2 + 1} />
        </div>
      </div>
    </motion.div>
  );
};

const Skiper = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div id="work" className="bg-black rounded-3xl lg:rounded-[10vh] overflow-hidden">
        {/* Page Header */}
        <div className="px-4 md:px-8 lg:px-15 pt-10 lg:pt-15 pb-8">
          <h1 className='bebas-neue-regular text-5xl sm:text-6xl lg:text-9xl text-white py-8 md:py-12 lg:py-20 font-semibold text-center lg:text-left'>
            CLIENT WORK
          </h1>
          <p className="text-gray-400 mt-2 text-base md:text-lg text-center lg:text-left">
            {allProjects.length} featured projects for global brands
          </p>
        </div>

        <ReactLenis root options={{ lerp: 0.1 }}>
          <main
            ref={container}
            className="relative w-full min-h-screen"
          >
            {/* MOBILE VIEW - All 6 projects in vertical stack */}
            <div className="lg:hidden w-full px-4 md:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
                {allProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="h-[420px] sm:h-[450px]"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP VIEW - 3 pairs of cards with sticky effect */}
            <div className="hidden lg:block">
              {desktopProjectPairs.map((pair, i) => {
                const targetScale = Math.max(0.7, 1 - (desktopProjectPairs.length - i - 1) * 0.15);
                const rangeStart = i * 0.33;
                const rangeEnd = Math.min(rangeStart + 0.33, 1);
                
                return (
                  <DesktopProjectPair
                    key={pair.id}
                    i={i}
                    pair={pair}
                    progress={scrollYProgress}
                    range={[rangeStart, rangeEnd]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>

            {/* Bottom Spacer */}
            <div className="h-20 lg:h-[50vh]"></div>
          </main>
        </ReactLenis>

        {/* Footer Counter */}
        <div className="px-6 py-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-lg font-medium">
              Total Projects: <span className="text-blue-400">{allProjects.length}</span>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm">Live ({allProjects.filter(p => p.status === "Live").length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-400 text-sm">In Progress ({allProjects.filter(p => p.status === "In Progress").length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skiper;