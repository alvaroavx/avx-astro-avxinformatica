// Contenido del sitio. Cambiar la oferta = editar este archivo, no los componentes.
// Fuente: mesa BPO 2026-10-12 (docs/02-negocio-y-web-corporativa.md en la raíz de proyectos AVX).

export const site = {
  name: 'AVX Informática',
  url: 'https://avx.cl',
  title: 'AVX Informática — Sitios web administrados',
  description:
    'Diseñamos, publicamos, alojamos y mantenemos sitios web para negocios, artistas y organizaciones. Dominio a tu nombre. Sin encierro técnico.',
  email: 'alvaro@avx.cl',
  location: 'Rengo, Chile',
};

const mailBody = [
  'Nombre:',
  'Actividad u organización:',
  'Sitio actual (si existe):',
  'Qué necesito mostrar:',
  'Cada cuánto cambia el contenido:',
].join('\n');

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Quiero un sitio con AVX')}&body=${encodeURIComponent(mailBody + '\n')}`;

export const nav = [
  { href: '#servicio', label: 'Servicio' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#capacidad', label: 'Capacidad' },
];

export const hero = {
  eyebrow: 'Sitios web administrados',
  title: ['Tu sitio,', 'en línea y bajo control.'],
  lead: 'Diseñamos, publicamos y mantenemos tu sitio. Tú te dedicas a lo tuyo.',
  chips: ['Dominio a tu nombre', 'Código transferible', 'Sin servidores a tu cargo'],
};

export const servicio = {
  title: 'Nos hacemos cargo de tu sitio.',
  lead: 'Diseño, publicación, hosting y mantenimiento en un solo servicio. Tú no tocas la parte técnica.',
  items: [
    { title: 'Diseño a medida', text: 'Claro, rápido y pensado para móvil.' },
    { title: 'Publicación incluida', text: 'Subimos tus contenidos, dentro de lo acordado.' },
    { title: 'Hosting gestionado', text: 'En línea, sin servidores que administrar.' },
    { title: 'Mantenimiento continuo', text: 'Actualizaciones, respaldos y monitoreo.' },
  ],
  incluye: ['SEO técnico', 'Medición de visitas', 'Canal de contacto', 'Cambios menores según plan'],
  noPrometemos: ['Primer lugar en Google', 'Clientes garantizados', 'Soporte ilimitado'],
  cierre: 'Lo que nadie puede garantizar, no lo vendemos.',
};

export const audiencias = {
  title: 'Para quien tiene algo que mostrar.',
  lead: 'Tres tipos de proyecto. Un mismo estándar.',
  items: [
    { title: 'Negocios y profesionales', text: 'Servicios, horarios, ubicación y contacto. Siempre al día.' },
    { title: 'Artistas', text: 'Tu obra, trayectoria y agenda en un espacio propio. Fuera del algoritmo.' },
    { title: 'Organizaciones', text: 'Noticias, eventos y actividades, con publicación acordada.' },
  ],
};

export const propiedad = {
  title: 'Tu sitio es tuyo.',
  lead: 'Sin encierro técnico. Si un día te vas, te llevas todo.',
  items: [
    { title: 'Dominio a tu nombre', text: 'Nosotros lo administramos. Tú eres el dueño.' },
    { title: 'Código transferible', text: 'Tu repositorio se entrega cuando termina el servicio.' },
    { title: 'Datos exportables', text: 'Tu contenido sale contigo, completo.' },
    { title: 'Salida definida', text: 'Reglas de término claras desde el primer día.' },
  ],
  cierre: 'Te quedas por el servicio, no por amarras.',
};

// PENDIENTE: autorización de cada cliente para nombrarlo.
// Mientras no esté, poner `mostrarNombres: false` antes de publicar (se usa `anon`).
export const trabajos = {
  mostrarNombres: true,
  title: 'Trabajos recientes.',
  lead: 'Hechos por AVX.',
  items: [
    { tag: 'Sitio de barrio · Rengo', name: 'Barrio Bisquertt', anon: 'Sitio de barrio', text: 'Comercios, noticias, eventos y patrimonio de un barrio, en un solo lugar.' },
    { tag: 'Sitio institucional', name: 'WMD Consultores', anon: 'Estudio profesional', text: 'Áreas, equipo y contacto, con estructura clara.' },
    { tag: 'Dossier de artista', name: 'Laura Piña', anon: 'Artista escénica', text: 'Trayectoria y obra teatral en formato revista digital.' },
  ],
};

export const proceso = {
  title: 'Cuatro pasos. Sin vueltas.',
  lead: 'Alcance claro antes de empezar. Límites conocidos después.',
  items: [
    { title: 'Conversamos', text: 'Qué necesitas mostrar y cada cuánto cambia.' },
    { title: 'Definimos', text: 'Alcance, contenidos y responsabilidades, por escrito.' },
    { title: 'Construimos', text: 'Diseñamos, revisamos y publicamos.' },
    { title: 'Mantenemos', text: 'Operamos lo acordado, con límites claros.' },
  ],
};

// PENDIENTE: revisar contrato BPO antes de publicar "Certificados digitales".
export const capacidad = {
  title: 'Empezamos por tu sitio. Llegamos mucho más lejos.',
  lead: 'Experiencia en sistemas que manejan identidad, documentos y pagos.',
  items: [
    { title: 'Certificados digitales', text: 'Emisión, validación y evidencia documental.' },
    { title: 'Plataformas documentales', text: 'Gestión, búsqueda y conservación de documentos.' },
    { title: 'Integraciones', text: 'APIs, identidad, pagos y sistemas existentes.' },
  ],
  nota: 'A medida, según el caso.',
  producto: {
    badge: 'En desarrollo',
    name: 'Plataforma Elemental',
    text: 'Personas, asistencia y pagos para espacios y escuelas. Nace de la operación real. Aún no está a la venta.',
  },
};

export const contacto = {
  title: 'Conversemos tu sitio.',
  lead: 'Cuéntanos qué haces y qué necesitas mostrar. Respondemos por correo.',
  cta: 'Escribir a AVX',
  hint: 'Se abre tu correo con un mensaje listo para completar.',
};

export const lab = {
  title: 'También jugamos.',
  lead: 'Un experimento de física e interacción, hecho por curiosidad.',
  cta: 'Entrar al laboratorio',
  href: '/vector-field/index.html', // funciona en dev y en hosting estático
};
