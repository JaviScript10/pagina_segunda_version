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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/fondo1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.05) contrast(0.95)',
        }}
      />

      {/* Overlay equilibrado */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.80) 100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge flotante */}
            <div className="inline-flex items-center space-x-2 bg-green-50 border-2 border-green-200 px-4 py-2 rounded-full shadow-lg">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-green-700">
                Disponible para nuevos proyectos
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Transforma tu{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Presencia Digital
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl mx-auto lg:mx-0">
              Creamos soluciones web modernas, rápidas y optimizadas para impulsar
              tu negocio. Desde landing pages hasta e-commerce completos.
            </p>

            {/* BOTONES CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Comenzar Proyecto
              </button>

              <a href="#proyectos" className="btn-secondary text-lg px-8 py-4">
                Ver Proyectos
              </a>
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card group hover:scale-105 transition-transform duration-300 border-2 border-gray-900"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{service.label}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
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
