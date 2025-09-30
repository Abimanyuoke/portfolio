"use client";

import React, { useState } from "react";

export default function ScrollbarDemo() {
    const [scrollbarType, setScrollbarType] = useState<'default' | 'thin' | 'thick' | 'glow'>('default');

    const scrollbarClasses = {
        default: '',
        thin: 'scrollbar-thin',
        thick: 'scrollbar-thick',
        glow: 'scrollbar-glow'
    };

    return (
        <div className="space-y-6 p-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Custom Scrollbar Demo
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Scrollbar kustom dengan tema orange yang sesuai dengan desain portfolio
                </p>

                {/* Scrollbar Type Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {Object.keys(scrollbarClasses).map((type) => (
                        <button
                            key={type}
                            onClick={() => setScrollbarType(type as keyof typeof scrollbarClasses)}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize font-medium ${scrollbarType === type
                                    ? 'bg-orange-500 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Scrollbar Demo */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Scrollable Content
                    </h3>
                    <div className={`h-80 w-full overflow-y-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg ${scrollbarClasses[scrollbarType]}`}>
                        <div className="p-4 space-y-3">
                            {[...Array(50)].map((_, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">
                                                Portfolio Item #{i + 1}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Contoh konten portfolio yang dapat di-scroll
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrollbar Demo */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Horizontal Scroll
                    </h3>
                    <div className={`w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-4 ${scrollbarClasses[scrollbarType]}`}>
                        <div className="flex gap-4 pb-2" style={{ width: '800px' }}>
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-32 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-shadow duration-200"
                                >
                                    Card {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Code Example */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            CSS Code Example
                        </h3>
                        <div className={`overflow-auto bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono h-48 ${scrollbarClasses[scrollbarType]}`}>
                            <pre>{`/* Custom Orange Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f97316, #ea580c);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  transform: scale(1.1);
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

/* Dark mode */
.dark ::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f97316, #ea580c);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Firefox support */
html {
  scrollbar-width: thin;
  scrollbar-color: #f97316 transparent;
}`}</pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature List */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ✨ Fitur Custom Scrollbar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Gradient orange theme</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Smooth hover animations</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Dark mode support</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Cross-browser compatible</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Multiple size variants</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700 dark:text-gray-300">Glow effect option</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
