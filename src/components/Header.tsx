'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // El menú móvil se cierra con Escape, igual que los modales
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-tinta/15 bg-niebla text-tinta">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
        >
          <img src="/favicon.svg" alt="" className="h-8 w-8" />
          <span className="font-display text-[1.375rem] font-extrabold tracking-[-0.01em]">CiberByte</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => {
              const current = item.href === pathname;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`text-[1.0625rem] font-bold underline-offset-[6px] decoration-2 transition-colors duration-150 ease-out hover:text-cerro hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro ${
                      current ? 'underline decoration-tinta' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          className="-mr-2 flex items-center gap-2 rounded-lg px-3 py-2 font-bold transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cerro md:hidden"
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          Menú
        </button>
      </div>

      {isOpen && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-tinta/15 bg-niebla md:hidden">
          <ul className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-tinta/10 last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={item.href === pathname ? 'page' : undefined}
                  className="block py-4 font-display text-2xl font-bold active:text-cerro aria-[current=page]:underline aria-[current=page]:underline-offset-[6px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
