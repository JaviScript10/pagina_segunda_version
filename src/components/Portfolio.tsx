'use client';
import { useState, useRef, useCallback } from 'react';
import { FaTimes, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaChartLine } from 'react-icons/fa';
import { useDialog } from '@/hooks/useDialog';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);
  const dialogRef = useDialog<HTMLDivElement>(selectedProject !== null, closeModal);

  const projects = [
    {
      title: "Sabores del Sur",
      category: "LANDING PAGE",
      location: "Valdivia",
      images: [
        "/proyectos/sabores-del-sur-1.jpg",
        "/proyectos/sabores-del-sur-2.jpg",
        "/proyectos/sabores-del-sur-3.jpg"
      ],
      desc: "Landing page gastronómica enfocada en conversión directa y reservas de mesa con diseño responsive.",
      challenge: "Restaurante tradicional con 0 presencia digital. Dependían 100% de clientes walk-in y llamadas telefónicas.",
      solution: [
        "Landing page responsive con diseño gastronómico premium",
        "Sistema de reservas online integrado con WhatsApp",
        "Menú digital interactivo con fotos profesionales"
      ],
      results: [
        { label: "Reservas Online", value: "+230%" },
        { label: "Tráfico Web", value: "+180%" },
        { label: "Nuevos Clientes", value: "+150%" }
      ],
      testimonial: {
        quote: "La mejor inversión que hicimos. Las reservas se triplicaron.",
        author: "Juan Pérez",
        role: "Dueño, Sabores del Sur"
      },
      timeline: "3 semanas",
      investment: "$280.000"
    },
    {
      title: "Verde Nativo",
      category: "E-COMMERCE",
      location: "Santiago",
      images: [
        "/proyectos/verde-nativo-1.jpg",
        "/proyectos/verde-nativo-2.jpg",
        "/proyectos/verde-nativo-3.jpg"
      ],
      desc: "Tienda online de plantas con catálogo autoadministrable y pasarela de pago segura.",
      challenge: "Vivero local que vendía solo por Instagram de forma manual, perdiendo horas coordinando transferencias.",
      solution: [
        "E-commerce completo con carrito de compras y Webpay",
        "Gestión automatizada de stock e inventario",
        "Sistema de despacho calculado por comunas"
      ],
      results: [
        { label: "Ventas Mensuales", value: "+310%" },
        { label: "Tiempo Operativo", value: "-60%" },
        { label: "Clientes Región", value: "+200%" }
      ],
      testimonial: {
        quote: "Ahora la tienda vende sola mientras dormimos.",
        author: "Camila Soto",
        role: "Fundadora, Verde Nativo"
      },
      timeline: "4 semanas",
      investment: "$600.000"
    },
    {
      title: "Espacio Urbano",
      category: "SITIO CORPORATIVO",
      location: "Región Metropolitana",
      images: [
        "/proyectos/espacio-urbano-1.jpg",
        "/proyectos/espacio-urbano-2.jpg",
        "/proyectos/espacio-urbano-3.jpg"
      ],
      desc: "Plataforma inmobiliaria multi-página con buscador avanzado de propiedades.",
      challenge: "Corredora con múltiples propiedades que necesitaba proyectar mayor solidez corporativa.",
      solution: [
        "Sitio web multi-página con diseño vanguardista",
        "Buscador y filtros avanzados de propiedades",
        "Formularios de contacto directos"
      ],
      results: [
        { label: "Leads Calificados", value: "+190%" },
        { label: "Visualización", value: "+250%" },
        { label: "Cierres de Ventas", value: "+40%" }
      ],
      testimonial: {
        quote: "Nuestros clientes nos felicitan por lo moderna y rápida que es la web.",
        author: "Esteban Valenzuela",
        role: "Director, Espacio Urbano"
      },
      timeline: "4 semanas",
      investment: "$450.000"
    },
    {
      title: "FitChile",
      category: "APP MÓVIL",
      location: "Nacional",
      images: [
        "/proyectos/fitchile-1.jpg",
        "/proyectos/fitchile-2.jpg",
        "/proyectos/fitchile-3.jpg"
      ],
      desc: "Aplicación multiplataforma para seguimiento de rutinas de entrenamiento y nutrición.",
      challenge: "Centro de acondicionamiento físico que buscaba fidelizar a sus alumnos mediante una app propia.",
      solution: [
        "Desarrollo de App móvil intuitiva",
        "Panel para entrenadores y registro de progreso",
        "Notificaciones push de recordatorio"
      ],
      results: [
        { label: "Retención Alumnos", value: "+85%" },
        { label: "Uso Activo App", value: "92%" },
        { label: "Satisfacción", value: "4.9/5" }
      ],
      testimonial: {
        quote: "La app le dio un valor agregado gigante a nuestro centro deportivo.",
        author: "Matías Rojas",
        role: "Head Coach, FitChile"
      },
      timeline: "6 semanas",
      investment: "$950.000"
    },
    {
      title: "Café Andino",
      category: "LANDING + TIENDA",
      location: "Valparaíso",
      images: [
        "/proyectos/cafe-andino-1.jpg",
        "/proyectos/cafe-andino-2.jpg",
        "/proyectos/cafe-andino-3.jpg"
      ],
      desc: "Sitio web interactivo para cafetería de especialidad con sistema de pedidos online.",
      challenge: "Cafetería histórica de cerros que necesitaba recibir pedidos anticipados para retiro en local sin comisiones altas.",
      solution: [
        "Landing interactiva con carta de cafés de especialidad",
        "Sistema de pedidos directos al WhatsApp del local",
        "Galería fotográfica enfocada en ambiente"
      ],
      results: [
        { label: "Pedidos Web", value: "+140%" },
        { label: "Ahorro Comisiones", value: "100%" },
        { label: "Reconocimiento", value: "+75%" }
      ],
      testimonial: {
        quote: "Nos salvó de pagar altas comisiones a apps externas. ¡Brillante!",
        author: "Sofía Arriagada",
        role: "Barista y Dueña"
      },
      timeline: "2 semanas",
      investment: "$220.000"
    },
    {
      title: "Innova Gestión",
      category: "SITIO CORPORATIVO",
      location: "Concepción",
      images: [
        "/proyectos/innova-gestion-1.jpg",
        "/proyectos/innova-gestion-2.jpg",
        "/proyectos/innova-gestion-3.jpg"
      ],
      desc: "Portal corporativo de servicios tecnológicos con diseño moderno y minimalista.",
      challenge: "Empresa B2B de consultoría informática con una imagen anticuada que no reflejaba su nivel técnico.",
      solution: [
        "Rediseño total de identidad y sitio web corporativo",
        "Sección de casos de éxito y blog técnico",
        "Optimización de velocidad de carga"
      ],
      results: [
        { label: "Contratos B2B", value: "+3" },
        { label: "Rebote Web", value: "-45%" },
        { label: "Autoridad de Marca", value: "Alta" }
      ],
      testimonial: {
        quote: "El cambio de imagen nos posicionó al nivel de las grandes consultoras.",
        author: "Felipe Morales",
        role: "CEO, Innova Gestión"
      },
      timeline: "3 semanas",
      investment: "$380.000"
    }
  ];

  const openModal = (proj: any) => {
    setSelectedProject(proj);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Portafolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
            Casos de <span className="text-primary-600">Éxito Destacados</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">Haz clic en cualquier proyecto para ver la galería completa de fotos y su reseña detallada.</p>
        </div>

        {/* Contenedor del Carrusel con Flechas Laterales Fijas (Sin barra de scroll inferior) */}
        <div className="relative group px-2 sm:px-8">
          
          {/* Botón Flecha Izquierda Fijo */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3.5 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 flex items-center justify-center"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Botón Flecha Derecha Fijo (Sin animación de salto) */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3.5 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 flex items-center justify-center"
            aria-label="Siguiente"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Carrusel Horizontal Ocultando la barra de scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mx-2 sm:mx-6 px-2"
          >
            {projects.map((proj, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => openModal(proj)}
                className="min-w-[85%] sm:min-w-[380px] md:min-w-[380px] bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between snap-center text-left"
              >
                <span className="block w-full">
                  <span className="block aspect-[4/3] bg-gray-100 overflow-hidden relative">
                    <img
                      src={proj.images[0]}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-gray-900 font-semibold text-xs px-5 py-2.5 rounded-2xl shadow-lg">
                        Ver fotos y detalles
                      </span>
                    </span>
                    <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      3 Fotos 📸
                    </span>
                  </span>
                  <span className="block p-8">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="block text-2xl font-bold text-gray-900 mt-3">{proj.title}</span>
                    <span className="text-sm text-gray-500 mt-1 font-medium flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-primary-500" /> {proj.location}
                    </span>
                  </span>
                </span>
                <span className="block w-full p-8 pt-0">
                  <span className="block text-center text-primary-600 font-semibold text-sm hover:underline">
                    Ver caso completo →
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Indicador táctil visual */}
        <div className="flex justify-center items-center gap-1.5 mt-6 text-gray-400 text-xs">
          <span>← Usa las flechas o desliza para ver los 6 proyectos →</span>
        </div>

      </div>

      {/* Modal / Caso de Éxito Detallado con Imagen Perfecta y Botones Flotantes */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-dialog-title"
            tabIndex={-1}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative my-auto flex flex-col"
          >
            
            {/* BOTÓN "X" FLOTANTE SUPERIOR */}
            <div className="sticky top-4 right-4 z-40 flex justify-end px-4 pointer-events-none">
              <button 
                onClick={() => setSelectedProject(null)}
                className="pointer-events-auto bg-black/70 hover:bg-black text-white p-3 rounded-full transition-colors shadow-2xl backdrop-blur-md"
                aria-label="Cerrar modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* CONTENEDOR DE IMAGEN GRANDE E INTACTA */}
            <div className="relative w-full h-[350px] sm:h-[450px] bg-gray-900 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title} 
                className="w-full h-full object-contain transition-all duration-300" 
              />

              <button
                onClick={prevImage}
                aria-label="Foto anterior"
                className="absolute left-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-20 shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                aria-label="Foto siguiente"
                className="absolute right-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-20 shadow-lg"
              >
                <FaChevronRight />
              </button>

              <div className="absolute bottom-4 bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium z-20">
                Foto {currentImageIndex + 1} de {selectedProject.images.length}
              </div>
            </div>

            {/* Contenido / Reseña Completa */}
            <div className="p-6 sm:p-10 space-y-8 flex-1">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary-500" /> {selectedProject.location}
                  </span>
                </div>
                <h2 id="portfolio-dialog-title" className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                <p className="text-gray-600 text-base">{selectedProject.desc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">📊 El Desafío</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">✅ La Solución</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {selectedProject.solution.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaChartLine className="text-primary-600" /> Resultados Medibles
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.results.map((res: any, i: number) => (
                    <div key={i} className="bg-primary-50/50 border border-primary-100 p-4 rounded-2xl text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-primary-600 mb-1">{res.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-2xl">
                <p className="text-base italic mb-4 text-gray-200">"{selectedProject.testimonial.quote}"</p>
                <div className="text-sm font-bold text-primary-300">{selectedProject.testimonial.author}</div>
                <div className="text-xs text-gray-400">{selectedProject.testimonial.role}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 text-sm">
                <div>
                  <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Timeline</span>
                  <span className="font-bold text-gray-800 text-base">{selectedProject.timeline}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Inversión Referencial</span>
                  <span className="font-bold text-primary-600 text-base">{selectedProject.investment}</span>
                </div>
              </div>

            </div>

            {/* BOTONES DE ACCIÓN FLOTANTES INFERIORES */}
            <div className="sticky bottom-0 z-40 bg-white/95 backdrop-blur-md p-4 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 shadow-2xl">
              <a 
                href="#contacto" 
                onClick={() => setSelectedProject(null)}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary-500/25"
              >
                Cotizar un proyecto similar
              </a>
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-colors py-3.5 sm:py-0"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}