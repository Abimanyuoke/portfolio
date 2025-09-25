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
            setIsScrolled(scrollTop > 200);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle smooth scroll to contact
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
                    : 'bg-transparent'
                }`}
        >
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
                            }`}
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/projects"
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                                ? 'text-gray-700 dark:text-gray-200'
                                : 'text-black dark:text-white'
                            }`}
                    >
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="#contact"
                        onClick={handleContactClick}
                        className={`text-base tracking-wider transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 uppercase relative group ${isScrolled
                                ? 'text-gray-700 dark:text-gray-200'
                                : 'text-black dark:text-white'
                            }`}
                    >
                        Contact
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
                </nav>

                {/* Right side - Dark Mode + Mobile Menu */}
                <div className="flex items-center gap-4">
                    <DarkMode />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled
                                ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                                : 'text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
                            }`}
                        aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? 'max-h-64 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className={`backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-t border-gray-200/20 dark:border-gray-700/20`}>
                    <nav className="flex flex-col py-4">
                        <a
                            href="/"
                            className="px-6 py-3 text-base tracking-wider transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/projects"
                            className="px-6 py-3 text-base tracking-wider transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={handleContactClick}
                            className="px-6 py-3 text-base tracking-wider transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200"
                        >
                            Contact
                        </a>
                        <a
                            href="/about"
                            className="px-6 py-3 text-base tracking-wider transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase text-gray-700 dark:text-gray-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}