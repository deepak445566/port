"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Your project data with percentage
const projects = [
  { title: "CSS", src: "/images/css.png", description: "Used for styling and designing visually appealing, responsive web pages.", percentage: 90 },
  { title: "Express.js", src: "/images/express.png", description: "A lightweight Node.js framework for building fast and scalable backend APIs.", percentage: 75 },
  { title: "Framer Motion", src: "/images/framer.png", description: "A React animation library for creating smooth and interactive UI motion effects.", percentage: 60 },
  { title: "HTML5", src: "/images/html.png", description: "The standard markup language for creating the structure of web pages.", percentage: 95 },
  { title: "JavaScript", src: "/images/js.png", description: "The core programming language of the web used for dynamic and interactive websites.", percentage: 85 },
  { title: "MongoDB", src: "/images/mongodb.png", description: "A NoSQL database used to store data in flexible, JSON-like documents.", percentage: 70 },
  { title: "MySQL", src: "/images/mysql.png", description: "A reliable relational database management system for structured data storage.", percentage: 65 },
  { title: "Node.js", src: "/images/node.png", description: "A JavaScript runtime used to build scalable backend and server-side applications.", percentage: 80 },
  { title: "React.js", src: "/images/react.png", description: "A popular JavaScript library for building fast, reusable, and dynamic user interfaces.", percentage: 92 },
  { title: "Redux", src: "/images/redux.png", description: "A predictable state management library for maintaining data flow in large React apps.", percentage: 78 },
  { title: "Tailwind CSS", src: "/images/tailwind.png", description: "A utility-first CSS framework for building modern, responsive designs quickly.", percentage: 88 },
];

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative w-full h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-inner">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      
      {/* Filled Bar with gradient */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative h-full rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
        
        {/* Shimmer effect */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
      </motion.div>
      
      {/* Percentage Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute -right-8 top-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold rounded-lg shadow-lg">
            {percentage}%
          </div>
          {/* Pointer */}
          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-500"></div>
        </div>
      </motion.div>
    </div>
  );
};

// Card Component - Enhanced Design
const StickyCard = ({ i, title, src, description, progress, range, targetScale, percentage }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [0.8, 1]);

  return (
    <div className="sticky top-20 flex items-center justify-center my-10 px-4">
      <motion.div
        style={{ scale, opacity }}
        className="relative flex flex-col overflow-hidden rounded-3xl w-[85vw] max-w-5xl h-auto md:h-[28vh] group"
      >
        {/* Background Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 rounded-full blur-xl"></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 h-full p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
            
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-6 md:w-2/5">
              {/* Logo Container with Glow */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    className="h-14 w-14 object-contain" 
                    src={src} 
                    alt={title} 
                  />
                </div>
              </div>
              
              {/* Title and Rating */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {title}
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-5 h-5"
                        fill={idx < Math.floor(percentage/20) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {percentage >= 80 ? "Expert" : percentage >= 60 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Middle: Description */}
            <div className="md:w-2/5">
              <p className="text-gray-600 text-base leading-relaxed font-light">
                {description}
              </p>
            </div>
            
            {/* Right: Progress Bar */}
            <div className="md:w-1/4 w-full">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Mastery Level</span>
                  <div className="text-xs text-gray-500">Proficiency</div>
                </div>
                <ProgressBar percentage={percentage} />
              </div>
              
              {/* Experience Indicator */}
              <div className="mt-6 text-center">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-50 to-white text-gray-700 text-sm font-semibold rounded-full shadow-sm border border-gray-200">
                  {percentage}% Proficient
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Border Effects */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700"></div>
      </motion.div>
    </div>
  );
};

// Skill Section - Enhanced Design
const Skill = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Skill categories
  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects by category
  const getCategory = (title) => {
    if (["CSS", "HTML5", "React.js", "Tailwind CSS"].includes(title)) return "Frontend";
    if (["Express.js", "Node.js"].includes(title)) return "Backend";
    if (["MongoDB", "MySQL"].includes(title)) return "Database";
    return "Tools";
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => getCategory(p.title) === activeCategory);

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-blue-50 py-20">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400/0 via-blue-500 to-blue-400/0 rounded-full"></div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-1 rounded-full">
            Technical Stack
          </span>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-500 to-cyan-400/0 rounded-full"></div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A comprehensive display of my technical proficiency across modern web development technologies
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-md border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {[
            { label: 'Total Skills', value: projects.length, icon: '📊', color: 'from-blue-400 to-cyan-400' },
            { label: 'Avg. Mastery', value: `${Math.round(projects.reduce((a, b) => a + b.percentage, 0) / projects.length)}%`, icon: '🎯', color: 'from-emerald-400 to-teal-400' },
            { label: 'Top Skills', value: 'React, Node, Tailwind', icon: '🚀', color: 'from-purple-400 to-pink-400' },
            { label: 'Years Exp.', value: '3+ Years', icon: '⏳', color: 'from-orange-400 to-yellow-400' }
          ].map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className={`text-2xl mb-3 inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Container */}
      <div className="relative w-full">
        {/* Background Decoration */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="text-sm text-gray-500 mb-2 font-medium">Scroll to explore skills</div>
          <div className="w-8 h-12 border-2 border-gray-300 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </motion.div>

        {/* Skills Cards */}
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center"
        >
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
              />
            );
          })}
        </main>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 px-4 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Proficiency Scale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { range: "90-100%", level: "Expert", desc: "Production-ready, can mentor others", color: "from-emerald-400 to-green-500" },
              { range: "70-89%", level: "Advanced", desc: "Strong working knowledge", color: "from-cyan-400 to-blue-500" },
              { range: "Below 70%", level: "Learning", desc: "Actively learning and applying", color: "from-blue-400 to-indigo-500" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className={`w-16 h-2 rounded-full mb-4 bg-gradient-to-r ${item.color}`}></div>
                <div className="text-lg font-bold text-gray-800">{item.level}</div>
                <div className="text-sm text-gray-600 mb-2">{item.range}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skill;