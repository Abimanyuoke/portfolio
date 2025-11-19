"use client"

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import Card from "../../components/card";

// Data projects yang bisa dicari
const allProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
        image: "/image/thumbnail.png",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        githubUrl: "https://github.com/Abimanyuoke/ecommerce-platform",
        liveUrl: "https://your-ecommerce-demo.vercel.app",
        category: "web"
    },
];

// interface ProjectSearchProps {
//     onClose?: () => void;
// }

export default function ProjectSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const searchRef = React.useRef<HTMLDivElement>(null);

    // Fungsi untuk melakukan pencarian
    const handleSearch = (query: string, category: string = selectedCategory) => {
        setIsSearching(true);

        // Simulasi delay untuk efek loading
        setTimeout(() => {
            let results = allProjects;

            // Filter berdasarkan kategori
            if (category !== "all") {
                results = results.filter(project => project.category === category);
            }

            // Filter berdasarkan query pencarian
            if (query.trim()) {
                results = results.filter(project =>
                    project.title.toLowerCase().includes(query.toLowerCase()) ||
                    project.description.toLowerCase().includes(query.toLowerCase()) ||
                    project.technologies.some(tech =>
                        tech.toLowerCase().includes(query.toLowerCase())
                    )
                );
            }

            setFilteredProjects(results);
            setIsSearching(false);
        }, 500);
    };

    // Handle ketika Enter ditekan
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(searchQuery, selectedCategory);
        }
    };

    // Handle perubahan kategori
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        handleSearch(searchQuery, category);
    };

    // Clear search
    const clearSearch = () => {
        setSearchQuery("");
        setSelectedCategory("all");
        setFilteredProjects(allProjects);
    };

    // Load semua projects saat pertama kali render
    useEffect(() => {
        setFilteredProjects(allProjects);
    }, []);

    // Handle click outside dan Escape key untuk close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                // Jika klik di luar area search, bisa tambahkan logic close di sini
                // setIsModalOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false);
                clearSearch();
            }
        };

        // Tambahkan event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    // Handle close
    const handleClose = () => {
        setIsModalOpen(false);
        clearSearch();
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-36">
            <div ref={searchRef} className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Search Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Find projects by name, description, or technology
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Search projects... (Press Enter to search)"
                            className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        {searchQuery && (
                            <button
                                onClick={clearSearch}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                aria-label="Clear search"
                                title="Clear search">
                                <X className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
                        {["all", "web", "mobile"].map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    }`}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                {category === "all" && " Projects"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Instructions */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Type your search query and press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Enter</kbd> to search
                        {" | "}Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">ESC</kbd> to clear and close
                    </p>
                </div>

                {/* Loading State */}
                {isSearching && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500 mr-3"></div>
                            <span className="text-gray-600 dark:text-gray-300">Searching projects...</span>
                        </div>
                    </div>
                )}

                {/* Results */}
                {!isSearching && (
                    <div>
                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                                {searchQuery && ` for "${searchQuery}"`}
                                {selectedCategory !== "all" && ` in ${selectedCategory} category`}
                            </p>
                        </div>

                        {/* Projects Grid */}
                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
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
                        ) : (
                            /* No Results */
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Try adjusting your search terms or category filter
                                </p>
                                <button
                                    onClick={clearSearch}
                                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Close Button (if used as modal) */}
                {isModalOpen && (
                    <div className="fixed top-4 right-4 z-50">
                        <button
                            onClick={handleClose}
                            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-orange-500 hover:text-white group"
                            aria-label="Close search"
                            title="Close search (ESC)">
                            <X className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
