"use client";
import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
 const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [scrollProgress, setScrollProgress] = useState(0);
 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled || menuOpen
        ? "bg-white dark:bg-gray-900 shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
            NN
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Neric<span className={`transition-colors duration-300 ${scrolled || menuOpen ? "text-gray-900 dark:text-white" : "text-white"}`}>Nigob</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={`transition font-medium hover:text-blue-400 ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}>About</a>
          <a href="#skills" className={`transition font-medium hover:text-blue-400 ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}>Skills</a>
          <a href="#projects" className={`transition font-medium hover:text-blue-400 ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}>Projects</a>
          <a href="#contact" className={`transition font-medium hover:text-blue-400 ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}>Contact</a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              scrolled
                ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile: Dark Mode + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl transition-colors duration-300 ${
              scrolled || menuOpen ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-6 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-700">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-400 transition pt-4">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-400 transition">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-400 transition">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-400 transition">Contact</a>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

    </nav>
  );
}