import React from 'react';

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        
        {/* Left Section - Fixed (2 parts) */}
        <div className="lg:w-2/5 bg-white border-r border-gray-200 flex flex-col">
          
          {/* Part 1: Notification Bar - Top part */}
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Bell Icon with notification dot */}
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </div>
                <span className="text-sm font-medium text-gray-700">Notifications</span>
              </div>
              <span className="text-xs text-blue-600 cursor-pointer hover:underline">View all</span>
            </div>
            
            {/* Sample notification preview */}
            <div className="mt-3 bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">New message</span> from recruitment team
              </p>
              <p className="text-xs text-gray-400 mt-1">2 min ago</p>
            </div>
          </div>

          {/* Part 2: Profile Section - Main content */}
          <div className="p-6 flex-1">
            {/* Hello, I'm Lead Data Scientist */}
            <p className="text-sm text-gray-500 mb-3">
              Hello, I'm Lead Data Scientist
            </p>
            
            {/* Main heading */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Senior Data Engineer and Data Scientist Based in California, Los Angeles.
            </h1>

            {/* DATA ANALYST */}
            <div className="mb-6">
              <span className="font-bold text-gray-900 text-base">
                DATA ANALYST
              </span>
            </div>

            {/* Profile info with avatar */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Andrew Ryan
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <span>Completed 8 Years</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-900 font-medium">Awarded</span>
                </div>
              </div>
              
              {/* Profile Avatar/Circle */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                AR
              </div>
            </div>

            {/* Additional profile details */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Los Angeles, California</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:w-3/5 bg-gray-50 p-6 overflow-y-auto">
          <div className="space-y-4">
            {/* Section header */}
            <h3 className="text-lg font-semibold text-gray-800 sticky top-0 bg-gray-50 py-2">
              Recent Activity
            </h3>

            {/* Scrollable items */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div 
                key={item} 
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    {item}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Activity Item {item}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      This is a description of the activity that will scroll on the right side.
                    </p>
                    <span className="text-xs text-gray-400 mt-2 block">
                      2 hours ago
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;