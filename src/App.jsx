import React, { useState, useEffect } from 'react';
import {
  ChevronDown, ChevronRight, FileText, User, Award, Briefcase, GraduationCap,
  Mail, Phone, MapPin, Star, CheckCircle, AlertCircle, BookOpen, Target, Lightbulb,
  Sparkles, Zap, TrendingUp, Linkedin, Send, FileEdit, PenTool, ClipboardEdit,
  LayoutTemplate, FileSearch, FileInput, FileOutput, FilePlus, FileMinus, FileCheck,
  FileX, FileBarChart, FileSpreadsheet, FileCode, FileImage, FileAudio, FileVideo
} from 'lucide-react';

// Animated Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient Orbs */}
    <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full opacity-20 animate-pulse" 
         style={{filter: 'blur(40px)', animation: 'float 6s ease-in-out infinite'}}></div>
    <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full opacity-20 animate-pulse" 
         style={{animationDelay: '2s', filter: 'blur(40px)', animation: 'float 8s ease-in-out infinite reverse'}}></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500 rounded-full opacity-20 animate-pulse" 
         style={{animationDelay: '4s', filter: 'blur(40px)', animation: 'float 7s ease-in-out infinite'}}></div>
    
    {/* Floating Icons */}
    <div className="absolute animate-bounce opacity-60" 
         style={{top: '20%', left: '10%', animationDelay: '0s', animationDuration: '3s'}}>
      <Sparkles className="w-6 h-6 text-purple-300" />
    </div>
    <div className="absolute animate-bounce opacity-60" 
         style={{top: '60%', right: '15%', animationDelay: '1s', animationDuration: '3s'}}>
      <Zap className="w-8 h-8 text-cyan-300" />
    </div>
    <div className="absolute animate-bounce opacity-60" 
         style={{bottom: '30%', left: '80%', animationDelay: '2s', animationDuration: '3s'}}>
      <TrendingUp className="w-5 h-5 text-pink-300" />
    </div>
    
    {/* CSS for custom animations */}
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(5deg); }
        66% { transform: translateY(10px) rotate(-3deg); }
      }
      @keyframes slideInFromLeft {
        0% { transform: translateX(-100px) opacity(0); }
        100% { transform: translateX(0) opacity(1); }
      }
      @keyframes slideInFromRight {
        0% { transform: translateX(100px) opacity(0); }
        100% { transform: translateX(0) opacity(1); }
      }
      @keyframes fadeInUp {
        0% { transform: translateY(30px) opacity(0); }
        100% { transform: translateY(0) opacity(1); }
      }
    `}</style>
  </div>
);

// Header Component
const Header = ({ isLoaded }) => (
  <header className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm border-b border-white border-opacity-20">
    <div className="container mx-auto px-6 py-8">
      <div className={`flex items-center space-x-4 transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <img 
            src="/public/profitoLogo.png" 
            alt="PROFITO Icon" 
            className="w-10 h-10 text-white"
          />
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

// Navigation Component
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

// Navigation Button Component
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

// Tip Card Component
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

// Sidebar Card Component
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

// Section Header Component
const SectionHeader = ({ title, subtitle, isLoaded }) => (
  <div className={`mb-12 text-center transform transition-all duration-700 ${
    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  }`}>
    <h2 className="text-4xl font-bold text-white mb-6 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-500">
      {title}
    </h2>
    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

// Main Section Component
const MainSection = ({ 
  title, 
  subtitle, 
  tips, 
  sidebarItems, 
  expandedTip, 
  setExpandedTip, 
  section, 
  isLoaded, 
  hoveredCard, 
  setHoveredCard 
}) => (
  <div className={`transform transition-all duration-700 ${
    isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
  }`}>
    <SectionHeader title={title} subtitle={subtitle} isLoaded={isLoaded} />
    
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <div className={`w-1 h-8 bg-gradient-to-b ${
            section === 'cv' ? 'from-blue-500 to-purple-600' : 
            section === 'cover-letter' ? 'from-indigo-500 to-blue-600' :
            section === 'linkedin' ? 'from-sky-500 to-blue-600' :
            'from-emerald-500 to-cyan-600'
          } mr-4`}></div>
          {section === 'cv' ? 'Essential CV Elements' : 
           section === 'cover-letter' ? 'Key Cover Letter Components' :
           section === 'linkedin' ? 'Critical LinkedIn Profile Sections' :
           'Core Report Components'}
        </h3>
        {tips.map((tip, index) => (
          <TipCard
            key={tip.id}
            tip={tip}
            index={index}
            isExpanded={expandedTip === `${section}-${tip.id}`}
            onToggle={() =>
              setExpandedTip(
                expandedTip === `${section}-${tip.id}` ? null : `${section}-${tip.id}`
              )
            }
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))}
      </div>
      
      <div className="lg:col-span-1 space-y-6">
        {sidebarItems.map((item, index) => (
          <div key={index} style={{animation: `slideInFromRight 0.6s ease-out ${index * 200}ms both`}}>
            <SidebarCard {...item} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Footer Component
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

// Main App Component
const CVReportGuide = () => {
  const [activeSection, setActiveSection] = useState('cv');
  const [expandedTip, setExpandedTip] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cvTips = [
    {
      id: 1,
      title: "Contact Information",
      icon: <Mail className="w-5 h-5" />,
      content: "Include your full name, professional email, phone number, and LinkedIn profile. Avoid personal details like age, marital status, or photo unless required.",
      example: "John Smith | john.smith@email.com | +1-555-0123 | linkedin.com/in/johnsmith",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Professional Summary",
      icon: <User className="w-5 h-5" />,
      content: "Write 2-3 sentences highlighting your key qualifications, experience, and career goals. Tailor this to each job application.",
      example: "Experienced marketing professional with 5+ years in digital campaigns. Proven track record of increasing brand engagement by 40%. Seeking to leverage data-driven strategies at a growth-focused company.",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Work Experience",
      icon: <Briefcase className="w-5 h-5" />,
      content: "List jobs in reverse chronological order. Use action verbs and quantify achievements with numbers, percentages, or dollar amounts.",
      example: "• Managed a team of 8 marketing specialists\n• Increased social media engagement by 65%\n• Generated $2.3M in additional revenue through campaign optimization",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Skills Section",
      icon: <Award className="w-5 h-5" />,
      content: "Include both technical and soft skills relevant to the job. Organize into categories like 'Technical Skills' and 'Languages' for clarity.",
      example: "Technical: Python, SQL, Tableau, Google Analytics\nSoft Skills: Leadership, Problem-solving, Communication\nLanguages: English (Native), Spanish (Conversational)",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Education",
      icon: <GraduationCap className="w-5 h-5" />,
      content: "Include degree, institution, graduation year, and GPA if above 3.5. Add relevant coursework, honors, or certifications.",
      example: "Bachelor of Science in Marketing\nUniversity of California, Los Angeles | 2019\nRelevant Coursework: Digital Marketing, Consumer Psychology, Data Analytics",
      color: "bg-indigo-500"
    }
  ];

  const coverLetterTips = [
    {
      id: 1,
      title: "Personalized Greeting",
      icon: <User className="w-5 h-5" />,
      content: "Address the letter to a specific person whenever possible. Research to find the hiring manager's name rather than using 'To Whom It May Concern'.",
      example: "Dear Ms. Johnson,\n\nDear Hiring Manager Jones,",
      color: "bg-indigo-500"
    },
    {
      id: 2,
      title: "Strong Opening",
      icon: <Zap className="w-5 h-5" />,
      content: "Start with a compelling first paragraph that grabs attention. Mention the position you're applying for and why you're excited about it.",
      example: "I was thrilled to discover the Senior Product Designer position at Innovatech. With my 5 years of experience creating user-centered designs that increased engagement by 40%, I'm confident I can contribute meaningfully to your team.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Relevant Achievements",
      icon: <Star className="w-5 h-5" />,
      content: "Highlight 2-3 key accomplishments that directly relate to the job requirements. Use numbers to quantify your impact.",
      example: "At my current position at TechSolutions, I led a redesign of the mobile app that resulted in a 25% increase in user retention and a 40% reduction in support tickets related to navigation issues.",
      color: "bg-violet-500"
    },
    {
      id: 4,
      title: "Company Alignment",
      icon: <Target className="w-5 h-5" />,
      content: "Show that you've researched the company and explain why you're a good fit for their culture and mission.",
      example: "Acme Corp's commitment to sustainable innovation aligns perfectly with my passion for developing eco-friendly packaging solutions. I was particularly impressed by your recent partnership with GreenEarth Initiative.",
      color: "bg-sky-500"
    },
    {
      id: 5,
      title: "Call to Action",
      icon: <Send className="w-5 h-5" />,
      content: "End with a confident closing paragraph that expresses your enthusiasm for an interview and includes a call to action.",
      example: "I would welcome the opportunity to discuss how my skills and experience align with your needs. Please feel free to contact me at (555) 123-4567 or jane.doe@email.com to schedule an interview. Thank you for your time and consideration.",
      color: "bg-cyan-500"
    }
  ];

  const linkedinTips = [
    {
      id: 1,
      title: "Professional Headline",
      icon: <User className="w-5 h-5" />,
      content: "Create a compelling headline that goes beyond your job title. Include your specialty, value proposition, or what makes you unique.",
      example: "Digital Marketing Specialist | SEO & Content Strategy Expert | Driving 300% Growth for E-commerce Brands",
      color: "bg-sky-500"
    },
    {
      id: 2,
      title: "About Section",
      icon: <FileEdit className="w-5 h-5" />,
      content: "Write a compelling summary in first-person that tells your professional story, highlights key achievements, and includes relevant keywords.",
      example: "I'm a data-driven marketing professional with 7 years of experience helping SaaS companies scale through strategic digital campaigns. My expertise lies in...\n\nKey Achievements:\n- Grew organic traffic by 250% in 12 months\n- Reduced CAC by 40% through campaign optimization\n- Built and led a high-performing marketing team",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Experience Section",
      icon: <Briefcase className="w-5 h-5" />,
      content: "Go beyond job descriptions. Highlight achievements with metrics and include media like presentations, videos, or links to projects.",
      example: "Senior Marketing Manager @ TechSolutions (2019-Present)\n- Led rebranding initiative that increased brand awareness by 35%\n- Managed $1.2M annual marketing budget with 22% ROI\n- Grew LinkedIn following from 5K to 25K in 18 months",
      color: "bg-indigo-500"
    },
    {
      id: 4,
      title: "Skills & Endorsements",
      icon: <Award className="w-5 h-5" />,
      content: "Select relevant skills and prioritize them. The top 3 skills appear prominently, so choose strategically based on your goals.",
      example: "Top Skills:\n1. Digital Marketing Strategy\n2. Google Analytics\n3. Content Marketing\n4. SEO\n5. Social Media Marketing",
      color: "bg-purple-500"
    },
    {
      id: 5,
      title: "Recommendations",
      icon: <PenTool className="w-5 h-5" />,
      content: "Request recommendations from colleagues, managers, and clients. Offer to write them first to make it easier for others.",
      example: "Sample request message:\n'Hi [Name], I'm working on strengthening my LinkedIn profile and would greatly value your perspective. Would you be willing to write a brief recommendation about our work together on [specific project]? I'd be happy to reciprocate!'",
      color: "bg-violet-500"
    }
  ];

  const reportTips = [
    {
      id: 1,
      title: "Executive Summary",
      icon: <Target className="w-5 h-5" />,
      content: "Write this last but place it first. Summarize key findings, conclusions, and recommendations in 1-2 paragraphs.",
      example: "This report analyzes Q3 sales performance, revealing a 15% increase in revenue despite market challenges. Key recommendations include expanding the digital marketing budget and entering two new market segments.",
      color: "bg-emerald-500"
    },
    {
      id: 2,
      title: "Clear Structure",
      icon: <BookOpen className="w-5 h-5" />,
      content: "Use headings, subheadings, and bullet points. Follow a logical flow: Introduction → Methodology → Findings → Analysis → Recommendations → Conclusion.",
      example: "1. Introduction\n2. Research Methodology\n3. Key Findings\n4. Analysis & Discussion\n5. Recommendations\n6. Conclusion\n7. Appendices",
      color: "bg-violet-500"
    },
    {
      id: 3,
      title: "Data Visualization",
      icon: <Star className="w-5 h-5" />,
      content: "Include charts, graphs, and tables to support your findings. Ensure all visuals are clearly labeled and referenced in the text.",
      example: "Figure 1 shows the 25% increase in customer satisfaction scores over six months, with the highest improvement in the 25-34 age demographic.",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      title: "Actionable Recommendations",
      icon: <CheckCircle className="w-5 h-5" />,
      content: "Provide specific, measurable recommendations with timelines and responsible parties. Prioritize recommendations by impact and feasibility.",
      example: "Recommendation 1 (High Priority): Implement customer feedback system by Q1 2024\nRecommendation 2 (Medium Priority): Expand team by 2 members by Q2 2024",
      color: "bg-rose-500"
    },
    {
      id: 5,
      title: "Professional Formatting",
      icon: <FileText className="w-5 h-5" />,
      content: "Use consistent fonts, spacing, and formatting. Include page numbers, headers, and a table of contents for longer reports.",
      example: "Font: 12pt Times New Roman or Calibri\nSpacing: 1.5 line spacing\nMargins: 1 inch on all sides\nHeaders: Include report title and page numbers",
      color: "bg-cyan-500"
    }
  ];

  const cvSidebarItems = [
    {
      title: "Avoid These Mistakes",
      icon: { element: <AlertCircle className="w-5 h-5 text-white" />, bgColor: "bg-red-500" },
      items: [
        "Using an unprofessional email address",
        "Including irrelevant work experience",
        "Having spelling or grammar errors",
        "Using the same CV for every job application",
        "Making the CV too long (keep it 1-2 pages)",
        "Forgetting to update contact information"
      ],
      type: "mistakes",
      bgColor: "bg-red-500 bg-opacity-20",
      borderColor: "border-red-500 border-opacity-30",
      itemColor: "text-red-100"
    },
    {
      title: "Success Checklist",
      icon: { element: <CheckCircle className="w-5 h-5 text-white" />, bgColor: "bg-green-500" },
      items: [
        "Professional email address",
        "Tailored to job description",
        "Quantified achievements",
        "Proofread for errors",
        "1-2 pages maximum",
        "Updated contact information"
      ],
      type: "checklist",
      bgColor: "bg-green-500 bg-opacity-20",
      borderColor: "border-green-500 border-opacity-30",
      itemColor: "text-green-100"
    }
  ];

  const coverLetterSidebarItems = [
    {
      title: "Common Pitfalls",
      icon: { element: <AlertCircle className="w-5 h-5 text-white" />, bgColor: "bg-red-500" },
      items: [
        "Generic content not tailored to the job",
        "Repeating your CV without adding context",
        "Being too formal or too casual",
        "Focusing on what you want rather than what you offer",
        "Making it too long (1 page maximum)",
        "Not proofreading for errors"
      ],
      type: "mistakes",
      bgColor: "bg-red-500 bg-opacity-20",
      borderColor: "border-red-500 border-opacity-30",
      itemColor: "text-red-100"
    },
    {
      title: "Structure Template",
      icon: { element: <LayoutTemplate className="w-5 h-5 text-white" />, bgColor: "bg-blue-500" },
      items: [
        "Header (Your Contact Info & Date)",
        "Employer Contact Information",
        "Salutation",
        "Opening Paragraph (Hook)",
        "Body Paragraphs (2-3 key points)",
        "Closing Paragraph (Call to Action)",
        "Complimentary Close"
      ],
      type: "structure",
      bgColor: "bg-blue-500 bg-opacity-20",
      borderColor: "border-blue-500 border-opacity-30",
      itemColor: "text-blue-100"
    }
  ];

  const linkedinSidebarItems = [
    {
      title: "Profile Mistakes",
      icon: { element: <AlertCircle className="w-5 h-5 text-white" />, bgColor: "bg-red-500" },
      items: [
        "Unprofessional profile photo",
        "Incomplete or outdated profile",
        "Not customizing your public URL",
        "Using buzzwords without substance",
        "Not engaging with your network",
        "Ignoring the Featured section"
      ],
      type: "mistakes",
      bgColor: "bg-red-500 bg-opacity-20",
      borderColor: "border-red-500 border-opacity-30",
      itemColor: "text-red-100"
    },
    {
      title: "Optimization Tips",
      icon: { element: <FileSearch className="w-5 h-5 text-white" />, bgColor: "bg-sky-500" },
      items: [
        "Use a professional headshot with good lighting",
        "Customize your profile URL (linkedin.com/in/yourname)",
        "Add a background photo that reflects your brand",
        "Use keywords strategically for SEO",
        "Post regularly to establish thought leadership",
        "Join and participate in relevant groups"
      ],
      type: "tips",
      bgColor: "bg-sky-500 bg-opacity-20",
      borderColor: "border-sky-500 border-opacity-30",
      itemColor: "text-sky-100"
    }
  ];

  const reportSidebarItems = [
    {
      title: "Common Pitfalls",
      icon: { element: <AlertCircle className="w-5 h-5 text-white" />, bgColor: "bg-red-500" },
      items: [
        "Burying key findings in dense text",
        "Not backing up claims with data",
        "Writing overly technical language for general audiences",
        "Forgetting to proofread for errors",
        "Not including an executive summary",
        "Missing citations and references"
      ],
      type: "mistakes",
      bgColor: "bg-red-500 bg-opacity-20",
      borderColor: "border-red-500 border-opacity-30",
      itemColor: "text-red-100"
    },
    {
      title: "Structure Template",
      icon: { element: <BookOpen className="w-5 h-5 text-white" />, bgColor: "bg-blue-500" },
      items: [
        "Title Page", "Executive Summary", "Table of Contents", "Introduction",
        "Methodology", "Findings", "Analysis", "Recommendations",
        "Conclusion", "References", "Appendices"
      ],
      type: "structure",
      bgColor: "bg-blue-500 bg-opacity-20",
      borderColor: "border-blue-500 border-opacity-30",
      itemColor: "text-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <AnimatedBackground />
      <Header isLoaded={isLoaded} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 container mx-auto px-6 py-12">
        {activeSection === 'cv' && (
          <MainSection
            title="CV Writing Mastery"
            subtitle="Create compelling CVs that captivate recruiters and unlock career opportunities. Transform your experience into powerful narratives that demand attention."
            tips={cvTips}
            sidebarItems={cvSidebarItems}
            expandedTip={expandedTip}
            setExpandedTip={setExpandedTip}
            section="cv"
            isLoaded={isLoaded}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        )}

        {activeSection === 'cover-letter' && (
          <MainSection
            title="Cover Letter Excellence"
            subtitle="Craft personalized cover letters that complement your CV and showcase your unique value proposition. Learn to connect your skills to employer needs."
            tips={coverLetterTips}
            sidebarItems={coverLetterSidebarItems}
            expandedTip={expandedTip}
            setExpandedTip={setExpandedTip}
            section="cover-letter"
            isLoaded={isLoaded}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        )}

        {activeSection === 'linkedin' && (
          <MainSection
            title="LinkedIn Profile Optimization"
            subtitle="Build a powerful LinkedIn presence that attracts recruiters and opportunities. Transform your profile into a dynamic professional showcase."
            tips={linkedinTips}
            sidebarItems={linkedinSidebarItems}
            expandedTip={expandedTip}
            setExpandedTip={setExpandedTip}
            section="linkedin"
            isLoaded={isLoaded}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        )}

        {activeSection === 'report' && (
          <MainSection
            title="Report Writing Excellence"
            subtitle="Craft compelling reports that drive decision-making and showcase your analytical prowess. Learn to present complex information with clarity and impact."
            tips={reportTips}
            sidebarItems={reportSidebarItems}
            expandedTip={expandedTip}
            setExpandedTip={setExpandedTip}
            section="report"
            isLoaded={isLoaded}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CVReportGuide;