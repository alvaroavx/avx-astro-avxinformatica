# Componentes

Última revisión documental: 2026-09-10. Estado: reconstruido desde repositorio.

| Nombre | Ubicación | Responsabilidad | Entradas / salidas | Riesgos u observaciones |
|---|---|---|---|---|
| Página raíz | `src/pages/index.astro` | Componer la única vista | Sin parámetros; HTML | Punto de entrada único. |
| Layout | `src/layouts/Layout.astro` | Documento HTML, metadatos y CSS global | Slot → documento | Idioma HTML fijo `en`; fuente externa duplicada con CSS. |
| Welcome | `src/components/Welcome.astro` | Fondo, logo, panel y contacto | Assets → HTML | El correo es contenido público en cliente. |
| HudPanel | `src/components/HudPanel.astro` | Marco HUD reusable | Props y slot → región accesible | Usa `color-mix`; compatibilidad depende de navegador. |
| CSS global | `src/styles/global.css` | Fondo y animación de portada | CSS → presentación | Incluye `.hud-screen`, sin referencia encontrada desde el punto de entrada. |

No se encontraron referencias desde los puntos de entrada analizados a React ni a Three.js; están instalados, pero su uso efectivo no está demostrado.
