import { FaWhatsapp } from 'react-icons/fa';
import { formatCLP, getService, pricing } from '@/data/pricing';
import { whatsappUrl } from '@/lib/site';
import { Money } from '@/lib/money';

// Desarrollo y mantención en la tabla; el soporte de PC (presencial) va aparte
const MAIN = pricing.items.filter((i) => i.kind !== 'presencial');
const PC = getService('soporte-pc');

export default function Pricing() {
  return (
    <section id="precios" aria-labelledby="precios-titulo" className="bg-niebla py-20 text-tinta lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="precios-titulo" className="font-display text-4xl font-extrabold tracking-[-0.02em] lg:text-5xl">
            Qué hago y cuánto cuesta
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/80">
            Estos son los precios base. Antes de empezar te cotizo según lo que necesites.
          </p>
        </div>

        <ul className="mt-14 border-b-2 border-tinta">
          {MAIN.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-6 gap-y-4 border-t-2 border-tinta py-7 lg:grid-cols-[minmax(0,1fr)_11rem_15rem] lg:items-baseline lg:gap-x-10"
            >
              <div className="col-span-2 lg:col-span-1">
                <h3 className="font-display text-2xl font-extrabold tracking-[-0.01em]">{item.name}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-tinta/80">{item.includes}.</p>
              </div>

              <p className="text-tinta/80">
                {item.timeline && (
                  <>
                    <span className="block text-sm font-bold text-tinta">Plazo típico</span>
                    {item.timeline}
                  </>
                )}
              </p>

              <p className="text-right">
                <span className="block text-sm font-bold">desde</span>
                <Money>
                  <span className="text-[2rem] leading-none lg:text-[2.25rem]">{formatCLP(item.from)}</span>
                  {item.per && <span className="text-lg">/{item.per}</span>}
                </Money>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-[70ch] text-tinta/75">
          {pricing.ivaNote} {pricing.terms.join(' ')}
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Servicio secundario y presencial: bloque aparte, más chico que la tabla */}
          <div className="rounded-lg border-2 border-tinta/20 bg-papel p-6 lg:col-span-6">
            <h3 className="text-balance font-display text-xl font-extrabold">También hago {PC.name.charAt(0).toLowerCase() + PC.name.slice(1)}</h3>
            <p className="mt-2 leading-relaxed text-tinta/80">
              {PC.includes}, desde <Money>{formatCLP(PC.from)}</Money>. Es presencial: solo en Valparaíso y alrededores.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg font-bold">¿No sabes cuál necesitas? Cuéntame tu idea y te digo.</p>
            <a
              href={whatsappUrl('Hola, vengo desde el sitio de CiberByte. Quiero cotizar un proyecto.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 rounded-lg border-2 border-tinta bg-calamina px-6 py-3.5 text-lg font-bold text-tinta transition-[transform,background-color] duration-150 ease-out hover:bg-calamina/85 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro motion-reduce:transition-none"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
