"use client";
import React, { useState, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Code, Award, Mail, Phone, MapPin, Calendar, Download, Eye, Star, Trophy, Target, Zap } from 'lucide-react';

const MyResume = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setHeaderVisible(true), 300);
      setTimeout(() => setStatsVisible(true), 800);
    }, 500);
  }, []);

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'services', label: 'Services', icon: Target }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Trophy, delay: '0s' },
    { label: 'Happy Clients', value: '25+', icon: Star, delay: '0.2s' },
    { label: 'Years Experience', value: '3+', icon: Zap, delay: '0.4s' },
    { label: 'Code Commits', value: '1000+', icon: Code, delay: '0.6s' }
  ];

  const content = {
    about: {
      title: "About Me",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-bounce">
                SB
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 animate-pulse"></div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">SB Sakib Sarkar</h3>
              <p className="text-gray-300 text-lg mb-2">Full-Stack Web Developer</p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for work</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am SB Sakib Sarkar, a passionate full-stack web developer who specializes in the MERN Stack (MongoDB, Express.js, React.js, Node.js). I learned my skills online and I am still constantly learning new technologies and applying them to my projects.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed text-lg">
              I find logic in solving any problem, and love creating clean and responsive designs. Web development is my passion — because it allows me to solve real problems through code. I am currently looking for opportunities where I can use my skills to work on real-world projects, learn with a team, and contribute to the growth of the company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform">
              <User className="w-5 h-5 text-cyan-400" />
              <span>SB Sakib Sarkar</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+8801768820891</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>sakib@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-gray-600/50 hover:scale-105 transition-all duration-300 border border-cyan-500/30">
              <Eye className="w-4 h-4" />
              View Portfolio
            </button>
          </div>
        </div>
      )
    },
    experience: {
      title: "Work Experience",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              title: "Full-Stack Developer",
              company: "Freelance",
              period: "2022 - Present",
              description: "Developed multiple web applications using MERN stack. Created responsive designs and implemented complex business logic.",
              achievements: ["Built 15+ web applications", "Improved performance by 40%", "Client satisfaction 98%"]
            },
            {
              title: "Frontend Developer",
              company: "Tech Solutions",
              period: "2021 - 2022",
              description: "Built user interfaces using React.js and implemented modern UI/UX designs with smooth animations.",
              achievements: ["Led UI/UX redesign project", "Reduced loading time by 60%", "Implemented 20+ components"]
            },
            {
              title: "Web Developer Intern",
              company: "Digital Agency",
              period: "2021",
              description: "Learned professional development practices and worked on real client projects under senior developer guidance.",
              achievements: ["Completed 5 client projects", "Learned Git workflow", "Collaborated with 10+ developers"]
            }
          ].map((exp, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-400">{exp.title}</h4>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
              <div className="space-y-2">
                <h5 className="text-cyan-400 font-semibold">Key Achievements:</h5>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )
    },
    education: {
      title: "Education",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              degree: "Bachelor of Science in Computer Science",
              institution: "University of Dhaka",
              period: "2019 - 2023",
              grade: "CGPA: 3.8/4.0",
              courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
            },
            {
              degree: "Higher Secondary Certificate",
              institution: "Dhaka College",
              period: "2017 - 2019",
              grade: "GPA: 5.0/5.0",
              courses: ["Mathematics", "Physics", "Chemistry", "ICT"]
            },
            {
              degree: "Secondary School Certificate",
              institution: "Motijheel Govt. Boys School",
              period: "2015 - 2017",
              grade: "GPA: 5.0/5.0",
              courses: ["General Mathematics", "Science", "English", "Bengali"]
            }
          ].map((edu, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-400">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">{edu.period}</span>
                </div>
                <span className="text-sm text-green-400 font-semibold">{edu.grade}</span>
              </div>
              <div className="space-y-2">
                <h5 className="text-cyan-400 font-semibold">Key Courses:</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    skills: {
      title: "Technical Skills",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              category: "Frontend Development",
              skills: [
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 85 },
                { name: "HTML5 & CSS3", level: 95 },
                { name: "Tailwind CSS", level: 88 },
                { name: "Bootstrap", level: 82 }
              ],
              color: "from-blue-400 to-cyan-600"
            },
            {
              category: "Backend Development",
              skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 78 },
                { name: "MySQL", level: 75 },
                { name: "RESTful APIs", level: 88 }
              ],
              color: "from-green-400 to-emerald-600"
            },
            {
              category: "Tools & Technologies",
              skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Postman", level: 85 },
                { name: "Figma", level: 70 },
                { name: "npm/yarn", level: 88 }
              ],
              color: "from-purple-400 to-pink-600"
            }
          ].map((skillGroup, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">{skillGroup.category}</h4>
              <div className="space-y-4">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skillGroup.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    achievements: {
      title: "Achievements & Projects",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              title: "E-commerce Platform",
              description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin panel.",
              technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
              icon: "🛒",
              link: "https://github.com/sakib",
              status: "Live"
            },
            {
              title: "Task Management App",
              description: "Created a collaborative task management application with real-time updates using Socket.io and modern UI design.",
              technologies: ["React", "Socket.io", "Express", "JWT"],
              icon: "📝",
              link: "https://github.com/sakib",
              status: "Live"
            },
            {
              title: "Portfolio Website",
              description: "Designed and developed a responsive portfolio website with smooth animations and modern design principles.",
              technologies: ["React", "Tailwind CSS", "Framer Motion"],
              icon: "🎨",
              link: "https://sakibportfolio.com",
              status: "Live"
            },
            {
              title: "Weather Dashboard",
              description: "Built a weather application with location-based forecasts, charts, and responsive design for all devices.",
              technologies: ["JavaScript", "Weather API", "Chart.js"],
              icon: "🌤️",
              link: "https://github.com/sakib",
              status: "Development"
            }
          ].map((achievement, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-cyan-400">{achievement.title}</h4>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${achievement.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {achievement.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {achievement.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={achievement.link} 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Eye className="w-4 h-4" />
                View Project
              </a>
            </div>
          ))}
        </div>
      )
    },
    testimonials: {
      title: "Client Testimonials",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              name: "John Smith",
              role: "CEO, TechStart",
              feedback: "Sakib delivered an outstanding e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are remarkable.",
              rating: 5,
              image: "👨‍💼"
            },
            {
              name: "Sarah Johnson",
              role: "Marketing Director, Digital Solutions",
              feedback: "Working with Sakib was a pleasure. He understood our requirements perfectly and delivered a beautiful, responsive website on time.",
              rating: 5,
              image: "👩‍💼"
            },
            {
              name: "Mike Chen",
              role: "Founder, StartupXYZ",
              feedback: "Sakib's problem-solving skills are exceptional. He transformed our complex requirements into an elegant, user-friendly application.",
              rating: 5,
              image: "👨‍💻"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cyan-400">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">"{testimonial.feedback}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    services: {
      title: "Services I Offer",
      data: (
        <div className="space-y-6 animate-fadeInUp">
          {[
            {
              service: "Full-Stack Web Development",
              description: "Complete web application development using MERN stack with modern design and best practices.",
              price: "Starting from $500",
              features: ["Responsive Design", "Database Integration", "User Authentication", "Payment Gateway"],
              icon: "💻"
            },
            {
              service: "Frontend Development",
              description: "Beautiful, interactive user interfaces with React.js, modern CSS, and smooth animations.",
              price: "Starting from $300",
              features: ["React Components", "Responsive Design", "Interactive UI", "Performance Optimization"],
              icon: "🎨"
            },
            {
              service: "Backend API Development",
              description: "Robust RESTful APIs with Node.js, Express.js, and database integration.",
              price: "Starting from $400",
              features: ["RESTful APIs", "Database Design", "Authentication", "Documentation"],
              icon: "⚙️"
            },
            {
              service: "Website Maintenance",
              description: "Ongoing website maintenance, updates, security patches, and performance optimization.",
              price: "Starting from $100/month",
              features: ["Regular Updates", "Security Patches", "Performance Monitoring", "Bug Fixes"],
              icon: "🔧"
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-cyan-400">{service.service}</h4>
                </div>
                <span className="text-green-400 font-semibold">{service.price}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
              <div className="space-y-2">
                <h5 className="text-cyan-400 font-semibold">What's Included:</h5>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg font-semibold animate-pulse">Loading Resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className={`relative z-10 py-12 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-textShine">
            SB Sakib Sarkar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer crafting innovative web solutions that bring ideas to life
          </p>
          
          {/* Animated Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8 transition-all duration-1000 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 animate-slideInUp"
                  style={{ animationDelay: stat.delay }}
                >
                  <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 sticky top-8">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
                Why Hire Me?
              </h2>
              
              <div className="space-y-3 mb-8">
                <p className="text-gray-300 text-center leading-relaxed">
                  I'm not just a coder — I'm a problem solver. I think about each project in my own way, so that it really works for the user.
                </p>
              </div>

              <div className="space-y-3">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl scale-105'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                      {activeSection === section.id && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 min-h-[600px]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-spin-slow"></div>
                  <h2 className="text-3xl font-bold text-cyan-400">
                    {content[activeSection].title}
                  </h2>
                </div>
                
                <div className="overflow-y-auto max-h-[70vh] pr-2 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
                  {content[activeSection].data}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 30px) scale(1.05); }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes textShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-slideInUp { animation: slideInUp 0.6s ease-out; }
        .animate-textShine { 
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 400% 100%;
          animation: textShine 3s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>
    </div>
  );
};

export default MyResume;