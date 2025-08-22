"use client";
import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Globe, Award, Calendar, MapPin, Mail, Phone, Download, Play, Users, Coffee, BookOpen, Zap, Star, Heart, CheckCircle, ArrowRight, Loader2, Sparkles, TrendingUp, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const MyAbout = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    coffee: 0
  });
  const [visibleElements, setVisibleElements] = useState({});

  // Loading simulation
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(loadingInterval);
  }, []);

  // Animate numbers after loading
  useEffect(() => {
    if (!isLoading) {
      const targets = { projects: 50, experience: 3, clients: 30, coffee: 1000 };
      const duration = 2500;
      const steps = 80;
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

  // Stagger element visibility
  useEffect(() => {
    if (!isLoading) {
      const elements = ['header', 'stats', 'profileCard', 'personalInfo', 'interests', 'tabs', 'content'];
      elements.forEach((element, index) => {
        setTimeout(() => {
          setVisibleElements(prev => ({ ...prev, [element]: true }));
        }, index * 200);
      });
    }
  }, [isLoading]);

  const skills = [
    { name: 'JavaScript', level: 95, icon: <Code className="w-5 h-5" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 92, icon: <Globe className="w-5 h-5" />, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 90, icon: <Database className="w-5 h-5" />, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 88, icon: <Brain className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' },
    { name: 'MongoDB', level: 85, icon: <Database className="w-5 h-5" />, color: 'from-green-500 to-lime-500' },
    { name: 'AI/ML', level: 82, icon: <Brain className="w-5 h-5" />, color: 'from-indigo-400 to-purple-500' }
  ];

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using MERN stack. Mentoring junior developers and architecting scalable solutions.',
      achievements: ['Built 15+ production applications', 'Improved system performance by 40%', 'Led team of 5 developers'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MERN Stack Developer',
      company: 'Digital Innovations Ltd',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and RESTful APIs. Collaborated with UI/UX designers and product managers.',
      achievements: ['Delivered 20+ client projects', 'Reduced loading time by 50%', 'Integrated 10+ third-party APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2020 - 2021',
      description: 'Created modern, responsive user interfaces using React.js. Focused on user experience and performance optimization.',
      achievements: ['Built 8 responsive websites', 'Improved user engagement by 35%', 'Optimized bundle size by 60%'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Dhaka',
      period: '2016 - 2020',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with First Class Honors.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      degree: 'Advanced Web Development Certification',
      institution: 'freeCodeCamp',
      period: '2020',
      description: 'Comprehensive full-stack web development program covering modern frameworks and best practices.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const personalInfo = [
    { icon: <Calendar className="w-5 h-5" />, label: 'Date of Birth', value: 'May 29, 1995' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Dhaka, Gazipur , Bangladesh' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'sakibhossain7397@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp', value: '+880 1768820891' }
  ];

  const interests = [
    { icon: '🚀', name: 'Space Technology', color: 'from-blue-500 to-purple-500' },
    { icon: '🤖', name: 'Artificial Intelligence', color: 'from-green-500 to-blue-500' },
    { icon: '📚', name: 'Reading Tech Blogs', color: 'from-yellow-500 to-orange-500' },
    { icon: '🎮', name: 'Gaming', color: 'from-purple-500 to-pink-500' },
    { icon: '🌱', name: 'Open Source', color: 'from-green-400 to-emerald-500' },
    { icon: '🏃', name: 'Running', color: 'from-red-500 to-pink-500' }
  ];

  const tabs = [
    { id: 'about', label: 'About Me', icon: <Users className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <Award className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Zap className="w-5 h-5" /> }
  ];

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float animation-delay-4000"></div>
        </div>

        <div className="text-center z-10">
          {/* Loading Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-gray-700 mx-auto relative">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"></div>
              <div className="absolute top-2 left-2 w-28 h-28 rounded-full border-4 border-transparent border-r-purple-400 animate-spin animation-delay-500" style={{ animationDirection: 'reverse' }}></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Code className="w-12 h-12 text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Loading Text */}
          <h2 className="text-3xl font-bold text-white mb-4 animate-pulse">Loading Portfolio</h2>
          <p className="text-gray-300 mb-8">Preparing an amazing experience for you...</p>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="mt-8 space-y-2">
            <div className={`flex items-center justify-center space-x-2 text-sm ${loadingProgress > 20 ? 'text-green-400' : 'text-gray-400'}`}>
              <CheckCircle className="w-4 h-4" />
              <span>Initializing components...</span>
            </div>
            <div className={`flex items-center justify-center space-x-2 text-sm ${loadingProgress > 50 ? 'text-green-400' : 'text-gray-400'}`}>
              <CheckCircle className="w-4 h-4" />
              <span>Loading animations...</span>
            </div>
            <div className={`flex items-center justify-center space-x-2 text-sm ${loadingProgress > 80 ? 'text-green-400' : 'text-gray-400'}`}>
              <CheckCircle className="w-4 h-4" />
              <span>Finalizing experience...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float animation-delay-4000"></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-float"
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
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleElements.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse mr-3" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer who loves to solve problems through technology and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 transform ${visibleElements.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: Code, value: animatedStats.projects, suffix: '+', label: 'Projects', color: 'text-cyan-400' },
            { icon: Calendar, value: animatedStats.experience, suffix: '+', label: 'Years Experience', color: 'text-green-400' },
            { icon: Users, value: animatedStats.clients, suffix: '+', label: 'Happy Clients', color: 'text-purple-400' },
            { icon: Coffee, value: animatedStats.coffee, suffix: '+', label: 'Cups of Coffee', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:transform hover:scale-105 transition-all duration-500 hover:bg-white/15">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:animate-bounce`} />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.color.includes('cyan') ? 'from-cyan-400 to-blue-400' : 
                  stat.color.includes('green') ? 'from-green-400 to-emerald-400' :
                  stat.color.includes('purple') ? 'from-purple-400 to-pink-400' :
                  'from-yellow-400 to-orange-400'} rounded-full transition-all duration-2000 ease-out`}
                  style={{ width: index <= 1 ? '100%' : index === 2 ? '90%' : '85%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Personal Info & Image */}
          <div className="lg:col-span-1">
            {/* Professional Image */}
            <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 transition-all duration-1000 delay-400 transform ${visibleElements.profileCard ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {/* <Code className="w-16 h-16 text-white animate-pulse" /> */}
                   <img src="mypic/sakib1.webp" className=' w-[250px] h-[250px] rounded-full' alt="" />
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">SB Sakib Sarkar</h3>
              <p className="text-cyan-400 text-center mb-4 font-semibold">Front End || Full-Stack || Ai Agent || Python Developer</p>
              
              <Link href="/resume.pdf"
                    download="Sakib_Hossain_Resume.pdf" 
                   className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </Link>
            </div>

            {/* Personal Information */}
            <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 transition-all duration-1000 delay-600 transform ${visibleElements.personalInfo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" />
                Personal Information
              </h4>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white group-hover:text-cyan-300 transition-colors duration-300">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-1000 delay-800 transform ${visibleElements.interests ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-400 animate-pulse" />
                Interests
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg bg-gradient-to-r ${interest.color} bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg`}
                  >
                    <div className="text-2xl mb-1 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>{interest.icon}</div>
                    <div className="text-white text-sm font-medium">{interest.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-1000 delay-1000 transform ${visibleElements.tabs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className={activeTab === tab.id ? 'animate-pulse' : ''}>{tab.icon}</div>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-1000 delay-1200 transform ${visibleElements.content ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <Target className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate Full-Stack Developer with <span className="text-cyan-400 font-semibold">3+ years of experience</span> creating 
                    modern web applications. My specialty lies in <span className="text-purple-400 font-semibold">MERN Stack</span> and 
                    <span className="text-green-400 font-semibold"> AI integration</span>.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I believe technology can make people's lives easier. That's why I always strive to create 
                    solutions that are not just functional, but user-friendly and efficient.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">My Specialties:</h4>
                      </div>
                      <ul className="space-y-3">
                        {['Responsive Web Design', 'API Development', 'Database Design', 'AI Integration'].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center mb-4">
                        <Lightbulb className="w-5 h-5 text-cyan-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Work Methodology:</h4>
                      </div>
                      <ul className="space-y-3">
                        {['Agile Development', 'Clean Code', 'Test-Driven Development', 'Continuous Learning'].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <Award className="w-6 h-6 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Career Journey</h3>
                  </div>
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-8 border-l-2 border-gray-600 last:border-l-0 last:pb-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`absolute -left-3 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}></div>
                      
                      <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="text-white font-semibold flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                            Key Achievements:
                          </h5>
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                              <ArrowRight className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Educational Background</h3>
                  </div>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-10 border border-white/20 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg animate-fade-in`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-cyan-400 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <Zap className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} hover:scale-110 transition-transform duration-300`}>
                              <div className="text-white">{skill.icon}</div>
                            </div>
                            <span className="text-white font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Skills Section */}
                  <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-indigo-400" />
                      Additional Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {['Docker', 'AWS', 'GraphQL', 'TypeScript', 'Redis', 'Socket.io', 'Next.js', 'Express.js'].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-sm text-white hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
        
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-bounce,
          .animate-spin {
            animation: none;
          }
        }
          /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default MyAbout;