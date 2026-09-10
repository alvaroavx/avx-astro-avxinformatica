# Flujos principales

Última revisión documental: 2026-09-10. Estado: reconstruido desde repositorio.

## Carga de portada

Actor: visitante. Trigger: solicita la ruta raíz. `index.astro` compone layout y bienvenida; el navegador carga assets, estilos y la fuente externa. Resultado: logo animado y panel con contacto. No hay datos ni efectos secundarios de servidor observables.

## Contacto

Actor: visitante. Trigger: activa el enlace `mailto:` en `Welcome.astro`. Resultado: el navegador delega en el cliente de correo local. No se controla entrega, destinatario final ni telemetría desde el repositorio.
