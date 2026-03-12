import React from 'react';

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        
        {/* Left Section - Stacked Content (40% width on large screens) */}
        <div className="lg:w-2/5 p-8 bg-white shadow-lg overflow-y-auto">
          {/* Header with lead data scientist text */}
          <div className="mb-6">
            <p className="text-sm font-medium text-blue-600 mb-2">
              Hello, I'm Lead Data Scientist
            </p>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Senior Data Engineer and Data Scientist Based in California, Los Angeles.
            </h1>
          </div>

          {/* DATA ANALYST badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-lg">
              DATA ANALYST
            </span>
          </div>

          {/* Name and stats section */}
          <div className="flex items-center justify-between bg-gray-100 p-6 rounded-xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Andrew Ryan</h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-gray-600">Completed 8 Years</span>
                <span className="text-gray-400">|</span>
                <span className="text-yellow-500 font-semibold">Awarded</span>
              </div>
            </div>
            
            {/* Optional avatar/image placeholder */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              AR
            </div>
          </div>

          {/* Additional stacked content - you can add more here */}
          <div className="mt-8 space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Experience</h3>
              <p className="text-gray-600 text-sm">8+ years in data science and engineering</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600 text-sm">Los Angeles, California</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800">Specialization</h3>
              <p className="text-gray-600 text-sm">Machine Learning, Big Data, Analytics</p>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable Content (60% width on large screens) */}
        <div className="lg:w-3/5 bg-gray-100 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 sticky top-0 bg-gray-100 py-2">
              Professional Timeline & Projects
            </h2>

            {/* Scrollable content items */}
            <div className="space-y-6">
              {/* Content items - these will scroll */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div 
                  key={item} 
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {item}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Project Title {item}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Completed: Year {2020 + item}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      Data Science
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                      Python
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;