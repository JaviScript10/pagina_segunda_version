'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatDock from '@/components/ChatDock';
import { FaTimes, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaCheckCircle, FaChartLine, FaClock, FaTag } from 'react-icons/fa';

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allProjects = [
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
      challenge: "Restaurante tradicional con 0 presencia digital. Dependían 100% de clientes walk-in y llamadas telefónicas. Querían modernizar y captar clientes millennials.",
      solution: [
        "Landing page responsive con diseño gastronómico premium",
        "Sistema de reservas online integrado con WhatsApp",
        "Menú digital interactivo con fotos profesionales",
        "Integración con Google Maps y redes sociales"
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
      challenge: "Vivero local que vendía solo por Instagram de forma manual, perdiendo horas coordinando transferencias y stock.",
      solution: [
        "E-commerce completo con carrito de compras y Webpay",
        "Gestión automatizada de stock e inventario de plantas",
        "Sistema de despacho calculado por comunas",
        "Panel de administración fácil de usar"
      ],
      results: [
        { label: "Ventas Mensuales", value: "+310%" },
        { label: "Tiempo Operativo", value: "-60%" },
        { label: "Clientes Región", value: "+200%" }
      ],
      testimonial: {
        quote: "Ahora la tienda vende sola mientras dormimos. Excelente trabajo.",
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
      challenge: "Corredora con múltiples propiedades que necesitaba proyectar mayor solidez corporativa y un buscador dinámico.",
      solution: [
        "Sitio web multi-página con diseño vanguardista",
        "Buscador y filtros avanzados de propiedades",
        "Formularios de contacto directos por corredor",
        "Optimización SEO avanzada para posicionamiento local"
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
      challenge: "Centro de acondicionamiento físico que buscaba fidelizar a sus alumnos mediante una app propia para planes de ejercicio.",
      solution: [
        "Desarrollo de App móvil intuitiva",
        "Panel para entrenadores y registro de progreso",
        "Notificaciones push de recordatorio",
        "Sincronización con backend seguro"
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
      challenge: "Cafetería histórica de cerros que necesitaba recibir pedidos anticipados para retiro en local sin comisiones de apps de terceros.",
      solution: [
        "Landing interactiva con carta de cafés de especialidad",
        "Sistema de pedidos directos al WhatsApp del local",
        "Galería fotográfica enfocada en ambiente y café",
        "Diseño adaptado 100% a celulares"
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
        "Optimización de velocidad de carga (Core Web Vitals)",
        "Arquitectura orientada a conversión B2B"
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

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Header />
        
        <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Portafolio Completo</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Proyectos que Transforman Negocios</h1>
            <p className="text-gray-600">Haz clic en cualquier proyecto para abrir la galería con sus 3 fotos, desafíos, soluciones y resultados detallados.</p>
            <div className="mt-6">
              <a href="/" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-sm">
                ← Volver al inicio
              </a>
            </div>
          </div>

          {/* Grilla de proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => openModal(proj)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-gray-900 font-semibold text-xs px-4 py-2 rounded-xl shadow-md">
                        Ver caso de éxito completo
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      3 Fotos 📸
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg mb-3">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{proj.title}</h3>
                    <p className="text-xs text-gray-500 mb-3 font-medium flex items-center gap-1">
                      <FaMapMarkerAlt className="text-primary-500" /> {proj.location}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">{proj.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="block text-center text-primary-600 font-semibold text-sm hover:underline">
                    Ver detalles y resultados →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Caso de Éxito Detallado con Carrusel */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition-colors shadow-lg"
            >
              <FaTimes />
            </button>

            {/* Carrusel de Imágenes */}
            <div className="h-[50vh] sm:h-[55vh] bg-gray-900 overflow-hidden flex items-center justify-center relative">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover sm:object-contain transition-all duration-300" 
              />

              <button 
                onClick={prevImage}
                className="absolute left-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-10 shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-10 shadow-lg"
              >
                <FaChevronRight />
              </button>

              <div className="absolute bottom-4 bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium">
                Foto {currentImageIndex + 1} de {selectedProject.images.length}
              </div>
            </div>

            {/* Contenido / Reseña Completa */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Encabezado */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary-500" /> {selectedProject.location}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                <p className="text-gray-600 text-base">{selectedProject.desc}</p>
              </div>

              {/* El Desafío y La Solución */}
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    📊 El Desafío
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    ✅ La Solución
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {selectedProject.solution.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resultados Medibles */}
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

              {/* Testimonio */}
              <div className="bg-gray-900 text-white p-6 rounded-2xl relative overflow-hidden">
                <p className="text-base italic mb-4 text-gray-200">"{selectedProject.testimonial.quote}"</p>
                <div className="text-sm font-bold text-primary-300">{selectedProject.testimonial.author}</div>
                <div className="text-xs text-gray-400">{selectedProject.testimonial.role}</div>
              </div>

              {/* Timeline e Inversión */}
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

              {/* Botones de acción final */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <a 
                  href="/#contacto" 
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary-500/25"
                >
                  Cotizar un proyecto similar
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <ChatDock />
    </main>
  );
}