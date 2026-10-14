'use client';
import { useState, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { featuredProjects, type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

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
          <p className="text-gray-600 text-base sm:text-lg mt-3">Haz clic en un proyecto para ver qué se construyó, con qué tecnologías y cuál fue mi rol.</p>
        </div>

        <div className="relative group px-2 sm:px-8">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3.5 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 flex items-center justify-center"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3.5 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 flex items-center justify-center"
            aria-label="Siguiente"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Carrusel horizontal sin barra de scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mx-2 sm:mx-6 px-2"
          >
            {featuredProjects.map((proj) => (
              <ProjectCard
                key={proj.slug}
                project={proj}
                onOpen={setSelectedProject}
                className="min-w-[85%] sm:min-w-[380px] md:min-w-[380px] snap-center"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-6">
          <span className="text-gray-500 text-xs">Usa las flechas o desliza para ver los {featuredProjects.length} proyectos</span>
          <a href="/proyectos" className="text-primary-600 font-semibold text-sm hover:underline">
            Ver todos los proyectos
          </a>
        </div>

      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
