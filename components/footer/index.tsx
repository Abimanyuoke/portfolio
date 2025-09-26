"use client"
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/Abimanyuoke",
            icon: Github,
            color: "hover:text-gray-900 dark:hover:text-gray-100"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/fanani-akbar-abimanyu-978a03298/",
            icon: Linkedin,
            color: "hover:text-blue-600"
        },
        {
            name: "Twitter",
            href: "https://x.com/Abimanyuoke",
            icon: Twitter,
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/fanani_abimanyu/",
            icon: Instagram,
            color: "hover:text-pink-500"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        { name: "About", href: "#about" }
    ];

    const services = [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
    ];

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            ABICODE
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Passionate full-stack developer creating innovative web solutions
                            and memorable digital experiences. Let's build something amazing together.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                                <Mail className="w-4 h-4" />
                                <span>abimfirma@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                                <Phone className="w-4 h-4" />
                                <span>+62 xxx-xxxx-xxxx</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                                <MapPin className="w-4 h-4" />
                                <span>Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 text-sm flex items-center group">
                                        <span>{link.name}</span>
                                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Stay Connected
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Follow me on social media for updates and behind-the-scenes content.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-md`}
                                        aria-label={`Visit my ${social.name} profile`}
                                        title={social.name}>
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Newsletter Signup */}
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
                            <button className="w-full px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                Subscribe to Updates
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                            <span>© {currentYear} ABICODE. Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>in Indonesia</span>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 dark:text-gray-300">Built with:</span>
                            <div className="flex items-center space-x-3">
                                <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                    Next.js
                                </span>
                                <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                    TypeScript
                                </span>
                                <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="flex space-x-4 text-sm">
                            <a
                                href="#privacy"
                                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-200 hover:scale-105 shadow-lg"
                        aria-label="Back to top">
                        <span className="text-sm font-medium">Back to Top</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
