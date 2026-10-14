import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '@/lib/site';
import HeroCable from './HeroCable';
import BrowserFrame from './BrowserFrame';
import pacificoClean from '../../public/proyectos/pacificoclean-inicio.webp';

const PACIFICO_URL = 'https://pacificoclean.vercel.app/';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-niebla pb-20 pt-32 text-tinta sm:pt-36 lg:pb-28 lg:pt-40">
      <HeroCable />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
        <div>
          <h1 className="max-w-[18ch] text-balance font-display text-[2.375rem] font-extrabold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem] xl:text-[3.875rem]">
            Sitios web y sistemas a medida, desde Valparaíso.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-tinta/80 sm:text-xl">
            Para negocios de todo Chile. Hablas directo con quien lo construye.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={whatsappUrl('Hola, vengo desde el sitio de CiberByte.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cable-end
              className="relative inline-flex items-center gap-2.5 rounded-lg border-2 border-tinta bg-calamina px-6 py-3.5 text-lg font-bold text-tinta transition-[transform,background-color] duration-150 ease-out hover:bg-calamina/85 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro motion-reduce:transition-none"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
            <a
              href="#proyectos"
              className="text-lg font-bold text-cerro underline decoration-2 underline-offset-[6px] transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        <figure data-cable-start className="relative">
          <BrowserFrame label="pacificoclean.vercel.app">
            <Image
              src={pacificoClean}
              alt="Página de inicio de PacificoClean: “Soluciones de aseo para hogares, empresas e instituciones”, con botones Ver Catálogo y Ver Despachos."
              sizes="(min-width: 1280px) 660px, (min-width: 1024px) 52vw, 100vw"
              priority
              className="block h-auto w-full"
            />
          </BrowserFrame>
          <figcaption className="mt-3 text-[0.95rem] text-tinta/75">
            PacificoClean, tienda de artículos de aseo de Valparaíso.{' '}
            <a
              href={PACIFICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cerro underline decoration-[1.5px] underline-offset-4 hover:text-tinta"
            >
              Ver el sitio
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
