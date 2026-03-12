import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // Sample data for scrollable content
  const projects = [
    { id: 1, title: "AI-Powered Analytics Platform", year: 2024, tags: ["AI", "Analytics", "Cloud"] },
    { id: 2, title: "Real-time Data Pipeline", year: 2023, tags: ["ETL", "Kafka", "Spark"] },
    { id: 3, title: "Customer Segmentation ML Model", year: 2023, tags: ["ML", "Python", "Scikit-learn"] },
    { id: 4, title: "Big Data Warehouse Migration", year: 2022, tags: ["Snowflake", "dbt", "SQL"] },
    { id: 5, title: "Predictive Maintenance System", year: 2022, tags: ["IoT", "TensorFlow", "AWS"] },
    { id: 6, title: "Recommendation Engine", year: 2021, tags: ["Collaborative Filtering", "PyTorch"] },
    { id: 7, title: "Data Governance Framework", year: 2021, tags: ["Data Quality", "Governance"] },
    { id: 8, title: "Real-time Dashboard", year: 2020, tags: ["Tableau", "Redshift", "API"] },
    { id: 9, title: "NLP Sentiment Analysis", year: 2020, tags: ["NLP", "BERT", "Transformers"] },
    { id: 10, title: "Automated ETL Pipeline", year: 2019, tags: ["Airflow", "Python", "Docker"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        
        {/* Left Section - Stacked Content */}
        <div className="lg:w-2/5 p-8 bg-white/80 backdrop-blur-sm shadow-xl overflow-y-auto border-r border-gray-200">
          {/* Header with lead data scientist text */}
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Hello, I'm Lead Data Scientist
            </p>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Senior Data Engineer and Data Scientist Based in California, Los Angeles.
            </h1>
          </div>

          {/* DATA ANALYST badge with animation */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md">
              DATA ANALYST
            </span>
          </div>

          {/* Name and stats section with glass morphism effect */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-inner mb-8 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Andrew Ryan</h2>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed 8 Years
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-yellow-500 font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Awarded
                  </span>
                </div>
              </div>
              
              {/* Avatar with gradient */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-white">
                AR
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-2xl font-bold text-green-600">15+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>

          {/* Additional stacked content */}
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/30 rounded-r-lg">
              <h3 className="font-semibold text-gray-800">Core Expertise</h3>
              <p className="text-gray-600 text-sm">Machine Learning, Deep Learning, Big Data Architecture</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/30 rounded-r-lg">
              <h3 className="font-semibold text-gray-800">Tech Stack</h3>
              <p className="text-gray-600 text-sm">Python, TensorFlow, PySpark, SQL, AWS, GCP</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-lg">
              <h3 className="font-semibold text-gray-800">Education</h3>
              <p className="text-gray-600 text-sm">Ph.D. in Computer Science, Stanford University</p>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:w-3/5 bg-gray-50 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Sticky Tabs */}
            <div className="sticky top-0 bg-gray-50 py-4 z-10 mb-6 border-b border-gray-200">
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'projects' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setActiveTab('publications')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'publications' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Publications
                </button>
                <button 
                  onClick={() => setActiveTab('achievements')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'achievements' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Achievements
                </button>
              </div>
            </div>

            {/* Scrollable content items */}
            <div className="space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      {project.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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