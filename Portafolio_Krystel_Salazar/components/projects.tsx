"use client"

import { useGithubProjects } from "@/hooks/usegithubproyects"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export function Projects() {
  const { projects, loading } = useGithubProjects()

  return (
    <section
      id="projects"
      className="bg-transparent py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-500 dark:text-violet-400 md:text-sm">
            Proyectos Destacados
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-[#e7e9f2] md:text-5xl">
            Portafolio
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-violet-500" />
        </div>

        {loading ? (
          <p className="mt-14 text-center text-slate-600 dark:text-slate-300">
            Cargando proyectos...
          </p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group w-full overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md dark:border-violet-500/15 dark:bg-[#0b1020] dark:hover:border-violet-400/40"
              >
                <div className="relative h-[185px] overflow-hidden bg-slate-100 dark:bg-[#090f1c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-900/5 transition duration-300 group-hover:bg-slate-900/20 group-hover:backdrop-blur-[2px] dark:bg-[#0a0f1f]/10 dark:group-hover:bg-[#0a0f1f]/50" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex translate-y-3 items-center gap-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] transition hover:scale-105"
                          aria-label={`Ver demo de ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition hover:scale-105 hover:bg-slate-100 dark:bg-[#12172c]/90 dark:text-[#d7dcff] dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)] dark:hover:bg-[#1b2140]"
                        aria-label={`Ver código de ${project.title}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-5 py-5 dark:bg-[#0d1326]">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-[#f0f3ff]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-[#9aa3c7]">
                    {project.descriptionEs}
                  </p>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
                  >
                    Ver más detalles
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-transparent dark:bg-[#141a33] dark:text-violet-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}