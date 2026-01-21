import React from 'react';

const ProjectProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Plan & Architect",
      description: "Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints."
    },
    {
      number: "02",
      title: "Build & Develop",
      description: "Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable."
    },
    {
      number: "03",
      title: "Launch & Support",
      description: "I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Process Steps - Stacked vertically like the image */}
        <div className="space-y-16 md:space-y-20">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
            >
              {/* Step Number - Left side */}
              <div className="md:w-1/12">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              
              {/* Content - Right side */}
              <div className="md:w-11/12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                  {step.description}
                </p>
                
                {/* Separator line - only between items */}
                {index < processSteps.length - 1 && (
                  <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 relative">
                    {/* Optional: Add a small circle at the end of the line */}
                    <div className="absolute -top-1.5 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Made in Europe Footer - Simple and clean */}
        <div className="mt-20 md:mt-24 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side with flag colors and text */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              {/* European flag colors - vertical stripes */}
              <div className="flex space-x-1">
                <div className="w-2 h-8 bg-blue-600"></div>
                <div className="w-2 h-8 bg-red-600"></div>
                <div className="w-2 h-8 bg-yellow-500"></div>
              </div>
              
              {/* Made in Europe text */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">
                  Made in Europe
                </h3>
                {/* Simple line for separation if needed */}
                <div className="h-0.5 w-12 bg-gray-900 mt-1"></div>
              </div>
            </div>
            
            {/* Optional: Simple stats or keep it minimal */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Available for projects</span>
              </div>
            </div>
          </div>
          
          {/* Optional: Add a very subtle decorative element */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>

        {/* Simple responsive indicator - can be removed for production */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Mobile optimized</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Tablet ready</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Desktop perfect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;