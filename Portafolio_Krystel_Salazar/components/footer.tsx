"use client";

import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-transparent">
      <div className="container-page">
        <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <a
            href="mailto:tucorreo@ejemplo.com"
            className="text-sm text-blue-600 transition hover:underline dark:text-blue-400"
          >
            krisachava@gmail.com
          </a>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Krystel Fabiana Salazar Chavarría
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a
              href="https://github.com/Krys-Salazar-Ch"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/krystel-salazar/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}