import Image from 'next/image';
import { designExercises } from '@/data/projects';

/*
 * Ejercicios de diseño (DESIGN.md §2 y §6): las maquetas antiguas, en una sección aparte y
 * rotuladas como ejercicios. Sin clientes, testimonios, resultados ni inversión.
 */
export default function Ejercicios() {
  return (
    <section aria-labelledby="ejercicios-titulo" className="bg-papel py-24 text-tinta lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="ejercicios-titulo" className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            Ejercicios de diseño
          </h2>
          <p className="max-w-md text-tinta/70">
            Maquetas que hice para practicar diseño de sitios. No son clientes reales.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {designExercises.map((e) => (
            <li key={e.slug} className="rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06]">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(1rem-0.375rem)] bg-papel">
                <div className="relative aspect-[4/3] overflow-hidden bg-niebla">
                  <Image
                    src={e.images[0]}
                    alt={`Maqueta de ${e.title}`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="rounded bg-niebla px-2 py-0.5 font-bold text-tinta/80">Ejercicio de diseño</span>
                    <span className="text-tinta/70">{e.category}</span>
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.01em]">{e.title}</h3>
                  <p className="mt-2 leading-relaxed text-tinta/70">{e.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
