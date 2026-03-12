import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        
        {/* Left Section - Stacked Content (exactly as in screenshot) */}
        <div className="lg:w-2/5 p-8 bg-white border-r border-gray-200">
          {/* Hello, I'm Lead Data Scientist - exactly as in image */}
          <p className="text-sm text-gray-500 mb-2">
            Hello, I'm Lead Data Scientist
          </p>
          
          {/* Main heading - exactly as in image */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Senior Data Engineer and Data Scientist Based in California, Los Angeles.
          </h1>

          {/* DATA ANALYST - bold and prominent like in image */}
          <div className="mb-6">
            <span className="font-bold text-gray-900 text-lg">
              DATA ANALYST
            </span>
          </div>

          {/* Name and stats - exactly as in image */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Andrew Ryan
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Completed 8 Years</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-900 font-medium">Awarded</span>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:w-3/5 bg-white p-8 overflow-y-auto">
          <div className="space-y-6">
            {/* Sample content items that will scroll */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div 
                key={item} 
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Project Title {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;