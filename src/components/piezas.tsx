// Piezas compartidas de las secciones de proyectos y precios.
import type { ReactNode } from 'react';
import LogoWhatsApp from './LogoWhatsApp';
import type { RealProject } from '@/data/projects';

/** Flecha diagonal de línea fina (1.5), para links y botones. */
export function Flecha({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 11 11 5M6.5 5H11v4.5" />
    </svg>
  );
}

/** Ícono anidado al final de un botón: se desplaza en diagonal al pasar el mouse. */
export function IconoAnidado({ className = 'bg-tinta/10' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-md transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5 ${className}`}
    >
      <Flecha />
    </span>
  );
}

/**
 * Botón de WhatsApp con logo oficial, texto e ícono anidado.
 * `inverso`: fondo blanco para fondos oscuros. `grande`: para el cierre de la página.
 */
export function BotonWhatsApp({
  href,
  children,
  className = '',
  inverso = false,
  grande = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  inverso?: boolean;
  grande?: boolean;
}) {
  const tamano = grande ? 'py-2 pl-5 pr-2 text-lg' : 'py-1.5 pl-4 pr-1.5 text-[0.9375rem]';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${inverso ? 'btn-whatsapp-inverso' : 'btn-whatsapp'} group ${tamano} ${className}`}
    >
      <LogoWhatsApp size={grande ? 22 : 18} />
      <span className="flex-1 text-left">{children}</span>
      <IconoAnidado className={`${inverso ? 'bg-tinta/10' : 'bg-papel/15'} ${grande ? 'h-10 w-10' : ''}`} />
    </a>
  );
}

/** Dónde o para quién: "Valparaíso", "Tresmontes Lucchetti". */
export function lugar(p: RealProject): string | null {
  if (p.collaboration) return 'Colaboración';
  return p.client ?? p.location ?? null;
}

/** Stack separado por comas (el brief evita los textos "A · B"). */
export const stack = (p: RealProject) => p.stack.join(', ');

/** Rol corto para fichas: la primera cláusula del rol. */
export function rolCorto(p: RealProject): string {
  const rol = p.role ?? '';
  const corte = rol.split(/,| desde | incluido /)[0];
  return corte.charAt(0).toUpperCase() + corte.slice(1);
}
