'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaServer, FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone, MdDashboard } from "react-icons/md";
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
        { menu: 'DB', link: '/dashboard', icon: <MdDashboard /> },
    ];

    const handleLinkClick = () => {
        if (isMobile) {
            setMobileMenuOpen(false);
        }
    };

    if (pathname?.startsWith('/dashboard')) {
        return <>{children}</>;
    }

    return (
        <div>
            {/* Desktop Header */}
            <div className={`
                hidden md:flex md:fixed md:top-0 md:left-0 md:w-full md:h-20
                items-center justify-between px-8 lg:px-16
                bg-gradient-to-r from-slate-950 via-gray-900 to-slate-900
                backdrop-blur-xl border-b border-gray-700/50
                shadow-2xl shadow-black/20 z-30
            `}>

                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href='/'
                        className="bg-gradient-to-r from-[#0ef] via-blue-400 to-violet-500 
                                   bg-clip-text text-3xl lg:text-4xl font-black text-transparent 
                                   hover:scale-110 transition-all duration-500
                                   drop-shadow-2xl animate-pulse"
                    >
                        SB
                    </Link>
                </div>

                {/* Menu Items */}
                <nav className='flex items-center space-x-6 lg:space-x-8'>
                    {menus.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                group relative flex items-center p-2 rounded-xl
                                font-semibold transition-all duration-300 ease-out
                                transform hover:scale-110 active:scale-95
                                ${pathname === item.link
                                    ? 'text-[#0ef] scale-110'
                                    : 'text-gray-300 hover:text-white'
                                }
                            `}
                        >
                            <span
                                className={`
                                    text-base lg:text-lg tracking-wide transition-all duration-300
                                    ${pathname === item.link ? 'text-[#0ef] drop-shadow-md' : 'group-hover:text-[#0ef] group-hover:drop-shadow-lg'}
                                `}
                            >
                                {item.menu}
                            </span>

                            {/* Active indicator (Dot) */}
                            <div className={`
                                absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#0ef] rounded-full
                                transition-all duration-300 ${pathname === item.link ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                            `}></div>

                            {/* Hover effect line */}
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0ef] to-transparent 
                                          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 opacity-50"></div>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 backdrop-blur-lg shadow-2xl border-t border-gray-700/50">
                    <div className="flex justify-around items-center py-2">
                        {menus.slice(0, 5).map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={handleLinkClick}
                                className={`
                                    flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300
                                    transform hover:scale-110 active:scale-95
                                    ${pathname === item.link
                                        ? 'text-[#0ef] scale-105 bg-gray-700/50 shadow-lg shadow-[#0ef]/20'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                                    }
                                `}
                            >
                                <span className={`text-lg transition-all duration-300 ${pathname === item.link ? 'drop-shadow-lg' : ''
                                    }`}>{item.icon}</span>
                                <span className="text-xs font-medium">{item.menu}</span>
                            </Link>
                        ))}

                        {/* More menu for remaining items */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-400 hover:text-white 
                                     hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-110 active:scale-95"
                        >
                            <HiMenuAlt3 className="text-lg" />
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

                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                        <Link
                            href='/'
                            className="bg-gradient-to-r from-[#0ef] to-violet-500 bg-clip-text text-3xl font-black text-transparent
                                     hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                            onClick={handleLinkClick}
                        >
                            SB
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white hover:text-[#0ef] transition-all duration-300 p-2 rounded-full
                                     hover:bg-gray-700/50 hover:scale-110 active:scale-95 border border-gray-600/30"
                        >
                            <HiX className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 p-6 space-y-4">
                        {menus.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={handleLinkClick}
                                className={`
                                    flex items-center gap-5 p-4 rounded-xl transition-all duration-500
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
                                <span className={`text-xl transition-all duration-300 ${pathname === item.link
                                    ? 'text-[#0ef] scale-125 drop-shadow-lg'
                                    : 'group-hover:text-[#0ef] group-hover:scale-125'
                                    }`}>{item.icon}</span>
                                <span className="text-lg font-semibold">{item.menu}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className={`
                min-h-screen transition-all duration-700 ease-in-out
                md:pt-20
                pb-20 md:pb-0
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