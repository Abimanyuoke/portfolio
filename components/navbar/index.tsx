"use client";

import React, { useState, useEffect } from "react";
import DarkMode from "../darkMode";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // Reduced threshold for better responsiveness
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close mobile menu when clicking outside or scrolling
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Don't close if clicking on the menu button or inside the menu
            const target = event.target as HTMLElement;
            if (target.closest('.mobile-menu-button') || target.closest('.mobile-menu')) {
                return;
            }
            setIsMobileMenuOpen(false);
        };

        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen
                ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
                : 'bg-transparent'
                }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 lg:px-20">
                {/* Logo */}
                <h1 className={`text-3xl md:text-2xl lg:text-3xl font-light m-0 transition-colors duration-300 ${isScrolled
                    ? 'text-gray-900 dark:text-white'
                    : 'text-black dark:text-white'
                    }`}>
                    ABICODE
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12 font-light">
                    <a
                        href="/"
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-black dark:text-white'
                            }`}>
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/projects"
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-black dark:text-white'
                            }`}>
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/about"
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-black dark:text-white'
                            }`}>
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/contact"
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-black dark:text-white'
                            }`}>
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </nav>

                {/* Right side - Dark Mode + Mobile Menu */}
                <div className="flex items-center gap-4">
                    <DarkMode />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className={`mobile-menu-button md:hidden p-2 rounded-lg transition-all duration-200 z-[110] relative hover:scale-105 active:scale-95 ${isScrolled
                            ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                            : 'text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
                            }`}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        type="button">
                        <div className="w-6 h-6 flex items-center justify-center relative">
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}>
                                <div className={`transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                                    {isMobileMenuOpen ? (
                                        <X size={20} className="transition-all duration-300 ease-in-out" />
                                    ) : (
                                        <Menu size={20} className="transition-all duration-300 ease-in-out" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu md:hidden transition-all duration-500 ease-in-out z-[105] ${isMobileMenuOpen
                ? 'max-h-96 opacity-100 visible translate-y-0'
                : 'max-h-0 opacity-0 invisible overflow-hidden -translate-y-4'
                }`}>
                <div className={`backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'scale-100' : 'scale-95'}`}>
                    <nav className="flex flex-col py-4">
                        <a
                            href="/"
                            className={`block px-6 py-3 text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200 border-l-4 border-transparent hover:border-orange-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                            style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                            }}>
                            Home
                        </a>
                        <a
                            href="/projects"
                            className={`block px-6 py-3 text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200 border-l-4 border-transparent hover:border-orange-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                            style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                            }}>
                            Projects
                        </a>
                        <a
                            href="/about"
                            className={`block px-6 py-3 text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200 border-l-4 border-transparent hover:border-orange-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                            style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                            }}>
                            About
                        </a>
                        <a
                            href="/contact"
                            className={`block px-6 py-3 text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200 border-l-4 border-transparent hover:border-orange-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                            style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                            }}>
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}