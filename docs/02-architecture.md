# Arquitectura

Última revisión documental: 2026-09-10. Estado: reconstruido desde implementación.

## Estilo y entradas

Sitio Astro estático de una página. La entrada HTTP esperada es la ruta raíz, materializada por `src/pages/index.astro`; no hay CLI propia, jobs, colas, webhooks ni API.

## Componentes y dependencias

`index.astro` depende de `Layout.astro` y `Welcome.astro`; `Welcome.astro` depende de `HudPanel.astro` y de assets. `Layout.astro` importa `styles/global.css`. El adaptador React está configurado en `astro.config.mjs`, pero no se encontraron componentes React importados.

## Salidas y decisiones observadas

- Salida principal: HTML/CSS/JS estático a `dist/` mediante `astro build`.
- Dependencia externa de ejecución: Google Fonts para Orbitron, declarada tanto en `Layout.astro` como por `@import` en CSS global.
- Decisión observable: componentes `.astro` con estilos scoped para el HUD; estilos de página en hoja global.
- Infraestructura, CDN, caché HTTP y despliegue: no determinados porque no están versionados.
