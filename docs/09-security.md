# Seguridad

Última revisión documental: 2026-09-10. Alcance: revisión estática; no se probó hosting ni navegador.

| ID | Nivel | Riesgo y evidencia | Recomendación |
|---|---|---|---|
| SEC-01 | Medio | La fuente externa se carga desde Google Fonts (`Layout.astro` y CSS); no hay CSP ni política de privacidad versionadas. | Definir CSP y decisión de privacidad/carga local en el hosting. |
| SEC-02 | Bajo | El correo de contacto está expuesto en HTML (`Welcome.astro`), por diseño. | Evaluar protección antispam si el volumen lo exige. |
| SEC-03 | Informativo | No hay auth, formularios, API, persistencia ni secretos observables. | Si se agregan, diseñar validación y controles server-side antes de publicar. |

No puede determinarse TLS, cabeceras HTTP, protección DDoS, permisos de hosting o cadena de suministro del despliegue sin configuración externa.
