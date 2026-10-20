import { PAYMENT_TERM } from '@/data/pricing';

/*
 * Cómo trabajo (DESIGN.md §5): cuatro pasos de una secuencia real, por eso van numerados.
 * Los pasos cuelgan de un mismo riel: una línea Tinta con un marcador por paso.
 */

const PASOS = [
  { titulo: 'Conversamos', texto: 'Me cuentas tu idea por WhatsApp o en una llamada corta.' },
  { titulo: 'Propuesta', texto: 'Te mando el precio final, el plazo y qué incluye, antes de empezar.' },
  { titulo: 'Desarrollo', texto: 'Ves los avances en un link de vista previa y pides cambios en el camino.' },
  { titulo: 'Entrega', texto: 'Publico el sitio, te enseño a usarlo y tienes 30 días de garantía.' },
];

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" aria-labelledby="como-trabajo-titulo" className="bg-niebla py-24 text-tinta lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="como-trabajo-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            Cómo trabajo
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-tinta/70">
            Cuatro pasos, siempre los mismos. Sabes en qué etapa vamos y qué viene después.
          </p>
        </div>

        {/* Sin espacio entre columnas: el riel es una sola línea continua */}
        <ol className="mt-16 grid grid-cols-1 lg:mt-24 lg:grid-cols-4">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="relative border-l-2 border-tinta pb-12 pl-8 last:pb-0 lg:border-l-0 lg:border-t-2 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-10">
              {/* Marcador sobre el riel */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-0 h-3 w-3 rounded-sm bg-calamina ring-2 ring-tinta lg:-top-[7px] lg:left-0"
              />
              <span className="block font-display text-[4rem] font-extrabold leading-none tracking-[-0.04em] text-tinta/15 lg:text-[5rem]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.01em]">{paso.titulo}</h3>
              <p className="mt-2 max-w-[30ch] leading-relaxed text-tinta/75">{paso.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 border-t border-tinta/15 pt-6 text-tinta/75 lg:mt-20">{PAYMENT_TERM}</p>
      </div>
    </section>
  );
}
