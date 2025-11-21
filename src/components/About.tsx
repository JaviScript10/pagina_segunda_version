'use client';

import { FaRocket, FaUsers, FaTrophy, FaClock } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: FaTrophy, value: '50+', label: 'Proyectos Completados' },
    { icon: FaUsers, value: '40+', label: 'Clientes Satisfechos' },
    { icon: FaClock, value: '3+', label: 'Años de Experiencia' },
    { icon: FaRocket, value: '100%', label: 'Entrega a Tiempo' },
  ];

  const values = [
    {
      title: 'Calidad Premium',
      description:
        'Cada línea de código y cada píxel del diseño son cuidadosamente elaborados para garantizar excelencia.',
    },
    {
      title: 'Velocidad Garantizada',
      description:
        'Optimizamos cada aspecto técnico para que tu sitio cargue en menos de 1 segundo.',
    },
    {
      title: 'Soporte Continuo',
      description:
        'No te dejamos solo después del lanzamiento. Estamos aquí para cualquier duda o mejora.',
    },
    {
      title: 'Tecnología Moderna',
      description:
        'Usamos las últimas tecnologías y mejores prácticas del desarrollo web.',
    },
  ];

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tu Socio en{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Transformación Digital
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Somos un equipo de desarrolladores y diseñadores apasionados por crear
            experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-left md:text-center">
              <p>
                CiberByte nació de la pasión por crear soluciones digitales que realmente
                marquen la diferencia. Sabemos que cada proyecto es único y merece atención
                personalizada.
              </p>
              <p>
                Trabajamos con startups, PyMEs y empresas establecidas, ayudándolas a
                establecer o mejorar su presencia en línea con tecnología de punta y diseño
                excepcional.
              </p>
              <p>
                Nuestro enfoque combina creatividad, tecnología y estrategia para entregar
                productos que no solo se ven bien, sino que funcionan perfectamente y
                generan resultados medibles.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contacto"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Trabajemos Juntos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
