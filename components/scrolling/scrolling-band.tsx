"use client";

import { motion } from "framer-motion";

interface ScrollingBandProps {
  baseVelocity: number; // Kecepatan & arah (positif/negatif)
  text: string;
  className?: string;
}

export default function ScrollingBand({ baseVelocity, text, className }: ScrollingBandProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap font-bold text-2xl md:text-4xl uppercase tracking-tighter"
        animate={{
          // Menggerakkan kontainer sebesar 50% agar terlihat menyambung sempurna
          x: baseVelocity > 0 ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          ease: "linear",
          duration: 20, // Semakin kecil semakin cepat
          repeat: Infinity,
        }}
      >
        {/* Kita mengulang teks berkali-kali agar tidak ada celah kosong */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-4">{text}</span>
            <span className="mx-4 text-zinc-500">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}