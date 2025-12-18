'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Logo variant="horizontal" size="md" theme="dark" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group text-gray-300 font-medium px-1 transition-colors hover:text-white"
              >
                {link.label}
                {/* Línea animada */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-gray-50 z-50 md:hidden overflow-y-auto p-6">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="text-lg font-semibold text-gray-900">{link.label}</span>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mt-2" />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
