# Guía para agentes IA

Última revisión documental: 2026-09-10. Estado: operativo.

Antes de modificar: lee `README.md`, `AGENTS.md`, este índice, [arquitectura](02-architecture.md), [convenciones](16-conventions.md) y [deuda](17-technical-debt.md). Luego verifica los archivos que vayas a tocar.

| Necesidad | Ubicación |
|---|---|
| Ruta principal | `avxinformatica-site/src/pages/index.astro` |
| Composición visual | `src/components/Welcome.astro`, `HudPanel.astro` |
| Documento base | `src/layouts/Layout.astro` |
| Estilos | `src/styles/global.css` y `<style>` de `HudPanel` |
| Assets | `src/assets/`, `public/` |
| Build | `avxinformatica-site/package.json` |

Invariantes verificadas: la portada debe conservar un texto alternativo para el logo y el contacto usa un enlace seguro con `rel="noopener noreferrer"`. Áreas peligrosas: CSS y assets afectan toda la única vista; no editar `dist/` como fuente. Antes de agregar funcionalidad, identifica si requiere backend, seguridad y persistencia: hoy el repositorio no provee esas capas.
