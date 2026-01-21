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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Development Process
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured approach from concept to launch and beyond
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Step Number Background */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-50 rounded-br-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">{step.number}</span>
              </div>
              
              {/* Step Content */}
              <div className="pt-12 pb-8 px-6 sm:px-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative Line */}
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-6 mb-6"></div>
            </div>
          ))}
        </div>

        {/* Made in Europe Banner */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-6 bg-blue-600 rounded-sm"></div>
                  <div className="w-3 h-6 bg-yellow-500 rounded-sm"></div>
                  <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  Made in Europe
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Crafted with precision and attention to detail
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-xs text-gray-500">Steps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-xs text-gray-500">Commitment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>This component is fully responsive and optimized for all screen sizes</p>
          <div className="flex justify-center space-x-2 mt-2">
            <span className="px-2 py-1 bg-gray-200 rounded text-xs">Mobile</span>
            <span className="px-2 py-1 bg-gray-200 rounded text-xs">Tablet</span>
            <span className="px-2 py-1 bg-gray-200 rounded text-xs">Desktop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;