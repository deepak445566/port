"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Enhanced skill data with 3D properties
const skillsData = [
  { 
    title: "CSS", 
    src: "/images/css.png", 
    description: "Creating visually stunning and responsive interfaces with modern CSS techniques.", 
    percentage: 90, 
    color: "#264de4", 
    category: "Frontend",
    orbitSpeed: 1.2,
    glowColor: "#4a6de8"
  },
  { 
    title: "Express.js", 
    src: "/images/express.png", 
    description: "Building scalable REST APIs and backend services with high performance.", 
    percentage: 75, 
    color: "#000000", 
    category: "Backend",
    orbitSpeed: 0.9,
    glowColor: "#333333"
  },
  { 
    title: "Framer Motion", 
    src: "/images/framer.png", 
    description: "Crafting smooth animations and interactive user experiences.", 
    percentage: 60, 
    color: "#ff4d88", 
    category: "Animation",
    orbitSpeed: 1.5,
    glowColor: "#ff6699"
  },
  { 
    title: "HTML5", 
    src: "/images/html.png", 
    description: "Semantic markup and modern web standards implementation.", 
    percentage: 95, 
    color: "#e34f26", 
    category: "Frontend",
    orbitSpeed: 1.1,
    glowColor: "#ff6b45"
  },
  { 
    title: "JavaScript", 
    src: "/images/js.png", 
    description: "Dynamic and interactive web applications with modern ES6+ features.", 
    percentage: 85, 
    color: "#f7df1e", 
    category: "Programming",
    orbitSpeed: 1.3,
    glowColor: "#fff056"
  },
  { 
    title: "MongoDB", 
    src: "/images/mongodb.png", 
    description: "Flexible document-based database for modern applications.", 
    percentage: 70, 
    color: "#47a248", 
    category: "Database",
    orbitSpeed: 0.8,
    glowColor: "#5ac05a"
  },
  { 
    title: "MySQL", 
    src: "/images/mysql.png", 
    description: "Relational database management for structured data solutions.", 
    percentage: 65, 
    color: "#4479a1", 
    category: "Database",
    orbitSpeed: 0.7,
    glowColor: "#5a8bb9"
  },
  { 
    title: "Node.js", 
    src: "/images/node.png", 
    description: "Server-side JavaScript runtime for building fast and scalable applications.", 
    percentage: 80, 
    color: "#339933", 
    category: "Backend",
    orbitSpeed: 1.0,
    glowColor: "#4cb24c"
  },
  { 
    title: "React.js", 
    src: "/images/react.png", 
    description: "Building dynamic and reusable user interfaces with modern React patterns.", 
    percentage: 92, 
    color: "#61dafb", 
    category: "Frontend",
    orbitSpeed: 1.4,
    glowColor: "#7de9ff"
  },
  { 
    title: "Redux", 
    src: "/images/redux.png", 
    description: "Predictable state management for complex React applications.", 
    percentage: 78, 
    color: "#764abc", 
    category: "State Management",
    orbitSpeed: 1.2,
    glowColor: "#8d5bd6"
  },
  { 
    title: "Tailwind CSS", 
    src: "/images/tailwind.png", 
    description: "Utility-first CSS framework for rapid UI development.", 
    percentage: 88, 
    color: "#06b6d4", 
    category: "CSS Framework",
    orbitSpeed: 1.3,
    glowColor: "#22d3ee"
  },
];

// 3D Orbital System Component
const OrbitalSystem = ({ activeIndex }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Central Sun */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          {/* Sun Core */}
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-60"></div>
          
          {/* Sun Surface */}
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-2xl shadow-yellow-500/50"></div>
        </div>
      </motion.div>

      {/* Orbiting Skills */}
      {skillsData.map((skill, index) => {
        const angle = (index / skillsData.length) * Math.PI * 2;
        const radius = 300 + index * 15;
        const x = Math.cos(angle + performance.now() * 0.0005 * skill.orbitSpeed) * radius;
        const y = Math.sin(angle + performance.now() * 0.0005 * skill.orbitSpeed) * radius;

        // Mouse influence
        const influencedX = x + mousePosition.x * 50;
        const influencedY = y + mousePosition.y * 50;

        return (
          <motion.div
            key={index}
            animate={{
              x: influencedX,
              y: influencedY,
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              ease: "linear",
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              activeIndex === index ? 'z-10 scale-125' : 'z-0 scale-100'
            }`}
          >
            {/* Orbit Trail */}
            <div 
              className="absolute w-2 h-2 rounded-full blur-sm"
              style={{ 
                backgroundColor: skill.glowColor,
                boxShadow: `0 0 20px ${skill.glowColor}`
              }}
            ></div>
            
            {/* Skill Orb */}
            <div className="relative group">
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-3 rounded-full blur-lg transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-30'
                }`}
                style={{ backgroundColor: skill.color }}
              ></div>
              
              {/* Skill Icon */}
              <div 
                className={`relative w-16 h-16 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index ? 'scale-125 shadow-2xl' : 'shadow-lg'
                }`}
              >
                <img 
                  src={skill.src} 
                  alt={skill.title} 
                  className="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Neural Connection Lines
const NeuralConnections = ({ activeIndex }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {skillsData.map((skill, i) => {
        if (activeIndex === i) {
          return skillsData.map((otherSkill, j) => {
            if (i !== j) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + Math.cos((j / skillsData.length) * Math.PI * 2) * 40}%`}
                  y2={`${50 + Math.sin((j / skillsData.length) * Math.PI * 2) * 40}%`}
                  stroke={skill.color}
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: j * 0.1
                  }}
                  className="blur-sm"
                />
              );
            }
            return null;
          });
        }
        return null;
      })}
    </svg>
  );
};

// Augmented Reality Skill Card
const ARSkillCard = ({ skill, isActive, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.8, opacity: 0, rotateY: -45 }}
      animate={{
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : 0.6,
        rotateY: isActive ? 0 : -15,
        x: isActive ? 0 : (index % 2 === 0 ? -20 : 20)
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.5
      }}
      className={`relative perspective-1000 cursor-pointer ${
        isActive ? 'z-20' : 'z-10'
      }`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Holographic Card */}
      <div className="relative rounded-3xl overflow-hidden transform-gpu preserve-3d">
        {/* Card Front */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
          {/* Holographic Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          
          {/* Animated Border */}
          <div 
            className="absolute inset-0 rounded-3xl p-[2px]"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, ${skill.color}00, ${skill.color}80, ${skill.color}00)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`
                  }}
                >
                  <img src={skill.src} alt={skill.title} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
                  <span className="text-sm text-gray-300">{skill.category}</span>
                </div>
              </div>
              
              {/* Percentage Display */}
              <div className="relative">
                <div className="w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: skill.percentage / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 line-clamp-2">{skill.description}</p>

            {/* Tech DNA Strand */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                <span className="text-sm text-gray-300">Tech DNA Sequence</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 4 }}
                    animate={{ 
                      height: idx < Math.floor(skill.percentage / 10) ? 24 : 4 
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="w-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  ></motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="flex gap-3">
              <button className="flex-1 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                View Projects
              </button>
              <button className="flex-1 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                Code Examples
              </button>
            </div>
          </div>
        </div>

        {/* Card Back - Holographic Projection */}
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: isActive ? 180 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 transform-gpu backface-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 20%, ${skill.color}20, transparent 50%)`
              }}
            ></div>
          </div>
          
          <div className="relative z-10">
            <h4 className="text-lg font-bold text-white mb-4">Technical Insights</h4>
            <div className="space-y-3">
              {['Performance', 'Scalability', 'Maintenance', 'Integration'].map((metric, idx) => (
                <div key={metric} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{metric}</span>
                  <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 60 + 40}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Energy Particles */}
      {isActive && (
        <div className="absolute -inset-4 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.1
              }}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: skill.color }}
            ></motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Main Skill Component
const Skill = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit', 'grid', 'neural'
  const containerRef = useRef(null);

  // Auto rotate through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skillsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* 3D Orbital System */}
      {viewMode === 'orbit' && <OrbitalSystem activeIndex={activeIndex} />}
      <NeuralConnections activeIndex={activeIndex} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-2 border-blue-500/30"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
            </motion.div>
            <span className="text-blue-400 font-mono text-sm tracking-widest">
              TECHNICAL UNIVERSE
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-2 border-purple-500/30"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mt-1"></div>
            </motion.div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Cosmos
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my technical universe where each skill orbits in perfect harmony, 
            creating a constellation of digital expertise
          </p>
        </motion.div>

        {/* View Mode Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-2xl bg-gray-900/50 backdrop-blur-sm p-1 border border-gray-700">
            {['orbit', 'grid', 'neural'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  viewMode === mode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)} View
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Skill Display */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <ARSkillCard 
                skill={skillsData[activeIndex]} 
                isActive={true} 
                index={activeIndex}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skill Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`relative p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-br from-white/20 to-white/10 border border-white/30'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            >
              {/* Active Indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeSkill"
                  className="absolute inset-0 rounded-2xl border-2"
                  style={{ borderColor: skill.color }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-3">
                  <img 
                    src={skill.src} 
                    alt={skill.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-white truncate">{skill.title}</h3>
                <div className="mt-2">
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex items-center gap-4 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-300">System Active</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % skillsData.length)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                →
              </button>
            </div>

            <div className="text-xs text-gray-400">
              {activeIndex + 1} / {skillsData.length}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skill;