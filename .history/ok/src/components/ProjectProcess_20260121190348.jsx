import React, { useState, useEffect } from 'react';
import { 
  FiTarget, 
  FiCode, 
  FiRocket, 
  FiChevronRight, 
  FiGlobe,
  FiCheckCircle,
  FiZap,
  FiUsers
} from 'react-icons/fi';

const ProjectProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Plan & Architect",
      description: "Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.",
      icon: <FiTarget className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      features: ["Requirement Analysis", "Tech Stack Selection", "Architecture Design"],
      delay: "delay-0"
    },
    {
      number: "02",
      title: "Build & Develop",
      description: "Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable.",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      features: ["Frontend Development", "Backend APIs", "Quality Testing"],
      delay: "delay-100"
    },
    {
      number: "03",
      title: "Launch & Support",
      description: "I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.",
      icon: <FiRocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      features: ["Deployment", "Performance Monitoring", "Continuous Updates"],
      delay: "delay-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <FiZap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Development Workflow</h2>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Crafting <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to launch—a journey of precision, innovation, and continuous support
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center transition-all duration-300 ${index === activeStep ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${index === activeStep ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium ${index === activeStep ? 'text-white' : 'text-gray-400'}`}>
                  Step {step.number}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - 3D Card Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${index === activeStep ? 'scale-105 z-10' : 'scale-95'}`}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:border-transparent">
                {/* Animated Number */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12`}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-end mb-6">
                  <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center text-gray-800 transform transition-all duration-500 group-hover:scale-110`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <FiCheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Button */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-400">Click for details</span>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-90`}>
                    <FiChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Made in Europe - Premium Footer */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-1 rounded-full">
              <span className="text-sm font-semibold text-white">Premium Quality</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side - European Excellence */}
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              {/* Animated Flag */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
                <div className="absolute inset-4 bg-red-600 rounded-full animate-pulse delay-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiGlobe className="w-8 h-8 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  Made in Europe
                  <span className="ml-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-semibold rounded-full">
                    Premium
                  </span>
                </h3>
                <p className="text-gray-400">
                  Crafted with precision, backed by European engineering excellence
                </p>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="flex space-x-8">
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-400">Quality</div>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">∞</div>
                <div className="text-sm text-gray-400">Updates</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">ISO Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-gray-400">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-600"></div>
                <span className="text-gray-400">Enterprise Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiUsers className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-400">Client-First Approach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-16 rounded-lg bg-gradient-to-b from-blue-500 to-purple-500 flex items-end justify-center pb-2">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 mt-2">Mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="w-10 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 mt-2">Tablet</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-14 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-8 h-1 bg-white rounded-full ml-2"></div>
              </div>
              <span className="text-xs text-gray-400 mt-2">Desktop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;