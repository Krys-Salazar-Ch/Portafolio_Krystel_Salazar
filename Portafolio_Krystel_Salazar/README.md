# Landing Page Particles – Next.js + Tailwind

Landing Page animada con partículas construida con **Next.js 14**, **Tailwind CSS**, **tsParticles** y **Framer Motion**.  
Es una página personal/portafolio con diseño responsive, tema oscuro, y secciones de inicio, proyectos, sobre mí y contacto.

---

## 🛠️ Tecnologías usadas

- **Next.js 14** (app router con React 18)
- **TypeScript**
- **Tailwind CSS** (modo oscuro por clase)
- **tsParticles** (fondo de partículas dinámicas)
- **Framer Motion** (animaciones suaves)
- Hooks y componentes reutilizables
- API pública de GitHub para obtener proyectos
- **Cloudinary** para imágenes remotas
- **Lucide-React** para íconos

---

## 🚀 Características principales

- Fondo de partículas customizable y ligero.
- Portafolio de proyectos cargado desde repositorios GitHub.
- Selector de tema (claro/oscuro) con persistencia en `localStorage`.
- Navbar oculta al hacer scroll hacia abajo.
- Formularios y enlaces de contacto.
- Secciones `Hero`, `About`, `Projects`, `Contact` y un footer social.
- Optimización de imágenes remotas (configuración en `next.config.mjs`).

---

## 🔧 Requisitos

- Node.js **LTS 20** (problemas con Node 24 y SWC)
- npm 10+ (o yarn/pnpm)

---

## 📦 Instalación

```bash
# clona el repositorio
git clone <tu-repo-url>
cd landing-page-particles-next-tailwind

# instala dependencias
npm install

# ejecuta en modo desarrollo
npm run dev

landing-page-particles-next-tailwind/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx            # home
│  ├─ about/page.tsx
│  └─ contact/page.tsx
├─ components/
│  ├─ hero.tsx
│  ├─ navbar.tsx
│  ├─ footer.tsx
│  ├─ projects.tsx
│  ├─ about.tsx
│  ├─ contact.tsx
│  ├─ theme-toggle.tsx
│  ├─ particles-background.tsx
│  └─ typewriterText.tsx
├─ hooks/
│  └─ usegithubproyects.ts
├─ public/
│  └─ images/
├─ tailwind.config.ts
├─ next.config.mjs
├─ tsconfig.json
├─ package.json
└─ .env.local             # variables de entorno

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=djobjqagh