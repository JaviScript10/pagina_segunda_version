'use client';

import { useState } from 'react';
import { FaLaptopCode, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Nuestra Historia', href: '#', action: 'modal' }, // Modal trigger
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Preguntas Frecuentes', href: '/faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const legalLinks = [
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Política de Cookies', href: '/cookies' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    if (link.action === 'modal') {
      e.preventDefault();
      setIsHistoryModalOpen(true);
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="mb-4">
                <Logo variant="full" size="md" theme="dark" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transformamos ideas en experiencias digitales excepcionales. Desarrollo web,
                apps móviles y soluciones tecnológicas que impulsan tu negocio.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Empresa</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} CiberByte. Todos los derechos reservados.
              </p>
              <p className="text-gray-300 text-sm flex items-center space-x-2">
                <span>Creado con Tecnología y Pasión</span>
                <FaLaptopCode className="w-5 h-5 text-primary-500" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL NUESTRA HISTORIA */}
      {isHistoryModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsHistoryModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10 rounded-t-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Nuestra Historia
              </h2>
              <button
                onClick={() => setIsHistoryModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Cerrar"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Imagen opcional */}
              <div className="relative rounded-xl overflow-hidden mb-6 h-48 md:h-64">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/historia.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Texto */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  CiberByte nació de la pasión por crear soluciones digitales que realmente
                  marquen la diferencia. Sabemos que cada proyecto es único y merece atención
                  personalizada.
                </p>
                <p>
                  Trabajamos con startups, PyMEs y empresas establecidas, ayudándolas a
                  establecer o mejorar su presencia en línea con tecnología de punta y diseño
                  excepcional.
                </p>
                <p>
                  Nuestro enfoque combina creatividad, tecnología y estrategia para entregar
                  productos que no solo se ven bien, sino que funcionan perfectamente y
                  generan resultados medibles.
                </p>

                {/* Stats mini */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                    <div className="text-sm text-gray-600">Años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Entrega</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setIsHistoryModalOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector('#contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 300);
                  }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Trabajemos Juntos
                </button>
                <button
                  onClick={() => setIsHistoryModalOpen(false)}
                  className="bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
