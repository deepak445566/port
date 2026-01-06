"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

// Your project data with percentage
const projects = [
  { title: "CSS", src: "/images/css.png", description: "Used for styling and designing visually appealing, responsive web pages.", percentage: 90, color: "#264de4", category: "Frontend" },
  { title: "Express.js", src: "/images/express.png", description: "A lightweight Node.js framework for building fast and scalable backend APIs.", percentage: 75, color: "#000000", category: "Backend" },
  { title: "Framer Motion", src: "/images/framer.png", description: "A React animation library for creating smooth and interactive UI motion effects.", percentage: 60, color: "#ff4d88", category: "Animation" },
  { title: "HTML5", src: "/images/html.png", description: "The standard markup language for creating the structure of web pages.", percentage: 95, color: "#e34f26", category: "Frontend" },
  { title: "JavaScript", src: "/images/js.png", description: "The core programming language of the web used for dynamic and interactive websites.", percentage: 85, color: "#f7df1e", category: "Programming" },
  { title: "MongoDB", src: "/images/mongodb.png", description: "A NoSQL database used to store data in flexible, JSON-like documents.", percentage: 70, color: "#47a248", category: "Database" },
  { title: "MySQL", src: "/images/mysql.png", description: "A reliable relational database management system for structured data storage.", percentage: 65, color: "#4479a1", category: "Database" },
  { title: "Node.js", src: "/images/node.png", description: "A JavaScript runtime used to build scalable backend and server-side applications.", percentage: 80, color: "#339933", category: "Backend" },
  { title: "React.js", src: "/images/react.png", description: "A popular JavaScript library for building fast, reusable, and dynamic user interfaces.", percentage: 92, color: "#61dafb", category: "Frontend" },
  { title: "Redux", src: "/images/redux.png", description: "A predictable state management library for maintaining data flow in large React apps.", percentage: 78, color: "#764abc", category: "State Management" },
  { title: "Tailwind CSS", src: "/images/tailwind.png", description: "A utility-first CSS framework for building modern, responsive designs quickly.", percentage: 88, color: "#06b6d4", category: "CSS Framework" },
];

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-20 blur-sm"
        style={{ backgroundColor: color }}
      ></div>
      
      {/* Filled Bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full rounded-full relative"
        style={{ backgroundColor: color }}
      >
        {/* Shine Effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-full"></div>
      </motion.div>
      
      {/* Percentage Text */}
      <div className="absolute -top-6 right-0">
        <span 
          className="text-xs font-bold px-2 py-1 rounded-md"
          style={{ 
            backgroundColor: color,
            color: parseInt(color.replace('#', ''), 16) > 0xffffff/2 ? '#000' : '#fff'
          }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

// Card Component
const StickyCard = ({ i, title, src, description, progress, range, targetScale, percentage, color, category }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [0.8, 1]);
  const rotate = useTransform(progress, range, [-2, 0]);

  return (
    <div className="sticky top-32 flex items-center justify-center my-8 px-4">
      <motion.div
        style={{ scale, opacity, rotate }}
        className="relative flex flex-col overflow-hidden rounded-2xl w-[90vw] max-w-4xl h-auto md:h-[25vh] shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${color}40, transparent)` }}
        ></div>
        
        {/* Main Content Container */}
        <div className="h-full w-full bg-gradient-to-br from-white to-gray-50 relative z-10 p-6 md:p-8">
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              {category}
            </span>
          </div>
          
          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6">
            
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-6 md:w-1/3">
              {/* Logo Container with Glow */}
              <div 
                className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                style={{ 
                  backgroundColor: `${color}15`,
                  border: `1px solid ${color}30`
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: color }}
                ></div>
                <img 
                  className="relative z-10 h-12 w-12 md:h-16 md:w-16 object-contain" 
                  src={src} 
                  alt={title} 
                />
              </div>
              
              {/* Title */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-4 h-4"
                        fill={idx < Math.floor(percentage/20) ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Expert</span>
                </div>
              </div>
            </div>
            
            {/* Middle: Description */}
            <div className="md:w-2/5">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Right: Progress Bar */}
            <div className="md:w-1/4 w-full">
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-500">Proficiency</span>
                <span className="text-sm font-bold" style={{ color: color }}>
                  {percentage}%
                </span>
              </div>
              <ProgressBar percentage={percentage} color={color} />
              
              {/* Experience Level */}
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
                  {percentage >= 80 ? "Advanced" : percentage >= 60 ? "Intermediate" : "Beginner"}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Border Glow Effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            boxShadow: `0 0 40px ${color}40`,
            border: `1px solid ${color}20`
          }}
        ></div>
      </motion.div>
    </div>
  );
};

// Skill Section
const Skill = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Group skills by category for filtering
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Technical Expertise
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          My Skills & Technologies
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          A comprehensive overview of my technical proficiency across various technologies and frameworks
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {projects.filter(p => p.category === category).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Total Skills', value: projects.length, icon: '🎯' },
            { label: 'Avg. Proficiency', value: '81%', icon: '📊' },
            { label: 'Years Experience', value: '3+', icon: '⏳' },
            { label: 'Projects Built', value: '20+', icon: '🚀' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Visualization */}
      <ReactLenis root>
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="text-sm text-gray-500 mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto relative">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
              />
            </div>
          </motion.div>

          {filteredProjects.map((project, i) => {
            const targetScale = Math.max(0.8, 1 - (filteredProjects.length - i - 1) * 0.05);
            const rangeStart = i * 0.1;
            const rangeEnd = 1;

            return (
              <StickyCard
                key={i}
                i={i}
                title={project.title}
                src={project.src}
                description={project.description}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
                targetScale={targetScale}
                percentage={project.percentage}
                color={project.color}
                category={project.category}
              />
            );
          })}
        </main>
      </ReactLenis>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 px-4 max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div>
                <div className="font-medium">Advanced (80-100%)</div>
                <div className="text-sm text-gray-500">Production-ready expertise</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <div>
                <div className="font-medium">Intermediate (60-79%)</div>
                <div className="text-sm text-gray-500">Strong working knowledge</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
              <div>
                <div className="font-medium">Beginner (0-59%)</div>
                <div className="text-sm text-gray-500">Learning & exploring</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;