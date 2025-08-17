"use client";
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, User, MessageSquare, CheckCircle, AlertCircle, Calendar, Clock, Globe, Code } from 'lucide-react';

const MyContact = () => {
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

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'নাম লিখা আবশ্যক';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'নাম কমপক্ষে ২ অক্ষরের হতে হবে';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'ইমেইল লিখা আবশ্যক';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'সঠিক ইমেইল ঠিকানা লিখুন';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'সঠিক ফোন নম্বর লিখুন';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'বিষয় লিখা আবশ্যক';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'বার্তা লিখা আবশ্যক';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে';
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
      label: "ইমেইল",
      value: "developer@example.com",
      link: "mailto:developer@example.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "ফোন",
      value: "+880 1234-567890",
      link: "tel:+8801234567890",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "ঠিকানা",
      value: "ঢাকা, বাংলাদেশ",
      link: "https://maps.google.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "ওয়েবসাইট",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold  mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            যোগাযোগ করুন
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            আপনার প্রোজেক্ট নিয়ে আলোচনা করুন। আমি সর্বদা নতুন সুযোগের জন্য উন্মুখ!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Animation */}
          <div className="space-y-8">
            {/* Animated Character */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 animate-fade-in animation-delay-700">
              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  {/* Animated Developer Character */}
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-30"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Code className="w-20 h-20 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MERN Stack Developer</h3>
                <p className="text-gray-300 mb-4">Full-Stack Development Specialist</p>
                
                {/* Availability Status */}
                <div className="flex items-center justify-center space-x-2 text-green-400 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-sm">Available for new projects</span>
                </div>
                
                {/* Response Time */}
                <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>২৪ ঘন্টায় উত্তর</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>সপ্তাহে ৭ দিন</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group animate-fade-in"
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-fade-in animation-delay-1200">
              <h4 className="text-white font-semibold mb-4 text-center">সোশ্যাল মিডিয়া</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 rounded-lg text-gray-400 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in animation-delay-1000">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" />
                বার্তা পাঠান
              </h3>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">আপনার বার্তা সফলভাবে পাঠানো হয়েছে! শীঘ্রই উত্তর দেওয়া হবে।</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className=" text-white font-medium mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300`}
                    placeholder="আপনার পুরো নাম লিখুন"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className=" text-white font-medium mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className=" text-white font-medium mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    ফোন নম্বর (ঐচ্ছিক)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300`}
                    placeholder="+880 1234-567890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    বিষয় *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.subject ? 'border-red-500' : 'border-white/30'} rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300`}
                  >
                    <option value="" className="bg-slate-800">বিষয় নির্বাচন করুন</option>
                    <option value="web-development" className="bg-slate-800">ওয়েব ডেভেলপমেন্ট প্রোজেক্ট</option>
                    <option value="mobile-app" className="bg-slate-800">মোবাইল অ্যাপ ডেভেলপমেন্ট</option>
                    <option value="consultation" className="bg-slate-800">টেকনিক্যাল পরামর্শ</option>
                    <option value="collaboration" className="bg-slate-800">কোলাবরেশন সুযোগ</option>
                    <option value="other" className="bg-slate-800">অন্যান্য</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none`}
                    placeholder="আপনার প্রোজেক্ট সম্পর্কে বিস্তারিত লিখুন..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-gray-400 text-sm">
                    {formData.message.length}/500 অক্ষর
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>পাঠানো হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>বার্তা পাঠান</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
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
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MyContact;