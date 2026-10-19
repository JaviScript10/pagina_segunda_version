import Image from 'next/image';
import { realProjects, type RealProject } from '@/data/projects';
import { ACENTO } from '@/lib/acento';
import { Flecha, lugar, rolCorto, stack } from './comun';

/*
 * Proyectos A: bento asimétrico. Cada proyecto es una pieza con marco doble (carcasa Niebla +
 * núcleo Papel). La captura asoma desde abajo sobre un panel del color del proyecto, grande y
 * protagonista. Ritmo: uno a todo el ancho, luego 7+5 y 5+7.
 */

type Pieza = { slug: string; span: string; forma: 'ancha' | 'normal' | 'telefono' };

const ORDEN: Pieza[] = [
  { slug: 'pacificoclean', span: 'lg:col-span-12', forma: 'ancha' },
  { slug: 'clipcontrol', span: 'lg:col-span-7', forma: 'normal' },
  { slug: 'mageh', span: 'lg:col-span-5', forma: 'telefono' },
  { slug: 'automatizador-cartas', span: 'lg:col-span-5', forma: 'normal' },
  { slug: 'qepd', span: 'lg:col-span-7', forma: 'normal' },
];

export default function ProyectosA() {
  const porSlug = new Map(realProjects.map((p) => [p.slug, p]));

  return (
    <section aria-labelledby="proyectos-a-titulo" className="bg-papel py-24 text-tinta lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="proyectos-a-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:col-span-7 lg:text-[5.5rem]">
            Proyectos
            <br />
            reales.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-tinta/70 lg:col-span-5 lg:justify-self-end">
            Sitios y sistemas hechos para negocios y equipos de verdad, cada uno a partir de un problema concreto.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-24 lg:grid-cols-12 lg:gap-6">
          {ORDEN.map(({ slug, span, forma }) => {
            const p = porSlug.get(slug);
            return p ? <Pieza key={slug} p={p} span={span} forma={forma} /> : null;
          })}
        </div>
      </div>
    </section>
  );
}

function Pieza({ p, span, forma }: { p: RealProject; span: string; forma: Pieza['forma'] }) {
  const acento = ACENTO[p.accent];
  const img = p.caseImage;
  const telefono = p.appScreens?.[0];
  const Contenedor = p.url ? 'a' : 'article';
  const enlace = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    // Carcasa: Niebla con línea finísima. Núcleo: Papel con radio concéntrico.
    <div className={`rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06] ${span}`}>
      <Contenedor
        {...enlace}
        className="group flex h-full flex-col overflow-hidden rounded-[calc(1rem-0.375rem)] bg-papel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
      >
        {/* Panel de color con la captura asomando desde abajo */}
        <div
          className={`relative overflow-hidden ${acento.fondo} ${
            forma === 'ancha' ? 'h-[19rem] sm:h-[26rem] lg:h-[34rem]' : forma === 'telefono' ? 'h-[22rem] sm:h-[26rem] lg:h-[30rem]' : 'h-[16rem] sm:h-[22rem] lg:h-[26rem]'
          }`}
        >
          {forma === 'telefono' && telefono ? (
            <div className="absolute inset-x-0 bottom-0 top-10 flex justify-center">
              <div className="w-[13.5rem] origin-bottom transition-transform duration-500 ease-out sm:w-[15rem] [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-2">
                <div className="rounded-t-[2rem] bg-tinta p-2 pb-0">
                  <div className="relative aspect-[390/600] overflow-hidden rounded-t-[1.5rem] bg-papel">
                    <Image src={telefono.src} alt={telefono.alt} fill sizes="240px" className="object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            img && (
              <div
                className={`absolute bottom-0 origin-bottom transition-transform duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-2 ${
                  forma === 'ancha' ? 'inset-x-[6%] top-12 lg:inset-x-[10%] lg:top-16' : 'inset-x-[7%] top-10 lg:top-12'
                }`}
              >
                {/* La captura llena el marco desde arriba a la izquierda: sin huecos aunque sea muy ancha */}
                <div className="relative h-full overflow-hidden rounded-t-md bg-papel shadow-[0_24px_48px_-24px_rgb(23_32_51/0.45)] ring-1 ring-tinta/10">
                  <Image
                    src={img.src}
                    fill
                    alt={`Captura de ${p.title}`}
                    sizes={forma === 'ancha' ? '(min-width: 1280px) 1000px, 88vw' : '(min-width: 1280px) 620px, (min-width: 1024px) 52vw, 86vw'}
                    className="object-cover object-left-top"
                  />
                </div>
                {/* ClipControl: la app del guardia asoma junto al panel */}
                {p.slug === 'clipcontrol' && telefono && (
                  <div className="absolute -bottom-6 right-[4%] hidden w-[22%] rotate-0 sm:block">
                    <div className="rounded-[1.1rem] bg-tinta p-1 shadow-[0_24px_48px_-20px_rgb(23_32_51/0.55)]">
                      <div className="relative aspect-[390/844] overflow-hidden rounded-[0.85rem] bg-papel">
                        <Image src={telefono.src} alt={telefono.alt} fill sizes="140px" className="object-cover object-top" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Ficha */}
        <div className={`flex flex-1 flex-col gap-6 p-6 sm:p-8 ${forma === 'ancha' ? 'lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-10' : ''}`}>
          <div className="max-w-xl">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className={`rounded px-2 py-0.5 font-bold ${acento.fondo} ${acento.texto}`}>{p.category}</span>
              {lugar(p) && <span className="text-tinta/60">{lugar(p)}</span>}
            </p>
            <h3 className={`mt-4 font-display font-extrabold tracking-[-0.02em] ${forma === 'ancha' ? 'text-4xl lg:text-5xl' : 'text-3xl'}`}>{p.title}</h3>
            <p className="mt-3 line-clamp-3 leading-relaxed text-tinta/70">{p.problem}</p>
          </div>

          <div className={`flex items-end justify-between gap-6 ${forma === 'ancha' ? 'lg:min-w-[22rem] lg:flex-col lg:items-stretch' : 'mt-auto'}`}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              <dt className="text-tinta/50">{p.collaboration ? 'Participación' : 'Rol'}</dt>
              <dt className="text-tinta/50">Stack</dt>
              <dd className="font-bold">{rolCorto(p)}</dd>
              <dd className="font-bold">{stack(p)}</dd>
            </dl>
            {p.url && (
              <span className="flex shrink-0 items-center gap-3 self-end font-bold text-cerro lg:self-auto">
                <span className="hidden sm:inline">Ver sitio</span>
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-niebla text-tinta transition-[transform,background-color] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-calamina">
                  <Flecha />
                </span>
              </span>
            )}
          </div>
        </div>
      </Contenedor>
    </div>
  );
}
