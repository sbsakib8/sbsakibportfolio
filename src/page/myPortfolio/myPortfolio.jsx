"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Globe, Smartphone, Server, X, Calendar, Star, Users, Zap } from 'lucide-react';

const MyPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "MERN Stack",
      description: "Complete e-commerce solution with payment gateway, inventory management and admin dashboard",
      cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveDemo: "https://demo-ecommerce.com",
      githubRepo: "https://github.com/username/ecommerce-platform",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
      details: {
        overview: "এটি একটি সম্পূর্ণ e-commerce platform যেখানে users products browse করতে পারে, cart এ add করতে পারে, আর secure payment করতে পারে। Admin panel দিয়ে inventory management, order tracking সব করা যায়।",
        features: [
          "User Authentication & Authorization",
          "Product Catalog with Search & Filter", 
          "Shopping Cart & Wishlist",
          "Secure Payment Gateway Integration",
          "Order Management System",
          "Admin Dashboard",
          "Real-time Inventory Updates",
          "Email Notifications"
        ],
        challenges: "Payment gateway integration আর real-time inventory update সবচেয়ে challenging ছিল। Socket.io দিয়ে real-time features implement করেছি।",
        duration: "3 months",
        teamSize: "Solo Project"
      },
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI Chatbot Assistant",
      category: "AI Development",
      description: "Intelligent chatbot with NLP capabilities for customer support automation",
      cover: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
      liveDemo: "https://ai-chatbot-demo.com",
      githubRepo: "https://github.com/username/ai-chatbot",
      technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "React", "WebSocket"],
      details: {
        overview: "এই AI chatbot natural language processing করে customer queries handle করে। Machine learning models দিয়ে train করা যেটা context বুঝে appropriate response দেয়।",
        features: [
          "Natural Language Understanding",
          "Context-aware Conversations",
          "Multi-language Support",
          "Sentiment Analysis",
          "Integration with CRM Systems",
          "Custom Training Data",
          "Real-time Chat Interface",
          "Analytics Dashboard"
        ],
        challenges: "Natural language understanding আর context maintenance সবচেয়ে complex part ছিল। Custom training data prepare করে model fine-tune করতে হয়েছে।",
        duration: "4 months",
        teamSize: "2 developers"
      },
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "Python Development",
      description: "Interactive dashboard for business intelligence and data visualization",
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveDemo: "https://analytics-dashboard-demo.com",
      githubRepo: "https://github.com/username/analytics-dashboard",
      technologies: ["Python", "Django", "Pandas", "Plotly", "PostgreSQL", "Celery"],
      details: {
        overview: "Business intelligence dashboard যেখানে complex data কে interactive charts আর graphs দিয়ে visualize করা হয়। Real-time data processing আর automated reporting system আছে।",
        features: [
          "Real-time Data Processing",
          "Interactive Charts & Graphs",
          "Custom Report Generation",
          "Data Export Functionality",
          "User Role Management",
          "Automated Email Reports",
          "API Integration",
          "Mobile Responsive Design"
        ],
        challenges: "Large dataset processing আর real-time updates handle করা challenging ছিল। Celery দিয়ে background tasks optimize করেছি।",
        duration: "2.5 months",
        teamSize: "Solo Project"
      },
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Task Management App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for team collaboration and project management",
      cover: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveDemo: "https://taskmanager-app.com",
      githubRepo: "https://github.com/username/task-manager-app",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Async Storage"],
      details: {
        overview: "Team collaboration এর জন্য mobile app যেখানে tasks assign করা, progress track করা আর team members দের সাথে communicate করা যায়। Offline support আর push notifications আছে।",
        features: [
          "Task Creation & Assignment",
          "Team Collaboration",
          "Push Notifications",
          "Offline Data Sync",
          "File Attachments",
          "Progress Tracking",
          "Time Tracking",
          "Dark Mode Support"
        ],
        challenges: "Offline data synchronization আর cross-platform compatibility ensure করা complex ছিল। Redux Persist দিয়ে state management করেছি।",
        duration: "3.5 months",
        teamSize: "3 developers"
      },
      gradient: "from-pink-500 via-red-500 to-orange-500"
    },
    {
      id: 5,
      title: "Restaurant POS System",
      category: "Full Stack",
      description: "Point of sale system for restaurants with inventory and staff management",
      cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      liveDemo: "https://restaurant-pos-demo.com",
      githubRepo: "https://github.com/username/restaurant-pos",
      technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Socket.io", "Electron"],
      details: {
        overview: "Restaurant management এর জন্য complete POS system। Order management, inventory tracking, staff scheduling আর sales analytics - সব features আছে।",
        features: [
          "Order Management",
          "Inventory Tracking",
          "Staff Management",
          "Sales Analytics",
          "Kitchen Display System",
          "Receipt Printing",
          "Multi-location Support",
          "Payment Processing"
        ],
        challenges: "Real-time order tracking আর inventory management system complex ছিল। Socket.io দিয়ে kitchen display system implement করেছি।",
        duration: "5 months",
        teamSize: "4 developers"
      },
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Education Tech",
      description: "Online learning platform with video streaming and progress tracking",
      cover: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      liveDemo: "https://lms-platform-demo.com",
      githubRepo: "https://github.com/username/lms-platform",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "WebRTC", "Stripe"],
      details: {
        overview: "Online education platform যেখানে instructors courses create করতে পারে, students enroll করে video lessons দেখতে পারে। Progress tracking আর certification system আছে।",
        features: [
          "Course Management",
          "Video Streaming",
          "Live Classes with WebRTC",
          "Student Progress Tracking",
          "Quiz & Assignment System",
          "Certificate Generation",
          "Payment Integration",
          "Discussion Forums"
        ],
        challenges: "Video streaming optimization আর live class functionality implement করা challenging ছিল। AWS S3 দিয়ে video storage করেছি।",
        duration: "6 months",
        teamSize: "5 developers"
      },
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openLiveDemo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold  mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            আমার প্রোজেক্ট পোর্টফোলিও
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            বিভিন্ন প্রযুক্তি ব্যবহার করে তৈরি করা আমার কিছু উল্লেখযোগ্য প্রোজেক্ট
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Cover Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.cover} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => openLiveDemo(project.liveDemo)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-scale-in">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedProject.gradient} p-6 rounded-t-2xl relative`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/80 text-lg mb-4">{selectedProject.description}</p>
                  <div className="flex items-center space-x-6 text-white/70">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.details.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{selectedProject.details.teamSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Links */}
              <div className="flex space-x-4 mb-8">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-lg hover:scale-105 transition-transform duration-300`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-400" />
                  প্রোজেক্ট সম্পর্কে
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-green-400" />
                  প্রধান ফিচারসমূহ
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-purple-400" />
                  ব্যবহৃত প্রযুক্তি
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Server className="w-6 h-6 mr-2 text-orange-400" />
                  চ্যালেঞ্জ ও সমাধান
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.details.challenges}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MyPortfolio;