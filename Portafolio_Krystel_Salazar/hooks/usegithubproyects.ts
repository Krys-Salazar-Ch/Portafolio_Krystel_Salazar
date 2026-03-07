"use client"

import { useEffect, useState } from "react"

type ProjectMeta = {
  title: string
  descriptionEs: string
  descriptionEn: string
  tech: string[]
  image: string
  demoUrl?: string
}

export type PortfolioProject = {
  id: number
  repoName: string
  githubUrl: string
  language: string | null
  title: string
  descriptionEs: string
  descriptionEn: string
  tech: string[]
  image: string
  demoUrl?: string
}

const projectMeta: Record<string, ProjectMeta> = {
  Admin_CamaraGanaderosHojancha: {
    title: "Sistema Administrativo CGH",
    descriptionEs:
      "Sistema administrativo para la gestión interna de la Cámara de Ganaderos de Hojancha, con enfoque en organización, control y eficiencia operativa.",
    descriptionEn:
      "Administrative system for the internal management of the Cámara de Ganaderos de Hojancha, focused on organization, control, and operational efficiency.",
    tech: ["React", "TypeScript", "Tailwind"],
    image:
      "https://res.cloudinary.com/djobjaogh/image/upload/v1772809579/Captura_de_pantalla_2026-03-06_090133_ifjxid.png",
    demoUrl: "https://administrative.camaraganaderoshojancha.cloud/login"
  },

  CamaraGanaderosHojancha_Front: {
    title: "Plataforma Informativa CGH",
    descriptionEs:
      "Frontend de la plataforma digital de la Cámara de Ganaderos de Hojancha, diseñado para ofrecer una experiencia visual clara, moderna y funcional.",
    descriptionEn:
      "Frontend for the digital platform of the Cámara de Ganaderos de Hojancha, designed to provide a clear, modern, and functional visual experience.",
    tech: ["React", "TypeScript", "Tailwind"],
    image:
      "https://res.cloudinary.com/djobjaogh/image/upload/v1772809984/InformativeIMG_zpefv0.png",
      demoUrl: "https://www.camaraganaderoshojancha.cloud/"
  },


"StroopGame-Frontend": {
    title: "Stroop Game",
    descriptionEs:
      "Interfaz frontend para un juego interactivo basado en el efecto Stroop, enfocada en claridad visual e interacción dinámica.",
    descriptionEn:
      "Frontend interface for an interactive game based on the Stroop effect, focused on visual clarity and dynamic interaction.",
    tech: ["React", "TypeScript", "Tailwind"],
    image:
      "https://res.cloudinary.com/djobjaogh/image/upload/v1772811040/Captura_de_pantalla_2026-03-06_092813_ihq9sp.png",
  },
  Progra4ProyectoFrontend: {
    title: "Proyecto Frontend Programación IV",
    descriptionEs:
      "Aplicación frontend desarrollada como parte de un proyecto académico, con énfasis en estructura, interacción y experiencia de usuario.",
    descriptionEn:
      "Frontend application developed as part of an academic project, with emphasis on structure, interaction, and user experience.",
    tech: ["React", "TypeScript", "Tailwind"],
    image:
      "https://res.cloudinary.com/djobjaogh/image/upload/v1772811381/Captura_de_pantalla_2026-03-06_093558_npedeo.png",
  },

}

export function useGithubProjects() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)

  const repoNames = [
    "Admin_CamaraGanaderosHojancha",
    "CamaraGanaderosHojancha_Front",
    "StroopGame-Frontend",
    "Progra4ProyectoFrontend",
  ]

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await Promise.all(
          repoNames.map(async (repoName) => {
            const res = await fetch(
              `https://api.github.com/repos/Krys-Salazar-Ch/${repoName}`
            )

            if (!res.ok) {
              throw new Error(`Repo ${repoName} not found`)
            }

            const repo = await res.json()
            const meta = projectMeta[repoName]

            return {
              id: repo.id,
              repoName: repo.name,
              githubUrl: repo.html_url,
              language: repo.language,
              title: meta?.title ?? repo.name,
              descriptionEs: meta?.descriptionEs ?? "Descripción próximamente.",
              descriptionEn: meta?.descriptionEn ?? "Description coming soon.",
              tech: meta?.tech ?? [],
              image: meta?.image ?? "",
              demoUrl: meta?.demoUrl,
            }
          })
        )

        setProjects(repos)
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { projects, loading }
}