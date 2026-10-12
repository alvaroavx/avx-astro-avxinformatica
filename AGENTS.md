# AGENTS.md

## Propósito

Sitio estático de presentación de AVX Informática construido con Astro. La evidencia vigente está reconstruida desde el repositorio el 2026-09-10.

## Antes de trabajar

Lee `README.md`, `docs/23-rediseno-2026-10.md` (estado vigente), `docs/README.md`, `docs/02-architecture.md`, `docs/16-conventions.md` y el documento específico del área. La documentación orienta; verifica el código antes de modificar comportamiento.

## Directorios clave

- `src/data/site.ts`: todo el copy del sitio; cambia textos aquí, no en componentes.
- `src/pages/`: rutas Astro; hoy solo `index.astro`.
- `src/components/`: composición visual reutilizable.
- `src/layouts/`: documento HTML común.
- `src/styles/`: CSS global.
- `src/assets/` y `public/`: recursos visuales.

## Reglas

- Mantén el proyecto como sitio estático salvo decisión explícita.
- No expongas contactos, tokens ni claves nuevos en el cliente.
- Conserva accesibilidad básica: texto alternativo, foco visible y contraste verificable.
- `public/vector-field/` es una copia del juego; su fuente es el repo `avx-avxinformatica-website-cursor`. No lo edites aquí.
- No publiques precios, nombres de clientes BPO ni promesas de resultados (ver `../docs/02-negocio-y-web-corporativa.md`).
- Ejecuta `npm run build` desde la raíz del repo al cambiar el sitio.
- Actualiza los documentos afectados por cambios funcionales o arquitectónicos.

## Límites conocidos

No hay API, autenticación, base de datos, migraciones, tests ni infraestructura de despliegue versionada. No los supongas.
