'use client';
import { useState, useCallback } from 'react';
import { realProjects, designExercises, type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProyectosGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* Proyectos reales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {realProjects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} onOpen={setSelectedProject} className="w-full" />
        ))}
      </div>

      {/* Ejercicios de diseño: maquetas de práctica, rotuladas como tales */}
      <section aria-labelledby="ejercicios-titulo" className="mt-24">
        <div className="max-w-3xl mb-10">
          <h2 id="ejercicios-titulo" className="text-3xl font-bold text-gray-900 mb-3">Ejercicios de diseño</h2>
          <p className="text-gray-600">
            Maquetas que hice para practicar diseño de sitios. No son clientes reales.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designExercises.map((proj) => (
            <ProjectCard key={proj.slug} project={proj} onOpen={setSelectedProject} className="w-full" />
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
