import { FaMapMarkerAlt } from 'react-icons/fa';
import type { Project } from '@/data/projects';
import { CapturePending, projectMeta } from './ProjectModal';

/** Tarjeta clicable de proyecto. El tamaño lo decide el contenedor vía className. */
export default function ProjectCard({
  project,
  onOpen,
  className = '',
}: {
  project: Project;
  onOpen: (project: Project) => void;
  className?: string;
}) {
  const cover = project.images[0];
  const meta = projectMeta(project);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between text-left ${className}`}
    >
      <span className="block w-full">
        <span className="block aspect-[4/3] bg-gray-100 overflow-hidden relative">
          {cover ? (
            <img
              src={cover}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <CapturePending className="w-full h-full" />
          )}
          {project.images.length > 1 && (
            <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
              {project.images.length} fotos
            </span>
          )}
        </span>
        <span className="block p-8">
          <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">
            {project.category}
          </span>
          <span className="block text-2xl font-bold text-gray-900 mt-3">{project.title}</span>
          {meta && (
            <span className="text-sm text-gray-600 mt-1 font-medium flex items-center gap-1.5">
              {project.type === 'real' && project.location && !project.client && (
                <FaMapMarkerAlt className="text-primary-500" aria-hidden="true" />
              )}
              {meta}
            </span>
          )}
          <span className="block text-sm text-gray-600 mt-3 line-clamp-2">{project.summary}</span>
        </span>
      </span>
      <span className="block w-full p-8 pt-0">
        <span className="block text-center text-primary-600 font-semibold text-sm group-hover:underline">
          Ver proyecto
        </span>
      </span>
    </button>
  );
}
