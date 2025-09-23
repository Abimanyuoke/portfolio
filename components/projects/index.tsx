"use client"
import React from "react";
import Card from "../card";

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
        image: "/image/thumbnail.png", // You can replace with actual project images
        technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-demo.vercel.app"
    },
    {
        id: 2,
        title: "Online Attendance App",
        description: "An online attendance application that allows users to check in and out using facial recognition technology.",
        image: "/image/thumbnail.png", // You can replace with actual project images
        technologies: ["React", "Node.js", "Python", "PhpMyAdmin"],
        githubUrl: "https://github.com/yourusername/attendance-app",
        liveUrl: "https://your-attendance-demo.vercel.app"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and responsive design.",
        image: "/image/thumbnail.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://your-portfolio.vercel.app"
    },
    {
        id: 4,
        title: "Task Management System",
        description: "A comprehensive task management system with real-time updates, team collaboration, and progress tracking.",
        image: "/image/thumbnail.png",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://your-task-manager.vercel.app"
    }
];

export default function Projects() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for development.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    View More Projects
                </button>
            </div>
        </section>
    );
}