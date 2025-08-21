"use client"
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagramSquare, FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaCode, FaDatabase, FaServer, FaMobile } from "react-icons/fa";
import Link from 'next/link';

// Loading Component
const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const texts = [
            'Initializing...',
            'Loading Components...',
            'Setting up Animations...',
            'Preparing Experience...',
            'Almost Ready...'
        ];

        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 15 + 5;

                // Update loading text based on progress
                if (newProgress > 80) setLoadingText(texts[4]);
                else if (newProgress > 60) setLoadingText(texts[3]);
                else if (newProgress > 40) setLoadingText(texts[2]);
                else if (newProgress > 20) setLoadingText(texts[1]);
                else setLoadingText(texts[0]);

                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return newProgress;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-50 flex items-center justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
            </div>

            <div className="text-center space-y-8 relative z-10">
                {/* Logo */}
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        SB
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full animate-pulse"></div>
                </div>

                {/* Loading Animation */}
                <div className="space-y-6">
                    {/* Circular Progress */}
                    <div className="relative w-32 h-32 mx-auto">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background Circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="rgba(59, 130, 246, 0.1)"
                                strokeWidth="6"
                                fill="none"
                            />
                            {/* Progress Circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="url(#gradient)"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 40}`}
                                strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                                className="transition-all duration-300 ease-out"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="50%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Progress Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <div className="space-y-2">
                        <p className="text-xl text-gray-300 animate-pulse">{loadingText}</p>

                        {/* Animated Dots */}
                        <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// About Typing Component
const AboutTyping = () => {
    return (
        <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold'>
            <Typewriter
                words={['Ai Agent', 'Python Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'MERN Stack Developer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1200}
            />
        </span>
    );
};

// Skill Icons Component
const SkillIcons = ({ isVisible }) => {
    const skills = [
        { icon: FaCode, label: "Frontend", color: "from-blue-500 to-cyan-500" },
        { icon: FaDatabase, label: "Database", color: "from-green-500 to-emerald-500" },
        { icon: FaServer, label: "Backend", color: "from-purple-500 to-pink-500" },
        { icon: FaMobile, label: "Mobile", color: "from-orange-500 to-red-500" },
        { icon: FaPython, label: "Python", color: "from-sky-500 to-red-500" },
    ];

    return (
        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 my-6">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`group relative transform transition-all duration-700 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${skill.color} transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl`}>
                        <skill.icon className="text-white text-xl sm:text-2xl lg:text-3xl" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">{skill.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Media and Button Component
const MediaAndButton = ({ isVisible }) => {
    const socialLinks = [
        {
            href: 'https://www.facebook.com/sbsakibsarkar/',
            icon: BiLogoFacebookCircle,
            color: 'from-blue-600 to-blue-400',
            hoverColor: 'hover:shadow-blue-500/50'
        },
        {
            href: 'https://www.linkedin.com/in/sb-sakib-sarkar-5823202b9/',
            icon: TiSocialLinkedinCircular,
            color: 'from-blue-700 to-blue-500',
            hoverColor: 'hover:shadow-blue-700/50'
        },
        {
            href: 'https://www.instagram.com/sbsakibsarkar/',
            icon: FaInstagramSquare,
            color: 'from-pink-600 to-purple-600',
            hoverColor: 'hover:shadow-pink-500/50'
        },
        {
            href: 'https://github.com/sbsakib8',
            icon: FaGithub,
            color: 'from-gray-700 to-gray-900',
            hoverColor: 'hover:shadow-gray-500/50'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gradient-to-r ${link.color} text-white transform transition-all duration-700 delay-${index * 100} hover:scale-125 ${link.hoverColor} hover:shadow-xl hover:rotate-12 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <link.icon className="text-xl sm:text-2xl lg:text-3xl" />
                    </a>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col px-9 md:px-1 sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <Link
                    href="/resume.pdf"
                    download="Sakib_Hossain_Resume.pdf"
                    className={`group cursor-pointer relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-3 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                    <span className="relative z-10 text-lg">Download Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>

                <Link
                    href="/contact"
                    className={`group cursor-pointer relative overflow-hidden px-8 py-4 border-2 border-gradient bg-gray-900/50 backdrop-blur-sm text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-3 hover:scale-110 border-purple-500/50 hover:border-purple-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                    <span className="relative z-10 text-lg">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
            </div>

        </div>
    );
};

// Particles Component
const ParticlesBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 20 + 10
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-float-particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    );
};

// Main About Component
const MyHome = () => {
    const [loading, setLoading] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleLoadingComplete = () => {
        setLoading(false);
        setTimeout(() => {
            setContentVisible(true);
        }, 200);
    };

    if (loading) {
        return <LoadingScreen onComplete={handleLoadingComplete} />;
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Dynamic Mouse-following Background */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-300"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(59, 130, 246, 0.4) 0%, 
            rgba(147, 51, 234, 0.3) 25%, 
            rgba(236, 72, 153, 0.2) 50%, 
            transparent 70%)`
                }}
            />

            {/* Enhanced Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>

                {/* Enhanced Floating Geometric Shapes */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-blue-500/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/4 left-1/5 w-20 h-20 border-2 border-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/2 w-16 h-16 border border-pink-500/20 rotate-12 animate-bounce-slow"></div>
            </div>

            {/* Enhanced Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(59, 130, 246, 0.1) 2px,
        rgba(59, 130, 246, 0.1) 4px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(147, 51, 234, 0.1) 2px,
        rgba(147, 51, 234, 0.1) 4px
      )`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-[100%] container">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-16 py-20">

                    {/* Content Section */}
                    <div className={`flex-1 text-center lg:text-left space-y-8 max-w-2xl transform transition-all duration-1000 ${contentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                        {/* Badge */}
                        <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6 transform transition-all duration-700 delay-200 hover:scale-110 hover:shadow-lg ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-300 text-sm font-medium">Available for Work</span>
                        </div>

                        {/* Main Heading */}
                        <div className={`space-y-4 transform transition-all duration-1000 delay-300 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                                <span className="block text-white text-2xl md:text-3xl animate-fade-in-up">Hello, I'm</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient text-3xl md:text-4xl lg:text-5xl my-2 hover:scale-105 transition-transform duration-300">
                                    SB Sakib Sarkar
                                </span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-300">
                                <AboutTyping />
                            </h2>
                        </div>

                        {/* Skills Icons */}
                        <SkillIcons isVisible={contentVisible} />

                        {/* Description */}
                        <p className={`text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-500 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            I craft digital experiences with modern technologies. Specialized in building
                            <span className="text-blue-400 font-semibold"> responsive web applications </span>
                            using the MERN stack. From concept to deployment, I ensure
                            <span className="text-purple-400 font-semibold"> quality code </span>
                            and seamless user experiences.
                        </p>

                        {/* Enhanced Stats */}
                        <div className={`flex justify-center lg:justify-start space-x-8 py-6 transform transition-all duration-1000 delay-600 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            {[
                                { number: "3+", label: "Years Experience" },
                                { number: "55+", label: "Projects Done" },
                                { number: "100%", label: "Client Satisfaction" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media and Buttons */}
                        <MediaAndButton isVisible={contentVisible} />
                    </div>

                    {/* Enhanced Image Section */}
                    <div className={`flex-1 flex justify-center items-center transform transition-all duration-1000 delay-400 ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <div className="relative group">
                            {/* Enhanced Animated Rings */}
                            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 animate-spin-slow blur-sm"></div>
                            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-30 animate-spin-reverse blur-sm"></div>
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-40 animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative w-60 h-60 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-black shadow-2xl transform transition-all duration-700 group-hover:scale-110 hover:rotate-2">
                                {/* Image */}
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="mypic/about.png"
                                    alt="SB Sakib Sarkar"
                                />

                                {/* Enhanced Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* Enhanced Floating Tech Icons */}
                                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-90 animate-float shadow-lg transition-all duration-500">
                                    <FaCode className="text-white text-2xl" />
                                </div>
                                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-90 animate-float-delayed shadow-lg transition-all duration-500">
                                    <FaDatabase className="text-white text-xl" />
                                </div>
                                <div className="absolute top-20 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-90 animate-bounce shadow-lg transition-all duration-700">
                                    <FaServer className="text-white text-lg" />
                                </div>
                            </div>

                            {/* Skill Labels */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    Full Stack Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
          50% { transform: translateY(-10px) translateX(-15px); opacity: 0.5; }
          75% { transform: translateY(-30px) translateX(5px); opacity: 0.8; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 2s;
        }
        
        .animate-float-particle {
          animation: float-particle 15s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(34, 23, 90, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b554, #2232f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #44224b, #256345);
        }
      `}</style>
        </div>
    );
};

export default MyHome;