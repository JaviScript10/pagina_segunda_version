// Datos de proyectos (DESIGN.md §6). Los usan la home y /proyectos.
// Borrador: Javier confirma los textos marcados en `toConfirm` antes de publicar.

import type { Acento } from '@/lib/acento';

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
  /** Color de su fachada en los casos de estudio y su etiqueta. */
  accent: Acento;
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
  caseImage?: { src: string; w: number; h: number };
  /** Pantallas de la app móvil (390 px de ancho), para mostrarlas en marco de teléfono. */
  appScreens?: { src: string; alt: string }[];
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
    accent: 'cerro',
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
    caseImage: { src: '/proyectos/pacificoclean-catalogo.webp', w: 1600, h: 900 },
    toConfirm: ['Redacción del problema'],
  },
  {
    slug: 'clipcontrol',
    type: 'real',
    featured: true,
    accent: 'calamina',
    title: 'ClipControl',
    category: 'Sistema a medida',
    client: 'Tresmontes Lucchetti',
    context: 'Proyecto de título, en equipo',
    summary: 'Sistema de entrega de beneficios con código QR para 800–1.000 trabajadores.',
    problem:
      'La empresa entrega beneficios a entre 800 y 1.000 trabajadores, y todo el proceso era manual: cada guardia entregaba la caja y anotaba la entrega a mano. Eso generaba aglomeraciones, errores en el registro y poco control sobre quién había recibido su beneficio.',
    built: [
      'API en FastAPI con más de 25 endpoints',
      'Base de datos en Supabase (PostgreSQL)',
      'Panel de administración web en React',
      'App móvil en Ionic con escáner de códigos QR',
    ],
    stack: ['FastAPI', 'Supabase', 'PostgreSQL', 'React', 'Ionic'],
    role: 'Scrum Master y líder de backend',
    team: [
      { name: 'Maximiliano Casanova', role: 'Panel de administración en React' },
      { name: 'Camilo Caballero', role: 'App Ionic con escáner QR' },
    ],
    // Capturas con datos de prueba (confirmado por Javier)
    images: [
      '/proyectos/clipcontrol/panel-02-dashboard.webp',
      '/proyectos/clipcontrol/panel-04-entregas.webp',
      '/proyectos/clipcontrol/panel-03-empleados.webp',
      '/proyectos/clipcontrol/panel-01-login.webp',
      '/proyectos/clipcontrol/app-01-login.webp',
      '/proyectos/clipcontrol/app-02-inicio.webp',
      '/proyectos/clipcontrol/app-03-escaner.webp',
      '/proyectos/clipcontrol/app-04-token-manual.webp',
      '/proyectos/clipcontrol/app-05-qr-valido.webp',
      '/proyectos/clipcontrol/app-06-foto-capturada.webp',
      '/proyectos/clipcontrol/app-07-confirmacion.webp',
    ],
    caseImage: { src: '/proyectos/clipcontrol/panel-02-dashboard.webp', w: 1600, h: 1000 },
    // El recorrido del guardia: inicio, QR válido y entrega registrada
    appScreens: [
      { src: '/proyectos/clipcontrol/app-02-inicio.webp', alt: 'App del guardia: inicio con las entregas del día y el botón Escanear QR' },
      { src: '/proyectos/clipcontrol/app-05-qr-valido.webp', alt: 'App del guardia: QR válido con los datos del trabajador y captura de foto' },
      { src: '/proyectos/clipcontrol/app-07-confirmacion.webp', alt: 'App del guardia: entrega registrada con foto y hora' },
    ],
    toConfirm: ['Redacción del problema'],
  },
  {
    slug: 'qepd',
    type: 'real',
    featured: false,
    accent: 'verde',
    title: 'QEPD',
    category: 'Sistema a medida',
    collaboration: true,
    context: 'Proyecto de título de un amigo',
    summary: 'Sistema de gestión de cementerio con búsqueda pública de sepulturas y recordatorios para las familias.',
    problem:
      'Un cementerio necesitaba registrar a sus fallecidos y la ubicación de cada sepultura en un solo sistema. Las familias no tenían cómo encontrar una tumba si olvidaban dónde estaba, ni un aviso para las fechas importantes.',
    built: [
      'Registro de fallecidos para el administrador',
      'Búsqueda pública con la ubicación GPS de la sepultura',
      'Recordatorios por correo o WhatsApp para aniversarios',
    ],
    stack: ['Django', 'Google Maps'],
    role: 'Desarrollé todo el backend (Django) y colaboré en una parte del frontend',
    // Capturas sin datos personales: formularios vacíos o con ejemplos
    images: [
      '/proyectos/qepd/busqueda-publica.webp',
      '/proyectos/qepd/registro-fallecido.webp',
      '/proyectos/qepd/dashboard.webp',
    ],
    toConfirm: ['Redacción del problema', 'Cliente y ubicación', 'Qué partes desarrollé', 'Nombre del autor (¿se le nombra?)', 'Capturas reales'],
  },
  {
    slug: 'automatizador-cartas',
    type: 'real',
    featured: true,
    accent: 'ascensor',
    title: 'Automatizador de cartas',
    category: 'Herramienta interna',
    client: 'Empresa de distribución eléctrica',
    summary: 'Genera cartas de respuesta a reclamos desde plantillas Word, con login y estadísticas.',
    problem:
      'Cada respuesta a un reclamo se redactaba a mano, copiando y adaptando alguna de las más de 30 cartas tipo en Word. Eso generaba errores repetidos: el nombre equivocado del gerente comercial de la zona, faltas de ortografía y de tipeo.',
    built: [
      'Generación de cartas a partir de más de 30 cartas tipo en Word',
      'Inicio de sesión para el equipo',
      'Panel de estadísticas',
    ],
    stack: ['Python', 'Streamlit'],
    role: 'Diseño y desarrollo completo',
    usage: 'Lo usan a diario mis compañeros de trabajo',
    // Capturas sin datos de clientes: solo el usuario admin y textos de ejemplo
    images: [
      '/proyectos/automatizador/generador.webp',
      '/proyectos/automatizador/datos-carta.webp',
      '/proyectos/automatizador/registro-uso.webp',
    ],
    caseImage: { src: '/proyectos/automatizador/generador.webp', w: 1600, h: 670 },
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
