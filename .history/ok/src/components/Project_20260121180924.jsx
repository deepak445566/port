import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

// सभी 6 Projects अलग-अलग array में
 const allProjects = [
   {
  id: 1,
  title: "Agriculture E-commerce platform",
  description: "A full-stack agriculture e-commerce platform with modern UI, cart functionality, payment integration, and an admin dashboard. Farmers and customers can buy, sell, and track agricultural products seamlessly.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
  features: [
    "User Authentication (Farmer & Customer)",
    "Admin Dashboard for Product & Order Management",
    "Secure Payment Gateway Integration",
    "Inventory & Category Management",
    "Order Tracking & History",
    "Product Ratings & Reviews"
  ],
  category: "mern",
  liveUrl: "https://kloi-one.vercel.app/",
  githubUrl: "#",
  status: "Live",
  rating: 4.8,
  progress: 100
}
,
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
  description: "A vibrant and interactive frontend website for balloon decoration services, showcasing products, event packages, and booking options with modern UI and responsive design.",
  image: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsbG9uJTIwZGVjb3JlfGVufDB8fDB8fHww",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
  features: [
    "Event-wise Balloon Packages",
    "Interactive Gallery & Animations",
    "Booking Form & Contact Integration",
    "Responsive & Mobile-Friendly UI",
    "Smooth Page Transitions & Hover Effects"
  ],
  category: "frontend",
  liveUrl: "https://precious-elf-6c250a.netlify.app/",
  githubUrl: "#",
  status: "In Progress",
  rating: 4.5,
  progress: 70
}
,
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

// Desktop के लिए pairs में group करें (optional)
const desktopProjectPairs = [
  { id: 1, left: allProjects[0], right: allProjects[1] },
  { id: 2, left: allProjects[2], right: allProjects[3] },
  { id: 3, left: allProjects[4], right: allProjects[5] }
];

// Single Project Card Component
// Updated Single Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image Section - Top */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
        <img 
          src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === "Live" ? "bg-green-500/20 text-green-400" :
            project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400" :
            "bg-blue-500/20 text-blue-400"
          }`}>
            {project.status}
          </span>
        </div>

        {/* Progress Bar for In Progress projects */}
        {project.progress < 100 && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-300 mt-1 block">{project.progress}% Complete</span>
          </div>
        )}
      </div>

      {/* Content Section - Bottom */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title and Rating */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-400">{project.rating}/5.0</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400 capitalize">{project.category}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 flex-1">
          {project.description.length > 120 
            ? `${project.description.substring(0, 120)}...` 
            : project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {/* Live Demo Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>

          {/* GitHub Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-3 px-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/25 flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Features on Hover (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">{project.features.length} features</span>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Pair Card Component
const DesktopProjectPair = ({ i, pair, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky -top-[10vh] lg:-top-30 flex items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 20 + 250}px)` }}
        className="relative -top-1/4 origin-top flex rounded-2xl 
          w-[90vw] h-[400px]           /* mobile height */
          lg:h-[400px] lg:w-[1100px]   /* desktop */
        "
      >
        {/* Desktop: Two cards side by side */}
        <div className="hidden lg:flex w-full h-full gap-8">
          {/* Left Card */}
          <div className="flex-1">
            <ProjectCard project={pair.left} />
          </div>
          
          {/* Right Card */}
          <div className="flex-1">
            <ProjectCard project={pair.right} />
          </div>
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
    <>
      <div id="work" className="bg-black rounded-3xl lg:rounded-[10vh]">
        {/* Page Header */}
        <div className="px-6 lg:px-15 mt-10 lg:mt-15 mb-10">
          <h1 className='bebas-neue-regular text-6xl lg:text-9xl big text-white py-20 font-semibold text-center lg:text-left'>
            CLIENT WORK
          </h1>
          <p className="text-gray-400 mt-2 text-lg text-center lg:text-left">
            {allProjects.length} featured projects for global brands
          </p>
        </div>

        <ReactLenis root>
          <main
            ref={container}
            className="relative flex w-full flex-col items-center justify-center 
              pb-[10vh] lg:pb-[60vh] 
              pt-[10vh] 
              -mt-[20vh] lg:-mt-[50vh]
            "
          >
            {/* MOBILE VIEW - All 6 projects in vertical stack */}
            <div className="lg:hidden w-full max-w-4xl space-y-6 px-4">
              {allProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="h-[300px] w-full" // Mobile पर हर card की height
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>

            {/* DESKTOP VIEW - 3 pairs of cards with sticky effect */}
            <div className="hidden lg:block">
              {desktopProjectPairs.map((pair, i) => {
                const targetScale = Math.max(0.5, 1 - (desktopProjectPairs.length - i - 1) * 0.1);
                return (
                  <DesktopProjectPair
                    key={pair.id}
                    i={i}
                    pair={pair}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>

            {/* Projects Counter */}
           
          </main>
        </ReactLenis>
      </div>
    </>
  );
};

export default Skiper;