import React from 'react';

const SidebarCard = ({ title, icon, items, type, bgColor, borderColor, itemColor }) => (
  <div className={`${bgColor} backdrop-blur-sm border ${borderColor} rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
      <div className={`p-2 ${icon.bgColor} rounded-lg mr-3 animate-pulse hover:animate-spin`}>
        {icon.element}
      </div>
      {title}
    </h3>
    {type === 'mistakes' ? (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className={`${itemColor} flex items-start group cursor-pointer`}>
            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 group-hover:scale-150 transition-all duration-300"></div>
            <span className="group-hover:text-white transition-colors duration-300">{item}</span>
          </li>
        ))}
      </ul>
    ) : type === 'checklist' ? (
      <div className="space-y-3">
        {items.map((item, index) => (
          <label key={index} className="flex items-center group cursor-pointer hover:bg-white hover:bg-opacity-10 p-2 rounded transition-all duration-300">
            <input type="checkbox" className="mr-3 w-4 h-4 text-green-500 transition-all duration-300 hover:scale-125" />
            <span className={`${itemColor} group-hover:text-white transition-colors duration-300`}>{item}</span>
          </label>
        ))}
      </div>
    ) : type === 'structure' ? (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center group cursor-pointer hover:bg-white hover:bg-opacity-10 p-2 rounded transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {index + 1}
            </div>
            <span className={`${itemColor} group-hover:text-white transition-colors duration-300`}>{item}</span>
          </div>
        ))}
      </div>
    ) : (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className={`${itemColor} flex items-start group cursor-pointer`}>
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 group-hover:scale-150 transition-all duration-300"></div>
            <span className="group-hover:text-white transition-colors duration-300">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SidebarCard;