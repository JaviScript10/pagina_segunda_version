'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-xl'
            : 'bg-gray-900 shadow-md'
          }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              aria-label="CiberByte - Inicio"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">
                CiberByte
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-primary-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full"></span>
                </button>
              ))}
              <a
                href="#contacto"
                className="btn-primary"
              >
                Cotizar Proyecto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE MENU NUEVO (TU VERSIÓN) --- */}
      {isMenuOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel del menú */}
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-gray-50 z-50 md:hidden overflow-y-auto p-6">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {link.label}
                  </span>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mt-2" />
                </a>
              ))}

              {/* Botón CTA en móvil */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all mt-6"
              >
                Cotizar Proyecto
              </button>
            </div>
          </div>
        </>
      )}
      {/* --- FIN MOBILE MENU --- */}
    </>
  );
}
