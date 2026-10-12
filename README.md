# AVX Informática — sitio corporativo (Astro)

Sitio corporativo de [avx.cl](https://avx.cl). Es una página única, estática y oscura que presenta la oferta de AVX: **sitios web administrados** para negocios, artistas y organizaciones. Incluye además el laboratorio **AVX Vector Field** en `/vector-field/`.

Rediseño del 12-oct-2026 (dirección "Señal en la oscuridad"): logo y tipografía Metropolis heredados del sitio Angular 2022, el instrumental visual de Vector Field y la jerarquía editorial del prototipo `plan-c`. Detalle en [docs/23-rediseno-2026-10.md](docs/23-rediseno-2026-10.md).

## Inicio rápido

Desde la raíz del repo:

| Comando | Acción |
|---|---|
| `npm ci` | Instala dependencias (solo `astro`) |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build estático en `dist/` (no versionado) |
| `npm run preview` | Sirve el build local |

En `astro dev`, el juego abre en `/vector-field/index.html`. La ruta `/vector-field/` funciona en el build servido.

## Estructura

```text
/ (raíz del repo)
├── public/
│   ├── favicon.svg              # estrella AVX transparente (gris oscuro / claro según tema)
│   ├── fonts/                   # Metropolis (.otf) y Noto Sans Mono (OFL)
│   └── vector-field/            # copia publicada del juego (fuente: repo avx-avxinformatica-website-cursor)
└── src/
    ├── data/site.ts             # TODO el copy y los datos del sitio
    ├── assets/brand/            # logo PNG y malla geométrica (Angular 2022)
    ├── components/              # Header, Hero, SectionHead, Footer, Star
    ├── layouts/Layout.astro     # <head>, SEO, OG, skip link
    ├── pages/index.astro        # secciones 01–07 + laboratorio
    └── styles/global.css        # tokens, tipografía, botones, utilidades
```

**Para cambiar textos:** edita `src/data/site.ts`. Los componentes no contienen copy de negocio.

## Pendientes conocidos

- Autorización para nombrar los trabajos (Barrio Bisquertt, WMD Consultores, Laura Piña). Si alguna falta, usa el campo `anon` de `site.ts`.
- Revisión del contrato BPO antes de publicar "Firma electrónica" en Capacidad.
- Licencia de Metropolis por confirmar (los archivos no la incluyen).
- Logo completo en SVG: hoy solo la estrella está vectorizada; el logotipo `<AV.X> INFORMÁTICA_` sigue en PNG de 390 px.
- Hosting, CI y rollback siguen sin documentar ni versionar. Si se conecta Cloudflare Pages: build `npm run build`, salida `dist`, sin root directory.
- El juego se publica copiándolo a mano a `public/vector-field/`.

## Documentación

- [docs/23-rediseno-2026-10.md](docs/23-rediseno-2026-10.md): rediseño vigente.
- [docs/README.md](docs/README.md): documentación IA First del 10-sep. Describe el sitio anterior al rediseño; consérvala como referencia histórica.
- Estrategia y negocio: `../docs/` y `../avx-bussiness-plan/` en la carpeta de proyectos AVX.
