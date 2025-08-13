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
        <div >
            {/* Desktop Sidebar */}
            <div className={`
                hidden md:flex md:flex-col md:fixed md:top-0 md:left-0 md:h-full
                ${open ? 'md:w-64' : 'md:w-20'} 
                duration-500 ease-in-out
                bg-gradient-to-b from-gray-900 to-gray-800 
                shadow-2xl z-30
            `}>
                {/* Toggle Button */}
                <div className='flex justify-end p-4'>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`
                            ${open ? 'rotate-180' : 'rotate-0'} 
                            duration-500 ease-in-out cursor-pointer 
                            w-8 h-8 text-white hover:text-[#0ef] 
                            transition-colors rounded-full hover:bg-gray-700 
                            flex items-center justify-center
                        `}
                    >
                        <HiOutlineChevronDoubleRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Logo */}
                <div className={`${open ? 'block' : 'hidden'} text-center px-4 mb-8`}>
                    <Link 
                        href='/'
                        className="bg-gradient-to-r from-[#0ef] via-blue-500 to-violet-500 
                                   bg-clip-text text-4xl xl:text-5xl font-black text-transparent 
                                   hover:scale-105 transition-transform duration-300"
                    >
                        SB
                    </Link>
                </div>

                {/* Menu Items */}
                <nav className='flex-1 px-4 space-y-2'>
                    {menus.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                group relative flex items-center gap-4 p-3 rounded-xl
                                font-medium transition-all duration-300 ease-in-out
                                ${pathname === item.link 
                                    ? 'bg-gradient-to-r from-[#0ef] to-blue-500 text-white shadow-lg transform scale-105' 
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            `}
                        >
                            <span className={`
                                text-xl xl:text-2xl transition-transform duration-300
                                ${pathname === item.link ? 'scale-110' : 'group-hover:scale-110'}
                            `}>
                                {item.icon}
                            </span>
                            
                            <span 
                                className={`
                                    text-sm xl:text-base font-medium transition-all duration-500
                                    ${!open && 'opacity-0 translate-x-28 overflow-hidden'}
                                `}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {item.menu}
                            </span>

                            {/* Tooltip for collapsed state */}
                            <span className={`
                                ${open && 'opacity-0 pointer-events-none'} 
                                absolute left-16 bg-gray-900 text-white text-sm
                                px-3 py-2 rounded-lg shadow-lg whitespace-nowrap
                                transform scale-0 group-hover:scale-100 transition-transform duration-200
                                z-50 border border-gray-700
                            `}>
                                {item.menu}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg shadow-2xl border-t border-gray-700">
                    <div className="flex justify-around items-center py-2">
                        {menus.slice(0, 5).map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={handleLinkClick}
                                className={`
                                    flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300
                                    ${pathname === item.link 
                                        ? 'text-[#0ef] scale-110 bg-gray-700' 
                                        : 'text-gray-400 hover:text-white'
                                    }
                                `}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-xs font-medium">{item.menu}</span>
                            </Link>
                        ))}
                        
                        {/* More menu for remaining items */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <HiMenuAlt3 className="text-lg" />
                            <span className="text-xs font-medium">More</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <div className={`
                md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
                ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <Link 
                            href='/'
                            className="bg-gradient-to-r from-[#0ef] to-violet-500 bg-clip-text text-3xl font-black text-transparent"
                            onClick={handleLinkClick}
                        >
                            SB
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white hover:text-[#0ef] transition-colors duration-300 p-2"
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
                                    flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                                    ${pathname === item.link 
                                        ? 'bg-gradient-to-r from-[#0ef] to-blue-500 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }
                                `}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-lg font-medium">{item.menu}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className={`
                min-h-screen transition-all duration-500 ease-in-out
                ${open ? 'md:ml-64' : 'md:ml-20'}
                pb-20 md:pb-0
            `}>
                <div className="">
                    <div className="">
                        {children}
                    </div>
                </div>
            </main>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;