'use client';

import { useState } from 'react';
import { FaArrowRight, FaStar, FaChartLine, FaTimes, FaClock, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

type Category = 'all' | 'landing' | 'ecommerce' | 'app' | 'corporate';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  image: string;
  result: string;
  rating: string;
  testimonial: string;
  author: string;
  badge: string;
  // Datos completos para el modal
  gallery: string[];
  challenge: string;
  solution: string[];
  results: { metric: string; value: string }[];
  timeline: string;
  investment: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all' as Category, label: 'Todos los Proyectos' },
    { id: 'landing' as Category, label: 'Landing Pages' },
    { id: 'ecommerce' as Category, label: 'E-commerce' },
    { id: 'app' as Category, label: 'Apps Móviles' },
    { id: 'corporate' as Category, label: 'Corporativos' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sabores del Sur',
      subtitle: 'Restaurante - Valdivia',
      category: 'landing',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      result: '+230% reservas online',
      rating: '4.9/5',
      testimonial: 'La mejor inversión que hicimos. Reservas se triplicaron.',
      author: 'Juan Pérez, Dueño',
      badge: 'LANDING PAGE',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
        'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80',
      ],
      challenge: 'Restaurante tradicional con 0 presencia digital. Dependían 100% de clientes walk-in y llamadas telefónicas. Querían modernizar y captar clientes millennials.',
      solution: [
        'Landing page responsive con diseño gastronómico premium',
        'Sistema de reservas online integrado con WhatsApp',
        'Menú digital interactivo con fotos profesionales',
        'Integración con Google Maps y redes sociales',
      ],
      results: [
        { metric: 'Reservas Online', value: '+230%' },
        { metric: 'Tráfico Web', value: '+180%' },
        { metric: 'Engagement Redes', value: '+95%' },
        { metric: 'Nuevos Clientes', value: '+150%' },
      ],
      timeline: '3 semanas',
      investment: '$280.000',
    },
    {
      id: 2,
      title: 'Verde Nativo',
      subtitle: 'Tienda de Plantas - Santiago',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80',
      result: '+180% conversiones',
      rating: '4.8/5',
      testimonial: 'Vendimos 12.000 plantas en 6 meses. Increíble.',
      author: 'María González, CEO',
      badge: 'E-COMMERCE',
      gallery: [
        'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200&q=80',
        'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=1200&q=80',
        'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80',
      ],
      challenge: 'Tienda física de plantas con ventas estancadas. Necesitaban llegar a más clientes y facilitar envíos a domicilio en toda la Región Metropolitana.',
      solution: [
        'E-commerce completo con catálogo de 500+ productos',
        'Carrito de compras con integración Webpay',
        'Sistema de envíos automatizado por comuna',
        'Blog de cuidado de plantas para SEO',
      ],
      results: [
        { metric: 'Conversiones', value: '+180%' },
        { metric: 'Ticket Promedio', value: '+65%' },
        { metric: 'Ventas Totales', value: '12.000 plantas' },
        { metric: 'Clientes Recurrentes', value: '+120%' },
      ],
      timeline: '5 semanas',
      investment: '$650.000',
    },
    {
      id: 3,
      title: 'Espacio Urbano',
      subtitle: 'Inmobiliaria - Región Metropolitana',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      result: '450+ consultas/mes',
      rating: '5.0/5',
      testimonial: 'Sitio profesional que genera confianza. Consultas de calidad.',
      author: 'Carlos Rojas, Director',
      badge: 'SITIO CORPORATIVO',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      ],
      challenge: 'Inmobiliaria con sitio desactualizado y formularios que no funcionaban. Perdían oportunidades de negocio por falta de credibilidad digital.',
      solution: [
        'Sitio corporativo moderno con buscador de propiedades',
        'Formularios optimizados con validación automática',
        'CRM integrado para seguimiento de clientes potenciales',
        'Tour virtual 360° de propiedades destacadas',
      ],
      results: [
        { metric: 'Consultas Calificadas/mes', value: '450+' },
        { metric: 'Tasa Conversión', value: '+210%' },
        { metric: 'Tiempo en Sitio', value: '+340%' },
        { metric: 'Propiedades Vendidas', value: '+85%' },
      ],
      timeline: '4 semanas',
      investment: '$480.000',
    },
    {
      id: 4,
      title: 'FitChile',
      subtitle: 'App Fitness - Nacional',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      result: '8.500+ descargas',
      rating: '4.7/5',
      testimonial: 'App intuitiva y rápida. Usuarios la aman.',
      author: 'Andrea Silva, Fundadora',
      badge: 'APP MÓVIL',
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
      ],
      challenge: 'Emprendedora fitness necesitaba digitalizar su negocio de entrenamientos personalizados y llegar a más clientes sin estar físicamente presente.',
      solution: [
        'App nativa iOS y Android con planes de entrenamiento',
        'Sistema de suscripción mensual integrado',
        'Videos HD de ejercicios con tracking de progreso',
        'Notificaciones push para motivación diaria',
      ],
      results: [
        { metric: 'Descargas', value: '8.500+' },
        { metric: 'Rating App Store', value: '4.7★' },
        { metric: 'Usuarios Activos', value: '3.200' },
        { metric: 'Retención 30 días', value: '68%' },
      ],
      timeline: '8 semanas',
      investment: '$950.000',
    },
    {
      id: 5,
      title: 'Café Andino',
      subtitle: 'Cafetería - Valparaíso',
      category: 'landing',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
      result: '+320% ventas delivery',
      rating: '4.9/5',
      testimonial: 'El sitio nos ayudó a explotar en pedidos online.',
      author: 'Sofía Muñoz, Socia',
      badge: 'LANDING + TIENDA',
      gallery: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80',
      ],
      challenge: 'Cafetería boutique afectada por pandemia. Necesitaban cambiar su modelo de negocio a delivery urgente pero no tenían plataforma digital propia.',
      solution: [
        'Landing page con tienda online integrada',
        'Menú digital con fotos profesionales',
        'Sistema de pedidos con WhatsApp Business',
        'Programa de fidelización digital',
      ],
      results: [
        { metric: 'Ventas Delivery', value: '+320%' },
        { metric: 'Ticket Promedio', value: '+45%' },
        { metric: 'Clientes Nuevos', value: '+280%' },
        { metric: 'Pedidos/día', value: '85+' },
      ],
      timeline: '2 semanas',
      investment: '$220.000',
    },
    {
      id: 6,
      title: 'Innova Gestión',
      subtitle: 'Consultoría Empresarial - Concepción',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      result: '+95% tráfico SEO',
      rating: '5.0/5',
      testimonial: 'Presencia digital que refleja nuestra experiencia.',
      author: 'Roberto Vargas, Gerente',
      badge: 'SITIO CORPORATIVO',
      gallery: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
      ],
      challenge: 'Consultora con 15 años de experiencia pero sitio obsoleto que no reflejaba su expertise. Perdían oportunidades frente a competencia con mejor presencia digital.',
      solution: [
        'Sitio corporativo premium con blog de contenido',
        'SEO técnico y estrategia de contenido',
        'Casos de éxito interactivos con métricas',
        'Portal de clientes con acceso privado',
      ],
      results: [
        { metric: 'Tráfico Orgánico', value: '+95%' },
        { metric: 'Posición Google', value: 'Top 3' },
        { metric: 'Consultas Calificadas', value: '+140%' },
        { metric: 'Contratos Cerrados', value: '+60%' },
      ],
      timeline: '6 semanas',
      investment: '$580.000',
    },
  ];

  const clientLogos = [
    { name: 'Sabores del Sur', logo: '🍽️' },
    { name: 'Verde Nativo', logo: '🌿' },
    { name: 'Espacio Urbano', logo: '🏢' },
    { name: 'FitChile', logo: '💪' },
    { name: 'Café Andino', logo: '☕' },
    { name: 'Innova Gestión', logo: '📊' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Transforman Negocios
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Casos reales de clientes que confiaron en nosotros y multiplicaron sus resultados.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-900 shadow-lg hover:shadow-2xl hover:border-primary-600 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 border border-primary-200">
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.subtitle}</p>
                </div>

                {/* Results */}
                <div className="flex items-center justify-between py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <FaChartLine className="text-green-600 w-5 h-5" />
                    <span className="font-bold text-green-700">{project.result}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar className="w-4 h-4" />
                    <span className="text-sm font-semibold text-gray-700">
                      {project.rating}
                    </span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm italic mb-2" style={{ color: '#374151' }}>
                    "{project.testimonial}"
                  </p>
                  <p className="text-xs font-semibold" style={{ color: '#4b5563' }}>
                    — {project.author}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all group-hover:scale-105"
                >
                  <span>Ver Caso de Éxito</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="mt-20 py-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
          <h3 className="text-center text-2xl font-bold mb-8" style={{ color: '#1f2937' }}>
            Empresas que Confían en CiberByte
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 px-8">
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <span className="text-5xl mb-2">{client.logo}</span>
                  <span className="text-xs font-semibold text-center px-2" style={{ color: '#1f2937' }}>
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 shadow-2xl" style={{ color: '#ffffff' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#ffffff', opacity: 0.9 }}>
              Únete a más de 50 empresas que confiaron en CiberByte
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Iniciar mi Proyecto
            </button>
          </div>
        </div>
      </div>

      {/* MODAL - Caso de Éxito Completo */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Image Gallery */}
              <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg text-gray-900 font-bold text-2xl"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg text-gray-900 font-bold text-2xl"
                >
                  →
                </button>
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </div>
              </div>

              {/* The Challenge */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  📊 El Desafío
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.challenge}</p>
              </div>

              {/* The Solution */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  ✅ La Solución
                </h4>
                <ul className="space-y-2">
                  {selectedProject.solution.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  📈 Resultados Medibles
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center"
                    >
                      <div className="text-3xl font-bold text-green-700 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
                <p className="text-xl italic mb-4 leading-relaxed" style={{ color: '#1e293b', fontWeight: '500' }}>
                  "{selectedProject.testimonial}"
                </p>
                <p className="text-base" style={{ color: '#334155', fontWeight: '700' }}>
                  — {selectedProject.author}
                </p>
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <FaClock className="w-8 h-8 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="text-xl font-bold text-gray-900">
                      {selectedProject.timeline}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <FaDollarSign className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Inversión</div>
                    <div className="text-xl font-bold text-gray-900">
                      {selectedProject.investment}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  const element = document.querySelector('#contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Iniciar mi Proyecto Similar</span>
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS para animaciones */}
      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 15s linear infinite;
  }
  
  /* Más lento en desktop */
  @media (min-width: 768px) {
    .animate-scroll {
      animation: scroll 25s linear infinite;
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`}</style>
    </section>
  );
}