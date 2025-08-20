'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaServer, FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineChevronDoubleRight, HiMenuAlt3, HiX } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { usePathname } from 'next/navigation';

const Navbar = ({ children }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setOpen(false);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const menus = [
        { menu: 'Home', link: '/', icon: <FaHome /> },
        { menu: 'About', link: '/about', icon: <FaUser /> },
        { menu: 'Services', link: '/service', icon: <FaServer /> },
        { menu: 'Resume', link: '/resume', icon: <GiSkills /> },
        { menu: 'Portfolio', link: '/portfolio', icon: <FaBriefcase /> },
        { menu: 'Contact', link: '/contact', icon: <MdOutlineContactPhone /> },
    ];

    const handleLinkClick = () => {
        if (isMobile) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <div>
            {/* Desktop Sidebar */}
            <div className={`
                hidden md:flex md:flex-col md:fixed md:top-0 md:left-0 md:h-full
                ${open ? 'md:w-80 lg:w-72 xl:w-80' : 'md:w-20 lg:w-24 xl:w-28'} 
                duration-700 ease-in-out
                bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900
                backdrop-blur-xl border-r border-gray-700/50
                shadow-2xl shadow-black/20 z-30
            `}>
                
                
                {/* Toggle Button */}
                <div className='flex justify-end p-6 lg:p-8'>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`
                            ${open ? 'rotate-180' : 'rotate-0'} 
                            duration-700 ease-in-out cursor-pointer 
                            w-10 h-10 lg:w-12 lg:h-12 text-white hover:text-[#0ef] 
                            transition-all rounded-full hover:bg-gray-700/50 hover:shadow-lg
                            flex items-center justify-center
                            hover:scale-110 active:scale-95
                            border border-gray-600/30 hover:border-[#0ef]/50
                        `}
                    >
                        <HiOutlineChevronDoubleRight className="w-6 h-6 lg:w-7 lg:h-7" />
                    </button>
                </div>

                {/* Logo */}
                <div className={`${open ? 'block' : 'hidden'} text-center px-6 lg:px-8 mb-12 lg:mb-16`}>
                    <Link 
                        href='/'
                        className="bg-gradient-to-r from-[#0ef] via-blue-400 to-violet-500 
                                   bg-clip-text text-5xl lg:text-6xl xl:text-7xl font-black text-transparent 
                                   hover:scale-110 transition-all duration-500
                                   drop-shadow-2xl animate-pulse"
                    >
                        SB
                    </Link>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#0ef] to-violet-500 mx-auto mt-4 rounded-full animate-pulse"></div>
                </div>

                {/* Menu Items */}
                <nav className='flex-1 px-6 lg:px-8 space-y-3 lg:space-y-4'>
                    {menus.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                group relative flex items-center gap-5 lg:gap-6 p-4 lg:p-5 xl:p-6 rounded-2xl
                                font-semibold transition-all duration-500 ease-out
                                transform hover:scale-105 active:scale-95
                                ${pathname === item.link 
                                    ? 'bg-gradient-to-r from-[#0ef]/20 via-blue-500/20 to-violet-500/20 text-white shadow-2xl shadow-[#0ef]/20 scale-105 border border-[#0ef]/30' 
                                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:text-white hover:shadow-xl'
                                }
                                before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#0ef]/0 before:to-violet-500/0
                                hover:before:from-[#0ef]/10 hover:before:to-violet-500/10 before:transition-all before:duration-500
                                backdrop-blur-sm
                            `}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <span className={`
                                text-2xl lg:text-3xl xl:text-3xl transition-all duration-500
                                ${pathname === item.link 
                                    ? 'scale-125 text-[#0ef] drop-shadow-lg' 
                                    : 'group-hover:scale-125 group-hover:text-[#0ef] group-hover:drop-shadow-lg'
                                }
                                group-hover:rotate-12
                            `}>
                                {item.icon}
                            </span>
                            
                            <span 
                                className={`
                                    text-base lg:text-lg xl:text-xl font-semibold transition-all duration-700
                                    ${!open && 'opacity-0 translate-x-32 overflow-hidden'}
                                    ${pathname === item.link ? 'text-white drop-shadow-md' : ''}
                                `}
                                style={{ 
                                    transitionDelay: `${index * 80}ms`,
                                }}
                            >
                                {item.menu}
                            </span>

                            {/* Active indicator */}
                            <div className={`
                                absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#0ef] to-violet-500 rounded-r-full
                                transition-all duration-500 ${pathname === item.link ? 'opacity-100' : 'opacity-0'}
                            `}></div>

                            {/* Hover effect line */}
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0ef] to-violet-500 
                                          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>

                            {/* Tooltip for collapsed state */}
                            <span className={`
                                ${open && 'opacity-0 pointer-events-none'} 
                                absolute left-24 lg:left-28 xl:left-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm lg:text-base
                                px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap
                                transform scale-0 group-hover:scale-100 transition-all duration-300
                                z-50 border border-gray-600/50 backdrop-blur-lg
                                before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 
                                before:border-4 before:border-transparent before:border-r-gray-800
                            `}>
                                {item.menu}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Bottom decoration */}
                <div className="p-6 lg:p-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 backdrop-blur-lg shadow-2xl border-t border-gray-700/50">
                    <div className="flex justify-around items-center py-3">
                        {menus.slice(0, 5).map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={handleLinkClick}
                                className={`
                                    flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300
                                    transform hover:scale-110 active:scale-95
                                    ${pathname === item.link 
                                        ? 'text-[#0ef] scale-110 bg-gray-700/50 shadow-lg shadow-[#0ef]/20' 
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                                    }
                                `}
                            >
                                <span className={`text-xl transition-all duration-300 ${
                                    pathname === item.link ? 'drop-shadow-lg' : ''
                                }`}>{item.icon}</span>
                                <span className="text-xs font-medium">{item.menu}</span>
                            </Link>
                        ))}
                        
                        {/* More menu for remaining items */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="flex flex-col items-center gap-1 p-3 rounded-xl text-gray-400 hover:text-white 
                                     hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-110 active:scale-95"
                        >
                            <HiMenuAlt3 className="text-xl" />
                            <span className="text-xs font-medium">More</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <div className={`
                md:hidden fixed inset-0 z-50 transform transition-all duration-500 ease-out
                ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}>
                <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 h-full flex flex-col backdrop-blur-xl">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ef]/10 via-transparent to-violet-500/10 animate-pulse"></div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between p-8 border-b border-gray-700/50">
                        <Link 
                            href='/'
                            className="bg-gradient-to-r from-[#0ef] to-violet-500 bg-clip-text text-4xl font-black text-transparent
                                     hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                            onClick={handleLinkClick}
                        >
                            SB
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white hover:text-[#0ef] transition-all duration-300 p-3 rounded-full
                                     hover:bg-gray-700/50 hover:scale-110 active:scale-95 border border-gray-600/30"
                        >
                            <HiX className="w-7 h-7" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 p-8 space-y-6">
                        {menus.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={handleLinkClick}
                                className={`
                                    flex items-center gap-6 p-5 rounded-2xl transition-all duration-500
                                    transform hover:scale-105 active:scale-95
                                    ${pathname === item.link 
                                        ? 'bg-gradient-to-r from-[#0ef]/20 to-blue-500/20 text-white shadow-2xl shadow-[#0ef]/20 border border-[#0ef]/30' 
                                        : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:text-white'
                                    }
                                    backdrop-blur-sm
                                `}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <span className={`text-2xl transition-all duration-300 ${
                                    pathname === item.link 
                                        ? 'text-[#0ef] scale-125 drop-shadow-lg' 
                                        : 'group-hover:text-[#0ef] group-hover:scale-125'
                                }`}>{item.icon}</span>
                                <span className="text-xl font-semibold">{item.menu}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className={`
                min-h-screen transition-all duration-700 ease-in-out
                ${open ? 'md:ml-80 lg:ml-72 xl:ml-80' : 'md:ml-20 lg:ml-24 xl:ml-28'}
                pb-24 md:pb-0
            `}>
                <div className="relative">
                    <div className="">
                        {children}
                    </div>
                </div>
            </main>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;