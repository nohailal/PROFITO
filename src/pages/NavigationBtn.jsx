import React from 'react';

const NavButton = ({ isActive, onClick, icon, label, activeColor, gradientColors }) => (
  <button
    onClick={onClick}
    className={`relative py-6 px-8 transition-all duration-500 group transform hover:scale-105 ${
      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
    }`}
  >
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? `${activeColor} shadow-lg scale-110 animate-pulse` 
          : 'bg-white bg-opacity-10 group-hover:bg-opacity-20 group-hover:scale-110'
      }`}>
        {icon}
      </div>
      <span className="font-semibold text-lg">{label}</span>
    </div>
    {isActive && (
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColors} animate-pulse`}></div>
    )}
  </button>
);

export default NavButton;