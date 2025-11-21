'use client';

import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHeart,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { label: 'Landing Pages', href: '#servicios' },
      { label: 'Sitios Corporativos', href: '#servicios' },
      { label: 'E-commerce', href: '#servicios' },
      { label: 'Apps Móviles', href: '#servicios' },
    ],
    empresa: [
      { label: 'Sobre Nosotros', href: '#nosotros' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política de Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                CiberByte
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformamos ideas en experiencias digitales excepcionales. Desarrollo web,
              apps y e-commerce con tecnología de punta.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} CiberByte. Todos los derechos reservados.
            </p>

            {/* Made with Love */}
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Hecho con</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>en Chile</span>
            </p>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#inicio" className="text-gray-400 hover:text-primary-400 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-400 hover:text-primary-400 transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-primary-400 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
