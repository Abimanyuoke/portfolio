"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const greetings: string[] = [
    "Hello", "Bonjour", "Servus", "नमस्ते",
    "안녕하세요", "ハロー", "你好", "مرحباً", "Привет",
];

const curtainVariants: Variants = {
    initial: {
        clipPath: "ellipse(150% 100% at 50% 50%)",
    },
    exit: {
        clipPath: "ellipse(150% 0% at 50% 0%)",
        transition: {
            duration: 1.3,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export default function Preloader() {
    const [index, setIndex] = useState<number>(0);
    const [showLoader, setShowLoader] = useState<boolean>(false); // Default false agar tidak flicker
    const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);

    useEffect(() => {
        // 1. Cek apakah user sudah pernah melihat preloader di sesi ini
        const hasVisited = sessionStorage.getItem("visited");

        if (!hasVisited) {
            setShowLoader(true);
            setIsFirstVisit(true);
            sessionStorage.setItem("visited", "true");
        }
    }, []);

    useEffect(() => {
        // 2. Hanya jalankan timer jika ini adalah kunjungan pertama
        if (!isFirstVisit) return;

        const intervalTime = 190;

        if (index === greetings.length - 1) {
            const timeout = setTimeout(() => setShowLoader(false), 1000);
            return () => clearTimeout(timeout);
        }

        const timer = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, intervalTime);

        return () => clearTimeout(timer);
    }, [index, isFirstVisit]);

    // Jika bukan kunjungan pertama, jangan render apapun
    if (!isFirstVisit) return null;

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    key="loader"
                    variants={curtainVariants}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
                    style={{ willChange: "clip-path" }}
                >
                    <div className="relative flex items-center">
                        <div className="w-2 h-2 rounded-full bg-white mr-4 animate-pulse" />
                        <div className="h-24 flex items-center justify-center min-w-[250px]">
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-white tracking-tight text-center"
                            >
                                {greetings[index]}
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}