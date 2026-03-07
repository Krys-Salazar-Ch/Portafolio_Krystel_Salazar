"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-500 md:text-sm">
              Contáctame
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-[#eef2ff] md:text-4xl">
              Hablemos de tu próximo proyecto
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              Si te interesa colaborar conmigo, tienes una oportunidad de
              práctica, un proyecto freelance o simplemente quieres conectar.
              ¡Puedes escribirme!
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-violet-500" />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            
            {/* CONTACT INFO */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:p-7 dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Información de contacto
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Puedes contactarme por correo o encontrarme en mis perfiles
                profesionales.
              </p>

              <div className="mt-6 space-y-3">

                <a
                  href="mailto:krisachava@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-violet-400/30 dark:border-white/10 dark:bg-[#111a35] dark:text-slate-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-[#0b1228] dark:text-violet-300">
                    <Mail className="h-4 w-4" />
                  </span>

                  <span className="flex flex-col text-left">
                    <span className="font-medium text-slate-900 dark:text-white">
                      Correo
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/krystel-salazar/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-violet-400/30 dark:border-white/10 dark:bg-[#111a35] dark:text-slate-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-[#0b1228] dark:text-violet-300">
                    <Linkedin className="h-4 w-4" />
                  </span>

                  <span className="flex flex-col text-left">
                    <span className="font-medium text-slate-900 dark:text-white">
                      LinkedIn
                    </span>
                  </span>
                </a>

                <a
                  href="https://github.com/Krys-Salazar-Ch"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-violet-400/30 dark:border-white/10 dark:bg-[#111a35] dark:text-slate-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-[#0b1228] dark:text-violet-300">
                    <Github className="h-4 w-4" />
                  </span>

                  <span className="flex flex-col text-left">
                    <span className="font-medium text-slate-900 dark:text-white">
                      GitHub
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:p-7 dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Envíame un mensaje
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Completa este formulario y cuéntame brevemente en qué puedo
                ayudarte.
              </p>

              <form className="mt-6 space-y-4">

                <div className="grid gap-4 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Nombre
                    </label>

                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-[#111a35] dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Correo
                    </label>

                    <input
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-[#111a35] dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Mensaje
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-[#111a35] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
                >
                  Enviar mensaje
                  <Send className="h-4 w-4" />
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}