"use client";
import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, User, MessageSquare, CheckCircle, AlertCircle, Calendar, Clock, Globe, Code, Loader } from 'lucide-react';

const MyContact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }, 2000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "developer@example.com",
      link: "mailto:developer@example.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+880 1234-567890",
      link: "tel:+8801234567890",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.myportfolio.com",
      link: "https://www.myportfolio.com",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/username",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      link: "https://linkedin.com/in/username",
      color: "hover:text-blue-500"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      link: "https://twitter.com/username",
      color: "hover:text-sky-500"
    }
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-reverse"></div>
        </div>

        {/* Loading Content */}
        <div className="text-center z-10">
          <div className="relative mb-8">
            {/* Spinning rings */}
            <div className="w-32 h-32 relative mx-auto">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
              <div className="absolute inset-2 border-4 border-blue-500/50 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-4 border-purple-500/70 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 flex items-center justify-center">
                <Code className="w-12 h-12 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Loading Contact Page
          </h2>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-400"></div>
            </div>
            <span className="ml-2">Getting things ready...</span>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-2000 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-slide-in"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Let's discuss your project and bring your ideas to life. I'm always excited about new opportunities!
          </p>
          <div className="inline-block mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-slide-in animation-delay-500"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Left Side */}
          <div className="space-y-8">
            {/* Enhanced Animated Character */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 animate-fade-in-left animation-delay-600 hover:transform hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  {/* Enhanced Developer Character */}
                  <div className="w-48 h-48 mx-auto relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin-reverse opacity-20"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-20 h-20 text-white animate-bounce-slow" />
                    </div>
                    {/* Orbiting elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-orbit opacity-80"></div>
                    <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-orbit-reverse opacity-80"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in animation-delay-800">MERN Stack Developer</h3>
                <p className="text-gray-300 mb-4 animate-fade-in animation-delay-900">Full-Stack Development Specialist</p>
                
                {/* Enhanced Status */}
                <div className="flex items-center justify-center space-x-2 text-green-400 mb-6 animate-fade-in animation-delay-1000">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Available for new projects</span>
                </div>
                
                {/* Enhanced Response Time */}
                <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm animate-fade-in animation-delay-1100">
                  <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300">
                    <Clock className="w-4 h-4" />
                    <span>24h Response</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-purple-400 transition-colors duration-300">
                    <Calendar className="w-4 h-4" />
                    <span>7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group animate-fade-in-left"
                  style={{ animationDelay: `${1200 + index * 150}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300 break-all">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-fade-in-left animation-delay-1800 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-white font-semibold mb-4 text-center">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 rounded-lg text-gray-400 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    title={social.label}
                    style={{ animationDelay: `${1900 + index * 100}ms` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Side - Contact Form */}
          <div className="animate-fade-in-right animation-delay-1000">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center animate-fade-in animation-delay-1200">
                <MessageSquare className="w-6 h-6 mr-3 text-cyan-400 animate-pulse" />
                Send Message
              </h3>

              {/* Enhanced Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3 animate-scale-in">
                  <CheckCircle className="w-5 h-5 text-green-400 animate-bounce" />
                  <p className="text-green-400">Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enhanced Name Field */}
                <div className="animate-fade-in-up animation-delay-1300">
                  <label htmlFor="name" className="text-white font-medium mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-cyan-400" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/15`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Enhanced Email Field */}
                <div className="animate-fade-in-up animation-delay-1400">
                  <label htmlFor="email" className="text-white font-medium mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/15`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Enhanced Phone Field */}
                <div className="animate-fade-in-up animation-delay-1500">
                  <label htmlFor="phone" className="text-white font-medium mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/15`}
                    placeholder="+880 1234-567890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Enhanced Subject Field */}
                <div className="animate-fade-in-up animation-delay-1600">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.subject ? 'border-red-500' : 'border-white/30'} rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/15`}
                  >
                    <option value="" className="bg-slate-800">Select a subject</option>
                    <option value="web-development" className="bg-slate-800">Web Development Project</option>
                    <option value="mobile-app" className="bg-slate-800">Mobile App Development</option>
                    <option value="consultation" className="bg-slate-800">Technical Consultation</option>
                    <option value="collaboration" className="bg-slate-800">Collaboration Opportunity</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Enhanced Message Field */}
                <div className="animate-fade-in-up animation-delay-1700">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none hover:bg-white/15`}
                    placeholder="Tell me about your project in detail..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-gray-400 text-sm">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Enhanced Submit Button */}
                <div className="animate-fade-in-up animation-delay-1800">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1100 { animation-delay: 1100ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-1300 { animation-delay: 1300ms; }
        .animation-delay-1400 { animation-delay: 1400ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        .animation-delay-1600 { animation-delay: 1600ms; }
        .animation-delay-1700 { animation-delay: 1700ms; }
        .animation-delay-1800 { animation-delay: 1800ms; }
        .animation-delay-1900 { animation-delay: 1900ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        
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
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(-10px) rotate(180deg);
          }
          50% {
            transform: translateY(10px) rotate(0deg);
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg) translateX(100px) rotate(360deg);
          }
          to {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        
        @keyframes loading-progress {
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 15s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 12s linear infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-loading-progress {
          animation: loading-progress 2.5s ease-in-out forwards;
        }
        
        /* Hover effects */
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
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

export default MyContact;