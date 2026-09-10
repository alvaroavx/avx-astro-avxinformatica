# Desarrollo local

Última revisión documental: 2026-09-10. Estado: comandos declarados, no certificados en esta revisión.

Desde `avxinformatica-site/`, según `package.json`:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Requisitos inferidos: Node.js compatible con Astro 5 y npm. No se requieren base de datos, migraciones, datos iniciales ni servicios locales. `dist/` es la salida del build; no editarla como fuente. No hay test script versionado.
