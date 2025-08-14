import React from 'react';
import { FileText } from 'lucide-react';
const Footer = () => (
  <footer className="relative z-10 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-10 mt-20">
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-all duration-500">
              PROFITO
            </h3>
            <p className="text-gray-400">Professional Writing Excellence</p>
          </div>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Elevate your professional communication with cutting-edge writing strategies 
          and expert insights designed for the modern workplace.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;