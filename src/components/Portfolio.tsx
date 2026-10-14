import Image from 'next/image';
import { featuredProjects, type RealProject } from '@/data/projects';
import BrowserFrame from './BrowserFrame';

/** "Tienda online en Valparaíso", "Sistema a medida para Tresmontes Lucchetti" */
function placeLine(p: RealProject): string {
  if (p.client) {
    // Un cliente genérico ("Empresa de …") va en minúscula dentro de la frase
    const client = /^Empresa\b/.test(p.client) ? `una ${p.client.charAt(0).toLowerCase()}${p.client.slice(1)}` : p.client;
    return `${p.category} para ${client}`;
  }
  return p.location ? `${p.category} en ${p.location}` : p.category;
}

function hostOf(url: string) {
  return new URL(url).host;
}

export default function Portfolio() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="bg-papel py-20 text-tinta lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="proyectos-titulo" className="font-display text-4xl font-extrabold tracking-[-0.02em] lg:text-5xl">
            Proyectos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/80">
            Trabajo real, con clientes y usuarios reales. Cada caso cuenta qué problema había, qué se construyó y qué hice yo.
          </p>
        </div>

        <div className="mt-14">
          {featuredProjects.map((project) => (
            <CaseStudy key={project.slug} project={project} />
          ))}
        </div>

        <p className="mt-4 border-t-2 border-tinta pt-8 text-lg">
          <a
            href="/proyectos"
            className="font-bold text-cerro underline decoration-2 underline-offset-[6px] transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
          >
            Ver todos los proyectos
          </a>
          <span className="text-tinta/75">, incluidas colaboraciones y ejercicios de diseño.</span>
        </p>
      </div>
    </section>
  );
}

function CaseStudy({ project: p }: { project: RealProject }) {
  const image = p.caseImage ?? p.images[0];
  const hasMedia = Boolean(image);
  const titleId = `caso-${p.slug}`;

  const details = (
    <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <dt className="font-bold">Qué se construyó</dt>
        <dd className="mt-2">
          <ul className="space-y-1.5 text-tinta/85">
            {p.built.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-[2px] w-3 shrink-0 bg-tinta" />
                {item}
              </li>
            ))}
          </ul>
        </dd>
      </div>
      <div>
        <dt className="font-bold">Stack</dt>
        <dd className="mt-2 text-tinta/85">{p.stack.join(', ')}</dd>
      </div>
      {p.role && (
        // Un rol largo usa todo el ancho en vez de una columna angosta
        <div className={p.role.length > 60 ? 'sm:col-span-2' : undefined}>
          <dt className="font-bold">{p.collaboration ? 'Mi participación' : 'Mi rol'}</dt>
          <dd className="mt-2 text-tinta/85">
            {p.role}.{p.usage && ` ${p.usage}.`}
          </dd>
        </div>
      )}
      {p.team && (
        <div className="sm:col-span-2">
          <dt className="font-bold">Equipo</dt>
          <dd className="mt-2 text-tinta/85">
            {p.context}, con{' '}
            {p.team.map((m, i) => (
              <span key={m.name}>
                {i > 0 && (i === p.team!.length - 1 ? ' y ' : ', ')}
                <span className="font-bold text-tinta">{m.name}</span> ({m.role.charAt(0).toLowerCase() + m.role.slice(1)})
              </span>
            ))}
            .
          </dd>
        </div>
      )}
    </dl>
  );

  return (
    <article
      aria-labelledby={titleId}
      // Móvil: título, captura y después el texto. Escritorio: texto a la izquierda, captura fija a la derecha.
      className="grid gap-y-8 border-t-2 border-tinta py-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-6 lg:py-16"
    >
      <div className="lg:col-span-5">
        <h3 id={titleId} className="font-display text-3xl font-extrabold tracking-[-0.02em] lg:text-4xl">
          {p.title}
        </h3>
        <p className="mt-2 font-bold text-tinta/75">{placeLine(p)}</p>
      </div>

      {hasMedia && (
        <figure className="lg:sticky lg:top-28 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-start">
          <BrowserFrame label={p.url ? hostOf(p.url) : `Panel de ${p.title}`}>
            <div className="relative aspect-[16/9] bg-niebla">
              <Image
                src={image}
                alt={`Captura de ${p.title}`}
                fill
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 56vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </BrowserFrame>
          {p.appScreens && (
            <>
              <ul className="mt-6 grid max-w-md grid-cols-3 gap-4 sm:gap-5">
                {p.appScreens.map((screen) => (
                  <li key={screen.src}>
                    <PhoneFrame src={screen.src} alt={screen.alt} />
                  </li>
                ))}
              </ul>
              <figcaption className="mt-3 text-[0.95rem] text-tinta/75">
                Panel de administración web y app del guardia, con datos de prueba.
              </figcaption>
            </>
          )}
        </figure>
      )}

      <div className="lg:col-span-5 lg:row-start-2">
        <p className="max-w-[60ch] text-lg leading-relaxed">{p.problem}</p>
        {hasMedia && <div className="mt-8">{details}</div>}
        {p.url && (
          <p className="mt-8">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cerro underline decoration-2 underline-offset-[6px] transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
            >
              Ver el sitio
            </a>
          </p>
        )}
      </div>

      {/* Sin capturas: el detalle ocupa la columna derecha en vez de un marco vacío */}
      {!hasMedia && <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pt-2">{details}</div>}
    </article>
  );
}

/** Marco de teléfono simple para capturas de app (390 px de ancho). */
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[1.25rem] border-2 border-tinta bg-tinta p-1">
      <div className="relative aspect-[390/844] overflow-hidden rounded-[0.95rem] bg-papel">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 140px, 30vw" className="object-cover object-top" />
      </div>
    </div>
  );
}
