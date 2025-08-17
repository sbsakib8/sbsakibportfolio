"use client";
import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Globe, Award, Calendar, MapPin, Mail, Phone, Download, Play, Users, Coffee, BookOpen, Zap, Star, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const MyAbout = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    coffee: 0
  });

  // Animate numbers on component mount
  useEffect(() => {
    const targets = { projects: 50, experience: 3, clients: 30, coffee: 1000 };
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
  }, []);

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
    { icon: <Calendar className="w-5 h-5" />, label: 'জন্ম তারিখ', value: '১৫ জানুয়ারি, ১৯৯৮' },
    { icon: <MapPin className="w-5 h-5" />, label: 'ঠিকানা', value: 'ঢাকা, বাংলাদেশ' },
    { icon: <Mail className="w-5 h-5" />, label: 'ইমেইল', value: 'jacob.aiden@email.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'ফোন', value: '+880 1234-567890' }
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
    { id: 'about', label: 'সম্পর্কে', icon: <Users className="w-5 h-5" /> },
    { id: 'experience', label: 'অভিজ্ঞতা', icon: <Award className="w-5 h-5" /> },
    { id: 'education', label: 'শিক্ষা', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'skills', label: 'দক্ষতা', icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold  mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            আমার সম্পর্কে
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            একজন passionate developer হিসেবে আমি প্রযুক্তির মাধ্যমে সমস্যার সমাধান করতে ভালোবাসি
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in">
            <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
            <div className="text-3xl font-bold text-white mb-2">{animatedStats.projects}+</div>
            <div className="text-gray-300">প্রোজেক্ট</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
            <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
            <div className="text-3xl font-bold text-white mb-2">{animatedStats.experience}+</div>
            <div className="text-gray-300">বছর অভিজ্ঞতা</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
            <div className="text-3xl font-bold text-white mb-2">{animatedStats.clients}+</div>
            <div className="text-gray-300">খুশি ক্লায়েন্ট</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-600">
            <Coffee className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:animate-pulse" />
            <div className="text-3xl font-bold text-white mb-2">{animatedStats.coffee}+</div>
            <div className="text-gray-300">কাপ কফি</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Personal Info & Image */}
          <div className="lg:col-span-1">
            {/* Professional Image */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 animate-fade-in animation-delay-800">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white animate-pulse" />
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">Jacob Aiden</h3>
              <p className="text-cyan-400 text-center mb-4">Full-Stack Developer</p>
              
              <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5" />
                <span>CV ডাউনলোড করুন</span>
              </button>
            </div>

            {/* Personal Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in animation-delay-1000">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                ব্যক্তিগত তথ্য
              </h4>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <div className="text-cyan-400">{info.icon}</div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8 animate-fade-in animation-delay-1200">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-400" />
                আগ্রহের বিষয়
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg bg-gradient-to-r ${interest.color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                  >
                    <div className="text-2xl mb-1">{interest.icon}</div>
                    <div className="text-white text-sm font-medium">{interest.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in animation-delay-1000">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in animation-delay-1200">
              
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">আমি কে?</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    আমি একজন passionate Full-Stack Developer যিনি <span className="text-cyan-400 font-semibold">3+ বছরের অভিজ্ঞতা</span> নিয়ে 
                    modern web applications তৈরি করি। আমার specialty হলো <span className="text-purple-400 font-semibold">MERN Stack</span> এবং 
                    <span className="text-green-400 font-semibold"> AI integration</span>।
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    আমি বিশ্বাস করি যে প্রযুক্তি মানুষের জীবনকে সহজ করতে পারে। তাই আমি সর্বদা চেষ্টা করি 
                    এমন solutions তৈরি করতে যা শুধু functional নয়, বরং user-friendly এবং efficient।
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">আমার বিশেষত্ব:</h4>
                      <ul className="space-y-2">
                        {['Responsive Web Design', 'API Development', 'Database Design', 'AI Integration'].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">কাজের পদ্ধতি:</h4>
                      <ul className="space-y-2">
                        {['Agile Development', 'Clean Code', 'Test-Driven Development', 'Continuous Learning'].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
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
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">কর্মজীবন</h3>
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-8 border-l-2 border-gray-600 last:border-l-0 last:pb-0"
                    >
                      <div className={`absolute -left-3 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                      
                      <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="text-white font-semibold">প্রধান অর্জন:</h5>
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2">
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
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">শিক্ষাগত যোগ্যতা</h3>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-10 border border-white/20 hover:bg-opacity-20 transition-all duration-300`}
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
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">প্রযুক্তিগত দক্ষতা</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                              <div className="text-white">{skill.icon}</div>
                            </div>
                            <span className="text-white font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default MyAbout;