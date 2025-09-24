"use client";

import React from "react";
import DarkMode from "../darkMode";

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 lg:px-20 text-black" style={{ position: "relative", overflow: "visible" }}>
            <h1 className="text-3xl md:text-2xl lg:text-3xl font-light m-0 dark:text-white">ABICODE</h1>
            <nav className="hidden md:flex items-center gap-12 font-light  dark:text-white">
                {/* <a href="/" className="text-base tracking-wider transition-colors hover:text-gray-300  z-50 uppercase">Home</a>
                <a href="/projects" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 uppercase">Projects</a>
                <a href="#contact" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 uppercase">Contact</a>
                <a href="/about" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 uppercase">About</a> */}
                <a href="/" className="text-base tracking-wider transition-colors hover:text-gray-600 dark:hover:text-gray-300 z-50 uppercase">Home</a>
                <a href="/projects" className="text-base tracking-wider transition-colors hover:text-gray-600 dark:hover:text-gray-300 z-50 uppercase">Projects</a>
                <a href="#contact" className="text-base tracking-wider transition-colors hover:text-gray-600 dark:hover:text-gray-300 z-50 uppercase">Contact</a>
                <a href="/about" className="text-base tracking-wider transition-colors hover:text-gray-600 dark:hover:text-gray-300 z-50 uppercase">About</a>
            </nav>

            <DarkMode />
        </header>
    );
}