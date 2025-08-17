"use client"
import React, { useState } from 'react';
import { Code, Brain, Database, Server, Smartphone, Globe, Bot, Zap, Settings, X } from 'lucide-react';

const MyServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      icon: <Globe className="w-8 h-8" />,
      description: "Full-stack web development using MongoDB, Express.js, React.js & Node.js",
      details: {
        overview: "আমি modern MERN stack দিয়ে complete web application develop করি। React.js দিয়ে interactive frontend, Node.js/Express দিয়ে robust backend, আর MongoDB দিয়ে efficient database management।",
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
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.io", "Stripe"]
      },
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI Agent Development",
      icon: <Bot className="w-8 h-8" />,
      description: "Intelligent automation solutions and AI-powered applications",
      details: {
        overview: "আমি advanced AI agents develop করি যারা complex tasks automate করতে পারে। Natural language processing থেকে শুরু করে intelligent automation - সব ধরনের AI solutions provide করি।",
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
        technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "Streamlit", "FastAPI", "Docker"]
      },
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Python Development",
      icon: <Code className="w-8 h-8" />,
      description: "Backend development, data science, and automation with Python",
      details: {
        overview: "Python দিয়ে versatile solutions develop করি - web scraping থেকে data analysis, automation scripts থেকে REST APIs। Clean, efficient আর maintainable code লিখি।",
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
        technologies: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "BeautifulSoup", "Selenium", "PostgreSQL"]
      },
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Database Solutions",
      icon: <Database className="w-8 h-8" />,
      description: "Database design, optimization and management",
      details: {
        overview: "Efficient database architecture design করি যা scalable আর performance optimized। SQL থেকে NoSQL - সব ধরনের database নিয়ে কাজ করি।",
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
        technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Sequelize"]
      },
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "API Development",
      icon: <Server className="w-8 h-8" />,
      description: "RESTful APIs and microservices architecture",
      details: {
        overview: "Robust আর scalable APIs develop করি যা third-party integrations support করে। Microservices architecture দিয়ে enterprise-level solutions বানাই।",
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
        technologies: ["Express.js", "FastAPI", "GraphQL", "Swagger", "Postman", "JWT", "OAuth", "Docker"]
      },
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      id: 6,
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Cross-platform mobile applications",
      details: {
        overview: "React Native দিয়ে cross-platform mobile apps develop করি। iOS আর Android দুইটার জন্যই একই codebase ব্যবহার করে cost-effective solutions provide করি।",
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
        technologies: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage", "React Navigation", "Flipper", "CodePush"]
      },
      gradient: "from-pink-500 via-red-500 to-orange-500"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold  mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            আমার সেবা সমূহ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            Professional development services যা আপনার business কে next level এ নিয়ে যাবে
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => openModal(service)}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-scale-in">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-6 rounded-t-2xl relative`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="text-white p-3 bg-white/20 rounded-xl">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-white/80 text-lg mt-2">{selectedService.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-purple-400" />
                  বিস্তারিত বিবরণ
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-green-400" />
                  প্রধান বৈশিষ্ট্যসমূহ
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-orange-400" />
                  ব্যবহৃত প্রযুক্তি
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedService.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedService.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
            transform: translateY(20px);
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
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MyServices;