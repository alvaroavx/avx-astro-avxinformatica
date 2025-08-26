# 🌌 AVX Informática — Sitio Web en Astro

Este proyecto es la **réplica en Astro** del sitio de [AVX.cl](https://avx.cl), diseñado como una experiencia inmersiva inspirada en el universo:  
un **sol giratorio** (logo AVX) flotando en el espacio y un **visor HUD futurista** donde se despliega la información y navegación del sitio.  



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
```

## ⚙️ Comandos básicos

Desde la raíz del proyecto, puedes ejecutar los siguientes comandos:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias necesarias                 |
| `npm run dev`             | Iniciar servidor local en `localhost:4321`       |
| `npm run build`           | Generar build de producción en `./dist/`         |
| `npm run preview`         | Vista previa local del build generado            |
| `npm run astro ...`       | Ejecutar comandos CLI Astro como `astro check`   |
| `npm run astro -- --help` | Mostrar ayuda de Astro CLI                       |

## 🌐 Tecnologías usadas

- **Astro** como framework principal
- **Bootstrap 5** para estilos base y componentes
- **CSS moderno**  `clamp`, `backdrop-filter`, `flexbox`
- **JavaScript moderno** para funcionalidades interactivas
