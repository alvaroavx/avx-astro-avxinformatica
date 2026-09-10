# AVX Informática — sitio estático en Astro

Este proyecto es la **réplica en Astro** del sitio de [AVX.cl](https://avx.cl), diseñado como una experiencia inmersiva inspirada en el universo:  
un **sol giratorio** (logo AVX) flotando en el espacio y un **visor HUD futurista** donde se despliega la información y navegación del sitio.  



---

## Qué hace

Presenta una pantalla única de marca: fondo espacial, logotipo animado, panel HUD y un enlace de contacto. No se encontró backend, formulario, persistencia ni autenticación en el repositorio.

## Arquitectura resumida

Astro renderiza `src/pages/index.astro`, que compone `Layout.astro` y `Welcome.astro`; este último utiliza `HudPanel.astro`, assets locales y CSS global. El resultado es un sitio estático generado en `dist/`.

## Documentación

La documentación IA First, sus límites de evidencia y guía para agentes están en [docs/README.md](docs/README.md). Empieza allí antes de cambiar el sitio.

## Desarrollo

Ejecuta los comandos desde `avxinformatica-site/`. La configuración y las limitaciones verificadas están en [docs/11-development.md](docs/11-development.md).

## Estado conocido

El proyecto no versiona pruebas, CI/CD ni configuración de hosting. El build es el único control local identificado.

## Estructura histórica

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
