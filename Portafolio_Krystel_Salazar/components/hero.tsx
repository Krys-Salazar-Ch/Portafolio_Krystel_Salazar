"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ParticlesBackground } from "@/components/particles-background";
import TypewriterText from "./typewriterText";


export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-radial">
      <ParticlesBackground />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] items-center py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-fit">
              <img
                src="/images/avatar.png"
                alt="Avatar"
                className="relative z-10 max-h-[520px] w-auto object-contain"
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass inline-flex rounded-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200"
            >
              Sistemas • Web • Software
            </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl"
              >
                Krystel Salazar
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-xl text-slate-600 dark:text-slate-300 sm:text-2xl"
              >
                <TypewriterText
                  words={[
                    "Ingeniería en Sistemas",
                    "Construyendo ideas con código",
                    "Abierta a nuevas oportunidades",
                  ]}
                  className="text-violet-500 dark:text-violet-400"
                />
              </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              Interesada en la creación de experiencias digitales claras e intuitivas. Me motiva aprender constantemente, experimentar con nuevas tecnologías y aplicar la creatividad para construir soluciones útiles y bien diseñadas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
  href="/contact"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white shadow-glow transition hover:scale-[1.02] hover:bg-violet-400"
>
  Contáctame
  <ArrowRight className="size-4" />
</a>
              <a
                href="#projects"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
              >
                <PlayCircle className="size-4" />
                Ver Proyectos
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}