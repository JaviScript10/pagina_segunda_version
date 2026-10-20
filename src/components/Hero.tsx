import { VISTA_COMPLETA, VISTA_MOVIL, viewBox, type Vista } from '@/lib/cerro';
import CerroIlustracion from './CerroIlustracion';
import { CabinaAscensor } from './AscensorCerro';

export default function Hero() {
  // Móvil: todo el hero (textos, botones y el cerro) cabe en la primera pantalla (min-h 100svh)
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-niebla pt-28 text-tinta sm:pt-32 lg:block lg:min-h-0 lg:pt-36">
      <div className="relative mx-auto grid w-full max-w-7xl flex-1 content-between items-center gap-6 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:content-normal lg:gap-16 lg:px-8">
        <div className="lg:pb-20">
          <h1 className="max-w-[18ch] text-balance font-display text-[2.125rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem] xl:text-[3.875rem]">
            Páginas web que trabajan por tu negocio.
          </h1>
          <p className="mt-4 max-w-[34rem] text-[1.0625rem] leading-relaxed text-tinta/80 sm:mt-6 sm:text-xl">
            Desarrollo a medida desde Valparaíso, para todo Chile. Sin plantillas y sin intermediarios.
          </p>

          {/* Botón principal del hero: lleva al trabajo; WhatsApp queda en el flotante, los precios y Contacto */}
          <div className="mt-6 sm:mt-10">
            <a
              href="#proyectos"
              className="btn-principal px-5 py-3 text-base sm:px-6 sm:py-3.5 sm:text-lg"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        {/* El cerro se apoya en la calle y sigue hasta el borde derecho de la pantalla */}
        <div className="-mx-4 sm:mx-0 lg:-mr-8 lg:self-end xl:mr-[calc((80rem-100vw)/2-2rem)]">
          {/* Escritorio: el cerro completo. Pantallas chicas: recorte más bajo y simplificado. */}
          <Ilustracion vista={VISTA_COMPLETA} className="hidden lg:block" />
          {/* Ancho según el alto disponible: 100svh menos header, textos, botones y calle (~31rem) */}
          <Ilustracion
            vista={VISTA_MOVIL}
            simple
            className="mx-auto lg:hidden"
            style={{ width: `min(100%, 42rem, calc((100svh - 31rem) * ${VISTA_MOVIL.w / VISTA_MOVIL.h}))` }}
          />
        </div>
      </div>

      {/* La calle: franja de ancho completo al pie del hero, a la altura de la base del cerro */}
      <div aria-hidden="true" className="relative h-9 border-y-2 border-tinta bg-papel lg:h-11">
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tinta/25" />
      </div>
    </section>
  );
}

function Ilustracion({
  vista,
  simple = false,
  className,
  style,
}: {
  vista: Vista;
  simple?: boolean;
  className: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: `${vista.w} / ${vista.h}`, ...style }}>
      <svg
        viewBox={viewBox(vista)}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Ilustración de un cerro de Valparaíso con casas de colores, postes con cables y un ascensor."
      >
        <CerroIlustracion id={simple ? 'cerro-movil' : 'cerro'} simple={simple} />
      </svg>
      <CabinaAscensor vista={vista} />
    </div>
  );
}
