"use client"

import { useTheme } from "@/hooks/useThem"
import { Moon, Sun } from "lucide-react"


export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme()

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:scale-[1.05] dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}