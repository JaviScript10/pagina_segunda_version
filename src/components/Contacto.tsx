import { CONTACT_EMAIL, whatsappUrl } from '@/lib/site';
import { BotonWhatsApp } from './piezas';

/*
 * Contacto (DESIGN.md §5): WhatsApp como canal principal y el email como alternativa, con el
 * tiempo de respuesta real. Sobre Tinta, como cierre de la página: botón en su variante inversa.
 */
export default function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-tinta py-24 text-papel lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <h2 id="contacto-titulo" className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[5.5rem]">
            Cuéntame
            <br />
            tu idea.
          </h2>
          <p className="mt-8 flex items-center gap-3 text-lg text-papel/80">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-calamina" />
            Respondo en menos de 24 horas.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end">
          <BotonWhatsApp href={whatsappUrl('Hola, vengo desde el sitio de CiberByte.')} inverso grande>
            Escríbeme por WhatsApp
          </BotonWhatsApp>
          <p className="text-papel/75">
            O si prefieres, al correo{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-bold text-papel underline decoration-papel/40 decoration-2 underline-offset-[6px] transition-colors duration-150 ease-out hover:decoration-calamina focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-calamina"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
