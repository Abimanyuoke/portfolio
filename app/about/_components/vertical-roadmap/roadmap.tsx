"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface JourneyItem {
    title: string;
    description: string;
    side: "left" | "right";
}

const journeyData: JourneyItem[] = [
    { title: "SMK Negeri 4 Malang", description: "Mulai belajar Rekayasa Perangkat Lunak, fokus pada Backend.", side: "left" },
    { title: "PaperPlay Studio", description: "Backend & Mobile Developer Intern. Membangun SaaS platforms.", side: "right" },
    { title: "Trivox Studio", description: "Full Stack Developer. Menangani proyek AI dan Dashboard.", side: "left" },
    { title: "Future Goals", description: "Membangun produk digital yang berdampak global.", side: "right" },
];

export default function JourneyTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Ambil progress scroll di dalam kontainer ini
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // 2. Buat pergerakan garis menjadi smooth (spring)
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative max-w-5xl mx-auto py-20 px-5">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold uppercase tracking-widest">Explore My Journey</h2>
                <p className="text-zinc-500 mt-2">Technologies that define my craft.</p>
            </div>

            <div className="relative">
                {/* GARIS TENGAH STATIS (Background) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-zinc-200" />

                {/* GARIS ORANGE DINAMIS (Progress) */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-orange-500 z-10"
                />

                {journeyData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
}

function TimelineItem({ item, index, scrollYProgress }: {
    item: JourneyItem;
    index: number;
    scrollYProgress: any
}) {
    // Hitung kapan lingkaran ini harus menyala orange
    // Misal: item ke-0 menyala di 0%, item ke-1 di 33%, dst.
    const step = 1 / (journeyData.length - 1);
    const threshold = step * index;

    // Logika warna lingkaran berdasarkan scroll
    const circleColor = useTransform(
        scrollYProgress,
        [threshold - 0.1, threshold],
        ["#e4e4e7", "#f97316"] // Dari zinc-200 ke orange-500
    );

    return (
        <div className={`relative flex items-center justify-between mb-24 w-full ${item.side === "right" ? "flex-row-reverse" : ""
            }`}>
            {/* TULISAN */}
            <div className="w-[45%]">
                <motion.div
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.description}</p>
                </motion.div>
            </div>

            {/* LINGKARAN TENGAH */}
            <motion.div
                style={{ backgroundColor: circleColor }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-20 border-4 border-white shadow-sm"
            />

            {/* Spacer untuk sisi kosong */}
            <div className="w-[45%]" />
        </div>
    );
}