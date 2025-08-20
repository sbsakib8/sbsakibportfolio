"use client"
import React, { useState, useEffect } from 'react';
import { Code, Brain, Database, Server, Smartphone, Globe, Bot, Zap, Settings, X, Loader2, Sparkles, CheckCircle, Star, ArrowRight, Clock, Users, Target, TrendingUp } from 'lucide-react';

const MyServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState({});
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0
  });

  // Loading simulation
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    return () => clearInterval(loadingInterval);
  }, []);

  // Stagger card animations
  useEffect(() => {
    if (!isLoading) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => ({ ...prev, [index]: true }));
        }, index * 150);
      });

      // Animate stats
      const targets = { clients: 50, projects: 100, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      const intervals = Object.keys(targets).map(key => {
        const target = targets[key];
        const step = target / steps;
        let current = 0;

        return setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(intervals[Object.keys(targets).indexOf(key)]);
          }
          setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isLoading]);

  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      icon: <Globe className="w-8 h-8" />,
      description: "Full-stack web development using MongoDB, Express.js, React.js & Node.js",
      shortDescription: "Complete web solutions with modern JavaScript stack",
      duration: "2-6 weeks",
      complexity: "Advanced",
      details: {
        overview: "I develop complete web applications using the modern MERN stack. Interactive frontends with React.js, robust backends with Node.js/Express, and efficient database management with MongoDB.",
        features: [
          "Responsive React.js Applications",
          "RESTful API Development",
          "MongoDB Database Design",
          "Express.js Backend Architecture",
          "Authentication & Authorization",
          "Real-time Features with Socket.io",
          "Payment Gateway Integration",
          "Performance Optimization"
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.io", "Stripe"],
        pricing: "Starting from $2000",
        deliverables: ["Source Code", "Documentation", "Deployment", "Testing"]
      },
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400"
    },
    {
      id: 2,
      title: "AI Agent Development",
      icon: <Bot className="w-8 h-8" />,
      description: "Intelligent automation solutions and AI-powered applications",
      shortDescription: "Smart automation with cutting-edge AI technology",
      duration: "3-8 weeks",
      complexity: "Expert",
      details: {
        overview: "I develop advanced AI agents that can automate complex tasks. From natural language processing to intelligent automation - I provide all types of AI solutions.",
        features: [
          "Custom AI Chatbots",
          "Natural Language Processing",
          "Computer Vision Applications",
          "Intelligent Process Automation",
          "Machine Learning Model Integration",
          "AI-powered Data Analysis",
          "Voice Recognition Systems",
          "Predictive Analytics Solutions"
        ],
        technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "Streamlit", "FastAPI", "Docker"],
        pricing: "Starting from $3000",
        deliverables: ["AI Model", "Integration Code", "Training Data", "Documentation"]
      },
      gradient: "from-green-400 via-blue-500 to-purple-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-400"
    },
    {
      id: 3,
      title: "Python Development",
      icon: <Code className="w-8 h-8" />,
      description: "Backend development, data science, and automation with Python",
      shortDescription: "Versatile Python solutions for modern businesses",
      duration: "1-4 weeks",
      complexity: "Intermediate",
      details: {
        overview: "I develop versatile solutions with Python - from web scraping to data analysis, automation scripts to REST APIs. I write clean, efficient, and maintainable code.",
        features: [
          "Web Scraping & Data Mining",
          "Django/Flask Web Applications",
          "Data Analysis & Visualization",
          "API Development & Integration",
          "Automation Scripts",
          "Database Management",
          "Testing & Quality Assurance",
          "DevOps & Deployment"
        ],
        technologies: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "BeautifulSoup", "Selenium", "PostgreSQL"],
        pricing: "Starting from $1500",
        deliverables: ["Python Scripts", "Documentation", "Setup Guide", "Support"]
      },
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-400"
    },
    {
      id: 4,
      title: "Database Solutions",
      icon: <Database className="w-8 h-8" />,
      description: "Database design, optimization and management",
      shortDescription: "Scalable database architecture and optimization",
      duration: "1-3 weeks",
      complexity: "Intermediate",
      details: {
        overview: "I design efficient database architectures that are scalable and performance optimized. I work with all types of databases from SQL to NoSQL.",
        features: [
          "Database Schema Design",
          "Query Optimization",
          "Data Migration Services",
          "Backup & Recovery Solutions",
          "Performance Tuning",
          "Database Security",
          "Replication Setup",
          "Monitoring & Maintenance"
        ],
        technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Sequelize"],
        pricing: "Starting from $1000",
        deliverables: ["Database Schema", "Migration Scripts", "Documentation", "Optimization Report"]
      },
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-400"
    },
    {
      id: 5,
      title: "API Development",
      icon: <Server className="w-8 h-8" />,
      description: "RESTful APIs and microservices architecture",
      shortDescription: "Robust APIs and microservices for scalable systems",
      duration: "2-5 weeks",
      complexity: "Advanced",
      details: {
        overview: "I develop robust and scalable APIs that support third-party integrations. I build enterprise-level solutions with microservices architecture.",
        features: [
          "RESTful API Design",
          "GraphQL Implementation",
          "Microservices Architecture",
          "API Documentation",
          "Rate Limiting & Security",
          "Third-party Integrations",
          "Webhook Development",
          "API Testing & Monitoring"
        ],
        technologies: ["Express.js", "FastAPI", "GraphQL", "Swagger", "Postman", "JWT", "OAuth", "Docker"],
        pricing: "Starting from $1800",
        deliverables: ["API Endpoints", "Documentation", "Testing Suite", "Deployment Guide"]
      },
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-400"
    },
    {
      id: 6,
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Cross-platform mobile applications",
      shortDescription: "Native-performance apps for iOS and Android",
      duration: "4-10 weeks",
      complexity: "Advanced",
      details: {
        overview: "I develop cross-platform mobile apps with React Native. Cost-effective solutions for both iOS and Android using the same codebase.",
        features: [
          "Cross-platform Development",
          "Native Performance",
          "Push Notifications",
          "Offline Functionality",
          "App Store Deployment",
          "In-app Purchases",
          "Social Media Integration",
          "Analytics & Crash Reporting"
        ],
        technologies: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage", "React Navigation", "Flipper", "CodePush"],
        pricing: "Starting from $2500",
        deliverables: ["Mobile App", "Source Code", "App Store Assets", "Deployment Support"]
      },
      gradient: "from-pink-500 via-red-500 to-orange-500",
      bgColor: "bg-pink-500/10",
      textColor: "text-pink-400"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div className="text-center z-10">
          {/* Loading Animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-r-pink-400 animate-spin animation-reverse"></div>
              <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-blue-400 animate-spin"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-12 h-12 text-purple-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">Loading Services</h2>
          <p className="text-gray-300 mb-8">Preparing amazing solutions for you...</p>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="mt-8 space-y-2">
            {[
              { step: "Initializing services...", threshold: 20 },
              { step: "Loading animations...", threshold: 50 },
              { step: "Preparing content...", threshold: 80 }
            ].map((item, index) => (
              <div key={index} className={`flex items-center justify-center space-x-2 text-sm ${loadingProgress > item.threshold ? 'text-green-400' : 'text-gray-400'}`}>
                <CheckCircle className="w-4 h-4" />
                <span>{item.step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 animate-pulse mr-3" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Services
            </h2>
            <Star className="w-8 h-8 text-yellow-400 animate-pulse ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional development services that will take your business to the next level
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in animation-delay-500">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">{animatedStats.clients}+</div>
            <div className="text-gray-300 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">{animatedStats.projects}+</div>
            <div className="text-gray-300 flex items-center justify-center">
              <Target className="w-5 h-5 mr-2" />
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">{animatedStats.satisfaction}%</div>
            <div className="text-gray-300 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Satisfaction Rate
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-700 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer ${
                visibleCards[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => openModal(service)}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-2xl`}></div>
              
              {/* Floating Icon Background */}
              <div className={`absolute top-4 right-4 w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity duration-300`}>
                <div className={`${service.textColor} transform group-hover:rotate-12 transition-transform duration-300`}>
                  {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                </div>
              </div>

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {service.shortDescription}
              </p>

              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration:
                  </span>
                  <span className={`${service.textColor} font-semibold`}>{service.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Complexity:
                  </span>
                  <span className={`${service.textColor} font-semibold`}>{service.complexity}</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Click to learn more</span>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex items-center space-x-2">
                  <span className="text-sm text-purple-400 font-semibold">Explore</span>
                  <ArrowRight className="w-5 h-5 text-purple-400 group-hover:animate-bounce" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20 animate-fade-in animation-delay-1000">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and expert development.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto">
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-white/20 animate-scale-in shadow-2xl">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-8 rounded-t-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-gray-200 transition-all duration-300 p-2 rounded-full hover:bg-white/20 hover:scale-110 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-6 relative z-10">
                <div className="text-white p-4 bg-white/20 rounded-xl backdrop-blur-md border border-white/30">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{selectedService.title}</h3>
                  <p className="text-white/90 text-lg">{selectedService.description}</p>
                  <div className="flex items-center space-x-6 mt-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-white/80" />
                      <span className="text-white/80">{selectedService.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-white/80" />
                      <span className="text-white/80">{selectedService.complexity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div className="animate-fade-in">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-purple-400" />
                  Detailed Description
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-xl border border-white/10">
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Features */}
              <div className="animate-fade-in animation-delay-200">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-green-400" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-102 border border-white/10 hover:border-white/20"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Pricing */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technologies */}
                <div className="animate-fade-in animation-delay-400">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Brain className="w-6 h-6 mr-3 text-orange-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedService.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Deliverables */}
                <div className="animate-fade-in animation-delay-600">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-blue-400" />
                    Pricing & Deliverables
                  </h4>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-4">{selectedService.details.pricing}</div>
                    <div className="space-y-2">
                      <h5 className="text-white font-semibold mb-3">What you'll get:</h5>
                      {selectedService.details.deliverables.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 text-center animate-fade-in animation-delay-800">
                <h5 className="text-xl font-bold text-white mb-2">Interested in this service?</h5>
                <p className="text-gray-300 mb-4">Let's discuss how I can help bring your project to life</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto">
                  <span>Start Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
        .animation-reverse { animation-direction: reverse; }
        
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
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.4);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .group:hover .group-hover\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .group:hover .group-hover\:rotate-12 {
          transform: rotate(12deg);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .card-shine {
          position: relative;
          overflow: hidden;
        }
        
        .card-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        
        .card-shine:hover::before {
          left: 100%;
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          padding: 2px;
          border-radius: 16px;
        }
        
        .gradient-border > * {
          background: rgba(15, 23, 42, 0.9);
          border-radius: 14px;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .service-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.03), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-12px) rotateX(5deg);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-bounce,
          .animate-spin,
          .animate-pulse-glow {
            animation: none;
          }
          
          .service-card:hover {
            transform: translateY(-4px);
          }
        }
        
        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(55, 23, 22, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #551786, #551783);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #E4004B, #ED775A);
        }
      `}</style>
    </div>
  );
};

export default MyServices;