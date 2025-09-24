"use client"

import React from "react";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto p-4">
                <Navbar />
            </div>
            <Contact />
        </div>
    );
}