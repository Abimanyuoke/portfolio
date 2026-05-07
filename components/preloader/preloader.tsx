"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings: string[] = [
    "Hello", "Bonjour", "Servus", "नमस्ते",
    "안녕하세요", "ハロー", "你好", "مرحباً", "Привет", 
];

export default function Preloader() {
    const [index, setIndex] = useState<number>(0);
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        // 180ms adalah 'sweet spot' — tidak terlalu lambat, tidak terasa buru-buru
        const intervalTime = 180; 

        if (index === greetings.length - 1) {
            // Memberikan waktu 1.2 detik pada kata terakhir agar transisi ke konten terasa tenang
            const timeout = setTimeout(() => setShowLoader(false), 1200);
            return () => clearTimeout(timeout);
        }

        const timer = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, intervalTime);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Custom cubic-bezier untuk efek smooth 'mahal'
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]">
                    <div className="relative flex items-center">
                        {/* Indikator dengan opacity tipis agar tidak mengganggu fokus ke teks */}
                        <div className="w-3 h-3 rounded-full bg-white mr-3 animate-pulse" />
                        
                        <div className="h-24 flex items-center justify-center min-w-[250px]">
                            <motion.h1
                                key={index}
                                // Gunakan opacity sangat halus (0.8 ke 1) untuk menghilangkan kesan patah
                                initial={{ opacity: 0.8 }} 
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-white tracking-tight text-center">
                                {greetings[index]}
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}