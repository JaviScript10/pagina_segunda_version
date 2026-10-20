import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '@/lib/site';
import LogoWhatsApp from './LogoWhatsApp';

const SITIO = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Preguntas frecuentes', href: '/faq' },
];

const LEGAL = [
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Política de cookies', href: '/cookies' },
];

const enlace =
  'rounded-sm transition-colors duration-150 ease-out hover:text-cerro hover:underline hover:decoration-2 hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro';

export default function Footer() {
  return (
    <footer className="bg-niebla text-tinta">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* Logo actual (se redibuja en la próxima etapa) */}
            <a href="/" className={`inline-flex items-center gap-2.5 ${enlace} hover:no-underline`}>
              <img src="/favicon.svg" alt="" className="h-8 w-8" />
              <span className="font-display text-[1.375rem] font-extrabold tracking-[-0.01em]">CiberByte</span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-tinta/70">
              Sitios web y sistemas a medida, desde Valparaíso para todo Chile.
            </p>
          </div>

          <nav aria-label="Sitio" className="lg:col-span-2">
            <h2 className="text-sm font-bold text-tinta/55">Sitio</h2>
            <ul className="mt-4 space-y-2.5">
              {SITIO.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={enlace}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="lg:col-span-2">
            <h2 className="text-sm font-bold text-tinta/55">Legal</h2>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={enlace}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-tinta/55">Contacto</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={enlace}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${enlace}`}>
                  <LogoWhatsApp size={16} />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="text-tinta/70">Valparaíso, Chile</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-tinta/15 pt-6 text-sm text-tinta/60">© {new Date().getFullYear()} CiberByte</p>
      </div>
    </footer>
  );
}
