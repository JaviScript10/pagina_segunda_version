'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo cargado desde la carpeta public */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-3">
          <img 
            src="/favicon.svg" 
            alt="CiberByte Logo" 
            className="w-9 h-9 object-contain" 
          />
          <span>Ciber<span className="text-primary-500">Byte</span></span>
        </Link>

        {/* Menú de Navegación alineado hacia la derecha */}
        <nav className="hidden md:flex items-center gap-8 ml-auto pr-6">
          {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => {
            const href = item === 'Inicio' ? '#inicio' : `#${item.toLowerCase()}`;
            return (
              <a 
                key={item} 
                href={href} 
                className="relative text-gray-200 hover:text-white font-semibold text-base transition-colors py-2 group"
              >
                {item}
                {/* Línea azul animada inferior al hacer hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        {/* Botón Menú Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white text-2xl focus:outline-none p-2 ml-auto"
          aria-label="Menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-white/10 px-6 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-primary-400 font-semibold text-lg py-2">Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-primary-400 font-semibold text-lg py-2">Servicios</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-primary-400 font-semibold text-lg py-2">Proyectos</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-primary-400 font-semibold text-lg py-2">Nosotros</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-primary-400 font-semibold text-lg py-2">Contacto</a>
        </div>
      )}

      {/* Línea blanca inferior gruesa y elegante */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
    </header>
  );
}