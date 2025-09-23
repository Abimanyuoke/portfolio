"use client"
import React from "react";
import Card from "../card";

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
                <Card title={"Abim's Project"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sequi eum! Numquam tempora quisquam enim, distinctio iure illo et ut!"} image={"./image/thumbnail.png"} technologies={["TailwindCss", "Nextjs", "Nodejs", "Prisma"]} />
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