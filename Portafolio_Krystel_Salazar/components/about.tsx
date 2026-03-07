"use client";

import Image from "next/image";
import {
  Atom,
  Code2,
  Database,
  Figma,
  Flame,
  GraduationCap,
  BriefcaseBusiness,
  GitBranch,
  Wrench,
  MonitorCog,
  Users,
  SearchCheck,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "React Query",
  "React Hook Form",
  "Figma",
  "Git",
  "GitHub",
  "Firebase",
  "Supabase",
];

const languages = ["Español (nativo)", "Inglés (en proceso de aprendizaje)"];

const experience = [
  {
    title: "Cámara de Ganaderos de Hojancha, Guanacaste",
    role: "Proyecto de Ingeniería",
    period: "2025 - 2026",
    description:
      "Participé en el desarrollo de un sitio web informativo y un sistema administrativo para la Cámara de Ganaderos de Hojancha, Guanacaste, trabajando en frontend y backend para mejorar la gestión interna.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "MySQL", "Git", "GitHub"],
  },
  {
    title: "Cemprodeca Hojancha, Guanacaste",
    role: "Práctica Profesional – Técnico Medio en Informática Empresarial",
    period: "2025",
    description:
      "Realicé mi práctica profesional brindando apoyo en tareas relacionadas con soporte técnico, mantenimiento de equipos y asistencia en el uso de herramientas informáticas dentro de un entorno empresarial.",
    skillsDeveloped: [
      "Soporte técnico",
      "Mantenimiento de equipos",
      "Asistencia a usuarios",
      "Resolución de problemas",
    ],
  },
];

const education = [
  {
    title: "Universidad Nacional de Costa Rica",
    degree: "Bachillerato en Ingeniería en Sistemas de Información",
    period: "2023 - Actualidad",
    description:
      "Enfoque en desarrollo de aplicaciones web, bases de datos e ingeniería de software.",
  },
  {
    title: "Universidad Nacional de Costa Rica",
    degree: "Diplomado en Programación de Aplicaciones Informáticas",
    period: "2023 - 2025",
    description:
      "Fundamentos en programación, estructuras de datos y desarrollo de software.",
  },
  {
    title: "Colegio Técnico Profesional de Hojancha",
    degree: "Técnico Medio en Informática Empresarial",
    period: "2017 - 2022",
    description:
      "Formación técnica en informática empresarial enfocada en soporte técnico, mantenimiento de equipos y herramientas tecnológicas para entornos empresariales.",
  },
];

function SkillIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("react")) return <Atom className="h-4 w-4" />;
  if (normalized.includes("tailwind")) return <Flame className="h-4 w-4" />;
  if (normalized.includes("figma")) return <Figma className="h-4 w-4" />;
  if (normalized.includes("git")) return <GitBranch className="h-4 w-4" />;
  if (normalized.includes("firebase")) return <Flame className="h-4 w-4" />;
  if (normalized.includes("supabase")) return <Database className="h-4 w-4" />;

  if (normalized.includes("soporte")) return <MonitorCog className="h-4 w-4" />;
  if (normalized.includes("mantenimiento")) return <Wrench className="h-4 w-4" />;
  if (normalized.includes("usuarios")) return <Users className="h-4 w-4" />;
  if (normalized.includes("problemas")) return <SearchCheck className="h-4 w-4" />;

  return <Code2 className="h-4 w-4" />;
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-400/10 dark:bg-[#111a35] dark:text-violet-300">
      <SkillIcon label={label} />
      {label}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
        {children}
      </h2>
      <div className="mt-3 h-px w-full bg-slate-200 dark:bg-white/10" />
    </div>
  );
}

type TimelineCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tech?: string[];
  skillsDeveloped?: string[];
};

function TimelineCard({
  icon,
  title,
  subtitle,
  period,
  description,
  tech,
  skillsDeveloped,
}: TimelineCardProps) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />

      <div className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-violet-600 shadow-sm dark:border-white/10 dark:bg-[#11182c] dark:text-violet-300">
        {icon}
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 shadow-sm md:px-7 md:py-7 dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-[#eef2ff] md:text-2xl">
              {title}
            </h3>

            <p className="mt-2 text-base font-medium text-slate-800 dark:text-white md:text-lg">
              {subtitle}
            </p>
          </div>

          <p className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400 md:text-base">
            {period}
          </p>
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
          {description}
        </p>

        {tech && tech.length > 0 && (
          <>
            <p className="mt-6 text-base font-semibold text-slate-900 dark:text-white md:text-lg">
              Tecnologías utilizadas:
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {tech.map((item) => (
                <Pill key={item} label={item} />
              ))}
            </div>
          </>
        )}

        {skillsDeveloped && skillsDeveloped.length > 0 && (
          <>
            <p className="mt-6 text-base font-semibold text-slate-900 dark:text-white md:text-lg">
              Habilidades desarrolladas:
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {skillsDeveloped.map((item) => (
                <Pill key={item} label={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function AboutContent() {
  return (
    <main className="text-slate-900 dark:text-white">
      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-full border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
                <Image
                  src="https://res.cloudinary.com/djobjaogh/image/upload/v1772816474/1731361667116_o3gm6t.jpg"
                  alt="Foto de Krystel Salazar"
                  width={320}
                  height={320}
                  className="h-[220px] w-[220px] object-cover md:h-[240px] md:w-[240px] lg:h-[250px] lg:w-[250px]"
                  priority
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Perfil Profesional
              </h1>

              <h2 className="mt-4 text-xl text-slate-600  sm:text-2xl text-violet-500 dark:text-violet-40">
                Ingeniería en Sistemas
              </h2>

              <p className="mt-5 max-w-[720px] text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                Soy estudiante de Ingeniería en Sistemas con experiencia participando en el desarrollo de plataformas web para organizaciones reales. Durante mi formación he trabajado en proyectos donde he desarrollado soluciones que integran frontend, backend y bases de datos para apoyar procesos administrativos y operativos.

Me interesa comprender cómo se diseñan y estructuran los sistemas de software, desde la lógica de las aplicaciones hasta la organización de los datos y la arquitectura que permite que las soluciones sean funcionales, seguras y escalables.
              </p>


            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-6 md:py-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl lg:text-left">
              Habilidades y Herramientas
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {skills.map((skill) => (
                <Pill key={skill} label={skill} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl lg:text-left">
              Idiomas
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {languages.map((language) => (
                <span
                  key={language}
                  className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-medium text-violet-700 dark:border-violet-400/10 dark:bg-[#111a35] dark:text-[#e9ecff] md:text-base"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-18">
        <SectionTitle>Experiencia</SectionTitle>

        <div className="space-y-8">
          {experience.map((item) => (
            <TimelineCard
              key={`${item.title}-${item.period}`}
              icon={<BriefcaseBusiness className="h-4 w-4" />}
              title={item.title}
              subtitle={item.role}
              period={item.period}
              description={item.description}
              tech={item.tech}
              skillsDeveloped={item.skillsDeveloped}
            />
          ))}
        </div>
      </section>

      <section className="container-page py-8 pb-20 md:py-10 md:pb-24">
        <SectionTitle>Educación</SectionTitle>

        <div className="space-y-8">
          {education.map((item) => (
            <TimelineCard
              key={`${item.title}-${item.period}-${item.degree}`}
              icon={<GraduationCap className="h-4 w-4" />}
              title={item.title}
              subtitle={item.degree}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}