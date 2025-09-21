"use client";

import { useState, useEffect, useRef } from "react";
import "./circle-transition.css";

const SunIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none" />
        <g stroke="#fff" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </g>
    </svg>
);

const MoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" stroke="#222" strokeWidth="2" fill="#fff" />
    </svg>
);

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    const [mounted, setMounted] = useState(false); // penting: biar tidak error SSR
    const [circleActive, setCircleActive] = useState(false);
    const [circleStyle, setCircleStyle] = useState<React.CSSProperties>({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     if (darkMode) {
    //         root.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         root.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }, [darkMode]);
    
    useEffect(() => {
        setMounted(true); // sudah aman di client

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, mounted]);

    if (!mounted) return null;

    const handleToggle = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCircleStyle({
                position: "fixed",
                left: rect.left + rect.width / 2,
                top: rect.top + rect.height / 2,
                width: 48,
                height: 48,
                borderRadius: "50%",
                zIndex: 9999,
                pointerEvents: "none",
                background: darkMode ? "#eee" : "#222",
                transition: "none",
                transform: "translate(-50%, -50%)",
                animation: darkMode ? "circle-move-dark 0.8s forwards" : "circle-move-light 0.8s forwards",
            });
        }
        setCircleActive(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setDarkMode((prev) => !prev);
            setCircleActive(false);
        }, 800); // waktu animasi lingkaran
    };

    return (
        <div>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: 16,
                    border: "none",
                    background: darkMode ? "#222" : "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "background 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
                    marginLeft: 16,
                    position: "relative",
                    zIndex: 10,
                }}
                aria-label="Toggle dark mode">
                <span
                    style={{
                        display: "block",
                        transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
                        transform: darkMode ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                    }}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </span>
            </button>
            {
                circleActive && (
                    <div
                        style={circleStyle} />
                )}
        </div>
    )
}
