"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ParticlesBackground } from "@/components/particles-background";
import TypewriterText from "./typewriterText";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const avatarAnimation = {
  hidden: { opacity: 0, x: -30, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-radial">
      <ParticlesBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container-page relative flex min-h-[calc(100vh-4rem)] items-center pt-12 pb-24"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={avatarAnimation}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-fit">
              <img
                src="/images/avatar.png"
                alt="Avatar"
                className="relative z-10 max-h-[520px] w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="max-w-3xl">
            <motion.span
              variants={fadeItem}
              className="glass inline-flex rounded-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200"
            >
              Sistemas • Web • Software
            </motion.span>

            <motion.h1
              variants={fadeItem}
              className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl"
            >
              Krystel Salazar
            </motion.h1>

            <motion.h2
              variants={fadeItem}
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
              variants={fadeItem}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              Interesada en la creación de experiencias digitales claras e intuitivas. Me motiva aprender constantemente, experimentar con nuevas tecnologías y aplicar la creatividad para construir soluciones útiles y bien diseñadas.
            </motion.p>

            <motion.div
              variants={fadeItem}
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}