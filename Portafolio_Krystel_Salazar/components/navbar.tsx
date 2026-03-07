"use client";

import Link from "next/link";
import { Sparkles, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contáctame" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;

    if (savedTheme === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else if (savedTheme === "light") {
      html.classList.remove("dark");
      setTheme("light");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (systemDark) {
        html.classList.add("dark");
        setTheme("dark");
      } else {
        html.classList.remove("dark");
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (nextTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-darkBg/70 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-900 dark:text-white"
        >
          <span className="rounded-full border border-slate-300 bg-slate-100 p-2 text-accentSoft dark:border-white/15 dark:bg-white/10">
            <Sparkles className="size-4" />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex dark:text-slate-300">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:scale-[1.05] dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          )}


        </div>
      </div>
    </header>
  );
}