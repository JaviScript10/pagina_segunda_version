import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '@/lib/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-niebla pb-20 pt-32 text-tinta sm:pt-36 lg:pb-28 lg:pt-40">
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

        {/* Ilustración del cerro: llega en el siguiente commit */}
        <div aria-hidden="true" />
      </div>
    </section>
  );
}
