"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutSection from "./about-hero-section";

export default function AboutHero() {

    return (
        <section className="relative bg-white dark:bg-gray-900 overflow-visible my-6">
            <div className="relative min-h-[110vh] w-full bg-[#0a0a0a] flex flex-col items-center justify-center -mt-[100px] z-10">
                <div className="max-w-5xl px-6 py-32 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        I'm <span className="text-[#ffc95b]">Abim</span> — <br className="hidden md:block" />
                        a Full Stack Developer crafting fast, scalable, and immersive digital experiences.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        I specialize in developing <span className="text-white font-medium">SaaS platforms</span>,
                        AI-driven products, and interactive 3D web experiences using technologies
                        like <span className="text-[#ffc95b]">Next.js</span>, Node.js, and Three.js.
                    </motion.p>

                    <div className="mt-12">
                        <button className="group relative px-10 py-4 bg-transparent border border-[#ffc95b] text-[#ffc95b] overflow-hidden rounded-full transition-colors duration-500 hover:text-black">
                            <span className="absolute inset-0 w-0 bg-[#ffc95b] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
                            <span className="relative z-10 font-bold tracking-[0.2em] text-sm">
                                ABOUT ME
                            </span>
                        </button>
                    </div>
                </div>
                 {/* Journey Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div>
                            <AboutSection />
                        </div>
                    </div>
            </div>
        </section>
    );
}