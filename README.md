# AVX Informática — sitio estático en Astro

Este proyecto es la **réplica en Astro** del sitio de [AVX.cl](https://avx.cl), diseñado como una experiencia inmersiva inspirada en el universo:  
un **sol giratorio** (logo AVX) flotando en el espacio y un **visor HUD futurista** donde se despliega la información y navegación del sitio.  

## Guía humana

### Qué es, para qué sirve y quiénes lo usan

Este es el repositorio de una experiencia web estática de marca para **AVX Informática**. Sirve como vitrina visual y punto de contacto: comunica la identidad AVX mediante una única pantalla inmersiva y dirige al visitante al canal de contacto. Está orientado a visitantes del sitio y a las personas que mantienen su presencia digital; no hay cuentas, panel administrativo ni procesos de negocio implementados.

### Qué contiene y cómo trabaja

El producto vive en `avxinformatica-site/` e incluye una aplicación Astro, componentes de interfaz, estilos globales y activos visuales del universo/logo. Astro compone la página de inicio y genera archivos estáticos en `dist/`; el navegador muestra la animación, el HUD y el enlace de contacto. No hay backend, base de datos, formulario que persista información ni autenticación en este repositorio.

### Funcionalidades y tareas que resuelve

- Presentar la identidad visual de AVX en una página única.
- Mostrar fondo espacial, logo animado y panel HUD.
- Exponer navegación/contenido de marca y un enlace de contacto.
- Generar una versión estática publicable mediante el build de Astro.

### Trazabilidad humana

- **Solicitante:** no existe una solicitud ni un responsable solicitante identificable en los archivos versionados.
- **Desarrollo:** el primer commit disponible fue creado por **AVX Informática**; la historia Git no permite atribuir el trabajo completo a una única persona.
- **Cuándo:** el primer registro Git disponible data del **25 de julio de 2025**. Es la fecha de inicio observable del repositorio, no una prueba de la fecha de diseño o publicación del sitio.

### Qué puede mejorar y oportunidades

Hay oportunidad de convertir la vitrina en una presencia operable: definir contenido y objetivos medibles, validar accesibilidad y rendimiento, añadir pruebas y CI, documentar hosting/TLS/rollback y decidir si el contacto requiere un formulario real con privacidad y antispam. Cualquier ampliación debería preservar la intención visual actual y comenzar por [desarrollo](docs/11-development.md), [seguridad](docs/09-security.md) y el [roadmap](docs/19-improvement-roadmap.md).


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
