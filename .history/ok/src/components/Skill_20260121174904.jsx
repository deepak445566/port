"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

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
 {
  title: "Next.js",
  src: "/images/next.png",
  description: "A React framework for building fast, SEO-friendly, and full-stack web applications with features like SSR, SSG, routing, and API routes.",
  percentage: 85
}

];

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full relative">
      {/* Filled Bar */}
      <div
        className="h-3 rounded-full bg-[#a8faf2] transition-all duration-700"
        style={{ width: `${percentage}%` }}
      ></div>

      {/* Percentage Badge (moved according to % value) */}
      <span
        className="absolute top-1/2 -translate-y-1/2 text-xs font-bold text-black bg-[#6BD2C7] px-2 py-0.5 rounded-full transition-all duration-700"
        style={{ left: `calc(${percentage}% - 20px)` }} // 20px adjust for center
      >
        {percentage}%
      </span>
    </div>
  );
};

// Card Component
const StickyCard_001 = ({ i, title, src, description, progress, range, targetScale, percentage }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
 <div className="sticky top-20 flex items-center justify-center my-10 px-4">
  <motion.div
    style={{ scale }}
    className="relative flex flex-col overflow-hidden rounded-2xl w-[80vw] h-auto md:h-[30vh] shadow-lg"
  >
    <div className="h-full w-full bg-[radial-gradient(125%_125%_at_50%_90%,_#ffffff_40%,_#14b8a6_100%)] bg-[length:100%_100%] transition-all">
      
      {/* 🔹 Upper section (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start h-auto md:h-[70%] p-4">
        
        {/* 🖼 Image */}
        <div className="flex justify-center items-center w-full md:w-[20%] mb-4 md:mb-0">
          <img className="h-[8vh] md:h-[12vh]" src={src} alt={title} />
        </div>

        {/* 📝 Title + Description */}
        <div className="text-black md:w-[80%] text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold big">{title}</h2>
          <p className="text-sm sm:text-base mt-1 font-light mont">{description}</p>
        </div>
      </div>

      {/* 🔹 Progress bar */}
      <div className="flex items-center justify-center px-4 md:px-6 pb-4 md:pb-0">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
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

  return (
    <section className="w-full flex flex-col items-center  ">
      <h2 className="text-5xl big mt-20 mb-16 relative group uppercase">
        My Creative Tools
      </h2>

      <ReactLenis root>
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center pb-[10vh] transition-all"
        >
          {projects.map((project, i) => {
            const targetScale = Math.max(0.5, 1 - (projects.length - i - 1) * 0.1);
            const rangeStart = i * 0.1;
            const rangeEnd = 1;

            return (
              <StickyCard_001
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
      </ReactLenis>
    </section>
  );
};

export default Skill;
