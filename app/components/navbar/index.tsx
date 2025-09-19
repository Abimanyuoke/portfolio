import React from "react";

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">ABICODE</h1>
            <nav className="hidden md:flex items-center lg:gap-12">
                <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Home</a>
                <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Blog</a>
                <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Works</a>
                <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">About</a>
            </nav>
        </header>
    )
}