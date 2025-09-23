"use client"

import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    className?: string;
}

export default function Card({
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    className = ""
}: ProjectCardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            <Github size={16} />
                            Code
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}