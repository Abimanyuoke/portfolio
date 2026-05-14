"use client"

import React from "react";
import { useHoverSound } from "../hooks/useSound";

export default function Navbar() {
  // Panggil fungsi playSound
  const playHover = useHoverSound("/sounds/hover.mp3");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="flex gap-8 p-6">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onMouseEnter={playHover} // Pemicu suara saat mouse masuk
          className="text-white hover:text-[#ffc95b] transition-colors duration-300"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}