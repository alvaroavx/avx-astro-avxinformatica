# Integraciones

Última revisión documental: 2026-09-10. Estado: reconstruido desde configuración y componentes.

| Sistema | Propósito | Configuración / código | Datos | Límite |
|---|---|---|---|---|
| Google Fonts | Servir Orbitron | `Layout.astro`, `styles/global.css` | Solicitud del navegador | Disponibilidad, privacidad y caché no verificadas. |
| Cliente de correo del visitante | Abrir contacto | `Welcome.astro` con `mailto:` | Dirección publicada | No hay envío ni tracking de aplicación. |

No se encontraron credenciales, timeouts, reintentos ni SDKs de servicios externos en uso efectivo.
