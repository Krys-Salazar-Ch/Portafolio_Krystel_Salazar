# Portafolio de Krystel Salazar


Un portafolio personal moderno y responsivo construido con Next.js, diseñado para mostrar mis proyectos, habilidades y experiencia en desarrollo web. Incluye animaciones suaves, tema oscuro/claro, y una interfaz intuitiva.

## Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tabletas y escritorio.
- **Tema Oscuro/Claro**: Toggle para cambiar entre modos de visualización.
- **Animaciones Suaves**: Usando Framer Motion para transiciones elegantes.
- **Partículas Interactivas**: Fondo animado con partículas para un toque visual dinámico.
- **Integración con GitHub**: Proyectos obtenidos automáticamente desde repositorios de GitHub.
- **Formulario de Contacto**: Validación en tiempo real y diseño accesible.
- **Secciones Organizadas**:
  - Hero: Presentación personal con avatar y typewriter effect.
  - Sobre Mí: Habilidades, experiencia y educación.
  - Proyectos: Portafolio de proyectos destacados con enlaces a demo y código.
  - Contacto: Información de contacto y formulario.

## Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Partículas**: TS Particles
- **Imágenes**: Next Cloudinary
- **Control de Versiones**: Git & GitHub

## Instalación y Uso

### Prerrequisitos

- Node.js >= 18 y < 24
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Krys-Salazar-Ch/Portafolio_Krystel_Salazar.git
   cd Portafolio_Krystel_Salazar
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
Portafolio_Krystel_Salazar/
├── app/                    # Páginas y layouts de Next.js
│   ├── about/             # Página "Sobre mí"
│   ├── contact/           # Página de contacto
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── about.tsx          # Componente de la sección "Sobre mí"
│   ├── contact.tsx        # Componente de contacto
│   ├── footer.tsx         # Pie de página
│   ├── hero.tsx           # Sección hero
│   ├── navbar.tsx         # Barra de navegación
│   ├── particles-background.tsx # Fondo de partículas
│   ├── projects.tsx       # Sección de proyectos
│   ├── staggerChildren.tsx # Utilidades de animación
│   ├── theme-toggle.tsx   # Toggle de tema
│   └── typewriterText.tsx # Componente de texto typewriter
├── hooks/                 # Hooks personalizados
│   └── usegithubproyects.ts # Hook para obtener proyectos de GitHub
├── public/                # Archivos estáticos
│   └── images/            # Imágenes del portafolio
├── package.json           # Dependencias y scripts
├── tailwind.config.ts     # Configuración de Tailwind CSS
├── next.config.mjs        # Configuración de Next.js
└── tsconfig.json          # Configuración de TypeScript
```

## Personalización

- **Colores**: Los colores principales se definen en `tailwind.config.ts` y `globals.css`.
- **Animaciones**: Configuradas en componentes individuales usando Framer Motion.
- **Contenido**: Actualiza la información en los componentes correspondientes (e.g., `about.tsx` para experiencia y habilidades).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Krystel Salazar  
Ingeniería en Sistemas de Información  
Universidad Nacional de Costa Rica  

- **Email**: [krisachava@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/krystel-salazar/]
- **GitHub**: [https://github.com/Krys-Salazar-Ch](https://github.com/Krys-Salazar-Ch)

¡Estoy abierta a colaboraciones y oportunidades! No dudes en contactarme.
