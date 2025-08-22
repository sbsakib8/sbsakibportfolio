"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Globe, Smartphone, Server, X, Calendar, Star, Users, Zap, Loader2 } from 'lucide-react';

const MyPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "MERN Stack",
      description: "Complete e-commerce solution with payment gateway, inventory management and admin dashboard",
      cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveDemo: "https://demo-ecommerce.com",
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
      details: {
        overview: "A comprehensive e-commerce platform where users can browse products, add to cart, and make secure payments. Includes an admin panel for inventory management and order tracking.",
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
        challenges: "Payment gateway integration and real-time inventory updates were the most challenging aspects. Implemented real-time features using Socket.io for seamless user experience.",
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
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "React", "WebSocket"],
      details: {
        overview: "An AI-powered chatbot that processes natural language to handle customer queries. Built with machine learning models trained to understand context and provide appropriate responses.",
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
        challenges: "Natural language understanding and context maintenance were the most complex challenges. Custom training data was prepared to fine-tune the model for better accuracy.",
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
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["Python", "Django", "Pandas", "Plotly", "PostgreSQL", "Celery"],
      details: {
        overview: "A business intelligence dashboard that visualizes complex data through interactive charts and graphs. Features real-time data processing and automated reporting system.",
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
        challenges: "Large dataset processing and real-time updates handling were challenging. Optimized background tasks using Celery for better performance.",
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
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Async Storage"],
      details: {
        overview: "A mobile app for team collaboration where tasks can be assigned, progress tracked, and team members can communicate. Features offline support and push notifications.",
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
        challenges: "Offline data synchronization and cross-platform compatibility were complex challenges. Implemented state management using Redux Persist for reliable data handling.",
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
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Socket.io", "Electron"],
      details: {
        overview: "A complete POS system for restaurant management including order management, inventory tracking, staff scheduling, and sales analytics.",
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
        challenges: "Real-time order tracking and inventory management system were complex. Implemented kitchen display system using Socket.io for seamless operations.",
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
      githubRepo: "https://github.com/sbsakib8",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "WebRTC", "Stripe"],
      details: {
        overview: "An online education platform where instructors can create courses and students can enroll to watch video lessons. Features progress tracking and certification system.",
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
        challenges: "Video streaming optimization and live class functionality implementation were challenging. Used AWS S3 for efficient video storage and delivery.",
        duration: "6 months",
        teamSize: "5 developers"
      },
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    }
  ];

  // Simulate loading time and preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(project.id));
            resolve();
          };
          img.onerror = resolve; // Continue even if image fails to load
          img.src = project.cover;
        });
      });

      // Wait for all images to load or timeout after 3 seconds
      await Promise.all(imagePromises);
      
      // Additional loading time for smoother experience
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    loadImages();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const openLiveDemo = (url) => {
    window.open(url, '_blank');
  };

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        {/* Loading Content */}
        <div className="text-center z-10">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin animate-reverse mx-auto mt-2 ml-2"></div>
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Loading Portfolio
          </h2>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-lg">Preparing amazing projects...</span>
          </div>

          {/* Loading Progress */}
          <div className="mt-8 w-64 mx-auto">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
              My Project Portfolio
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
            Showcasing innovative projects built with cutting-edge technologies and creative solutions
          </p>
          
          {/* Stats Section */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center animate-fade-in-up animation-delay-500">
              <div className="text-2xl font-bold text-white">{projects.length}+</div>
              <div className="text-gray-400"> Top Projects</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-700">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-900">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-700 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/30 animate-slide-in-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Project Cover Image */}
              <div className="relative overflow-hidden h-48 group-hover:h-52 transition-all duration-700">
                <img 
                  src={project.cover} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 mx-auto transform scale-0 group-hover:scale-100 transition-transform duration-500 animation-delay-200">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-300">
                      View Details
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 group-hover:p-7 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full hover:bg-white/10 transition-colors duration-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLiveDemo(project.liveDemo);
                    }}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 transform hover:shadow-purple-500/50`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white/5 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>

              {/* Click handler for the entire card */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => openModal(project)}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-800/90 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-white/20 animate-scale-in-bounce shadow-2xl">
            {/* Enhanced Modal Header */}
            <div className={`bg-gradient-to-r ${selectedProject.gradient} p-8 rounded-t-3xl relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-2 right-2  text-white hover:text-gray-200 transition-all duration-300 p-3 rounded-full hover:bg-white/20 transform hover:scale-110 hover:rotate-90 z-10"
              >
                <X className="w-6 h-6 " />
              </button>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-3 animate-slide-in-left">{selectedProject.title}</h3>
                    <p className="text-white/90 text-xl mb-6 animate-slide-in-left animation-delay-200 max-w-3xl leading-relaxed">{selectedProject.description}</p>
                    <div className="flex items-center space-x-8 text-white/80 animate-slide-in-left animation-delay-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{selectedProject.details.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">{selectedProject.details.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Modal Content */}
            <div className="p-8 space-y-8">
              {/* Project Links */}
              <div className="flex flex-wrap gap-4 animate-slide-in-up">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              {/* Overview */}
              <div className="animate-slide-in-up animation-delay-200">
                <h4 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-7 h-7 mr-3 text-yellow-400" />
                  Project Overview
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Features */}
              <div className="animate-slide-in-up animation-delay-400">
                <h4 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Zap className="w-7 h-7 mr-3 text-green-400" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 transform hover:scale-105"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${selectedProject.gradient} rounded-full animate-pulse`}></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="animate-slide-in-up animation-delay-600">
                <h4 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Brain className="w-7 h-7 mr-3 text-purple-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl text-sm font-medium hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="animate-slide-in-up animation-delay-800">
                <h4 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Server className="w-7 h-7 mr-3 text-orange-400" />
                  Challenges & Solutions
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
                  {selectedProject.details.challenges}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Styles */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-3000 {
          animation-delay: 3000ms;
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes scale-in-bounce {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animate-scale-in-bounce {
          animation: scale-in-bounce 0.6s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1.5s ease-out forwards;
          width: 0;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
          width: 0%;
        }

        .animate-reverse {
          animation: reverse 3s linear infinite;
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #a855f7, #2563eb);
        }

        /* Enhanced hover effects */
        .group:hover .animate-pulse {
          animation-duration: 0.5s;
        }

        /* Glassmorphism enhancement */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Custom gradient text animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Enhanced card hover glow */
        .group:hover {
          box-shadow: 
            0 0 20px rgba(139, 92, 246, 0.3),
            0 0 40px rgba(59, 130, 246, 0.2),
            0 0 80px rgba(147, 51, 234, 0.1);
        }

        /* Particle effect simulation */
        .animate-particle {
          animation: particle-float 10s ease-in-out infinite;
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(5px) translateX(-5px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-5px) translateX(10px) scale(1.05);
            opacity: 0.9;
          }
        }

        /* Text typing effect */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
        }

        /* Enhanced modal backdrop */
        .modal-backdrop {
          backdrop-filter: blur(10px) saturate(150%);
          -webkit-backdrop-filter: blur(10px) saturate(150%);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .animate-fade-in-up h2 {
            font-size: 3rem;
          }
        }

        @media (max-width: 640px) {
          .animate-fade-in-up h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MyPortfolio;