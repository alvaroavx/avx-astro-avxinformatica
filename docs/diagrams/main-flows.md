# Flujo principal

```mermaid
sequenceDiagram
  actor V as Visitante
  participant A as Astro generado
  participant B as Navegador
  V->>A: GET /
  A-->>B: HTML, CSS y assets
  B-->>V: Portada AVX
  V->>B: Activar contacto
  B-->>V: Delegar en cliente mailto
```
