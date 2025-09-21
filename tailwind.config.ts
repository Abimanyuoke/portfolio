import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx}",    // <- penting kalau pakai lib/
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
} satisfies Config;
