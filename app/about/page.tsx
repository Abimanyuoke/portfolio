"use client"

import React from "react";
import { Mail, Linkedin, Github, Twitter, Briefcase, GraduationCap } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
    const experiences = [
        {
            id: 1,
            company: "Zero One Group",
            position: "Product Engineer",
            period: "Jan 2023 — Now",
            logo: "🚀",
            color: "bg-black text-white"
        },
        {
            id: 2,
            company: "Revou",
            position: "Software Engineer Mentor",
            period: "Apr 2024 — Jun 2024",
            logo: "💡",
            color: "bg-yellow-400 text-black"
        },
        {
            id: 3,
            company: "Shumi",
            position: "Frontend Engineer",
            period: "Sep 2019 — Jan 2023",
            logo: "$",
            color: "bg-green-500 text-white"
        },
        {
            id: 4,
            company: "Digiflux Indonesia",
            position: "Frontend Developer",
            period: "Nov 2021 — Mar 2022",
            logo: "🌐",
            color: "bg-blue-500 text-white"
        },
        {
            id: 5,
            company: "Gojek",
            position: "Software Engineer Intern",
            period: "Aug 2021 — Jan 2022",
            logo: "🏍️",
            color: "bg-green-600 text-white"
        },
        {
            id: 6,
            company: "Techbros GmbH",
            position: "Software Engineer Intern",
            period: "Jul 2021 — Sep 2021",
            logo: "⚡",
            color: "bg-purple-500 text-white"
        },
        {
            id: 7,
            company: "Produk Telkom University",
            position: "Software Engineer",
            period: "Jan 2020 — Jul 2021",
            logo: "🎓",
            color: "bg-blue-600 text-white"
        }
    ];

    const socialLinks = [
        {
            icon: Mail,
            href: "mailto:abimfirma@gmail.com",
            label: "Email"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/fanani-akbar-abimanyu-978a03298/",
            label: "LinkedIn"
        },
        {
            icon: Github,
            href: "https://github.com/Abimanyuoke",
            label: "GitHub"
        },
        {
            icon: Twitter,
            href: "https://x.com/Abimanyuoke",
            label: "Twitter"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />

            <div className="pt-20 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Profile Header */}
                    <div className="text-center mb-12">
                        {/* Avatar */}
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                {/* Placeholder avatar - you can replace with actual image */}
                                <svg className="w-20 h-20 text-gray-400" viewBox="0 0 100 100" fill="currentColor">
                                    <circle cx="50" cy="35" r="15" />
                                    <path d="M20 80 Q20 65 35 65 L65 65 Q80 65 80 80" />
                                </svg>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            Fanani Akbar Abimanyu
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                            <span className="text-orange-500">Full Stack Developer</span> • <span className="text-blue-500">Indonesia</span>
                        </p>

                        {/* Bio */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Hi everyone 👋, I'm Abimanyu or <span className="text-orange-500 font-medium">Abim</span>.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                                Interested in software engineering specifically web technologies. Currently living in
                                Indonesia and working as a Product Engineer at <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Zero One Group</a>.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mb-12">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors duration-200 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Experiences Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                            <Briefcase className="w-6 h-6 mr-3 text-orange-500" />
                            Experiences
                        </h2>

                        <div className="space-y-6">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                                    {/* Company Logo */}
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${exp.color} flex-shrink-0`}>
                                        {exp.logo}
                                    </div>

                                    {/* Experience Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {exp.company}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {exp.position}
                                                </p>
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-3 text-orange-500" />
                            Skills & Technologies
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Frontend */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tools & Others</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'Docker', 'AWS', 'Figma', 'Vercel'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fun Facts */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            Fun Facts About Me
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">🚀</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Always Learning</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    I love exploring new technologies and staying up-to-date with the latest trends in web development.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">🎮</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Gaming Enthusiast</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    When I'm not coding, you can find me playing games or watching tech YouTube videos.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">☕</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Coffee Lover</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    My code runs on coffee! I can't start my day without a good cup of coffee.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">🌍</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Open Source</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    I believe in giving back to the community through open source contributions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Let's Work Together!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you want to collaborate or just say hi, feel free to reach out!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                <Briefcase className="w-5 h-5 mr-2" />
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}