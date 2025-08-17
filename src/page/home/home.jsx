"use client"
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaCode, FaDatabase, FaServer, FaMobile } from "react-icons/fa";

// About Typing Component
const AboutTyping = () => {
    return (
        <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold'>
            <Typewriter
                words={['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'MERN Stack Developer']}
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
const SkillIcons = () => {
    const skills = [
        { icon: FaCode, label: "Frontend", color: "from-blue-500 to-cyan-500" },
        { icon: FaDatabase, label: "Database", color: "from-green-500 to-emerald-500" },
        { icon: FaServer, label: "Backend", color: "from-purple-500 to-pink-500" },
        { icon: FaMobile, label: "Mobile", color: "from-orange-500 to-red-500" }
    ];

    return (
        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 my-6">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="group relative"
                >
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${skill.color} transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}>
                        <skill.icon className="text-white text-xl sm:text-2xl lg:text-3xl" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-400 whitespace-nowrap">{skill.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Media and Button Component
const MediaAndButton = () => {
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
                        className={`p-3 rounded-full bg-gradient-to-r ${link.color} text-white transform transition-all duration-300 hover:scale-110 ${link.hoverColor} hover:shadow-lg`}
                    >
                        <link.icon className="text-xl sm:text-2xl lg:text-3xl" />
                    </a>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col px-9 md:px-1 sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-lg">Download Resume</span>
                </button>

                <button className="group relative overflow-hidden px-8 py-4 border-2 border-gradient bg-gray-900/50 backdrop-blur-sm text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-lg">Get In Touch</span>
                </button>
            </div>
        </div>
    );
};

// Main About Component
const MyHome = () => {
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

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(147, 51, 234, 0.2) 25%, 
            rgba(236, 72, 153, 0.1) 50%, 
            transparent 70%)`
                }}
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>

                {/* Floating Geometric Shapes */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-blue-500/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/4 left-1/5 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse"></div>
            </div>


            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.05) 2px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.05) 2px,
        rgba(255, 255, 255, 0.05) 4px
      )`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>


            {/* Main Content */}
            <div className="relative z-10 w-[100%] container">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-16 py-20">

                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-300 text-sm font-medium">Available for Work</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                                <span className="block text-white text-2xl md:text-3xl">Hello, I'm</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient text-3xl md:text-4xl lg:text-5xl my-2">
                                    SB Sakib Sarkar
                                </span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-300">
                                <AboutTyping />
                            </h2>
                        </div>

                        {/* Skills Icons */}
                        <SkillIcons />

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                            I craft digital experiences with modern technologies. Specialized in building
                            <span className="text-blue-400 font-semibold"> responsive web applications </span>
                            using the MERN stack. From concept to deployment, I ensure
                            <span className="text-purple-400 font-semibold"> quality code </span>
                            and seamless user experiences.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start space-x-8 py-6">
                            {[
                                { number: "2+", label: "Years Experience" },
                                { number: "50+", label: "Projects Done" },
                                { number: "100%", label: "Client Satisfaction" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media and Buttons */}
                        <MediaAndButton />
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative group">
                            {/* Animated Ring */}
                            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 animate-spin-slow"></div>
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-30 animate-spin-reverse"></div>

                            {/* Image Container */}
                            <div className="relative w-60 h-60  sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-black shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                {/* Image */}
                                <img
                                    className="w-full h-full object-cover"
                                    src="mypic/about.png"
                                    alt="SB Sakib Sarkar"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Floating Tech Icons */}
                                <div className="absolute top-40 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-80 animate-float">
                                    <FaCode className="text-white text-lg" />
                                </div>
                                <div className="absolute bottom-40 left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-80 animate-float-delayed">
                                    <FaDatabase className="text-white text-sm" />
                                </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
        </div>
    );
};

export default MyHome;