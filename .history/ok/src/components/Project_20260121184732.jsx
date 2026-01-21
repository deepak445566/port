import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import AnimatedButton from "./v1/AnimatedButton";

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
      liveUrl: "https://digitalexpressindia.com/",
      githubUrl: "#",
      status: "Live",
      rating: 4.7,
      progress: 100
    },
    {
      id: 5,
      title: "Online Learning Platform",
      description: "Educational institute website with course management, student tracking, and virtual classroom.",
      image: "/images/kl.jpg",
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
// Single Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <a 
      href={project.liveUrl}  // यहाँ liveUrl use करें
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl h-full block alan" // rounded-xl और rounded-2xl conflict था
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover  duration-300 group-hover:scale-103 transition-all "
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-2 flex flex-col ">
         <div className="mt-4 h-[70%]">
        
         </div>

        {/* Bottom Section - Technologies */}
        <div className="mt-24 h-[40%]">
           <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm hidden lg:block">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Arrow - Desktop only */}
        <div className="hidden lg:block absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

// Desktop Pair Card Component
const DesktopProjectPair = ({ i, pair, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky -top-[10vh] lg:-top-50 flex items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 20 + 250}px)` }}
        className="relative -top-1/4 origin-top flex rounded-2xl 
          w-[90vw] h-[400px]           /* mobile height */
          lg:h-[400px] lg:w-[1100px]   /* desktop */
        "
      >
        {/* Desktop: Two cards side by side */}
        <div className="hidden lg:flex w-full h-full gap-10">
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
                  className="h-[500px] w-full" // Mobile पर हर card की height
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
           <button
  onClick={() => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className=" hidden bg-[#212121] border-none px-7 py-2 rounded-full active:scale-95 transition-all text-white pop font-semibold magnet "
>
  <AnimatedButton text="CONTACT" />
</button>
        </ReactLenis>
        
      </div>
    </>
  );
};

export default Skiper;