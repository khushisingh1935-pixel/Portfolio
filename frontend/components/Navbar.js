'use client';

import { useState, useEffect } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return newMode;
        });
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
            ${scrolled
                ? "bg-pink-100/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md shadow-pink-200/40 dark:shadow-zinc-800/40"
                : "bg-pink-100 dark:bg-zinc-900"
            }
            text-pink-800 dark:text-pink-300`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="font-bold text-2xl tracking-tight">
                    Khushi's Portfolio ღ
                </h1>

                <div className="flex space-x-8 items-center">
                    {["about", "skills", "projects", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="capitalize relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
                        >
                            {section}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="bg-pink-700 dark:bg-pink-300 text-white dark:text-zinc-900 px-4 py-2 rounded-md hover:bg-pink-600 dark:hover:bg-pink-400 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
}