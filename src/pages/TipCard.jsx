import { ChevronDown, Lightbulb } from 'lucide-react'; 
import React from 'react';
const TipCard = ({ tip, isExpanded, onToggle, index, hoveredCard, setHoveredCard }) => (
  <div 
    className={`bg-white rounded-lg shadow-lg border border-gray-200 mb-6 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
      isExpanded ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
    }`}
    style={{ 
      transitionDelay: `${index * 150}ms`,
      animation: `fadeInUp 0.6s ease-out ${index * 150}ms both`
    }}
    onMouseEnter={() => setHoveredCard(tip.id)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div className={`h-1 ${tip.color} transition-all duration-300`} 
         style={{height: hoveredCard === tip.id ? '4px' : '2px'}} />
    <button
      onClick={onToggle}
      className="w-full p-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${tip.color} text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          {tip.icon}
        </div>
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {tip.title}
        </h3>
      </div>
      <div className={`transform transition-all duration-300 ${isExpanded ? 'rotate-180' : ''} group-hover:scale-110`}>
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="px-6 pb-6 border-t border-gray-100">
        <div className="mt-4 space-y-4" style={{animation: isExpanded ? 'slideInFromLeft 0.5s ease-out' : ''}}>
          <p className="text-gray-700 leading-relaxed">{tip.content}</p>
          {tip.example && (
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="p-1 bg-yellow-100 rounded mr-2 animate-pulse">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                </div>
                Example:
              </h4>
              <pre className="text-sm text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
                {tip.example}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
export default TipCard;
 