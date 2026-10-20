'use client';

import { useState } from 'react';
import Image from 'next/image';
import { realProjects, type RealProject } from '@/data/projects';
import { ACENTO } from '@/lib/acento';
import { Flecha, lugar, rolCorto, stack } from './piezas';

/*
 * Índice de trabajos (home y /proyectos). A la izquierda los nombres en grande; a la derecha una
 * vista previa fija que cambia (fundido) según el proyecto activo, al pasar el mouse o con el
 * teclado. En móvil cada proyecto se muestra completo, uno bajo otro.
 */

// Todos los proyectos reales; QEPD al final y rotulado como colaboración
export const ORDEN_PROYECTOS = ['pacificoclean', 'clipcontrol', 'mageh', 'callme', 'automatizador-cartas', 'qepd'];

export default function Proyectos({
  slugs = ORDEN_PROYECTOS,
  nivel = 'h2',
}: {
  slugs?: string[];
  /** h1 en /proyectos, h2 en la home. */
  nivel?: 'h1' | 'h2';
}) {
  const Titulo = nivel;
  const Subtitulo = nivel === 'h1' ? 'h2' : 'h3';
  const proyectos = slugs.map((s) => realProjects.find((p) => p.slug === s)).filter((p): p is RealProject => !!p);
  const [activo, setActivo] = useState(0);
  const p = proyectos[activo];

  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="bg-niebla py-24 text-tinta lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Titulo id="proyectos-titulo" className="font-display text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl">
            Proyectos
          </Titulo>
          <p className="max-w-sm text-tinta/70">
            {proyectos.length} proyectos reales: sitios, sistemas a medida y herramientas internas.
          </p>
        </div>

        {/* Escritorio: índice + vista previa */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12">
          <ol className="lg:col-span-5">
            {proyectos.map((q, i) => {
              const esActivo = i === activo;
              return (
                <li key={q.slug} className="border-t border-tinta/15 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActivo(i)}
                    onFocus={() => setActivo(i)}
                    onClick={() => setActivo(i)}
                    aria-pressed={esActivo}
                    aria-controls="proyectos-vista"
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerro"
                  >
                    <span>
                      <span
                        className={`block font-display text-[2.5rem] font-extrabold leading-none tracking-[-0.02em] transition-colors duration-200 ease-out ${
                          esActivo ? 'text-tinta' : 'text-tinta/55 group-hover:text-tinta/75'
                        }`}
                      >
                        {q.title}
                      </span>
                      <span className="mt-2.5 flex items-center gap-2 text-sm text-tinta/70">
                        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-sm ${ACENTO[q.accent].fondo}`} />
                        {q.category}
                        {lugar(q) && <span className="text-tinta/70">{lugar(q)}</span>}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-[transform,opacity,background-color] duration-200 ease-out ${
                        esActivo ? 'bg-tinta text-papel opacity-100' : 'bg-transparent text-tinta opacity-0 -translate-x-2'
                      }`}
                    >
                      <Flecha />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div id="proyectos-vista" aria-live="polite" className="lg:col-span-7">
            <div className="sticky top-28 rounded-2xl bg-papel p-1.5 ring-1 ring-tinta/[0.06]">
              <div className="overflow-hidden rounded-[calc(1rem-0.375rem)]">
                {/* Paneles apilados: solo cambia la opacidad, así el fundido no mueve el layout */}
                <div className="relative h-[27rem]">
                  {proyectos.map((q, i) => (
                    <div
                      key={q.slug}
                      aria-hidden={i !== activo}
                      className={`absolute inset-0 ${ACENTO[q.accent].fondo} transition-opacity duration-300 ease-out ${i === activo ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Vista p={q} prioridad={nivel === 'h1' && i === 0} />
                    </div>
                  ))}
                </div>
                <Ficha p={p} />
              </div>
            </div>
          </div>
        </div>

        {/* Móvil y tablet: cada proyecto completo */}
        <ol className="mt-12 space-y-14 lg:hidden">
          {proyectos.map((q, i) => (
            <li key={q.slug}>
              <p className="flex items-center gap-2 text-sm text-tinta/70">
                <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-sm ${ACENTO[q.accent].fondo}`} />
                {q.category}
              </p>
              <Subtitulo className="mt-2 font-display text-[2.25rem] font-extrabold leading-none tracking-[-0.02em]">{q.title}</Subtitulo>
              <div className="mt-5 rounded-2xl bg-papel p-1.5 ring-1 ring-tinta/[0.06]">
                <div className="overflow-hidden rounded-[calc(1rem-0.375rem)]">
                  <div className={`relative h-[15rem] overflow-hidden sm:h-[22rem] ${ACENTO[q.accent].fondo}`}>
                    <Vista p={q} prioridad={nivel === 'h1' && i === 0} />
                  </div>
                  <Ficha p={q} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Captura sobre el panel de color: escritorio asomando desde abajo, o el teléfono si es lo mejor. */
function Vista({ p, prioridad = false }: { p: RealProject; prioridad?: boolean }) {
  const img = p.caseImage;
  const tel = p.appScreens?.[0];
  return (
    <>
      {img && (
        <div className="absolute inset-x-[8%] bottom-0 top-10 overflow-hidden rounded-t-md bg-papel shadow-[0_24px_48px_-24px_rgb(23_32_51/0.45)] ring-1 ring-tinta/10">
          <Image src={img.src} width={img.w} height={img.h} alt={`Captura de ${p.title}`} priority={prioridad} sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 84vw" className="block h-auto w-full" />
        </div>
      )}
      {tel && (
        <div className="absolute -bottom-8 right-[5%] w-[20%] min-w-[5.5rem]">
          <div className="rounded-[1.1rem] bg-tinta p-1 shadow-[0_24px_48px_-20px_rgb(23_32_51/0.55)]">
            <div className="relative aspect-[390/844] overflow-hidden rounded-[0.85rem] bg-papel">
              <Image src={tel.src} alt={tel.alt} fill sizes="140px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Ficha({ p }: { p: RealProject }) {
  return (
    <div className="grid gap-6 bg-papel p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-8">
      <div>
        <p className="leading-relaxed text-tinta/75">{p.problem}</p>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 text-sm">
          <div>
            <dt className="text-tinta/70">{p.collaboration ? 'Participación' : 'Rol'}</dt>
            <dd className="mt-1 font-bold">{rolCorto(p)}</dd>
          </div>
          <div>
            <dt className="text-tinta/70">Stack</dt>
            <dd className="mt-1 font-bold">{stack(p)}</dd>
          </div>
        </dl>
      </div>
      {p.url && (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 self-end rounded-lg border border-tinta/15 py-1.5 pl-4 pr-1.5 font-bold transition-colors duration-200 ease-out hover:border-tinta/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerro"
        >
          Ver sitio
          <span className="grid h-8 w-8 place-items-center rounded-md bg-niebla transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5">
            <Flecha />
          </span>
        </a>
      )}
    </div>
  );
}
