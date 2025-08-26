# 🌌 AVX Informática — Sitio Web en Astro

Este proyecto es la **réplica en Astro** del sitio de [AVX.cl](https://avx.cl), diseñado como una experiencia inmersiva inspirada en el universo:  
un **sol giratorio** (logo AVX) flotando en el espacio y un **visor HUD futurista** donde se despliega la información y navegación del sitio.  

> 🚀 **Tecnología**: Construido con [Astro](https://astro.build), usando CSS moderno (`clamp`, `backdrop-filter`, `flexbox`) y componentes reutilizables.

---

## 📂 Estructura del proyecto

```text
/
├── public/                 # Archivos estáticos (favicon, etc.)
├── src/
│   ├── assets/             # Imágenes y fondos (logo, universo, etc.)
│   ├── components/         # Componentes reutilizables
│   │   ├── Welcome.astro   # Pantalla principal (logo + visor HUD)
│   │   └── HudPanel.astro  # Panel estilo nave futurista reutilizable
│   ├── layouts/
│   │   └── Layout.astro    # Layout global (head, fuentes, estilos globales)
│   ├── styles/
│   │   └── global.css      # Estilos globales (fuente Orbitron, fondo, etc.)
│   └── pages/
│       └── index.astro     # Página de inicio
└── package.json
