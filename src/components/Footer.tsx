'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaLaptopCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Preguntas Frecuentes', href: '/faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const legalLinks = [
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Política de Cookies', href: '/cookies' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/company/ciberbyte', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/ciberbyte', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/ciberbyte', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/ciberbyte', label: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/ciberbyte', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-2xl font-bold">CiberByte</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformamos ideas en experiencias digitales excepcionales. Desarrollo web,
              apps móviles y soluciones tecnológicas que impulsan tu negocio.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
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
  );
}