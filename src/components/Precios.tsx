import LogoWhatsApp from './LogoWhatsApp';
import { formatCLP, getService, pricing, type PricingItem } from '@/data/pricing';
import { whatsappUrl } from '@/lib/site';
import { Money } from '@/lib/money';
import { IconoAnidado } from './piezas';

/*
 * Precios: carta de precios. Intro fija a la izquierda; a la derecha cada servicio es una fila
 * tipográfica (nombre grande, qué incluye, plazo y monto) con su botón para cotizarlo.
 */

const cotizar = (s: PricingItem) => whatsappUrl(`Hola, vengo desde el sitio de CiberByte. Quiero cotizar: ${s.name}.`);

export default function Precios() {
  const filas = pricing.items.filter((i) => i.kind !== 'presencial');
  const pc = getService('soporte-pc');

  return (
    <section id="precios" aria-labelledby="precios-titulo" className="bg-papel py-24 text-tinta lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="precios-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Precios claros, sin sorpresas.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-tinta/70">{pricing.ivaNote}</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          {/* Marco doble sobre Papel: carcasa Niebla y núcleo Papel */}
          <div className="rounded-2xl bg-niebla p-1.5 ring-1 ring-tinta/[0.06]">
          <ul className="rounded-[calc(1rem-0.375rem)] bg-papel">
            {filas.map((s, i) => (
              <li key={s.id} className={i > 0 ? 'border-t border-tinta/[0.08]' : undefined}>
                <div className="grid grid-cols-1 gap-5 rounded-xl px-6 py-7 transition-colors duration-200 ease-out sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-8 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-niebla/70">
                  <div>
                    <h3 className="font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em]">{s.name}</h3>
                    <p className="mt-2 max-w-[44ch] text-[0.9375rem] leading-relaxed text-tinta/65">{s.includes}.</p>
                    {s.timeline && (
                      <p className="mt-3 inline-flex rounded bg-niebla px-2 py-0.5 text-sm text-tinta/70">Plazo típico: {s.timeline.charAt(0).toLowerCase() + s.timeline.slice(1)}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 sm:flex-col sm:flex-nowrap sm:items-end sm:gap-4">
                    <p className="sm:text-right">
                      <span className="block text-sm text-tinta/70">desde</span>
                      <Money>
                        <span className="text-[2.25rem] leading-none tracking-[-0.02em]">{formatCLP(s.from)}</span>
                        {s.per && <span className="text-base text-tinta/70">/{s.per}</span>}
                      </Money>
                    </p>
                    <a
                      href={cotizar(s)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Cotizar ${s.name} por WhatsApp`}
                      className="btn-whatsapp group py-1.5 pl-3.5 pr-1.5 text-sm"
                    >
                      <LogoWhatsApp size={16} />
                      Cotizar
                      <IconoAnidado className="bg-papel/15" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-tinta/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="max-w-lg leading-relaxed text-tinta/75">
              <span className="font-bold text-tinta">También hago soporte de PC:</span> {pc.includes.toLowerCase()}, desde{' '}
              <Money>{formatCLP(pc.from)}</Money>. Presencial, solo en Valparaíso y alrededores.
            </p>
            <a
              href={cotizar(pc)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar ${pc.name} por WhatsApp`}
              className="btn-whatsapp group shrink-0 self-start py-1.5 pl-3.5 pr-1.5 text-sm sm:self-auto"
            >
              <LogoWhatsApp size={16} />
              Cotizar
              <IconoAnidado className="bg-papel/15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
