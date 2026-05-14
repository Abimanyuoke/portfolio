"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    // Animasi Smooth dengan useSpring agar tidak kaku
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const borderRadius = useTransform(smoothProgress, [0, 1], ["10%", "0%"]);

    // Efek scale sedikit membesar saat muncul
    const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative bg-[#0a0a0a] overflow-hidden">
            <motion.div
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    scale
                }}
                className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden origin-bottom"
            >
                <div className="max-w-5xl px-6 py-20 text-center">
                    <motion.h1
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                    >
                        I'm <span className="text-[#ffc95b]">Abim</span> — <br className="hidden md:block" />
                        a Full Stack Developer crafting fast, scalable, and immersive digital experiences.
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        I specialize in developing <span className="text-white">SaaS platforms</span>,
                        AI-driven products, and interactive 3D web experiences using technologies
                        like <span className="text-[#ffc95b]">Next.js</span>, Node.js, and Three.js.
                    </motion.p>

                    <div className="mt-12">
                        <button className="group relative px-10 py-4 bg-transparent border border-[#ffc95b] text-[#ffc95b] overflow-hidden rounded-full transition-colors duration-500 hover:text-black">
                            {/* Animasi warna dari kiri ke kanan */}
                            <span className="absolute inset-0 w-0 bg-[#ffc95b] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>

                            <span className="relative z-10 font-bold tracking-[0.2em] text-sm">
                                ABOUT ME
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}