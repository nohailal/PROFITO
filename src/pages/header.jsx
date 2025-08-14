import React from 'react'
import { FileText } from 'lucide-react';
const Header = ({ isLoaded }) => (
  <header className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm border-b border-white border-opacity-20">
    <div className="container mx-auto px-6 py-8">
      <div className={`flex items-center space-x-4 transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <FileText className="w-10 h-10 text-white" />
        </div>
        <div>
          <h1 className="text-5xl font-black text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-500">
            PROFITO
          </h1>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <p className="text-gray-200 text-lg">
              Master professional writing with AI-powered insights
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;