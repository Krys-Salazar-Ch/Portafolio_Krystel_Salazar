"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, AlertCircle } from "lucide-react";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateField = (name: keyof FormData, value: string) => {
    const trimmed = value.trim();

    switch (name) {
      case "name":
        if (trimmed.length < 2) return "Mínimo 2 caracteres.";
        return "";

      case "email":
        if (!trimmed) return "El correo es obligatorio.";
        return "";

      case "message":
        if (trimmed.length < 10) return "Mínimo 10 caracteres.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const nextValue =
      name === "message" ? value.slice(0, 1000) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    if (touched[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name as keyof FormData, nextValue),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormData, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const isValid = validateForm();

    if (!isValid) return;

    console.log("Formulario válido:", formData);

    // Aquí luego puedes conectar EmailJS, Formspree o tu backend
  };

  const inputBaseClass =
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:bg-[#111a35] dark:text-white dark:placeholder:text-slate-500";

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-[1120px]">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeItem}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-500 md:text-sm"
            >
              Contáctame
            </motion.p>

            <motion.h2
              variants={fadeItem}
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-[#eef2ff] md:text-4xl"
            >
              Hablemos de tu próximo proyecto
            </motion.h2>

            <motion.p
              variants={fadeItem}
              className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base"
            >
              Si te interesa colaborar conmigo, tienes una oportunidad de
              práctica, un proyecto freelance o simplemente quieres conectar.
              ¡Puedes escribirme!
            </motion.p>

            <motion.div
              variants={fadeItem}
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-violet-500"
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUpSoft}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:p-7 dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <motion.h3
                variants={fadeItem}
                className="text-xl font-semibold text-slate-900 dark:text-white"
              >
                Información de contacto
              </motion.h3>

              <motion.p
                variants={fadeItem}
                className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
              >
                Puedes contactarme por correo o encontrarme en mis perfiles
                profesionales.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 space-y-3"
              >
                <motion.a
                  variants={fadeItem}
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
                </motion.a>

                <motion.a
                  variants={fadeItem}
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
                </motion.a>

                <motion.a
                  variants={fadeItem}
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
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUpSoft}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:p-7 dark:border-white/10 dark:bg-[#0d1326] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <motion.h3
                variants={fadeItem}
                className="text-xl font-semibold text-slate-900 dark:text-white"
              >
                Envíame un mensaje
              </motion.h3>

              <motion.p
                variants={fadeItem}
                className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
              >
                Completa este formulario y cuéntame brevemente en qué puedo
                ayudarte.
              </motion.p>

              <motion.form
                onSubmit={handleSubmit}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 space-y-4"
                noValidate
              >
                <motion.div
                  variants={fadeItem}
                  className="grid gap-4 md:grid-cols-2"
                >
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Nombre
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tu nombre"
                      className={`${inputBaseClass} ${
                        errors.name
                          ? "border-rose-500 dark:border-rose-500"
                          : "border-slate-300 dark:border-white/10"
                      }`}
                    />

                    {touched.name && errors.name && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-rose-500">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Correo
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="tucorreo@ejemplo.com"
                      className={`${inputBaseClass} ${
                        errors.email
                          ? "border-rose-500 dark:border-rose-500"
                          : "border-slate-300 dark:border-white/10"
                      }`}
                    />

                    {touched.email && errors.email && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-rose-500">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Mensaje
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={1000}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`${inputBaseClass} resize-none ${
                      errors.message
                        ? "border-rose-500 dark:border-rose-500"
                        : "border-slate-300 dark:border-white/10"
                    }`}
                  />

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div>
                      {touched.message && errors.message && (
                        <p className="flex items-center gap-2 text-sm text-rose-500">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
                  >
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}