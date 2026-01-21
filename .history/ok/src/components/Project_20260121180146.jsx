import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Projects data with GitHub links
const allProjects = [
  {
    id: 1,
    title: "Agriculture E-commerce Platform",
    description: "Full-stack platform connecting farmers directly with consumers. Features include real-time inventory, secure payments, and AI-based crop recommendations.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "JWT", "Stripe"],
    category: "Full Stack",
    liveUrl: "https://kloi-one.vercel.app/",
    githubUrl: "https://github.com/yourusername/agriculture-ecommerce",
    status: "Live",
    rating: 4.8,
    progress: 100,
    year: "2024"
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "Real-time social networking with video calls, stories, and AI-powered content moderation. Scalable microservices architecture.",
    bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    technologies: ["Next.js", "Socket.io", "Redis", "Docker", "AWS"],
    category: "Full Stack",
    liveUrl: "https://game-tawny-nine-64.vercel.app/",
    githubUrl: "https://github.com/yourusername/social-media-app",
    status: "Live",
    rating: 4.5,
    progress: 100,
    year: "2024"
  },
  {
    id: 3,
    title: "Balloon Decor Studio",
    description: "Interactive 3D configurator for balloon arrangements. Customers can design and visualize decorations before booking.",
    bgImage: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=1600&auto=format&fit=crop&q=80",
    technologies: ["Three.js", "React", "Framer Motion", "GSAP"],
    category: "Frontend",
    liveUrl: "https://precious-elf-6c250a.netlify.app/",
    githubUrl: "https://github.com/yourusername/balloon-decor",
    status: "In Progress",
    rating: 4.5,
    progress: 70,
    year: "2024"
  },
  {
    id: 4,
    title: "Digital Agency",
    description: "Performance-optimized website with CMS integration. Features custom animations and advanced analytics dashboard.",
    bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js 14", "Sanity CMS", "Framer Motion", "Chart.js"],
    category: "Frontend",
    liveUrl: "https://shery-l3ot.vercel.app/",
    githubUrl: "https://github.com/yourusername/digital-agency",
    status: "Live",
    rating: 4.7,
    progress: 100,
    year: "2024"
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description: "Interactive learning platform with video courses, quizzes, and certificate generation. Includes AI tutor assistant.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "Firebase", "Stripe", "FFmpeg", "AI"],
    category: "Full Stack",
    liveUrl: "https://despaclasses.vercel.app",
    githubUrl: "https://github.com/yourusername/e-learning",
    status: "Live",
    rating: 4.6,
    progress: 100,
    year: "2023"
  },
  {
    id: 6,
    title: "Portfolio 3.0",
    description: "Next-gen portfolio with WebGL animations, custom shaders, and interactive 3D elements. Fully responsive and performant.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "Three.js", "WebGL", "GSAP", "R3F"],
    category: "Design & Dev",
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/portfolio-3.0",
    status: "Dev",
    rating: 4.4,
    progress: 70,
    year: "2024"
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
    <div className="group relative overflow-hidden rounded-3xl h-full border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.bgImage}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between z-10">
        {/* Top Section - Category and Year */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium shadow-lg shadow-purple-500/20">
              {project.category}
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-4xl font-bold text-white/10">{project.year}</span>
        </div>

        {/* Middle Section - Title and Description */}
        <div className="mt-8 lg:mt-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm lg:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-white/60 text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Section - Links and Status */}
        <div className="mt-8 flex items-center justify-between">
          {/* Status and Rating */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${project.status === 'Live' ? 'bg-emerald-400' : project.status === 'In Progress' ? 'bg-yellow-400' : 'bg-purple-400'}`} />
              <span className="text-white text-sm font-medium">{project.status}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-white font-bold">{project.rating}</span>
            </div>
          </div>

          {/* GitHub and Live Links */}
          <div className="flex items-center gap-3">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 group/github"
              aria-label="GitHub Repository"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group/live"
            >
              Visit Live
              <svg className="w-4 h-4 group-hover/live:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${project.progress === 100 ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 'bg-gradient-to-r from-blue-400 to-purple-500'}`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-700 rounded-3xl" />
      </div>
    </div>
  );
};

// Desktop Pair Card Component
const DesktopProjectPair = ({ i, pair, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{ scale, opacity }}
        className="relative flex gap-8 w-[1200px] h-[500px] px-4"
      >
        {/* Left Card with Parallax */}
        <motion.div 
          className="flex-1 h-full"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProjectCard project={pair.left} />
        </motion.div>
        
        {/* Right Card with Parallax */}
        <motion.div 
          className="flex-1 h-full"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProjectCard project={pair.right} />
        </motion.div>
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
    <div id="work" className="bg-black min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] z-0" />
      
      {/* Animated Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] z-0" />

      {/* Page Header */}
      <div className="relative z-10 px-6 lg:px-20 pt-20 lg:pt-32 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-purple-600 to-blue-600" />
            <span className="text-purple-400 font-medium">PORTFOLIO</span>
          </div>
          
          <h1 className='text-7xl lg:text-9xl font-bold bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent'>
            CLIENT WORK
          </h1>
          
          <p className="text-gray-400 mt-6 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Crafting digital experiences that blend cutting-edge technology with elegant design. 
            {allProjects.length} transformative projects delivered worldwide.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-2xl font-bold text-white">{allProjects.filter(p => p.status === 'Live').length}</div>
                <div className="text-gray-400 text-sm">Live Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              <div>
                <div className="text-2xl font-bold text-white">{allProjects.filter(p => p.category === 'Full Stack').length}</div>
                <div className="text-gray-400 text-sm">Full Stack</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
              <div>
                <div className="text-2xl font-bold text-white">4.6</div>
                <div className="text-gray-400 text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <main ref={container} className="relative z-10">
          {/* MOBILE VIEW */}
          <div className="lg:hidden max-w-2xl mx-auto px-4 space-y-6 pb-32 pt-10">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-[400px] w-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:block h-[400vh]">
            {desktopProjectPairs.map((pair, i) => {
              const targetScale = 1 - (desktopProjectPairs.length - i - 1) * 0.1;
              const range = [i * 0.25, (i + 1) * 0.25];
              
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

          {/* Floating Counter */}
          <motion.div 
            className="fixed bottom-8 right-8 z-50 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Currently Viewing</div>
                <div className="text-2xl font-bold text-white">
                  <span className="text-purple-400">0{allProjects.length}</span>
                  <span className="text-white/30 mx-2">/</span>
                  <span className="text-white/60">0{allProjects.length}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white/40 text-sm flex flex-col items-center gap-2"
            >
              <span>Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
          </div>
        </main>
      </ReactLenis>
    </div>
  );
};

export default Skiper;