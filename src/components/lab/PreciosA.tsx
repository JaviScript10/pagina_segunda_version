import { formatCLP, getService, pricing, type PricingItem, type ServiceId } from '@/data/pricing';
import { whatsappUrl } from '@/lib/site';
import { Money } from '@/lib/money';
import { BotonWhatsApp } from './comun';

/*
 * Precios A: bento de tarjetas con marco doble. Tres servicios web en fila, el sistema a medida
 * como pieza oscura a todo el ancho, y abajo la mantención y el soporte de PC (secundario).
 */

const cotizar = (s: PricingItem) => whatsappUrl(`Hola, vengo desde el sitio de CiberByte. Quiero cotizar: ${s.name}.`);
const incluye = (s: PricingItem) => s.includes.split(/,\s*/);

export default function PreciosA() {
  const web: ServiceId[] = ['landing', 'corporativo', 'tienda'];
  const medida = getService('medida');
  const mantencion = getService('mantencion');
  const pc = getService('soporte-pc');

  return (
    <section aria-labelledby="precios-a-titulo" className="bg-papel py-24 text-tinta lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="precios-a-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:col-span-7 lg:text-[5rem]">
            Qué hago y
            <br />
            cuánto cuesta.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-tinta/70 lg:col-span-5 lg:justify-self-end">{pricing.ivaNote}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-24 lg:grid-cols-12 lg:gap-6">
          {web.map((id) => (
            <Tarjeta key={id} s={getService(id)} className="lg:col-span-4" />
          ))}

          {/* Sistema o app a medida: la pieza oscura, a todo el ancho */}
          <div className="rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06] lg:col-span-12">
            <div className="grid gap-8 rounded-[calc(1rem-0.375rem)] bg-tinta p-8 text-papel sm:p-10 lg:grid-cols-12 lg:items-end lg:p-12">
              <div className="lg:col-span-6">
                <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em] lg:text-4xl">{medida.name}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-papel/70">
                  Sistemas internos, paneles y apps para equipos: como ClipControl o el automatizador de cartas. {medida.includes}.
                </p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm text-papel/60">desde</p>
                <Money>
                  <span className="text-5xl leading-none">{formatCLP(medida.from)}</span>
                </Money>
                <p className="mt-2 text-sm text-papel/60">Plazo: {medida.timeline?.toLowerCase()}</p>
              </div>
              <div className="lg:col-span-3 lg:justify-self-end">
                <BotonWhatsApp href={cotizar(medida)} className="w-full lg:w-auto">
                  Cotizar por WhatsApp
                </BotonWhatsApp>
              </div>
            </div>
          </div>

          <Tarjeta s={mantencion} className="lg:col-span-7" horizontal />

          {/* Secundario y presencial */}
          <div className="flex flex-col justify-center rounded-2xl bg-niebla p-8 ring-1 ring-tinta/[0.06] lg:col-span-5 lg:p-10">
            <h3 className="font-display text-xl font-extrabold">También hago soporte de PC</h3>
            <p className="mt-2 leading-relaxed text-tinta/70">
              {pc.includes}, desde <Money>{formatCLP(pc.from)}</Money>. Es presencial: solo en Valparaíso y alrededores.
            </p>
            <a
              href={cotizar(pc)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-bold text-cerro underline decoration-2 underline-offset-[6px] hover:text-tinta"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tarjeta({ s, className, horizontal = false }: { s: PricingItem; className: string; horizontal?: boolean }) {
  return (
    <div className={`rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06] ${className}`}>
      <div
        className={`flex h-full flex-col rounded-[calc(1rem-0.375rem)] bg-papel p-8 shadow-[inset_0_1px_0_rgb(255_255_255)] sm:p-9 ${
          horizontal ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10' : ''
        }`}
      >
        <div className={horizontal ? undefined : 'flex-1'}>
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.01em]">{s.name}</h3>
          <p className="mt-1 text-sm text-tinta/55">{s.timeline ? `Plazo típico: ${s.timeline}` : s.per === 'mes' ? 'Pago mensual' : ''}</p>

          <p className="mt-8">
            <span className="block text-sm text-tinta/55">desde</span>
            <Money>
              <span className="text-[2.75rem] leading-none tracking-[-0.02em]">{formatCLP(s.from)}</span>
              {s.per && <span className="text-lg text-tinta/55">/{s.per}</span>}
            </Money>
          </p>

          <ul className="mt-8 space-y-2.5 border-t border-tinta/10 pt-6 text-[0.9375rem]">
            {incluye(s).map((i) => (
              <li key={i} className="flex gap-3">
                <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-cerro" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                <span className="text-tinta/80">{i.charAt(0).toUpperCase() + i.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>

        <BotonWhatsApp href={cotizar(s)} className={`mt-10 w-full ${horizontal ? 'lg:mt-0 lg:w-auto' : ''}`}>
          Cotizar por WhatsApp
        </BotonWhatsApp>
      </div>
    </div>
  );
}
