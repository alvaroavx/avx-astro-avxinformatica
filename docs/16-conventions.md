# Convenciones

Última revisión documental: 2026-09-10. Estado: observadas.

## Observadas

- Componentes y layouts en PascalCase con extensión `.astro`.
- Ruta de página en minúscula: `src/pages/index.astro`.
- Assets importados desde `src/assets/`; favicon público en `public/`.
- Props tipadas mediante interfaz en el frontmatter de `HudPanel.astro`.
- Estilos del componente HUD scoped; estilos generales en `src/styles/global.css`.

## Inconsistencias y recomendaciones futuras

- `Layout.astro` importa `Debug` sin usarlo y la fuente se declara también en CSS; verificar antes de limpiar para evitar cambios visuales accidentales.
- Mantener contenido semántico y accesible al crear componentes; no introducir estado o secretos de servidor en el cliente sin una arquitectura explícita.
