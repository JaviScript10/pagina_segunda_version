'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaCode, FaMobile, FaShoppingCart, FaRocket } from 'react-icons/fa';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Boutique',
      category: 'ecommerce',
      description: 'Tienda online de moda con catálogo de 500+ productos y pasarela de pago.',
      image: '/projects/ecommerce.jpg',
      tech: ['Next.js', 'Stripe', 'Tailwind'],
      link: '#',
    },
    {
      id: 2,
      title: 'App Delivery',
      category: 'app',
      description: 'Aplicación móvil para delivery de comida con tracking en tiempo real.',
      image: '/projects/app-delivery.jpg',
      tech: ['React Native', 'Firebase', 'Google Maps'],
      link: '#',
    },
    {
      id: 3,
      title: 'Landing Inmobiliaria',
      category: 'landing',
      description: 'Landing page de alto impacto para empresa inmobiliaria.',
      image: '/projects/landing-inmobiliaria.jpg',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      link: '#',
    },
    {
      id: 4,
      title: 'Portal Corporativo',
      category: 'web',
      description: 'Sitio corporativo multi-idioma con sistema de blog integrado.',
      image: '/projects/portal-corporativo.jpg',
      tech: ['Next.js', 'Sanity CMS', 'TypeScript'],
      link: '#',
    },
    {
      id: 5,
      title: 'App Fitness',
      category: 'app',
      description: 'App de seguimiento de ejercicios y nutrición con IA.',
      image: '/projects/app-fitness.jpg',
      tech: ['Flutter', 'Python', 'TensorFlow'],
      link: '#',
    },
    {
      id: 6,
      title: 'E-learning Platform',
      category: 'web',
      description: 'Plataforma educativa con streaming de video y certificados.',
      image: '/projects/elearning.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
  ];

  const categories = [
    { id: 'todos', label: 'Todos', icon: null },
    { id: 'web', label: 'Sitios Web', icon: FaCode },
    { id: 'ecommerce', label: 'E-commerce', icon: FaShoppingCart },
    { id: 'app', label: 'Apps Móviles', icon: FaMobile },
    { id: 'landing', label: 'Landing Pages', icon: FaRocket },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Transforman Negocios
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Explora algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === cat.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
              >
                <span className="flex items-center space-x-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center overflow-hidden">
                <div className="text-6xl text-primary-300">
                  {project.category === 'ecommerce' && <FaShoppingCart />}
                  {project.category === 'app' && <FaMobile />}
                  {project.category === 'landing' && <FaRocket />}
                  {project.category === 'web' && <FaCode />}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <a
                    href={project.link}
                    className="flex items-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <span>Ver Proyecto</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No hay proyectos en esta categoría aún.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para el siguiente proyecto exitoso?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Trabajemos juntos para llevar tu idea al siguiente nivel.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Comenzar Mi Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
