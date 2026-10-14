// Datos de proyectos (DESIGN.md §6). Los usan la home y /proyectos.
// Borrador: Javier confirma los textos marcados en `toConfirm` antes de publicar.

export interface TeamMember {
  name: string;
  role: string;
}

interface ProjectBase {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** Capturas en /public. Vacío = capturas pendientes. */
  images: string[];
}

/** Proyecto real, con cliente y usuarios reales. */
export interface RealProject extends ProjectBase {
  type: 'real';
  /** Aparece en la home (3 destacados). */
  featured: boolean;
  client?: string;
  location?: string;
  /** Contexto del proyecto, p. ej. "Proyecto de título, en equipo". */
  context?: string;
  /** Proyecto de otra persona en el que colaboré: se presenta como colaboración, no como propio. */
  collaboration?: boolean;
  /** Quién lo usa hoy, si aplica. */
  usage?: string;
  /** Sitio en producción. */
  url?: string;
  /** Captura para el caso de estudio de la home, si es distinta de images[0]. */
  caseImage?: string;
  /** Las capturas están por llegar: la home les reserva el espacio. */
  capturesComing?: boolean;
  problem: string;
  built: string[];
  stack: string[];
  role?: string;
  team?: TeamMember[];
  /** Notas internas para Javier; no se muestran en el sitio. */
  toConfirm?: string[];
}

/** Maqueta de práctica: sin cliente, sin testimonios, sin resultados ni inversión. */
export interface DesignExercise extends ProjectBase {
  type: 'ejercicio';
  features: string[];
}

export type Project = RealProject | DesignExercise;

export const projects: Project[] = [
  // ---------- Proyectos reales ----------
  {
    slug: 'pacificoclean',
    type: 'real',
    featured: true,
    title: 'PacificoClean',
    category: 'Tienda online',
    location: 'Valparaíso',
    summary: 'Sitio y tienda de artículos de aseo con despacho.',
    problem:
      'Una tienda de artículos de aseo necesitaba vender en línea con despacho, y que sus dueños pudieran actualizar productos, fotos y precios por su cuenta.',
    built: [
      'Sitio y tienda con catálogo y despacho',
      'Panel de administración para editar productos, fotos y precios',
    ],
    stack: ['Next.js', 'Vercel'],
    role: 'Desarrollo completo, desde el diseño hasta el deploy en Vercel, incluido el panel de administración para que los dueños editen productos, fotos y precios',
    url: 'https://pacificoclean.vercel.app/',
    images: ['/proyectos/pacificoclean-inicio.webp', '/proyectos/pacificoclean-catalogo.webp'],
    // El hero ya muestra la portada; el caso de estudio muestra el catálogo
    caseImage: '/proyectos/pacificoclean-catalogo.webp',
    toConfirm: ['Redacción del problema'],
  },
  {
    slug: 'clipcontrol',
    type: 'real',
    featured: true,
    title: 'ClipControl',
    category: 'Sistema a medida',
    client: 'Tresmontes Lucchetti',
    context: 'Proyecto de título, en equipo',
    summary: 'Sistema de entrega de beneficios con código QR para 800–1.000 trabajadores.',
    problem:
      'La empresa necesitaba entregar beneficios a entre 800 y 1.000 trabajadores y llevar el control de cada entrega.',
    built: [
      'API en FastAPI con más de 25 endpoints',
      'Base de datos en Supabase (PostgreSQL)',
      'Panel de administración web en React',
      'App móvil en Ionic con escáner de códigos QR',
    ],
    stack: ['FastAPI', 'Supabase', 'PostgreSQL', 'React', 'Ionic'],
    role: 'Scrum Master y líder de backend',
    capturesComing: true,
    team: [
      { name: 'Maximiliano Casanova', role: 'Panel de administración en React' },
      { name: 'Camilo Caballero', role: 'App Ionic con escáner QR' },
    ],
    images: [],
    toConfirm: ['Redacción del problema', 'Capturas reales'],
  },
  {
    slug: 'qepd',
    type: 'real',
    featured: false,
    title: 'QEPD',
    category: 'Sistema a medida',
    collaboration: true,
    context: 'Proyecto de título de un amigo',
    summary: 'Sistema de gestión de cementerio con mapas, avisos por WhatsApp y exportación a Excel.',
    problem:
      'Un cementerio necesitaba ordenar en un solo sistema la ubicación de sepulturas, las mantenciones y los avisos a las familias.',
    built: [
      'Ubicación de sepulturas en mapas de Google',
      'Avisos por WhatsApp',
      'Exportación a Excel',
      'Validación de RUT',
      'Programación de mantenciones',
    ],
    stack: ['Django', 'Google Maps'],
    role: 'Colaboración en el desarrollo',
    images: [],
    toConfirm: ['Redacción del problema', 'Cliente y ubicación', 'Qué partes desarrollé', 'Nombre del autor (¿se le nombra?)', 'Capturas reales'],
  },
  {
    slug: 'automatizador-cartas',
    type: 'real',
    featured: true,
    title: 'Automatizador de cartas',
    category: 'Herramienta interna',
    client: 'Empresa de distribución eléctrica',
    summary: 'Genera cartas de respuesta a reclamos desde plantillas Word, con login y estadísticas.',
    problem:
      'Responder reclamos obligaba a redactar cada carta a mano a partir de plantillas Word de más de 13 categorías.',
    built: [
      'Generación de cartas desde plantillas Word (13+ categorías)',
      'Inicio de sesión para el equipo',
      'Panel de estadísticas',
    ],
    stack: ['Python', 'Streamlit'],
    role: 'Diseño y desarrollo completo',
    usage: 'Lo usan a diario mis compañeros de trabajo',
    images: [],
    toConfirm: [
      'Redacción del problema',
      'Capturas con datos de ejemplo o difuminados (sin nombres, RUT, direcciones ni números de cliente)',
    ],
  },

  // ---------- Ejercicios de diseño ----------
  {
    slug: 'sabores-del-sur',
    type: 'ejercicio',
    title: 'Sabores del Sur',
    category: 'Landing page',
    summary: 'Landing de un restaurante, pensada para reservar mesa desde el celular.',
    features: [
      'Diseño adaptable a celular',
      'Reserva de mesa por WhatsApp',
      'Menú con fotos',
      'Mapa y redes sociales',
    ],
    images: [
      '/proyectos/sabores-del-sur-1.jpg',
      '/proyectos/sabores-del-sur-2.jpg',
      '/proyectos/sabores-del-sur-3.jpg',
    ],
  },
  {
    slug: 'verde-nativo',
    type: 'ejercicio',
    title: 'Verde Nativo',
    category: 'Tienda online',
    summary: 'Tienda de plantas con catálogo, carrito y despacho por comuna.',
    features: [
      'Catálogo con filtros',
      'Carrito y paso de pago',
      'Despacho calculado por comuna',
      'Vista de panel de administración',
    ],
    images: [
      '/proyectos/verde-nativo-1.jpg',
      '/proyectos/verde-nativo-2.jpg',
      '/proyectos/verde-nativo-3.jpg',
    ],
  },
  {
    slug: 'espacio-urbano',
    type: 'ejercicio',
    title: 'Espacio Urbano',
    category: 'Sitio corporativo',
    summary: 'Sitio inmobiliario de varias páginas con buscador de propiedades.',
    features: [
      'Sitio de varias páginas',
      'Buscador y filtros de propiedades',
      'Formulario de contacto por corredor',
    ],
    images: [
      '/proyectos/espacio-urbano-1.jpg',
      '/proyectos/espacio-urbano-2.jpg',
      '/proyectos/espacio-urbano-3.jpg',
    ],
  },
  {
    slug: 'fitchile',
    type: 'ejercicio',
    title: 'FitChile',
    category: 'App móvil',
    summary: 'Pantallas de una app para seguir rutinas de entrenamiento y nutrición.',
    features: [
      'Pantallas de rutinas y progreso',
      'Vista para entrenadores',
      'Recordatorios',
    ],
    images: [
      '/proyectos/fitchile-1.jpg',
      '/proyectos/fitchile-2.jpg',
      '/proyectos/fitchile-3.jpg',
    ],
  },
  {
    slug: 'cafe-andino',
    type: 'ejercicio',
    title: 'Café Andino',
    category: 'Landing y tienda',
    summary: 'Sitio de una cafetería de especialidad con pedidos por WhatsApp.',
    features: [
      'Carta de cafés',
      'Pedidos directos al WhatsApp del local',
      'Galería de fotos',
      'Diseño adaptable a celular',
    ],
    images: [
      '/proyectos/cafe-andino-1.jpg',
      '/proyectos/cafe-andino-2.jpg',
      '/proyectos/cafe-andino-3.jpg',
    ],
  },
  {
    slug: 'innova-gestion',
    type: 'ejercicio',
    title: 'Innova Gestión',
    category: 'Sitio corporativo',
    summary: 'Sitio corporativo para una consultora, sobrio y minimalista.',
    features: [
      'Identidad y sitio corporativo',
      'Sección de casos y blog',
    ],
    images: [
      '/proyectos/innova-gestion-1.jpg',
      '/proyectos/innova-gestion-2.jpg',
      '/proyectos/innova-gestion-3.jpg',
    ],
  },
];

export const realProjects = projects.filter((p): p is RealProject => p.type === 'real');
export const featuredProjects = realProjects.filter((p) => p.featured);
export const designExercises = projects.filter((p): p is DesignExercise => p.type === 'ejercicio');
