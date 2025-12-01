'use client';

import {
  FaCode,
  FaMobile,
  FaShoppingCart,
  FaRocket,
  FaSearch,
  FaCog,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaRocket,
      title: 'Landing Pages',
      description:
        'Páginas de aterrizaje optimizadas para conversión. Diseño atractivo, carga rápida y enfocadas en resultados.',
      features: ['Diseño responsivo', 'SEO optimizado', 'Formularios integrados'],
      price: 'Desde $150.000',
    },
    {
      icon: FaCode,
      title: 'Sitios Corporativos',
      description:
        'Sitios web profesionales que representan tu marca. Modernos, elegantes y completamente funcionales.',
      features: ['Multi-página', 'Panel de admin', 'Blog integrado'],
      price: 'Desde $350.000',
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce',
      description:
        'Tiendas online completas con pasarela de pago. Gestiona productos, inventario y ventas fácilmente.',
      features: ['Carrito de compras', 'Pago integrado', 'Panel vendedor'],
      price: 'Desde $600.000',
    },
    {
      icon: FaMobile,
      title: 'Apps Móviles',
      description:
        'Aplicaciones nativas o híbridas para iOS y Android. Experiencia de usuario excepcional.',
      features: ['iOS & Android', 'Push notifications', 'Backend incluido'],
      price: 'Desde $800.000',
    },
    {
      icon: FaSearch,
      title: 'SEO & Marketing',
      description:
        'Posiciona tu sitio en Google. Auditorías, optimización y estrategias de contenido efectivas.',
      features: ['Auditoría SEO', 'Optimización on-page', 'Reportes mensuales'],
      price: 'Desde $120.000/mes',
    },
    {
      icon: FaCog,
      title: 'Mantenimiento',
      description:
        'Mantén tu sitio actualizado y seguro. Soporte técnico, backups y mejoras continuas.',
      features: ['Actualizaciones', 'Backups diarios', 'Soporte 24/7'],
      price: 'Desde $50.000/mes',
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Soluciones Digitales{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Desde la idea hasta el lanzamiento, te acompañamos en cada paso del desarrollo
            de tu proyecto digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-900 shadow-md hover:shadow-2xl hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="text-xl font-bold text-primary-600">
                    {service.price}
                  </span>
                  <a
                    href="#contacto"
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-1 group/link"
                  >
                    <span>Cotizar</span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Trabajamos en proyectos personalizados.
          </p>
          <a href="#contacto" className="btn-primary text-lg px-8 py-4 inline-block">
            Solicitar Proyecto Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
