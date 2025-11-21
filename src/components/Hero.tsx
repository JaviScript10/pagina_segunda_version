'use client';

import { FaRocket, FaCode, FaMobile, FaShoppingCart } from 'react-icons/fa';

export default function Hero() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    { icon: FaCode, label: 'Desarrollo Web' },
    { icon: FaMobile, label: 'Apps Móviles' },
    { icon: FaShoppingCart, label: 'E-commerce' },
    { icon: FaRocket, label: 'Landing Pages' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Disponible para nuevos proyectos
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforma tu{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Presencia Digital
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Creamos soluciones web modernas, rápidas y optimizadas para impulsar
              tu negocio. Desde landing pages hasta e-commerce completos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Comenzar Proyecto
              </button>
              <a
                href="#proyectos"
                className="btn-secondary text-lg px-8 py-4"
              >
                Ver Proyectos
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">
                  50+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">
                  100%
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">
                  &lt;1s
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Carga de Páginas
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {service.label}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg animate-bounce-slow hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-primary-600">
                  Carga Ultra-Rápida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <a
          href="#servicios"
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-600 transition-colors"
        >
          <span className="text-sm font-medium">Desliza para explorar</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
