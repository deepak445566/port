// components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl hover:shadow-violet-900/20 transition-all duration-300 overflow-hidden border border-gray-700 hover:border-violet-500/50 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/0 via-violet-900/10 to-purple-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'} z-0`} />
        
        {/* Tech Tags - Floating */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 left-4 flex flex-wrap gap-2 z-20"
        >
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-700/90 to-purple-700/90 text-white text-xs rounded-lg font-medium shadow-lg backdrop-blur-sm border border-violet-500/30"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm text-gray-300 text-xs rounded-lg font-medium shadow-lg border border-gray-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </motion.div>

        {/* Live Preview & GitHub Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 right-4 flex gap-3 z-20"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            className="p-3 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl hover:from-violet-800 hover:to-purple-800 transition-all duration-300 shadow-2xl border border-gray-700 hover:border-violet-500/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            className="p-3 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl hover:from-violet-800 hover:to-purple-800 transition-all duration-300 shadow-2xl border border-gray-700 hover:border-violet-500/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="relative p-6 flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-xs text-violet-400 font-medium px-2 py-1 bg-violet-900/30 rounded-md border border-violet-800/50">
                {project.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {project.date}
              </span>
            </div>
          </div>
          
          {/* Arrow Indicator */}
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            className="text-gray-600 group-hover:text-violet-400 transition-colors duration-300 flex-shrink-0 mt-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {project.description}
        </p>
        
        {/* Features/Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.features.slice(0, 4).map((feature, featureIndex) => (
            <motion.span
              key={featureIndex}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-xs font-medium hover:bg-violet-900/30 hover:text-violet-200 transition-all duration-200 border border-gray-700 hover:border-violet-700 backdrop-blur-sm"
            >
              {feature}
            </motion.span>
          ))}
          {project.features.length > 4 && (
            <span className="px-3 py-1.5 bg-gray-800/30 text-gray-400 rounded-lg text-xs font-medium backdrop-blur-sm">
              +{project.features.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-violet-900 transition-colors duration-300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-purple-700 text-white font-medium rounded-lg text-sm flex items-center gap-2 hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-violet-900/30 border border-violet-600/50"
          >
            <span>View Details</span>
            <motion.svg
              animate={{ x: isHovered ? 3 : 0 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
          
          <div className="text-xs text-gray-500 group-hover:text-violet-400 transition-colors duration-300 flex items-center">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
            Active Project
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute top-0 -left-full group-hover:left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-violet-500/30"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-violet-500/30"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-violet-500/30"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-violet-500/30"></div>
    </motion.div>
  );
};

export default ProjectCard;