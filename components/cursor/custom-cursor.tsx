"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    // Koordinat mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Konfigurasi pegas (spring) agar gerakan "smooth" dan ada sedikit delay/lembut
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update posisi mouse
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[10000] flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%", // Agar posisi tepat di tengah kursor
                translateY: "-50%",
            }}
        >
        </motion.div>
    );
}