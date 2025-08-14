import React from 'react';
import { 
  User, 
  Send, 
  Linkedin, 
  FileText 
} from 'lucide-react';
const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="relative z-10 bg-white bg-opacity-5 backdrop-blur-sm border-b border-white border-opacity-10">
    <div className="container mx-auto px-6">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <NavButton
          isActive={activeSection === 'cv'}
          onClick={() => setActiveSection('cv')}
          icon={<User className="w-5 h-5" />}
          label="CV Writing"
          activeColor="bg-blue-500"
          gradientColors="from-blue-500 to-purple-600"
        />
        <NavButton
          isActive={activeSection === 'cover-letter'}
          onClick={() => setActiveSection('cover-letter')}
          icon={<Send className="w-5 h-5" />}
          label="Cover Letters"
          activeColor="bg-indigo-500"
          gradientColors="from-indigo-500 to-blue-600"
        />
        <NavButton
          isActive={activeSection === 'linkedin'}
          onClick={() => setActiveSection('linkedin')}
          icon={<Linkedin className="w-5 h-5" />}
          label="LinkedIn Profile"
          activeColor="bg-sky-500"
          gradientColors="from-sky-500 to-blue-600"
        />
        <NavButton
          isActive={activeSection === 'report'}
          onClick={() => setActiveSection('report')}
          icon={<FileText className="w-5 h-5" />}
          label="Report Writing"
          activeColor="bg-emerald-500"
          gradientColors="from-emerald-500 to-cyan-600"
        />
      </div>
    </div>
  </nav>
);

export default Navigation;