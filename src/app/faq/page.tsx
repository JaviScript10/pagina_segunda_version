import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BotonWhatsApp } from '@/components/piezas';
import { withMoney } from '@/lib/money';
import { CONTACT_EMAIL, whatsappUrl } from '@/lib/site';
import { HOSTING_TERM, PAYMENT_TERM, formatCLP, formatFrom, getService, pricing } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  alternates: { canonical: '/faq' },
};

const landing = getService('landing');
const corporativo = getService('corporativo');
const tienda = getService('tienda');
const medida = getService('medida');
const mantencion = getService('mantencion');
const soportePc = getService('soporte-pc');

// Solo respuestas que salen de data/pricing.ts o de DESIGN.md: nada que no esté en la oferta
const FAQS = [
  {
    pregunta: '¿Cuánto cuesta una página web?',
    respuesta: `Una landing page parte en ${formatCLP(landing.from)}, un sitio corporativo en ${formatCLP(corporativo.from)}, una tienda online en ${formatCLP(tienda.from)} y un sistema o app a medida en ${formatCLP(medida.from)}. ${pricing.ivaNote}`,
  },
  {
    pregunta: '¿Cuánto me demoro en hacerla?',
    respuesta: `Una landing page toma ${landing.timeline}, un sitio corporativo ${corporativo.timeline} y una tienda online ${tienda.timeline}. Un sistema a medida depende del alcance. Te confirmo el plazo junto con el precio final, antes de empezar.`,
  },
  {
    pregunta: '¿Cómo es la forma de pago?',
    respuesta: PAYMENT_TERM,
  },
  {
    pregunta: '¿El dominio y el hosting están incluidos?',
    respuesta: `No. ${HOSTING_TERM}`,
  },
  {
    pregunta: '¿Voy a poder cambiar los textos yo mismo?',
    respuesta: `Depende del sitio. El sitio corporativo incluye textos editables y la tienda online, un panel para editar productos y precios. Para lo demás está la mantención mensual, que incluye cambios menores.`,
  },
  {
    pregunta: '¿Qué pasa después de publicar?',
    respuesta: `Puedes contratar la mantención mensual, ${formatFrom(mantencion)}: ${mantencion.includes.toLowerCase()}. Los cambios más grandes los cotizo aparte y te doy el precio antes de hacerlos.`,
  },
  {
    pregunta: '¿Se va a ver bien en el celular?',
    respuesta: 'Sí. Diseño cada sitio pensando primero en el celular y lo reviso también en tablet y computador.',
  },
  {
    pregunta: '¿Con quién voy a hablar?',
    respuesta: 'Conmigo. Soy la misma persona que construye el sitio, desde la primera conversación hasta la entrega. No hay intermediarios.',
  },
  {
    pregunta: '¿Trabajas solo en Valparaíso?',
    respuesta: 'No. Mi base es Valparaíso, pero trabajo de forma remota con clientes de todo Chile y nos coordinamos por WhatsApp.',
  },
  {
    pregunta: '¿También arreglas computadores?',
    respuesta: `Sí, ${formatFrom(soportePc)}: ${soportePc.includes.toLowerCase()}. Como es presencial, es solo para Valparaíso y alrededores.`,
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-papel pt-20 text-tinta">
        <section aria-labelledby="faq-titulo" className="py-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h1 id="faq-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                  Preguntas frecuentes
                </h1>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-tinta/70">
                  Lo que más me preguntan antes de empezar un proyecto.
                </p>
              </div>
            </div>

            <div className="border-t border-tinta/15 lg:col-span-8">
              {FAQS.map((faq) => (
                <details key={faq.pregunta} className="group border-b border-tinta/15">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm py-6 font-display text-xl font-bold tracking-[-0.01em] transition-colors duration-150 ease-out hover:text-cerro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro sm:text-2xl [&::-webkit-details-marker]:hidden">
                    {faq.pregunta}
                    {/* Más que gira a cruz al abrir */}
                    <span aria-hidden="true" className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-niebla text-tinta transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-4 w-4">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-8 pr-14 text-lg leading-relaxed text-tinta/75">{withMoney(faq.respuesta)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-cierre" className="bg-niebla py-20 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-xl">
              <h2 id="faq-cierre" className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                ¿Te quedó una duda?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-tinta/70">
                Pregúntame directo. También puedes escribirme a{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-bold text-cerro underline decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
            <BotonWhatsApp href={whatsappUrl('Hola, tengo una pregunta que no está en el FAQ de CiberByte.')} className="self-start lg:self-auto">
              Escríbeme por WhatsApp
            </BotonWhatsApp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
