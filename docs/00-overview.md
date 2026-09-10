# Overview

Última revisión documental: 2026-09-10. Estado: reconstruido desde repositorio.

| Campo | Estado observable |
|---|---|
| Nombre | `avxinformatica-site` |
| Tipo | Sitio web estático de presentación |
| Propósito | Mostrar identidad AVX y un canal de contacto |
| Usuarios | Visitantes web; no hay cuentas |
| Stack | Astro 5, TypeScript/JS, CSS, React integration instalada |
| Datos | No se encontró base de datos ni estado persistente |
| Arquitectura | Página Astro única con componentes visuales |
| Documentación previa | README breve |
| Deuda aparente | Operación y pruebas no versionadas |

## En 5 minutos

`src/pages/index.astro` monta `Layout` y `Welcome`. `Welcome` muestra assets locales y configura `HudPanel`; los estilos están entre el CSS global y el bloque scoped del panel. El único enlace funcional es `mailto:`. `dist/` es artefacto generado. No hay servidor de aplicación ni API.

## Salud cualitativa

| Dimensión | Estado | Comentario |
|---|---|---|
| Arquitectura | Aceptable | Topología pequeña y directa. |
| Mantenibilidad | Aceptable | Pocos componentes; hay estilos globales históricos no usados de forma evidente. |
| Tests | Débil | No se encontraron. |
| Seguridad | Aceptable | Sin manejo de datos; faltan cabeceras/configuración de hosting. |
| Observabilidad | No determinado | No versionada. |
| Documentación | Aceptable | Consolidada en esta carpeta. |
| Deploy | No determinado | No hay pipeline o hosting versionados. |
| Modelo de datos | No aplica | Sitio estático sin persistencia. |
