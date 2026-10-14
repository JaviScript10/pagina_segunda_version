'use client';

import { useCallback, useState } from 'react';
import { FaTimes, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDialog } from '@/hooks/useDialog';
import type { Project } from '@/data/projects';

/** Línea secundaria de la tarjeta y el modal: cliente o ubicación. */
export function projectMeta(project: Project): string | undefined {
  if (project.type === 'ejercicio') return 'Ejercicio de diseño';
  return project.client ?? project.location;
}

/** Espacio reservado mientras no hay capturas reales. */
export function CapturePending({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center bg-niebla text-tinta/70 text-sm font-semibold ${className}`}>
      Captura pendiente
    </span>
  );
}

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  // key: reinicia el índice de foto al cambiar de proyecto
  return <ProjectDialog key={project.slug} project={project} onClose={onClose} />;
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  const close = useCallback(() => onClose(), [onClose]);
  const dialogRef = useDialog<HTMLDivElement>(true, close);

  const total = project.images.length;
  const prev = () => setImageIndex((i) => (i - 1 + total) % total);
  const next = () => setImageIndex((i) => (i + 1) % total);
  const titleId = `proyecto-${project.slug}-titulo`;
  const meta = projectMeta(project);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative my-auto flex flex-col"
      >
        <div className="sticky top-4 right-4 z-40 flex justify-end px-4 pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto bg-black/70 hover:bg-black text-white p-3 rounded-full transition-colors shadow-2xl backdrop-blur-md"
            aria-label="Cerrar"
          >
            <FaTimes />
          </button>
        </div>

        {total > 0 ? (
          <div className="relative w-full h-[350px] sm:h-[450px] bg-gray-900 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={project.images[imageIndex]}
              alt={`${project.title}, captura ${imageIndex + 1} de ${total}`}
              className="w-full h-full object-contain"
            />
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Foto anterior"
                  className="absolute left-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-20 shadow-lg"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  aria-label="Foto siguiente"
                  className="absolute right-4 bg-black/60 hover:bg-black text-white p-3.5 rounded-full transition-colors z-20 shadow-lg"
                >
                  <FaChevronRight />
                </button>
                <div className="absolute bottom-4 bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium z-20">
                  Foto {imageIndex + 1} de {total}
                </div>
              </>
            )}
          </div>
        ) : (
          <CapturePending className="w-full h-[200px] sm:h-[260px] flex-shrink-0" />
        )}

        <div className="p-6 sm:p-10 space-y-8 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">
                {project.category}
              </span>
              {meta && (
                <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  {project.type === 'real' && project.location && !project.client && (
                    <FaMapMarkerAlt className="text-primary-500" aria-hidden="true" />
                  )}
                  {meta}
                </span>
              )}
            </div>
            <h2 id={titleId} className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600 text-base">{project.summary}</p>
          </div>

          {project.type === 'real' ? (
            <>
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">El problema</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Qué se construyó</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {project.built.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold" aria-hidden="true">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <dl className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="font-bold text-gray-900 mb-2">Stack</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
                {(project.role || project.context) && (
                  <div>
                    <dt className="font-bold text-gray-900 mb-2">Mi rol</dt>
                    <dd className="text-gray-600">
                      {[project.context, project.role].filter(Boolean).join('. ')}
                    </dd>
                  </div>
                )}
                {project.team && (
                  <div className="sm:col-span-2">
                    <dt className="font-bold text-gray-900 mb-2">Equipo</dt>
                    <dd>
                      <ul className="space-y-1 text-gray-600">
                        {project.team.map((m) => (
                          <li key={m.name}>
                            <span className="font-semibold text-gray-800">{m.name}</span>: {m.role}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            </>
          ) : (
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">Qué incluye la maqueta</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {project.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold" aria-hidden="true">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Es un ejercicio de diseño que hice para practicar. No es un cliente real.
              </p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 z-40 bg-white/95 backdrop-blur-md p-4 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 shadow-2xl">
          <a
            href="/#contacto"
            onClick={onClose}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary-500/25"
          >
            Cotizar un proyecto similar
          </a>
          <button
            onClick={onClose}
            className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-colors py-3.5 sm:py-0"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
