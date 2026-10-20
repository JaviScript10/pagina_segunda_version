/*
 * Sobre mí (DESIGN.md §5): sin foto, en primera persona y solo con hechos confirmados.
 * La historia va en prosa; los datos duros, en una ficha aparte para que no se lea como currículum.
 */

const STACK = ['Next.js', 'React', 'Python (FastAPI y Django)', 'Supabase', 'Vercel'];

export default function SobreMi() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className="bg-papel py-24 text-tinta lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <h2 id="sobre-mi-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:col-span-4">
          Sobre mí
        </h2>

        <div className="lg:col-span-8">
          <p className="max-w-[34ch] font-display text-[1.75rem] font-bold leading-[1.25] tracking-[-0.01em] sm:text-[2rem]">
            Vengo de las telecomunicaciones: redes HFC y de fibra óptica FTTH, un rubro donde las cosas tienen que funcionar sí o sí.
          </p>
          <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-tinta/75">
            <p>
              Hoy estudio Ingeniería en Informática en INACAP y desarrollo sitios web y sistemas a medida. Esa costumbre de que
              las cosas funcionen es la que traigo a cada proyecto.
            </p>
            <p>
              Trabajo desde Valparaíso, de forma remota, con clientes de todo Chile. Hablas directo conmigo, desde la primera
              conversación hasta la entrega.
            </p>
          </div>

          {/* Ficha: carcasa Niebla con núcleo Papel */}
          <div className="mt-12 rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06]">
            <dl className="grid grid-cols-1 rounded-[calc(1rem-0.375rem)] bg-papel sm:grid-cols-[10rem_minmax(0,1fr)]">
              <dt className="px-6 pb-1 pt-6 text-sm text-tinta/70 sm:py-5">Base</dt>
              <dd className="px-6 pb-5 font-bold sm:border-l sm:border-tinta/[0.08] sm:py-5">Valparaíso, trabajo remoto para todo Chile</dd>

              <dt className="border-t border-tinta/[0.08] px-6 pb-1 pt-5 text-sm text-tinta/70 sm:py-5">Estudio</dt>
              <dd className="px-6 pb-5 font-bold sm:border-l sm:border-t sm:border-tinta/[0.08] sm:py-5">Ingeniería en Informática, INACAP</dd>

              <dt className="border-t border-tinta/[0.08] px-6 pb-1 pt-5 text-sm text-tinta/70 sm:py-5">Stack</dt>
              <dd className="px-6 pb-6 sm:border-l sm:border-t sm:border-tinta/[0.08] sm:py-5">
                <ul className="flex flex-wrap gap-2">
                  {STACK.map((t) => (
                    <li key={t} className="rounded bg-niebla px-2.5 py-1 text-[0.9375rem] font-bold">
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
