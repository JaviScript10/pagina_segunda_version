'use client';

import { FaRocket, FaUsers, FaTrophy, FaClock } from 'react-icons/fa';
import { useCountUp } from '@/hooks/useCountUp';

// Componente individual para cada stat con contador
function StatCard({ icon: Icon, endValue, suffix, label }: {
  icon: React.ComponentType<{ className?: string }>;
  endValue: number;
  suffix: string;
  label: string;
}) {
  const counter = useCountUp({ end: endValue, duration: 2000, suffix });

  return (
    <div
      ref={counter.ref}
      className="bg-white rounded-xl p-6 border-2 border-gray-900 shadow-md hover:shadow-2xl hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
        {counter.value}
      </div>
      <div className="text-sm text-gray-700 font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const stats = [
    { icon: FaTrophy, endValue: 50, suffix: '+', label: 'Proyectos Completados' },
    { icon: FaUsers, endValue: 40, suffix: '+', label: 'Clientes Satisfechos' },
    { icon: FaClock, endValue: 3, suffix: '+', label: 'Años de Experiencia' },
    { icon: FaRocket, endValue: 100, suffix: '%', label: 'Entrega a Tiempo' },
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
    <section id="nosotros" className="pt-24 pb-12 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
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

        {/* Stats - CON CONTADOR ANIMADO */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-2 border-gray-900 shadow-md hover:shadow-2xl hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
