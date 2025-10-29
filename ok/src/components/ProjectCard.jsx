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
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-violet-200 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
        
        {/* Tech Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 bg-violet-600 text-white text-xs rounded-full font-medium shadow-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 bg-white/90 text-gray-600 text-xs rounded-full font-medium shadow-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Hover Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          <a
            href={project.liveUrl}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.githubUrl}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="relative p-6 flex flex-col h-48">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-violet-700 transition-colors duration-300 line-clamp-2 flex-1 pr-4">
            {project.title}
          </h3>
          
          {/* Arrow Indicator */}
          <div className="text-gray-300 group-hover:text-violet-500 transform group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>
        
        {/* Features/Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.slice(0, 4).map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-violet-100 hover:text-violet-700 transition-all duration-200 border border-transparent hover:border-violet-200"
            >
              {feature}
            </span>
          ))}
          {project.features.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium">
              +{project.features.length - 4} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-violet-100 transition-colors duration-300">
          <span className="text-violet-600 font-semibold text-xs flex items-center group-hover:gap-1 transition-all duration-300">
            View Project
            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-0 group-hover:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <div className="text-xs text-gray-400 group-hover:text-violet-400 transition-colors duration-300">
            Click to explore
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
};

export default ProjectCard;