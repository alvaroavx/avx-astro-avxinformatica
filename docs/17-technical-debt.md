# Deuda técnica

Última revisión documental: 2026-09-10. Estado: registro estático.

| ID | Área | Problema | Evidencia | Impacto | Esfuerzo | Prioridad |
|---|---|---|---|---|---|---|
| TD-001 | Calidad | No hay pruebas automatizadas ni script de chequeo. | `package.json` no declara `test` ni `check`. | Medio | S | P2 |
| TD-002 | Mantenimiento | Dependencias React y Three.js instaladas sin referencias desde entradas analizadas. | `package.json`; `src/` inspeccionado. | Bajo | XS | P3 |
| TD-003 | CSS | Estilos globales históricos de `.hud-screen` no se referencian desde la portada actual. | `global.css`; `Welcome` usa `HudPanel`. | Bajo | XS | P3 |
| TD-004 | Operación | Hosting, CI y estrategia de release no versionados. | Inventario raíz. | Medio | M | P2 |

TD-001 es el principal hotspot: cambios de animación, accesibilidad o presentación solo tienen validación manual. Antes de retirar dependencias o estilos, confirmar referencias indirectas y resultado visual.
