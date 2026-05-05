import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "../lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 transition-all duration-500 px-12",
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-500 border border-white/10 shadow-2xl overflow-hidden px-12 py-3",
          scrolled ? "bg-dark/90 backdrop-blur-xl" : "bg-dark",
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Zap className="text-dark w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-display font-black text-white tracking-tight uppercase">
                TERANGA <span className="text-primary">TE</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Accueil", href: "/" },
              { name: "À propos", href: "#a-propos" },
              { name: "Expertises", href: "#expertises" },
              { name: "Offres", href: "#offres" },
              { name: "Références", href: "#references" },
              { name: "Sahel", href: "#sahel" },
              { name: "Contact", href: "#contact" },
              { name: "Carrières", href: "#carrieres" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-black text-white hover:text-primary transition-colors uppercase tracking-widest px-2 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[110%] left-6 right-6 bg-dark rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-50"
          >
            <div className="flex flex-col p-8 gap-6">
              {[
                { name: "Accueil", href: "/" },
                { name: "À propos", href: "#a-propos" },
                { name: "Expertises", href: "#expertises" },
                { name: "Offres", href: "#offres" },
                { name: "Références", href: "#references" },
                { name: "Sahel", href: "#sahel" },
                { name: "Contact", href: "#contact" },
                { name: "Carrières", href: "#carrieres" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-black text-white hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
