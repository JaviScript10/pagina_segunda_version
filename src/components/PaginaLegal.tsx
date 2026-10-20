import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CONTACT_EMAIL } from '@/lib/site';

/*
 * Plantilla de las páginas legales: misma grilla que el FAQ (título fijo a la izquierda en
 * escritorio, texto a la derecha) y secciones numeradas, porque se citan entre sí.
 */

export type SeccionLegal = { titulo: string; contenido: ReactNode };

export const ACTUALIZACION = 'octubre de 2026';

export function CorreoContacto() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-bold text-cerro underline decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function PaginaLegal({
  titulo,
  bajada,
  secciones,
}: {
  titulo: string;
  bajada: string;
  secciones: SeccionLegal[];
}) {
  return (
    <>
      <Header />
      <main className="bg-papel pt-20 text-tinta">
        <article aria-labelledby="legal-titulo" className="py-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h1 id="legal-titulo" className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                  {titulo}
                </h1>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-tinta/70">{bajada}</p>
                <p className="mt-6 text-sm text-tinta/60">Última actualización: {ACTUALIZACION}</p>
              </div>
            </header>

            <ol className="border-t border-tinta/15 lg:col-span-8">
              {secciones.map((s, i) => (
                <li key={s.titulo} className="grid grid-cols-1 gap-3 border-b border-tinta/15 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
                  <span aria-hidden="true" className="font-display text-xl font-extrabold text-tinta/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em]">{s.titulo}</h2>
                    <div className="mt-3 max-w-[62ch] space-y-4 text-lg leading-relaxed text-tinta/75">{s.contenido}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
