import { FaLaptopCode, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhatsApp from './LogoWhatsApp';
import Logo from './Logo';
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Sobre Nosotros', href: '/#nosotros' },
    { label: 'Nuestra Historia', href: '/#sobre-mi' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Preguntas Frecuentes', href: '/faq' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  const legalLinks = [
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Política de Cookies', href: '/cookies' },
  ];

  return (
    <>
      <footer className="bg-gray-950 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Footer Content - 4 Columnas balanceadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* 1. Brand Column & Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="mb-2">
                <Logo variant="full" size="md" theme="dark" />
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                Transformamos ideas en experiencias digitales excepcionales. Desarrollo web, apps móviles y soluciones tecnológicas que impulsan tu negocio.
              </p>
              
              {/* Datos de contacto movidos al Footer */}
              <div className="pt-2 space-y-2.5 text-sm text-gray-300">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 hover:text-primary-400 transition-colors w-fit">
                  <FaEnvelope className="text-primary-500 text-xs" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors w-fit">
                  <LogoWhatsApp size={14} />
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
                <div className="flex items-center gap-2.5 text-gray-400">
                  <FaMapMarkerAlt className="text-primary-500 text-xs" />
                  <span>Valparaíso, Chile</span>
                </div>
              </div>
            </div>

            {/* 2. Company Links */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">Empresa</h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200 cursor-pointer text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Legal Links */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">Legal</h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {currentYear} CiberByte. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center space-x-2">
              <span>Creado con Tecnología y Pasión</span>
              <FaLaptopCode className="w-4 h-4 text-primary-500" />
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}