// components/ProjectsSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Grocery Platform",
      description: "Full-stack e-commerce solution with modern UI, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind","JWT"],
      features: ["User Panel", "Admin Panel", "Responsive"],
      category: "mern",
      liveUrl: "https://gro-livid.vercel.app/",
      githubUrl: "#"
    },
   {
  id: 2,
  title: "Social Media Website",
  description:
    "Connect, collaborate, and grow your professional network. This platform empowers individuals to showcase their skills, discover career opportunities, and build meaningful professional connections—all in one place.",
  image:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
  technologies: ["React", "Material UI","Mongodb","Express"],
  features: [
    "social media",
    "Professional profile creation",
    "Team and network building"
  ],
  category: "mern",
  liveUrl: "https://game-tawny-nine-64.vercel.app/",
  githubUrl: "#"
}
,
    {
  id: 3,
  title: "Zerodha Clone (Frontend)",
  description:
    "A clean and responsive frontend clone of Zerodha's trading platform, built to replicate its modern UI, layout, and design aesthetics using React and Tailwind CSS.",
  image:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80",
  technologies: ["React", "Tailwind CSS", "Chart.js"],
  features: [
    "Modern Zerodha UI",
    "Responsive design",
    "Interactive charts "
  ],
  category: "frontend",
  liveUrl: "#",
  githubUrl: "#"
}
,
  {
  id: 4,
  title: "CraftoWeb – Digital Agency Website",
  description:
    "CraftoWeb is a modern digital agency website that offers web development, digital marketing, SEO, and graphic design services. The site features a sleek, responsive layout with smooth animations and a professional look.",
  image:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
  technologies: ["React", "Tailwind CSS", "Framer Motion"],
  features: [
    " modern UI",
    "Fully responsive",
    "Service showcase "
  ],
  category: "frontend",
  liveUrl: "https://shery-l3ot.vercel.app/",
  githubUrl: "#"
}
,
   {
  id: 5,
  title: "Despa Classes Website",
  description: "Educational website for an institute providing online courses, class schedules, and student progress tracking.",
  image: "https://plus.unsplash.com/premium_vector-1682303857527-678977df77de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  technologies: ["React", "Tailwind CSS", "Firebase"],
  features: ["Online Courses", "Student Dashboard", "Announcements"],
  category: "frontend",
  liveUrl: "https://despaclasses.vercel.app",
  githubUrl: "#"
}

,
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern portfolio website with animations, dark mode, and contact form.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      features: ["Animation", "Dark Mode", "Contact"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Front-end ' },
    { id: 'backend', name: 'Backend' },
    { id: 'mern', name: 'Mern' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className=" ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl big mb-4">
           MY PROJECTS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mont">
            Here are some of my recent works that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12" id="project"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#80D9CF] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;