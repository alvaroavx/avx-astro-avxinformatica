# AGENTS.md

## Propósito

Sitio estático de presentación de AVX Informática construido con Astro. La evidencia vigente está reconstruida desde el repositorio el 2026-09-10.

## Antes de trabajar

Lee `README.md`, `docs/README.md`, `docs/02-architecture.md`, `docs/16-conventions.md` y el documento específico del área. La documentación orienta; verifica el código antes de modificar comportamiento.

## Directorios clave

- `avxinformatica-site/src/pages/`: rutas Astro; hoy solo `index.astro`.
- `avxinformatica-site/src/components/`: composición visual reutilizable.
- `avxinformatica-site/src/layouts/`: documento HTML común.
- `avxinformatica-site/src/styles/`: CSS global.
- `avxinformatica-site/src/assets/` y `public/`: recursos visuales.

## Reglas

- Mantén el proyecto como sitio estático salvo decisión explícita.
- No expongas contactos, tokens ni claves nuevos en el cliente.
- Conserva accesibilidad básica: texto alternativo, foco visible y contraste verificable.
- Ejecuta `npm run build` desde `avxinformatica-site/` al cambiar el sitio.
- Actualiza los documentos afectados por cambios funcionales o arquitectónicos.

## Límites conocidos

No hay API, autenticación, base de datos, migraciones, tests ni infraestructura de despliegue versionada. No los supongas.
